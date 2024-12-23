import { Schema, model } from 'mongoose';

interface ICompra {
  pedidoId: string;
  fechaCompra: Date;
  documentoCliente: string;
  productosIds: string[];
  cantidadProductos: number;
  precioTotal: number;
}

const CompraSchema = new Schema<ICompra>({
  pedidoId: { type: String, required: true },
  fechaCompra: { type: Date, required: true },
  documentoCliente: { type: String, required: true },
  productosIds: { type: [String], required: true },
  cantidadProductos: { type: Number, required: true },
  precioTotal: { type: Number, required: true },
});

const Compra = model<ICompra>('Compra', CompraSchema);
export default Compra;
