-- CreateTable
CREATE TABLE "robots" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "robots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "robot-metrics" (
    "id" SERIAL NOT NULL,
    "metrics" TEXT NOT NULL,
    "robotId" INTEGER NOT NULL,

    CONSTRAINT "robot-metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "set-prediction" (
    "id" SERIAL NOT NULL,
    "robotId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "predicted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "set-prediction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prediction" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "worked" BOOLEAN NOT NULL,

    CONSTRAINT "prediction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "robot-metrics" ADD CONSTRAINT "robot-metrics_robotId_fkey" FOREIGN KEY ("robotId") REFERENCES "robots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "set-prediction" ADD CONSTRAINT "set-prediction_robotId_fkey" FOREIGN KEY ("robotId") REFERENCES "robots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "set-prediction" ADD CONSTRAINT "set-prediction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
