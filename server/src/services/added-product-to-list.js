import { PrismaClient } from "../bookstores/bookstores.js";


const prisma = new PrismaClient();

const addProductToList = async( req, res )=>{

    const id = parseInt( req.body.id );
    const { product_name, product_photo, crossed_out, product_amount, product_price, result } = req.body;
    
    try {

        const productExists = await prisma.added_Products.findUnique( { where: {id} } )
        if( productExists ){
            res.json({
                status: 200,
                success: false,
                data: `El producto '${product_name}' ya esta en la lista`,
            });

            return
        }
        
        if( product_amount && product_price ){

           await prisma.added_Products.create( {
                data: {
                    id,
                    product_name,
                    product_photo,
                    crossed_out,
                    product_amount,
                    product_price,
                    result
                }
            } )
            
            
            res.json({
                status: 200,
                success: true,
                data: `Producto añadido a la lista '${ product_name }'`,
            });

            // console.log(`Producto añadido a la lista fue '${ product_name}'` );
            return;

        }

        res.send(`Datos invalidos o incompletos...`);
    }
    catch( error ){
        console.log(`
        Error en la solicitud 
        ${ error } 
        Error en el archivo added-product-to-list.js`);
    }
    finally {
        await prisma.$disconnect();
    }

};

export {
    addProductToList,
}

