-- CreateTable
CREATE TABLE "supermarket_list_db" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,

    CONSTRAINT "supermarket_list_db_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "added_Products" (
    "id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,
    "crossed_out" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "added_Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crossedOutProduct" (
    "id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_photo" TEXT NOT NULL,
    "crossed_out" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "crossedOutProduct_pkey" PRIMARY KEY ("id")
);
