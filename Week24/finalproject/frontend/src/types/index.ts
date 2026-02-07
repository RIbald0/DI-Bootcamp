export interface User {
    id: number;
    username: string;
    email: string;
}

export interface PollOption {
    id: number;
    option_text: string;
    option?: string; // Optional property to handle naming differences between DB and Frontend
    votes: number;
}

export interface Poll {
    id: number;
    question: string;
    creator_id: number;
    creator_username: string;
    created_at: string;
    is_active: boolean;
    options: PollOption[]; // Nested array representing the One-to-Many relationship
}

export interface AuthResponse {
    message: string;
    user: User; 
    accessToken: string;
}

export interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    loading: boolean; // Used to prevent UI flickering during session checks
}