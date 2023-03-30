
const Controller = require('../system/controller')

module.exports = class LoginCtrl extends Controller {

  constructor(req, res) {
    super(req, res, 'enter')
  }


  async enter(body) {
    // console.log('body: ', body)

    this.result(200, body)
  }
}