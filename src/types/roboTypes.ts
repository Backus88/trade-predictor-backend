import { Robots, RobotMetrics } from '@prisma/client';

export type InsertRobotType = Omit<Robots, 'id'>;
export type InsertRobotMetricsType = Omit<RobotMetrics, 'id'>;
