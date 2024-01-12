const express = require('express')();  

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

  app.get("/tshirt", (request, response) => {
    res.status(200).send({
        size: 'large'
    })
 });

