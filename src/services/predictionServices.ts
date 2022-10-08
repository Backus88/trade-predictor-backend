import * as predictionRepo from '../repositories/predictionRepository';
import {
  InsertSetPredictionType,
  InsertPredictionType,
} from '../types/predictionTypes';
import { getRobotById } from '../repositories/robotRepository';
import { notFoundError, notPossibleOperation } from '../utils/errorMessages';

export async function checkIfRobotExists(robotId: number) {
  const data = await getRobotById(robotId);
  if (!data) {
    throw notFoundError('robot!!');
  }
}

export async function checkPairs(userId: number, robotId: number) {
  const data = await predictionRepo.getSetByUserAndRobot(userId, robotId);
  if (!data) {
    return false;
  }
  return data.id;
}

export async function createSetPredictions(data: InsertSetPredictionType) {
  return predictionRepo.insertSetPrediction(data);
}

export async function createPrediction(data: InsertPredictionType) {
  return predictionRepo.insertPrediction(data);
}

export async function checkIfCreated(id: number) {
  const data = await predictionRepo.getPredictionById(id);
  if (data === null) {
    throw notPossibleOperation('prediction not created!!');
  }
}

export async function checkId(id: number) {
  const data = await predictionRepo.getPredictionById(id);
  if (data === null) {
    throw notFoundError('id');
  }
  return data;
}

export async function canUpdate(predicted: boolean) {
  if (predicted === true) {
    throw notPossibleOperation('because predict was already made!!');
  }
}

export async function updatePrediction(id: number) {
  await predictionRepo.updatePrediction(id);
}

export async function updateWorked(
  id: number,
  value: string,
  predictedValue: string
) {
  if (value === predictedValue) {
    await predictionRepo.updateWorked(id);
  }
}
