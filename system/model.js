

module.exports = class Model {
  // -- PUBLIC ---------------------------------
  constructor ( singleTable = null, roleProperty = null, softDelete = false) {
    this.#singleTable = singleTable;
    this.#roleProperty = roleProperty;
  }



  // -- PROTECTED --------------------------------------
  get _db_read() {
    if(!this.#db_read) {
      
    }

  }

  get _db_write() {

  }





  // -- PRIVATE -------------------------------------
  #

}