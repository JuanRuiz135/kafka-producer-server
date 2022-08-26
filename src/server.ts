import App from "./app";
import { MainController } from "./controllers/main.controller";

const app = new App([new MainController()], 4123);

app.listen();
