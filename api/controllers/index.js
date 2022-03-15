const knex = require('./dbConnection');

function createUser(username, passwordHash, first_name, last_name, email, address, phone_number){
    return knex('users').insert({username, passwordHash, first_name, last_name, email, address, phone_number})
}

function getPasswordHash(username){
    return ( knex('users').where({username}).select('passwordHash')
    .then(data=>data[0].passwordHash)
    )}

module.exports = {
    createUser, getPasswordHash
}
