import { createProductDb } from "../services/create-product.js";
import { addProductToList } from '../services/added-product-to-list.js';
import { deleteAllProducts } from '../services/delete-all-products.js';
import { deletebackupProduct } from '../services/delete-backup-product.js';
import { deleteProductDB } from '../services/delete-product.js';
import { getCrossedOutProducts } from '../services/get-crossed-out-products.js';
import { getProductsList } from '../services/get-products-list.js';
import { saveCrossedOutProducts } from '../services/save-crossed-out-products.js';
import { searchProductDB } from '../services/search-product.js';
import { updateProductList } from '../services/update-product-list.js';
import { updateProductDB } from '../services/update-product.js';
import { uploadRenderedImage } from "../services/upload-rendered-image.js";
import { getAllProducts } from "../services/get-all-products.js";

const controllers ={ 

    createProductDb: ( req, res )=>{
        try {
            createProductDb( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    addProductToList: ( req, res )=>{
        try {
            addProductToList( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    deleteAllProducts: ( req, res )=>{
        try {
            deleteAllProducts( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    deletebackupProduct: ( req, res )=>{
        try {
            deletebackupProduct( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    deleteProductDB: ( req, res )=>{
        try {
            deleteProductDB( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    getCrossedOutProducts: ( req, res )=>{
        try {
            getCrossedOutProducts( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    getProductsList: ( req, res )=>{
        try {
            getProductsList( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    saveCrossedOutProducts: ( req, res )=>{
        try {
            saveCrossedOutProducts( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    searchProductDB: ( req, res )=>{
        try {
            searchProductDB( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    updateProductList: ( req, res )=>{
        try {
            updateProductList( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    updateProductDB: ( req, res )=>{
        try {
            updateProductDB( req, res );       
        } catch (error) {
             res.status(500).json({ error: error.message })
        }
    } ,

    set_rendered_image : ( req, res )=>{

        try{
            console.log('hello');
            uploadRenderedImage()
        }
        catch(error){
            res.status(500).json({ error: error.message })
        }
    },

    getAllProducts : ( req, res )=>{
        try {

            getAllProducts( req, res );
        }
        catch( error ){
            res.status(500).json({ error: error.message })
        }
    },
};

export {
    controllers,
}