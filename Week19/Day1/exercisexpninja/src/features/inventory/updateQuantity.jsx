import { useDispatch } from "react-redux";
import { updateQuantity } from "./inventorySlice";
import { useState } from "react";

const UpdateQuantity = (props) => {
    const dispatch = useDispatch();
    const [newQty , setNewQty] = useState('');


    const handleUpdate = () => {
            dispatch(updateQuantity({
                id: props.id,
                quantity: Number(newQty)
            }))
            setNewQty('')
    }

    return (
        <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
            <input
            type="number"
            value={newQty}
            onChange={(e) => setNewQty(e.target.value)}
            placeholder="New Qty"
             />
             <button onClick={handleUpdate}>Edit Quantity</button>
        </div>

    )
}

export default UpdateQuantity;
