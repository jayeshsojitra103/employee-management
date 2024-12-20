/* eslint-disable @typescript-eslint/no-explicit-any */
import { createServer, Model, Factory, RestSerializer } from 'miragejs';


export function makeServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      employee: Model,
    },

    factories: {
      employee: Factory.extend({
        id(i: number) {
          return i + 1;
        },
        name(i: number) {
          return `Employee ${i + 1}`;
        },
        email(i: number) {
          return `employee${i + 1}@example.com`;
        },
        position(i: number) {
          return `Position ${i + 1}`;
        },
      }),
    },

    seeds(server) {
      // Create 10 employees using the factory
      server.createList('employee', 10);
    },

    

    routes() {
      this.namespace = 'api';

      this.get('/employees', (schema) => {
        return schema.all('employee');
      });

      this.post('/employees', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('employee', attrs);
      });

      this.put('/employees/:id', (schema:any, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        return schema.find('employee', id).update(attrs);
      });

      this.del('/employees/:id', (schema:any, request) => {
        const id = request.params.id;
        return schema.find('employee', id).destroy();
      });
    },
  });


  return server;
}
