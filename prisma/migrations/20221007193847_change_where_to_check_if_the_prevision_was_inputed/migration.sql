/*
  Warnings:

  - You are about to drop the column `predicted` on the `set-predictions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "prediction" ADD COLUMN     "predicted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "set-predictions" DROP COLUMN "predicted";
