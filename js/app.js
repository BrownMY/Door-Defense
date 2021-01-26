const timerP = document.getElementById('timer')
const you1P = document.getElementById('you1')
const enemy1P = document.getElementById('enemy1')
const you2P = document.getElementById('you2')
const enemy2P = document.getElementById('enemy2')
const script = document.querySelector('.scriptbubble')
const livesClass = document.querySelector('.lives')
const enemyBear = document.getElementById('bearimg')
const cityScene = document.getElementsByClassName('citybg')


console.log(enemyBear.style)



//const game = function() {
     
    let time = 10
    let lives = 5
    const enemyMovement = function() {
        let vertMove = Math.floor(Math.random()*180)
        let horMove = Math.floor(Math.random()*800) 

       enemyBear.style.marginTop =  + 'px'
       enemyBear.style.marginLeft = toString(horMove) + 'px'

    }
    
//}
console.log(toString(vertMove))
// enemyBear.addEventListener('click', function(e) {
//    e.target.
// })
game()

// enemyBear.addEventListener('click', function() {
//     enemyBear.style.top = '2000px'
// })

// setInterval(function(){
//     time--
//     timerP.innerText = 'Time: ' + time + ' sec'
// },1000)
//}