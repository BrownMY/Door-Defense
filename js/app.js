const timerP = document.getElementById('timer')
const directionsP = document.getElementById('directions')
const restart = document.querySelector('#restart')
const start = document.querySelector('#start')
const you1P = document.getElementById('you1')
const enemy1P = document.getElementById('enemy1')
const you2P = document.getElementById('you2')
const enemy2P = document.getElementById('enemy2')
const script = document.querySelector('.script')
const livesClass = document.querySelector('.lives')
const enemyBear = document.getElementById('bearimg')
const bearImg = document.querySelector('.bear')
const maskImg = document.querySelector('.mask')
const roundP = document.getElementById('round')
const winner = document.getElementById('win')
const loser = document.getElementById('lose')
const saniButton = document.querySelector('#sanitizerdiv')
const okButton = document.getElementById('ok') 
const getReady = document.getElementById('ready')
const okButton2 = document.getElementById('ok2')
const okButton3 = document.getElementById('ok3')

enemyBear.style.opacity = 0
restart.style.display = 'none'
start.style.display = 'block'
you1P.style.display ='none'
enemy1P.style.display ='none'
you2P.style.display ='none'
enemy2P.style.display ='none'
directionsP.style.display = 'none'
okButton.style.display = 'none'
saniButton.style.display = 'none'
getReady.style.display = 'none'
okButton2.style.display = 'none'
okButton3.style.display = 'none'
script.style.display = 'none'

