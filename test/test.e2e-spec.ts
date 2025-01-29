import request from "supertest";
import { app } from "../src/app";


describe("Basic Endpoint Test", () => {
  it("should respond with status 200 for the root route", async () => {
    const res = await request(app).get("/"); // Requisição GET à rota principal

    // Verificar se o status da resposta é 200
    expect(res.status).toBe(200);
  });
});
