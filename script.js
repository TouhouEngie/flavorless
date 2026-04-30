const fileserverApi = "https://fileserver.touhouengie.com/drive/webpage_data/mp3s/"

function swapAudio(event) {
    event.preventDefault();
    song = fileserverApi + event.target.value;
    document.getElementById('audio').src = song;
    document.getElementById('audio').play();
}

async function getTransitInfo(type, stationId) {
    // not secure, but why do we need security for a simple experiment using a public API?
    await fetch("https://subwayinfo.nyc/api" + type + "/arrivals?station_id=" + stationId, { method: "GET", headers: { "Access-Control-Allow-Origin": "*" }})
        .then(response => {
            if (response.ok) {
                return response.json(); // do we use json or what?
            } else {
                throw new Error('Failed request');
            }
        })
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        })
}

document.getElementById("transit").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(getTransitInfo("", document.getElementById("text")));
})