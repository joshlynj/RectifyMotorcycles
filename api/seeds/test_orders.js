/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    {user_id: 1, service_id: 1, completion_status: false, part: 'Carburetor', make: null, model: null, year: null},
    {user_id: 1, service_id: 2, completion_status: true, part: 'Engine Case', make: 'kawasaki', model: 'kz650', year: 1978},
    {user_id: 2, service_id: 6, completion_status: false, part: 'Wheels', make: 'yamaha', model: 'ya420', year: 1985}
    
  ]);
};
