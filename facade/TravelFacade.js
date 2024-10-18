const ReservaVoo = require('../services/ReservaVoo');
const ReservaHotel = require('../services/ReservaHotel');
const AluguelCarro = require('../services/AluguelCarro');

class TravelFacade  {
    constructor() {
        this.reservaVoo = new ReservaVoo();
        this.reservaHotel = new ReservaHotel();
        this.aluguelCarro = new AluguelCarro();
    }

    reservarViagem(origem, destino, localHotel, noites, localCarro, diasCarro) {
        const vooReservado = this.reservaVoo.reservarVoo(origem, destino);
        const hotelReservado = this.reservaHotel.reservarHotel(localHotel, noites);
        const carroAlugado = this.aluguelCarro.alugarCarro(localCarro, diasCarro);

        if (vooReservado && hotelReservado && carroAlugado) {
            console.log("Reserva de viagem completa com sucesso!");
        } else {
            console.log("Falha na reserva da viagem.");
        }
    }
}

module.exports = TravelFacade ;
