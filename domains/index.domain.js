import dotenv from "dotenv";
dotenv.config();

const welcome = [
    (req, res) => {
      res.redirect(process.env.APP_URL+ "/index.html");
    },
  ],
  indexDomain = { welcome };

export default indexDomain;
