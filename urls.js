const fs = require('fs');
const axios = require('axios');
const file = process.argv[2];

// Acquire the file path and try to read it
function cat(file){
    fs.readFile(`${file}`, 'utf8' , (err, data) => {
        if (err) {
            // Log an error if failure
          console.error(err)
          return
        } else {

            // Pass the read data to handleFileData
            handleFileData(data)
        }
      })}

    //   Fetches the requests, then passes them to writeReceivedData to fully finish them
async function webCat(url) {
    try {
        let resp = await axios.get(url);
        writeReceivedData(resp.data, url);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
    }
    }

    // Build a list of what is being requested
async function handleFileData(data){

    // Split the entries and push them into an array, get rid of extra spaces at the end
    let addresses = data.split(/\n/)
    if (addresses[addresses.length - 1] == " "){
          addresses.pop()
    }

    for (let i in addresses){

        // Run the processed addresses through webCat function
        await webCat(addresses[i])
        // THIS WILL RUN ON EACH ADDRESS PLUS THE PROBLEM ONE AT THE END
    }
}

// Writes desired info to desired files
function writeReceivedData(data, url){

    // This changes the urls, but does not get rid of pathing
    url = url.replace(/(^\w+:|^)\/\//, '')

    // When the url is acquired, write to the new file
    fs.writeFile(`${url}.txt`, data, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Wrote to ${url}`)
        }
    })

}

cat(file)