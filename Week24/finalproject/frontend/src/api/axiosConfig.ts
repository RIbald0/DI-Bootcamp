import axios from "axios";

const api = axios.create({
    // Uses environment variable for production or local port for development
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
    withCredentials: true, // Necessary to send and receive secure cookies (Refresh Token)
});

// REQUEST INTERCEPTOR (Outgoing)
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token){
        // Automatically attaches the JWT to every outgoing request
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// RESPONSE INTERCEPTOR (Incoming)
api.interceptors.response.use(
    (response) => response, // If request is successful, do nothing
    async (error) => {
        const originalRequest = error.config;
        

        //If the error is a 401 but it's from the LOGIN or REFRESH endpoints, STOP.
        if (
            originalRequest.url.includes('/auth/login') || 
            originalRequest.url.includes('/auth/refresh-token')
        ) {
            return Promise.reject(error);
        }

        // If the error is 401 (Expired) and we haven't already tried to refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // 1. Call your refresh endpoint to get a new access token
                // Your backend should check the cookie and return a new token
                const res = await api.post('/auth/refresh-token');
                
                const { accessToken } = res.data;

                // 2. Save the new token in local storage for future requests
                localStorage.setItem('token', accessToken);

                // 3. Update the header and retry the original request
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

                return axios(originalRequest);
                
            } catch (refreshError) {
                // 4. If refresh fails, the Refresh Token is also expired -> Logout
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                
                if (!window.location.pathname.includes('/login')) {
                    window.location.href = '/login';
                }
                
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;