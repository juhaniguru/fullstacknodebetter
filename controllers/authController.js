
const services = require('../services')

module.exports.registerUser = async (req, res) => {
    const body = req.body;
    
    try {
        // nyt controllerissa kutsutaan servicea sen sijaan, että kutsuttaisiin suoraan mongoa
        // nyt service voi olla mikä tahansa, koska se kiinnitetään indexissä requestiin
        // tämä koodi ei muutu ollenkaan riippumatta siitä, mihin tiedot tallennetaan.

        // jos kovasti hiertää se, että servicet on requestin contextissa, voitte käyttää tuota alempaa esimerkki (registerUser2Example)

        const account = await req.services.authService.register(body.username)
        res.json({account})
    } catch(err) {
        
        res.status(409).json({err: err.toString()})
        
    }
    


} 


// tässä on toinen esimerkki siitä, miten servicet voi saada controllereihin
// kaikki eivät tykkää siitä, että requestiin laitetaan ylimääräistä tavaraa, niin näin sen voi kiertää
module.exports.registerUser2Example = async (req, res) => {
    const service = services.getServices()
    const body = req.body;
    try {
        // nyt controllerissa kutsutaan servicea sen sijaan, että kutsuttaisiin suoraan mongoa
        // nyt service voi olla mikä tahansa, koska se kiinnitetään indexissä requestiin
        // tämä koodi ei muutu ollenkaan riippumatta siitä, mihin tiedot tallennetaan.
        const account = await service.authService.register(body.username)
        res.json({account})
    } catch(err) {
        
        res.status(409).json({err: err.toString()})
        
    }
}