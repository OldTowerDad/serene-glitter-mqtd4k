import "./styles.css";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet.markercluster";

// Define a single URL for all "View Details" buttons
const detailsPageUrl = "https://www.synergytowers.com/contact";

// Define a single image URL for all popups
const popupImageUrl =
  "https://lirp.cdn-website.com/555b58c0/dms3rep/multi/opt/Color+logo+with+background-249w.png";

// initialize the map
const map = L.map("map").setView([32.7872, -96.8089], 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//my custom icon
const customIcon = L.icon({
  iconUrl:
    "https://cdn2.iconfinder.com/data/icons/miscellaneous-290-line/128/broadcast_antenna_satellite_telecommunication_cellular_networking_internet-256.png",
  iconSize: [24, 24],
});

//cluster layer
const myClusterLayer = window.L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<div class="cluster-div">' + cluster.getChildCount() + "</div>",
    });
  },
});

//add markers
// Create an array of marker coordinates
// Example data structure with coordinates and site names
const locationData = [
  {
    coordinates: [33.2170249917121, -96.6779010251694],
    siteName: "Synergy - 001",
  },
  {
    coordinates: [32.6242018242413, -97.2833125063583],
    siteName: "Synergy - 002",
  },
  {
    coordinates: [32.7030610218759, -96.8354292815086],
    siteName: "Synergy - 003",
  },
  { coordinates: [32.568418, -97.384843], siteName: "Synergy - 004" },
  {
    coordinates: [33.0657107554954, -97.0053392509017],
    siteName: "Synergy - 005",
  },
  { coordinates: [32.789687, -97.495104], siteName: "Synergy - 006" },
  {
    coordinates: [32.9962157923376, -97.0448986853976],
    siteName: "Synergy - 007",
  },
  {
    coordinates: [33.2046868861644, -96.7660371348498],
    siteName: "Synergy - 008",
  },
  {
    coordinates: [33.3441378573328, -96.5768537451595],
    siteName: "Synergy - 009",
  },
  {
    coordinates: [33.3153038584375, -96.7799448748664],
    siteName: "Synergy - 10",
  },
  {
    coordinates: [33.1387464315502, -96.7005459883369],
    siteName: "Synergy - 11",
  },
  {
    coordinates: [33.1565877954464, -97.1050156803156],
    siteName: "Synergy - 12",
  },
  {
    coordinates: [32.9490849403887, -96.6514214310568],
    siteName: "Synergy - 13",
  },
  {
    coordinates: [33.0720438657919, -97.0540823418239],
    siteName: "Synergy - 14",
  },
  {
    coordinates: [33.2196788933043, -96.6131193995953],
    siteName: "Synergy - 15",
  },
  {
    coordinates: [32.9117873368423, -96.9479869520581],
    siteName: "Synergy - 16",
  },
  {
    coordinates: [33.108077893117, -96.8399499942467],
    siteName: "Synergy - 17",
  },
  {
    coordinates: [33.0535201811637, -96.9190987314648],
    siteName: "Synergy - 18",
  },
  {
    coordinates: [33.1527345340648, -96.8608327044412],
    siteName: "Synergy - 19",
  },
  {
    coordinates: [33.1012514119508, -96.6953280842721],
    siteName: "Synergy - 20",
  },
  {
    coordinates: [33.1602172006977, -96.6794884913588],
    siteName: "Synergy - 21",
  },
  {
    coordinates: [33.067231145249, -96.8176517836247],
    siteName: "Synergy - 22",
  },
  {
    coordinates: [33.0302019363921, -96.8400624114899],
    siteName: "Synergy - 23",
  },
  {
    coordinates: [32.9068052289894, -96.4300567353156],
    siteName: "Synergy - 24",
  },
  {
    coordinates: [32.907016144126, -96.5511326714094],
    siteName: "Synergy - 25",
  },
  {
    coordinates: [32.9114678433772, -96.5331380804391],
    siteName: "Synergy - 26",
  },
  {
    coordinates: [32.9703171426801, -96.6024022157264],
    siteName: "Synergy - 27",
  },
  {
    coordinates: [33.1476664837168, -96.9128496231569],
    siteName: "Synergy - 28",
  },
  {
    coordinates: [33.6020080884175, -101.913343934822],
    siteName: "Synergy - 29",
  },
  {
    coordinates: [33.6799868294063, -96.6195296873398],
    siteName: "Synergy - 30",
  },
  {
    coordinates: [35.12321122972, -101.937427837971],
    siteName: "Synergy - 31",
  },
  {
    coordinates: [32.1526903032039, -95.8324960007053],
    siteName: "Synergy - 32",
  },
  {
    coordinates: [30.3663690655986, -97.796629276305],
    siteName: "Synergy - 33",
  },
  {
    coordinates: [30.7502852094156, -98.1784797888635],
    siteName: "Synergy - 34",
  },
  {
    coordinates: [32.8725458827535, -96.6150414014976],
    siteName: "Synergy - 35",
  },
  {
    coordinates: [32.4594610532459, -97.7852718535003],
    siteName: "Synergy - 36",
  },
  {
    coordinates: [32.4619083338505, -97.421254116249],
    siteName: "Synergy - 37",
  },
  {
    coordinates: [33.1180464029306, -97.1301682005297],
    siteName: "Synergy - 38",
  },
  {
    coordinates: [33.0714052882198, -97.0914208639903],
    siteName: "Synergy - 39",
  },
  {
    coordinates: [33.2015114640928, -96.9779497888112],
    siteName: "Synergy - 40",
  },
  {
    coordinates: [33.2557758398688, -97.1102632275817],
    siteName: "Synergy - 41",
  },
  {
    coordinates: [33.1713849441834, -97.1479176177599],
    siteName: "Synergy - 42",
  },
  {
    coordinates: [29.7298520962066, -95.4159602501541],
    siteName: "Synergy - 43",
  },
  {
    coordinates: [29.7306977679335, -95.4475403166833],
    siteName: "Synergy - 44",
  },
  {
    coordinates: [29.9504234582508, -95.42286687006],
    siteName: "Synergy - 45",
  },
  {
    coordinates: [29.5433262517057, -95.4462931121596],
    siteName: "Synergy - 46",
  },
  {
    coordinates: [29.5729060575446, -95.1524976482005],
    siteName: "Synergy - 47",
  },
  {
    coordinates: [30.0687215217873, -94.166286962511],
    siteName: "Synergy - 48",
  },
  {
    coordinates: [33.0518520446258, -97.4800567828325],
    siteName: "Synergy - 49",
  },
  {
    coordinates: [31.1050204861812, -97.3685506390056],
    siteName: "Synergy - 50",
  },
  {
    coordinates: [31.0663918863417, -97.3474873179722],
    siteName: "Synergy - 51",
  },
  {
    coordinates: [31.2015600232965, -97.3079690562425],
    siteName: "Synergy - 52",
  },
  {
    coordinates: [33.4001955026409, -96.5680194329887],
    siteName: "Synergy - 53",
  },
  {
    coordinates: [33.2777154326708, -96.6015071867503],
    siteName: "Synergy - 54",
  },
  {
    coordinates: [32.9655193967436, -97.3008556799878],
    siteName: "Synergy - 55",
  },
  {
    coordinates: [32.6598577135217, -97.248362225341],
    siteName: "Synergy - 56",
  },
  {
    coordinates: [32.7792568482871, -96.4081100810829],
    siteName: "Synergy - 57",
  },
  {
    coordinates: [32.6353670375539, -96.6674009355137],
    siteName: "Synergy - 58",
  },
  {
    coordinates: [35.1896761316469, -101.869766408334],
    siteName: "Synergy - 59",
  },
  {
    coordinates: [35.186549502441, -101.870428751649],
    siteName: "Synergy - 60",
  },
  { coordinates: [35.187694076029, -101.8695424453], siteName: "Synergy - 61" },
  {
    coordinates: [35.145587328188, -101.881767073388],
    siteName: "Synergy - 62",
  },
  {
    coordinates: [35.1447594559866, -101.881797502247],
    siteName: "Synergy - 63",
  },
  {
    coordinates: [35.1419134843634, -101.882885167587],
    siteName: "Synergy - 64",
  },
  {
    coordinates: [35.193293611451, -101.748257088765],
    siteName: "Synergy - 65",
  },
  {
    coordinates: [35.1915669514139, -101.905722670349],
    siteName: "Synergy - 66",
  },
  {
    coordinates: [35.1935439675151, -101.903606646833],
    siteName: "Synergy - 67",
  },
  {
    coordinates: [35.1903408526167, -101.916489044583],
    siteName: "Synergy - 68",
  },
  {
    coordinates: [35.1628121437892, -101.867329910826],
    siteName: "Synergy - 69",
  },
  {
    coordinates: [35.1634630504215, -101.923751881346],
    siteName: "Synergy - 70",
  },
  {
    coordinates: [31.5012137265097, -97.2017178600115],
    siteName: "Synergy - 71",
  },
  {
    coordinates: [31.4932919257385, -97.2177860563021],
    siteName: "Synergy - 72",
  },
  {
    coordinates: [31.529622552898, -97.1896759004286],
    siteName: "Synergy - 73",
  },
  {
    coordinates: [31.6246801317134, -97.2293234446633],
    siteName: "Synergy - 74",
  },
  {
    coordinates: [31.5054634536963, -97.1823554935185],
    siteName: "Synergy - 75",
  },
  {
    coordinates: [31.4831402836043, -97.2879785469439],
    siteName: "Synergy - 76",
  },
  {
    coordinates: [31.4498180632873, -97.2166325023398],
    siteName: "Synergy - 77",
  },
  {
    coordinates: [35.1659587288174, -101.871025499886],
    siteName: "Synergy - 78",
  },
  {
    coordinates: [30.5968907694896, -96.289217373521],
    siteName: "Synergy - 79",
  },
  {
    coordinates: [30.4819270715224, -97.588380985085],
    siteName: "Synergy - 80",
  },
  {
    coordinates: [30.5566716024879, -97.6011969674502],
    siteName: "Synergy - 81",
  },
  {
    coordinates: [30.5678645830619, -97.6069834428304],
    siteName: "Synergy - 82",
  },
  {
    coordinates: [30.6442242662604, -97.6278639404669],
    siteName: "Synergy - 83",
  },
  {
    coordinates: [30.5676090051825, -96.305522557043],
    siteName: "Synergy - 84",
  },
  {
    coordinates: [33.1318326901741, -97.2037485144366],
    siteName: "Synergy - 85",
  },
  {
    coordinates: [30.0301056774241, -95.6414441354811],
    siteName: "Synergy - 86",
  },
  {
    coordinates: [29.9620295012955, -95.4643147696279],
    siteName: "Synergy - 87",
  },
  {
    coordinates: [29.8492612936389, -98.1222131376032],
    siteName: "Synergy - 89",
  },
  {
    coordinates: [32.3640608659176, -97.7756832285946],
    siteName: "Synergy - 90",
  },
  {
    coordinates: [32.7882969779548, -98.4725324836919],
    siteName: "Synergy - 91",
  },
  {
    coordinates: [33.2017520152445, -96.9780575345576],
    siteName: "Synergy - 92",
  },
  {
    coordinates: [33.1313842293407, -97.2036566442152],
    siteName: "Synergy - 93",
  },
  {
    coordinates: [33.0467270566123, -96.9466259866268],
    siteName: "Synergy - 94",
  },
  {
    coordinates: [33.2379063418997, -97.1806694635746],
    siteName: "Synergy - 95",
  },
  {
    coordinates: [32.9114012660493, -98.4387404748658],
    siteName: "Synergy - 96",
  },
  {
    coordinates: [32.884425254481, -98.4686266332172],
    siteName: "Synergy - 97",
  },
  {
    coordinates: [30.7504711491857, -98.1784510517513],
    siteName: "Synergy - 98",
  },
  {
    coordinates: [33.3862274204101, -96.9620146269902],
    siteName: "Synergy - 99",
  },
  {
    coordinates: [32.884425254481, -98.4686266332172],
    siteName: "Synergy - 100",
  },
  {
    coordinates: [32.8890625085771, -98.4654601285258],
    siteName: "Synergy - 101",
  },
  {
    coordinates: [32.8900170606736, -98.4686590298614],
    siteName: "Synergy - 102",
  },
  {
    coordinates: [29.7366650581745, -95.4420243481778],
    siteName: "Synergy - 147",
  },
  {
    coordinates: [29.7346145763356, -95.4050732834595],
    siteName: "Synergy - 148",
  },
  {
    coordinates: [29.8191150110093, -95.42848056406],
    siteName: "Synergy - 149",
  },
  {
    coordinates: [29.7906567941822, -95.3887058724504],
    siteName: "Synergy - 150",
  },
  {
    coordinates: [29.7324149995062, -95.3908361576794],
    siteName: "Synergy - 151",
  },
  {
    coordinates: [29.7632418267362, -95.4626302970675],
    siteName: "Synergy - 152",
  },
  {
    coordinates: [29.5529172160755, -98.5881569352507],
    siteName: "Synergy - 153",
  },
  {
    coordinates: [29.4885841680979, -98.5466457637331],
    siteName: "Synergy - 154",
  },
  {
    coordinates: [29.4837194243691, -98.5409765284882],
    siteName: "Synergy - 155",
  },
  {
    coordinates: [29.4849587558176, -98.595805809975],
    siteName: "Synergy - 156",
  },
  {
    coordinates: [29.3571006214434, -98.5553277128879],
    siteName: "Synergy - 157",
  },
  {
    coordinates: [29.60084967183, -98.2791854447217],
    siteName: "Synergy - 158",
  },
  {
    coordinates: [29.4959592863087, -98.7021100971018],
    siteName: "Synergy - 159",
  },
  {
    coordinates: [29.5019043174994, -98.7239780807766],
    siteName: "Synergy - 160",
  },
  {
    coordinates: [29.7148807467565, -98.4721339247077],
    siteName: "Synergy - 161",
  },
  {
    coordinates: [29.4809861594662, -98.6370025704398],
    siteName: "Synergy - 162",
  },
  {
    coordinates: [29.9481306643513, -90.1748976274953],
    siteName: "Synergy - 163",
  },
  {
    coordinates: [30.0112708279653, -90.2649100021326],
    siteName: "Synergy - 164",
  },
  {
    coordinates: [29.5738313501932, -98.5933645341041],
    siteName: "Synergy - 165",
  },
  {
    coordinates: [29.5754361072786, -98.5126953335415],
    siteName: "Synergy - 166",
  },
  {
    coordinates: [29.4457009542068, -98.6782751268551],
    siteName: "Synergy - 167",
  },
  {
    coordinates: [29.4900004454022, -98.6219853987352],
    siteName: "Synergy - 169",
  },
  {
    coordinates: [29.723687307581, -98.0811250489142],
    siteName: "Synergy - 170",
  },
  {
    coordinates: [29.4988375682717, -98.316432279497],
    siteName: "Synergy - 171",
  },
  {
    coordinates: [29.5393191299655, -98.4242566400128],
    siteName: "Synergy - 172",
  },
  {
    coordinates: [29.5173087774771, -98.602766980303],
    siteName: "Synergy - 173",
  },
  {
    coordinates: [29.6820079681016, -98.0612057902496],
    siteName: "Synergy - 174",
  },
  {
    coordinates: [30.2316742962054, -98.8285021376575],
    siteName: "Synergy - 175",
  },
  {
    coordinates: [29.8814223329706, -97.9168292759681],
    siteName: "Synergy - 176",
  },
  {
    coordinates: [29.8832800195937, -97.9096822742285],
    siteName: "Synergy - 177",
  },
  {
    coordinates: [29.8946675815748, -97.9123533430035],
    siteName: "Synergy - 178",
  },
  {
    coordinates: [29.8625228583395, -97.9480282443654],
    siteName: "Synergy - 179",
  },
  {
    coordinates: [29.8581421805642, -97.9499924368661],
    siteName: "Synergy - 180",
  },
  { coordinates: [32.835035, -97.040056], siteName: "Synergy - 182" },
  { coordinates: [29.253678, -94.854915], siteName: "Synergy - 183" },
  { coordinates: [29.654524, -95.354019], siteName: "Synergy - 184" },
  { coordinates: [29.740519, -94.940445], siteName: "Synergy - 185" },
  { coordinates: [29.77406, -95.5733], siteName: "Synergy - 186" },
  { coordinates: [29.936874, -95.449655], siteName: "Synergy - 187" },
  { coordinates: [30.075354, -95.52756], siteName: "Synergy - 188" },
  { coordinates: [29.997027, -95.605289], siteName: "Synergy - 189" },
  { coordinates: [30.045484, -95.008871], siteName: "Synergy - 190" },
  { coordinates: [29.805987, -95.371568], siteName: "Synergy - 191" },
  { coordinates: [29.716294, -98.16263], siteName: "Synergy - 192" },
  { coordinates: [29.801247, -95.436151], siteName: "Synergy - 193" },
  { coordinates: [30.480907, -97.795328], siteName: "Synergy - 194" },
  { coordinates: [29.488799, -95.424135], siteName: "Synergy - 195" },
  { coordinates: [30.329949, -97.704648], siteName: "Synergy - 196" },
  { coordinates: [33.149316, -96.891763], siteName: "Synergy - 197" },
  { coordinates: [30.21063, -96.41876], siteName: "Synergy - 198" },
  { coordinates: [30.078094, -95.741549], siteName: "Synergy - 199" },
  { coordinates: [30.20579, -98.121017], siteName: "Synergy - 200" },
  { coordinates: [32.926832, -97.118782], siteName: "Synergy - 201" },
  { coordinates: [29.743958, -95.344188], siteName: "Synergy - 202" },
  { coordinates: [30.316677, -97.977875], siteName: "Synergy - 203" },
  { coordinates: [30.099265, -95.541216], siteName: "Synergy - 204" },
  { coordinates: [30.632655, -96.301859], siteName: "Synergy - 205" },
  { coordinates: [29.662478, -95.124163], siteName: "Synergy - 206" },
  { coordinates: [30.235483, -97.68779], siteName: "Synergy - 207" },
  { coordinates: [30.148287, -97.986772], siteName: "Synergy - 208" },
  { coordinates: [26.229839, -98.209363], siteName: "Synergy - 209" },
  { coordinates: [30.529372, -98.421876], siteName: "Synergy - 210" },
  { coordinates: [29.77143, -95.611483], siteName: "Synergy - 211" },
  { coordinates: [30.120306, -95.234636], siteName: "Synergy - 212" },
  { coordinates: [33.985289, -80.89046], siteName: "Synergy - 213" },
  { coordinates: [31.395733, -100.490193], siteName: "Synergy - 214" },
  { coordinates: [29.537989, -95.03638], siteName: "Synergy - 215" },
  { coordinates: [29.840479, -95.410357], siteName: "Synergy - 216" },
  { coordinates: [31.109361, -97.366878], siteName: "Synergy - 217" },
  { coordinates: [35.118053, -101.937219], siteName: "Synergy - 218" },
  { coordinates: [35.049663, -101.920235], siteName: "Synergy - 219" },
  { coordinates: [32.710208, -96.451366], siteName: "Synergy - 220" },
  { coordinates: [30.585701, -97.413149], siteName: "Synergy - 221" },
  { coordinates: [26.280554, -98.167828], siteName: "Synergy - 222" },
  { coordinates: [29.881027, -97.704325], siteName: "Synergy - 223" },
  { coordinates: [29.678372, -95.454532], siteName: "Synergy - 224" },
  {
    coordinates: [29.7209304921527, -98.1767009173579],
    siteName: "Synergy - 225",
  },
  {
    coordinates: [29.691127676282, -95.8783204028352],
    siteName: "Synergy - 226",
  },
  {
    coordinates: [29.4886352944779, -98.4436706572066],
    siteName: "Synergy - 227",
  },
  {
    coordinates: [29.5648606634069, -98.5378747236298],
    siteName: "Synergy - 228",
  },
  {
    coordinates: [29.6204181227283, -98.4224794379741],
    siteName: "Synergy - 229",
  },
  {
    coordinates: [29.5976245882956, -98.2831169281076],
    siteName: "Synergy - 230",
  },
  { coordinates: [29.623406, -98.240314], siteName: "Synergy - 231" },
  { coordinates: [29.550633, -95.399767], siteName: "Synergy - 232" },
  {
    coordinates: [30.2710609719523, -95.4577595906595],
    siteName: "Synergy - 233",
  },
  {
    coordinates: [29.5072987218872, -95.5253763927701],
    siteName: "Synergy - 234",
  },
  {
    coordinates: [27.6809546123449, -97.3507766403677],
    siteName: "Synergy - 235",
  },
  {
    coordinates: [29.7275789279794, -94.9570543245524],
    siteName: "Synergy - 236",
  },
  {
    coordinates: [29.897045013963, -95.6221502254614],
    siteName: "Synergy - 237",
  },
  {
    coordinates: [29.801861189929, -95.4819208027298],
    siteName: "Synergy - 238",
  },
  {
    coordinates: [29.6661841507061, -95.1438050999128],
    siteName: "Synergy - 239",
  },
  {
    coordinates: [32.8200714699075, -97.0990007087045],
    siteName: "Synergy - 240",
  },
  {
    coordinates: [29.5160599676618, -98.757822804914],
    siteName: "Synergy - 241",
  },
  {
    coordinates: [32.9525641300914, -97.3938268210118],
    siteName: "Synergy - 242",
  },
  {
    coordinates: [29.5613443827856, -95.7909173528368],
    siteName: "Synergy - 243",
  },
  {
    coordinates: [30.0251754753043, -97.8533404001995],
    siteName: "Synergy - 244",
  },
  {
    coordinates: [27.4921686628554, -97.8493739503434],
    siteName: "Synergy - 245",
  },
  {
    coordinates: [33.2333399620281, -96.9721787857319],
    siteName: "Synergy - 246",
  },
  {
    coordinates: [33.0438643792633, -96.5950605663296],
    siteName: "Synergy - 247",
  },
  {
    coordinates: [32.9849248974836, -96.5212083173675],
    siteName: "Synergy - 248",
  },
  {
    coordinates: [33.0298518637842, -96.5511832322837],
    siteName: "Synergy - 249",
  },
  {
    coordinates: [30.6758960439158, -97.9262494144148],
    siteName: "Synergy - 250",
  },
  {
    coordinates: [29.8573532712822, -95.6463348422143],
    siteName: "Synergy - 251",
  },
  {
    coordinates: [29.436474834749, -95.4764025998211],
    siteName: "Synergy - 252",
  },
  {
    coordinates: [29.6188079796751, -95.2218387640599],
    siteName: "Synergy - 253",
  },
  {
    coordinates: [29.5841946345056, -97.9958083929448],
    siteName: "Synergy - 254",
  },
  {
    coordinates: [29.6007407287613, -97.9619421212888],
    siteName: "Synergy - 255",
  },
  {
    coordinates: [32.8994844025994, -96.5997606902532],
    siteName: "Synergy - 256",
  },
  {
    coordinates: [29.5960684124296, -97.963870485266],
    siteName: "Synergy - 257",
  },
  {
    coordinates: [30.1267115568968, -95.4700531284687],
    siteName: "Synergy - 258",
  },
  {
    coordinates: [29.4836517756712, -95.0734053341828],
    siteName: "Synergy - 259",
  },
  {
    coordinates: [27.6664909001597, -97.3593688575622],
    siteName: "Synergy - 260",
  },
  { coordinates: [30.520784, -96.2991], siteName: "Synergy - 261" },
  {
    coordinates: [33.0128453692139, -96.8585255653452],
    siteName: "Synergy - 262",
  },
  { coordinates: [29.548553, -98.371721], siteName: "Synergy - 263" },
  {
    coordinates: [33.1507050473477, -97.1648567920803],
    siteName: "Synergy - 264",
  },
  {
    coordinates: [29.9972888879703, -95.6259570557177],
    siteName: "Synergy - 265",
  },
  { coordinates: [30.10209, -97.876226], siteName: "Synergy - 266" },
  {
    coordinates: [33.1610466806721, -96.6955098582752],
    siteName: "Synergy - 267",
  },
  {
    coordinates: [30.179879624528, -95.2000232048999],
    siteName: "Synergy - 268",
  },
  {
    coordinates: [29.7746016129028, -94.9761939389747],
    siteName: "Synergy - 269",
  },
  { coordinates: [29.975609, -95.490527], siteName: "Synergy - 270" },
  {
    coordinates: [30.1715183473132, -95.6002415625055],
    siteName: "Synergy - 271",
  },
  {
    coordinates: [29.7214193230263, -95.5233252027241],
    siteName: "Synergy - 272",
  },
  {
    coordinates: [29.7790309191446, -94.9843275767655],
    siteName: "Synergy - 273",
  },
  {
    coordinates: [29.2905416035765, -94.8359949910883],
    siteName: "Synergy - 274",
  },
  {
    coordinates: [30.3505403299126, -97.4819782664778],
    siteName: "Synergy - 275",
  },
  {
    coordinates: [29.7609431776117, -98.7130999590061],
    siteName: "Synergy - 276",
  },
  {
    coordinates: [30.0064138595969, -97.7329147509549],
    siteName: "Synergy - 277",
  },
  {
    coordinates: [27.6854640771874, -97.3249636139154],
    siteName: "Synergy - 278",
  },
  { coordinates: [30.077548, -95.592417], siteName: "Synergy - 279" },
  { coordinates: [32.911903, -97.347169], siteName: "Synergy - 280" },
  { coordinates: [29.925864, -95.503077], siteName: "Synergy - 281" },
  { coordinates: [32.870509, -97.070745], siteName: "Synergy - 282" },
  {
    coordinates: [32.6942830858841, -97.1254564009732],
    siteName: "Synergy - 283",
  },
  {
    coordinates: [32.6480298630496, -97.1353319472141],
    siteName: "Synergy - 284",
  },
  {
    coordinates: [33.0238054868707, -96.8575821577108],
    siteName: "Synergy - 285",
  },
  {
    coordinates: [32.9091462385204, -96.8673965430382],
    siteName: "Synergy - 286",
  },
  {
    coordinates: [32.8783363501726, -96.7016458618953],
    siteName: "Synergy - 287",
  },
  {
    coordinates: [32.856898036301, -96.86411875385],
    siteName: "Synergy - 288",
  },
  {
    coordinates: [32.910720844557, -96.7321304394244],
    siteName: "Synergy - 289",
  },
  {
    coordinates: [32.8180217301901, -96.8336284294705],
    siteName: "Synergy - 290",
  },
  {
    coordinates: [32.7430340484872, -97.4436333180599],
    siteName: "Synergy - 291",
  },
  {
    coordinates: [32.872322073819, -96.6147139607633],
    siteName: "Synergy - 292",
  },
  {
    coordinates: [30.7036577637979, -97.7448913762941],
    siteName: "Synergy - 293",
  },
  {
    coordinates: [29.6124932270292, -95.2252543075084],
    siteName: "Synergy - 294",
  },
  {
    coordinates: [29.7900000561785, -95.7156855221586],
    siteName: "Synergy - 295",
  },
  {
    coordinates: [29.9715759256506, -95.1707457127218],
    siteName: "Synergy - 296",
  },
  {
    coordinates: [29.5282286032877, -95.0365218922275],
    siteName: "Synergy - 297",
  },
  {
    coordinates: [29.5870300091971, -98.6359406905071],
    siteName: "Synergy - 298",
  },
  {
    coordinates: [29.5336989262951, -98.589444006126],
    siteName: "Synergy - 299",
  },
  {
    coordinates: [29.5518875979243, -98.3593955529485],
    siteName: "Synergy - 300",
  },
  {
    coordinates: [30.1240303024323, -95.5535977319636],
    siteName: "Synergy - 301",
  },
  { coordinates: [32.7724, -97.2376], siteName: "Synergy - 302" },
  // ... and so on for all your locations
  ,
];

