/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', table =>{
        table.increments('id');
        table.integer('user_id');
        table.integer('service_id');
        table.boolean('completion_status');
        table.string('part');
        table.string('make');
        table.string('model');
        table.integer('year');
        table.timestamps(true, true);
    
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders');
};
