// location data
var locations = [
  {"location":["Washington DC","United States"],
   "coordinates":[-77.0059, 38.5417],
   "duration":0,
   "arrive":[16,"evening"],
   "depart":[16,""],
   "transport":{
     "mode":"flight",
     "carrier":"United",
     "iata":"DCA",
     "equipment":"737-800",
     "layover":[false, false]}},

  {"location":["Chicago","United States"],
  "coordinates":[-87.6298, 41.8781],
   "duration":1,
   "arrive":[19,"morning"],
   "depart":[19,"afternoon"],
   "transport":{
     "mode":"flight",
     "carrier":"All Nippon",
     "number":11,
     "iata":"ORD",
     "equipment":"777-300ER",
     "layover":[true, false]}},

  {"location":["Tokyo","Japan"],
  "coordinates":[139.6917, 35.6895],
   "duration":1,
   "arrive":[20,"afternoon"],
   "depart":[20,"early-evening"],
   "transport":{
     "mode":"flight",
     "carrier":"Air Japan",
     "number":811,
     "iata":"NRT",
     "equipment":"767-300",
     "layover":[true, false]}},

  {"location":["Hong Kong","Hong Kong"],
  "coordinates":[114.1095, 22.3964],
   "duration":2,
   "arrive":[20,"midnight"],
   "depart":[21,"morning"],
   "transport":{
     "mode":"flight",
     "carrier":"Jetstar Pacific",
     "number":679,
     "iata":"HKG",
     "equipment":"A320",
     "layover":[true, true]}},

  {"location":["Hanoi","Viet Nam"],
  "coordinates":[105.8342, 21.0278],
   "duration":8,
   "arrive":[21,"afternoon"],
   "depart":[24,"early-morning"],
   "companions":["Hung","Hoang","Minh","Linh"],
   "transport":{
     "mode":"flight",
     "carrier":"Jetstar Pacific",
     "number":781,
     "iata":"HAN",
     "equipment":"A320",
     "layover":[false, false]}},

  {"location":["HCM City","Viet Nam"],
  "coordinates":[106.6297, 10.8231],
   "duration":6,
   "arrive":[24,"morning"],
   "depart":[27,"noon"],
   "companions":["Medha","Mattori"],
   "transport":{
     "mode":"flight",
     "carrier":"Vietjet",
     "number":842,
     "iata":"HCM",
     "equipment":"A320",
     "layover":[false, false]}},

  {"location":["Taipei","Taiwan"],
  "coordinates":[121.5654, 25.0330],
   "duration":5,
   "arrive":[27,"evening"],
   "depart":[30,"morning"],
   "transport":{"mode":"bus"}},

  {"location":["Keeleung","Taiwan"],
  "coordinates":[121.7392, 25.1276],
   "duration":2,
   "arrive":[30,"morning"],
   "depart":[30,"early-evening"],
   "transport":{"mode":"bus"}},

  {"location":["Taipei","Taiwan"],
  "coordinates":[121.5654, 25.0330],
   "duration":1,
   "arrive":[30,"evening"],
   "depart":[30,"midnight"],
   "companions":["Bradyj","Christine","Dora","Ruth","Neb","Sophie"],
   "transport":{
     "mode":"flight",
     "number":216,
     "carrier":"Tiger Air",
     "iata":"TPE",
     "equipment":"A320",
     "layover":[false, false]}},

  {"location":["Tokyo","Japan"],
  "coordinates":[139.6917, 35.6895],
   "duration":7,
   "arrive":[30,"midnight"],
   "depart":[4,"early-morning"],
   "companions":["Joy","Hannah","April","Sayumi"],
   "transport":{
     "mode":"flight",
     "carrier":"All Nippon",
     "number":985,
     "iata":"HND",
     "equipment":"787-8",
     "layover":[false, true]}},

  {"location":["Itami/Minoh","Japan"],
  "coordinates":[135.4705, 34.8269],
   "duration":1,
   "arrive":[4,"morning"],
   "depart":[4,"noon"],
   "transport":{"mode":"train"}},

  {"location":["Kyoto","Japan"],
  "coordinates":[135.7680, 35.0116],
   "duration":3,
   "arrive":[4,"afternoon"],
   "depart":[5,"noon"],
   "companions":["Mr&Mrs. Damboise"],
   "transport":{"mode":"train"}},

  {"location":["Osaka","Japan"],
  "coordinates":[135.5022, 34.6937],
   "duration":3,
   "arrive":[5,"afternoon"],
   "depart":[6,"evening"],
   "companions":["Mr&Mrs. Damboise"],
   "transport":{
     "mode":"flight",
     "carrier":"Peach Air",
     "number":67,
     "iata":"KIX",
     "equipment":"A320",
     "layover":[false, false]}},

  {"location":["Hong Kong","Hong Kong"],
  "coordinates":[114.1095, 22.3964],
   "duration":6,
   "arrive":[6,"midnight"],
   "depart":[10,"afternoon"],
   "transport":{
     "mode":"flight",
     "carrier":"Air Japan",
     "number":810,
     "iata":"HKG",
     "equipment":"767-300",
     "layover":[false, false]}},

  {"location":["Tokyo","Japan"],
  "coordinates":[139.6917, 35.6895],
   "duration":2,
   "arrive":[10,"early-evening"],
   "depart":[11,"morning"],
   "transport":{
     "mode":"flight",
     "carrier":"All Nippon",
     "number":2,
     "iata":"NRT",
     "equipment":"777-300ER",
     "layover":[true, true]}},

  {"location":["Washington DC","United States"],
  "coordinates":[-77.0059, 38.5417],
   "duration":99,
   "arrive":[11,"morning"],
   "depart":[20,"morning"]}

];

