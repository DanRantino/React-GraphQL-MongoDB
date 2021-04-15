const { gql } = require ('apollo-server')

module.exports = gql`
  type Livros {
    identificador: Int!
    titulo: String!
    autor: String!
  }
  input CadastrarLivro {
    titulo: String!
    autor: String!
  }
  type Query{
    getLivros: [Livros]
    getLivro(identificador: Int!): Livros
  }
    type Mutation {
      cadastraLivro(identificador: Int!,titulo: String!,autor: String!): Livros!
      deleteLivro(identificador: Int!): String!
      updateLivro(identificador: Int!,livro: CadastrarLivro): Livros!
    }
`