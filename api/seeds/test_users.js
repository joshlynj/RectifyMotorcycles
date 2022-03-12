/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'rowValue1', password: 'rowValue2', first_name: 'Guy', last_name: 'Human', 
    email: 'motoman@hotmail.com', address: '123 easy street, goodlife CO 80011', phone_number: '8002774233' }
  
  ]);
};
