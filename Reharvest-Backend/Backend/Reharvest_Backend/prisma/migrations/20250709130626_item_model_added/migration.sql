-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "itemType" TEXT NOT NULL,
    "yearsUsed" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
