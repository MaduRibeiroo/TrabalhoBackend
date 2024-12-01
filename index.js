import express from 'express';
import rotaProduto from './Rotas/rotaProdutos.js';
import cors from 'cors';
import dotenv from 'dotenv';
import rotaCategoria from './Rotas/rotaCategoria.js';


dotenv.config();

const host = "0.0.0.0"; 
const porta = 4000;

const app = express(); 
export default app;
app.use(express.json());

app.use(cors());

app.use(cors({
                "origin":"*",
                "Access-Control-Allow-Origin":'*'
        }));


app.use(express.static('./publico'));


app.use("/produtos",rotaProduto);
app.use("/categorias",rotaCategoria);
