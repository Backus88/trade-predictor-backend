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

export async function predict(req: Request, res: Response) {
  const { id } = req.params;
  const { value } = req.body;
  const predictId = parseInt(id, 10);
  const data = await predictionService.checkId(predictId);
  await predictionService.canUpdate(data?.predicted);
  await predictionService.updatePrediction(predictId);
  await predictionService.updateWorked(predictId, value, data.value);
  res.sendStatus(200);
}

export async function openedPredictions(req: Request, res: Response) {
  const { payload } = res.locals;
  const { userId } = payload;
  await predictionService.checkUserId(userId);
  const data = await predictionService.showPredictions(userId, false);
  res.status(200).send(data);
}

export async function closedPredictions(req: Request, res: Response) {
  const { payload } = res.locals;
  const { userId } = payload;
  await predictionService.checkUserId(userId);
  const data = await predictionService.showPredictions(userId, true);
  res.status(200).send(data);
}
