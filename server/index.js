import routers from "./routes";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import PythonShell from 'python-shell';

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
  // app.use('/python.py',function(req,res){
  //   PythonShell.run('username.py', function (err) {
  //     if (err) throw err;
  //     console.log('finished');
  //   });
  // })
  app.use("/sitemap.xml", function (req, res) {
    
    res.sendFile(`${path}/client/public/sitemap.xml`);
  })
  
  app.use("/sitemap.html", function (req, res) {
    
    res.sendFile(`${path}/client/public/sitemap.html`);
  })
  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("*", (req, res) => {
    res.sendFile(`${path}/client/index.html`);
  });

  return app;
  // -------------------------------------------------
};
