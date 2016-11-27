/**
 *
 * Created 16/8/30.
 */

let assert = require('assert')

let expect = require('chai').expect

let foo = 'bar'
let GV = {
  app: {
    detail:{}
  }
}
let beverages = {
  tea: ['chai', 'mocha']
}
GV.app.detail
describe('array', () => {
  describe('#indexOf()', ()=> {
    it('当值不存在时返回 -1', ()=> {
      assert.equal(-1, [1,2,3].indexOf(5))
      assert.equal(-1, [1,2,3].indexOf(0))
    })
    it('chai测试', ()=>{
      expect(foo).to.be.a('string')
      expect(foo).to.equal('bar')
      expect(beverages).to.have.property('tea').with.length(2)
    })
  })
})
