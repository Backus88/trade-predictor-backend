import { Response, Request } from 'express';
import * as predictionService from '../services/predictionServices';
import {
  InsertPredictionType,
  InsertSetPredictionType,
} from '../types/predictionTypes';

export async function insertPrediction(req: Request, res: Response) {
  const { robotId, value, target } = req.body;
  let worked: boolean = false;
  let setId: number;
  if (target) {
    worked = true;
  }
  const { payload } = res.locals;
  const { userId } = payload;
  console.log(payload);
  const returnedId = await predictionService.checkPairs(userId, robotId);
  if (returnedId === false) {
    const setPredictionData: InsertSetPredictionType = {
      userId,
      robotId,
    };
    const data = await predictionService.createSetPredictions(
      setPredictionData
    );
    setId = data.id;
  } else {
    setId = returnedId;
  }

  const predictionData: InsertPredictionType = {
    value,
    worked,
    setPredictionId: setId,
    predicted: worked,
  };
  const testId = await predictionService.createPrediction(predictionData);
  await predictionService.checkIfCreated(testId.id);
  res.sendStatus(201);
}
