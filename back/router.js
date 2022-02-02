const express = require('express');
const router = express.Router();
const axios = require('axios');
const https = require('https');
const longitude = -8;
const latitude = 12.65;
const api_key= "be3894dcc7d14e70ca90a2e563f757a3";
const api_url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+api_key;


router.get('/', function (req, res, status) {
  console.log("Ca marche");
  axios.get(api_url)
    .then(response => {
      console.log(response.data);
      const resultat = response.data
      if(resultat){
        res.status(200).json({
          resultat
        })
      }else{
        res.status(404).json({
          message : "Echec d'obtention de la température"
        })
      }

    })
    .catch(error => {
      console.log(error);
    });
})

module.exports = router;
