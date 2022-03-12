/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('services').del()
  await knex('services').insert([
    {service: 'Carburetor Vapor Blasting', cost: 70},
    {service: 'Engine Case Vapor Blasting', cost: 20},
    {service: 'Cylinders/Heads Vapor Blasting', cost: 75},
    {service: 'Valve Cover Vapor Blasting', cost: 60},
    {service: 'Crankcase Vapor Blasting', cost: 125},
    {service: 'Custom Work', cost: null}
  ]);
};
