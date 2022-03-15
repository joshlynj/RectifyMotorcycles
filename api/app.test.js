const request = require('supertest');
const app = require('./app');

//g2g
xdescribe('GET', () => {
    test('/users should return all users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                //console.log(res.body)
                expect(res.body.length).toBe(2)
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    })

    test('/services should return all services', (done) => {
        request(app)
            .get('/services')
            .expect(200)
            .expect((res) => {
                //console.log(res.body)
                expect(res.body.length).toBe(12)
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    })

    test('/orders should return all orders', (done) => {
        request(app)
            .get('/orders')
            .expect(200)
            .expect((res) => {
                //console.log(res.body)
                expect(res.body.length).toBe(5)
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    })

    test('/orders/1 should return the order object with id of 1', (done) => {
        request(app)
            .get('/orders/1')
            .expect(200)
            .expect((res) => {
                //console.log('orders', res.body)
                expect(res.body[0].part).toBe('Carburetor')
            })
            .end((err, res) => {
                if (err) throw err;
                done();     
            })
    })

    test('/services/1 should return the service object with id of 1', (done) => {
        request(app)
            .get('/services/2')
            .expect(200)
            .expect((res) => {
                //console.log('orders', res.body)
                expect(res.body[0].service).toBe('Engine Case Vapor Blasting')
            })
            .end((err, res) => {
                if (err) throw err;
                done();     
            })
    })

})

xdescribe('DELETE', () => {
    xtest('/orders/6 delete the order with the id of 6', (done) => {
        request(app)
            .delete('/orders/6')
            .expect(200)
            .expect((res) => {
                //console.log('orders', res.body)
                expect(res.body).toBe(1)
            })
            .end((err, res) => {
                if (err) throw err;
                done();     
            })
    })
})



xdescribe('POST', () => {
    const newService = {
        service: 'new handlebars',
        cost: 120
    }
    xtest('/services will add a new service', (done) => {
        request(app)
            .post('/services')
            .send(newService)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                if (err) throw err;
                request(app)
                    .get('/services')
                    .expect(200)
                    .expect((res) => {
                        //console.log(res.body)
                        expect(res.body.length).toBe(12)
                    })
                    .end((err, res) => {
                        if (err) throw err;
                        done()
                    })
            })
    })


    const newOrder = {
        //{user_id: 1, service_id: 2, completion_status: true, part: 'Engine Case', make: 'kawasaki', model: 'kz650', year: 1978},
        user_id: 1,
        service_id: 3,
        completion_status: false,
        part: 'Engine Valve',
        make: 'honda',
        model: 'h43',
        year: 2004
    }

    xtest('/orders will add a new order', (done) => {
        request(app)
            .post('/orders')
            .send(newOrder)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                if (err) throw err;
                request(app)
                    .get('/orders')
                    .expect(200)
                    .expect((res) => {
                        //console.log(res.body)
                        expect(res.body.length).toBe(7)
                    })
                    .end((err, res) => {
                        if (err) throw err;
                        done()
                    })
            })
    })

    const newUser = {
        //{username: 'rowValue1', passwordHash: 'hashSlingingSlasher', first_name: 'Guy', last_name: 'Human', 
    // email: 'motoman@hotmail.com', address: '123 easy street, goodlife CO 80011', phone_number: '8002774233' }
        username: 'snowblowjoe',
        password: 'joeschmo',
        first_name: 'Joe',
        last_name: 'Homan',
        email: 'joe123@gmail.com',
        address: 'bikini bottom',
        phone_number: '3215678899'
    }

    test('/users will add a new user', (done) => {
        request(app)
            .post('/users')
            .send(newUser)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                if (err) throw err;
                request(app)
                    .get('/users')
                    .expect(200)
                    .expect((res) => {
                        //console.log(res.body)
                        expect(res.body.length).toBe(3)
                    })
                    .end((err, res) => {
                        if (err) throw err;
                        done()
                    })
            })
    })
})


xdescribe('PATCH', () => {
    const editedService = {
        service: 'Wrapping',
        cost: 600
    }
    xtest('/services should update an existing order', (done) => {
        request(app)
            .patch('/services/1')
            .send(editedService)
            .set('Accept', 'application/json')
            .expect(200)
            .expect((res) => {
                console.log('services res body:', res.body)
                expect(res.body).toBe(1)
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    })

    const editedOrder = {
        completion_status: true
    }
    xtest('/orders should update an existing order', (done) => {
        request(app)
            .patch('/orders/2')
            .send(editedOrder)
            .set('Accept', 'application/json')
            .expect(200)
            .expect((res) => {
                //console.log('orders:', res.body)
                expect(res.body).toBe(1)
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    })
})

