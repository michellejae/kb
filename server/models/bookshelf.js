const knex = require(`../data/knex`);
const bookshelf = require(`bookshelf`)(knex);
//bookshelf.plugin('registry')

module.exports = bookshelf;
