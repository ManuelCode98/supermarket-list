import { Router } from '../bookstores/bookstores.js';
import { controllers } from '../controllers/controllers.js';

const routes = Router();

routes.post('/create-product', controllers.createProductDb );
routes.delete('/delete-product/:id', controllers.deleteProductDB );
routes.put('/update-product/:id', controllers.updateProductDB );
routes.post('/search-product', controllers.searchProductDB );
routes.post('/add-product-to-list', controllers.addProductToList );
routes.get('/show-products', controllers.getProductsList );
routes.delete('/delete-all-products', controllers.deleteAllProducts );
routes.post('/save-crossed-out-products', controllers.saveCrossedOutProducts );
routes.delete('/delete-backup-product/:id', controllers.deletebackupProduct );
routes.get('/get-crossed-out-products', controllers.getCrossedOutProducts );
routes.put('/update-product-list/:id', controllers.updateProductList  );
routes.post('/upload-rendered-image', controllers.set_rendered_image );
routes.get('/get-all-products', controllers.getAllProducts );


export {
    routes,
}