const gameObj = {
    time: 10,
    click: false,
    lives: 3,

    script: function () {
        start.style.display = 'none'
        you1P.style.display = 'block'
        script.style.display = 'block'
        setTimeout(function next() {
            enemy1P.style.display = 'block'
        },3000) 
        setTimeout(function next() {
            okButton.style.display = 'block'
         },6000)
         okButton.addEventListener('click', function next2() {
            you1P.style.display ='none'
            enemy1P.style.display ='none' 
            okButton.style.display = 'none'
            you2P.style.display = 'block'
            setTimeout(function next() {
                enemy2P.style.display = 'block'
            },6000) 
            setTimeout(function next() {
                okButton2.style.display = 'block'
             },9000)
        okButton2.addEventListener('click', function(){
            okButton2.style.display = 'none'
            directionsP.style.display = 'block'
            okButton3.style.display = 'block'
            you2P.style.display = 'none'  
            enemy2P.style.display = 'none'
        })
        okButton3.addEventListener('click', function(){
            script.style.backgroundColor = 'none'
            okButton3.style.display = 'none'
            getReady.style.display = 'block'
            directionsP.style.display = 'none'
          
            setTimeout(function next() {
            saniButton.style.display = 'block'
             },2000)
        })          
        
        })

    },
    round1: function(){
        gameObj.time = 10
        enemyBear.style.opacity = 1
        saniButton.style.display = 'none'
        roundP.innerText = 'Round One'
        livesClass.innerText = "Lives: " + gameObj.lives
        restart.style.display = 'none'
        script.style.display = 'none'

        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'

        },1150)

        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
             
            if (gameObj.time === 0 && gameObj.click === false && gameObj.lives === 0) {
                gameObj.gameOver()       

            }else if (gameObj.time === 0 && gameObj.click === false && gameObj.lives !== 0) {
                gameObj.lives--
                livesClass.innerText = "Lives: " + gameObj.lives
                gameObj.round1()
                clearInterval(timer)
                clearInterval(enemyMovement)

            } else {
                gameObj.time--
            }
            
        },1000)

        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout( function(){
                gameObj.round2()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
            
        })                                                               
    },

    round2: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Two'
        maskImg.style.opacity = 0

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1000)
        

        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
            //Timer?? console.log(`Round 2  Timer - ${gameObj.time}`)
            //console.log('Round 1 Timer ${}')
            if (gameObj.time === 0 && gameObj.click === false && gameObj.lives === 0) {
                gameObj.gameOver()

            }else if (gameObj.time === 0 && gameObj.click === false) {
                gameObj.lives--
                livesClass.innerText = "Lives: " + gameObj.lives
                clearInterval(timer)
                clearInterval(enemyMovement)
                gameObj.round1()

            } else {
                gameObj.time--
            }

        },1000)
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true 
            maskImg.style.opacity = 1
            const maskDelay = setTimeout( function(){
                gameObj.round3()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round3: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Three'
        maskImg.style.opacity = 0
        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec'  
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },900)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout( function(){
                gameObj.round4()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
            
        })                                                               
    },
    round4: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Four'
        maskImg.style.opacity = 0

        const timer = setInterval(function(){

            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },850)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },1000)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout( function(){
                gameObj.round5()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round5: function(){
        gameObj.time = 10
        this.lives ++
        roundP.innerText = 'Round Five'
        maskImg.style.opacity = 0

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
        },800)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout( function(){
                gameObj.round6()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round6: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Six'
        maskImg.classList.toggle('masknewstyle')
        maskImg.style.opacity = 0
        
        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
            

        },900)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout(function(){
                gameObj.round7()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round7: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Seven'
        maskImg.classList.toggle('masknewstyle')
        maskImg.style.opacity = 0
        
        const timer = setInterval(function(){
           
            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
            maskImg.style.height = '80px'
            maskImg.style.width = '80px'
        },800)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout(function(){
                gameObj.round8()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round8: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Eight'
        maskImg.classList.toggle('masknewstyle')
        maskImg.style.opacity = 0

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec' 
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
            maskImg.style.height = '80px'
            maskImg.style.width = '80px'
        },700)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout(function(){
                gameObj.round9()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round9: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Nine'
        maskImg.classList.toggle('masknewstyle')
        maskImg.style.opacity = 0

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)
        
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
        },600)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout(function(){
                gameObj.round10()     
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
        })                                                               
    },
    round10: function(){
        gameObj.time = 10
        roundP.innerText = 'Round Ten'
        maskImg.classList.toggle('masknewstyle')
        maskImg.style.opacity = 0

        const timer = setInterval(function(){
            
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--

        },1000)

        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1000)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '80px'
            bearImg.style.width = '80px'
            maskImg.style.height = '80px'
            maskImg.style.width = '80px'
            
        },550)
        
        
        enemyBear.addEventListener('click', function clickFunc(){
            clearInterval(enemyMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1
            const maskDelay = setTimeout( function(){
                gameObj.win()   
                enemyBear.removeEventListener('click', clickFunc)}, 1500)
            
        })
                                                                     
    
    },
    win: function () {
        setTimeout( function() {

        timerP.innerText = 'Time: 🎊'
        maskImg.classList.toggle('mask')
    
        const enemyMovement = setInterval(function(){
            let vertMove = Math.floor(Math.random()*350)
            let horMove = Math.floor(Math.random()*1100)
            enemyBear.style.top = vertMove + 'px'
            enemyBear.style.left = horMove + 'px'
            bearImg.style.height = '180pxs'
            bearImg.style.width = '180px'
        },150)
            
            winner.innerText = 'YOU GOT THE MASK ON! THANKS FOR KEEPING US SAFE!'
          
        }, 4000)},

    gameOver: function () {

            clearInterval(timer)
            clearInterval(gameObj.enemyMovement)
            loser.innerText = 'OH, NO! THEY GOT IN AND SPIT BLUE POWERADE ALL OVER THE PRODUCE :/'
            bearImg.style.display = 'none'
            winner.style.display = 'none'
            restart.style.display = 'block'

            }
        }
    
    

start.addEventListener('click', gameObj.script)
saniButton.addEventListener('click', function() {
    getReady.style.display = 'none'
    saniButton.style.display = 'none'
    gameObj.round1()
})
restart.addEventListener('click', function() {
    restart.style.display = 'none'
    gameObj.script})



// const typeFunc = function(words){
//     const wordsTyped = words.split('')

// for (let i = 0; i < wordsTyped.length; i++) {
//       setInterval(function(){
//           console.log(wordsTyped[i])
//       }, 100);
//   }
// }

  
// typeFunc('Hello there!')





