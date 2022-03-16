/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 * 
 * 
 *  const imgArray = ["https://images.squarespace-cdn.com/content/v1/5c816848a09a7e2051739c39/1558378270345-DWA4FVF6JDQ71M3KWLZO/Vapor+Blasting+Carb.JPG?format=500w",
        "https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg", "https://i.ebayimg.com/images/g/WloAAOSwJUdeXYMp/s-l640.jpg",
        "https://cdn.thumpertalk.com/uploads/imageproxy/i-XjJHkc8-L.jpg.1e03f40e4325a014f4899b7664739e15.jpg", "http://forums.pelicanparts.com/uploads26/B97B8566_044D_4DA8_9BA1_AB16F2FEDE371519580731.jpg",
        "http://placekitten.com/300/300"]
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('services').del()
  await knex('services').insert([
    {service: 'Carburetor Vapor Blasting', cost: 70, image: 'https://images.squarespace-cdn.com/content/v1/5c816848a09a7e2051739c39/1558378270345-DWA4FVF6JDQ71M3KWLZO/Vapor+Blasting+Carb.JPG?format=500w'},
    {service: 'Engine Case Vapor Blasting', cost: 20, image: 'https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg'},
    {service: 'Cylinders/Heads Vapor Blasting', cost: 75, image: 'https://i.ebayimg.com/images/g/WloAAOSwJUdeXYMp/s-l640.jpg'},
    {service: 'Valve Cover Vapor Blasting', cost: 60, image: 'https://cdn.thumpertalk.com/uploads/imageproxy/i-XjJHkc8-L.jpg.1e03f40e4325a014f4899b7664739e15.jpg'},
    {service: 'Crankcase Vapor Blasting', cost: 125, image: 'http://forums.pelicanparts.com/uploads26/B97B8566_044D_4DA8_9BA1_AB16F2FEDE371519580731.jpg'},
    {service: 'Custom Work', cost: null, image:'https://www.aerospecialties.com/app/uploads/2017/05/RBI9900TM-and-RBA2-isolated_01.jpg'}
  ]);
};
