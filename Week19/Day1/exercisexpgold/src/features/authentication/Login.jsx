import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser , setUser , logoutUser } from "./authSlice";

export default function Auth() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    const [username , setUsername] = useState('')

    const handleLogin = () => {
        dispatch(setUser({ name : username }));
        dispatch(loginUser())
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc" }}>
            {isAuth ? (
            <div>
            <h2>Welcome back, {user?.name}!</h2>
            <button onClick={() => dispatch(logoutUser())}>Logout</button>
        </div>
    ) : (
        <div>
            <h2>Please Login</h2>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username..."
                    />
                    <button onClick={handleLogin}>Login</button>
        </div>
    )}
    </div>
    )
}    