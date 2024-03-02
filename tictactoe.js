
    //--Declaracion de mis variables (jugador,restart,box)--//

let jugador = document.getElementById('jugador')
let Restart = document.getElementById('restart')
let boxes = Array.from(document.getElementsByClassName('box'))

    //--Declaracion de mi variable que indica el ganador--//

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

    //--Declaracion de mis constantes--//

const O_TEXT = "O"
const X_TEXT = "X"
let jugadoractual = X_TEXT
let espacios = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) 
{   
    const id = e.target.id

   if(!espacios[id])
   {

    espacios[id] = jugadoractual
        e.target.innerText = jugadoractual

        if(jugadorwin())
        {
            jugador.innerHTML = ` Felicidades has Ganado!`
            let winning = jugadorwin()

            winning.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return

            
        }
        jugadoractual = jugadoractual == X_TEXT ? O_TEXT : X_TEXT

   }
   
}

const WinCombos = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function jugadorwin()
{
    for (const condition of WinCombos) {
        let [a, b, c] = condition

        if(espacios[a] && (espacios[a] == espacios[b] && espacios[a] == espacios[c])) {
            return [a,b,c]
        }
    }
    return false
}

Restart.addEventListener('click', restart)

function restart() {
    espacios.fill(null)

    boxes.forEach ( box => {
        box.innerText = ""
        box.style.backgroundColor = ""
    })

    jugador.innerHTML = "Tic Tac Toe"

    jugadoractual = X_TEXT

}

startGame()
