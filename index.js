const TravelFacade = require('./facade/TravelFacade');

const travelFacade = new TravelFacade();

const origem = "São Paulo";
const destino = "Nova York";
const hotelLocation = "Nova York";
const noitesHotel = 5;
const carLocation = "Nova York";
const diasCarro = 3;

travelFacade.reservarViagem(origem, destino, hotelLocation, noitesHotel, carLocation, diasCarro);
