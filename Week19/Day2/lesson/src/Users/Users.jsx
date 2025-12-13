import { useEffect , useRef } from "react";
import { fetchUsers } from "./usersSlice";
import { useSelector , useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

export default function Users() {
    const users = useSelector((state) => state.usersReducer.users)
    const status = useSelector((state) => state.usersReducer.status)
    const dispatch = useDispatch();
    const nameRef = useRef();

    useEffect(()=> {
        dispatch(fetchUsers())

    },[])

    if(status === 'loading') return <h2>Waiting for users...</h2>
    
    return (
        <>
        <div>
            <input 
            ref={nameRef}
            type="text" />
            <button onClick={() => dispatch(addUser({ name: nameRef.current.value}))}>Add User</button>
        </div>
        {users && users.map((item) => {
            return <div key={item.id}>{item.id}{item.name}</div>           
        })}
        </>
    )
}