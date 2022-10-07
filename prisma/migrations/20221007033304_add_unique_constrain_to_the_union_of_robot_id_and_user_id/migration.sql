/*
  Warnings:

  - A unique constraint covering the columns `[robotId,userId]` on the table `set-predictions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "set-predictions_robotId_userId_key" ON "set-predictions"("robotId", "userId");
