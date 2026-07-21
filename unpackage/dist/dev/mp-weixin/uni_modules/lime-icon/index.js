"use strict";
const common_vendor = require("../../common/vendor.js");
const abstract = "E003";
const accessibility = "E005";
const activity = "E007";
const add = "E00D";
const adjustment = "E011";
const ai = "E039";
const alarm = "E041";
const alpha = "E045";
const analytics = "E047";
const anchor = "E048";
const angry = "E04A";
const animation = "E04E";
const anticlockwise = "E050";
const api = "E051";
const app = "E053";
const apple = "E055";
const application = "E057";
const archway = "E05D";
const artboard = "E086";
const article = "E088";
const assignment = "E092";
const attach = "E093";
const attic = "E098";
const audio = "E09A";
const automation = "E09D";
const awkward = "E09F";
const backtop = "E0A2";
const backup = "E0A4";
const backward = "E0A6";
const banana = "E0AC";
const barbecue = "E0AE";
const barcode = "E0B0";
const battery = "E0B9";
const bean = "E0BB";
const beer = "E0BD";
const beta = "E0BE";
const bifurcate = "E0C0";
const bill = "E0C2";
const bluetooth = "E0C3";
const bone = "E0C5";
const book = "E0CB";
const bookmark = "E0D5";
const braces = "E0D6";
const brackets = "E0D7";
const bread = "E0D9";
const bridge = "E0E4";
const brightness = "E0E8";
const broccoli = "E0EA";
const browse = "E0F0";
const brush = "E0F2";
const bug = "E0F6";
const building = "E102";
const bulletpoint = "E103";
const button = "E105";
const cabbage = "E107";
const cake = "E109";
const calculation = "E10C";
const calculator = "E10F";
const calendar = "E11B";
const call = "E127";
const calm = "E12B";
const camera = "E133";
const candy = "E135";
const card = "E137";
const cardmembership = "E139";
const cart = "E145";
const cast = "E147";
const castle = "E157";
const cat = "E159";
const catalog = "E15C";
const cd = "E15E";
const celsius = "E15F";
const centimeter = "E162";
const certificate = "E166";
const chart = "E190";
const chat = "E1B6";
const check = "E1BC";
const cheese = "E1BE";
const cherry = "E1C0";
const chicken = "E1E1";
const chili = "E1E3";
const chimney = "E1E9";
const church = "E1EF";
const circle = "E1F1";
const city = "E217";
const clear = "E21D";
const close = "E224";
const cloud = "E228";
const code = "E235";
const cola = "E237";
const collage = "E239";
const collection = "E23E";
const combination = "E244";
const command = "E245";
const compass = "E249";
const constraint = "E265";
const contrast = "E269";
const contribute = "E26B";
const cooperate = "E26F";
const copy = "E273";
const copyright = "E275";
const corn = "E277";
const correct = "E279";
const coupon = "E27B";
const course = "E27D";
const cpu = "E27F";
const crack = "E281";
const creditcard = "E287";
const css3 = "E28F";
const cucumber = "E290";
const cursor = "E293";
const curtain = "E295";
const curve = "E296";
const cut = "E298";
const dam = "E2A8";
const dashboard = "E2AE";
const data = "E2B9";
const delta = "E2C1";
const depressed = "E2C3";
const desktop = "E2C7";
const despise = "E2C9";
const device = "E2CB";
const discount = "E2D1";
const dissatisfaction = "E2D3";
const divide = "E2D4";
const dividers = "E2D6";
const doge = "E2DE";
const download = "E2E4";
const downscale = "E2E5";
const draft = "E2E7";
const drink = "E2EB";
const drumstick = "E2ED";
const dv = "E2EF";
const dvd = "E2F1";
const earphone = "E2F3";
const earth = "E2F5";
const edit = "E2FD";
const education = "E2FF";
const eggplant = "E301";
const ellipsis = "E302";
const enter = "E307";
const equal = "E308";
const error = "E30D";
const excited = "E311";
const explore = "E31B";
const exposure = "E31E";
const extension = "E322";
const ferocious = "E32B";
const file = "E37D";
const film = "E385";
const filter = "E393";
const fingerprint = "E397";
const fish = "E399";
const flag = "E3A3";
const flashlight = "E3A5";
const flowchart = "E3B1";
const focus = "E3B3";
const fog = "E3B9";
const folder = "E3DF";
const forest = "E3E3";
const fork = "E3E5";
const form = "E3E7";
const formula = "E3F0";
const forum = "E3F2";
const forward = "E3F4";
const frame = "E3F8";
const fries = "E3FA";
const fullscreen = "E3FF";
const functions = "E402";
const gamepad = "E406";
const gamma = "E407";
const garlic = "E409";
const gift = "E431";
const giggle = "E433";
const gps = "E445";
const grape = "E447";
const graphviz = "E449";
const guitar = "E452";
const hamburger = "E454";
const happy = "E456";
const hashtag = "E45B";
const hd = "E45D";
const heart = "E45F";
const help = "E464";
const highlight = "E469";
const history = "E46D";
const home = "E46F";
const horizontal = "E471";
const hospital = "E475";
const hourglass = "E479";
const houses = "E47F";
const html5 = "E481";
const https = "E483";
const icon = "E487";
const image = "E497";
const indicator = "E49C";
const ink = "E4A0";
const install = "E4A6";
const institution = "E4AA";
const internet = "E4AC";
const ipod = "E4AE";
const joyful = "E4B2";
const jump = "E4B5";
const key = "E4B7";
const keyboard = "E4B9";
const laptop = "E4BD";
const layers = "E4BF";
const layout = "E4C1";
const leaderboard = "E4C3";
const lemon = "E4C7";
const lightbulb = "E4E7";
const lighthouse = "E4ED";
const link = "E4F4";
const liquor = "E4F6";
const load = "E4FB";
const loading = "E4FC";
const location = "E50A";
const login = "E513";
const logout = "E560";
const loudspeaker = "E564";
const mail = "E566";
const map = "E5A2";
const markup = "E5A6";
const mathematics = "E5A8";
const measurement = "E5AE";
const member = "E5B4";
const mentioned = "E5B6";
const menu = "E5BB";
const mermaid = "E5BF";
const microphone = "E5C5";
const milk = "E5C7";
const minus = "E5CE";
const mirror = "E5D0";
const mobile = "E5DC";
const module$1 = "E5E8";
const money = "E5EA";
const monument = "E5EC";
const moon = "E5F2";
const more = "E5F3";
const mosaic = "E5F5";
const mosque = "E5F9";
const mouse = "E5FB";
const move = "E5FD";
const multiply = "E600";
const museum = "E606";
const mushroom = "E60A";
const music = "E612";
const next = "E616";
const noodle = "E61C";
const notification = "E624";
const nut = "E642";
const opera = "E647";
const order = "E64C";
const outbox = "E64E";
const palace = "E660";
const palette = "E664";
const pantone = "E66A";
const parabola = "E66B";
const parentheses = "E66C";
const paste = "E66E";
const patio = "E670";
const pause = "E675";
const pea = "E677";
const peach = "E679";
const pear = "E67B";
const pen = "E689";
const pending = "E68B";
const percent = "E68C";
const pi = "E693";
const piano = "E695";
const pin = "E697";
const placeholder = "E699";
const plantuml = "E69B";
const play = "E6A8";
const plus = "E6A9";
const popsicle = "E6AB";
const portrait = "E6AD";
const pout = "E6AF";
const poweroff = "E6B0";
const previous = "E6B3";
const print = "E6B5";
const pumpkin = "E6B7";
const pyramid = "E6BB";
const qrcode = "E6BC";
const quadratic = "E6BD";
const questionnaire = "E6C1";
const queue = "E6C3";
const quote = "E6C5";
const radar = "E6C6";
const radish = "E6CC";
const rainbow = "E6D1";
const rectangle = "E6D3";
const refresh = "E6D4";
const relation = "E6D5";
const relativity = "E6D7";
const remove = "E6DA";
const rename = "E6DC";
const replay = "E6DE";
const rice = "E6E2";
const roast = "E6E4";
const robot = "E6EA";
const rocket = "E6EC";
const rollback = "E6ED";
const rollfront = "E6EE";
const rotate = "E6F3";
const rotation = "E6F4";
const round = "E6F6";
const rss = "E6F9";
const ruler = "E6FB";
const sandwich = "E6FF";
const saturation = "E701";
const sausage = "E703";
const save = "E705";
const scan = "E708";
const screencast = "E70E";
const screenshot = "E70F";
const seal = "E717";
const search = "E71B";
const secured = "E71D";
const send = "E721";
const sensors = "E725";
const sequence = "E727";
const serenity = "E729";
const server = "E72B";
const service = "E72D";
const setting = "E731";
const share = "E735";
const sharpness = "E737";
const shimen = "E73B";
const shop = "E747";
const shortcut = "E748";
const shrimp = "E74A";
const shutter = "E74E";
const shutup = "E750";
const sip = "E75A";
const sitemap = "E75C";
const slash = "E75E";
const sleep = "E760";
const slice = "E762";
const slideshow = "E764";
const smile = "E766";
const sneer = "E768";
const snowflake = "E769";
const sonic = "E76A";
const sound = "E778";
const space = "E779";
const speechless = "E77D";
const star = "E77F";
const stop = "E788";
const store = "E78A";
const subscript = "E78F";
const subtitle = "E791";
const sum = "E794";
const summary = "E795";
const sunny = "E79B";
const superscript = "E79C";
const support = "E79E";
const surprised = "E7A2";
const swap = "E7A5";
const tab = "E7D1";
const table = "E7DB";
const tag = "E7DF";
const tangerinr = "E7E1";
const tape = "E7E3";
const task = "E7FB";
const tea = "E7FD";
const teahouse = "E7FF";
const template = "E801";
const temple = "E803";
const terminal = "E80A";
const text = "E80E";
const textbox = "E810";
const theaters = "E81A";
const thunder = "E827";
const thunderstorm = "E82C";
const ticket = "E82E";
const time = "E830";
const tips = "E834";
const tomato = "E836";
const tools = "E83A";
const tornado = "E83B";
const tower = "E845";
const town = "E847";
const traffic = "E84B";
const transform = "E851";
const translate = "E853";
const tv = "E866";
const typography = "E868";
const uncomfortable = "E86E";
const undertake = "E878";
const unhappy = "E87E";
const uninstall = "E880";
const upload = "E882";
const upscale = "E883";
const usb = "E885";
const user = "E8C5";
const usercase = "E8C9";
const usergroup = "E8D1";
const vehicle = "E8D3";
const verified = "E8D5";
const verify = "E8D7";
const vertical = "E8D9";
const video = "E8EB";
const wallet = "E8FD";
const watch = "E8FF";
const watermelon = "E901";
const wealth = "E90B";
const web = "E90D";
const widget = "E90F";
const wifi = "E917";
const window = "E91B";
const windy = "E91D";
const wink = "E91F";
const work = "E925";
const defalutIconList = new common_vendor.UTSJSONObject({
  "ability-open": "E001",
  "abstract-filled": "E002",
  abstract,
  "accessibility-filled": "E004",
  accessibility,
  "activity-filled": "E006",
  activity,
  "add-and-subtract": "E008",
  "add-circle-filled": "E009",
  "add-circle": "E00A",
  "add-rectangle-filled": "E00B",
  "add-rectangle": "E00C",
  add,
  "address-book-filled": "E00E",
  "address-book": "E00F",
  "adjustment-filled": "E010",
  adjustment,
  "ai-1-filled": "E012",
  "ai-1": "E013",
  "ai-article-filled": "E014",
  "ai-article": "E015",
  "ai-book-open-filled": "E016",
  "ai-book-open": "E017",
  "ai-chart-bar-filled": "E018",
  "ai-chart-bar": "E019",
  "ai-coordinate-system-filled": "E01A",
  "ai-coordinate-system": "E01B",
  "ai-cut": "E01C",
  "ai-edit-1-filled": "E01D",
  "ai-edit-1": "E01E",
  "ai-edit-filled": "E01F",
  "ai-edit": "E020",
  "ai-education-filled": "E021",
  "ai-education": "E022",
  "ai-git-branch-filled": "E023",
  "ai-git-branch": "E024",
  "ai-image-1-filled": "E025",
  "ai-image-1": "E026",
  "ai-image-filled": "E027",
  "ai-image": "E028",
  "ai-layout-filled": "E029",
  "ai-layout": "E02A",
  "ai-music-filled": "E02B",
  "ai-music": "E02C",
  "ai-screenshot": "E02D",
  "ai-search-filled": "E02E",
  "ai-search": "E02F",
  "ai-terminal-1-filled": "E030",
  "ai-terminal-1": "E031",
  "ai-terminal-filled": "E032",
  "ai-terminal": "E033",
  "ai-textformat-italic": "E034",
  "ai-tool-filled": "E035",
  "ai-tool": "E036",
  "ai-video-filled": "E037",
  "ai-video": "E038",
  ai,
  "airplay-wave-filled": "E03A",
  "airplay-wave": "E03B",
  "alarm-add-filled": "E03C",
  "alarm-add": "E03D",
  "alarm-filled": "E03E",
  "alarm-off-filled": "E03F",
  "alarm-off": "E040",
  alarm,
  "align-bottom": "E042",
  "align-top": "E043",
  "align-vertical": "E044",
  alpha,
  "analytics-filled": "E046",
  analytics,
  anchor,
  "angry-filled": "E049",
  angry,
  "animation-1-filled": "E04B",
  "animation-1": "E04C",
  "animation-filled": "E04D",
  animation,
  "anticlockwise-filled": "E04F",
  anticlockwise,
  api,
  "app-filled": "E052",
  app,
  "apple-filled": "E054",
  apple,
  "application-filled": "E056",
  application,
  "architecture-hui-style-filled": "E058",
  "architecture-hui-style": "E059",
  "archway-1-filled": "E05A",
  "archway-1": "E05B",
  "archway-filled": "E05C",
  archway,
  "arrow-down-circle-filled": "E05E",
  "arrow-down-circle": "E05F",
  "arrow-down-rectangle-filled": "E060",
  "arrow-down-rectangle": "E061",
  "arrow-down": "E062",
  "arrow-left-circle-filled": "E063",
  "arrow-left-circle": "E064",
  "arrow-left-down-circle-filled": "E065",
  "arrow-left-down-circle": "E066",
  "arrow-left-down": "E067",
  "arrow-left-right-1": "E068",
  "arrow-left-right-2": "E069",
  "arrow-left-right-3": "E06A",
  "arrow-left-right-circle-filled": "E06B",
  "arrow-left-right-circle": "E06C",
  "arrow-left-up-circle-filled": "E06D",
  "arrow-left-up-circle": "E06E",
  "arrow-left-up": "E06F",
  "arrow-left": "E070",
  "arrow-right-circle-filled": "E071",
  "arrow-right-circle": "E072",
  "arrow-right-down-circle-filled": "E073",
  "arrow-right-down-circle": "E074",
  "arrow-right-down": "E075",
  "arrow-right-up-circle-filled": "E076",
  "arrow-right-up-circle": "E077",
  "arrow-right-up": "E078",
  "arrow-right": "E079",
  "arrow-triangle-down-filled": "E07A",
  "arrow-triangle-down": "E07B",
  "arrow-triangle-up-filled": "E07C",
  "arrow-triangle-up": "E07D",
  "arrow-up-circle-filled": "E07E",
  "arrow-up-circle": "E07F",
  "arrow-up-down-1": "E080",
  "arrow-up-down-2": "E081",
  "arrow-up-down-3": "E082",
  "arrow-up-down-circle-filled": "E083",
  "arrow-up-down-circle": "E084",
  "arrow-up": "E085",
  artboard,
  "article-filled": "E087",
  article,
  "assignment-checked-filled": "E089",
  "assignment-checked": "E08A",
  "assignment-code-filled": "E08B",
  "assignment-code": "E08C",
  "assignment-error-filled": "E08D",
  "assignment-error": "E08E",
  "assignment-filled": "E08F",
  "assignment-user-filled": "E090",
  "assignment-user": "E091",
  assignment,
  attach,
  "attachment-list": "E094",
  "attic-1-filled": "E095",
  "attic-1": "E096",
  "attic-filled": "E097",
  attic,
  "audio-filled": "E099",
  audio,
  "automatic-numbering": "E09B",
  "automation-filled": "E09C",
  automation,
  "awkward-filled": "E09E",
  awkward,
  "backtop-rectangle-filled": "E0A0",
  "backtop-rectangle": "E0A1",
  backtop,
  "backup-filled": "E0A3",
  backup,
  "backward-filled": "E0A5",
  backward,
  "bad-laugh-filled": "E0A7",
  "bad-laugh": "E0A8",
  "bamboo-shoot-filled": "E0A9",
  "bamboo-shoot": "E0AA",
  "banana-filled": "E0AB",
  banana,
  "barbecue-filled": "E0AD",
  barbecue,
  "barcode-1": "E0AF",
  barcode,
  "base-station": "E0B1",
  "battery-add-filled": "E0B2",
  "battery-add": "E0B3",
  "battery-charging-filled": "E0B4",
  "battery-charging": "E0B5",
  "battery-filled": "E0B6",
  "battery-low-filled": "E0B7",
  "battery-low": "E0B8",
  battery,
  "bean-filled": "E0BA",
  bean,
  "beer-filled": "E0BC",
  beer,
  beta,
  "bifurcate-filled": "E0BF",
  bifurcate,
  "bill-filled": "E0C1",
  bill,
  bluetooth,
  "bone-filled": "E0C4",
  bone,
  "book-filled": "E0C6",
  "book-open-filled": "E0C7",
  "book-open": "E0C8",
  "book-unknown-filled": "E0C9",
  "book-unknown": "E0CA",
  book,
  "bookmark-add-filled": "E0CC",
  "bookmark-add": "E0CD",
  "bookmark-checked-filled": "E0CE",
  "bookmark-checked": "E0CF",
  "bookmark-double-filled": "E0D0",
  "bookmark-double": "E0D1",
  "bookmark-filled": "E0D2",
  "bookmark-minus-filled": "E0D3",
  "bookmark-minus": "E0D4",
  bookmark,
  braces,
  brackets,
  "bread-filled": "E0D8",
  bread,
  "bridge-1-filled": "E0DA",
  "bridge-1": "E0DB",
  "bridge-2-filled": "E0DC",
  "bridge-2": "E0DD",
  "bridge-3": "E0DE",
  "bridge-4": "E0DF",
  "bridge-5-filled": "E0E0",
  "bridge-5": "E0E1",
  "bridge-6-filled": "E0E2",
  "bridge-6": "E0E3",
  bridge,
  "brightness-1-filled": "E0E5",
  "brightness-1": "E0E6",
  "brightness-filled": "E0E7",
  brightness,
  "broccoli-filled": "E0E9",
  broccoli,
  "browse-filled": "E0EB",
  "browse-gallery-filled": "E0EC",
  "browse-gallery": "E0ED",
  "browse-off-filled": "E0EE",
  "browse-off": "E0EF",
  browse,
  "brush-filled": "E0F1",
  brush,
  "bug-filled": "E0F3",
  "bug-report-filled": "E0F4",
  "bug-report": "E0F5",
  bug,
  "building-1-filled": "E0F7",
  "building-1": "E0F8",
  "building-2-filled": "E0F9",
  "building-2": "E0FA",
  "building-3-filled": "E0FB",
  "building-3": "E0FC",
  "building-4-filled": "E0FD",
  "building-4": "E0FE",
  "building-5-filled": "E0FF",
  "building-5": "E100",
  "building-filled": "E101",
  building,
  bulletpoint,
  "button-filled": "E104",
  button,
  "cabbage-filled": "E106",
  cabbage,
  "cake-filled": "E108",
  cake,
  "calculation-1-filled": "E10A",
  "calculation-1": "E10B",
  calculation,
  "calculator-1": "E10D",
  "calculator-filled": "E10E",
  calculator,
  "calendar-1-filled": "E110",
  "calendar-1": "E111",
  "calendar-2-filled": "E112",
  "calendar-2": "E113",
  "calendar-3-filled": "E114",
  "calendar-3": "E115",
  "calendar-edit-filled": "E116",
  "calendar-edit": "E117",
  "calendar-event-filled": "E118",
  "calendar-event": "E119",
  "calendar-filled": "E11A",
  calendar,
  "call-1-filled": "E11C",
  "call-1": "E11D",
  "call-cancel-filled": "E11E",
  "call-cancel": "E11F",
  "call-filled": "E120",
  "call-forwarded-filled": "E121",
  "call-forwarded": "E122",
  "call-incoming-filled": "E123",
  "call-incoming": "E124",
  "call-off-filled": "E125",
  "call-off": "E126",
  call,
  "calm-1-filled": "E128",
  "calm-1": "E129",
  "calm-filled": "E12A",
  calm,
  "camera-1-filled": "E12C",
  "camera-1": "E12D",
  "camera-2-filled": "E12E",
  "camera-2": "E12F",
  "camera-filled": "E130",
  "camera-off-filled": "E131",
  "camera-off": "E132",
  camera,
  "candy-filled": "E134",
  candy,
  "card-filled": "E136",
  card,
  "cardmembership-filled": "E138",
  cardmembership,
  "caret-down-small": "E13A",
  "caret-down": "E13B",
  "caret-left-small": "E13C",
  "caret-left": "E13D",
  "caret-right-small": "E13E",
  "caret-right": "E13F",
  "caret-up-small": "E140",
  "caret-up": "E141",
  "cart-add-filled": "E142",
  "cart-add": "E143",
  "cart-filled": "E144",
  cart,
  "cast-filled": "E146",
  cast,
  "castle-1-filled": "E148",
  "castle-1": "E149",
  "castle-2-filled": "E14A",
  "castle-2": "E14B",
  "castle-3-filled": "E14C",
  "castle-3": "E14D",
  "castle-4-filled": "E14E",
  "castle-4": "E14F",
  "castle-5-filled": "E150",
  "castle-5": "E151",
  "castle-6-filled": "E152",
  "castle-6": "E153",
  "castle-7-filled": "E154",
  "castle-7": "E155",
  "castle-filled": "E156",
  castle,
  "cat-filled": "E158",
  cat,
  "catalog-1": "E15A",
  "catalog-filled": "E15B",
  catalog,
  "cd-filled": "E15D",
  cd,
  celsius,
  "center-focus-strong-filled": "E160",
  "center-focus-strong": "E161",
  centimeter,
  "certificate-1-filled": "E163",
  "certificate-1": "E164",
  "certificate-filled": "E165",
  certificate,
  "chart-3d-filled": "E167",
  "chart-3d": "E168",
  "chart-add-filled": "E169",
  "chart-add": "E16A",
  "chart-analytics": "E16B",
  "chart-area-filled": "E16C",
  "chart-area-multi-filled": "E16D",
  "chart-area-multi": "E16E",
  "chart-area": "E16F",
  "chart-bar-filled": "E170",
  "chart-bar": "E171",
  "chart-bubble-filled": "E172",
  "chart-bubble": "E173",
  "chart-column-filled": "E174",
  "chart-column": "E175",
  "chart-combo-filled": "E176",
  "chart-combo": "E177",
  "chart-draw-io-filled": "E178",
  "chart-draw-io": "E179",
  "chart-filled": "E17A",
  "chart-line-board-filled": "E17B",
  "chart-line-board": "E17C",
  "chart-line-data-1": "E17D",
  "chart-line-data": "E17E",
  "chart-line-multi": "E17F",
  "chart-line": "E180",
  "chart-maximum": "E181",
  "chart-median": "E182",
  "chart-minimum": "E183",
  "chart-pie-filled": "E184",
  "chart-pie": "E185",
  "chart-radar-filled": "E186",
  "chart-radar": "E187",
  "chart-radial": "E188",
  "chart-ring-1-filled": "E189",
  "chart-ring-1": "E18A",
  "chart-ring-filled": "E18B",
  "chart-ring": "E18C",
  "chart-scatter": "E18D",
  "chart-stacked-filled": "E18E",
  "chart-stacked": "E18F",
  chart,
  "chat-add-filled": "E191",
  "chat-add": "E192",
  "chat-bubble-1-filled": "E193",
  "chat-bubble-1": "E194",
  "chat-bubble-add-filled": "E195",
  "chat-bubble-add": "E196",
  "chat-bubble-error-filled": "E197",
  "chat-bubble-error": "E198",
  "chat-bubble-filled": "E199",
  "chat-bubble-help-filled": "E19A",
  "chat-bubble-help": "E19B",
  "chat-bubble-history-filled": "E19C",
  "chat-bubble-history": "E19D",
  "chat-bubble-locked-filled": "E19E",
  "chat-bubble-locked": "E19F",
  "chat-bubble-smile-filled": "E1A0",
  "chat-bubble-smile": "E1A1",
  "chat-bubble": "E1A2",
  "chat-checked-filled": "E1A3",
  "chat-checked": "E1A4",
  "chat-clear-filled": "E1A5",
  "chat-clear": "E1A6",
  "chat-double-filled": "E1A7",
  "chat-double": "E1A8",
  "chat-error-filled": "E1A9",
  "chat-error": "E1AA",
  "chat-filled": "E1AB",
  "chat-heart-filled": "E1AC",
  "chat-heart": "E1AD",
  "chat-message-filled": "E1AE",
  "chat-message": "E1AF",
  "chat-off-filled": "E1B0",
  "chat-off": "E1B1",
  "chat-poll-filled": "E1B2",
  "chat-poll": "E1B3",
  "chat-setting-filled": "E1B4",
  "chat-setting": "E1B5",
  chat,
  "check-circle-filled": "E1B7",
  "check-circle": "E1B8",
  "check-double": "E1B9",
  "check-rectangle-filled": "E1BA",
  "check-rectangle": "E1BB",
  check,
  "cheese-filled": "E1BD",
  cheese,
  "cherry-filled": "E1BF",
  cherry,
  "chevron-down-circle-filled": "E1C1",
  "chevron-down-circle": "E1C2",
  "chevron-down-double-s": "E1C3",
  "chevron-down-double": "E1C4",
  "chevron-down-rectangle-filled": "E1C5",
  "chevron-down-rectangle": "E1C6",
  "chevron-down-s": "E1C7",
  "chevron-down": "E1C8",
  "chevron-left-circle-filled": "E1C9",
  "chevron-left-circle": "E1CA",
  "chevron-left-double-s": "E1CB",
  "chevron-left-double": "E1CC",
  "chevron-left-rectangle-filled": "E1CD",
  "chevron-left-rectangle": "E1CE",
  "chevron-left-s": "E1CF",
  "chevron-left": "E1D0",
  "chevron-right-circle-filled": "E1D1",
  "chevron-right-circle": "E1D2",
  "chevron-right-double-s": "E1D3",
  "chevron-right-double": "E1D4",
  "chevron-right-rectangle-filled": "E1D5",
  "chevron-right-rectangle": "E1D6",
  "chevron-right-s": "E1D7",
  "chevron-right": "E1D8",
  "chevron-up-circle-filled": "E1D9",
  "chevron-up-circle": "E1DA",
  "chevron-up-double-s": "E1DB",
  "chevron-up-double": "E1DC",
  "chevron-up-rectangle-filled": "E1DD",
  "chevron-up-rectangle": "E1DE",
  "chevron-up-s": "E1DF",
  "chevron-up": "E1E0",
  chicken,
  "chili-filled": "E1E2",
  chili,
  "chimney-1-filled": "E1E4",
  "chimney-1": "E1E5",
  "chimney-2-filled": "E1E6",
  "chimney-2": "E1E7",
  "chimney-filled": "E1E8",
  chimney,
  "chinese-cabbage-filled": "E1EA",
  "chinese-cabbage": "E1EB",
  "chinese-rectangle-filled": "E1EC",
  "chinese-rectangle": "E1ED",
  "church-filled": "E1EE",
  church,
  "circle-filled": "E1F0",
  circle,
  "city-1-filled": "E1F2",
  "city-1": "E1F3",
  "city-10-filled": "E1F4",
  "city-10": "E1F5",
  "city-11-filled": "E1F6",
  "city-11": "E1F7",
  "city-12-filled": "E1F8",
  "city-12": "E1F9",
  "city-13-filled": "E1FA",
  "city-13": "E1FB",
  "city-14-filled": "E1FC",
  "city-14": "E1FD",
  "city-15-filled": "E1FE",
  "city-15": "E1FF",
  "city-2-filled": "E200",
  "city-2": "E201",
  "city-3-filled": "E202",
  "city-3": "E203",
  "city-4-filled": "E204",
  "city-4": "E205",
  "city-5-filled": "E206",
  "city-5": "E207",
  "city-6-filled": "E208",
  "city-6": "E209",
  "city-7-filled": "E20A",
  "city-7": "E20B",
  "city-8-filled": "E20C",
  "city-8": "E20D",
  "city-9-filled": "E20E",
  "city-9": "E20F",
  "city-ancient-1-filled": "E210",
  "city-ancient-1": "E211",
  "city-ancient-2-filled": "E212",
  "city-ancient-2": "E213",
  "city-ancient-filled": "E214",
  "city-ancient": "E215",
  "city-filled": "E216",
  city,
  "clear-filled": "E218",
  "clear-formatting-1-filled": "E219",
  "clear-formatting-1": "E21A",
  "clear-formatting-filled": "E21B",
  "clear-formatting": "E21C",
  clear,
  "close-circle-filled": "E21E",
  "close-circle": "E21F",
  "close-octagon-filled": "E220",
  "close-octagon": "E221",
  "close-rectangle-filled": "E222",
  "close-rectangle": "E223",
  close,
  "cloud-download": "E225",
  "cloud-filled": "E226",
  "cloud-upload": "E227",
  cloud,
  "cloudy-day-filled": "E229",
  "cloudy-day": "E22A",
  "cloudy-night-filled": "E22B",
  "cloudy-night-rain-filled": "E22C",
  "cloudy-night-rain": "E22D",
  "cloudy-night": "E22E",
  "cloudy-rain-filled": "E22F",
  "cloudy-rain": "E230",
  "cloudy-sunny-filled": "E231",
  "cloudy-sunny": "E232",
  "code-1": "E233",
  "code-off": "E234",
  code,
  "cola-filled": "E236",
  cola,
  "collage-filled": "E238",
  collage,
  "collapsible-block": "E23A",
  "collection-1-filled": "E23B",
  "collection-1": "E23C",
  "collection-filled": "E23D",
  collection,
  "color-invert-filled": "E23F",
  "color-invert": "E240",
  "column-layout-filled": "E241",
  "column-layout": "E242",
  "combination-filled": "E243",
  combination,
  command,
  "compass-1-filled": "E246",
  "compass-1": "E247",
  "compass-filled": "E248",
  compass,
  "component-breadcrumb-filled": "E24A",
  "component-breadcrumb": "E24B",
  "component-checkbox-filled": "E24C",
  "component-checkbox": "E24D",
  "component-divider-horizontal-filled": "E24E",
  "component-divider-horizontal": "E24F",
  "component-divider-vertical-filled": "E250",
  "component-divider-vertical": "E251",
  "component-dropdown-filled": "E252",
  "component-dropdown": "E253",
  "component-grid-filled": "E254",
  "component-grid": "E255",
  "component-input-filled": "E256",
  "component-input": "E257",
  "component-layout-filled": "E258",
  "component-layout": "E259",
  "component-radio": "E25A",
  "component-space-filled": "E25B",
  "component-space": "E25C",
  "component-steps-1-filled": "E25D",
  "component-steps-1": "E25E",
  "component-steps-filled": "E25F",
  "component-steps": "E260",
  "component-stickytool-filled": "E261",
  "component-stickytool": "E262",
  "component-switch-filled": "E263",
  "component-switch": "E264",
  constraint,
  "contrast-1-filled": "E266",
  "contrast-1": "E267",
  "contrast-filled": "E268",
  contrast,
  "contribute-filled": "E26A",
  contribute,
  "control-platform-filled": "E26C",
  "control-platform": "E26D",
  "cooperate-filled": "E26E",
  cooperate,
  "coordinate-system-filled": "E270",
  "coordinate-system": "E271",
  "copy-filled": "E272",
  copy,
  "copyright-filled": "E274",
  copyright,
  "corn-filled": "E276",
  corn,
  "correct-filled": "E278",
  correct,
  "coupon-filled": "E27A",
  coupon,
  "course-filled": "E27C",
  course,
  "cpu-filled": "E27E",
  cpu,
  "crack-filled": "E280",
  crack,
  "creditcard-add-filled": "E282",
  "creditcard-add": "E283",
  "creditcard-filled": "E284",
  "creditcard-off-filled": "E285",
  "creditcard-off": "E286",
  creditcard,
  "crooked-smile-filled": "E288",
  "crooked-smile": "E289",
  "cry-and-laugh-filled": "E28A",
  "cry-and-laugh": "E28B",
  "cry-loudly-filled": "E28C",
  "cry-loudly": "E28D",
  "css3-filled": "E28E",
  css3,
  cucumber,
  "currency-exchange": "E291",
  "cursor-filled": "E292",
  cursor,
  "curtain-filled": "E294",
  curtain,
  curve,
  "cut-1": "E297",
  cut,
  "dam-1-filled": "E299",
  "dam-1": "E29A",
  "dam-2-filled": "E29B",
  "dam-2": "E29C",
  "dam-3-filled": "E29D",
  "dam-3": "E29E",
  "dam-4-filled": "E29F",
  "dam-4": "E2A0",
  "dam-5-filled": "E2A1",
  "dam-5": "E2A2",
  "dam-6-filled": "E2A3",
  "dam-6": "E2A4",
  "dam-7-filled": "E2A5",
  "dam-7": "E2A6",
  "dam-filled": "E2A7",
  dam,
  "dart-board-filled": "E2A9",
  "dart-board": "E2AA",
  "dashboard-1-filled": "E2AB",
  "dashboard-1": "E2AC",
  "dashboard-filled": "E2AD",
  dashboard,
  "data-base-filled": "E2AF",
  "data-base": "E2B0",
  "data-checked-filled": "E2B1",
  "data-checked": "E2B2",
  "data-display": "E2B3",
  "data-error-filled": "E2B4",
  "data-error": "E2B5",
  "data-filled": "E2B6",
  "data-search-filled": "E2B7",
  "data-search": "E2B8",
  data,
  "delete-1-filled": "E2BA",
  "delete-1": "E2BB",
  "delete-filled": "E2BC",
  "delete-time-filled": "E2BD",
  "delete-time": "E2BE",
  "delete": "E2BF",
  "delta-filled": "E2C0",
  delta,
  "depressed-filled": "E2C2",
  depressed,
  "desktop-1-filled": "E2C4",
  "desktop-1": "E2C5",
  "desktop-filled": "E2C6",
  desktop,
  "despise-filled": "E2C8",
  despise,
  "device-filled": "E2CA",
  device,
  "dialog-history-filled": "E2CC",
  "dialog-history": "E2CD",
  "discount-filled": "E2CE",
  "discount-list-filled": "E2CF",
  "discount-list": "E2D0",
  discount,
  "dissatisfaction-filled": "E2D2",
  dissatisfaction,
  divide,
  "dividers-1": "E2D5",
  dividers,
  "document-location-filled": "E2D7",
  "document-location": "E2D8",
  "document-popular-filled": "E2D9",
  "document-popular": "E2DA",
  "document-update-filled": "E2DB",
  "document-update": "E2DC",
  "doge-filled": "E2DD",
  doge,
  "double-storey-filled": "E2DF",
  "double-storey": "E2E0",
  "download-1": "E2E1",
  "download-2-filled": "E2E2",
  "download-2": "E2E3",
  download,
  downscale,
  "draft-filled": "E2E6",
  draft,
  "drag-drop": "E2E8",
  "drag-move": "E2E9",
  "drink-filled": "E2EA",
  drink,
  "drumstick-filled": "E2EC",
  drumstick,
  "dv-filled": "E2EE",
  dv,
  "dvd-filled": "E2F0",
  dvd,
  "earphone-filled": "E2F2",
  earphone,
  "earth-filled": "E2F4",
  earth,
  "edit-1-filled": "E2F6",
  "edit-1": "E2F7",
  "edit-2-filled": "E2F8",
  "edit-2": "E2F9",
  "edit-filled": "E2FA",
  "edit-off-filled": "E2FB",
  "edit-off": "E2FC",
  edit,
  "education-filled": "E2FE",
  education,
  "eggplant-filled": "E300",
  eggplant,
  ellipsis,
  "emo-emotional-filled": "E303",
  "emo-emotional": "E304",
  "english-rectangle-filled": "E305",
  "english-rectangle": "E306",
  enter,
  equal,
  "error-circle-filled": "E309",
  "error-circle": "E30A",
  "error-triangle-filled": "E30B",
  "error-triangle": "E30C",
  error,
  "excited-1-filled": "E30E",
  "excited-1": "E30F",
  "excited-filled": "E310",
  excited,
  "expand-down-filled": "E312",
  "expand-down": "E313",
  "expand-horizontal": "E314",
  "expand-up-filled": "E315",
  "expand-up": "E316",
  "expand-vertical": "E317",
  "explore-filled": "E318",
  "explore-off-filled": "E319",
  "explore-off": "E31A",
  explore,
  "export": "E31C",
  "exposure-filled": "E31D",
  exposure,
  "extension-filled": "E31F",
  "extension-off-filled": "E320",
  "extension-off": "E321",
  extension,
  "face-retouching-filled": "E323",
  "face-retouching": "E324",
  "fact-check-filled": "E325",
  "fact-check": "E326",
  "fahrenheit-scale": "E327",
  "feel-at-ease-filled": "E328",
  "feel-at-ease": "E329",
  "ferocious-filled": "E32A",
  ferocious,
  "ferris-wheel-filled": "E32C",
  "ferris-wheel": "E32D",
  "file-1-filled": "E32E",
  "file-1": "E32F",
  "file-add-1-filled": "E330",
  "file-add-1": "E331",
  "file-add-filled": "E332",
  "file-add": "E333",
  "file-attachment-filled": "E334",
  "file-attachment": "E335",
  "file-blocked-filled": "E336",
  "file-blocked": "E337",
  "file-code-1-filled": "E338",
  "file-code-1": "E339",
  "file-code-filled": "E33A",
  "file-code": "E33B",
  "file-copy-filled": "E33C",
  "file-copy": "E33D",
  "file-csv-filled": "E33E",
  "file-csv": "E33F",
  "file-download-filled": "E340",
  "file-download": "E341",
  "file-edit-filled": "E342",
  "file-edit": "E343",
  "file-excel-filled": "E344",
  "file-excel": "E345",
  "file-export-filled": "E346",
  "file-export": "E347",
  "file-filled": "E348",
  "file-icon-filled": "E349",
  "file-icon": "E34A",
  "file-image-filled": "E34B",
  "file-image": "E34C",
  "file-import-filled": "E34D",
  "file-import": "E34E",
  "file-json-filled": "E34F",
  "file-json": "E350",
  "file-locked-filled": "E351",
  "file-locked": "E352",
  "file-markdown-filled": "E353",
  "file-markdown": "E354",
  "file-minus-filled": "E355",
  "file-minus": "E356",
  "file-music-filled": "E357",
  "file-music": "E358",
  "file-onenote-filled": "E359",
  "file-onenote": "E35A",
  "file-outlook-filled": "E35B",
  "file-outlook": "E35C",
  "file-paste-filled": "E35D",
  "file-paste": "E35E",
  "file-pdf-filled": "E35F",
  "file-pdf": "E360",
  "file-powerpoint-filled": "E361",
  "file-powerpoint": "E362",
  "file-restore-filled": "E363",
  "file-restore": "E364",
  "file-safety-filled": "E365",
  "file-safety": "E366",
  "file-search-filled": "E367",
  "file-search": "E368",
  "file-setting-filled": "E369",
  "file-setting": "E36A",
  "file-teams-filled": "E36B",
  "file-teams": "E36C",
  "file-transmit-double-filled": "E36D",
  "file-transmit-double": "E36E",
  "file-transmit-filled": "E36F",
  "file-transmit": "E370",
  "file-txt-filled": "E371",
  "file-txt": "E372",
  "file-unknown-filled": "E373",
  "file-unknown": "E374",
  "file-unlocked-filled": "E375",
  "file-unlocked": "E376",
  "file-word-filled": "E377",
  "file-word": "E378",
  "file-yaml-filled": "E379",
  "file-yaml": "E37A",
  "file-zip-filled": "E37B",
  "file-zip": "E37C",
  file,
  "fill-color-1-filled": "E37E",
  "fill-color-1": "E37F",
  "fill-color-filled": "E380",
  "fill-color": "E381",
  "film-1-filled": "E382",
  "film-1": "E383",
  "film-filled": "E384",
  film,
  "filter-1-filled": "E386",
  "filter-1": "E387",
  "filter-2-filled": "E388",
  "filter-2": "E389",
  "filter-3-filled": "E38A",
  "filter-3": "E38B",
  "filter-clear-filled": "E38C",
  "filter-clear": "E38D",
  "filter-filled": "E38E",
  "filter-off-filled": "E38F",
  "filter-off": "E390",
  "filter-sort-filled": "E391",
  "filter-sort": "E392",
  filter,
  "fingerprint-1": "E394",
  "fingerprint-2": "E395",
  "fingerprint-3": "E396",
  fingerprint,
  "fish-filled": "E398",
  fish,
  "flag-1-filled": "E39A",
  "flag-1": "E39B",
  "flag-2-filled": "E39C",
  "flag-2": "E39D",
  "flag-3-filled": "E39E",
  "flag-3": "E39F",
  "flag-4-filled": "E3A0",
  "flag-4": "E3A1",
  "flag-filled": "E3A2",
  flag,
  "flashlight-filled": "E3A4",
  flashlight,
  "flight-landing-filled": "E3A6",
  "flight-landing": "E3A7",
  "flight-takeoff-filled": "E3A8",
  "flight-takeoff": "E3A9",
  "flip-smiling-face-filled": "E3AA",
  "flip-smiling-face": "E3AB",
  "flip-to-back-filled": "E3AC",
  "flip-to-back": "E3AD",
  "flip-to-front-filled": "E3AE",
  "flip-to-front": "E3AF",
  "flowchart-filled": "E3B0",
  flowchart,
  "focus-filled": "E3B2",
  focus,
  "fog-filled": "E3B4",
  "fog-night-filled": "E3B5",
  "fog-night": "E3B6",
  "fog-sunny-filled": "E3B7",
  "fog-sunny": "E3B8",
  fog,
  "folder-1-filled": "E3BA",
  "folder-1": "E3BB",
  "folder-add-1-filled": "E3BC",
  "folder-add-1": "E3BD",
  "folder-add-filled": "E3BE",
  "folder-add": "E3BF",
  "folder-blocked-filled": "E3C0",
  "folder-blocked": "E3C1",
  "folder-details-filled": "E3C2",
  "folder-details": "E3C3",
  "folder-export-filled": "E3C4",
  "folder-export": "E3C5",
  "folder-filled": "E3C6",
  "folder-import-filled": "E3C7",
  "folder-import": "E3C8",
  "folder-locked-filled": "E3C9",
  "folder-locked": "E3CA",
  "folder-minus-filled": "E3CB",
  "folder-minus": "E3CC",
  "folder-move-filled": "E3CD",
  "folder-move": "E3CE",
  "folder-off-filled": "E3CF",
  "folder-off": "E3D0",
  "folder-open-1-filled": "E3D1",
  "folder-open-1": "E3D2",
  "folder-open-filled": "E3D3",
  "folder-open": "E3D4",
  "folder-search-filled": "E3D5",
  "folder-search": "E3D6",
  "folder-setting-filled": "E3D7",
  "folder-setting": "E3D8",
  "folder-shared-filled": "E3D9",
  "folder-shared": "E3DA",
  "folder-unlocked-filled": "E3DB",
  "folder-unlocked": "E3DC",
  "folder-zip-filled": "E3DD",
  "folder-zip": "E3DE",
  folder,
  "font-background-filled": "E3E0",
  "font-background": "E3E1",
  "forest-filled": "E3E2",
  forest,
  "fork-filled": "E3E4",
  fork,
  "form-filled": "E3E6",
  form,
  "format-horizontal-align-bottom": "E3E8",
  "format-horizontal-align-center": "E3E9",
  "format-horizontal-align-top": "E3EA",
  "format-painter-filled": "E3EB",
  "format-painter": "E3EC",
  "format-vertical-align-center": "E3ED",
  "format-vertical-align-left": "E3EE",
  "format-vertical-align-right": "E3EF",
  formula,
  "forum-filled": "E3F1",
  forum,
  "forward-filled": "E3F3",
  forward,
  "frame-1-filled": "E3F5",
  "frame-1": "E3F6",
  "frame-filled": "E3F7",
  frame,
  "fries-filled": "E3F9",
  fries,
  "fullscreen-1": "E3FB",
  "fullscreen-2": "E3FC",
  "fullscreen-exit-1": "E3FD",
  "fullscreen-exit": "E3FE",
  fullscreen,
  "function-curve": "E400",
  "functions-1": "E401",
  functions,
  "gamepad-1-filled": "E403",
  "gamepad-1": "E404",
  "gamepad-filled": "E405",
  gamepad,
  gamma,
  "garlic-filled": "E408",
  garlic,
  "gender-female": "E40A",
  "gender-male": "E40B",
  "gesture-applause-filled": "E40C",
  "gesture-applause": "E40D",
  "gesture-click-filled": "E40E",
  "gesture-click": "E40F",
  "gesture-down-filled": "E410",
  "gesture-down": "E411",
  "gesture-expansion-filled": "E412",
  "gesture-expansion": "E413",
  "gesture-left-filled": "E414",
  "gesture-left-slip-filled": "E415",
  "gesture-left-slip": "E416",
  "gesture-left": "E417",
  "gesture-open-filled": "E418",
  "gesture-open": "E419",
  "gesture-pray-filled": "E41A",
  "gesture-pray": "E41B",
  "gesture-press-filled": "E41C",
  "gesture-press": "E41D",
  "gesture-ranslation-filled": "E41E",
  "gesture-ranslation": "E41F",
  "gesture-right-filled": "E420",
  "gesture-right-slip-filled": "E421",
  "gesture-right-slip": "E422",
  "gesture-right": "E423",
  "gesture-slide-left-and-right-filled": "E424",
  "gesture-slide-left-and-right": "E425",
  "gesture-slide-up-filled": "E426",
  "gesture-slide-up": "E427",
  "gesture-typing-filled": "E428",
  "gesture-typing": "E429",
  "gesture-up-and-down-filled": "E42A",
  "gesture-up-and-down": "E42B",
  "gesture-up-filled": "E42C",
  "gesture-up": "E42D",
  "gesture-wipe-down-filled": "E42E",
  "gesture-wipe-down": "E42F",
  "gift-filled": "E430",
  gift,
  "giggle-filled": "E432",
  giggle,
  "git-branch-filled": "E434",
  "git-branch": "E435",
  "git-commit-1-filled": "E436",
  "git-commit-1": "E437",
  "git-commit-filled": "E438",
  "git-commit": "E439",
  "git-merge-filled": "E43A",
  "git-merge": "E43B",
  "git-pull-request-filled": "E43C",
  "git-pull-request": "E43D",
  "git-repository-commits-filled": "E43E",
  "git-repository-commits": "E43F",
  "git-repository-filled": "E440",
  "git-repository-private-filled": "E441",
  "git-repository-private": "E442",
  "git-repository": "E443",
  "gps-filled": "E444",
  gps,
  "grape-filled": "E446",
  grape,
  "graphviz-filled": "E448",
  graphviz,
  "greater-than-or-equal": "E44A",
  "greater-than": "E44B",
  "green-onion": "E44C",
  "grid-add-filled": "E44D",
  "grid-add": "E44E",
  "grid-view-filled": "E44F",
  "grid-view": "E450",
  "guitar-filled": "E451",
  guitar,
  "hamburger-filled": "E453",
  hamburger,
  "happy-filled": "E455",
  happy,
  "hard-disk-storage-filled": "E457",
  "hard-disk-storage": "E458",
  "hard-drive-filled": "E459",
  "hard-drive": "E45A",
  hashtag,
  "hd-filled": "E45C",
  hd,
  "heart-filled": "E45E",
  heart,
  "help-circle-filled": "E460",
  "help-circle": "E461",
  "help-rectangle-filled": "E462",
  "help-rectangle": "E463",
  help,
  "high-level-filled": "E465",
  "high-level": "E466",
  "highlight-1-filled": "E467",
  "highlight-1": "E468",
  highlight,
  "highlighted-block-filled": "E46A",
  "highlighted-block": "E46B",
  "history-setting": "E46C",
  history,
  "home-filled": "E46E",
  home,
  "horizontal-filled": "E470",
  horizontal,
  "hospital-1-filled": "E472",
  "hospital-1": "E473",
  "hospital-filled": "E474",
  hospital,
  "hotspot-wave-filled": "E476",
  "hotspot-wave": "E477",
  "hourglass-filled": "E478",
  hourglass,
  "houses-1-filled": "E47A",
  "houses-1": "E47B",
  "houses-2-filled": "E47C",
  "houses-2": "E47D",
  "houses-filled": "E47E",
  houses,
  "html5-filled": "E480",
  html5,
  "https-filled": "E482",
  https,
  "ice-cream-filled": "E484",
  "ice-cream": "E485",
  "icon-filled": "E486",
  icon,
  "image-1-filled": "E488",
  "image-1": "E489",
  "image-add-filled": "E48A",
  "image-add": "E48B",
  "image-carousel-filled": "E48C",
  "image-carousel": "E48D",
  "image-edit-filled": "E48E",
  "image-edit": "E48F",
  "image-error-filled": "E490",
  "image-error": "E491",
  "image-filled": "E492",
  "image-off-filled": "E493",
  "image-off": "E494",
  "image-search-filled": "E495",
  "image-search": "E496",
  image,
  "import": "E498",
  "indent-left": "E499",
  "indent-right": "E49A",
  "indicator-filled": "E49B",
  indicator,
  "info-circle-filled": "E49D",
  "info-circle": "E49E",
  "ink-filled": "E49F",
  ink,
  "install-desktop-filled": "E4A1",
  "install-desktop": "E4A2",
  "install-filled": "E4A3",
  "install-mobile-filled": "E4A4",
  "install-mobile": "E4A5",
  install,
  "institution-checked-filled": "E4A7",
  "institution-checked": "E4A8",
  "institution-filled": "E4A9",
  institution,
  "internet-filled": "E4AB",
  internet,
  "ipod-filled": "E4AD",
  ipod,
  "japanese-rectangle-filled": "E4AF",
  "japanese-rectangle": "E4B0",
  "joyful-filled": "E4B1",
  joyful,
  "jump-double": "E4B3",
  "jump-off": "E4B4",
  jump,
  "key-filled": "E4B6",
  key,
  "keyboard-filled": "E4B8",
  keyboard,
  "korean-rectangle-filled": "E4BA",
  "korean-rectangle": "E4BB",
  "laptop-filled": "E4BC",
  laptop,
  "layers-filled": "E4BE",
  layers,
  "layout-filled": "E4C0",
  layout,
  "leaderboard-filled": "E4C2",
  leaderboard,
  "lemon-filled": "E4C4",
  "lemon-slice-filled": "E4C5",
  "lemon-slice": "E4C6",
  lemon,
  "less-than-or-equal": "E4C8",
  "less-than": "E4C9",
  "letters-a": "E4CA",
  "letters-b": "E4CB",
  "letters-c": "E4CC",
  "letters-d": "E4CD",
  "letters-e": "E4CE",
  "letters-f": "E4CF",
  "letters-g": "E4D0",
  "letters-h": "E4D1",
  "letters-i": "E4D2",
  "letters-j": "E4D3",
  "letters-k": "E4D4",
  "letters-l": "E4D5",
  "letters-m": "E4D6",
  "letters-n": "E4D7",
  "letters-o": "E4D8",
  "letters-p": "E4D9",
  "letters-q": "E4DA",
  "letters-r": "E4DB",
  "letters-s": "E4DC",
  "letters-t": "E4DD",
  "letters-u": "E4DE",
  "letters-v": "E4DF",
  "letters-w": "E4E0",
  "letters-x": "E4E1",
  "letters-y": "E4E2",
  "letters-z": "E4E3",
  "lightbulb-circle-filled": "E4E4",
  "lightbulb-circle": "E4E5",
  "lightbulb-filled": "E4E6",
  lightbulb,
  "lighthouse-1-filled": "E4E8",
  "lighthouse-1": "E4E9",
  "lighthouse-2-filled": "E4EA",
  "lighthouse-2": "E4EB",
  "lighthouse-filled": "E4EC",
  lighthouse,
  "lighting-circle-filled": "E4EE",
  "lighting-circle": "E4EF",
  "line-height": "E4F0",
  "link-1": "E4F1",
  "link-transform": "E4F2",
  "link-unlink": "E4F3",
  link,
  "liquor-filled": "E4F5",
  liquor,
  "list-bug-filled": "E4F7",
  "list-bug": "E4F8",
  "list-demand": "E4F9",
  "list-numbered": "E4FA",
  load,
  loading,
  "location-1-filled": "E4FD",
  "location-1": "E4FE",
  "location-enlargement-filled": "E4FF",
  "location-enlargement": "E500",
  "location-error-filled": "E501",
  "location-error": "E502",
  "location-filled": "E503",
  "location-parking-place-filled": "E504",
  "location-parking-place": "E505",
  "location-reduction-filled": "E506",
  "location-reduction": "E507",
  "location-setting-filled": "E508",
  "location-setting": "E509",
  location,
  "lock-checked-filled": "E50B",
  "lock-checked": "E50C",
  "lock-off-filled": "E50D",
  "lock-off": "E50E",
  "lock-on-filled": "E50F",
  "lock-on": "E510",
  "lock-time-filled": "E511",
  "lock-time": "E512",
  login,
  "logo-adobe-illustrate-filled": "E514",
  "logo-adobe-illustrate": "E515",
  "logo-adobe-lightroom-filled": "E516",
  "logo-adobe-lightroom": "E517",
  "logo-adobe-photoshop-filled": "E518",
  "logo-adobe-photoshop": "E519",
  "logo-alipay-filled": "E51A",
  "logo-alipay": "E51B",
  "logo-android-filled": "E51C",
  "logo-android": "E51D",
  "logo-apple-filled": "E51E",
  "logo-apple": "E51F",
  "logo-behance-filled": "E520",
  "logo-behance": "E521",
  "logo-chrome-filled": "E522",
  "logo-chrome": "E523",
  "logo-cinema4d-filled": "E524",
  "logo-cinema4d": "E525",
  "logo-cnb-filled": "E526",
  "logo-cnb": "E527",
  "logo-codepen": "E528",
  "logo-codesandbox": "E529",
  "logo-codesign": "E52A",
  "logo-dribbble-filled": "E52B",
  "logo-dribbble": "E52C",
  "logo-facebook-filled": "E52D",
  "logo-facebook": "E52E",
  "logo-figma-filled": "E52F",
  "logo-figma": "E530",
  "logo-framer-filled": "E531",
  "logo-framer": "E532",
  "logo-github-filled": "E533",
  "logo-github": "E534",
  "logo-gitlab-filled": "E535",
  "logo-gitlab": "E536",
  "logo-hiflow-filled": "E537",
  "logo-hiflow": "E538",
  "logo-ie-filled": "E539",
  "logo-ie": "E53A",
  "logo-instagram-filled": "E53B",
  "logo-instagram": "E53C",
  "logo-iwiki-filled": "E53D",
  "logo-iwiki": "E53E",
  "logo-markdown-filled": "E53F",
  "logo-markdown": "E540",
  "logo-miniprogram-filled": "E541",
  "logo-miniprogram": "E542",
  "logo-qq-filled": "E543",
  "logo-qq": "E544",
  "logo-stackblitz-filled": "E545",
  "logo-stackblitz": "E546",
  "logo-tapd-filled": "E547",
  "logo-tapd": "E548",
  "logo-tbeacon-filled": "E549",
  "logo-tbeacon": "E54A",
  "logo-tdesign-filled": "E54B",
  "logo-tdesign": "E54C",
  "logo-tencentcode": "E54D",
  "logo-tencentmeeting-filled": "E54E",
  "logo-tencentmeeting": "E54F",
  "logo-twitter-filled": "E550",
  "logo-twitter": "E551",
  "logo-wechat-stroke-filled": "E552",
  "logo-wechat-stroke": "E553",
  "logo-wechat-workdocs-filled": "E554",
  "logo-wechat-workdocs": "E555",
  "logo-wechatpay-filled": "E556",
  "logo-wechatpay": "E557",
  "logo-wecom-filled": "E558",
  "logo-wecom": "E559",
  "logo-windows-filled": "E55A",
  "logo-windows": "E55B",
  "logo-xiaomareport-filled": "E55C",
  "logo-xiaomareport": "E55D",
  "logo-youtube-filled": "E55E",
  "logo-youtube": "E55F",
  logout,
  "look-around-filled": "E561",
  "look-around": "E562",
  "loudspeaker-filled": "E563",
  loudspeaker,
  "mail-filled": "E565",
  mail,
  "map-3d-filled": "E567",
  "map-3d": "E568",
  "map-add-filled": "E569",
  "map-add": "E56A",
  "map-aiming-filled": "E56B",
  "map-aiming": "E56C",
  "map-blocked-filled": "E56D",
  "map-blocked": "E56E",
  "map-bubble-filled": "E56F",
  "map-bubble": "E570",
  "map-cancel-filled": "E571",
  "map-cancel": "E572",
  "map-chat-filled": "E573",
  "map-chat": "E574",
  "map-checked-filled": "E575",
  "map-checked": "E576",
  "map-collection-filled": "E577",
  "map-collection": "E578",
  "map-connection-filled": "E579",
  "map-connection": "E57A",
  "map-distance-filled": "E57B",
  "map-distance": "E57C",
  "map-double-filled": "E57D",
  "map-double": "E57E",
  "map-edit-filled": "E57F",
  "map-edit": "E580",
  "map-filled": "E581",
  "map-grid-filled": "E582",
  "map-grid": "E583",
  "map-information-1-filled": "E584",
  "map-information-1": "E585",
  "map-information-2-filled": "E586",
  "map-information-2": "E587",
  "map-information-filled": "E588",
  "map-information": "E589",
  "map-location-filled": "E58A",
  "map-location": "E58B",
  "map-locked-filled": "E58C",
  "map-locked": "E58D",
  "map-marked-filled": "E58E",
  "map-marked": "E58F",
  "map-navigation-filled": "E590",
  "map-navigation": "E591",
  "map-outline-filled": "E592",
  "map-outline": "E593",
  "map-route-planning-filled": "E594",
  "map-route-planning": "E595",
  "map-ruler-filled": "E596",
  "map-ruler": "E597",
  "map-safety-filled": "E598",
  "map-safety": "E599",
  "map-search-1-filled": "E59A",
  "map-search-1": "E59B",
  "map-search-filled": "E59C",
  "map-search": "E59D",
  "map-setting-filled": "E59E",
  "map-setting": "E59F",
  "map-unlocked-filled": "E5A0",
  "map-unlocked": "E5A1",
  map,
  "mark-as-unread-filled": "E5A3",
  "mark-as-unread": "E5A4",
  "markup-filled": "E5A5",
  markup,
  "mathematics-filled": "E5A7",
  mathematics,
  "measurement-1-filled": "E5A9",
  "measurement-1": "E5AA",
  "measurement-2-filled": "E5AB",
  "measurement-2": "E5AC",
  "measurement-filled": "E5AD",
  measurement,
  "meat-pepper-filled": "E5AF",
  "meat-pepper": "E5B0",
  "media-library-filled": "E5B1",
  "media-library": "E5B2",
  "member-filled": "E5B3",
  member,
  "mentioned-filled": "E5B5",
  mentioned,
  "menu-application": "E5B7",
  "menu-filled": "E5B8",
  "menu-fold": "E5B9",
  "menu-unfold": "E5BA",
  menu,
  "merge-cells-filled": "E5BC",
  "merge-cells": "E5BD",
  "mermaid-filled": "E5BE",
  mermaid,
  "microphone-1-filled": "E5C0",
  "microphone-1": "E5C1",
  "microphone-2-filled": "E5C2",
  "microphone-2": "E5C3",
  "microphone-filled": "E5C4",
  microphone,
  "milk-filled": "E5C6",
  milk,
  "mind-map-filled": "E5C8",
  "mind-map": "E5C9",
  "minus-circle-filled": "E5CA",
  "minus-circle": "E5CB",
  "minus-rectangle-filled": "E5CC",
  "minus-rectangle": "E5CD",
  minus,
  "mirror-filled": "E5CF",
  mirror,
  "mobile-blocked-filled": "E5D1",
  "mobile-blocked": "E5D2",
  "mobile-filled": "E5D3",
  "mobile-list-filled": "E5D4",
  "mobile-list": "E5D5",
  "mobile-navigation-filled": "E5D6",
  "mobile-navigation": "E5D7",
  "mobile-shortcut-filled": "E5D8",
  "mobile-shortcut": "E5D9",
  "mobile-vibrate-filled": "E5DA",
  "mobile-vibrate": "E5DB",
  mobile,
  "mode-dark-filled": "E5DD",
  "mode-dark": "E5DE",
  "mode-embedding-filled": "E5DF",
  "mode-embedding": "E5E0",
  "mode-light-filled": "E5E1",
  "mode-light": "E5E2",
  "mode-preview-filled": "E5E3",
  "mode-preview": "E5E4",
  "mode-text-filled": "E5E5",
  "mode-text": "E5E6",
  "module-filled": "E5E7",
  module: module$1,
  "money-filled": "E5E9",
  money,
  "monument-filled": "E5EB",
  monument,
  "moon-fall-filled": "E5ED",
  "moon-fall": "E5EE",
  "moon-filled": "E5EF",
  "moon-rising-filled": "E5F0",
  "moon-rising": "E5F1",
  moon,
  more,
  "mosaic-filled": "E5F4",
  mosaic,
  "mosque-1-filled": "E5F6",
  "mosque-1": "E5F7",
  "mosque-filled": "E5F8",
  mosque,
  "mouse-filled": "E5FA",
  mouse,
  "move-1": "E5FC",
  move,
  "movie-clapper-filled": "E5FE",
  "movie-clapper": "E5FF",
  multiply,
  "museum-1-filled": "E601",
  "museum-1": "E602",
  "museum-2-filled": "E603",
  "museum-2": "E604",
  "museum-filled": "E605",
  museum,
  "mushroom-1-filled": "E607",
  "mushroom-1": "E608",
  "mushroom-filled": "E609",
  mushroom,
  "music-1-filled": "E60B",
  "music-1": "E60C",
  "music-2-filled": "E60D",
  "music-2": "E60E",
  "music-filled": "E60F",
  "music-rectangle-add-filled": "E610",
  "music-rectangle-add": "E611",
  music,
  "navigation-arrow-filled": "E613",
  "navigation-arrow": "E614",
  "next-filled": "E615",
  next,
  "no-expression-filled": "E617",
  "no-expression": "E618",
  "no-result-filled": "E619",
  "no-result": "E61A",
  "noodle-filled": "E61B",
  noodle,
  "notification-add-filled": "E61D",
  "notification-add": "E61E",
  "notification-circle-filled": "E61F",
  "notification-circle": "E620",
  "notification-error-filled": "E621",
  "notification-error": "E622",
  "notification-filled": "E623",
  notification,
  "numbers-0-1": "E625",
  "numbers-0": "E626",
  "numbers-1-1": "E627",
  "numbers-1": "E628",
  "numbers-2-1": "E629",
  "numbers-2": "E62A",
  "numbers-3-1": "E62B",
  "numbers-3": "E62C",
  "numbers-4-1": "E62D",
  "numbers-4": "E62E",
  "numbers-5-1": "E62F",
  "numbers-5": "E630",
  "numbers-6-1": "E631",
  "numbers-6": "E632",
  "numbers-7-1": "E633",
  "numbers-7": "E634",
  "numbers-8-1": "E635",
  "numbers-8": "E636",
  "numbers-9-1": "E637",
  "numbers-9": "E638",
  "numbers-circle-1-filled": "E639",
  "numbers-circle-1": "E63A",
  "numbers-circle-2-filled": "E63B",
  "numbers-circle-2": "E63C",
  "numbers-circle-3-filled": "E63D",
  "numbers-circle-3": "E63E",
  "numbers-circle-4-filled": "E63F",
  "numbers-circle-4": "E640",
  "nut-filled": "E641",
  nut,
  "object-storage": "E643",
  "open-mouth-filled": "E644",
  "open-mouth": "E645",
  "opera-filled": "E646",
  opera,
  "order-adjustment-column": "E648",
  "order-ascending": "E649",
  "order-descending": "E64A",
  "order-list": "E64B",
  order,
  "outbox-filled": "E64D",
  outbox,
  "page-first": "E64F",
  "page-head-filled": "E650",
  "page-head": "E651",
  "page-included-filled": "E652",
  "page-included": "E653",
  "page-last": "E654",
  "page-tab-filled": "E655",
  "page-tab": "E656",
  "palace-1-filled": "E657",
  "palace-1": "E658",
  "palace-2-filled": "E659",
  "palace-2": "E65A",
  "palace-3-filled": "E65B",
  "palace-3": "E65C",
  "palace-4-filled": "E65D",
  "palace-4": "E65E",
  "palace-filled": "E65F",
  palace,
  "palette-1-filled": "E661",
  "palette-1": "E662",
  "palette-filled": "E663",
  palette,
  "panorama-horizontal-filled": "E665",
  "panorama-horizontal": "E666",
  "panorama-vertical-filled": "E667",
  "panorama-vertical": "E668",
  "pantone-filled": "E669",
  pantone,
  parabola,
  parentheses,
  "paste-filled": "E66D",
  paste,
  "patio-filled": "E66F",
  patio,
  "pause-circle-filled": "E671",
  "pause-circle-stroke-filled": "E672",
  "pause-circle-stroke": "E673",
  "pause-circle": "E674",
  pause,
  "pea-filled": "E676",
  pea,
  "peach-filled": "E678",
  peach,
  "pear-filled": "E67A",
  pear,
  "pearl-of-the-orient-filled": "E67C",
  "pearl-of-the-orient": "E67D",
  "pen-ball-filled": "E67E",
  "pen-ball": "E67F",
  "pen-brush-filled": "E680",
  "pen-brush": "E681",
  "pen-filled": "E682",
  "pen-fluorescence-filled": "E683",
  "pen-fluorescence": "E684",
  "pen-mark-filled": "E685",
  "pen-mark": "E686",
  "pen-quill-filled": "E687",
  "pen-quill": "E688",
  pen,
  "pending-filled": "E68A",
  pending,
  percent,
  "personal-information-filled": "E68D",
  "personal-information": "E68E",
  "phone-locked-filled": "E68F",
  "phone-locked": "E690",
  "phone-search-filled": "E691",
  "phone-search": "E692",
  pi,
  "piano-filled": "E694",
  piano,
  "pin-filled": "E696",
  pin,
  "placeholder-filled": "E698",
  placeholder,
  "plantuml-filled": "E69A",
  plantuml,
  "play-chart-filled": "E69C",
  "play-chart": "E69D",
  "play-circle-filled": "E69E",
  "play-circle-stroke-add-filled": "E69F",
  "play-circle-stroke-add": "E6A0",
  "play-circle-stroke-filled": "E6A1",
  "play-circle-stroke": "E6A2",
  "play-circle": "E6A3",
  "play-demo-filled": "E6A4",
  "play-demo": "E6A5",
  "play-rectangle-filled": "E6A6",
  "play-rectangle": "E6A7",
  play,
  plus,
  "popsicle-filled": "E6AA",
  popsicle,
  "portrait-filled": "E6AC",
  portrait,
  "pout-filled": "E6AE",
  pout,
  poweroff,
  "precise-monitor": "E6B1",
  "previous-filled": "E6B2",
  previous,
  "print-filled": "E6B4",
  print,
  "pumpkin-filled": "E6B6",
  pumpkin,
  "pyramid-filled": "E6B8",
  "pyramid-maya-filled": "E6B9",
  "pyramid-maya": "E6BA",
  pyramid,
  qrcode,
  quadratic,
  "questionnaire-double-filled": "E6BE",
  "questionnaire-double": "E6BF",
  "questionnaire-filled": "E6C0",
  questionnaire,
  "queue-filled": "E6C2",
  queue,
  "quote-filled": "E6C4",
  quote,
  radar,
  "radio-1-filled": "E6C7",
  "radio-1": "E6C8",
  "radio-2-filled": "E6C9",
  "radio-2": "E6CA",
  "radish-filled": "E6CB",
  radish,
  "rain-heavy": "E6CD",
  "rain-light-filled": "E6CE",
  "rain-light": "E6CF",
  "rain-medium": "E6D0",
  rainbow,
  "rectangle-filled": "E6D2",
  rectangle,
  refresh,
  relation,
  "relativity-filled": "E6D6",
  relativity,
  "remote-wave-filled": "E6D8",
  "remote-wave": "E6D9",
  remove,
  "rename-filled": "E6DB",
  rename,
  "replay-filled": "E6DD",
  replay,
  "rice-ball-filled": "E6DF",
  "rice-ball": "E6E0",
  "rice-filled": "E6E1",
  rice,
  "roast-filled": "E6E3",
  roast,
  "robot-1-filled": "E6E5",
  "robot-1": "E6E6",
  "robot-2-filled": "E6E7",
  "robot-2": "E6E8",
  "robot-filled": "E6E9",
  robot,
  "rocket-filled": "E6EB",
  rocket,
  rollback,
  rollfront,
  "root-list-filled": "E6EF",
  "root-list": "E6F0",
  "rotate-locked-filled": "E6F1",
  "rotate-locked": "E6F2",
  rotate,
  rotation,
  "round-filled": "E6F5",
  round,
  "router-wave-filled": "E6F7",
  "router-wave": "E6F8",
  rss,
  "ruler-filled": "E6FA",
  ruler,
  "sailing-hotel-filled": "E6FC",
  "sailing-hotel": "E6FD",
  "sandwich-filled": "E6FE",
  sandwich,
  "saturation-filled": "E700",
  saturation,
  "sausage-filled": "E702",
  sausage,
  "save-filled": "E704",
  save,
  "saving-pot-filled": "E706",
  "saving-pot": "E707",
  scan,
  "screen-4k-filled": "E709",
  "screen-4k": "E70A",
  "screen-mirroring-filled": "E70B",
  "screen-mirroring": "E70C",
  "screencast-filled": "E70D",
  screencast,
  screenshot,
  "scroll-bar-filled": "E710",
  "scroll-bar": "E711",
  "sd-card-1-filled": "E712",
  "sd-card-1": "E713",
  "sd-card-filled": "E714",
  "sd-card": "E715",
  "seal-filled": "E716",
  seal,
  "search-error-filled": "E718",
  "search-error": "E719",
  "search-filled": "E71A",
  search,
  "secured-filled": "E71C",
  secured,
  "send-cancel-filled": "E71E",
  "send-cancel": "E71F",
  "send-filled": "E720",
  send,
  "sensors-1": "E722",
  "sensors-2": "E723",
  "sensors-off": "E724",
  sensors,
  "sequence-filled": "E726",
  sequence,
  "serenity-filled": "E728",
  serenity,
  "server-filled": "E72A",
  server,
  "service-filled": "E72C",
  service,
  "setting-1-filled": "E72E",
  "setting-1": "E72F",
  "setting-filled": "E730",
  setting,
  "share-1-filled": "E732",
  "share-1": "E733",
  "share-filled": "E734",
  share,
  "sharpness-filled": "E736",
  sharpness,
  "shield-error-filled": "E738",
  "shield-error": "E739",
  "shimen-filled": "E73A",
  shimen,
  "shop-1-filled": "E73C",
  "shop-1": "E73D",
  "shop-2-filled": "E73E",
  "shop-2": "E73F",
  "shop-3-filled": "E740",
  "shop-3": "E741",
  "shop-4-filled": "E742",
  "shop-4": "E743",
  "shop-5-filled": "E744",
  "shop-5": "E745",
  "shop-filled": "E746",
  shop,
  shortcut,
  "shrimp-filled": "E749",
  shrimp,
  "shrink-horizontal": "E74B",
  "shrink-vertical": "E74C",
  "shutter-filled": "E74D",
  shutter,
  "shutup-filled": "E74F",
  shutup,
  "sim-card-1-filled": "E751",
  "sim-card-1": "E752",
  "sim-card-2-filled": "E753",
  "sim-card-2": "E754",
  "sim-card-filled": "E755",
  "sim-card": "E756",
  "sinister-smile-filled": "E757",
  "sinister-smile": "E758",
  "sip-filled": "E759",
  sip,
  "sitemap-filled": "E75B",
  sitemap,
  "size-change": "E75D",
  slash,
  "sleep-filled": "E75F",
  sleep,
  "slice-filled": "E761",
  slice,
  "slideshow-filled": "E763",
  slideshow,
  "smile-filled": "E765",
  smile,
  "sneer-filled": "E767",
  sneer,
  snowflake,
  sonic,
  "sound-down-filled": "E76B",
  "sound-down": "E76C",
  "sound-filled": "E76D",
  "sound-high-filled": "E76E",
  "sound-high": "E76F",
  "sound-low-filled": "E770",
  "sound-low": "E771",
  "sound-mute-1-filled": "E772",
  "sound-mute-1": "E773",
  "sound-mute-filled": "E774",
  "sound-mute": "E775",
  "sound-up-filled": "E776",
  "sound-up": "E777",
  sound,
  space,
  "speechless-1-filled": "E77A",
  "speechless-1": "E77B",
  "speechless-filled": "E77C",
  speechless,
  "star-filled": "E77E",
  star,
  "statue-of-jesus-filled": "E780",
  "statue-of-jesus": "E781",
  "sticky-note-filled": "E782",
  "sticky-note": "E783",
  "stop-circle-filled": "E784",
  "stop-circle-stroke-filled": "E785",
  "stop-circle-stroke": "E786",
  "stop-circle": "E787",
  stop,
  "store-filled": "E789",
  store,
  "street-road-1-filled": "E78B",
  "street-road-1": "E78C",
  "street-road-filled": "E78D",
  "street-road": "E78E",
  subscript,
  "subtitle-filled": "E790",
  subtitle,
  "subway-line-filled": "E792",
  "subway-line": "E793",
  sum,
  summary,
  "sun-fall-filled": "E796",
  "sun-fall": "E797",
  "sun-rising-filled": "E798",
  "sun-rising": "E799",
  "sunny-filled": "E79A",
  sunny,
  superscript,
  "support-filled": "E79D",
  support,
  "surprised-1-filled": "E79F",
  "surprised-1": "E7A0",
  "surprised-filled": "E7A1",
  surprised,
  "swap-left": "E7A3",
  "swap-right": "E7A4",
  swap,
  "swear-1-filled": "E7A6",
  "swear-1": "E7A7",
  "swear-2-filled": "E7A8",
  "swear-2": "E7A9",
  "system-2": "E7AA",
  "system-3-filled": "E7AB",
  "system-3": "E7AC",
  "system-application-filled": "E7AD",
  "system-application": "E7AE",
  "system-blocked-filled": "E7AF",
  "system-blocked": "E7B0",
  "system-code-filled": "E7B1",
  "system-code": "E7B2",
  "system-components-filled": "E7B3",
  "system-components": "E7B4",
  "system-coordinate-filled": "E7B5",
  "system-coordinate": "E7B6",
  "system-device-filled": "E7B7",
  "system-device": "E7B8",
  "system-interface-filled": "E7B9",
  "system-interface": "E7BA",
  "system-location-filled": "E7BB",
  "system-location": "E7BC",
  "system-locked-filled": "E7BD",
  "system-locked": "E7BE",
  "system-log-filled": "E7BF",
  "system-log": "E7C0",
  "system-marked-filled": "E7C1",
  "system-marked": "E7C2",
  "system-messages-filled": "E7C3",
  "system-messages": "E7C4",
  "system-regulation-filled": "E7C5",
  "system-regulation": "E7C6",
  "system-search-filled": "E7C7",
  "system-search": "E7C8",
  "system-setting-filled": "E7C9",
  "system-setting": "E7CA",
  "system-storage-filled": "E7CB",
  "system-storage": "E7CC",
  "system-sum": "E7CD",
  "system-unlocked-filled": "E7CE",
  "system-unlocked": "E7CF",
  "tab-filled": "E7D0",
  tab,
  "table-1-filled": "E7D2",
  "table-1": "E7D3",
  "table-2-filled": "E7D4",
  "table-2": "E7D5",
  "table-add-filled": "E7D6",
  "table-add": "E7D7",
  "table-filled": "E7D8",
  "table-split-filled": "E7D9",
  "table-split": "E7DA",
  table,
  "tag-filled": "E7DC",
  "tag-state-filled": "E7DD",
  "tag-state": "E7DE",
  tag,
  "tangerinr-filled": "E7E0",
  tangerinr,
  "tape-filled": "E7E2",
  tape,
  "task-1-filled": "E7E4",
  "task-1": "E7E5",
  "task-add-1": "E7E6",
  "task-add-filled": "E7E7",
  "task-add": "E7E8",
  "task-checked-1": "E7E9",
  "task-checked-filled": "E7EA",
  "task-checked": "E7EB",
  "task-double-filled": "E7EC",
  "task-double": "E7ED",
  "task-error-filled": "E7EE",
  "task-error": "E7EF",
  "task-filled": "E7F0",
  "task-location-filled": "E7F1",
  "task-location": "E7F2",
  "task-marked-filled": "E7F3",
  "task-marked": "E7F4",
  "task-setting-filled": "E7F5",
  "task-setting": "E7F6",
  "task-time-filled": "E7F7",
  "task-time": "E7F8",
  "task-visible-filled": "E7F9",
  "task-visible": "E7FA",
  task,
  "tea-filled": "E7FC",
  tea,
  "teahouse-filled": "E7FE",
  teahouse,
  "template-filled": "E800",
  template,
  "temple-filled": "E802",
  temple,
  "terminal-rectangle-1-filled": "E804",
  "terminal-rectangle-1": "E805",
  "terminal-rectangle-filled": "E806",
  "terminal-rectangle": "E807",
  "terminal-window-filled": "E808",
  "terminal-window": "E809",
  terminal,
  "text-drawing-filled": "E80B",
  "text-drawing": "E80C",
  "text-style": "E80D",
  text,
  "textbox-filled": "E80F",
  textbox,
  "textformat-bold": "E811",
  "textformat-color": "E812",
  "textformat-italic": "E813",
  "textformat-longer": "E814",
  "textformat-shorter": "E815",
  "textformat-strikethrough": "E816",
  "textformat-underline": "E817",
  "textformat-wrap": "E818",
  "theaters-filled": "E819",
  theaters,
  "thumb-down-1-filled": "E81B",
  "thumb-down-1": "E81C",
  "thumb-down-2-filled": "E81D",
  "thumb-down-2": "E81E",
  "thumb-down-filled": "E81F",
  "thumb-down": "E820",
  "thumb-up-1-filled": "E821",
  "thumb-up-1": "E822",
  "thumb-up-2-filled": "E823",
  "thumb-up-2": "E824",
  "thumb-up-filled": "E825",
  "thumb-up": "E826",
  thunder,
  "thunderstorm-night-filled": "E828",
  "thunderstorm-night": "E829",
  "thunderstorm-sunny-filled": "E82A",
  "thunderstorm-sunny": "E82B",
  thunderstorm,
  "ticket-filled": "E82D",
  ticket,
  "time-filled": "E82F",
  time,
  "tips-double-filled": "E831",
  "tips-double": "E832",
  "tips-filled": "E833",
  tips,
  "tomato-filled": "E835",
  tomato,
  "tools-circle-filled": "E837",
  "tools-circle": "E838",
  "tools-filled": "E839",
  tools,
  tornado,
  "tower-1-filled": "E83C",
  "tower-1": "E83D",
  "tower-2-filled": "E83E",
  "tower-2": "E83F",
  "tower-3-filled": "E840",
  "tower-3": "E841",
  "tower-clock-filled": "E842",
  "tower-clock": "E843",
  "tower-filled": "E844",
  tower,
  "town-filled": "E846",
  town,
  "traffic-events-filled": "E848",
  "traffic-events": "E849",
  "traffic-filled": "E84A",
  traffic,
  "transform-1-filled": "E84C",
  "transform-1": "E84D",
  "transform-2": "E84E",
  "transform-3": "E84F",
  "transform-filled": "E850",
  transform,
  "translate-1": "E852",
  translate,
  "tree-catalog-filled": "E854",
  "tree-catalog": "E855",
  "tree-list": "E856",
  "tree-round-dot-filled": "E857",
  "tree-round-dot-vertical-filled": "E858",
  "tree-round-dot-vertical": "E859",
  "tree-round-dot": "E85A",
  "tree-square-dot-filled": "E85B",
  "tree-square-dot-vertical-filled": "E85C",
  "tree-square-dot-vertical": "E85D",
  "tree-square-dot": "E85E",
  "trending-down": "E85F",
  "trending-up": "E860",
  "tv-1-filled": "E861",
  "tv-1": "E862",
  "tv-2-filled": "E863",
  "tv-2": "E864",
  "tv-filled": "E865",
  tv,
  "typography-filled": "E867",
  typography,
  "uncomfortable-1-filled": "E869",
  "uncomfortable-1": "E86A",
  "uncomfortable-2-filled": "E86B",
  "uncomfortable-2": "E86C",
  "uncomfortable-filled": "E86D",
  uncomfortable,
  "undertake-delivery-filled": "E86F",
  "undertake-delivery": "E870",
  "undertake-environment-protection-filled": "E871",
  "undertake-environment-protection": "E872",
  "undertake-filled": "E873",
  "undertake-hold-up-filled": "E874",
  "undertake-hold-up": "E875",
  "undertake-transaction-filled": "E876",
  "undertake-transaction": "E877",
  undertake,
  "unfold-less": "E879",
  "unfold-more": "E87A",
  "unhappy-1-filled": "E87B",
  "unhappy-1": "E87C",
  "unhappy-filled": "E87D",
  unhappy,
  "uninstall-filled": "E87F",
  uninstall,
  "upload-1": "E881",
  upload,
  upscale,
  "usb-filled": "E884",
  usb,
  "user-1-filled": "E886",
  "user-1": "E887",
  "user-add-filled": "E888",
  "user-add": "E889",
  "user-arrow-down-filled": "E88A",
  "user-arrow-down": "E88B",
  "user-arrow-left-filled": "E88C",
  "user-arrow-left": "E88D",
  "user-arrow-right-filled": "E88E",
  "user-arrow-right": "E88F",
  "user-arrow-up-filled": "E890",
  "user-arrow-up": "E891",
  "user-avatar-filled": "E892",
  "user-avatar": "E893",
  "user-blocked-filled": "E894",
  "user-blocked": "E895",
  "user-business-filled": "E896",
  "user-business": "E897",
  "user-checked-1-filled": "E898",
  "user-checked-1": "E899",
  "user-checked-filled": "E89A",
  "user-checked": "E89B",
  "user-circle-filled": "E89C",
  "user-circle": "E89D",
  "user-clear-filled": "E89E",
  "user-clear": "E89F",
  "user-error-1-filled": "E8A0",
  "user-error-1": "E8A1",
  "user-filled": "E8A2",
  "user-invisible-filled": "E8A3",
  "user-invisible": "E8A4",
  "user-list-filled": "E8A5",
  "user-list": "E8A6",
  "user-locked-filled": "E8A7",
  "user-locked": "E8A8",
  "user-marked-filled": "E8A9",
  "user-marked": "E8AA",
  "user-password-filled": "E8AB",
  "user-password": "E8AC",
  "user-safety-filled": "E8AD",
  "user-safety": "E8AE",
  "user-search-filled": "E8AF",
  "user-search": "E8B0",
  "user-setting-filled": "E8B1",
  "user-setting": "E8B2",
  "user-talk-1-filled": "E8B3",
  "user-talk-1": "E8B4",
  "user-talk-filled": "E8B5",
  "user-talk-off-1-filled": "E8B6",
  "user-talk-off-1": "E8B7",
  "user-talk": "E8B8",
  "user-time-filled": "E8B9",
  "user-time": "E8BA",
  "user-transmit-filled": "E8BB",
  "user-transmit": "E8BC",
  "user-unknown-filled": "E8BD",
  "user-unknown": "E8BE",
  "user-unlocked-filled": "E8BF",
  "user-unlocked": "E8C0",
  "user-vip-filled": "E8C1",
  "user-vip": "E8C2",
  "user-visible-filled": "E8C3",
  "user-visible": "E8C4",
  user,
  "usercase-filled": "E8C6",
  "usercase-link-filled": "E8C7",
  "usercase-link": "E8C8",
  usercase,
  "usergroup-add-filled": "E8CA",
  "usergroup-add": "E8CB",
  "usergroup-circle-filled": "E8CC",
  "usergroup-circle": "E8CD",
  "usergroup-clear-filled": "E8CE",
  "usergroup-clear": "E8CF",
  "usergroup-filled": "E8D0",
  usergroup,
  "vehicle-filled": "E8D2",
  vehicle,
  "verified-filled": "E8D4",
  verified,
  "verify-filled": "E8D6",
  verify,
  "vertical-filled": "E8D8",
  vertical,
  "video-camera-1-filled": "E8DA",
  "video-camera-1": "E8DB",
  "video-camera-2-filled": "E8DC",
  "video-camera-2": "E8DD",
  "video-camera-dollar-filled": "E8DE",
  "video-camera-dollar": "E8DF",
  "video-camera-filled": "E8E0",
  "video-camera-minus-filled": "E8E1",
  "video-camera-minus": "E8E2",
  "video-camera-music-filled": "E8E3",
  "video-camera-music": "E8E4",
  "video-camera-off-filled": "E8E5",
  "video-camera-off": "E8E6",
  "video-camera": "E8E7",
  "video-filled": "E8E8",
  "video-library-filled": "E8E9",
  "video-library": "E8EA",
  video,
  "view-agenda-filled": "E8EC",
  "view-agenda": "E8ED",
  "view-column": "E8EE",
  "view-gantt-filled": "E8EF",
  "view-gantt": "E8F0",
  "view-image-filled": "E8F1",
  "view-image": "E8F2",
  "view-in-ar-filled": "E8F3",
  "view-in-ar": "E8F4",
  "view-list": "E8F5",
  "view-module-filled": "E8F6",
  "view-module": "E8F7",
  "view-organization-filled": "E8F8",
  "view-organization": "E8F9",
  "visual-recognition-filled": "E8FA",
  "visual-recognition": "E8FB",
  "wallet-filled": "E8FC",
  wallet,
  "watch-filled": "E8FE",
  watch,
  "watermelon-filled": "E900",
  watermelon,
  "wave-bye-filled": "E902",
  "wave-bye": "E903",
  "wave-left-filled": "E904",
  "wave-left": "E905",
  "wave-right-filled": "E906",
  "wave-right": "E907",
  "wealth-1-filled": "E908",
  "wealth-1": "E909",
  "wealth-filled": "E90A",
  wealth,
  "web-filled": "E90C",
  web,
  "widget-filled": "E90E",
  widget,
  "wifi-1-filled": "E910",
  "wifi-1": "E911",
  "wifi-no-filled": "E912",
  "wifi-no": "E913",
  "wifi-off-1-filled": "E914",
  "wifi-off-1": "E915",
  "wifi-off": "E916",
  wifi,
  "window-1-filled": "E918",
  "window-1": "E919",
  "window-filled": "E91A",
  window,
  "windy-rain": "E91C",
  windy,
  "wink-filled": "E91E",
  wink,
  "work-filled": "E920",
  "work-history-filled": "E921",
  "work-history": "E922",
  "work-off-filled": "E923",
  "work-off": "E924",
  work,
  "wry-smile-filled": "E926",
  "wry-smile": "E927",
  "zoom-in-filled": "E928",
  "zoom-in": "E929",
  "zoom-out-filled": "E92A",
  "zoom-out": "E92B"
});
const Object$1 = UTSJSONObject;
const fontIconRegistry = /* @__PURE__ */ new Map();
const iconifyRegistry = /* @__PURE__ */ new Map();
const jsonCache = /* @__PURE__ */ new Map();
const iconData = /* @__PURE__ */ new Map();
const iconDataChangeCount = common_vendor.ref(0);
let DEFAULT_ICONIFY_API = "https://api.iconify.design";
function isNullish(value) {
  return value == null || value == void 0;
}
function isUnicodeChar(str) {
  return /[^\x00-\x7F]/.test(str);
}
function isUnicodeEscape(str) {
  return /^\\u[0-9a-fA-F]{4}$/.test(str);
}
function parseUnicode(str) {
  if (isUnicodeEscape(str)) {
    return String.fromCharCode(parseInt(str.slice(2), 16));
  }
  return str;
}
function isNetworkUrl(url) {
  return url.startsWith("http://") || url.startsWith("https://");
}
function loadJsonData(jsonUrl) {
  return common_vendor.__awaiter(this, void 0, void 0, function* () {
    if (jsonCache.has(jsonUrl)) {
      return jsonCache.get(jsonUrl);
    }
    if (isNetworkUrl(jsonUrl)) {
      return new Promise((resolve, reject) => {
        common_vendor.index.request({
          url: jsonUrl,
          dataType: "text",
          success: (res) => {
            if (res.statusCode == 200) {
              const data2 = res.data;
              jsonCache.set(jsonUrl, data2);
              resolve(data2);
            } else {
              reject(new Error(`加载失败: ${res.statusCode}`));
            }
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        try {
          const fs = common_vendor.index.getFileSystemManager();
          fs.readFile({
            filePath: jsonUrl,
            encoding: "utf-8",
            success: (res) => {
              try {
                const data2 = JSON.parse(res.data);
                jsonCache.set(jsonUrl, data2);
                resolve(data2);
              } catch (error2) {
                reject(new Error("解析JSON失败"));
              }
            },
            fail: (err) => {
              reject(err);
            }
          });
        } catch (fsError) {
          reject(fsError);
        }
      });
    }
  });
}
const loadingFonts = common_vendor.ref([]);
function registerFontIcon(config) {
  var _a;
  return common_vendor.__awaiter(this, void 0, void 0, function* () {
    const prefix = config.prefix, jsonUrl = config.jsonUrl;
    const icons = (_a = config.icons) !== null && _a !== void 0 ? _a : {};
    fontIconRegistry.set(prefix, config);
    if (!isNullish(config.fontUrl)) {
      loadingFonts.value.push(config);
      common_vendor.index.loadFontFace({
        family: config.fontFamily,
        source: `url("${config.fontUrl}")`,
        scopes: ["webview", "native"],
        success: () => {
          const existingIndex = loadingFonts.value.findIndex((item) => {
            return item.fontUrl == config.fontUrl;
          });
          if (existingIndex > -1) {
            loadingFonts.value.splice(existingIndex, 1);
          }
          common_vendor.index.__f__("log", "at uni_modules/lime-icon/index.ts:317", `字体加载成功: ${config.fontFamily}; 正在加载字体数量: ${loadingFonts.value.length}`);
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at uni_modules/lime-icon/index.ts:319", `字体加载失败: ${config.fontFamily}`, err);
        }
      });
    }
    if (Object$1.keys(icons).length > 0) {
      iconData.set(prefix, icons);
      iconDataChangeCount.value++;
      common_vendor.index.__f__("log", "at uni_modules/lime-icon/index.ts:327", `已注册字体图标库: ${prefix} (内置${Object$1.keys(icons).length}个图标)`);
      if (!isNullish(jsonUrl)) {
        loadAndMergeJson(prefix, jsonUrl);
      }
    } else if (!isNullish(jsonUrl)) {
      try {
        const jsonIcons = yield loadJsonData(jsonUrl);
        iconData.set(prefix, jsonIcons);
        iconDataChangeCount.value++;
        common_vendor.index.__f__("log", "at uni_modules/lime-icon/index.ts:340", `已注册字体图标库: ${prefix} (从JSON加载${Object$1.keys(jsonIcons).length}个图标)`);
      } catch (error2) {
        common_vendor.index.__f__("log", "at uni_modules/lime-icon/index.ts:342", "jsonUrl", jsonUrl);
        common_vendor.index.__f__("error", "at uni_modules/lime-icon/index.ts:343", `注册字体图标库失败: ${prefix}`, error2);
        throw error2;
      }
    } else {
      common_vendor.index.__f__("warn", "at uni_modules/lime-icon/index.ts:347", `注册字体图标库: ${prefix}，但未提供图标数据`);
    }
  });
}
function loadAndMergeJson(prefix, jsonUrl) {
  var _a;
  return common_vendor.__awaiter(this, void 0, void 0, function* () {
    try {
      const jsonIcons = yield loadJsonData(jsonUrl);
      const currentIcons = (_a = iconData.get(prefix)) !== null && _a !== void 0 ? _a : {};
      const mergedIcons = Object$1.assign(Object$1.assign({}, currentIcons), jsonIcons);
      iconData.set(prefix, mergedIcons);
      iconDataChangeCount.value++;
      common_vendor.index.__f__("log", "at uni_modules/lime-icon/index.ts:374", `已合并图标库: ${prefix}，现有${Object$1.keys(mergedIcons).length}个图标`);
    } catch (error2) {
      common_vendor.index.__f__("warn", "at uni_modules/lime-icon/index.ts:377", `加载图标JSON失败: ${jsonUrl}，使用现有图标`);
    }
  });
}
function parseIconName(name, prefix = "") {
  if (isUnicodeChar(name) || isUnicodeEscape(name)) {
    return {
      prefix,
      iconName: name,
      hasPrefix: false,
      isImage: false,
      isUnicode: true,
      isSvg: false
    };
  }
  const isImageUrl = name.startsWith("/") || name.startsWith("http") || name.startsWith("data:") || /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(name);
  const isSvgPath = /\.(svg)$/i.test(name) || name.startsWith("data:image/svg+xml;");
  if (isImageUrl) {
    return {
      prefix: "",
      iconName: name,
      hasPrefix: false,
      isImage: true,
      isUnicode: false,
      isSvg: isSvgPath
    };
  }
  if (name.includes(":")) {
    const _a = common_vendor.__read(name.split(":"), 2), prefix_1 = _a[0], iconName = _a[1];
    return {
      prefix: prefix_1,
      iconName,
      hasPrefix: true,
      isImage: false,
      isUnicode: false,
      isSvg: false
    };
  }
  return {
    prefix,
    iconName: name,
    hasPrefix: false,
    isImage: false,
    isUnicode: false,
    isSvg: false
  };
}
function useIcon(name, options = {}) {
  const parsed = common_vendor.computed(() => {
    var _a;
    return parseIconName(`${common_vendor.unref(name)}`, (_a = options.prefix) !== null && _a !== void 0 ? _a : "l");
  });
  const type = common_vendor.computed(() => {
    const _a = parsed.value, prefix = _a.prefix, isImage = _a.isImage, hasPrefix = _a.hasPrefix, isUnicode = _a.isUnicode;
    if (isUnicode)
      return "font";
    if (isImage)
      return "image";
    if (hasPrefix) {
      if (fontIconRegistry.has(prefix))
        return "font";
      if (iconifyRegistry.has(prefix))
        return "iconify";
      return "iconify";
    }
    if (!isNullish(options.prefix)) {
      if (fontIconRegistry.has(options.prefix))
        return "font";
      if (iconifyRegistry.has(options.prefix))
        return "iconify";
    }
    return "font";
  });
  const fontIcon = common_vendor.computed(() => {
    var _a, _b;
    iconDataChangeCount.value;
    if (type.value == "font") {
      const _c = parsed.value, prefix = _c.prefix, iconName = _c.iconName, hasPrefix = _c.hasPrefix, isUnicode = _c.isUnicode;
      if (isUnicode) {
        const char = parseUnicode(iconName);
        return {
          fontFamily: (_a = options.prefix) !== null && _a !== void 0 ? _a : "",
          unicode: iconName,
          char,
          className: ""
        };
      }
      let targetPrefix = "";
      if (hasPrefix) {
        targetPrefix = prefix;
      } else if (!isNullish(options.prefix)) {
        targetPrefix = options.prefix;
      } else
        ;
      if (!isNullish(targetPrefix) && fontIconRegistry.has(targetPrefix) && iconData.has(targetPrefix)) {
        const config = fontIconRegistry.get(targetPrefix);
        const icons = iconData.get(targetPrefix);
        const unicode = `${(_b = icons[iconName]) !== null && _b !== void 0 ? _b : ""}`;
        return {
          fontFamily: config.fontFamily,
          unicode,
          char: unicode != "" ? String.fromCharCode(parseInt(unicode, 16)) : "",
          className: `${config.prefix}-${iconName}`
        };
      }
    }
    return null;
  });
  const iconifyInfo = common_vendor.computed(() => {
    var _a;
    iconDataChangeCount.value;
    if (type.value == "iconify") {
      const _b = parsed.value, prefix = _b.prefix, iconName = _b.iconName, hasPrefix = _b.hasPrefix;
      let targetPrefix = prefix;
      let targetIconName = iconName;
      if (!hasPrefix) {
        if (!isNullish(options.prefix)) {
          targetPrefix = options.prefix;
          targetIconName = iconName;
        } else {
          return null;
        }
      }
      const config = iconifyRegistry.get(targetPrefix);
      const icons = iconData.get(targetPrefix);
      const isLocal = !isNullish(icons) && Object$1.keys(icons).length > 0;
      let apiUrl = DEFAULT_ICONIFY_API;
      if (!isNullish(config) && !isNullish(config === null || config === void 0 ? void 0 : config.apiUrl)) {
        apiUrl = config.apiUrl;
      }
      return {
        prefix: targetPrefix,
        apiUrl,
        isLocal,
        svgContent: isLocal ? `${(_a = icons === null || icons === void 0 ? void 0 : icons[targetIconName]) !== null && _a !== void 0 ? _a : ""}` : "",
        iconName: targetIconName
      };
    }
    return null;
  });
  const iconifyUrl = common_vendor.computed(() => {
    var _a;
    const info = iconifyInfo.value;
    if (isNullish(info))
      return null;
    if (info.isLocal && info.svgContent != "") {
      return (_a = info === null || info === void 0 ? void 0 : info.svgContent) !== null && _a !== void 0 ? _a : "";
    }
    return `${info.apiUrl}/${info.prefix}/${info.iconName}.svg`;
  });
  const imageUrl = common_vendor.computed(() => {
    if (type.value == "image") {
      return parsed.value.iconName;
    }
    return "";
  });
  return {
    type,
    fontIcon,
    iconifyUrl,
    iconifyInfo,
    imageUrl,
    parsed: parsed.value
    // 解析后的图标基本信息
  };
}
registerFontIcon({
  prefix: "l",
  fontFamily: "l",
  icons: defalutIconList
});
exports.loadingFonts = loadingFonts;
exports.useIcon = useIcon;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/uni_modules/lime-icon/index.js.map