var europe = [
  {
      "location":["Grinnell","United States"],
      "coordinates":[-92.7232, 41.7434],
      "icao":"",
      "duration":1,
      "arrive":[2,""],
      "depart":[17, "morning"]
  },
  {
      "location":["Chicago","United States"],
      "coordinates":[-87.6298, 41.8781],
      "icao":"",
      "duration":1,
      "arrive":[17,"afternoon"],
      "depart":[17,"evening"]
  },
  {
      "location":["Bangor","United States"],
      "coordinates":[-68.7712,44.8016],
      "icao":"",
      "duration":1,
      "arrive":[17,"night"],
      "depart":[17,"night"]
  },
  {
      "location":["Keflavik","Iceland"],
      "coordinates":[-22.5583,63.9998],
      "icao":"KEF",
      "duration":1,
      "arrive":[18,"morning"],
      "depart":[19,"early-morning"]
  },
  {
      "location":["Berlin","Germany"],
      "coordinates":[13.4050,52.5200],
      "icao":"SXF",
      "duration":1,
      "arrive":[19,"morning"],
      "depart":[21,"early-morning"]
  },
  {
      "location":["Krakow","Poland"],
      "coordinates":[19.9450,50.0647],
      "icao":"KRK",
      "duration":1,
      "arrive":[21,"morning"],
      "depart":[22,"noon"]
  },
  {
      "location":["Oswiecim","Poland"],
      "coordinates":[19.2098,50.0344],
      "icao":"",
      "duration":1,
      "arrive":[22,"afternoon"],
      "depart":[22,"early-evening"]
  },
  {
      "location":["Krakow","Poland"],
      "coordinates":[19.9450,50.0647],
      "icao":"KRK",
      "duration":1,
      "arrive":[22,"evening"],
      "depart":[23,"noon"]
  },
  {
      "location":["Bohumin","Czech Republic"],
      "coordinates":[18.3570,49.9043],
      "icao":"",
      "duration":1,
      "arrive":[23,"afternoon"],
      "depart":[23,"afternoon"]
  },
  {
      "location":["Prague","Czech Republic"],
      "coordinates":[14.4378,50.0755],
      "icao":"",
      "duration":1,
      "arrive":[23,"evening"],
      "depart":[26,"early-morning"]
  },
  {
      "location":["Amsterdam","Netherlands"],
      "coordinates":[4.8952,52.3702],
      "icao":"AMS",
      "duration":1,
      "arrive":[26,"morning"],
      "depart":[28,"noon"]
  },
  {
      "location":["Chicago","United States"],
      "coordinates":[-87.6298, 41.8781],
      "icao":"ORD",
      "duration":1,
      "arrive":[28,"evening"]
  }
];

var countries_color_palette = {
  "visited":"#86af49",
  "planned":"#e3eaa7",
  "unvisited":"#d5e1df"
};

var countries_planned = [
  "Peru", "Chile", "Cambodia", "Laos", "Singapore"
];

console.log("preload complete.");

// custom code
function get_countries_unique (countries, new_locations){
  var ctr = countries;
  for (var i = 0; i < new_locations.length; i++)
    ctr.push(new_locations[i].location[1]);
  return ctr.filter((v, i, a) => a.indexOf(v) === i);
}

var countries_unique = get_countries_unique(["Thailand", "China"], locations);
countries_unique = get_countries_unique(countries_unique, europe);

