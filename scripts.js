const time = document.querySelector('h2')

let dias = 08
let hora = 12
let minuto = 44
let segundo = 28

let tempo = 1000 

let cron

const start = () => {
    cron = setInterval( () => { timer()}, tempo) // QUAL FUNÇÃO VAI SER EXECUTADA A CADA UM SEGUNDO.
}

const timer = () => {
    segundo--

    if(segundo == 0){
        segundo = 60
        minuto--
    }

        if(minuto == 0){
            minuto = 60
            hora--
        }

            if(hora == 0){
                hora = 24
                dias--
            }

            const format = (dias < 10 ? '0' + dias : dias) + ' : ' + (hora < 10 ? '0' + hora : hora) + ' : ' + (minuto < 10 ? '0' + minuto : minuto) + ' : ' + (segundo < 10 ? '0' + segundo : segundo) // SE HORA(OU MINUTO/SEGUNDO) FOR MENOR QUE 10, COLOQUE UM ZERO NA FRENTE.

            time.innerHTML = format
}

start()