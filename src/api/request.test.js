const request = require('./request')

describe('API Request', () => {
  it('should create a request', done => {
    const payLoad = {
      email: 'jaini.guevara@gmail.com',
      password: 'pass1234'
    }
    request({url: '/user/login', body: payLoad}).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })  
  })
})