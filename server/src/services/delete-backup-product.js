import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();

const deletebackupProduct = async(req, res)=>{

    const id = parseInt( req.params.id );

    try{

        if( id ){

            const productSearch = await prisma.crossedOutProduct.findUnique({
                where: {
                    id
                }
            })
        
            if( productSearch ){
        
                const { id } = productSearch;
        
                const deleteProduct = await prisma.crossedOutProduct.delete({
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
         
            }

            res.send( `Producto con el id ${ id } no encontrado...` );
        }

    }catch(error){

        console.log( `Error al hacer la consulta ${ error }` );
    }finally {
        await prisma.$disconnect();
    }


};


export {
    deletebackupProduct,
}

