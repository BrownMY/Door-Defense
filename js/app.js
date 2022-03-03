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
you1P.style.display = 'none'
enemy1P.style.display = 'none'
you2P.style.display = 'none'
enemy2P.style.display = 'none'
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
    currentRound: 1,

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

    moveEnemyOnHard: function () {
        maskImg.classList.toggle('masknewstyle')

        bearImg.style.height = '80px'
        bearImg.style.width = '80px'
    },

    roundFunc: function (gameRound, difficulty, movementInterval, nextRound) {
        gameObj.click = false
        gameObj.time = 10
        roundP.innerText = gameRound
        livesClass.innerText = "Lives: " + gameObj.lives
        gameObj.lives >= 2 ? '' : livesClass.style.color = 'red'

        const bearMovement = setInterval(function () {
            let verticalMove = Math.floor(Math.random() * 350)
            let horizontalMove = Math.floor(Math.random() * 1000)
            enemyBear.style.top = verticalMove + 'px'
            enemyBear.style.left = horizontalMove + 'px'

            if (difficulty === 'hard') {
                gameObj.moveEnemyOnHard()
            }

        }, movementInterval)

        const timer = setInterval(function () {
            timerP.innerText = 'Time: ' + gameObj.time + ' sec'
            gameObj.time--
            gameObj.time > 4 ? timerP.style.color = 'white' : timerP.style.color = 'red'

            if (gameObj.time === 0 && gameObj.click === false && gameObj.lives !== 0) {
                clearInterval(timer)
                clearInterval(bearMovement)
                gameObj.lives--
                livesClass.innerText = "Lives: " + gameObj.lives
                gameObj.roundFunc(gameRound, difficulty, movementInterval)
            } else if (gameObj.time === 0 && gameObj.click === false && gameObj.lives === 0) {
                gameObj.gameOver()
            }

        }, 1000)

        enemyBear.addEventListener('click', function clickFunc() {
            clearInterval(bearMovement)
            clearInterval(timer)
            gameObj.click = true
            maskImg.style.opacity = 1

            const nextRoundDelay = setTimeout(function () {
                maskImg.style.opacity = 0
                nextRound()
                enemyBear.removeEventListener('click', clickFunc)
            }, 1000)

        })
    },

    round1: function () {
        enemyBear.style.opacity = 1
        saniButton.style.display = 'none'
        restart.style.display = 'none'
        script.style.display = 'none'

        gameObj.roundFunc('Round One', 'normal', 1150, gameObj.round2)
    },

    round2: function () {
        gameObj.roundFunc('Round Two', 'normal', 1000, gameObj.round3)
    },
    round3: function () {
        gameObj.roundFunc('Round Three', 'normal', 900, gameObj.round4)
    },
    round4: function () {
        gameObj.roundFunc('Round Four', 'normal', 850, gameObj.round5)
    },
    round5: function () {
        gameObj.lives++
        gameObj.roundFunc('Round Five', 'normal', 800, gameObj.round6)
    },
    round6: function () {
        maskImg.classList.toggle('masknewstyle')
        gameObj.roundFunc('Round Six', 'hard', 900, gameObj.round7)
    },
    round7: function () {
        gameObj.roundFunc('Round Seven', 'hard', 800, gameObj.round8)
    },
    round8: function () {
        gameObj.roundFunc('Round Eight', 'hard', 800, gameObj.round9)
    },
    round9: function () {
        gameObj.roundFunc('Round Nine', 'hard', 800, gameObj.round10)
    },
    round10: function () {
        gameObj.roundFunc('Last Round!', 'hard', 800, gameObj.win)
    },
    win: function () {
        setTimeout(function () {
            roundP.style.display = 'none'
            timerP.innerText = 'Time: 🎊'
            maskImg.classList.toggle('mask')

            const enemyMovement = setInterval(function () {
                let vertMove = Math.floor(Math.random() * 350)
                let horMove = Math.floor(Math.random() * 1100)
                enemyBear.style.top = vertMove + 'px'
                enemyBear.style.left = horMove + 'px'
                bearImg.style.height = '180pxs'
                bearImg.style.width = '180px'
            }, 150)

            winner.innerText = 'YOU GOT THE MASK ON! THANKS FOR KEEPING US SAFE!'

        }, 4000)
    },

    gameOver: function () {

        clearInterval(gameObj.time)
        clearInterval(gameObj.enemyMovement)
        loser.innerText = 'OH, NO! THEY GOT IN AND SPIT BLUE POWERADE ALL OVER THE PRODUCE :/'
        bearImg.style.display = 'none'
        roundP.style.display = 'none'
        restart.style.display = 'block'

    }
}



start.addEventListener('click', gameObj.script)
saniButton.addEventListener('click', function () {
    getReady.style.display = 'none'
    saniButton.style.display = 'none'
    gameObj.round1()
})
restart.addEventListener('click', function () {
    restart.style.display = 'none'
    gameObj.script
})




module.exports = {
    start,
    okButton,
    okButton2
}





