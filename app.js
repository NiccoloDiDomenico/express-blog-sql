const express = require(`express`);
const app = express();
const port = 3000;
// dati
const postsRouters = require(`./routers/postsRouters.js`);
const handleError = require(`./middlewares/handleError.js`);


app.get("/", (req, res) => {
    res.send(`Server del mio Blog`);
});

// registra il body-parser 
app.use(express.json());

// registra gli assets statici
app.use(express.static(`public`));

// indica a express di seguire le rotte tramite router
app.use(`/posts`, postsRouters);

// registra il middleware globale
app.use(handleError);

app.listen(port, () => {
    console.log(`Server in ascolto`);
});

