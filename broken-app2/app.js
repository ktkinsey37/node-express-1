const express = require('express');
let axios = require('axios');
var app = express();
let globalOutput = [];

// Inits processing of json coming in
app.use(express.json());

// Handles the / route
app.post('/', (req, res) => {
  // Processes and packages incoming requests
  requests = getRequests(req)

  // Runs processed request through fetchDev
  fetchDev(requests, res)
});

// Processes and packages incoming requests
function getRequests(req){
  output = []
  for (let i in req.body.developers){
    output.push(req.body.developers[i])
  }
  return output
}

// Fetches developers one at a time, loads an output array, sends response back
async function fetchDev(requests, res){
  output = []
  for (let i in requests){
    const dev = {}
    let res = await axios.get(`https://api.github.com/users/${requests[i]}`)
    
    // This is the line that needs to have some error handling
    console.log(res)
    dev.bio = res.data.bio, dev.name = res.data.name
    output.push(dev)
  } return res.json(output)
}

app.listen(3000);

// Hey halim, could we talk through some error handling if the axios.get returns a rejected promise?