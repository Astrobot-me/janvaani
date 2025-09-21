-- CreateEnum
CREATE TYPE "public"."COMPLAINT_STATUS" AS ENUM ('VERIFIED', 'NOT_VERIFIED', 'REJECTED', 'PENDING_RESOLUTION', 'REDIRECTED', 'ALLOCATED', 'RESOLVED', 'SPAM');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "aadhaar_no" INTEGER NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pincode" VARCHAR(6) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Complaint" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "complaint_status" "public"."COMPLAINT_STATUS" NOT NULL DEFAULT 'NOT_VERIFIED',
    "image_url" TEXT[],
    "addressId" TEXT NOT NULL,
    "reportedUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reward" (
    "id" TEXT NOT NULL,
    "reward_points" INTEGER NOT NULL,
    "complaintId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_aadhaar_no_key" ON "public"."User"("aadhaar_no");

-- CreateIndex
CREATE UNIQUE INDEX "Complaint_addressId_key" ON "public"."Complaint"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Complaint_reportedUserId_key" ON "public"."Complaint"("reportedUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_complaintId_key" ON "public"."Reward"("complaintId");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_userId_key" ON "public"."Reward"("userId");

-- AddForeignKey
ALTER TABLE "public"."Complaint" ADD CONSTRAINT "Complaint_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Complaint" ADD CONSTRAINT "Complaint_reportedUserId_fkey" FOREIGN KEY ("reportedUserId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reward" ADD CONSTRAINT "Reward_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "public"."Complaint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reward" ADD CONSTRAINT "Reward_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
