// Test out various map tile servers and overlays

(function($){

  var tilesinfo = {

    mqosm: { // map quest / open street map
      group: 'OpenStreetMap',
      name: 'MapQuest Open Street Map',
      url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg',
      subdomains: '1234',
      attribution: 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>',
      minZoom: 0, maxZoom: 18
    },
    mqaerial: { // map quest / aerial (satellite)
      group: 'OpenStreetMap',
      name: 'MapQuest Open Aerial',
      url: 'http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg',
      subdomains: '1234',
      attribution: 'Tiles courtesy of MapQuest. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
      minZoom: 0, maxZoom: 18 // only up to 11 outside US
    },
    osm: { // open street map
      group: 'OpenStreetMap',
      name: 'Open Street Map Normal',
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: 'Data, imagery and map information provided by <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>',
      minZoom: 0, maxZoom: 18
    },
    /* osma: { // open street map tiles@home
      group: 'OpenStreetMap',
      name: 'Open Street Map OSMArender',
      url: 'http://{s}.tah.openstreetmap.org/Tiles/tile/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: 'Data, imagery and map information provided by <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>'
    }, */
    topousaosm: { // US color relief from OSM data
      group: 'OpenStreetMap',
      name: 'Topo USA OSM',
      url: 'http://tile1.toposm.com/us/color-relief/{z}/{x}/{y}.jpg',
      subdomains: '',
      attribution: 'Data, imagery and map information provided by <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>',
      minZoom: 3, maxZoom: 15
    },
    opencycle: {
      group: 'OpenStreetMap',
      name: 'Open Cycle Map',
      url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: 'Open Cycle Map',
      minZoom: 0, maxZoom: 16
    },
    openlandscape: {
      group: 'OpenStreetMap',
      name: 'Open Cycle Map Landscape',
      url: 'http://tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'Open Cycle Map',
      minZoom: 0, maxZoom: 18
    },
    opentransport: {
      group: 'OpenStreetMap',
      name: 'Open Cycle Map Transport',
      url: 'http://tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'Open Cycle Map',
      minZoom: 0, maxZoom: 18
    },
    cloudmadepaledawn: { // http://polymaps.org/ex/pale-dawn.html
      group: 'CloudMade',
      name: 'Pale Dawn',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/998/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    midnightcommander: { // http://polymaps.org/ex/midnight-commander.html
      group: 'CloudMade',
      name: 'Midnight Commander',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/999/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    // cloudmadegreen: {
    //   group: 'CloudMade',
    //   name: 'Green Terrain',
    //   url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/996/256/{z}/{x}/{y}.png',
    //   subdomains: 'abc',
    //   attribution: '2011 CloudMade',
    //   minZoom: 0, maxZoom: 18
    // },
    cloudmadeweb: { 
      group: 'CloudMade',
      name: 'CloudMade Web',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/1/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    cloudmadefine: { 
      group: 'CloudMade',
      name: 'CloudMade Fine Line',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/2/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    cloudmadenonames: { 
      group: 'CloudMade',
      name: 'No Names',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/3/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    cloudmaderoad: { 
      group: 'CloudMade',
      name: 'CloudMade Road',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/4/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    cloudmademanilla: { 
      group: 'CloudMade',
      name: 'Manilla',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/7/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    cloudmadered: { 
      group: 'CloudMade',
      name: 'CloudMade Red',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/8/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    cloudmadehighway: { 
      group: 'CloudMade',
      name: 'CloudMade Highway',
      url: 'http://{s}.tile.cloudmade.com/8fe4ccbb4940415d9475cc21bf41ea53/9/256/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '2011 CloudMade',
      minZoom: 0, maxZoom: 18
    },
    mapboxterrain: {  // http://mapbox.com/tour/#maps
      group: 'MapBox',
      name: 'Mapbox Terrain',
      url: 'http://{s}.tiles.mapbox.com/v3/examples.map-4l7djmvo/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 17
    },
    /* mapboxjustin: {  // http://mapbox.com/tour/#maps
      group: 'MapBox',
      name: 'Mapbox Justin',
      url: 'http://{s}.tiles.mapbox.com/v3/justin.map-iw8x00lm/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 17
    }, */
    mapboxstreets: {  // http://mapbox.com/tour/#maps
      group: 'MapBox',
      name: 'Mapbox Streets',
      // url: 'https://tiles.mapbox.com/v3/mapbox.mapbox-streets/{z}/{x}/{y}.png',
      url: 'https://tiles.mapbox.com/v3/wmleler.map-5eyieyim/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 17
    },
    // mapboxsimple: {  // http://tiles.mapbox.com/mapbox/
    //   group: 'MapBox',
    //   name: 'Mapbox Simple',
    //   url: 'https://tiles.mapbox.com/v3/mapbox.mapbox-simple/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    mapboxgeographyclass: {  // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'Geography Class',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.geography-class/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxpirate: {  // http://mapbox.com/tilemill/gallery/
      group: 'MapBox',
      name: 'Pirate Map',
      url: 'http://{s}.tiles.mapbox.com/v3/aj.Sketchy2/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 6
    },
    mapboxcanopy: {  // http://mapbox.com/tilemill/gallery/
      group: 'MapBox',
      name: 'Canopy Height',
      url: 'http://{s}.tiles.mapbox.com/v3/villeda.simard-forests/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxearthquake: {  // http://mapbox.com/tilemill/gallery/
      group: 'MapBox',
      name: 'Earthquake Risk',
      url: 'http://{s}.tiles.mapbox.com/v3/bclc-apec.map-rslgvy56/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxshadowplay: {  // http://mapbox.com/tilemill/gallery/
      group: 'MapBox',
      name: 'Shadow Play',
      url: 'http://{s}.tiles.mapbox.com/v3/tmcw.shadowplay/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxpopulationfire: {  // http://mapbox.com/tilemill/gallery/
      group: 'MapBox',
      name: 'Population Fire',
      url: 'http://{s}.tiles.mapbox.com/v3/aj.population-fire/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxwarden: {  // http://mapbox.com/tour/#maps
      group: 'MapBox',
      name: 'Mapbox Warden',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-warden/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 17
    },
    // mapboxzenburn: {  // http://mapbox.com/tour/#maps
    //   group: 'MapBox',
    //   name: 'Mapbox Zenburn',
    //   url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-zenburn/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    // mapboxnightvision: {  // http://tiles.mapbox.com/mapbox/
    //   group: 'MapBox',
    //   name: 'Mapbox Night Vision',
    //   url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-nightvision/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    // mapboxlight: {  // http://tiles.mapbox.com/mapbox/
    //   group: 'MapBox',
    //   name: 'Mapbox Light',
    //   url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-light/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    // mapboxchester: {  // http://tiles.mapbox.com/mapbox/
    //   group: 'MapBox',
    //   name: 'Mapbox Chester',
    //   url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-chester/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    // mapboxgraphite: {  // http://tiles.mapbox.com/mapbox/
    //   group: 'MapBox',
    //   name: 'Mapbox Graphite',
    //   url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-graphite/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    // mapboxlacquer: {  // http://tiles.mapbox.com/mapbox/
    //   group: 'MapBox',
    //   name: 'Mapbox Lacquer',
    //   url: 'http://{s}.tiles.mapbox.com/v3/mapbox.mapbox-lacquer/{z}/{x}/{y}.png',
    //   subdomains: 'abcd',
    //   attribution: 'Mapbox',
    //   minZoom: 0, maxZoom: 17
    // },
    mapboxcontrolroom: {  // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'Control Room',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.control-room/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxprint: {  // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'World Print',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.world-print/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 9
    },
    mapboxworldlight: {  // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'World Light',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.world-light/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 11
    },
    mapboxworlddark: {  // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'World Dark',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.world-dark/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 1, maxZoom: 11
    },
    mapboxworldblue: {  // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'World Blue',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.world-blue/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    mapboxworldglass: { // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'World Glass',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.world-glass/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 11
    },
    mapboxworldglassoceans: { // http://tiles.mapbox.com/mapbox/
      group: 'MapBox',
      name: 'World Glass Oceans',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.world-glass-oceans/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    naturalearth1: {  // http://tiles.mapbox.com/mapbox/
      group: 'NaturalEarth',
      name: 'Natural Earth 1',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.natural-earth-1/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 6
    },
    naturalearth2: {  // http://tiles.mapbox.com/mapbox/
      group: 'NaturalEarth',
      name: 'Natural Earth 2',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.natural-earth-2/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 6
    },
    naturalearthhypsometric: {  // http://tiles.mapbox.com/mapbox/
      group: 'NaturalEarth',
      name: 'Hypsometric',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.natural-earth-hypso/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 6
    },
    naturalearthhypsobathy: {  // http://tiles.mapbox.com/mapbox/
      group: 'NaturalEarth',
      name: 'Hypsometric Bathymetry',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.natural-earth-hypso-bathy/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 6
    },
    bmjul: {  // http://tiles.mapbox.com/mapbox/
      group: 'BlueMarble',
      name: 'July',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    bmjulb: {  // http://tiles.mapbox.com/mapbox/
      group: 'BlueMarble',
      name: 'July Bathymetry',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    bmjan: {  // http://tiles.mapbox.com/mapbox/
      group: 'BlueMarble',
      name: 'January',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jan/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    bmjanb: {  // http://tiles.mapbox.com/mapbox/
      group: 'BlueMarble',
      name: 'January Bathymetry',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jan/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    bmbw: {  // http://tiles.mapbox.com/mapbox/
      group: 'BlueMarble',
      name: 'Gray',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul-bw/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    bmbwb: {  // http://tiles.mapbox.com/mapbox/
      group: 'BlueMarble',
      name: 'Gray Bathymetry',
      url: 'http://{s}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-bathy-jul-bw/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 0, maxZoom: 8
    },
    nasabmmm: { // NASA Blue Marble
      group: 'BlueMarble',
      name: 'Modest Maps',
      url: 'http://s3.amazonaws.com/com.modestmaps.bluemarble/{z}-r{y}-c{x}.jpg',
      subdomains: '',
      attribution: 'NASA',
      minZoom: 0, maxZoom: 9
    },
    bm8bit: { // NASA Blue Marble 8-bit
      group: 'BlueMarble',
      name: 'Blue Marble 8-bit',
      url: 'http://{s}.tiles.mapbox.com/v3/colemanm.blue-marble-8bit/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'Mapbox',
      minZoom: 2, maxZoom: 5
    },
    terrain: { // shaded relief terrain from OSM data
      group: 'Stamen',
      name: 'Terrain',
      url: 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      subdomains: 'abcd',
      attribution: 'Michal Migurski http://mike.teczno.com/notes/osm-us-terrain-layer/foreground.html',
      minZoom: 4, maxZoom: 18
    },
    terrainbg: { // shaded relief terrain from OSM data, background only
      group: 'Stamen',
      name: 'Terrain Background',
      url: 'http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg',
      subdomains: 'abcd',
      attribution: 'Michal Migurski http://mike.teczno.com/notes/osm-us-terrain-layer/foreground.html',
      minZoom: 4, maxZoom: 18
    },
    watercolor: { // watercolor-like map
      group: 'Stamen',
      name: 'Watercolor',
      url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
      subdomains: 'abcd',
      attribution: '<a href="http://stamen.com">Stamen Design</a> <a href="http://creativecommons.org/licenses/by/3.0">CC-BY-SA</a>',
      minZoom: 0, maxZoom: 17
    },
    toner: { // black and white map
      group: 'Stamen',
      name: 'Toner',
      url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg',
      subdomains: 'abcd',
      attribution: '<a href="http://stamen.com">Stamen Design</a> <a href="http://creativecommons.org/licenses/by/3.0">CC-BY-SA</a>',
      minZoom: 0, maxZoom: 20
    },
    acetate: { // http://developer.geoiq.com/tools/acetate/
      group: 'GeoIQ',
      name: 'Acetate Street',
      url: 'http://{s}.acetate.geoiq.com/tiles/acetate/{z}/{x}/{y}.png',
      subdomains: ['a1', 'a2', 'a3'],
      attribution: '2011 GeoIQ &#038; Stamen, Data from OSM and Natural Earth',
      minZoom: 2, maxZoom: 20
    },
    acetateterrain: { // http://developer.geoiq.com/tools/acetate/
      group: 'GeoIQ',
      name: 'Acetate Terrain',
      url: 'http://{s}.acetate.geoiq.com/tiles/terrain/{z}/{x}/{y}.png',
      subdomains: ['a1', 'a2', 'a3'],
      attribution: '2011 GeoIQ &#038; Stamen, Data from OSM and Natural Earth',
      minZoom: 0, maxZoom: 20
    },
    acetatehillshade: { // http://developer.geoiq.com/tools/acetate/
      group: 'GeoIQ',
      name: 'Acetate Hillshading',
      url: 'http://{s}.acetate.geoiq.com/tiles/acetate-hillshading/{z}/{x}/{y}.png',
      subdomains: ['a1', 'a2', 'a3'],
      attribution: '2011 GeoIQ &#038; Stamen, Data from OSM and Natural Earth',
      minZoom: 0, maxZoom: 17
    },
    worldbank: { // World Bank
      group: 'GeoIQ',
      name: 'World Bank',
      url: 'http://acetate.geoiq.com/tiles/worldbank/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'World Bank',
      minZoom: 0, maxZoom: 17
    },
    worldbankterrain: { // World Bank Terrain
      group: 'GeoIQ',
      name: 'World Bank Terrain',
      url: 'http://acetate.geoiq.com/tiles/worldbank-hillshading/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'World Bank',
      minZoom: 0, maxZoom: 17
    },
    
    // http://mt1.googleapis.com/vt/lyrs=m@189000000&hl=en&src=api&x=15&y=11&z=5&s=
    googlenormal: { // Google normal street
      group: 'Google',
      name: 'Google Street',
      url: 'http://mt{s}.google.com/vt/v=w2.106&hl=en&x={x}&y={y}&z={z}&s=',
      subdomains: '0123',
      attribution: 'Google 2012',
      minZoom: 0, maxZoom: 22
    },
    googleterrain: { // Google terrain
      group: 'Google',
      name: 'Google Terrain',
      url: 'http://{s}.google.com/vt/v=w2p.106&hl=en&x={x}&y={y}&z={z}&s=',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: 'Google 2012',
      minZoom: 0, maxZoom: 15
    },
    googlesatellite: { // Google satellite
      group: 'Google',
      name: 'Google Satellite',
      url: 'http://khm{s}.googleapis.com/kh/v=118&src=app&x={x}&y={y}&z={z}&s=G&token=56901',
      // 'http://khm{s}.google.com/kh/v=101&x={x}&y={y}&z={z}',
      subdomains: '0123',
      attribution: '2012 Google',
      minZoom: 0, maxZoom: 21
    },
    // http://mt1.googleapis.com/vt/lyrs=t@129,r@189000000&hl=en&src=api&x=15&y=10&z=5&s=Galileo
    googlephysical: { // Google Galileo street
      group: 'Google',
      name: 'Google Physical',
      url: 'http://mt{s}.googleapis.com/vt/lyrs=t@129,r@189000000&hl=en&src=api&x={x}&y={y}&z={z}&s=Galileo',
      subdomains: '0123',
      attribution: 'Google 2012',
      minZoom: 0, maxZoom: 22
    },
    googletreasure: { // Google Galileo street
      group: 'Google',
      name: 'Google Treasure',
      url: 'https://khmdbs{s}.google.com/pm?v=9&src=app&x={x}&y={y}&z={z}&s=Galileo',
      subdomains: '01',
      attribution: 'Google 2013',
      minZoom: 0, maxZoom: 22
    },


    // google8bit: { // http://google-latlong.blogspot.com/2012/03/begin-your-quest-with-google-maps-8-bit.html
    //   group: 'Google',
    //   name: 'Google 8 bit',
    //   url: 'http://{s}.google.com/vt/lyrs=8bit,m@174000000&hl=en&src=app&x={x}&y={y}&z={z}',
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    //   attribution: '2011 Google',
    //   minZoom: 0, maxZoom: 22
    // },
    nokiaroad: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Nokia Street',
      url: 'http://{s}.maptile.maps.svc.ovi.com/maptiler/v2/maptile/newest/normal.day/{z}/{x}/{y}/256/png8',
      subdomains: 'bcde',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 20
    },
    nokiasat: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Nokia Satellite',
      url: 'http://{s}.maptile.maps.svc.ovi.com/maptiler/v2/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8',
      subdomains: 'bcde',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 20
    },
    nokiahybrid: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Nokia Hybrid',
      url: 'http://{s}.maptile.maps.svc.ovi.com/maptiler/v2/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png8',
      subdomains: 'bcde',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 20
    },
    nokiaterrain: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Nokia Terrain',
      url: 'http://{s}.maptile.maps.svc.ovi.com/maptiler/v2/maptile/newest/terrain.day/{z}/{x}/{y}/256/png8',
      subdomains: 'bcde',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 20
    },
    nokiaflickr: {
      group: 'Nokia',
      name: 'Nokia Flickr',
      url: 'http://{s}.maps.nlp.nokia.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?lg=eng&token=jFUN9E0JFN_TXnDyO88h&app_id=XoOs1zgg22N_l6qNMEKs-A',
      subdomains: '1234',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 21
    },
    /* yahooroad: { // 
      group: 'Nokia',
      name: 'Yahoo Street',
      url: 'http://maps.yimg.com/hx/tl?v=4.4&x={z}&y={x}&z={y}',
      // 'http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/normal.day/{z}/{x}/{y}/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B',
      // http://1.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/normal.day/14/2605/5859/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B
      subdomains: '123',
      attribution: 'Yahoo',
      minZoom: 0, maxZoom: 20
    },
    yahoosat: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Yahoo Satellite',
      url: 'http://maps1.yimg.com/ae/ximg?v=1.9&t=a&s=256&x={x}&y={y}&z={z}',
      // 'http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/satellite.day/{z}/{x}/{y}/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B',
      subdomains: '123',
      attribution: 'Yahoo',
      minZoom: 0, maxZoom: 20
    },
    /* yahoonight: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Yahoo Night',
      url: 'http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/normal.day/{z}/{x}/{y}/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B',
      // http://1.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/normal.night/14/2605/5859/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B
      subdomains: '1234',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 20
    },
    yahoohyb: { // http://api.maps.ovi.com/
      group: 'Nokia',
      name: 'Yahoo Hybrid',
      url: 'http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/hybrid.day/{z}/{x}/{y}/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B',
      // http://3.maptile.lbs.ovi.com/maptiler/v2/maptile/b8abea5c78/hybrid.day/15/5216/11718/256/jpg?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B
      subdomains: '1234',
      attribution: 'Nokia',
      minZoom: 0, maxZoom: 20
    }, */
    bingroad: {
      group: 'Bing',
      name: 'Bing Street',
      typeBing: 'Road',
      minZoom: 0, maxZoom: 18
    },
    bingaerial: {
      group: 'Bing',
      name: 'Bing Aerial',
      typeBing: 'Aerial',
      minZoom: 0, maxZoom: 18
    },
    binghybrid: {
      group: 'Bing',
      name: 'Bing Hybrid',
      typeBing: 'AerialWithLabels',
      minZoom: 0, maxZoom: 18
    },

    esristreet: { // http://www.spotzi.com
      group: 'ESRI',
      name: 'ESRI Street',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 19
    },
    esriusgstopo: {  // http://gis.oregonmetro.gov/metromap/
      group: 'ESRI',
      name: 'USGS Topo',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
      subdomains: '',
      attribution: 'ESRI USGS',
      minZoom: 0, maxZoom: 15
    },
    esrinatgeo: { // http://www.spotzi.com
      group: 'ESRI',
      name: 'National Geographic',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 16
    },
    esrirelief: { // http://www.spotzi.com
      group: 'ESRI',
      name: 'ESRI Shaded Relief',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 13
    },
    esrisatellite: { // http://www.spotzi.com
      group: 'ESRI',
      name: 'ESRI Satellite',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 19
    },
    esritopo: { // http://www.arcgis.com/home/webmap/viewer.html
      group: 'ESRI',
      name: 'ESRI Topo',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 17
    },
    esriterrain: { // http://www.arcgis.com/home/webmap/viewer.html
      group: 'ESRI',
      name: 'ESRI Terrain',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 13
    },
    esrilight: { // http://www.arcgis.com/home/webmap/viewer.html
      group: 'ESRI',
      name: 'ESRI Light',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 16
    },
    esriocean: { // http://www.arcgis.com/home/webmap/viewer.html
      group: 'ESRI',
      name: 'ESRI Ocean',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 13
    },
    // metromap: { // http://gis.oregonmetro.gov/metromap/
    //   group: 'ESRI',
    //   name: 'ESRI MetroMap',
    //   url: 'https://gis.oregonmetro.gov/ArcGIS/rest/services/metromap/baseAnno/MapServer/tile/{z}/{y}/{x}',
    //   subdomains: '',
    //   attribution: 'ESRI',
    //   minZoom: 0, maxZoom: 13
    // },
    // KFCJnTnrvqWioSeHXIIC1ep29Nkes-WPAOpuUhasy9BvrX2irvR9iK5c2sEwL8Vb
    // https://gis.oregonmetro.gov/ArcGIS/rest/services/metromap/baseAnno/MapServer/tile/10/366/162?token=KFCJnTnrvqWioSeHXIIC1ep29Nkes-WPAOpuUhasy9BvrX2irvR9iK5c2sEwL8Vb
    // esriwsdparks: { // http://www.arcgis.com/home/webmap/viewer.html
    //   group: 'ESRI',
    //   name: 'ESRI WSD Parks',
    //   url: 'http://server.arcgisonline.com/ArcGIS/rest/services/WSDParks/MapServer/tile/{z}/{y}/{x}.jpg',
    //   subdomains: '',
    //   attribution: 'ESRI',
    //   minZoom: 0, maxZoom: 19
    // },

    // http://tilec.trimet.org/tilecache/tilecache.py/1.0.0/currentOSM/12/650/1464
    openmapsurfer: { // http://www.openmapsurfer.uni-hd.de/
      group: 'misc',
      name: 'Tri-met',
      url: 'http://tile{s}.trimet.org/tilecache/tilecache.py/1.0.0/currentOSM/{z}/{x}/{y}',
      subdomains: 'abcd',
      attribution: 'Tri-met, OSM',
      minZoom: 0, maxZoom: 18
    },

    // openmapsurfer: { // http://www.openmapsurfer.uni-hd.de/
    //   group: 'misc',
    //   name: 'Open Map Surfer',
    //   url: 'http://129.206.74.245:8001/tms_r.ashx?x={x}&y={y}&z={z}',
    //   subdomains: '',
    //   attribution: 'Open Map Surfer',
    //   minZoom: 0, maxZoom: 18
    // },
    avichart: { // http://wms.chartbundle.com/charts/tms.html
      group: 'misc',
      name: 'Aviation Charts',
      url: 'http://wms.chartbundle.com/tms/1.0.0/sec/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'Chartbundle',
      minZoom: 0, maxZoom: 13
    },
    argyle: { // http://argyl.es
      group: 'misc',
      name: 'Argyle',
      url: 'http://temp{s}.argyl.es/preview-key/{z}/{x}/{y}.jpg',
      subdomains: '123',
      attribution: 'Nathan Vander Wilt',
      minZoom: 0, maxZoom: 19
    },
    census: { // http://bmander.com/dotmap/index.html
      group: 'misc',
      name: 'Census Dots',
      url: 'http://mt{s}.bmander.com/tiles/{z}/{x}/{y}.png',
      subdomains: '0123',
      attribution: 'One dot for every person',
      minZoom: 4, maxZoom: 14
    },
    apple: {  // http://mapbox.com/blog/apple-and-their-maps/ lang=de_DE
      group: 'misc',
      name: 'Apple iPhoto',
      url: 'http://gsp2.apple.com/tile?api=1&style=slideshow&layers=default&lang=en_US&z={z}&x={x}&y={y}&v=9',
      subdomains: '',
      attribution: 'Apple',
      minZoom: 3, maxZoom: 14
    },
    opnvkarte: {
      group: 'misc',
      name: 'Öpnvkarte transport',
      url: 'http://tile.xn--pnvkarte-m4a.de/tilegen/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'Öpnvkarte',
      minZoom: 0, maxZoom: 18
    },
    toolserver: {
      group: 'misc',
      name: 'Tool Server',
      url: 'http://{s}.www.toolserver.org/tiles/bw-noicons/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: 'Tool Server',
      minZoom: 0, maxZoom: 12
    }

  };
  
  var overlayinfo = {
    yahootraffic: {
      name: 'Yahoo Traffic',
      url: 'http://lbs.ovi.com/traffic/6.0/tiles/{z}/{x}/{y}/256/png32?token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B&compress=true',
      subdomains: '',
      attribution: 'Nokia OVI Yahoo!'
    },
    mqhybrid: {
      name: 'MapQuest Hybrid',
      url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png',
      subdomains: '1234',
      attribution: 'Open MapQuest'
    },
    googleroad: { // google street map overlay
      name: 'Google Street Layer',
      url: 'http://mt{s}.google.com/vt/v=w2t.106&hl=en&x={x}&y={y}&z={z}',
      subdomains: '0123',
      attribution: 'Google'
    },
    acetatefg: { // Acetate Foreground
      name: 'Acetate Foreground',
      url: 'http://acetate.geoiq.com/tiles/acetate-fg/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'GeoIQ'
    },
    acetatelabels: { // Acetate Labels
      name: 'Acetate Labels',
      url: 'http://acetate.geoiq.com/tiles/acetate-labels/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'GeoIQ'
    },
    acetateroads: { // Acetate Roads
      name: 'Acetate Roads',
      url: 'http://acetate.geoiq.com/tiles/acetate-roads/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'GeoIQ'
    },
    acetatehillshade: { // Acetate Hillshading
      name: 'Acetate Hill Shade',
      url: 'http://acetate.geoiq.com/tiles/hillshading/{z}/{x}/{y}.png',
      subdomains: '',
      attribution: 'GeoIQ'
    },
    omstrans: { // http://www.openmapsurfer.uni-hd.de/
      name: 'Open Map Surfer Transparent',
      url: 'http://129.206.74.245:8003/tms_h.ashx?x={x}&y={y}&z={z}',
      subdomains: '',
      attribution: 'Open Map Surfer'
    },
    omshillshade: { // http://www.openmapsurfer.uni-hd.de/
      name: 'Open Map Surfer Hillshade',
      url: 'http://129.206.74.245:8004/tms_hs.ashx?x={x}&y={y}&z={z}',
      subdomains: '',
      opacity: 0.5,
      attribution: 'Open Map Surfer'
    },
    npsparkoutlines: { // http://tiles.mapbox.com/nps
      name: 'NPS National Park Outlines',
      url: 'http://{s}.tiles.mapbox.com/v3/nps.BM_Park_Poly_NoFill/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'National Park Service'
    },
    npsparks: { // http://tiles.mapbox.com/nps
      name: 'NPS National Parks',
      url: 'http://{s}.tiles.mapbox.com/v3/nps.BM_Park_Point_Poly/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'National Park Service'
    },
    npsparknames: { // http://tiles.mapbox.com/nps
      name: 'NPS National Parks Names',
      url: 'http://{s}.tiles.mapbox.com/v3/nps.BM_Park_Labels/{z}/{x}/{y}.png',
      subdomains: 'abcd',
      attribution: 'National Park Service'
    },
    esritransportation: { // http://www.arcgis.com/home/webmap/viewer.html
      name: 'ESRI Transportation',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 19
    },
    esriboundaries: { // http://www.arcgis.com/home/webmap/viewer.html
      name: 'ESRI Boundaries',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 19
    },
    esrireference: { // http://www.arcgis.com/home/webmap/viewer.html
      name: 'ESRI Reference',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 19
    },
    esrilightref: { // http://www.arcgis.com/home/webmap/viewer.html
      name: 'ESRI Light Reference',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}.jpg',
      subdomains: '',
      attribution: 'ESRI',
      minZoom: 0, maxZoom: 19
    }
  };
  
  // process URL parameters and cookies --------------------------------------------------
  function getParams(p) {
    
    var params = {}; // parameters
    p.replace(/[?&;]\s?([^=&;]+)=([^&;]*)/gi,
        function(m,key,value) { params[key] = value; });
    if (params.mapType) { mapType = params.mapType; }
    if (params.zoomLevel) { zoomLevel = +params.zoomLevel; }
    if (params.center) {
      var n = params.center.split(',', 2);
      center = new L.LatLng(+n[0], +n[1]);
    }
    if (params.weatherRadar) { radar = params.weatherRadar.toUpperCase(); }
    if (params.weatherStation) { station = params.weatherStation.toUpperCase(); }
    if ($.isNumeric(params.weatherAnimation)) { nframes = +params.weatherAnimation; }
    if (params.weatherOpacity) { wopacity = (+params.weatherOpacity)/100; }
    if (params.controls) { controls = params.controls === 'true'; }
    if (params.view) { view = params.view; }
    if (params.info) { info = params.info === 'true'; }
    if (params.wradar) { wradar = params.wradar; }
    if (params.wsat) { wsat = params.wsat === 'true'; }
    if (params.walert) { walert = params.walert === 'true'; }
  }
  
  function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + 7*86400000); // 7 days
    document.cookie = name+'='+value+'; expires='+date.toGMTString()+'; path='+window.location.pathname;
  }

  var pdx = new L.LatLng(45.5278474, -122.662181854); // Oregon Convention Center
  
  var mapType = 'nasabmmm', // keys from tilesinfo
      zoomLevel = 4,
      center = new L.LatLng(38, -92),
      radar = 'NCR', // N0R, N1P, NTP, N0V, N0S, NCR, (N0Z)
      station = false,
      nframes = null, // number of frames
      wopacity = 0.3,
      controls = true,
      view = null, // 3D
      info = false, // display tileinfo
      wradar = null,  // frames of wunderground radar
      wsat = null,  // wunderground satellite
      walert = false;  // wunderground alerts
  
  getParams('?'+document.cookie); // params from cookies
  getParams(window.location.href); // params from URL override
  
  var originalZoom = zoomLevel;
  var originalCenter = center;
  var map; // Leaflet map object
  var layerControl; // interactive control
  var marker;

  $(document).ready(function() {
      
    if (view === '3D') {
      $('#map_div').addClass('three');
    }

    function winresize() {
      $('#menu').width($(window).width()-250);
    }
    winresize();
    $(window).on('resize', winresize);
  
    map = new L.Map('map_div', { // create map
      dragging: true,
      touchZoom: false,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      zoomControl: controls,
      attributionControl: false,
      fadeAnimation: false,
      zoomAnimation: true
    }).on('load', mapReady);
        
    var basemaps = {};
    var $groups = $('#mapgroups');
    var $mapname = $('#basemapname');

    $.each(tilesinfo, function(k, v) {
      var minz = v.minZoom ? v.minZoom : 0;
      var maxz = v.maxZoom ? v.maxZoom : 22;
      var layer = v.typeBing ? new L.TileLayer.Bing(wmBingKey, v.typeBing) : (
        v.name === 'Aviation Charts' ?
        // new L.TileLayer.Sectional(v.url,
        // { tileSize: 600, minZoom: minz, maxZoom: maxz, attribution: v.attribution, subdomains: v.subdomains ? v.subdomains : ''}) :
        new L.TileLayer.UpsideDown(v.url,
        { minZoom: minz, maxZoom: maxz, attribution: v.attribution, subdomains: v.subdomains ? v.subdomains : ''}) :
        new L.TileLayer(v.url,
        { minZoom: minz, maxZoom: maxz, attribution: v.attribution, subdomains: v.subdomains ? v.subdomains : ''}) );
      basemaps[v.name] = layer;
      var $sel = $('<li>').append($('<a>', { href: k }).text(v.name));
      if (v.group) {
        var $g = $('#group-'+v.group, $groups);
        if ($g.length === 0) {
          $g = $('<ul>', { id: 'group-'+v.group }).appendTo($('<li>').append($('<a>', { href: '#'}).text(v.group)).appendTo($groups));
        }
        $sel.appendTo($g);
      } else {
        $sel.appendTo($groups);
      }
    });
    
    $('ul.sf-menu').superfish({speed: 'fast'});
    $('a', $groups).click(function(e) {
      var hr = $(e.target).attr('href');
      if (hr === '#') { return false; }
      map.removeLayer(basemaps[tilesinfo[mapType].name]);
      // map.attributionControl.removeAttribution(tilesinfo[mapType].attribution);
      mapType = hr;
      var tinfo = tilesinfo[mapType];
      if (zoomLevel < tinfo.minZoom || zoomLevel > tinfo.maxZoom) {
        if (zoomLevel < tinfo.minZoom) { zoomLevel = tinfo.minZoom; }
        else { zoomLevel = tinfo.maxZoom; }
        setCookie('zoomLevel', zoomLevel);
        showinfo();
        map.setZoom(zoomLevel);
      }
      map.addLayer(basemaps[tinfo.name]);
      $mapname.text(tinfo.name);
      if (info) { $('#tileinfo').text(mapType+' - '+tinfo.url); }
      return false;
    });

    if (controls) {
      layerControl = new L.Control.Layers({}, {})
      map.addControl(layerControl);
    }

    if (!tilesinfo[mapType]) {
      alert('invalid mapType: '+mapType);
      mapType = 'nasabmmm';
      setCookie('mapType', mapType);
    }
    map.addLayer(basemaps[tilesinfo[mapType].name]);
    $mapname.text(tilesinfo[mapType].name);

    $(document).keydown(function(e) {
      if (e.which >= 48 && e.which <= 57) {
        map.panTo(pdx).setZoom(e.which - 48);
      } else
      switch(e.which) {
      case 37: // left arrow
        map.panBy(new L.Point(100, 0));
        break;
      case 38: // up arrow   
        map.panBy(new L.Point(0, 100));
        break;
      case 39: // right arrow
        map.panBy(new L.Point(-100, 0));
        break;
      case 40: // down arrow
        map.panBy(new L.Point(0, -100));
        break;
      case 13: // return
        map.panTo(originalCenter).setZoom(originalZoom);
        break;
      case 32: // space
        map.panTo(originalCenter);
        break;
      case 187: // + or =
        map.setZoom(++zoomLevel);
        break;
      case 189: // - or _
        map.setZoom(--zoomLevel);
        break;
      case 81: // Q
        map.panTo(pdx).setZoom(6);
        break;
      case 87: // W
        map.panTo(pdx).setZoom(7);
        break;
      case 69: // E
        map.panTo(pdx).setZoom(8);
        break;
      case 82: // R
        map.panTo(pdx).setZoom(9);
        break;
      case 84: // T
        map.panTo(pdx).setZoom(10);
        break;
      case 65: // A
        map.panTo(pdx).setZoom(11);
        break;
      case 83: // S
        map.panTo(pdx).setZoom(12);
        break;
      case 68: // D
        map.panTo(pdx).setZoom(13);
        break;
      case 70: // F
        map.panTo(pdx).setZoom(14);
        break;
      case 71: // G
        map.panTo(pdx).setZoom(15);
        break;
      case 90: // Z
        map.panTo(pdx).setZoom(16);
        break;
      case 88: // X
        map.panTo(pdx).setZoom(17);
        break;
      case 67: // C
        map.panTo(pdx).setZoom(18);
        break;
      case 86: // V
        map.panTo(pdx).setZoom(19);
        break;
      case 66: // B
        map.panTo(pdx).setZoom(20);
        break;
      }
    });

    // map.on('click', function(me) {
    //   marker = L.popup().setLatLng(me.latlng).setContent(me.latlng.toString()).openOn(map);
    // });

    function showinfo() {
      var rnd = Math.pow(10,1+Math.ceil(Math.min(zoomLevel,15)/2));
      $('#info').text('zoom='+zoomLevel+', center=('+(Math.round(center.lat*rnd)/rnd)+
        '°, '+(Math.round(center.lng*rnd)/rnd)+'°)');
      if (info) {
        $('#tileinfo').text(mapType+' - '+tilesinfo[mapType].url);
      }
    }
    
    map.setView(center, zoomLevel).on('moveend', function(e) {
        zoomLevel = e.target.getZoom();
        center = e.target.getCenter();
        setCookie('center', center.lat+','+center.lng);
        setCookie('zoomLevel', zoomLevel);
        showinfo();
    }).on('layeradd', function(e) {
      var layer = e.layer;
      $.each(basemaps, function(k, v) {
        if (layer === v) {
          var name = k;
          $.each(tilesinfo, function(k, v) {
            if (name === v.name) {
              mapType = k;
              if (window.console && console.log) { console.log('mapType='+k+' ('+name+')'); }
              setCookie('mapType', mapType);
              return false;
            }
          });
          return false;
        }
      });
    });

    showinfo();
    
    if (info) {
      $('#info, #tileinfo').show();
      $('#tileinfo').text(mapType+' - '+tilesinfo[mapType].url);

      map.on('click', function(e) {
        var tilex = lng2tile(e.latlng.lng,zoomLevel);
        var tiley = lat2tile(e.latlng.lat,zoomLevel);
        var url = zoomLevel+'/'+tilex+'/'+tiley;
        $('#tileinfo').text(
          'tile: '+url+
          ' px: '+e.layerPoint.x+' py: '+e.layerPoint.y+
          ' lat: '+e.latlng.lat+' lng: '+e.latlng.lng
        );
        // var tile = $('img.leaflet-tile-loaded[src*="/'+url+'.jpg"][src$="/'+url+'.png"][src$="/'+url+'"]').
        //     fadeTo('fast', 0.5).delay(2000).fadeTo(1000, 1.0);
      });
    }
    
    function mapReady() {
      var layer;
      // if (controls) { map.attributionControl.setPrefix(''); }
      if (station === 'AUTO' || station === 'SHOW' || (station === false && nframes !== null)) {
        var savedit = station;
        station = BBox(null, radar, map.getCenter().lat, map.getCenter().lng);
        if (savedit === 'SHOW') { alert('Using '+station+' ('+City(station)+') for weather'); }
      }
      
      if (station && City(station) !== undefined) { // http://www.srh.noaa.gov/jetstream/doppler/ridge_download.htm
        layer = new WeatherImage(station, radar, nframes, wopacity);
        map.addLayer(layer);
        if (controls) {
          layerControl.addOverlay(layer, 'Local Weather Radar');
        }
      }

      layer = new Wradar({ // Wunderground radar
        opacity: 0.4,
        frames: wradar ? wradar : 1,
        attribution: 'Weather Underground'
        });
      if (wradar) { map.addLayer(layer); }
      if (controls) { layerControl.addOverlay( layer, 'Wunder Radar'); }

      layer = new Wsat({ // Wunderground satellite
        opacity: 0.4,
        attribution: 'Weather Underground'
        });
      if (wsat) { map.addLayer(layer); }
      if (controls) { layerControl.addOverlay( layer, 'Wunder Satellite'); }

      layer = new Walert({ // Wunderground radar
        opacity: 0.4,
        attribution: 'Weather Underground'
        });
      if (walert) { map.addLayer(layer); }
      if (controls) { layerControl.addOverlay( layer, 'Wunder Alerts'); }
      
      if (controls) {
        layerControl.addOverlay( // Iowa NEXRAD Radar
          new L.TileLayer.WMS("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
            layers: 'nexrad-n0r-900913',
            format: 'image/png',
            transparent: true,
            opacity: 0.5,
            attribution: "Weather data © 2011 IEM Nexrad"
        }), 'NEXRAD Radar');
        layerControl.addOverlay( // Iowa 1 Hour Precipitation
          new L.TileLayer.WMS("http://mesonet.agron.iastate.edu/cgi-bin/wms/q2.cgi", {
            layers: 'q2_n1p_900913',
            format: 'image/png',
            subdomains: ['mesonet1', 'mesonet2', 'mesonet3'],
            transparent: true,
            opacity: 0.5,
            attribution: "Weather data © 2011 IEM Nexrad"
        }), '1 Hour Precipitation');
        layerControl.addOverlay( // Iowa IR Satellite
          new L.TileLayer.WMS("http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_ir.cgi", {
            layers: 'conus_ir_4km_900913',
            format: 'image/png',
            transparent: true,
            opacity: 0.5,
            attribution: "Weather data © 2011 IEM Nexrad"
        }), 'Infrared Satellite');

      $.each(overlayinfo, function(k, v) {
        layer = new L.TileLayer(v.url,
            { maxZoom: 18, attribution: v.attribution, subdomains: v.subdomains, opacity: v.opacity || 1.0 });
        if (controls) {
          layerControl.addOverlay(layer, v.name);
        }
      });

      }
          
    } // end mapready

  });
  
  function lng2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }
  function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }
  
    
  // Bing maps layer -- see https://gist.github.com/1221998 ------------------------------
  L.TileLayer.Bing = L.TileLayer.extend({
  
    supportedTypes: ['Road', 'Aerial', 'AerialWithLabels'],
    
    attributionTemplate: '<span style="display:inline-block">' +
         '<a target="_blank" href="http://www.bing.com/maps/">' +
         '<img src="{logo}" /></a><br><span>{copyrights}' +
         '<a style="white-space: nowrap" target="_blank" '+
         'href="http://www.microsoft.com/maps/product/terms.html">' +
         'Terms of Use</a></span></span>',
    
    initialize: function(/*String*/ apiKey, /*String*/ mapType, /*Object*/ options) {
      
      this._apiKey = apiKey;
      this._mapType = mapType;
      
      this._loadMetadata();
      
      L.Util.setOptions(this, options);
    },
    
    _loadMetadata: function() {
      
      this._callbackId = "_l_tilelayer_bing_" + (L.TileLayer.Bing._callbackId++);
      window[this._callbackId] = L.Util.bind(L.TileLayer.Bing.processMetadata, this);
      
      var params = {
        key: this._apiKey,
        jsonp: this._callbackId,
        include: 'ImageryProviders'
      },
          url = "http://dev.virtualearth.net/REST/v1/Imagery/Metadata/" +
                this._mapType + L.Util.getParamString(params),
          script = document.createElement("script");
          
      script.type = "text/javascript";
      script.src = url;
      script.id = this._callbackId;
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    
    _onMetadataLoaded: function() {},
    
    onAdd: function(map, insertAtTheBottom) {
      if (!this.metadata) {
        this._onMetadataLoaded = L.Util.bind(function() {
          L.TileLayer.prototype.onAdd.call(this, map, insertAtTheBottom);
          map.on('moveend', this._updateAttribution, this);
          this._updateAttribution();
        }, this);
      } else {
        L.TileLayer.prototype.onAdd.call(this, map, insertAtTheBottom);
        map.on('moveend', this._updateAttribution, this);
        this._updateAttribution();
      }
    },
    
    onRemove: function(map) {
      if (this._map.attributionControl) {
        this._map.attributionControl.removeAttribution(this.attribution);
      }
      this._map.off('moveend', this._updateAttribution, this);
      L.TileLayer.prototype.onRemove.call(this, map);
    },
    
    getTileUrl: function(xy) {
      var subdomains = this.options.subdomains,
          quadDigits = [],
          // i = z,
          i = this._getZoomForUrl(),
          digit,
          mask,
          quadKey;
      // borrowed directly from OpenLayers
      for (; i > 0; --i) {
          digit = '0';
          mask = 1 << (i - 1);
          if ((xy.x & mask) != 0) {
              digit++;
          }
          if ((xy.y & mask) != 0) {
              digit++;
              digit++;
          }
          quadDigits.push(digit);
      }
  
      return this._url
          .replace('{subdomain}', subdomains[(xy.x + xy.y) % subdomains.length])
          .replace('{quadkey}', quadDigits.join(""));		
    },
    
    _updateAttribution: function() {
      if (this._map.attributionControl) {
        var metadata = this.metadata;
        var res = metadata.resourceSets[0].resources[0];
        var bounds = this._map.getBounds();
        var providers = res.imageryProviders, zoom = this._map.getZoom() + 1,
            copyrights = "", provider, i, ii, j, jj, bbox, coverage;
        for (i=0,ii=providers.length; i<ii; ++i) {
            provider = providers[i];
            for (j=0,jj=provider.coverageAreas.length; j<jj; ++j) {
                coverage = provider.coverageAreas[j];
                if (zoom <= coverage.zoomMax && zoom >= coverage.zoomMin && coverage.bbox.intersects(bounds)) {
                    copyrights += provider.attribution + " ";
                    j = jj;
                }
            }
        }
        this._map.attributionControl.removeAttribution(this.attribution);
        this.attribution = this.attributionTemplate
          .replace('{logo}', metadata.brandLogoUri)
          .replace('{copyrights}', copyrights);
        this._map.attributionControl.addAttribution(this.attribution);
      }
    }    
  });
  
  L.TileLayer.Bing._callbackId = 0;
  
  L.TileLayer.Bing.processMetadata = function(metadata) {
    if (metadata.authenticationResultCode != 'ValidCredentials') {
      throw "Invalid Bing Maps API Key"
    }
    
    if (!metadata.resourceSets.length || !metadata.resourceSets[0].resources.length) {
      throw "No resources returned, perhaps " + this._mapType + " is an invalid map type?";
    }
    
    if (metadata.statusCode != 200) {
      throw "Bing Maps API request failed with status code " + metadata.statusCode;
    }
    
    this.metadata = metadata;
    var res = metadata.resourceSets[0].resources[0],
        providers = res.imageryProviders,
        i = 0,
        j,
        provider,
        bbox,
        script = document.getElementById(this._callbackId);
    
    for (; i<providers.length; i++) {
      provider = providers[i];
      for (j=0; j<provider.coverageAreas.length; j++) {
        bbox = provider.coverageAreas[j].bbox;
        provider.coverageAreas[j].bbox = new L.LatLngBounds(new L.LatLng(bbox[0],bbox[1],true),new L.LatLng(bbox[2],bbox[3], true));
      }
    }
    
    this._url = res.imageUrl.replace('{culture}','en-US');
    this.options.subdomains = [].concat(res.imageUrlSubdomains);
    script.parentNode.removeChild(script);
    window[this._callbackId] = undefined; // cannot delete from window in IE
    delete this._callbackId;
    this._onMetadataLoaded();
  }
  
  // Developer key for zat.com
  var wmBingKey = 'AiHO2_HOji8fbUHs8mrHPn9Tiq_TW3HYc_JBZWeWIZY1NeqzBC22kvIkXsfoUhzN';

  // weather radar overlay ---------------------------------------------------------------
  var WeatherImage = L.Class.extend({
    initialize: function(station, radar, nframes, opacity) {
      this.station_ = station;
      this.radar_ = radar || 'NCR'; // N0R, N1P, NTP, N0V, N0S, NCR, (N0Z)
      this.nframes_ = nframes;
      this.opacity_ = opacity===undefined ? 0.3 : opacity;
      var bb = BBox(this.station_, this.radar_);
      this.bounds_ = new L.LatLngBounds(
          new L.LatLng(bb.y1, bb.x1), // sw
          new L.LatLng(bb.y0, bb.x0)); // ne
      this.url_ = 'http://radar.weather.gov/ridge/RadarImg/'+radar+'/'+station+'_'+radar+'_0.gif';
    },
  
    onAdd: function(map) {
      this.map_ = map;
      var that = this;
      var nf = this.nframes_;
      if (!this.div_) {
        this.div_ = $('<div>', { css: { position: 'absolute' } });
      }
      if (nf === null) { // single image
        var $img = $('<img>', { src: this.url_,
          css: { position: 'absolute', width: '100%', height: '100%', opacity: this.opacity_ }
          }).appendTo(this.div_);
        this.timer_ = setInterval(function() {
          $img.attr('src', that.url_+'?nocache='+(new Date).getTime());
        }, 120000); // update image every 2 minutes
      } else { // animate multiple images
        var $images = [];
        for (var i = 0; i<nf; i++) {
          $images.push($('<img>', { src: this.url_,
              css: { position: 'absolute', width: '100%', height: '100%', opacity: 0, display: 'none' }
              }).appendTo(this.div_));
        }
        this.updateImages_();
        this.timer_ = setInterval(function() { // update images
          that.updateImages_();
        }, 120000); // every 2 minutes

        var curimg = nf;
        this.anitimer = setInterval(function() { // animation
          if (curimg < nf-1) { // fade out previous image
            $images[curimg].fadeTo(200, 0, function() { $(this).css('display', 'none'); });
          }
          if (curimg++ > nf+3) { // hold current image for 3 extra frames
            curimg = 0;
            $images[nf-1].fadeTo(200, 0, function() { $(this).css('display', 'none'); });
          }
          if (curimg < nf) { // fade in new image
            $images[curimg].css('display', 'block').fadeTo(200, that.opacity_);
          }
        }, 500);
        
      }
      map.getPanes().overlayPane.appendChild(this.div_[0]);
      map.on('viewreset', this.draw_, this);
      this.draw_();
    },
    
    draw_: function() {
      var c1 = this.map_.latLngToLayerPoint(this.bounds_.getSouthWest());
      var c2 = this.map_.latLngToLayerPoint(this.bounds_.getNorthEast());
      this.div_.css({ width: Math.abs(c2.x - c1.x), height: Math.abs(c2.y - c1.y),
          left: Math.min(c2.x, c1.x), top: Math.min(c2.y, c1.y) });
    },
    
    onRemove: function() {
      clearInterval(this.timer_);
      if (this.anitimer) { clearInterval(this.anitimer); }
      this.div_.remove();
      this.div_ = null;
      map.off('viewreset', this.draw_, this);
    },
      
    updateImages_: function() {
      var $div = this.div_;
      // $.getJSON('http://zat.com/python/JSON_generator.py?callback=?',
      $.getJSON('http://www.srh.noaa.gov/ridge2/JSON_generator.php?callback=?',
          { rid: this.station_, product: this.radar_, frames: this.nframes_, responseType: 'jsonp' },
          function(data) {
            var img = data.directory;
            var maximg = img.length-1;
            $div.find('img').each(function(i, el) {
              // $(el).attr('src', 'http://www.srh.noaa.gov/'+img[i]);
              $(el).attr('src', 'http://radar.weather.gov/'+img[Math.min(i,maximg)]);
          });
      });    
    }
  });

  // Tiles Y increasing from bottom -----------------------------------------------------------
  L.TileLayer.UpsideDown = L.TileLayer.extend({
  
    initialize: function(url, options) {
      this._url = url;
      L.Util.setOptions(this, options);    
    },
    
    getTileUrl: function (tilePoint) {
      var subdomains = this.options.subdomains,
        zoom = this._getZoomForUrl(),
        s = this.options.subdomains[(tilePoint.x + tilePoint.y) % subdomains.length];

      return L.Util.template(this._url, L.Util.extend({
        s: s,
        z: zoom,
        x: tilePoint.x,
        y: Math.pow(2,zoom) - tilePoint.y -1
      }, this._urlParams));
    }

  });

  // Weather Underground animated radar ----------------------------------------------------
  var Wradar = L.Class.extend({
    initialize: function(args) {
      this.frames_ = args.frames || 1; // frames in animation
      this.opacity_ = args.opacity || '0.4';
      this.smooth_ = args.smooth || '1';
      this.noclutter_ = args.noclutter || '0';
      this.rainsnow_ = args.rainsnow || '1';
    },

    onAdd: function(map) {
      this.map_ = map;
      var that = this;
      this.timer_ = setInterval(function() {
        that.$img_.attr('src', that.url_+(new Date).getTime());
      }, 120000); // update image every 2 minutes

      map.on('viewreset', that.draw_, that).on('moveend', that.draw_, that);
      this.draw_();
    },
    
    draw_: function() {
      var map = this.map_;
      var size = map.getSize();
      this.bounds_ = map.getBounds();
      var ne = this.bounds_.getNorthEast(), sw = this.bounds_.getSouthWest();
      this.url_ = 'http://radblast.wunderground.com/cgi-bin/radar/WUNIDS_composite?'+
        'maxlat='+ne.lat+'&maxlon='+ne.lng+'&minlat='+sw.lat+'&minlon='+sw.lng+
        '&type=N0R&frame=0&num='+this.frames_+'&delay=25&width='+size.x+'&height='+size.y+
        '&png=0&smooth='+this.smooth_+'&min=0&noclutter='+this.noclutter_+'&rainsnow='+this.rainsnow_+
        '&nodebug=0&theext=.gif&merge=elev&reproj.automerc=1&timelabel=0&nocache=';
      if (this.$img_) { this.$img_.remove(); }
      this.$img_ = $('<img>', { src: this.url_+(new Date).getTime(),
        css: { position: 'absolute', width: '100%', height: '100%', opacity: this.opacity_, 'pointer-events': 'none' }
        }).appendTo('#map_div');
    },
    
    onRemove: function() {
      clearInterval(this.timer_);
      this.$img_.remove();
      this.$img_ = null;
      this.map_.off('viewreset', this.draw_, this).off('moveend', this.draw_, this);
    }
  });

  // Weather Underground IR satellite ----------------------------------------------------
  var Wsat = L.Class.extend({
    initialize: function(args) {
      this.frames_ = args.frames || 1; // frames in animation
      this.opacity_ = args.opacity || '0.3';
    },

    onAdd: function(map) {
      this.map_ = map;
      var that = this;
      this.timer_ = setInterval(function() {
        that.$img_.attr('src', that.url_+(new Date).getTime());
      }, 600000); // update image every 10 minutes

      map.on('viewreset', that.draw_, that).on('moveend', that.draw_, that);
      this.draw_();
    },
    
    draw_: function() {
      var map = this.map_;
      var size = map.getSize();
      this.bounds_ = map.getBounds();
      var ne = this.bounds_.getNorthEast(), sw = this.bounds_.getSouthWest();
      this.url_ = 'http://wublast.wunderground.com/cgi-bin/WUBLAST?maxlat='+
          ne.lat+'&maxlon='+ne.lng+'&minlat='+sw.lat+'&minlon='+sw.lng+'&width='+size.x+'&height='+size.y+
          '&gtt=109&frame=0&num=1&delay=25&key=sat_ir4&proj=me&rand=';
      if (this.$img_) { this.$img_.remove(); }
      this.$img_ = $('<img>', { src: this.url_+(new Date).getTime(),
        css: { position: 'absolute', width: '100%', height: '100%', opacity: this.opacity_, 'pointer-events': 'none' }
        }).appendTo('#map_div');
    },
    
    onRemove: function() {
      clearInterval(this.timer_);
      this.$img_.remove();
      this.$img_ = null;
      this.map_.off('viewreset', this.draw_, this).off('moveend', this.draw_, this);
    }
  });

// http://wublast.wunderground.com/cgi-bin/WUBLAST?
// maxlat=61.92179988051227&maxlon=-58.72963737499998&minlat=-23.597391930935018&minlon=-133.96401237499998
// &width=856&height=1180&gtt=109&frame=0&num=1&delay=25&key=sat_ir4&proj=me&rand=22522348

  // http://www.eldoradocountyweather.com/current/misc/google-maps-radar/us-mosiac-radar.html

  // http://radblast.wunderground.com/cgi-bin/radar/WUNIDS_composite?
  // maxlat=58.25619910571346&maxlon=-78.56617187500001&minlat=18.966284503189556&minlon=-148.878671875&
  // type=N0R&frame=0&num=7&delay=25&width=800&height=600&png=0&
  // smooth=1&min=0&noclutter=0&rainsnow=1&nodebug=0&theext=.gif&merge=elev&reproj.automerc=1&
  // timelabel=1&timelabel.x=200&timelabel.y=12&brand=wundermap&rand=4248

  // Weather Underground alerts ----------------------------------------------------------
  var Walert = L.Class.extend({
    initialize: function(args) {
      this.opacity_ = args.opacity || '0.4';
    },

    onAdd: function(map) {
      this.map_ = map;
      var that = this;
      this.timer_ = setInterval(function() {
        that.$img_.attr('src', that.url_+(new Date).getTime());
      }, 120000); // update image every 2 minutes

      map.on('viewreset', that.draw_, that).on('moveend', that.draw_, that);
      this.draw_();
    },
    
    draw_: function() {
      var map = this.map_;
      var size = map.getSize();
      this.bounds_ = map.getBounds();
      var ne = this.bounds_.getNorthEast(), sw = this.bounds_.getSouthWest();
      this.url_ = 'http://wumaps.wunderground.com/cgi-bin/mapgen?theme=severe&stdout=1&size='+
        size.x+'x'+size.y+'&maxlat='+ne.lat+'&maxlon='+ne.lng+'&minlat='+sw.lat+'&minlon='+sw.lng+
        '&proj=automerc&format=gif&alpha=1&rand=';
      if (this.$img_) { this.$img_.remove(); }
      this.$img_ = $('<img>', { src: this.url_+(new Date).getTime(),
        css: { position: 'absolute', width: '100%', height: '100%', opacity: this.opacity_, 'pointer-events': 'none' }
        }).appendTo('#map_div');
    },
    
    onRemove: function() {
      clearInterval(this.timer_);
      this.$img_.remove();
      this.$img_ = null;
      this.map_.off('viewreset', this.draw_, this).off('moveend', this.draw_, this);
    }
  });

  // alerts
  // http://wumaps.wunderground.com/cgi-bin/mapgen?theme=severe&stdout=1&size=800x600&
  // minlat=15.101545157982086&minlon=-133.14625&maxlat=56.06451455312292&maxlon=-62.83375000000001&
  // proj=automerc&format=gif&alpha=1&rand=7564

  // http://www.eldoradocountyweather.com/images/wu-warn-legend.png

  // severe alerts
  // http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa?service=wms&version=1.1.1&request=GetMap&
  // format=png&TRANSPARENT=TRUE&bgcolor=0xCCCCFE&
  // BBOX=-14821772.751033902,1700905.6409886954,-6994621.054631855,7571269.413290229&
  // SRS=EPSG:102113&width=800&height=600&
  // Layers=WARN_SHORT_EWW,WARN_SHORT_FFW,WARN_SHORT_FLW,WARN_SHORT_SVR,WARN_SHORT_TOR,WARN_SHORT_SMW&rand=6909


}(jQuery));