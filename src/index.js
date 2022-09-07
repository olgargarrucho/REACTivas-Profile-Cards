const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const server = express();
server.use(cors());
server.use(express.json({
    limit: "10mb"
}));
server.set('view engine', 'ejs');

const port = 4000;
server.listen(port, () => {
    console.log('listening' + port);
});

const savedCard = [];
//endpoint
server.post('/card', (req, res) => {

    if (req.body.palette === "") {
        const responseError = {
            success: false,
            error: 'Selecciona una paleta',
        };
        res.json(responseError);
    }
    if (req.body.name === "") {
        const responseError = {
            success: false,
            error: 'Escribe tu nombre',
        };
        res.json(responseError);
    }
    if (req.body.job === "") {
        const responseError = {
            success: false,
            error: 'Escribe tu trabajo',
        };
        res.json(responseError);
    }
    if (req.body.photo === "") {
        const responseError = {
            success: false,
            error: 'Sube una imagen',
        };
        res.json(responseError);
    }
    if (req.body.email === "") {
        const responseError = {
            success: false,
            error: 'Escribe tu correo',
        };
        res.json(responseError);
    }

    if (req.body.phone === "") {
        const responseError = {
            success: false,
            error: 'Escribe tu telefono',
        };
        res.json(responseError);
    }
    if (req.body.linkedin === "") {
        const responseError = {
            success: false,
            error: 'Escribe tu linkedin',
        };
        res.json(responseError);
    }
    if (req.body.github === "") {
        const responseError = {
            success: false,
            error: 'Escribe tu usuario de github',
        };
        res.json(responseError);
    } else {
        const newCard = {
            ...req.body,
            id: uuidv4()
        }
        savedCard.push(newCard);
        const responseSuccess = {
            cardURL:
                `https://localhost:4000/card/${newCard.id}`,
            success: true,
        };
        res.json(responseSuccess);
    };




});
// endpoint "devolver tarjeta"
server.get('/card/:id', (req, res) => {
    console.log(req.params);
    res.render('page');
});


const staticServerPath = ('./src/public-react');
server.use(express.static(staticServerPath));
