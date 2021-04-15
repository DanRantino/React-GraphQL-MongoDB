const {model, Schema}= require('mongoose')

const userSchema = new Schema ({
  //_id: Schema.Types.ObjectId,
  identificador: {type:Number,indexedDB: true},
  titulo: String,
  autor: String
})


module.exports = model('Livros',userSchema)