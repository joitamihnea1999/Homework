let assert = require('assert')

describe('distance', function(){
	let distance = require('../app').distance
	it('returns 1', function(){
		assert.equal(distance(['a','b'],['a']), 1)
	})
	it('returns 2', function(){
		assert.equal(distance(['a', 'a', 'a'], ['a', 'c', 'd', 'c']), 2)
	})
	it('throws an exception', function(){
		assert.throws(() => distance(['a','b'], 'c'), {message : 'InvalidType'})
	})
	it('returns 0', function(){
		assert.equal(distance([], []), 0)
	})
	it('returns 2', function(){
		assert.equal(distance(['1'], [1]), 2)
	})
})