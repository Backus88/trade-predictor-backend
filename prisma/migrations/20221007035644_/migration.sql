/*
  Warnings:

  - A unique constraint covering the columns `[robotId]` on the table `robot-metrics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "robot-metrics_robotId_key" ON "robot-metrics"("robotId");
