import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Compra from './models/Compra';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost/tu_basedatos';

// Conectar a MongoDB
mongoose.connect(MONGO_URI).then( 
    () => { console.log('Conexión a MongoDB exitosa'); }, 
    (err) => { console.error('Error al conectar a MongoDB:', err); }
);
app.use(express.json());

// Endpoint para obtener todos los productos de la tienda
app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api-catalog-main-production.up.railway.app/api/product');
    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener un producto específico por ID
app.get('/api/products/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api-catalog-main-production.up.railway.app/api/product/${id}`);
    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para almacenar una compra
app.post('/api/compras', async (req: Request, res: Response) => {
  try {
    const nuevaCompra = new Compra(req.body);
    await nuevaCompra.save();
    res.status(201).json(nuevaCompra);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
