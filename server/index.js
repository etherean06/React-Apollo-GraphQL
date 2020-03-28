'use strict'

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = require('graphql');
const cors = require('cors');
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { getBookById, getBooks, getBookByRead, getBookByNotRead, createBooks } = require("./data")


const PORT = process.env.PORT || 3000;
const server = express()

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const bookType = new GraphQLObjectType({
    name: "Book",
    description: "my collection of books for 2020",
    fields: {
        id: {
            type: GraphQLID,
            description: "ID of the book"
        },
        title: {
            type: GraphQLString,
            description: "book description"
        },
        duration: {
            type: GraphQLInt,
            description: "duration of the book"
        },
        read: {
            type: GraphQLBoolean,
            description: "have you watched the book"
        },
        rating: {
            type: GraphQLInt,
            description: "rating of a book" 
        },
        imageUrl: {
            type: GraphQLString,
            description: "cover of the book"
        },
        author: {
            type: GraphQLString,
            description: "author of the book"
        },
        description: {
            type: GraphQLString,
            description: "description of the book"
        },
    }
})

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type.',
    fields: {
        books: {
            type: new GraphQLList(bookType),
            resolve: getBooks
        },
        read: {
            type: new GraphQLList(bookType),
            resolve: getBookByRead
        },
        notRead: {
            type: new GraphQLList(bookType),
            resolve: getBookByNotRead
        },
        book: {
            type: bookType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "The id of the book."
                },
            },
            resolve: (_, args) => {
                return getBookById(args.id)
            }
        },
    },
});

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The root mutation type',
    fields: {
        createBook: {
            type: bookType,
            args: {
                title: {
                    type: GraphQLString,
                    description: "book description"
                },
                duration: {
                    type: GraphQLInt,
                    description: "duration of the book"
                },
                read: {
                    type: GraphQLBoolean,
                    description: "have you watched the book"
                },
                read: {
                    type: GraphQLInt,
                    description: "Rating of a book"
                },
            },
            resolve: (_, args) => {
                return createBooks( args )
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

server.use('/graphql', cors(), graphqlHTTP({
    schema,
    graphiql: true,
}))