/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('login').del()
  await knex('login').insert([
    {username: 'birdcallboi', passwordHash: 'mrkrabs'},
    {username: 'mrmustachio', passwordHash: 'barnicleboy'},
    {username: 'mseggroll', passwordHash: 'iLoveGary'}
  ]);
};
