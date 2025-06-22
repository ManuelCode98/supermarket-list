import { PrismaClient } from "../bookstores/bookstores.js";

const prisma = new PrismaClient();

const getProductsList = async ( req, res ) => {

    const products = await prisma.added_Products.findMany( )
    const product_photo = 'https://media.istockphoto.com/id/1364735396/es/vector/lista-de-comprobaci%C3%B3n-icono-dise%C3%B1o-plano.jpg?s=612x612&w=0&k=20&c=MY022-KOWot_dwvMEOywSPMJRbqrcJ6NfKfqvi1vM70=';

    if(products.length){
        
        res.json({
            status: 200,
            success: true,
            products
        })
        return
    };
   
    res.json({
        status: 404,
        success: false,
        data: 'No hay productos para mostrar en la lista'
    })

};


export {
    getProductsList,
}