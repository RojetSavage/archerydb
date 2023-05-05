import express from 'express';
import { getAllCompetitions, getCompetitionPlayers, removeArcherFromCompetition, addArcherToCompetition, addNewCompetition, getAllCompetitionRounds, getCompetitionRounds, addRoundToCompetition, removeRoundFromCompetition, getPlayersAvailableRounds, getPlayersAvailableBows, getCompetitionStages, getCompetitionPlayersForRound } from '../controllers/competitionControllers.js';

const competitionRouter = express.Router();

competitionRouter.get('/', getAllCompetitions);
competitionRouter.get('/rounds', getAllCompetitionRounds);
competitionRouter.post('/rounds/id', getCompetitionRounds);
competitionRouter.post('/rounds/add', addRoundToCompetition);
competitionRouter.post('/rounds/remove', removeRoundFromCompetition);
competitionRouter.post('/add', addNewCompetition);
competitionRouter.post('/id', getCompetitionPlayers);
competitionRouter.post('/id/round', getCompetitionPlayersForRound);
competitionRouter.post('/archer/remove', removeArcherFromCompetition);
competitionRouter.post('/archer/add', addArcherToCompetition);
competitionRouter.post('/rounds/archer/id', getPlayersAvailableRounds);
competitionRouter.post('/rounds/archer/bow/id', getPlayersAvailableBows);
competitionRouter.post('/rounds/stages', getCompetitionStages);



export default competitionRouter;