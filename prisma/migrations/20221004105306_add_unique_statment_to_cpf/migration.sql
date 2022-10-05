/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `user-info` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user-info_cpf_key" ON "user-info"("cpf");
