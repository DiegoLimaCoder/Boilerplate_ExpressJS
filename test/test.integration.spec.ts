import { app } from "@/app";
import request from "supertest";
import { describe, expect, it } from "vitest";


describe("GET /", () => {
  it("should return Hello, Express.JS", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Express.JS" });
  });
});
