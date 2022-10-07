/*
  Warnings:

  - You are about to drop the `set-prediction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `setPredictionId` to the `prediction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "set-prediction" DROP CONSTRAINT "set-prediction_robotId_fkey";

-- DropForeignKey
ALTER TABLE "set-prediction" DROP CONSTRAINT "set-prediction_userId_fkey";

-- AlterTable
ALTER TABLE "prediction" ADD COLUMN     "setPredictionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "set-prediction";

-- CreateTable
CREATE TABLE "set-predictions" (
    "id" SERIAL NOT NULL,
    "robotId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "predicted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "set-predictions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "set-predictions" ADD CONSTRAINT "set-predictions_robotId_fkey" FOREIGN KEY ("robotId") REFERENCES "robots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "set-predictions" ADD CONSTRAINT "set-predictions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prediction" ADD CONSTRAINT "prediction_setPredictionId_fkey" FOREIGN KEY ("setPredictionId") REFERENCES "set-predictions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
