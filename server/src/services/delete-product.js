import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();

const deleteProductDB = async( req, res )=>{

    const id = parseInt( req.params.id );

    try{

        if( id ){

            const searchingId = await prisma.supermarket_list_db.findUnique({
                where: {
                    id,
                }
            });

          
            if( searchingId ){

                const { id } = searchingId;

                const deletedProduct = await prisma.supermarket_list_db.delete({
                    where: {
                        id: Number(id)
                    }
                })

                res.json({
                    status: 200,
                    success: true,
                    data: `Producto eliminado con el id ${ id }`,
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
    deleteProductDB,
}