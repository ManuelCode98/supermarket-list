import { PrismaClient } from "../bookstores/bookstores.js";


const prisma = new PrismaClient();

const createProductDb = async( req, res )=>{

    const { product_name, product_photo, product_amount, product_price } = req.body;

    try {

        if( product_name && product_photo ){

           const savedProduct = await prisma.supermarket_list_db.create( {
                data: {
                    product_name,
                    product_photo,
                    product_amount,
                    product_price,
                }
            } )
            
           const { id } = savedProduct;

            res.json({
                status: 200,
                success: true,
                id,
            });

            return;

        }

        res.send(`Datos invalidos o incompletos...`);
    }
    catch( error ){
        console.log(`Error en la solicitud ${ error }`);
    }
    finally {
        await prisma.$disconnect();
    }

};

export {
    createProductDb,
}

