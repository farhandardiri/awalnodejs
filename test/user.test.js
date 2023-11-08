import supertest from "supertest";
import { web } from "../src/application/web.js"
import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";

describe("POST /api/users", function () {

    afterEach(async () => {
      await prismaClient.user.deleteMany({
            where: {
            username:'farhan'
        }
    })
})

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'farhan',
                password: 'rahasia',
                name: 'farhan dardiri'
            });
        
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("farhan");
        expect(result.body.data.name).toBe("farhan dardiri");
        expect(result.body.data.password).toBeUndefined();
    });

    it('should reject is request in invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: ''
            });
        
        logger.info(result.body)
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

      it('should reject if username already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'farhan',
                password: 'rahasia',
                name: 'farhan dardiri'
            });
          
          logger.info(result.body)
          
        
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("farhan");
        expect(result.body.data.name).toBe("farhan dardiri");
          expect(result.body.data.password).toBeUndefined();
          

         result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'farhan',
                password: 'rahasia',
                name: 'farhan dardiri'
            });
        
          logger.info(result.body)
          
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined()
    });
    
})