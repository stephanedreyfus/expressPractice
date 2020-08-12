const request = require("supertest");
const app = require("./app");

/** Testing for route functionality. */

describe("GET /mean", async () => {
    test("Returns the mean of a query of nums", async () => {
      const response = await request(app).get(`/mean?nums=1,-1,4,2`);
      const { data } = response.body;
      expect(response.statusCode).toBe(200);
      expect(data.operation).toEqual("mean");
      expect(data.value).toEqual(1.5);
    });
  });

// describe("GET /cats", async function() {
//     test("Gets a list of 1 cat", async function() {
//       const response = await request(app).get(`/cats`);
//       const { cats } = response.body;
//       expect(response.statusCode).toBe(200);
//       expect(cats).toHaveLength(1);
//       expect(cats[0]).toEqual(cat);
//     });
//   });