function get_nongray_color_if_visited (d) {
  if (countries_unique.includes(d.properties.name))
    //return d.properties.color;
    return countries_color_palette.visited;
  else if (countries_planned.includes(d.properties.name))
    return countries_color_palette.planned;
  return countries_color_palette.unvisited;
}

// render
d3.select(window).on("resize", throttle);

var zoom = d3.zoom()
    //.extent([1,9])
    .scaleExtent([1, 9])
    .on("zoom", move);

var c = document.getElementById('container');
var width = c.offsetWidth;
var height = width / 2;

//offsets for tooltips
var offsetL = c.offsetLeft+20;
var offsetT = c.offsetTop+10;

var topo,projection,path,svg,g;

//var graticule = d3.geo.graticule();
var graticule = d3.geoGraticule();

var tooltip = d3.select("#container").append("div").attr("class", "tooltip hidden");

setup(width,height);

function setup(width,height){
  //projection = d3.geo.mercator()
  projection = d3.geoNaturalEarth1()
  //projection = d3.geoMercator()
    .translate([(width/2), (height/2)])
    .scale( width / 2 / Math.PI);

  //path = d3.geo.path().projection(projection);
  path = d3.geoPath().projection(projection);

  svg = d3.select("#container").append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(zoom)
            //.on("click", click)
            .append("g");

  g = svg.append("g")
         .on("click", click);

}

d3.json("content/world-topo-min.json", function(error, world) {

  var countries = topojson.feature(world, world.objects.countries).features;

  topo = countries;
  draw(topo);

});

function handleMouseOver(){
  var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

  tooltip.classed("hidden", false)
    .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
    .html(this.__data__.properties.name);
}

function handleMouseOverCity(text){
  var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

  tooltip.classed("hidden", false)
    .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
    .html(text[0]);
}

function handleMouseOut(){
  tooltip.classed("hidden", true);
}


function draw(topo) {
  /*
  svg.append("path")
     .datum(graticule)
     .attr("class", "graticule")
     .attr("d", path);
*/

  g.append("path")
   .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
   .attr("class", "equator")
   .attr("d", path);


  var country = g.selectAll(".country").data(topo);

  country.enter().insert("path")
      .attr("class", "country")
      .attr("d", path)
      .attr("id", function(d,i) { return d.id; })
      .attr("title", function(d,i) { return d.properties.name; })
      .style("fill", function(d, i) { return get_nongray_color_if_visited(d); })
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

  // Adding visited cities
  for (var i = 0; i < locations.length; i++)
      addpoint(locations[i].coordinates[0],
        locations[i].coordinates[1], locations[i].location );

  // Adding visited cities
  for (var i = 0; i < europe.length; i++)
  addpoint(europe[i].coordinates[0],
    europe[i].coordinates[1], europe[i].location );

}


function redraw() {
  width = c.offsetWidth;
  height = width / 2;
  d3.select('svg').remove();
  setup(width,height);
  draw(topo);
}


function move() {

  //var t = d3.event.translate;
  var t = [d3.event.transform.x,d3.event.transform.y];
  //var s = d3.event.scale;
  var s = d3.event.transform.k;
  zscale = s;
  var h = height/4;

  t[0] = Math.min(
    (width/height)  * (s - 1),
    Math.max( width * (1 - s), t[0] )
  );

  t[1] = Math.min(
    h * (s - 1) + h * s,
    Math.max(height  * (1 - s) - h * s, t[1])
  );

  //zoom.translateBy(t);
  g.attr("transform", "translate(" + t + ")scale(" + s + ")");

  //adjust the country hover stroke width based on zoom level
  d3.selectAll(".country").style("stroke-width", 1.5 / s);

}

var throttleTimer;
function throttle() {
  window.clearTimeout(throttleTimer);
    throttleTimer = window.setTimeout(function() {
      redraw();
    }, 200);
}


//geo translation on mouse click in map
function click() {
  var latlon = projection.invert(d3.mouse(this));
  console.log(latlon);
}


//function to add points and text to the map (used in plotting capitals)
function addpoint(lon,lat,text) {

  var gpoint = g.append("g").attr("class", "gpoint");
  var x = projection([lon,lat])[0];
  var y = projection([lon,lat])[1];

  gpoint.append("svg:circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("class","point")
        .attr("r", function(d) { console.log(d); return 1.0;})
        .on('mouseover', function(d){
          handleMouseOverCity(text);
        })
        .on('mouseout', handleMouseOut);


}
