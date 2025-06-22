import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();

const saveCrossedOutProducts = async( req, res )=>{

    const id = parseInt(req.body.id);
    const { product_name, product_photo, crossed_out, product_amount, product_price, result } = req.body;

    if( crossed_out === 'crossed-out' ){

        const theProductExists = await prisma.crossedOutProduct.findUnique( { where: {id} } )

        if( !theProductExists ){

            try {
                await prisma.crossedOutProduct.create({
                    data: {
                        id,
                        product_name,
                        product_photo,
                        crossed_out:'not-crossed-out',
                        product_amount,
                        product_price,
                        result
                    }
                });

            } catch ({ message }) {
                console.log( `Producto '${ product_name }' no se pudo guardar en la lista de tachados...`, message );
            };

            try {
                await prisma.added_Products.update({
                    where: {
                        id
                    },
                    data: {
                        crossed_out: crossed_out,
                        product_amount,
                        product_price,
                        result,
                    }
                    });

            } catch ({ message }) {
                console.log( `Producto '${ product_name }' no se pudo guardar en la lista de tachados...`, message );
            }

            res.json({
                status: 200,
                success: true,
                data: `Este es el producto tachado '${ product_name }' `,
            });

            return
        };

        if( theProductExists ){

            try {
                await prisma.crossedOutProduct.update({
                    where: {
                        id,
                    },
                    data: {
                        crossed_out:'not-crossed-out',
                        product_amount,
                        product_price,
                        result,
                    }
                });

            } catch ({message}) {

                console.log( `Producto '${ product_name }' no se pudo guardar en la lista de tachados...`, message );
            };

            try {
                await prisma.added_Products.update({
                    where: {
                        id,
                    },
                    data: {
                        crossed_out,
                        product_amount,
                        product_price,
                        result,
                    }
                });

            } catch ({ message }) {
                console.log( `Producto '${ product_name }' no se pudo guardar en la lista de tachados...`, message );
            }; 
            
            res.json({
                status: 200,
                success: true,
                data: `Este es el producto tachado '${ product_name }' `,
            });

        };
        return
    };

 if( crossed_out === 'not-crossed-out' ){

    const theProductExists = await prisma.crossedOutProduct.findUnique({
        where: {
            id
        }
    })

    if( theProductExists ){

        await prisma.added_Products.update({
            where: {
                id,
            },

            data: {
                    crossed_out: theProductExists.crossed_out,
                    product_amount: theProductExists.product_amount,
                    product_price: theProductExists.product_price,
                    result: theProductExists.result,
            }
        })

        res.send( `producto actualizado en added_Product con el id ${ theProductExists.id }` )
    }

    
    }

};



export {
    saveCrossedOutProducts,
}