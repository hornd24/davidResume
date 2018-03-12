import routers from "./routes";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

export default path => {
  // Create Instance of Express
  const app = express();

  // Run Morgan for Logging
  app.use(logger("dev"));
  app.use(bodyParser.json());
console.log(path)
  app.use(express.static(`${path}/client`));
  app.use("/api/contact", routers.contact);
  app.use("/api/users", routers.users);
  app.use("/sitemap.xml", function (req, res) {
    
    res.sendFile(`${path}/client/public/sitemap.xml`);
  })
  
  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("*", (req, res) => {
    res.sendFile(`${path}/client/index.html`);
  });

  return app;
  // -------------------------------------------------
};
