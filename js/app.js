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
const winner = document.getElementById('win')
const lose = document.getElementById('lose')
let lives = 5
console.log(enemyBear.style)

const gameObj = {
    time: 10,
    round1: function(){
        
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
        },1000)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },1300)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },1000)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },800)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
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
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            
            winner.innerText = "YOU WIN!"
        })                                                               
    }

}
gameObj.round1()

