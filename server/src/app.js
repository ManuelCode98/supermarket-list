
import { cors, express } from './bookstores/bookstores.js';
import { routes } from './routes/routes.js';
import { welcomePage } from './services/welcome-page.js';

const app = express();
app.use( cors() );
app.use( express.json() );

// Rutas
app.use( '/', welcomePage );
app.use( '/api', routes );

export {
    app
}