import { PrismaClient } from "../bookstores/bookstores.js";


const prisma = new PrismaClient();

const getCrossedOutProducts = async( req, res )=>{


    try {
        const foundProducts = await prisma.added_Products.findMany()

        if( foundProducts ){

            let identifications;

            let findCrossedOutItem = foundProducts.filter( ( element ) => ( element.crossed_out === "crossed-out" ) )

            identifications = findCrossedOutItem.map( element => element.id ) ;

            await prisma.added_Products.deleteMany( {
                where: {
                    id: {
                        in:identifications
                    }
                }
            })

            await prisma.crossedOutProduct.deleteMany({
                where: {
                    id: {
                        in:identifications
                    }
                }
            })

            const products = await prisma.added_Products.findMany();
            res.json({
                status: 200,
                success: true,
                data: products,
            })
        }

    }catch( error){
        console.log(error);
    }finally{
        await prisma.$disconnect();
    }

};


export {
    getCrossedOutProducts,
}