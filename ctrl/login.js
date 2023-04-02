
const Controller = require('../system/controller')

module.exports = class LoginCtrl extends Controller {

  constructor(req, res) {
    super(req, res, 'enter')
  }


  async enter(body) {
    const answer  = await this.model.makeLogin(body)
    console.log('answer: ', answer)

    this.result(200, {result: answer})
  }
}