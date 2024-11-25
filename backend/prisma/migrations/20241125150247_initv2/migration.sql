/*
  Warnings:

  - Added the required column `password` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourLimit` to the `licenseType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `licenseType` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `hourLimit` INTEGER NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `LicenseUsage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeId` INTEGER NOT NULL,
    `licenseTypeId` INTEGER NOT NULL,
    `hoursUsed` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LicenseUsage` ADD CONSTRAINT `LicenseUsage_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LicenseUsage` ADD CONSTRAINT `LicenseUsage_licenseTypeId_fkey` FOREIGN KEY (`licenseTypeId`) REFERENCES `licenseType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
