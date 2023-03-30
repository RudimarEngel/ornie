const enums = require('../enums.js')

module.exports = class Controller{

  // PUBLIC -------------------------
  constructor(req, res, anonymousMethods = null) {
    this.#request = req;
    this.#response = res;
    this.#anonymousMethods = anonymousMethods ? `,${anonymousMethods},` : null;
  }

  get response() { return this.#response;}

  error(statusCode, message = 'Não foi possível completar a operação!') {
    this.result(statusCode, message, enums.MimeType.Text)
  }

  result(statusCode, content, mimeType = enums.MimeType.Json) {
    const data = (typeof (content) === 'object') ? JSON.stringify(content) : content;

    this.response.statusCode = statusCode;
    this.response.setHeader('Content-Type', enums.MimeType.toString(mimeType))

    this.response.end(data)
  }

  async _dispatch(route) {
    
    // Route validation
    // return 

    // Method validation
    if (typeof this[route.action] !== 'function') { return this.error(401, `Invalid Method: ${route.action}`, enums.MimeType.Text); }

    if (route.params === undefined) { this[route.action]();}
    else { this[route.action](...route.params)}

  }

  // PRIVATE ----------------

  #request;

  #response;

  #anonymousMethods;

}