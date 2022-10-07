import client from '../config/database';
import {
  InsertSetPredictionType,
  InsertPredictionType,
} from '../types/predictionTypes';

export async function insertSetPrediction(data: InsertSetPredictionType) {
  return client.setPredictions.create({ select: { id: true }, data });
}
export async function updateSetPrediction(id: number) {
  return client.prediction.update({
    where: { id },
    data: { predicted: true },
  });
}

export async function getPredictionsBySetId(id: number) {
  return client.setPredictions.findMany({
    select: {
      predictions: {
        where: {
          setPredictionId: id,
        },
      },
    },
  });
}
export async function getSetByRobotId(robotId: number) {
  return client.setPredictions.findMany({
    select: { id: true },
    where: { robotId },
  });
}

export async function getSetByUserAndRobot(userId: number, robotId: number) {
  return client.setPredictions.findUnique({
    where: { predictSet: { userId, robotId } },
  });
}

export async function insertPrediction(data: InsertPredictionType) {
  return client.prediction.create({ data });
}

export async function getPredictionById(id: number) {
  return client.prediction.findUnique({ where: { id } });
}
