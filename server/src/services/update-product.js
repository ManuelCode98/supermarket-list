import { PrismaClient } from "../bookstores/bookstores.js";
const prisma = new PrismaClient();

const updateProductDB = async( req, res )=>{

    const id = parseInt( req.params.id );
    const { product_name, product_photo, product_amount, product_price } = req.body;

    try{

        if( id && product_name && product_photo ){

            const searchingId = await prisma.supermarket_list_db.findUnique({
                where: {
                    id,
                }
            });

            
            if( searchingId ){

                const { id } = searchingId;

                const updatedProduct = await prisma.supermarket_list_db.update({
                    where: {
                        id: Number(id)
                    },

                    data: {
                        product_name,
                        product_photo,
                        product_amount,
                        product_price,
                    }

                })

                res.json({
                    status: 200,
                    success: true,
                    data: `Producto actualizado desde el id ${ id }`,
                })

                return;
            };

            res.send( `Producto con el id ${ id } no encontrado...` );

        }

    }
    catch( error ){

       console.log( `Error al hacer la consulta ${ error }` );

    }
    finally {
        await prisma.$disconnect();
    }

};


export {
    updateProductDB,
}