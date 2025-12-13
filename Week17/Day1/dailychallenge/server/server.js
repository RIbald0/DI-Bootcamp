import express from 'express'
import cors from 'cors'

const app = express();


app.use(express.json());
app.use(cors());



app.get('/api/hello', (req, res) => {
    res.send('Hello from Express')
})

app.post('/api/world', (req, res) => {
    console.log(req.body)
    const { message } = req.body;
    if (!message) {
        res.status(400).json({ message: 'Message is required.' });
    }
    res.send(`I received your POST request.This is what you sent me: ${message}`)
    return
})


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
});