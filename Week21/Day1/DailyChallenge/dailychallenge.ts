type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

function handleData(a: (User | Product | Order)[]): string[] {
    return a.map(item => {
        if(item.type === 'user'){
            return `Hello ${item.name},${item.age}`
        } else if(item.type === 'product'){
            return `Product ID: ${item.id}, Product price: ${item.price}`
        } else if(item.type === 'order'){
            return `Order ID: ${item.orderId}, Amount: ${item.amount}`
        }
        throw new Error(
            "Invalid argument. The type must be either user, product or order"
        )
    })
}


const myData: (User | Product | Order)[] = [
    { type: 'user', name: "Alice", age: 25 },
    { type: 'product', id: 101, price: 99.99 },     
    { type: 'order', orderId: "ORD-55", amount: 250 }
];

const result = handleData(myData);
console.log(result);

