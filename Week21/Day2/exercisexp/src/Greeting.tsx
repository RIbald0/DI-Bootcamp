interface GreetingProps {
    name: string;
    messageCount: number
};

const Greeting: React.FC<GreetingProps> = ({ name , messageCount}) => {
    return <h1>Hello, {name}! {messageCount}</h1>
};

export default Greeting;