/*
  Warnings:

  - You are about to drop the column `slug` on the `Categoria` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Categoria_slug_key";

-- AlterTable
ALTER TABLE "public"."Categoria" DROP COLUMN "slug";
