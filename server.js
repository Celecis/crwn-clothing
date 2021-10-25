const bodyParser = require("body-parser");
const path = require("path");

const stripe = require("stripe")(
  "sk_test_51Jd9pmGo1phruCnDc5BiOnndo9fdKRV7wvGvzX3xnHxYaizeGSyPSgHiUOauRu7d2D8JcTFWygDkEiYiuK5W9HV800NDMdJVpe"
);

const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
