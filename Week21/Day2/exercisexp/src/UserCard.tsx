interface UserProps {
    name?: string;
    age?: number;
    role?: string;
};

const User: React.FC<UserProps> = ({ name = "Matteo" , age = 37 , role = "Technical Support"}) => {
    return <h1>{name}, {age}, {role}</h1>
}

export default User;