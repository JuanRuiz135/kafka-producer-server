import * as express from "express";
import { Kafka } from "kafkajs";

export class MainController {
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post("", this.kafkaPublish);
  }

  kafkaPublish = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      let body = request.body;
      const kafkaConnection = new Kafka({
        brokers: ["localhost:9093", "localhost:9094", "localhost:9095"],
      });
      const producer = kafkaConnection.producer();
      await producer.connect();
      await producer.send({
        topic: body.topic,
        messages: [
          {
            key: "1",
            value: JSON.stringify(body.data),
          },
        ],
      });
      return response.json({ body });
    } catch (error) {
      console.log({ error });
      return response.json({ error });
    }
  };
}
