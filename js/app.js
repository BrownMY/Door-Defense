const timerP = document.getElementById('timer')
const you1P = document.getElementById('you1')
const enemy1P = document.getElementById('enemy1')
const you2P = document.getElementById('you2')
const enemy2P = document.getElementById('enemy2')
const script = document.querySelector('.scriptbubble')
const livesClass = document.querySelector('.lives')
const enemyBear = document.getElementById('bearimg')
const cityScene = document.getElementsByClassName('citybg')
const roundP = document.getElementById('round')

console.log(enemyBear.style)

const gameObj = {

    round1: function(){
        let time = 10
        let lives = 5
        roundP.innerText = 'Round One'

        let enemyMovement = function() {
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
            let vertMove = Math.floor(Math.random()*150)
            let horMove = Math.floor(Math.random()*800)
           // console.log(vertMove)
           //console.log(horMove)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        }
        
        const timer = setInterval(enemyMovement
            
        //     let vertMove = Math.floor(Math.random()*150)
        //     let horMove = Math.floor(Math.random()*800)
        //    // console.log(vertMove)
        //    //console.log(horMove)
        //     enemyBear.style.top = vertMove + 'px'
        //     enemyBear.style.left = horMove + 'px'
        ,1500)
        if (time === 0) {
            clearInterval(enemyMovement())
        }
    },

    round2: null,
    round3: null,
    round4: null,
    round5: null,
    round6: null,
    round7: null,
    round8: null,
    round9: null,
    round10: null

}
gameObj.round1()

//const game = function() {
    //
     
    // let time = 10
    // let lives = 5

    // setInterval(function(){
    // time--
    // timerP.innerText = 'Time: ' + time + ' sec'
    // let vertMove = Math.floor(Math.random()*180)
    // let horMove = Math.floor(Math.random()*800)
    // console.log(vertMove)
    // console.log(horMove)
    // enemyBear.style.top = vertMove.toString
    //     enemyBear.style.marginLeft = horMove.toString

    // },1000) 



   
    




    
//}


// enemyBear.addEventListener('click', function(e) {
//    e.target.
// })


// enemyBear.addEventListener('click', function() {
//     enemyBear.style.top = '2000px'
// })


//}
//game()