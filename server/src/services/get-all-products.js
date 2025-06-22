import { PrismaClient } from '../bookstores/bookstores.js';

const prisma = new PrismaClient();

const getAllProducts = async( req, res )=>{ 

    const allProducts = await prisma.supermarket_list_db.findMany();

    if( allProducts ){

        res.status( 200 ).json( allProducts )

        return
    }

    res.status( 500 ).json( 'No hay productos para mostrar' )


};

export {
    getAllProducts
}