// Loop through the location data to create markers with popups
locationData.forEach((location) => {
  // Create the marker using the coordinates
  const marker = L.marker(location.coordinates, {
    icon: customIcon,
  });

  // Create popup content using the site name and coordinates
  const popupContent = `
  <div class="marker-popup" style="min-width: 250px; padding: 10px;">
    <!-- Image in the top left -->
    <div style="display: flex; margin-bottom: 10px;">
      <img src="${popupImageUrl}" alt="${location.siteName}" 
           style="width: 80px; height: 60px; object-fit: fit; border-radius: 4px; margin-right: 10px;">
      <h3 style="margin: 0; color: #2c3e50; align-self: center;">${
        location.siteName
      }</h3>
    </div>
    
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="font-weight: bold;">Latitude:</span>
      <span>${location.coordinates[0].toFixed(6)}</span>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <span style="font-weight: bold;">Longitude:</span>
      <span>${location.coordinates[1].toFixed(6)}</span>
    </div>
    <button class="details-btn" style="margin-top: 10px; padding: 5px 10px; 
      background: #3498db; color: white; border: none; border-radius: 3px; 
      cursor: pointer; width: 100%;" 
      onclick="window.viewSiteDetails('${location.siteName}')">
      View Details
    </button>
  </div>
`;

  // Bind the popup to the marker
  marker.bindPopup(popupContent);

  // Add the marker to the cluster layer
  myClusterLayer.addLayer(marker);
});
map.addLayer(myClusterLayer);

// Add a function in your global scope to handle the button click
window.viewSiteDetails = function (siteName) {
  console.log(`Showing details for: ${siteName}`);
  // Open the same URL for all locations
  window.open(detailsPageUrl, "_blank");

  // Or if you want to open in the same tab:
  // window.location.href = detailsPageUrl;
};
