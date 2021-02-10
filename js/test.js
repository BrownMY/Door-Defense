const chai = require('chai')
const assert = require('chai').assert
const expect = require('chai').expect

const { start, okButton, okButton2 } = require('./app')
console.log(start)

// describe('testing start button', function() {
//     it('should print true if button works'), function() {
//         assert.strictEqual(start, document.querySelector('#start'), 'The start button is assigned correctly')
//     }
// })

describe('testing lives number', function() {
    it('should print true if lives === 3', function() {
        assert.strictEqual(lives, 3, 'There are 3 lives')
    }) 
})
