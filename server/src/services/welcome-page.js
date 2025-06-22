import { Router } from "../bookstores/bookstores.js";

const welcomePage = Router();

welcomePage.get('/', ( req, res )=>{

    res.send(   `
                    <div id="title-container">
                        <h1 id="title" >Servidor corriendo...</h1>
                    </div>
                    <style>
                        body {
                            background-color: #152257;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                        }
                        #title-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            min-height: 400px;
                        } 
                        #title {
                            color: #4d94d8;
                            height: 100px;
                            font-size: 5rem;
                            text-shadow: 2px -2px 3px black, 2px -2px 3px black, 2px -2px 3px black;
                        }
                    </style>
                ` );
})

export {
    welcomePage,
}
