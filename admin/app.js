import { reservations } from "./data/reservation.js";


function loopReservations() {
    const container = document.querySelector('.container');
    const item = document.querySelector('.item')

    reservations.map(reservation => {
        console.log(reservation)
        container.innerHTML = updateUI(reservation)
    })
}

function updateUI(reservation) {
    return `<div class="item">
                <h1>${reservation.nama}</h1>
                <h2>${reservation.email}</h2>
                <h3>${reservation.nomorTelepon}</h3>
                <p>${reservation.jumlahOrang}</p>
                <p>${reservation.waktuKunjungan.tanggal}, ${reservation.waktuKunjungan.jam.from} - ${reservation.waktuKunjungan.jam.to}</p>
            </div>`
}

loopReservations();