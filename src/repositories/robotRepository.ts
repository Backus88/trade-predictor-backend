import client from '../config/database';
import { InsertRobotMetricsType, InsertRobotType } from '../types/roboTypes';

export async function getRobotByName(name: string) {
  return client.robots.findUnique({ where: { name } });
}

export async function insertRobot(data: InsertRobotType) {
  return client.robots.create({ select: { name: true }, data });
}

export async function insertRobotMetrics(data: InsertRobotMetricsType) {
  return client.robotMetrics.create({ select: { id: true }, data });
}

export async function getRobotMetricsByRobotId(robotId: number) {
  return client.robotMetrics.findUnique({ where: { robotId } });
}
