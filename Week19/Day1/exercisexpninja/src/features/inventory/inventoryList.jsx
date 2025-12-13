import { useSelector } from "react-redux";
import UpdateQuantity from "./UpdateQuantity";
import RemoveProduct from "./RemoveProduct";

const InventoryList = () => {

    const inventories = useSelector(state => state.inventories.inventory)
    console.log("Current Inventory Data:", inventories);
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {inventories.map((item) => (
                <li key={item.id} 
                style={{ 
                    marginBottom: '15px', 
                    padding: '15px', 
                    border: '1px solid #ddd', 
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'black'}}>
                            NAME: {item.name}
                        </span>
                        <span style={{ color: '#555' }}>
                            Current Qty: <strong>{item.quantity}</strong>
                        </span>
                    </div>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid #eee',
                        paddingTop: '10px'
                    }}>
                        <UpdateQuantity id={item.id} />
                        <RemoveProduct id={item.id} />
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default InventoryList;