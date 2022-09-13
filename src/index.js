const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const Database = require("better-sqlite3");
const server = express();
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);
server.set("view engine", "ejs");
const db = new Database("./src/db/cardsdatabase.db", { verbose: console.log });
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("listening" + port);
});

//endpoint
server.get("/", (req, res) => {
  res.sendFile("public-react/index.html", { root: __dirname });
});

server.post("/card", (req, res) => {
  if (req.body.palette === "") {
    const responseError = {
      success: false,
      error: "Selecciona una paleta",
    };
    return res.json(responseError);
  }
  if (req.body.name === "") {
    const responseError = {
      success: false,
      error: "Escribe tu nombre",
    };
    return res.json(responseError);
  }
  if (req.body.job === "") {
    const responseError = {
      success: false,
      error: "Escribe tu trabajo",
    };
    return res.json(responseError);
  }
  if (req.body.photo === "") {
    const responseError = {
      success: false,
      error: "Sube una imagen",
    };
    return res.json(responseError);
  }
  if (req.body.email === "") {
    const responseError = {
      success: false,
      error: "Escribe tu correo",
    };
    return res.json(responseError);
  }

  if (req.body.phone === "") {
    const responseError = {
      success: false,
      error: "Escribe tu telefono",
    };
    return res.json(responseError);
  }
  if (req.body.linkedin === "") {
    const responseError = {
      success: false,
      error: "Escribe tu linkedin",
    };
    return res.json(responseError);
  }
  if (req.body.github === "") {
    const responseError = {
      success: false,
      error: "Escribe tu usuario de github",
    };
    return res.json(responseError);
  } else {
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };
    const query = db.prepare(`
        INSERT INTO cards(name, palette, id, job, phone, email, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    const result = query.run(
      newCard.name,
      newCard.palette,
      newCard.id,
      newCard.job,
      newCard.phone,
      newCard.email,
      newCard.linkedin,
      newCard.github,
      newCard.photo
    );
    //savedCard.push(newCard);
    if (result) {
      const responseSuccess = {
        cardURL: `http://localhost:4000/card/${newCard.id}`,
        success: true,
      };
      return res.json(responseSuccess);
    }
  }
});

server.get("/card", (req, res) => {
  res.sendFile("public-react/index.html", { root: __dirname });
});

// endpoint "devolver tarjeta"
server.get("/card/:id", (req, res) => {
  const id = req.params.id;
  const query = db.prepare(`
        SELECT * 
            FROM cards
            WHERE id = ?`);
  const card = query.get(id);
  res.render("card", card);
});
//endpoint 404

//  server.get('*', (req, res) => {
//     // Relativo a este directorio
//     const notFoundFileRelativePath = '../web/404-not-found.html';
//     const notFoundFileAbsolutePath = path.join(
//       __dirname,
//       notFoundFileRelativePath
//     );
//     res.status(404).sendFile(notFoundFileAbsolutePath);
//   });

const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerStyles = "./src/public-styles";
server.use(express.static(staticServerStyles));
