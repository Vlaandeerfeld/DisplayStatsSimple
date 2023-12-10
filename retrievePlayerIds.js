import * as fs from 'fs';
import fetch from 'node-fetch';
let playerId;

async function getData(){
    for (let y = 0; y < 10000; y++){
      for (let x = 0; x < 99; x++){
           playerId = 8455414 + (x - (y * 100));

          getPlayerSlug(playerId)
            .then(playerSlug => {
                   fs.writeFile("playerIds/" + playerSlug[0].slice(0,-8) + ".json", JSON.stringify(playerSlug[0]) + " " + JSON.stringify(playerSlug[1]), () => {})
                   console.log(playerSlug);
            }, error => console.log(error));
        }
        await new Promise(r => setTimeout(r, 10000));
    }
}

async function getPlayerSlug(playerId){
    return fetch('https://api-web.nhle.com/v1/player/' + playerId.toString() + '/landing')
        .then(response => response.json())
        .then(data => {
            return [data["playerSlug"], data["featuredStats"]];
    }, error => console.log(error));
}

getData();