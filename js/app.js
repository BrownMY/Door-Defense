const timerP = document.getElementById('timer')
const you1P = document.getElementById('you1')
const enemy1P = document.getElementById('enemy1')
const you2P = document.getElementById('you2')
const enemy2P = document.getElementById('enemy2')
const script = document.querySelector('.scriptbubble')
const livesClass = document.querySelector('.lives')
const enemyBear = document.getElementById('bearimg')
const bearImg = document.querySelector('.bear')
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
        gameObj.time = 10
        enemyBear.style.opacity = 1
        startButton.style.display = 'none'
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

        },1400)
        
        livesClass.innerText = "Lives: " + gameObj.lives

        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round2()
            
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },

    round2: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Two'
        
        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1300)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round3()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round3: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Three'
        
        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec'  
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1200)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round4()
            enemyBear.removeEventListener('click', clickFunc)
            
        })                                                               
    },
    round4: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Four'

        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1100)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round5()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round5: function(){
        gameObj.time = 10
        this.lives ++
        roundP.innerText = 'Round Five'

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
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round6()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round6: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Six'
        
        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'

        },1000)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round7()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round7: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Seven'
        
        const timer = setInterval(function(){
           
            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
        },950)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round8()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round8: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Eight'

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
        },850)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round9()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round9: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Nine'

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
        },750)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            gameObj.round10()
            enemyBear.removeEventListener('click', clickFunc)
        })                                                               
    },
    round10: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Ten'

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*900)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
        },650)
        
        
        enemyBear.addEventListener('click', function(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            winner.innerText = "YOU WIN!"
        })  
                                                                     
    
    },
    // win: const enemyMovement = setInterval(function(){
    //         let vertMove = Math.floor(Math.random()*350)
    //         let horMove = Math.floor(Math.random()*900)
    //         enemyBear.style.top = vertMove + 'px'
    //         enemyBear.style.left = horMove + 'px'
    //         bearImg.style.height = '80px'
    //         bearImg.style.width = '80px'
    //     },650)
    //     enemyBear.addEventListener('click', function(){
            
    //         winner.innerText = "YOU WIN!"
          
        //})
    }
// if (time === 0 && gameObj.click === false) {
//            gameObj.lives--
//        }

startButton.addEventListener('click', gameObj.round1)

//}
