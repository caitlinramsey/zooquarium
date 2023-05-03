
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb21vLTEyMzQiLCJhIjoiY2xnenFqdmE2MDNhazNzbGw2dG5sOGJnZSJ9.q6QlnKPlEGI19HBumS-V2A';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-78.644257 ,35.787743 ],
zoom: 4
});

 // adding a navigation bar from point A to point B
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})
map.addControl(directions, "top-left")

// adding search MAPBOX customize for all searches 
map.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
})
);




  // create an array of marker objects
  var markers = [
  {
    coordinates: [-99.69058, 32.43943],
    title: 'Abilene Zoological Gardens, Texas ',
    website: 'https://abilenezoo.org/'
  },
  {
    coordinates: [-75.13114, 39.94626],
    title: 'Adventure Aquarium, N.J',
    website: 'https://www.adventureaquarium.com/'
  },
  {
    coordinates: [-98.13687, 18.93741],
    title: 'Africam Safari Park, Mexico',
    website: 'https://africamsafari.com/'
  },
  {
    coordinates: [-81.54138, 41.07872],
    title: 'Akron Zoological Park, Ohio',
    website: 'https://www.akronzoo.org/'
  },
  {
    coordinates: [-149.44086, 60.10047],
    title: 'Alaska SeaLife Center, Alaska',
    website: 'http://www.alaskasealife.org/'
  },
  {
    coordinates: [-106.68094, 35.09412],
    title: 'Albuquerque Biological Park, N.M.',
    website: 'http://www.cabq.gov/biopark'
  },
  {
    coordinates: [-106.66300, 35.07874],
    title: 'ABQ BioPark Zoo',
    website: 'https://www.cabq.gov/artsculture/biopark/zoo'
  },
  {
    coordinates: [-92.45719, 31.28795],
    title: 'Alexandria Zoological Park, La.',
    website: 'https://www.thealexandriazoo.com/'
  },
  {
    coordinates: [-79.05993, 43.09445],
    title: 'Aquarium of Niagara, N.Y.',
    website: 'http://www.aquariumofniagara.org/'
  },
  {
    coordinates: [-122.40929, 37.80879],
    title: 'Aquarium of the Bay, Calif.',
    website: 'http://www.aquariumofthebay.org/'
  },
  {
    coordinates: [-118.19703, 33.76215],
    title: 'Aquarium of the Pacific, Calif.',
    website: 'https://www.aquariumofpacific.org/'
  },
  {
    coordinates: [-96.12334, 19.18981],
    title: 'Aquarium of the Port of Veracruz, Mexico',
    website: 'https://www.aquariumpuertodeveracruz.mx/'
  },
  {
    coordinates: [-111.16821691932846,32.24419445917273],
    title: 'Arizona Sonora Desert Museum, Ariz.',
    website: 'https://www.desertmuseum.org/'
  },
  {
    coordinates: [-97.24064608953944,49.868485060649355],
    title: 'Assiniboine Park Zoo, Canada ',
    website: 'http://www.assiniboineparkzoo.ca/'
  },
  {
    coordinates: [ 55.11716052457008,25.130656269715754],
    title: 'Atlantis, Dubai, United Arab Emirates',
    website: 'https://www.atlantis.com/dubai/'
  },
  {
    coordinates: [-77.32111217357853,25.084015085246566],
    title: 'Atlantis, Paradise Island, Bahamas',
    website: 'https://www.atlantisbahamas.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB_AtlantisBahamas'
  },
  {
    coordinates: [-90.06295339059017,29.950714564862814],
    title: 'Audubon Aquarium of the Americas, La.',
    website: 'https://audubonnatureinstitute.org/aquarium'
  },
  {
    coordinates: [-90.13140679947251, 29.923882177117004],
    title: 'Audubon Zoo, La.',
    website: 'https://audubonnatureinstitute.org/'
  },
  {
    coordinates: [-82.092760534908,26.43830091216113],
    title: 'Bailey-Matthews National Shell Museum, Fla.',
    website: 'http://www.shellmuseum.org/'
  },
  {
    coordinates: [ -97.12138790401433,31.54769203772118],
    title: 'Baylor University Bear Habitat, Texas ',
    website: 'http://www.baylor.edu/bear'
  },
  {
    coordinates: [-74.04753540011097,40.933775910704064],
    title: 'Bergen County Zoological Park, N.J.',
    website: 'https://www.co.bergen.nj.us/bergen-county-zoo/about-bergen-county-zoo'
  },
  {
    coordinates: [-64.73689803096354,32.32377799784547],
    title: 'Bermuda Aquarium, Museum and Zoo, Bermuda',
    website: 'http://www.bamz.org/'
  },
  {
    coordinates: [-85.15304856300946,42.24584398878256],
    title: 'Binder Park Zoo, Mich.',
    website: 'http://www.binderparkzoo.org/'
  },
  {
    coordinates: [-117.25061754628398,32.866020840627044],
    title: 'Birch Aquarium at Scripps, Calif.',
    website: 'https://aquarium.ucsd.edu/'
  },
  {
    coordinates: [-86.77757711927256,33.489763274898834],
    title: 'Birmingham Zoo, Ala.',
    website: 'http://www.birminghamzoo.com/'
  },
  {
    coordinates: [-93.62450893236041,41.521144025922496],
    title: 'Blank Park Zoo, Iowa',
    website: 'http://www.blankparkzoo.com/'
  },
  {
    coordinates: [-84.20195851710909,39.7888325308613],
    title: 'Boonshoft Museum of Discovery, Ohio',
    website: 'http://www.boonshoftmuseum.org/'
  },
  {
    coordinates: [-97.1307630340216,44.90938242417048],
    title: 'Bramble Park Zoo, S.D.',
    website: 'http://www.brambleparkzoo.com/'
  },
  {
    coordinates: [-75.54960770176629,39.756181424740745],
    title: 'Brandywine Zoo, Del.',
    website: 'http://www.brandywinezoo.org/'
  },
  {
    coordinates: [-80.71384487531502, 28.22518709181348],
    title: 'Brevard Zoo, Fla.',
    website: 'http://www.brevardzoo.org/'
  },
  {
    coordinates: [-73.87696616682108,40.85059032946302],
    title: 'Bronx Zoo/WCS, N.Y.',
    website: 'https://bronxzoo.com/'
  },
  {
    coordinates: [-79.08129350392615,33.53077501623588],
    title: 'Brookgreen Gardens, S.C.',
    website: 'https://www.brookgreen.org/'
  },
  {
    coordinates: [-78.85160910344555,42.93731158122986],
    title: 'Buffalo Zoo, N.Y.',
    website: 'http://www.buffalozoo.org/'
  },
  {
    coordinates: [-82.41946688728414, 28.037381869471222],
    title: 'Busch Gardens Tampa Bay, Fla.',
    website: 'https://buschgardens.com/tampa/'
  },
  {
    coordinates: [-90.54295726320146, 38.66483378474766],
    title: 'The Butterfly House, Mo.'   ,
    website: 'http://www.butterflyhouse.org/'
  },
  {
    coordinates: [-105.06661944593999,39.887508346755325],
    title: 'Butterfly Pavilion, Colo.',
    website: 'http://www.butterflies.org/'
  },
  {
    coordinates: [-70.95161533342575,41.62952777798792],
    title: 'Buttonwood Park Zoo, Mass.',
    website: 'http://www.bpzoo.org/'
  },
  {
    coordinates: [-118.28525231740947,33.71119364246217],
    title: 'Cabrillo Marine Aquarium, Calif.',
    website: 'http://www.cabrillomarineaquarium.org/'
  },
  {
    coordinates: [-95.32557290397835,32.370192191917944],
    title: 'Caldwell Zoo, Texas',
    website: 'http://www.caldwellzoo.org/'
  },
  {
    coordinates:[-118.28618854808455,34.0162361102913],
    title: 'California Science Center, Calif.',
    website: 'http://www.californiasciencecenter.org/'
  },
  {
    coordinates: [-97.14452378866878,31.57036655712506],
    title: 'Cameron Park Zoo, Texas',
    website: 'http://www.cameronparkzoo.com/'
  },
  {
    coordinates: [-97.14461328707641,31.57029915742479],
    title: 'Cape May County Park Zoo, N.J.',
    website: 'http://www.cameronparkzoo.com/'
  },
  {
    coordinates: [-71.29845420350131,41.93744957059653],
    title: 'Capron Park Zoo, Mass.',
    website: 'https://capronparkzoo.com/'
  },
  {
    coordinates: [-81.32202616612122,28.854455457633037],
    title: 'Central Florida Zoological Park, Fla.',
    website: 'http://www.centralfloridazoo.org/'
  },
  {
    coordinates: [-73.97177985938448,40.768029865033164],
    title: 'Central Park Zoo, N.Y.',
    website: 'http://www.centralparkzoo.com/'
  },
  {
    coordinates: [-120.66991310383557,35.46700670164815],
    title: 'Charles Paddock Zoo, Calif.',
    website: 'http://www.charlespaddockzoo.org/'
  },
  {
    coordinates: [-85.28218473454486,35.0428871074312],
    title: 'Chattanooga Zoo at Warner Park, Tenn.',
    website: 'http://www.chattzoo.org/'
  },
  {
    coordinates: [-104.85201112411849,38.77066702744572],
    title: 'Cheyenne Mountain Zoological Park, Colo.',
    website: 'http://www.cmzoo.org/'
  },
  {
    coordinates: [-87.83681185366099,41.83277660430994],
    title: 'Chicago Zoological Society - Brookfield Zoo, Ill.',
    website: 'https://www.czs.org/Brookfield-ZOO/Home'
  },
  {
    coordinates: [-84.50931166090501,39.142860634146594],
    title: 'Cincinnati Zoo and Botanical Garden, Ohio',
    website: 'https://cincinnatizoo.org/'
  },
  {
    coordinates: [-81.71236711111416,41.446284539719116],
    title: 'Cleveland Metroparks Zoo, Ohio',
    website: 'https://www.clevelandmetroparks.com/zoo'
  },
  {
    coordinates: [-76.91238983383994,41.13058401783335],
    title: 'Clyde Peelings Reptiland, Pa.',
    website: 'https://reptiland.com/'
  },
  {
    coordinates: [-83.11797554527922,40.15621180272659],
    title: 'Columbus Zoo & Aquarium, Ohio ',
    website: 'https://www.columbuszoo.org/'
  },
  {
    coordinates: [-93.1524954078763,44.98115766050607],
    title: 'Como Park Zoo and Conservatory, Minn.',
    website: 'http://www.comozooconservatory.org/'
  },
  {
    coordinates: [-73.18216488966279,41.20987699788028],
    title: 'Connecticuts Beardsley Zoo, Conn.',
    website: 'https://www.beardsleyzoo.org/'
  },
  {
    coordinates: [-88.12126537798522,41.878383525746635],
    title: 'Cosley Zoo, Ill.',
    website: 'https://cosleyzoo.org/'
  },
  {
    coordinates: [ -88.12098642828035,41.878375537447056],
    title: 'CuriOdyssey, Calif.',
    website: 'https://cosleyzoo.org/'
  },
  {
    coordinates: [-100.80675390293207,46.79962331576595],
    title: 'Dakota Zoo, N.D.',
    website: 'https://www.dakotazoo.org/'
  },
  {
    coordinates: [-96.8053687322825,32.783708192762305],
    title: 'Dallas World Aquarium, Texas',
    website: 'https://www.dwazoo.com/'
  },
  {
    coordinates: [-96.81548904457408,32.74077507629004],
    title: 'Dallas Zoo, Texas',
    website: 'https://www.dallaszoo.com/'
  },
  {
    coordinates: [-96.178663501419,38.386738874932],
    title: 'David Traylor Zoo of Emporia, Kan.',
    website: 'https://emporiaks.gov/159/David-Traylor-Zoo'
  },
  {
    coordinates: [-104.95081434935697,39.74968065041639],
    title: 'Denver Zoological Gardens, Colo.',
    website: 'https://denverzoo.org/'
  },
  {
    coordinates: [-83.1487377878772,42.479710455057685],
    title: 'Detroit Zoological Park, Mich.',
    website: 'http://detroitzoo.org/'
  },
  {
    coordinates: [-93.30655406281561,37.25433444539774],
    title: 'Dickerson Park Zoo, Mo.',
    website: 'http://www.dickersonparkzoo.org/'
  },
  {
    coordinates: [-81.4615261054151,28.405685740646202],
    title: 'Discovery Cove, Fla.',
    website: 'https://discoverycove.com/orlando?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing'
  },
  {
    coordinates: [-81.59062171891198,28.35764054488634],
    title: 'Disneys Animal Kingdom, Fla.',
    website: 'https://disneyworld.disney.go.com/destinations/animal-kingdom/?CMP=OKC-80007823_GM_WDW_destination_disneysanimalkingdomthemepark_NA'
  },
  {
    coordinates: [-106.44517166114775,31.76784903419748],
    title: 'El Paso Zoo, Texas',
    website: 'http://www.elpasozoo.org/'
  },
  {
    coordinates: [-106.44516093231296,31.767812548069347],
    title: 'Ellen Trout Zoo, Texas',
    website: 'http://www.elpasozoo.org/'
  },
  {
    coordinates: [-75.33771276086851,40.13364463017826],
    title: 'Elmwood Park Zoo, Pa.',
    website: 'http://www.elmwoodparkzoo.org/?utm_source=GMB&utm_medium=organic&utm_campaign=1SEO_SM'
  },
  {
    coordinates: [-82.44493907659229,27.944152056396856],
    title: 'Florida Aquarium, The, Fla.',
    website: 'https://www.flaquarium.org/'
  },
  {
    coordinates: [-97.35697386301574,32.72629436652453],
    title: 'Fort Worth Zoo, Texas',
    website: 'http://www.fortworthzoo.org/'
  },
  {
    coordinates: [-97.7971802457963,32.179630807378736],
    title: 'Fossil Rim Wildlife Center, Texas',
    website: 'http://www.fossilrim.org/'
  },
  {
    coordinates: [-71.0870547607859,42.30277207718584],
    title: 'Franklin Park Zoo, Mass.',
    website: 'https://www.zoonewengland.org/franklin-park-zoo.aspx'
  },
  {
    coordinates: [-119.82151587632832,36.752540678466026],
    title: 'Fresno Chaffee Zoo Calif.',
    website: 'http://www.fresnochaffeezoo.org/'
  },
  {
    coordinates: [-84.39510980341745,33.76357819783677],
    title: 'Georgia Aquarium, Ga.',
    website: 'https://www.georgiaaquarium.org/'
  },
  {
    coordinates: [-97.49533958829424,25.913588629680778],
    title: 'Gladys Porter Zoo, Texas ',
    website: 'http://gladysporterzoo.org/'
  },
  {
    coordinates: [-96.76247363986683,43.53935357672296],
    title: 'Great Plains Zoo and Delbridge Museum of Natural History, S.D.',
    website: 'http://www.greatzoo.org/'
  },
  {
    coordinates: [-79.8335055340191,36.12980545162845],
    title: 'Greensboro Science Center, N.C.',
    website: 'http://www.greensboroscience.org/'
  },
  {
    coordinates: [-82.38593721717368,34.84767360592224],
    title: 'Greenville Zoo, S.C.',
    website: 'http://www.greenvillezoo.com/'
  },
  {
    coordinates: [-111.09861184535238,44.6563168982757],
    title: 'Grizzly & Wolf Discovery Center, Mont.',
    website: 'http://www.grizzlydiscoveryctr.org/'
  },
  {
    coordinates: [-121.85976047262139,37.326283865802864],
    title: 'Happy Hollow Zoo, Calif.',
    website: 'https://happyhollow.org/'
  },
  {
    coordinates: [-89.4100457319212,43.06079066394442],
    title: 'Henry Vilas Zoo, Wis.',
    website: 'https://www.henryvilaszoo.gov/'
  },
  {
    coordinates: [-157.82138147017807,21.27131906776137],
    title: 'Honolulu Zoo, Hawaii',
    website: 'https://www.honolulu.gov/zoo.html'
  },
  {
    coordinates: [-95.39042799188447,29.71597695165519],
    title: 'Houston Zoo, Inc. Texas',
    website: 'https://www.houstonzoo.org/'
  },
  {
    coordinates: [-97.9172503897797,38.02940574412656, -97.9172503897797],
    title: 'Hutchinson Zoo, Kan.',
    website: 'http://www.hutchinsonzoo.org/'
  },
  {
    coordinates: [-97.91720747444049,38.029447999348754],
    title: 'Idaho Falls Zoo at Tautphaus Park, Idaho ',
    website: 'http://www.hutchinsonzoo.org/'
  },
  {
    coordinates: [-86.17714466272581,39.76689427944918],
    title: 'Indianapolis Zoological Society, Inc., Ind.',
    website: 'http://www.indianapoliszoo.com/'
  },
  {
    coordinates: [-89.75467734539738,43.54748470258256],
    title: 'International Crane Foundation, Wis.',
    website: 'http://www.savingcranes.org/'
  },
  {
    coordinates: [-81.64325790351738,30.402353124461325],
    title: 'Jacksonville Zoo and Gardens, Fla.',
    website: 'http://www.jacksonvillezoo.org/'
  },
  {
    coordinates: [-74.03651646087012,40.09488145957082],
    title: 'Jenkinsons Aquarium, N.J.',
    website: 'http://jenkinsons.com/aquarium/'
  },
  {
    coordinates: [-85.7045930877511,42.96369083939737],
    title: 'John Ball Zoological Gardens, Mich.',
    website: 'http://www.jbzoo.org/'
  },
  {
    coordinates: [-87.61404873196801,41.86776432256692],
    title: 'John G. Shedd Aquarium, Ill.',
    website: 'https://www.sheddaquarium.org/'
  },
  {
    coordinates: [-94.52941940508393,39.00744852281905],
    title: 'Kansas City Zoo, Mo.',
    website: 'https://www.kansascityzoo.org/'
  },
  {
    coordinates: [-92.19048327410047,46.7259671247311],
    title: 'Lake Superior Zoo, Minn.',
    website: 'http://lszooduluth.org/'
  },
  {
    coordinates: [-105.0143260473871,39.75226793305514],
    title: 'Landrys Downtown Aquarium - Denver, Colo.',
    website: 'http://www.aquariumrestaurants.com/downtownaquariumdenver/dining.asp'
  },
  {
    coordinates: [-95.3673255593611,29.76438203624505],
    title: 'Landrys Houston Aquarium, Inc., Texas',
    website: 'http://www.aquariumrestaurants.com/downtownaquariumhouston/'
  },
  {
    coordinates: [-96.30253911666165,41.009907178191646],
    title: 'Lee G. Simmons Conservation Park & Wildlife Safari, Nebraska',
    website: 'http://wildlifesafaripark.com/'
  },
  {
    coordinates: [-100.8734290204606,37.95954557237355],
    title: 'Lee Richardson Zoo, Kansas',
    website: 'http://leerichardsonzoo.org/'
  },
  {
    coordinates: [-75.62722890133577,40.65886053319288],
    title: 'Lehigh Valley Zoo, Penn.',
    website: 'http://www.lvzoo.org/'
  },
  {
    coordinates: [40.80078373279552, -96.67957708967843],
    title: 'Lincoln Childrens Zoo, Nebraska',
    website: 'http://www.lincolnzoo.org/'
  },
  {
    coordinates: [-87.63366176080072,41.92183069722201],
    title: 'Lincoln Park Zoological Gardens, Ill.',
    website: 'https://www.lpzoo.org/'
  },
  {
    coordinates: [-80.32219097477946,26.712930751870328],
    title: 'Lion Country Safari, Fla.',
    website: 'http://www.lioncountrysafari.com/'
  },
  {
    coordinates: [-92.33020083222095,34.747159307288946],
    title: 'Little Rock Zoological Gardens, Arkansas',
    website: 'http://www.littlerockzoo.com/'
  },
  {
    coordinates: [-116.37438441691496,33.70016631702203],
    title: 'The Living Desert Zoo and Gardens, Calif.',
    website: 'https://www.livingdesert.org/'
  },
  {
    coordinates: [-104.27895034578853,32.441993671707536],
    title: 'Living Desert Zoo & Gardens State Park, N.M. ',
    website: 'http://www.livingdesertnm.org/'
  },
  {
    coordinates: [-118.284246434702,34.14879763494311],
    title: 'Los Angeles Zoo, Calif.',
    website: 'https://www.lazoo.org/'
  },
  {
    coordinates: [-85.7072766069563,38.20600808333293],
    title: 'Louisville Zoological Garden, Ky.',
    website: 'https://louisvillezoo.org/'
  },
  {
    coordinates: [-111.89394382036697,40.53225891291982],
    title: 'Loveland Living Planet Aquarium, Utah',
    website: 'http://livingplanetaquarium.org/'
  },
  {
    coordinates: [-81.21299891887686,29.669402353713547],
    title: 'Marineland, Fla.',
    website: 'http://www.marineland.net/'
  },
  {
    coordinates: [-73.41672704549308,41.10169981787871],
    title: 'Maritime Aquarium at Norwalk, Inc., Conn.',
    website: 'http://www.maritimeaquarium.org/'
  },
  {
    coordinates: [-76.64971898130175,39.32298761321982],
    title: 'Maryland Zoo in Baltimore, Md.',
    website: 'https://www.marylandzoo.org/'
  },
  {
    coordinates: [-89.9970961726946,35.1521918495282],
    title: 'Memphis Zoological Garden and Aquarium, Tenn.',
    website: 'https://www.memphiszoo.org/Animals#collection=1123'
  },
  {
    coordinates: [-87.60589306523626,37.99651683097697],
    title: 'Mesker Park Zoo & Botanic Garden, Inc., Ind.',
    website: 'http://www.meskerparkzoo.com/'
  },
  {
    coordinates: [-89.00530248969085,40.469751558478265],
    title: 'Miller Park Zoo, Ill.',
    website: 'http://www.millerparkzoo.org/'
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },

]
// loop through the markers array and create a marker for each object
markers.forEach(function(marker) {
  // create a new marker with a div element
  var newMarker = new mapboxgl.Marker({
    element: document.createElement('div')
  });
  
  // add a class to the marker element for styling
  newMarker.getElement().classList.add('marker');

  // add the marker to the map at the specified coordinates
  newMarker.setLngLat(marker.coordinates).addTo(map);

  // create a new popup with the title text for this marker
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML('<h3>' + marker.title + '</h3><a href="' + marker.website + '">Visit website</a>');

  // attach the popup to the marker
  newMarker.setPopup(popup);
});

   
   
 
