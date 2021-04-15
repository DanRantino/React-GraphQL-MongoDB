const LivroResolvers = require('./Livro')

module.exports = {
  Query : {
    ...LivroResolvers.Query
  },
  Mutation: {
    ...LivroResolvers.Mutation
  }
}