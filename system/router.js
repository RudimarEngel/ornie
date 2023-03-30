
const AllowedMethods = ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']

module.exports = class Router {

  // PUBLIC --------------------------------------------------------------------------------
  static async run(req, res){

    if (!await this.#isMethodAllowed(req.method)) {
      return this.#respond(405, `${req.method} não é permitido!`)
    }

    const route = await Router.#getRoute(req, res)
    
    if(!route) {return Router.#respond(404, 'Rota inválida!', res)}

    // controller
    const path = `../ctrl/${route.controller}`
    

    try {
      const arquivo = require.resolve(path) // verifica se o arquivo existe
      
    } catch {
      
      return Router.#respond(404, `Rota inválida: ${route.url}`, res)
    }

    const Ctrl = require(path)
    const ctrl = new Ctrl(req, res)
    ctrl._dispatch(route)

  }

  // PRIVATE ----------------------------------------------------------------------------

  static async #isMethodAllowed(mehod) {
    return (AllowedMethods.indexOf(mehod) >= 0)
  }

  static async #getRoute(req, res) {

    const url = req.url.split('/')
    // exige ao menos o controle e o método
    if(url.length < 3 ) return null;

    const actionParams = await Router.#getActionParams(req, res, url)

    const route = {
      url: req.url,
      controller: url[1],
      action: actionParams.action,
      params: actionParams.params
    }

    return route
    
  } 

  static async #getActionParams(req, res, url) {
    const actionParams = {
      action: url[2],
      params: undefined
    }

    // 
    if (req.method === 'GET' && actionParams.action.indexOf('?') > 0 ) {
      let parts  = actionParams.action.split('?')
      

      actionParams.action = parts[0]
      actionParams.params = [{}]
      parts = parts[1].split('&')
      
      parts.forEach((item) => {
        const pair = item.split('=')
        
        if (pair.length < 2) { return;}
        actionParams.params[0][pair[0]] = decodeURI(pair[1])
      })
    }
    // GET vazio, DELETE, POST, PUT, PATCH


    return actionParams

  }

  static #respond(statusCode, message, response) {
    response.statusCode = statusCode;
    response.end(message);
  }

  
}