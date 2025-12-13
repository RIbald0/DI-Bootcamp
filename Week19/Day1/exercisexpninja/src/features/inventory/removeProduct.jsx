import { useDispatch } from "react-redux";
import { removeProduct } from "./inventorySlice";

const RemoveProduct = (props) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeProduct(props.id));

    }

    return (
        <button onClick={handleRemove}>Delete</button>
    )
}

export default RemoveProduct;