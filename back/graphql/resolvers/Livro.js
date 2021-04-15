const Livro = require('../../models/Livro')
const {Mutation} = require('./Livro/MutationLivro')
const {Query} = require('./Livro/QueryLivro')

module.exports = {
  Query,
  Mutation
}