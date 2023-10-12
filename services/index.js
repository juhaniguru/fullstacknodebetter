const authService = require('./authmongo')

// tätä ei kannata exportata, ettei serviceObjektiin laiteta sinne kuulumattomia juttuja
const servicesObject = {
    authService
  }
  
  // tätä käytetään toisessa kontrollerin routehandlerissa
  // voitte käyttää myös tätä tapaa, jos ette halua laittaa kaikkia serviceitä requestin kontekstiin
  module.exports.getServices = () => {
    return servicesObject
  }
  