

module.exports = class Router {

  // PUBLIC
  static async run(req, res){
    console.log('AAAAAAAAAAAAA')


    const route = await Router.#getRoute(req, res)
    console.log('route: ', route)
  }

  // PRIVATE
  static async #getRoute(req, res) {
    console.log('req.url: ', req.url)

    const url = req.url.split('/')
    console.log('url: ', url)
    // exige ao menso o controle e o método
    if(url.length < 3 ) return null;

    const actionParams = await Router.#getActionParams(req, res, url)
    console.log('actionParams: ', actionParams)

    const route = {
      url: req.url,
      controller: url[1],
      // action
    }

    return route
    
  } 

  static async #getActionParams(req, res, url) {
    const actionParams = {
      action: url[2],
      params: undefined
    }

    console.log('req.method: ', req.method)
    console.log('actionParams.action: ', actionParams.action)

    // quer string?
    if (req.method === 'GET' && actionParams.action ) {
      let parts  = actionParams.action.split('?')

      console.log('parts: ', parts)
    }

  }
}