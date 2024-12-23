import { Schema, model } from 'mongoose';

interface IProducto {
  productId: string;
  productName: string;
  price: number;
  brand: string;
  linkText: string;
  releaseDate: Date;
  categories: string[];
  link: string;
  paisDeFabricacion: string[];
  registroSic: string[];
  composicion: string[];
  especificaciones: string[];
  color: string[];
  cuidado: string[];
  categoria: string[];
  genero: string[];
  images: Array<{
    imageId: string;
    imageUrl: string;
    imageText: string;
  }>;
  skuSpecifications: Array<{
    id: string;
    name: string;
    position: number;
    quantity: number;
  }>;
}

const ProductoSchema = new Schema<IProducto>({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  linkText: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  categories: { type: [String], required: true },
  link: { type: String, required: true },
  paisDeFabricacion: { type: [String], required: true },
  registroSic: { type: [String], required: true },
  composicion: { type: [String], required: true },
  especificaciones: { type: [String], required: true },
  color: { type: [String], required: true },
  cuidado: { type: [String], required: true },
  categoria: { type: [String], required: true },
  genero: { type: [String], required: true },
  images: [{
    imageId: { type: String, required: true },
    imageUrl: { type: String, required: true },
    imageText: { type: String, required: true },
  }],
  skuSpecifications: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: Number, required: true },
    quantity: { type: Number, required: true },
  }],
});

const Producto = model<IProducto>('Producto', ProductoSchema);
export default Producto;
