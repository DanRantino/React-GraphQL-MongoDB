const Livro = require('../../../models/Livro')

module.exports = {
Query:{
  async getLivros (_,args,context)
  {
    const Livros = await Livro.find()
    console.log(Livros) 
    return Livros
  },
  async getLivro (_,args,context,info)
  {
    console.log(args)
    const Livros = await Livro.findOne({identificador: args.identificador})
    console.log(Livros)
    return Livros
  }}
}