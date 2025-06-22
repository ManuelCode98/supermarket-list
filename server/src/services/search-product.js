import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();

const searchProductDB = async( req, res )=>{

    const { product_name } = req.body;
    
    const searchingProduct = await prisma.supermarket_list_db.findMany({
        where: {
            product_name: {
                contains: product_name,
                mode: 'insensitive',
            }
        }
    });

    res.json({
        status: 200,
        success: true,
        data: searchingProduct,
    })
};


export {
    searchProductDB
};