const mongoose = require('mongoose');
const graphql = require('graphql');
const {GraphQLObjectType} = graphql;

//put here your rootqueries

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({})
});

module.exports = RootQuery;