/*
  Warnings:

  - The `product_amount` column on the `added_Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `product_price` column on the `added_Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `result` column on the `added_Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `product_amount` column on the `crossedOutProduct` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `product_price` column on the `crossedOutProduct` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `result` column on the `crossedOutProduct` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "added_Products" DROP COLUMN "product_amount",
ADD COLUMN     "product_amount" INTEGER[],
DROP COLUMN "product_price",
ADD COLUMN     "product_price" INTEGER[],
DROP COLUMN "result",
ADD COLUMN     "result" INTEGER[];

-- AlterTable
ALTER TABLE "crossedOutProduct" DROP COLUMN "product_amount",
ADD COLUMN     "product_amount" INTEGER[],
DROP COLUMN "product_price",
ADD COLUMN     "product_price" INTEGER[],
DROP COLUMN "result",
ADD COLUMN     "result" INTEGER[];
