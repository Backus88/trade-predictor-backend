import { Prediction, SetPrediction } from '@prisma/client';

export type InsertPredictionType = Omit<Prediction, 'id'>;
export type InsertSetPredictionType = Omit<SetPrediction, 'id'>;
