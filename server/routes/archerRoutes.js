import express from "express";
import { getAllArchers, createArcher, updateArcher } from '../controllers/archerControllers.js';

const archerRoutes = express.Router()

archerRoutes.get('/', getAllArchers)
archerRoutes.post('/', createArcher)
archerRoutes.post('/id', updateArcher)

export default archerRoutes;
