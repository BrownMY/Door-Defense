
const sep = '***************************'

const typeFunc = function(words){
      const splitString = words.split('')
      for (let i = 0; i < splitString.length; i++) {
         setTimeout(() => {
            console.log(i)
         }, 1000);
     }
      
}

  
typeFunc('Hello there!')