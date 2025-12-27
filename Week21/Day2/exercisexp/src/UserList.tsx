import { useState , useEffect } from "react";

interface UserInfo {
    id: number;
    name: string;
    email: string;
};

const UserList: React.FC = () => {

    const [userList, setUserList] = useState<UserInfo[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const [failed, setFailed] = useState<string>("");

useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);

            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
                throw new Error("Sorry, something went wrong!");
            }

            const data = await response.json();
            setUserList(data);
        } catch (error: any){
            setFailed(error.message);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
}, []);

if(loading) return <p>Loading...</p>;
if(failed) return <p>Error: {failed}</p>;

return (
    <ul>
      {userList.map((user) => (
        <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
)
}

export default UserList;
