import { app } from "../src/app";
import request from "supertest";



describe("GET /", () => {
  it("should return Hello, Express.JS", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Express.JS" });
  });
});
