import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';
import app from '../index.js';

describe('Express app tests', () => {
    it('Should respond with Hello, World! on GET /', async () => {
        const response = await request(app)
            .get('/');

        expect(response.text).to.equal('Hello, World!');
    });

    it('Should return 200 status code for homepage', async () => {
        const response = await request(app)
            .get('/');

        expect(response.status).to.equal(200);
    });

    it('Should respond with Hello, You! on GET /', async () => {
        const response = await request(app)
            .get('/You');

        expect(response.text).to.equal('Hello, You!');
    });

    it('Should return 200 status code for homepage', async () => {
        const response = await request(app)
            .get('/You');

        expect(response.status).to.equal(200);
    });

});