import { PrismaClient } from "@prisma/client";
import seedProduct from "./productSeeder";
import seedReview from "./reviewSeeder";

const prisma = new PrismaClient()

const seeders = [ seedProduct, seedReview ]

const seed = async() => {
  for(const seeder of seeders) {
    await seeder(prisma)
  }
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect();
  })