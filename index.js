const express = require('express')


app.post("/generateUuid", (req, res) => {
    res.send({
        "uuid":"ef4f3c7e-e7c8-4c4d-862d-d4a444fdaffd"
    })
})


app.listen(1337, () => console.log("app is listening for incoming connetions"));


//listening to the port 1337