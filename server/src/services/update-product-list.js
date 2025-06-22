import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();

const updateProductList = async(req, res) => {
    const id = parseInt(req.params.id);
    const { product_name, product_photo, product_amount, product_price, crossed_out, result } = req.body;

    const productUpdated = await prisma.added_Products.update({
        where: {
            id,
        },
        data: {
            product_name,
            product_photo,
            product_amount,
            product_price,
            crossed_out,
            result,
        },
    });

    res.json({ 
        status: 200,
        success: true,
        productUpdated,
    });
};

export {
    updateProductList,

};