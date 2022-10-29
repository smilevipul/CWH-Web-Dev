function updateMap() {
  fetch("/data.json")
    .then((response) => response.json())
    .then(rsp=> {
      console.log("data is updating with real time");

      rsp.data.forEach(element => {
        latitude = element.Latitude;
        longitude = element.Longitude;


        casesd = element.Death;
        if(casesd==0)
        {
            color = "green"
        }
        else{
            color = `rgb(${casesd},0,0)`
        }


        //mark on the map

        new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude,latitude])
            .addTo(map);

      });
    })
}

let interval = 20000;
setInterval(updateMap,interval)
