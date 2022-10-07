import { Prediction, SetPredictions } from '@prisma/client';

export type InsertPredictionType = Omit<Prediction, 'id'>;
export type InsertSetPredictionType = Omit<SetPredictions, 'id'>;
