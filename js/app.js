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
let lives = 5
console.log(enemyBear.style)

const gameObj = {

    round1: function(){
        let time = 10
        roundP.innerText = 'Round One'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1500)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            
        })                                                               
    },

    round2: function(){
        let time = 10
        roundP.innerText = 'Round Two'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec' 
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1300)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round3: function(){
        let time = 10
        roundP.innerText = 'Round Three'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'  
        },1000)

        const enemyMovement = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1000)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round4: function(){
        let time = 10
        roundP.innerText = 'Round Four'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },800)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round5: function(){
        let time = 10
        roundP.innerText = 'Round Five'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round6: function(){
        let time = 10
        roundP.innerText = 'Round Six'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round7: function(){
        let time = 10
        roundP.innerText = 'Round Seven'
        
        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round8: function(){
        let time = 10
        roundP.innerText = 'Round Eight'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec' 
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round9: function(){
        let time = 10
        roundP.innerText = 'Round Nine'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    },
    round10: function(){
        let time = 10
        roundP.innerText = 'Round Ten'

        const timer = setInterval(function(){
            time--
            timerP.innerText = 'Time: ' + time + ' sec'
        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*550)
            let horMove = Math.floor(Math.random()*800)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            enemyBear.style.height = '80px'
            enemyBear.style.width = '80px'
        },600)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
        })                                                               
    }

}
gameObj.round5()

