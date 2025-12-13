import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./inventorySlice";

const AddProd = () => {
    const [name , setname] = useState('');
    const [quantity, setQuantity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(!name.trim() || !quantity.trim()) return;
        dispatch(addProduct({
            id: Date.now(),
            name: name,
            quantity: Number(quantity)
        }));
        setname('');
        setQuantity('');
    }

    return (
        <div
        style={{ 
            display: 'flex', 
            gap: '10px', 
            marginBottom: '20px', 
            padding: '20px', 
            border: '1px solid #eee', 
            borderRadius: '8px', 
            backgroundColor: '#fafafa' 
        }}>
            <input 
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Add a new product..."
            style={{ 
                    padding: '10px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    flexGrow: 1
                }}
            />
            <input 
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Qty"
            style={{ 
                    padding: '10px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    width: '80px' 
                }}
            />
            <button 
            onClick={handleSubmit}
            style={{
                    padding: '10px 20px',
                    backgroundColor: '#28a745', 
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>Add a Product</button>
        </div>
    )
}

export default AddProd;