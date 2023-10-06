import request from "supertest";

import app from "../app";

describe("App Root Route", () => {
  it('should return "Hello, World from TypeScript!"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World from TypeScript!");
  });
});
