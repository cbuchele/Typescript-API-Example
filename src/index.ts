import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Hello World Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!'); 
});

// CRUD Routes

// Create
app.post('/items', (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send('Name is required'); // Do not return anything
    return; 
  }
  const newItem = { id: 1, name }; // Simplified for example
  res.status(201).send(newItem); // Do not return anything
});

// Read All
app.get('/items', (req: Request, res: Response) => {
  res.send([{ id: 1, name: 'Item 1' }]); // Do not return anything
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});