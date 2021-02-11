'use strict'
const {formatters} = use('Validator')
class RegistroUser {
  get rules () {
    return {
      // validation rules
     // validation rules
     email:  'required|unique',
     password: 'required'
   }
    }
    //Método para validar los campos
  get validateAll (){
    return true
  }
  //Formatear las validaciones
  get formatters (){
    return formatters.JsonApi
  }
  }


module.exports = RegistroUser
