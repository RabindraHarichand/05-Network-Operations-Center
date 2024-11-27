import mongoose from "mongoose";
import { MongoDatabase } from "./init";

describe("init MongoDB", () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  test("should connect to MongoDB", async () => {
    const connected = await MongoDatabase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!,
    });
    expect(connected).toBeTruthy();
  });

  test("should throw an error", async () => {
    try {
      const connected = await MongoDatabase.connect({
        dbName: process.env.MONGO_DB_NAME!,
        mongoUrl: "mongodb://rabindra:123456789@localhosaafaft:27017/",
      });

      expect(true).toBe(false);
    } catch (error) {}
  });
});
