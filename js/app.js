const timerP = document.getElementById('timer')
const you1P = document.getElementById('you1')
const enemy1P = document.getElementById('enemy1')
const you2P = document.getElementById('you2')
const enemy2P = document.getElementById('enemy2')
const script = document.querySelector('.scriptbubble')
const livesClass = document.querySelector('.lives')
const enemyBear = document.getElementById('bearimg')
const roundP = document.getElementById('round')
const winner = document.getElementById('win')
const loser = document.getElementById('lose')
const startButton = document.querySelector('button')




enemyBear.style.opacity = 0

//function gameStart () {
const gameObj = {
    time: 10,
    click: false,
    lives: 5,
    round1: function(){
        enemyBear.style.opacity = 1
        roundP.innerText = 'Round One'
        
        const timer = setInterval(function(){
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1600)
        
        livesClass.innerText = "Lives: " + gameObj.lives

        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round2()
            
            
        })                                                               
    },

    round2: function(){
        this.time = 10
        roundP.innerText = 'Round Two'
        
        const timer = setInterval(function(){
            gameObj.time--
            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1500)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round3()
        })                                                               
    },
    round3: function(){
        this.time = 10
        roundP.innerText = 'Round Three'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'  
        },1000)

        const enemyMovement = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1400)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round4()
        })                                                               
    },
    round4: function(){
        this.time = 10
        roundP.innerText = 'Round Four'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1300)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round5()
        })                                                               
    },
    round5: function(){
        this.time = 10
        lives ++
        roundP.innerText = 'Round Five'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1200)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round6()
        })                                                               
    },
    round6: function(){
        this.time = 10
        roundP.innerText = 'Round Six'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },1100)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round7()
        })                                                               
    },
    round7: function(){
        this.time = 10
        roundP.innerText = 'Round Seven'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },1050)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round8()
        })                                                               
    },
    round8: function(){
        this.time = 10
        roundP.innerText = 'Round Eight'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec' 
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },950)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round9()
        })                                                               
    },
    round9: function(){
        this.time = 10
        roundP.innerText = 'Round Nine'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },900)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round10()
        })                                                               
    },
    round10: function(){
        this.time = 10
        roundP.innerText = 'Round Ten'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },750)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            winner.innerText = "YOU WIN!"
        })  
                                                                     
    
    }
}
// if (time === 0 && gameObj.click === false) {
//            gameObj.lives--
//        }

startButton.addEventListener('click', gameObj.round1)
//}
