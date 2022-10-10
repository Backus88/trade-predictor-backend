import client from '../config/database';
import {
  InsertSetPredictionType,
  InsertPredictionType,
} from '../types/predictionTypes';

export async function insertSetPrediction(data: InsertSetPredictionType) {
  return client.setPredictions.create({ select: { id: true }, data });
}
export async function updatePrediction(id: number) {
  return client.prediction.update({
    where: { id },
    data: { predicted: true },
  });
}

export async function updateWorked(id: number) {
  return client.prediction.update({
    where: { id },
    data: { worked: true },
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

export async function getPredictionsByUserId(userId: number, option: boolean) {
  return client.users.findUnique({
    select: {
      predictions: {
        where: { userId },
        select: {
          robotId: true,
          predictions: { where: { predicted: option } },
        },
      },
    },
    where: { id: userId },
  });
}

export async function checkUserId(id: number) {
  return client.users.findUnique({ where: { id } });
}
