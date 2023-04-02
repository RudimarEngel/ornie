const Model = require("../system/model")

/** @extends Model **/
module.exports = class LoginModel extends Model {
  cosntructor() {
    // super("Login", false)
  }

  async makeLogin(obj) {

    console.log('obj: ', obj)

    return true
  }
}
