const express = require("express");
const axios = require("axios"); //allows us to make a request to an api
const port = process.env.PORT || 3000;
const app = express(); //instance of the server

app.get("/", (req, res) => { //index/home route
  axios.get("https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json")
  .then(function (response) {
    let flights = response.data.acList;
    console.log(response.data.acList);
    for (i = 0; i < flights.length; i++) 
    {
        Id = flights[i].Id
        Op = flights[i].Op
        Lat = flights[i].Lat
        Long = flights[i].Long
        From = flights[i].From
        To = flights[i].To
        console.log("ID: " + Id + ", " + "Airline: " + Op + ", " + "Latitude: " + Lat + ", " + "Longitude: " +  Long  + ", " + "From: " + From + ", " + "To: " + To)
    }
  })
  .catch(function (error){
      console.log(error);
  })
})

app.listen(port, ()=>console.log(`Listening... ${port}`));