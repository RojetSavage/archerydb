import express from "express";
import { checkIfStageScoreExists, getStageId, addStageScore, addEndsToStage } from '../controllers/scoreControllers.js';

const scoreRouter = express.Router();

scoreRouter.post('/id', getStageId)
scoreRouter.post('/exists', checkIfStageScoreExists)
scoreRouter.post('/add', addStageScore)
scoreRouter.post('/ends/add', addEndsToStage)

export default scoreRouter;