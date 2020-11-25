let finalPathSet = [];
   let zonePolyListFile;
   jQuery.getJSON("https://raw.githubusercontent.com/harshrajdhote/Node_Rest_APIs/master/Boundaries%20-%20Community%20Areas%20(current).geojson",(data)=>{
    zonePolyListFile = data;
    } );
  
    function getRouteCost(routeGeometry)
    {
      let zonePolyList = zonePolyListFile.features;
      let pointsOnRoute = routeGeometry;
      let zoneSet = new Set();
      pointsOnRoute.forEach(pointsOnRouteElement => {
        zonePolyList.forEach(zonePolyListElement => {
          let zoneShape = (zonePolyListElement.geometry.coordinates[0])[0];
          let zonePolygon = turf.polygon([zoneShape],{name:'poly1'});
          if(turf.booleanPointInPolygon(turf.point([pointsOnRouteElement[1],pointsOnRouteElement[0]]),zonePolygon)){
          zoneSet.add(zonePolyListElement.properties.area_num_1);
          }
        })
        // console.log("result",zoneSet);
      });
      return zoneSet;
    }



    