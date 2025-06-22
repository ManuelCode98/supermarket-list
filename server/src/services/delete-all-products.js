import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();


const deleteAllProducts = async( req, res )=>{

    await prisma.added_Products.deleteMany();
    await prisma.crossedOutProduct.deleteMany();
    const products = await prisma.added_Products.findMany();
    
    res.json({
        status: 200,
        success: true,
        data: products, 
    });

};

export {
    deleteAllProducts,
}