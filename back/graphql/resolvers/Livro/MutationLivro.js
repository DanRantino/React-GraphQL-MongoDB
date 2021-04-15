const Livro = require('../../../models/Livro')

module.exports = { Mutation:
{
    async cadastraLivro(_,args,ctx,info)
  {
    const newLivro = new Livro({
      identificador: args.identificador,
      titulo: args.titulo,
      autor: args.autor
    })
    const res = await newLivro.save()
      return res
  },
  async deleteLivro (_,args,ctx,info)
  {
    const livro = await Livro.findOneAndDelete({identificador: args.identificador})
    if (livro)
    {
      return 'Livro deletado com sucesso!'
    }
    return 'Livro não existente!'
  },
  async updateLivro (_,args,ctx,info)
  {
    let filtro = {identificador:args.identificador}
    let update = {...args.livro}
    const livro = await Livro.findOneAndUpdate(filtro,update,{useFindAndModify:false})
    await livro.save()
    return livro
  }
}}
