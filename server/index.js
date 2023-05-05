import express from 'express';
import cors from 'cors';
import archerRouter from './routes/archerRoutes.js';
import competitionRouter from './routes/competitionRoutes.js'
import scoreRouter from './routes/scoreRoutes.js'

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

// app.use routers
app.use('/archer', archerRouter);
app.use('/competition', competitionRouter)
app.use('/score', scoreRouter)