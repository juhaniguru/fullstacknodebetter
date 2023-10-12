const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRouter = require('./routers/auth')
// tässä on nyt authmongo service
const authService = require('./services/authmongo')



mongoose.connect('mongodb://127.0.0.1:27017/fullstackexample');


app.use(bodyParser.json())

// tämä middleware pitää laittaa kaikkiin vastaaviin routereihin kiinni, kun niitä tulee lisää
// tämä lisää siis requestin contextiin servicet
// laita tähän myös kaikki servicet, joita tulee lisää


// nyt jos tietokanta muuttuu, tai käyttäjät pitää rekisteröidä johonkin pilvipalveluun,
// voidaan vain vaihtaa tiedosto, josta authService importataan, mutta minkään muun ei tarvitse muuttua

// ############# // jos kovasti hiertää se, että servicet on requestin contextissa, voitte käyttää toista esimerkkiä authControllerissa (registerUser2Example) 

const services = (req, res, next) => {
  req.services = {authService}
  next()
}


app.use('/api/v1/auth', services, authRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})