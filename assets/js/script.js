mapboxgl.accessToken =
  "pk.eyJ1Ijoic2ltb21vLTEyMzQiLCJhIjoiY2xnenFqdmE2MDNhazNzbGw2dG5sOGJnZSJ9.q6QlnKPlEGI19HBumS-V2A";
const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-78.644257, 35.787743],
  zoom: 4,
});
// adding search MAPBOX customize for all searches 
map.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
}),
);

 // adding a navigation bar from point A to point B
const nav = new mapboxgl.NavigationControl()
var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})
map.addControl(directions, "top-left")

// create an array of marker objects
var markers = [
  {
    coordinates: [-99.69058, 32.43943],
    title: "Abilene Zoological Gardens, Texas ",
    website: "https://abilenezoo.org/",
  },
  {
    coordinates: [-75.13114, 39.94626],
    title: "Adventure Aquarium, N.J",
    website: "https://www.adventureaquarium.com/",
  },
  {
    coordinates: [-98.13687, 18.93741],
    title: "Africam Safari Park, Mexico",
    website: "https://africamsafari.com/",
  },
  {
    coordinates: [-81.54138, 41.07872],
    title: "Akron Zoological Park, Ohio",
    website: "https://www.akronzoo.org/",
  },
  {
    coordinates: [-149.44086, 60.10047],
    title: "Alaska SeaLife Center, Alaska",
    website: "http://www.alaskasealife.org/",
  },
  {
    coordinates: [-106.68094, 35.09412],
    title: "Albuquerque Biological Park, N.M.",
    website: "http://www.cabq.gov/biopark",
  },
  {
    coordinates: [-106.663, 35.07874],
    title: "ABQ BioPark Zoo",
    website: "https://www.cabq.gov/artsculture/biopark/zoo",
  },
  {
    coordinates: [-92.45719, 31.28795],
    title: "Alexandria Zoological Park, La.",
    website: "https://www.thealexandriazoo.com/",
  },
  {
    coordinates: [-79.05993, 43.09445],
    title: "Aquarium of Niagara, N.Y.",
    website: "http://www.aquariumofniagara.org/",
  },
  {
    coordinates: [-122.40929, 37.80879],
    title: "Aquarium of the Bay, Calif.",
    website: "http://www.aquariumofthebay.org/",
  },
  {
    coordinates: [-118.19703, 33.76215],
    title: "Aquarium of the Pacific, Calif.",
    website: "https://www.aquariumofpacific.org/",
  },
  {
    coordinates: [-96.12334, 19.18981],
    title: "Aquarium of the Port of Veracruz, Mexico",
    website: "https://www.aquariumpuertodeveracruz.mx/",
  },
  {
    coordinates: [-111.16821691932846, 32.24419445917273],
    title: "Arizona Sonora Desert Museum, Ariz.",
    website: "https://www.desertmuseum.org/",
  },
  {
    coordinates: [-97.24064608953944, 49.868485060649355],
    title: "Assiniboine Park Zoo, Canada ",
    website: "http://www.assiniboineparkzoo.ca/",
  },
  {
    coordinates: [55.11716052457008, 25.130656269715754],
    title: "Atlantis, Dubai, United Arab Emirates",
    website: "https://www.atlantis.com/dubai/",
  },
  {
    coordinates: [-77.32111217357853, 25.084015085246566],
    title: "Atlantis, Paradise Island, Bahamas",
    website:
      "https://www.atlantisbahamas.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB_AtlantisBahamas",
  },
  {
    coordinates: [-90.06295339059017, 29.950714564862814],
    title: "Audubon Aquarium of the Americas, La.",
    website: "https://audubonnatureinstitute.org/aquarium",
  },
  {
    coordinates: [-90.13140679947251, 29.923882177117004],
    title: "Audubon Zoo, La.",
    website: "https://audubonnatureinstitute.org/",
  },
  {
    coordinates: [-82.092760534908, 26.43830091216113],
    title: "Bailey-Matthews National Shell Museum, Fla.",
    website: "http://www.shellmuseum.org/",
  },
  {
    coordinates: [-97.12138790401433, 31.54769203772118],
    title: "Baylor University Bear Habitat, Texas ",
    website: "http://www.baylor.edu/bear",
  },
  {
    coordinates: [-74.04753540011097, 40.933775910704064],
    title: "Bergen County Zoological Park, N.J.",
    website:
      "https://www.co.bergen.nj.us/bergen-county-zoo/about-bergen-county-zoo",
  },
  {
    coordinates: [-64.73689803096354, 32.32377799784547],
    title: "Bermuda Aquarium, Museum and Zoo, Bermuda",
    website: "http://www.bamz.org/",
  },
  {
    coordinates: [-85.15304856300946, 42.24584398878256],
    title: "Binder Park Zoo, Mich.",
    website: "http://www.binderparkzoo.org/",
  },
  {
    coordinates: [-117.25061754628398, 32.866020840627044],
    title: "Birch Aquarium at Scripps, Calif.",
    website: "https://aquarium.ucsd.edu/",
  },
  {
    coordinates: [-86.77757711927256, 33.489763274898834],
    title: "Birmingham Zoo, Ala.",
    website: "http://www.birminghamzoo.com/",
  },
  {
    coordinates: [-93.62450893236041, 41.521144025922496],
    title: "Blank Park Zoo, Iowa",
    website: "http://www.blankparkzoo.com/",
  },
  {
    coordinates: [-84.20195851710909, 39.7888325308613],
    title: "Boonshoft Museum of Discovery, Ohio",
    website: "http://www.boonshoftmuseum.org/",
  },
  {
    coordinates: [-97.1307630340216, 44.90938242417048],
    title: "Bramble Park Zoo, S.D.",
    website: "http://www.brambleparkzoo.com/",
  },
  {
    coordinates: [-75.54960770176629, 39.756181424740745],
    title: "Brandywine Zoo, Del.",
    website: "http://www.brandywinezoo.org/",
  },
  {
    coordinates: [-80.71384487531502, 28.22518709181348],
    title: "Brevard Zoo, Fla.",
    website: "http://www.brevardzoo.org/",
  },
  {
    coordinates: [-73.87696616682108, 40.85059032946302],
    title: "Bronx Zoo/WCS, N.Y.",
    website: "https://bronxzoo.com/",
  },
  {
    coordinates: [-79.08129350392615, 33.53077501623588],
    title: "Brookgreen Gardens, S.C.",
    website: "https://www.brookgreen.org/",
  },
  {
    coordinates: [-78.85160910344555, 42.93731158122986],
    title: "Buffalo Zoo, N.Y.",
    website: "http://www.buffalozoo.org/",
  },
  {
    coordinates: [-82.41946688728414, 28.037381869471222],
    title: "Busch Gardens Tampa Bay, Fla.",
    website: "https://buschgardens.com/tampa/",
  },
  {
    coordinates: [-90.54295726320146, 38.66483378474766],
    title: "The Butterfly House, Mo.",
    website: "http://www.butterflyhouse.org/",
  },
  {
    coordinates: [-105.06661944593999, 39.887508346755325],
    title: "Butterfly Pavilion, Colo.",
    website: "http://www.butterflies.org/",
  },
  {
    coordinates: [-70.95161533342575, 41.62952777798792],
    title: "Buttonwood Park Zoo, Mass.",
    website: "http://www.bpzoo.org/",
  },
  {
    coordinates: [-118.28525231740947, 33.71119364246217],
    title: "Cabrillo Marine Aquarium, Calif.",
    website: "http://www.cabrillomarineaquarium.org/",
  },
  {
    coordinates: [-95.32557290397835, 32.370192191917944],
    title: "Caldwell Zoo, Texas",
    website: "http://www.caldwellzoo.org/",
  },
  {
    coordinates: [-118.28618854808455, 34.0162361102913],
    title: "California Science Center, Calif.",
    website: "http://www.californiasciencecenter.org/",
  },
  {
    coordinates: [-97.14452378866878, 31.57036655712506],
    title: "Cameron Park Zoo, Texas",
    website: "http://www.cameronparkzoo.com/",
  },
  {
    coordinates: [-97.14461328707641, 31.57029915742479],
    title: "Cape May County Park Zoo, N.J.",
    website: "http://www.cameronparkzoo.com/",
  },
  {
    coordinates: [-71.29845420350131, 41.93744957059653],
    title: "Capron Park Zoo, Mass.",
    website: "https://capronparkzoo.com/",
  },
  {
    coordinates: [-81.32202616612122, 28.854455457633037],
    title: "Central Florida Zoological Park, Fla.",
    website: "http://www.centralfloridazoo.org/",
  },
  {
    coordinates: [-73.97177985938448, 40.768029865033164],
    title: "Central Park Zoo, N.Y.",
    website: "http://www.centralparkzoo.com/",
  },
  {
    coordinates: [-120.66991310383557, 35.46700670164815],
    title: "Charles Paddock Zoo, Calif.",
    website: "http://www.charlespaddockzoo.org/",
  },
  {
    coordinates: [-85.28218473454486, 35.0428871074312],
    title: "Chattanooga Zoo at Warner Park, Tenn.",
    website: "http://www.chattzoo.org/",
  },
  {
    coordinates: [-104.85201112411849, 38.77066702744572],
    title: "Cheyenne Mountain Zoological Park, Colo.",
    website: "http://www.cmzoo.org/",
  },
  {
    coordinates: [-87.83681185366099, 41.83277660430994],
    title: "Chicago Zoological Society - Brookfield Zoo, Ill.",
    website: "https://www.czs.org/Brookfield-ZOO/Home",
  },
  {
    coordinates: [-84.50931166090501, 39.142860634146594],
    title: "Cincinnati Zoo and Botanical Garden, Ohio",
    website: "https://cincinnatizoo.org/",
  },
  {
    coordinates: [-81.71236711111416, 41.446284539719116],
    title: "Cleveland Metroparks Zoo, Ohio",
    website: "https://www.clevelandmetroparks.com/zoo",
  },
  {
    coordinates: [-76.91238983383994, 41.13058401783335],
    title: "Clyde Peelings Reptiland, Pa.",
    website: "https://reptiland.com/",
  },
  {
    coordinates: [-83.11797554527922, 40.15621180272659],
    title: "Columbus Zoo & Aquarium, Ohio ",
    website: "https://www.columbuszoo.org/",
  },
  {
    coordinates: [-93.1524954078763, 44.98115766050607],
    title: "Como Park Zoo and Conservatory, Minn.",
    website: "http://www.comozooconservatory.org/",
  },
  {
    coordinates: [-73.18216488966279, 41.20987699788028],
    title: "Connecticuts Beardsley Zoo, Conn.",
    website: "https://www.beardsleyzoo.org/",
  },
  {
    coordinates: [-88.12126537798522, 41.878383525746635],
    title: "Cosley Zoo, Ill.",
    website: "https://cosleyzoo.org/",
  },
  {
    coordinates: [-88.12098642828035, 41.878375537447056],
    title: "CuriOdyssey, Calif.",
    website: "https://cosleyzoo.org/",
  },
  {
    coordinates: [-100.80675390293207, 46.79962331576595],
    title: "Dakota Zoo, N.D.",
    website: "https://www.dakotazoo.org/",
  },
  {
    coordinates: [-96.8053687322825, 32.783708192762305],
    title: "Dallas World Aquarium, Texas",
    website: "https://www.dwazoo.com/",
  },
  {
    coordinates: [-96.81548904457408, 32.74077507629004],
    title: "Dallas Zoo, Texas",
    website: "https://www.dallaszoo.com/",
  },
  {
    coordinates: [-96.178663501419, 38.386738874932],
    title: "David Traylor Zoo of Emporia, Kan.",
    website: "https://emporiaks.gov/159/David-Traylor-Zoo",
  },
  {
    coordinates: [-104.95081434935697, 39.74968065041639],
    title: "Denver Zoological Gardens, Colo.",
    website: "https://denverzoo.org/",
  },
  {
    coordinates: [-83.1487377878772, 42.479710455057685],
    title: "Detroit Zoological Park, Mich.",
    website: "http://detroitzoo.org/",
  },
  {
    coordinates: [-93.30655406281561, 37.25433444539774],
    title: "Dickerson Park Zoo, Mo.",
    website: "http://www.dickersonparkzoo.org/",
  },
  {
    coordinates: [-81.4615261054151, 28.405685740646202],
    title: "Discovery Cove, Fla.",
    website:
      "https://discoverycove.com/orlando?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
  },
  {
    coordinates: [-81.59062171891198, 28.35764054488634],
    title: "Disneys Animal Kingdom, Fla.",
    website:
      "https://disneyworld.disney.go.com/destinations/animal-kingdom/?CMP=OKC-80007823_GM_WDW_destination_disneysanimalkingdomthemepark_NA",
  },
  {
    coordinates: [-106.44517166114775, 31.76784903419748],
    title: "El Paso Zoo, Texas",
    website: "http://www.elpasozoo.org/",
  },
  {
    coordinates: [-106.44516093231296, 31.767812548069347],
    title: "Ellen Trout Zoo, Texas",
    website: "http://www.elpasozoo.org/",
  },
  {
    coordinates: [-75.33771276086851, 40.13364463017826],
    title: "Elmwood Park Zoo, Pa.",
    website:
      "http://www.elmwoodparkzoo.org/?utm_source=GMB&utm_medium=organic&utm_campaign=1SEO_SM",
  },
  {
    coordinates: [-82.44493907659229, 27.944152056396856],
    title: "Florida Aquarium, The, Fla.",
    website: "https://www.flaquarium.org/",
  },
  {
    coordinates: [-97.35697386301574, 32.72629436652453],
    title: "Fort Worth Zoo, Texas",
    website: "http://www.fortworthzoo.org/",
  },
  {
    coordinates: [-97.7971802457963, 32.179630807378736],
    title: "Fossil Rim Wildlife Center, Texas",
    website: "http://www.fossilrim.org/",
  },
  {
    coordinates: [-71.0870547607859, 42.30277207718584],
    title: "Franklin Park Zoo, Mass.",
    website: "https://www.zoonewengland.org/franklin-park-zoo.aspx",
  },
  {
    coordinates: [-119.82151587632832, 36.752540678466026],
    title: "Fresno Chaffee Zoo Calif.",
    website: "http://www.fresnochaffeezoo.org/",
  },
  {
    coordinates: [-84.39510980341745, 33.76357819783677],
    title: "Georgia Aquarium, Ga.",
    website: "https://www.georgiaaquarium.org/",
  },
  {
    coordinates: [-97.49533958829424, 25.913588629680778],
    title: "Gladys Porter Zoo, Texas ",
    website: "http://gladysporterzoo.org/",
  },
  {
    coordinates: [-96.76247363986683, 43.53935357672296],
    title: "Great Plains Zoo and Delbridge Museum of Natural History, S.D.",
    website: "http://www.greatzoo.org/",
  },
  {
    coordinates: [-79.8335055340191, 36.12980545162845],
    title: "Greensboro Science Center, N.C.",
    website: "http://www.greensboroscience.org/",
  },
  {
    coordinates: [-82.38593721717368, 34.84767360592224],
    title: "Greenville Zoo, S.C.",
    website: "http://www.greenvillezoo.com/",
  },
  {
    coordinates: [-111.09861184535238, 44.6563168982757],
    title: "Grizzly & Wolf Discovery Center, Mont.",
    website: "http://www.grizzlydiscoveryctr.org/",
  },
  {
    coordinates: [-121.85976047262139, 37.326283865802864],
    title: "Happy Hollow Zoo, Calif.",
    website: "https://happyhollow.org/",
  },
  {
    coordinates: [-89.4100457319212, 43.06079066394442],
    title: "Henry Vilas Zoo, Wis.",
    website: "https://www.henryvilaszoo.gov/",
  },
  {
    coordinates: [-157.82138147017807, 21.27131906776137],
    title: "Honolulu Zoo, Hawaii",
    website: "https://www.honolulu.gov/zoo.html",
  },
  {
    coordinates: [-95.39042799188447, 29.71597695165519],
    title: "Houston Zoo, Inc. Texas",
    website: "https://www.houstonzoo.org/",
  },
  {
    coordinates: [-97.9172503897797, 38.02940574412656, -97.9172503897797],
    title: "Hutchinson Zoo, Kan.",
    website: "http://www.hutchinsonzoo.org/",
  },
  {
    coordinates: [-97.91720747444049, 38.029447999348754],
    title: "Idaho Falls Zoo at Tautphaus Park, Idaho ",
    website: "http://www.hutchinsonzoo.org/",
  },
  {
    coordinates: [-86.17714466272581, 39.76689427944918],
    title: "Indianapolis Zoological Society, Inc., Ind.",
    website: "http://www.indianapoliszoo.com/",
  },
  {
    coordinates: [-89.75467734539738, 43.54748470258256],
    title: "International Crane Foundation, Wis.",
    website: "http://www.savingcranes.org/",
  },
  {
    coordinates: [-81.64325790351738, 30.402353124461325],
    title: "Jacksonville Zoo and Gardens, Fla.",
    website: "http://www.jacksonvillezoo.org/",
  },
  {
    coordinates: [-74.03651646087012, 40.09488145957082],
    title: "Jenkinsons Aquarium, N.J.",
    website: "http://jenkinsons.com/aquarium/",
  },
  {
    coordinates: [-85.7045930877511, 42.96369083939737],
    title: "John Ball Zoological Gardens, Mich.",
    website: "http://www.jbzoo.org/",
  },
  {
    coordinates: [-87.61404873196801, 41.86776432256692],
    title: "John G. Shedd Aquarium, Ill.",
    website: "https://www.sheddaquarium.org/",
  },
  {
    coordinates: [-94.52941940508393, 39.00744852281905],
    title: "Kansas City Zoo, Mo.",
    website: "https://www.kansascityzoo.org/",
  },
  {
    coordinates: [-92.19048327410047, 46.7259671247311],
    title: "Lake Superior Zoo, Minn.",
    website: "http://lszooduluth.org/",
  },
  {
    coordinates: [-105.0143260473871, 39.75226793305514],
    title: "Landrys Downtown Aquarium - Denver, Colo.",
    website:
      "http://www.aquariumrestaurants.com/downtownaquariumdenver/dining.asp",
  },
  {
    coordinates: [-95.3673255593611, 29.76438203624505],
    title: "Landrys Houston Aquarium, Inc., Texas",
    website: "http://www.aquariumrestaurants.com/downtownaquariumhouston/",
  },
  {
    coordinates: [-96.30253911666165, 41.009907178191646],
    title: "Lee G. Simmons Conservation Park & Wildlife Safari, Nebraska",
    website: "http://wildlifesafaripark.com/",
  },
  {
    coordinates: [-100.8734290204606, 37.95954557237355],
    title: "Lee Richardson Zoo, Kansas",
    website: "http://leerichardsonzoo.org/",
  },
  {
    coordinates: [-75.62722890133577, 40.65886053319288],
    title: "Lehigh Valley Zoo, Penn.",
    website: "http://www.lvzoo.org/",
  },
  {
    coordinates: [40.80078373279552, -96.67957708967843],
    title: "Lincoln Childrens Zoo, Nebraska",
    website: "http://www.lincolnzoo.org/",
  },
  {
    coordinates: [-87.63366176080072, 41.92183069722201],
    title: "Lincoln Park Zoological Gardens, Ill.",
    website: "https://www.lpzoo.org/",
  },
  {
    coordinates: [-80.32219097477946, 26.712930751870328],
    title: "Lion Country Safari, Fla.",
    website: "http://www.lioncountrysafari.com/",
  },
  {
    coordinates: [-92.33020083222095, 34.747159307288946],
    title: "Little Rock Zoological Gardens, Arkansas",
    website: "http://www.littlerockzoo.com/",
  },
  {
    coordinates: [-116.37438441691496, 33.70016631702203],
    title: "The Living Desert Zoo and Gardens, Calif.",
    website: "https://www.livingdesert.org/",
  },
  {
    coordinates: [-104.27895034578853, 32.441993671707536],
    title: "Living Desert Zoo & Gardens State Park, N.M. ",
    website: "http://www.livingdesertnm.org/",
  },
  {
    coordinates: [-118.284246434702, 34.14879763494311],
    title: "Los Angeles Zoo, Calif.",
    website: "https://www.lazoo.org/",
  },
  {
    coordinates: [-85.7072766069563, 38.20600808333293],
    title: "Louisville Zoological Garden, Ky.",
    website: "https://louisvillezoo.org/",
  },
  {
    coordinates: [-111.89394382036697, 40.53225891291982],
    title: "Loveland Living Planet Aquarium, Utah",
    website: "http://livingplanetaquarium.org/",
  },
  {
    coordinates: [-81.21299891887686, 29.669402353713547],
    title: "Marineland, Fla.",
    website: "http://www.marineland.net/",
  },
  {
    coordinates: [-73.41672704549308, 41.10169981787871],
    title: "Maritime Aquarium at Norwalk, Inc., Conn.",
    website: "http://www.maritimeaquarium.org/",
  },
  {
    coordinates: [-76.64971898130175, 39.32298761321982],
    title: "Maryland Zoo in Baltimore, Md.",
    website: "https://www.marylandzoo.org/",
  },
  {
    coordinates: [-89.9970961726946, 35.1521918495282],
    title: "Memphis Zoological Garden and Aquarium, Tenn.",
    website: "https://www.memphiszoo.org/Animals#collection=1123",
  },
  {
    coordinates: [-87.60589306523626, 37.99651683097697],
    title: "Mesker Park Zoo & Botanic Garden, Inc., Ind.",
    website: "http://www.meskerparkzoo.com/",
  },
  {
    coordinates: [-89.00530248969085, 40.469751558478265],
    title: "Miller Park Zoo, Ill.",
    website: "http://www.millerparkzoo.org/",
  },
  {
    coordinates: [-88.0373168727511, 43.03289290034427],
    title: "Milwaukee County Zoological Gardens, Wis.",
    website: "http://www.milwaukeezoo.org/",
  },
  {
    coordinates: [-93.25724846930744, 44.9795337350104],
    title: "Minnesota Zoological Garden, Minn.",
    website: "https://mnzoo.org/",
  },
  {
    coordinates: [-121.90201227679634, 36.61841695360763],
    title: "Monterey Bay Aquarium, Calif.",
    website: "https://www.montereybayaquarium.org/",
  },
  {
    coordinates: [-73.54972963213055, 45.55982724609704],
    title: "Montréal Biodôme, Canada",
    website: "https://espacepourlavie.ca/biodome",
  },
  {
    coordinates: [-94.85273273294553, 29.275680145808614],
    title: "Moody Gardens Rainforest and Aquarium, Texas",
    website: "http://www.moodygardens.com/",
  },
  {
    coordinates: [-82.57782299521178, 27.3335628633923],
    title: "Mote Marine Laboratory and Aquarium, Fla.",
    website: "https://mote.org/",
  },
  {
    coordinates: [-78.89949974798907, 36.02955378037515],
    title: "Museum of Life and Science, N.C.",
    website: "http://lifeandscience.org/",
  },
  {
    coordinates: [-71.08403889415098, 42.53830855632586],
    title: "Museum of Science, Mass.",
    website: "https://www.mos.org/",
  },
  {
    coordinates: [-71.95267563236851, 41.37354234226764],
    title: "Mystic Aquarium, Conn.",
    website: "https://www.mysticaquarium.org/",
  },
  {
    coordinates: [-81.78783649073719, 26.169736961423922],
    title: "Naples Zoo, Fla.",
    website: "http://napleszoo.org/",
  },
  {
    coordinates: [-86.74207454613314, 36.08990438051558],
    title: " Nashville Zoo, Tenn. ",
    website: "http://www.nashvillezoo.org/",
  },
  {
    coordinates: [-76.60839840364397, 39.28557546241451],
    title: "National Aquarium, Md.",
    website: "https://aqua.org/",
  },
  {
    coordinates: [-80.0095516594014, 40.4534768222597],
    title: "National Aviary, Pa.",
    website: "https://www.aviary.org/",
  },
  {
    coordinates: [-90.66139737463415, 42.49704497088663],
    title: "National Mississippi River Museum & Aquarium, Iowa",
    website: "http://www.rivermuseum.com/",
  },
  {
    coordinates: [-71.04914750347794, 42.35936668972638],
    title: "New England Aquarium, Mass.",
    website: "http://https://www.neaq.org/.rivermuseum.com/",
  },
  {
    coordinates: [-73.97496661892016, 40.574462252702986],
    title: "New York Aquarium, N.Y.",
    website: "http://www.nyaquarium.com/",
  },
  {
    coordinates: [-84.49746966132619, 39.094855485629374],
    title: "Newport Aquarium, Ky.",
    website: "https://www.newportaquarium.com/",
  },
  {
    coordinates: [-77.92614036157856, 33.96280704783666],
    title: "North Carolina Aquarium at Fort Fisher, N.C.",
    website: "http://www.ncaquariums.com/fort-fisher",
  },
  {
    coordinates: [-76.8290088999835, 34.699755148162474],
    title: "North Carolina Aquarium at Pine Knoll Shores, N.C.",
    website: "http://www.ncaquariums.com/",
  },
  {
    coordinates: [-75.7043910995868, 35.918140147456148],
    title: "North Carolina Aquarium on Roanoke Island, N.C.",
    website: "http://www.ncaquariums.com/roanoke-island",
  },
  {
    coordinates: [-75.70444474376747, 35.91807063693308],
    title: "North Carolina Zoo, N.C.",
    website: "http://www.ncaquariums.com/roanoke-island",
  },
  {
    coordinates: [-88.0892896880025, 44.66052632131993],
    title: "Northeastern Wisconsin (NEW) Zoo, Wis.",
    website: "http://www.newzoo.org/",
  },
  {
    coordinates: [-122.27654895480586, 46.91486782510252],
    title: "Northwest Trek Wildlife Park, Wash.",
    website: "http://www.nwtrek.org/",
  },
  {
    coordinates: [-122.14545951531156, 37.74885013306558],
    title: "Oakland Zoo, Calif.",
    website: "http://www.oaklandzoo.org/",
  },
  {
    coordinates: [-0.347015088290653, 39.45310155069392],
    title: "Oceanogràfic Valencia, Spain",
    website: "http://www.oceanografic.org/tickets",
  },
  {
    coordinates: [114.1755168802896, 22.247325730338428],
    title: "Ocean Park Corporation, Hong Kong",
    website: "https://www.oceanpark.com.hk/tc/",
  },
  {
    coordinates: [-111.87769871926965, 33.55488521055328],
    title: "OdySea Aquarium, Ariz.",
    website: "http://www.odyseaaquarium.com/",
  },
  {
    coordinates: [-97.47249320383277, 35.524064110714235],
    title: "Oklahoma City Zoo and Botanical Garden, Okla.",
    website: "https://www.okczoo.org/",
  },
  {
    coordinates: [-95.92709045617481, 41.22604286847957],
    title: "Omahas Henry Doorly Zoo & Aquarium, Neb.",
    website: "https://www.omahazoo.com/",
  },
  {
    coordinates: [-124.04729571869403, 44.617805508656105],
    title: "Oregon Coast Aquarium, Ore.",
    website: "http://www.aquarium.org/",
  },
  {
    coordinates: [-122.71365800196546, 45.50881582274745],
    title: "Oregon Zoo, Ore.",
    website: "https://www.oregonzoo.org/",
  },
  {
    coordinates: [-80.06927639071891, 26.667154316507595],
    title: "Palm Beach Zoo at Dreher Park, Fla. ",
    website: "http://www.palmbeachzoo.org/",
  },
  {
    coordinates: [-89.57389394774859, 40.71753959740399],
    title: "Peoria Zoo, Ill.",
    website: "http://www.peoriazoo.org/",
  },
  {
    coordinates: [-75.19550135016246, 39.97160845956206],
    title: "Philadelphia Zoo, Pa.",
    website: "https://www.philadelphiazoo.org/",
  },
  {
    coordinates: [-111.94702776160217, 33.450243264187534],
    title: "Phoenix Zoo, The, Ariz.",
    website: "https://www.phoenixzoo.org/",
  },
  {
    coordinates: [-122.52173260181995, 47.30506970278549],
    title: "Point Defiance Zoo and Aquarium, Wash.",
    website: "http://www.pdza.org/",
  },
  {
    coordinates: [-86.21788030166313, 41.66952440166243],
    title: "Potawatomi Zoo, Ind.",
    website: "https://potawatomizoo.org/",
  },
  {
    coordinates: [-84.5276713034579, 42.718058751076384],
    title: "Potter Park Zoological Gardens, Mich.",
    website: "http://www.potterparkzoo.org/",
  },
  {
    coordinates: [-73.96511380357074, 40.66441333645313],
    title: "Prospect Park Zoo, N.Y.",
    website: "http://www.prospectparkzoo.com/",
  },
  {
    coordinates: [-104.65537684602471, 38.261570155961614],
    title: "Pueblo Zoo, Colo.",
    website: "http://www.pueblozoo.org/",
  },
  {
    coordinates: [-73.84924580356652, 40.74409782770394],
    title: "Queens Zoo, N.Y. ",
    website: "http://www.queenszoo.com/",
  },
  {
    coordinates: [-87.78470759367052, 42.74829615886145],
    title: "Racine Zoo, Wis. ",
    website: "http://www.racinezoo.org/",
  },
  {
    coordinates: [-96.85475280321772, 46.844979789453426],
    title: "Red River Zoo, N.D.",
    website: "http://www.redriverzoo.org/",
  },
  {
    coordinates: [-110.92074430398544, 32.209999916735654],
    title: "Reid Park Zoo, Ariz.",
    website:
      "https://reidparkzoo.org/?utm_source=google&utm_medium=organic&utm_campaign=GMB",
  },
  {
    coordinates: [-78.87798431521264, 33.71627255416102],
    title: "Ripleys Aquarium of Myrtle Beach, S.C.",
    website: "https://www.ripleyaquariums.com/myrtlebeach/",
  },
  {
    coordinates: [-79.38669876293086, 43.64237257259567],
    title: "Ripleys Aquarium of Canada, Canada",
    website: "https://www.ripleyaquariums.com/canada/",
  },
  {
    coordinates: [-83.51319503265975, 35.7144143177886],
    title: "Ripleys Aquarium of the Smokies, Tenn.",
    website: "https://www.ripleyaquariums.com/gatlinburg/",
  },
  {
    coordinates: [-103.6818211476865, 41.85556630328611],
    title: "Riverside Discovery Center, Neb.",
    website: "http://www.riversidediscoverycenter.org/",
  },
  {
    coordinates: [-71.41482966118171, 41.790558154678756],
    title: "Roger Williams Park Zoo, R.I.",
    website: "http://www.rwpzoo.org/",
  },
  {
    coordinates: [-97.76422247668333, 38.85273467588998],
    title: "Rolling Hills Zoo, Kan.",
    website: "http://www.rollinghillszoo.org/",
  },
  {
    coordinates: [-101.27636322832586, 48.233830773341424],
    title: "Roosevelt Park Zoo, N.D.",
    website: "http://rpzoo.com/",
  },
  {
    coordinates: [-76.1810529457673, 43.04351225578022],
    title: "Rosamond Gifford Zoo at Burnet Park, N.Y.",
    website: "http://www.rosamondgiffordzoo.org/",
  },
  {
    coordinates: [-121.50404701902718, 38.539446909482756],
    title: "Sacramento Zoo, Calif. ",
    website: "http://saczoo.org/",
  },
  {
    coordinates: [-83.9519625096726, 43.41213140851757],
    title: "Saginaw Childrens Zoo",
    website: "http://www.saginawzoo.com/",
  },
  {
    coordinates: [-98.47371247526564, 29.462577202435597],
    title: "San Antonio Zoological Society, Texas",
    website: "https://sazoo.org/",
  },
  {
    coordinates: [-117.14961160686481, 32.74527619952581],
    title: "San Diego Zoo, Calif.",
    website: "https://zoo.sandiegozoo.org/",
  },
  {
    coordinates: [-116.99165928019406, 33.10794581733242],
    title: "San Diego Zoo Safari Park, Calif.",
    website: "http://www.sdzsafaripark.org/",
  },
  {
    coordinates: [-119.66709520388514, 34.42059113012213],
    title: "Santa Barbara Zoological Gardens, Calif.",
    website: "http://www.sbzoo.org/",
  },
  {
    coordinates: [-82.43739286176518, 29.681275528870255],
    title: "Santa Fe College Teaching Zoo, Fla.",
    website: "https://www.sfcollege.edu/zoo",
  },
  {
    coordinates: [-88.91418421869952, 39.82601191800614],
    title: "Scovill Zoo, Ill.",
    website: "http://www.decatur-parks.org/scovill-zoo/",
  },
  {
    coordinates: [103.82047177994235, 1.2585139711969222],
    title: "S.E.A. Aquarium, Singapore",
    website: "https://www.rwsentosa.com/en/attractions/sea-aquarium",
  },
  {
    coordinates: [-117.311966819289, 33.126420289520084],
    title: "SEA LIFE Aquarium at LEGOLAND California Resort, Calif.",
    website:
      "https://www.legoland.com/california/things-to-do/sea-life-aquarium/",
  },
  {
    coordinates: [-111.96332367509663, 33.38498914345392],
    title: "SEA LIFE Arizona Aquarium, Ariz.",
    website: "http://www.visitsealife.com/Arizona",
  },
  {
    coordinates: [-80.72506610658242, 35.36937592783707],
    title: "SEA LIFE Charlotte-Concord Aquarium, N.C.",
    website: "https://www.visitsealife.com/charlotte-concord/",
  },
  {
    coordinates: [-97.04163261929618, 32.96836499144452],
    title: "SEA LIFE Grapevine Aquarium, Texas",
    website: "https://www.visitsealife.com/grapevine",
  },
  {
    coordinates: [-94.58148160365457, 39.082174691865916],
    title: "SEA LIFE Kansas City Aquarium, Mo",
    website: "https://www.visitsealife.com/kansas-city/",
  },
  {
    coordinates: [-83.29646178811419, 42.7038915315037],
    title: "SEA LIFE Michigan Aquarium, Mich. ",
    website: "http://www.visitsealife.com/michigan",
  },
  {
    coordinates: [-81.46852508879807, 28.442777151790857],
    title: "SEA LIFE Orlando Aquarium, Fla.",
    website: "https://www.visitsealife.com/orlando/",
  },
  {
    coordinates: [-81.46857873297874, 28.442805453165107],
    title: "Seas, The, Fla.",
    website: "https://www.visitsealife.com/orlando/",
  },
  {
    coordinates: [-122.34571660865385, 47.62792312685705],
    title: "Seattle Aquarium, Wash.",
    website: "https://www.seattleaquarium.org/",
  },
  {
    coordinates: [-81.4597170871777, 28.40985805740488],
    title: "SeaWorld Orlando, Fla.",
    website:
      "https://seaworld.com/orlando?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
  },
  {
    coordinates: [-98.70000511284557, 29.458197621239396],
    title: "SeaWorld San Antonio, Texas",
    website:
      "https://seaworld.com/san-antonio?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
  },
  {
    coordinates: [-97.40849508813942, 37.717232761646734],
    title: "Sedgwick County Zoo, Kan.",
    website: "https://seaworld.com/san-diego",
  },
  {
    coordinates: [-77.6238544322666, 43.20505651877374],
    title: "Seneca Park Zoo, N.Y.",
    website:
      "https://senecaparkzoo.org/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB_listing",
  },
  {
    coordinates: [127.01697155208016, 37.42765247215507],
    title: "Seoul Zoo, South Korea",
    website: "http://grandpark.seoul.go.kr/",
  },
  {
    coordinates: [-124.14465830356474, 40.77720416086754],
    title: "Sequoia Park Zoo, Calif.",
    website: "http://www.sequoiaparkzoo.net/",
  },
  {
    coordinates: [-115.17647060380546, 36.08891209280473],
    title: "Shark Reef Aquarium at Mandalay Bay, Nev.",
    website:
      "https://mandalaybay.mgmresorts.com/en/entertainment/shark-reef-aquarium.html",
  },
  {
    coordinates: [-77.04979638223813, 38.92979291422387],
    title: "Smithsonians National Zoo and Conservation Biology Institute, D.C.",
    website: "https://nationalzoo.si.edu/",
  },
  {
    coordinates: [-79.92545628861502, 32.79113788097414],
    title: "South Carolina Aquarium, S.C.",
    website: "http://scaquarium.org/",
  },
  {
    coordinates: [-81.28852918874014, 29.882069334443965],
    title: "St. Augustine Alligator Farm, Fla.",
    website: "https://www.alligatorfarm.com/",
  },
  {
    coordinates: [-122.46610231721354, 37.76981863773962],
    title: "Steinhart Aquarium, Calif.",
    website: "https://www.calacademy.org/exhibits/steinhart-aquarium",
  },
  {
    coordinates: [-96.59524416124631, 39.177148628829855],
    title: "Sunset Zoological Park, Kan.",
    website: "http://www.sunsetzoo.com/",
  },
];
// loop through the markers array and create a marker for each object
markers.forEach(function (marker) {
  // create a new marker with a div element
  var newMarker = new mapboxgl.Marker({
    element: document.createElement("div"),
  });

  // add a class to the marker element for styling
  newMarker.getElement().classList.add("marker");

  // add the marker to the map at the specified coordinates
  newMarker.setLngLat(marker.coordinates).addTo(map);

  // create a new popup with the title text for this marker
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    "<h3>" +
      marker.title +
      '</h3><a href="' +
      marker.website +
      '">Visit website</a>'
  );

  // attach the popup to the marker
  newMarker.setPopup(popup);
});
