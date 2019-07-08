(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['flag-pack-core'] = factory());
}(this, function () { 'use strict';

  var codeList = [{countryName:"Andorra","alpha-2":"AD","alpha-3":"AND",numeric:"020"},{countryName:"United Arab Emirates","alpha-2":"AE","alpha-3":"ARE",numeric:"784"},{countryName:"Antigua and Barbuda","alpha-2":"AG","alpha-3":"ATG",numeric:"028"},{countryName:"Anguilla","alpha-2":"AI","alpha-3":"AIA",numeric:"660"},{countryName:"Albania","alpha-2":"AL","alpha-3":"ALB",numeric:"008"},{countryName:"Amernia","alpha-2":"AM","alpha-3":"ARM",numeric:"051"},{countryName:"Angola","alpha-2":"AO","alpha-3":"AGO",numeric:"024"},{countryName:"Antartctica","alpha-2":"AQ","alpha-3":"ATA",numeric:"010"},{countryName:"Argentina","alpha-2":"AR","alpha-3":"ARG",numeric:"032"},{countryName:"American Samoa","alpha-2":"AS","alpha-3":"ASM",numeric:"016"},{countryName:"Austria","alpha-2":"AT","alpha-3":"AUT",numeric:"040"},{countryName:"Australia","alpha-2":"AU","alpha-3":"AUS",numeric:"016"},{countryName:"Aruba","alpha-2":"AW","alpha-3":"ABW",numeric:"533"},{countryName:"Åland Islands","alpha-2":"AX","alpha-3":"ALA",numeric:"248"},{countryName:"Azerbaijan","alpha-2":"AZ","alpha-3":"AZE",numeric:"031"},{countryName:"Bahamas","alpha-2":"BS","alpha-3":"BHS",numeric:"044"},{countryName:"Bahrain","alpha-2":"BH","alpha-3":"BHR",numeric:"048"},{countryName:"Bangladesh","alpha-2":"BD","alpha-3":"BGD",numeric:"050"},{countryName:"Barbados","alpha-2":"BB","alpha-3":"BRB",numeric:"052"},{countryName:"Belarus","alpha-2":"BY","alpha-3":"BLR",numeric:"112"},{countryName:"Belgium","alpha-2":"BE","alpha-3":"BEL",numeric:"056"},{countryName:"Belize","alpha-2":"BZ","alpha-3":"BLZ",numeric:"084"},{countryName:"Benin","alpha-2":"BJ","alpha-3":"BEN",numeric:"204"},{countryName:"Bermuda","alpha-2":"BM","alpha-3":"BMU",numeric:"060"},{countryName:"Bhutan","alpha-2":"BT","alpha-3":"BTN",numeric:"064"},{countryName:"Bolivia","alpha-2":"BO","alpha-3":"BOL",numeric:"068"},{countryName:"Bonaire","alpha-2":"BQ","alpha-3":"BES",numeric:"535"},{countryName:"Sint Eustatius","alpha-2":"BQ","alpha-3":"BES",numeric:"535"},{countryName:"Saba","alpha-2":"BQ","alpha-3":"BES",numeric:"535"},{countryName:"Bosnia and Herzegovina","alpha-2":"BA","alpha-3":"BIH",numeric:"070"},{countryName:"Botswana","alpha-2":"BW","alpha-3":"BWA",numeric:"072"},{countryName:"Brazil","alpha-2":"BR","alpha-3":"BRA",numeric:"076"},{countryName:"British Indian Ocean Territory","alpha-2":"IO","alpha-3":"IOT",numeric:"086"},{countryName:"Brunei","alpha-2":"BN","alpha-3":"BRN",numeric:"096"},{countryName:"Bulgaria","alpha-2":"BG","alpha-3":"BGR",numeric:"100"},{countryName:"Burkina Faso","alpha-2":"BF","alpha-3":"BFA",numeric:"854"},{countryName:"Burundi","alpha-2":"BI","alpha-3":"BDI",numeric:"108"},{countryName:"Cape Verde","alpha-2":"CV","alpha-3":"CPV",numeric:"132"},{countryName:"Cambodia","alpha-2":"KH","alpha-3":"KHM",numeric:"116"},{countryName:"Cameroon","alpha-2":"CM","alpha-3":"CMR",numeric:"120"},{countryName:"Canada","alpha-2":"CA","alpha-3":"CAN",numeric:"124"},{countryName:"Cayman Islands","alpha-2":"KY","alpha-3":"CYM",numeric:"136"},{countryName:"Central African Republic","alpha-2":"CF","alpha-3":"CAF",numeric:"140"},{countryName:"Chad","alpha-2":"TD","alpha-3":"TCD",numeric:"148"},{countryName:"Chile","alpha-2":"CL","alpha-3":"CHL",numeric:"152"},{countryName:"China","alpha-2":"CN","alpha-3":"CHN",numeric:"156"},{countryName:"Christmas Island","alpha-2":"CX","alpha-3":"CXR",numeric:"162"},{countryName:"Cocos Islands","alpha-2":"CC","alpha-3":"CCK",numeric:"166"},{countryName:"Colombia","alpha-2":"CO","alpha-3":"COL",numeric:"170"},{countryName:"Comoros","alpha-2":"KM","alpha-3":"COM",numeric:"174"},{countryName:"Democratis Republic of Congo","alpha-2":"CD","alpha-3":"COD",numeric:"180"},{countryName:"Congo","alpha-2":"CG","alpha-3":"COG",numeric:"178"},{countryName:"Cook Island","alpha-2":"CK","alpha-3":"COK",numeric:"184"},{countryName:"Costa Rica","alpha-2":"CR","alpha-3":"CRI",numeric:"188"},{countryName:"Côte d'Ivoire","alpha-2":"CI","alpha-3":"CIV",numeric:"384"},{countryName:"Croatia","alpha-2":"HR","alpha-3":"HRV",numeric:"191"},{countryName:"Cuba","alpha-2":"CU","alpha-3":"CUB",numeric:"192"},{countryName:"Curaçao","alpha-2":"CW","alpha-3":"CUW",numeric:"531"},{countryName:"Cyprus","alpha-2":"CY","alpha-3":"CYP",numeric:"196"},{countryName:"Czech Republic","alpha-2":"CZ","alpha-3":"CZE",numeric:"203"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Denmark","alpha-2":"DK","alpha-3":"DNK",numeric:"208"},{countryName:"Djibouti","alpha-2":"DJ","alpha-3":"DJI",numeric:"262"},{countryName:"Dominica","alpha-2":"DM","alpha-3":"DMA",numeric:"212"},{countryName:"Dominican Republic","alpha-2":"DO","alpha-3":"DOM",numeric:"214"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Ecuador","alpha-2":"EC","alpha-3":"ECU",numeric:"218"},{countryName:"Egypt","alpha-2":"EG","alpha-3":"EGY",numeric:"818"},{countryName:"El Salvador","alpha-2":"SV","alpha-3":"SLV",numeric:"222"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Equatorial Guinea","alpha-2":"GQ","alpha-3":"GNQ",numeric:"226"},{countryName:"Eritrea","alpha-2":"ER","alpha-3":"ERI",numeric:"232"},{countryName:"Estonia","alpha-2":"EE","alpha-3":"EST",numeric:"233"},{countryName:"Eswatini","alpha-2":"SZ","alpha-3":"SWZ",numeric:"748"},{countryName:"Ethiopia","alpha-2":"ET","alpha-3":"ETH",numeric:"231"},{countryName:"Falkland Islands","alpha-2":"FK","alpha-3":"FLK",numeric:"238"},{countryName:"Faroe Island","alpha-2":"FO","alpha-3":"FRO",numeric:"234"},{countryName:"Fiji","alpha-2":"FJ","alpha-3":"FJI",numeric:"242"},{countryName:"Finland","alpha-2":"FI","alpha-3":"FIN",numeric:"246"},{countryName:"France","alpha-2":"FR","alpha-3":"FRA",numeric:"250"},{countryName:"French Guiana","alpha-2":"GF","alpha-3":"GUF",numeric:"254"},{countryName:"French Polyesia","alpha-2":"PF","alpha-3":"PYF",numeric:"258"},{countryName:"French Southern Territories","alpha-2":"TF","alpha-3":"ATF",numeric:"260"},{countryName:"Gabon","alpha-2":"GA","alpha-3":"GAB",numeric:"266"},{countryName:"Gambia","alpha-2":"GM","alpha-3":"GMB",numeric:"270"},{countryName:"Georgia","alpha-2":"GE","alpha-3":"GEO",numeric:"268"},{countryName:"Germany","alpha-2":"DE","alpha-3":"DEU",numeric:"276"},{countryName:"Ghana","alpha-2":"GH","alpha-3":"GHA",numeric:"288"},{countryName:"Gibraltar","alpha-2":"GI","alpha-3":"GIB",numeric:"292"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Greece","alpha-2":"GR","alpha-3":"GRC",numeric:"300"},{countryName:"Greenland","alpha-2":"GL","alpha-3":"GRL",numeric:"304"},{countryName:"Grenada","alpha-2":"GD","alpha-3":"GRD",numeric:"308"},{countryName:"Guadeloupe","alpha-2":"GP","alpha-3":"GLP",numeric:"312"},{countryName:"Guam","alpha-2":"GU","alpha-3":"GUM",numeric:"316"},{countryName:"Guatemala","alpha-2":"GT","alpha-3":"GTM",numeric:"320"},{countryName:"Guernsey","alpha-2":"GG","alpha-3":"GGY",numeric:"831"},{countryName:"Guinea","alpha-2":"GN","alpha-3":"GIN",numeric:"324"},{countryName:"Guinea-Bissau","alpha-2":"GW","alpha-3":"GNB",numeric:"624"},{countryName:"Guyana","alpha-2":"GY","alpha-3":"GUY",numeric:"328"},{countryName:"Haiti","alpha-2":"HT","alpha-3":"HTI",numeric:"332"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Heard Island and McDonald Islands","alpha-2":"HM","alpha-3":"HMD",numeric:"334"},{countryName:"Holy See","alpha-2":"VA","alpha-3":"VAT",numeric:"336"},{countryName:"Honduras","alpha-2":"HN","alpha-3":"HND",numeric:"340"},{countryName:"Hong Kong","alpha-2":"HK","alpha-3":"HKG",numeric:"344"},{countryName:"Hungary","alpha-2":"HU","alpha-3":"HUN",numeric:"348"},{countryName:"Iceland","alpha-2":"IS","alpha-3":"ISL",numeric:"352"},{countryName:"India","alpha-2":"IN","alpha-3":"IND",numeric:"356"},{countryName:"Indonesia","alpha-2":"ID","alpha-3":"IDN",numeric:"360"},{countryName:"Iran","alpha-2":"IR","alpha-3":"IRN",numeric:"364"},{countryName:"Iraq","alpha-2":"IQ","alpha-3":"IRQ",numeric:"368"},{countryName:"Ireland","alpha-2":"IE","alpha-3":"IRL",numeric:"372"},{countryName:"Isle of Man","alpha-2":"IM","alpha-3":"IMN",numeric:"833"},{countryName:"Israel","alpha-2":"IL","alpha-3":"ISR",numeric:"376"},{countryName:"Italy","alpha-2":"IT","alpha-3":"ITA",numeric:"380"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Jamaica","alpha-2":"JM","alpha-3":"JAM",numeric:"388"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Japan","alpha-2":"JP","alpha-3":"JPN",numeric:"392"},{countryName:"Jersey","alpha-2":"JE","alpha-3":"JEY",numeric:"832"},{countryName:"Jordan","alpha-2":"JO","alpha-3":"JOR",numeric:"400"},{countryName:"Kazakhstan","alpha-2":"KZ","alpha-3":"KAZ",numeric:"398"},{countryName:"Kenya","alpha-2":"KE","alpha-3":"KEN",numeric:"404"},{countryName:"Kiribati","alpha-2":"KI","alpha-3":"KIR",numeric:"296"},{countryName:"Korea (the Democratic People's Republic of)","alpha-2":"KP","alpha-3":"PRK",numeric:"408"},{countryName:"Korea (the Republic of)","alpha-2":"KR","alpha-3":"KOR",numeric:"410"},{countryName:"Kuwait","alpha-2":"KW","alpha-3":"KWT",numeric:"414"},{countryName:"Kyrgyzstan","alpha-2":"KG","alpha-3":"KGZ",numeric:"417"},{countryName:"Lao People's Democratic Republic (the)","alpha-2":"LA","alpha-3":"LAO",numeric:"418"},{countryName:"Latvia","alpha-2":"LV","alpha-3":"LVA",numeric:"428"},{countryName:"Lebanon","alpha-2":"LB","alpha-3":"LBN",numeric:"422"},{countryName:"Lesotho","alpha-2":"LS","alpha-3":"LSO",numeric:"426"},{countryName:"Liberia","alpha-2":"LR","alpha-3":"LBR",numeric:"430"},{countryName:"Libya","alpha-2":"LY","alpha-3":"LBY",numeric:"434"},{countryName:"Liechtenstein","alpha-2":"LI","alpha-3":"LIE",numeric:"438"},{countryName:"Lithuania","alpha-2":"LT","alpha-3":"LTU",numeric:"440"},{countryName:"Luxembourg","alpha-2":"LU","alpha-3":"LUX",numeric:"442"},{countryName:"Macao","alpha-2":"MO","alpha-3":"MAC",numeric:"446"},{countryName:"North Macedonia","alpha-2":"MK","alpha-3":"MKD",numeric:"807"},{countryName:"Madagascar","alpha-2":"MG","alpha-3":"MDG",numeric:"450"},{countryName:"Malawi","alpha-2":"MW","alpha-3":"MWI",numeric:"454"},{countryName:"Malaysia","alpha-2":"MY","alpha-3":"MYS",numeric:"458"},{countryName:"Maldives","alpha-2":"MV","alpha-3":"MDV",numeric:"462"},{countryName:"Mali","alpha-2":"ML","alpha-3":"MLI",numeric:"466"},{countryName:"Malta","alpha-2":"MT","alpha-3":"MLT",numeric:"470"},{countryName:"Marshall Islands (the)","alpha-2":"MH","alpha-3":"MHL",numeric:"584"},{countryName:"Martinique","alpha-2":"MQ","alpha-3":"MTQ",numeric:"474"},{countryName:"Mauritania","alpha-2":"MR","alpha-3":"MRT",numeric:"478"},{countryName:"Mauritius","alpha-2":"MU","alpha-3":"MUS",numeric:"480"},{countryName:"Mayotte","alpha-2":"YT","alpha-3":"MYT",numeric:"175"},{countryName:"Mexico","alpha-2":"MX","alpha-3":"MEX",numeric:"484"},{countryName:"Micronesia (Federated States of)","alpha-2":"FM","alpha-3":"FSM",numeric:"583"},{countryName:"Moldova (the Republic of)","alpha-2":"MD","alpha-3":"MDA",numeric:"498"},{countryName:"Monaco","alpha-2":"MC","alpha-3":"MCO ",numeric:"492"},{countryName:"Mongolia","alpha-2":"MN","alpha-3":"MNG",numeric:"496"},{countryName:"Montenegro","alpha-2":"ME","alpha-3":"MNE",numeric:"499"},{countryName:"Montserrat","alpha-2":"MS","alpha-3":"MSR",numeric:"500"},{countryName:"Morocco","alpha-2":"MA","alpha-3":"MAR",numeric:"504"},{countryName:"Mozambique","alpha-2":"MZ","alpha-3":"MOZ",numeric:"508"},{countryName:"Myanmar","alpha-2":"MM","alpha-3":"MMR",numeric:"104"},{countryName:"Namibia","alpha-2":"NA","alpha-3":"NAM",numeric:"516"},{countryName:"Nauru","alpha-2":"NR","alpha-3":"NRU",numeric:"520"},{countryName:"Nepal","alpha-2":"NP","alpha-3":"NPL",numeric:"524"},{countryName:"Netherlands","alpha-2":"NL","alpha-3":"NLD",numeric:"528"},{countryName:"New Caledonia","alpha-2":"NC","alpha-3":"NCL",numeric:"540"},{countryName:"New Zealand","alpha-2":"NZ","alpha-3":"NZL",numeric:"554"},{countryName:"Nicaragua","alpha-2":"NI","alpha-3":"NIC",numeric:"558"},{countryName:"Niger","alpha-2":"NE","alpha-3":"NER",numeric:"562"},{countryName:"Nigeria","alpha-2":"NG","alpha-3":"NGA",numeric:"566"},{countryName:"Niue","alpha-2":"NU","alpha-3":"NIU",numeric:"570"},{countryName:"Norfolk Island","alpha-2":"NF","alpha-3":"NFK",numeric:"574"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Northern Mariana Islands (the)","alpha-2":"MP","alpha-3":"MNP",numeric:"580"},{countryName:"Norway","alpha-2":"NO","alpha-3":"NOR",numeric:"578"},{countryName:"Oman","alpha-2":"OM","alpha-3":"OMN",numeric:"512"},{countryName:"Pakistan","alpha-2":"PK","alpha-3":"PAK",numeric:"586"},{countryName:"Palau","alpha-2":"PW","alpha-3":"PLW",numeric:"585"},{countryName:"Palestine, State of","alpha-2":"PS","alpha-3":"PSE",numeric:"275"},{countryName:"Panama","alpha-2":"PA","alpha-3":"PAN",numeric:"591"},{countryName:"Papua New Guinea","alpha-2":"PG","alpha-3":"PNG",numeric:"598"},{countryName:"Paraguay","alpha-2":"PY","alpha-3":"PRY",numeric:"600"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Peru","alpha-2":"PE","alpha-3":"PER",numeric:"604"},{countryName:"Phillippines (the)","alpha-2":"PH","alpha-3":"PHL",numeric:"608"},{countryName:"Pitcairn","alpha-2":"PN","alpha-3":"PCN",numeric:"612"},{countryName:"Poland","alpha-2":"PL","alpha-3":"POL",numeric:"616"},{countryName:"Portugal","alpha-2":"PT","alpha-3":"PRT",numeric:"620"},{countryName:"Puerto Rico","alpha-2":"PR","alpha-3":"PRI",numeric:"630"},{countryName:"Qatar","alpha-2":"QA","alpha-3":"QAT",numeric:"634"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Réunion","alpha-2":"RE","alpha-3":"REU",numeric:"638"},{countryName:"Romania","alpha-2":"RO","alpha-3":"ROU",numeric:"642"},{countryName:"Russian Federation (the)","alpha-2":"RU","alpha-3":"RUS",numeric:"643"},{countryName:"Rwanda","alpha-2":"RW","alpha-3":"RWA",numeric:"646"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Saint Barthélemy","alpha-2":"BL","alpha-3":"BLM",numeric:"652"},{countryName:"Saint Helena, Ascension Island, Traistan da Cunha","alpha-2":"SH","alpha-3":"SHN",numeric:"654"},{countryName:"Saint Kitts and Nevis","alpha-2":"KN","alpha-3":"KNA",numeric:"659"},{countryName:"Saint Lucia","alpha-2":"LC","alpha-3":"LCA",numeric:"662"},{countryName:"Saint Martin","alpha-2":"MF","alpha-3":"MAF",numeric:"663"},{countryName:"Saint Pierre and Miquelon","alpha-2":"PM","alpha-3":"SPM",numeric:"666"},{countryName:"Saint Vincent and the Grenadines","alpha-2":"VC","alpha-3":"VCT",numeric:"670"},{countryName:"Samoa","alpha-2":"WS","alpha-3":"WSM",numeric:"882"},{countryName:"San Marino","alpha-2":"SM","alpha-3":"SMR",numeric:"674"},{countryName:"Sao Tome and Principe","alpha-2":"ST","alpha-3":"STP",numeric:"678"},{countryName:"Saudi Arabia","alpha-2":"SA","alpha-3":"SAU",numeric:"682"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Senegal","alpha-2":"SN","alpha-3":"SEN",numeric:"686"},{countryName:"Serbia","alpha-2":"RS","alpha-3":"SRB",numeric:"688"},{countryName:"Seychelles","alpha-2":"SC","alpha-3":"SYC",numeric:"690"},{countryName:"Sierra Leone","alpha-2":"SL","alpha-3":"SLE",numeric:"694"},{countryName:"Singapore","alpha-2":"SG","alpha-3":"SGP",numeric:"702"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Sint Maarten","alpha-2":"SX","alpha-3":"SXM",numeric:"534"},{countryName:"Slovakia","alpha-2":"SK","alpha-3":"SVK",numeric:"703"},{countryName:"Slovenia","alpha-2":"SI","alpha-3":"SVN",numeric:"705"},{countryName:"Solomon Islands","alpha-2":"SB","alpha-3":"SLB",numeric:"090"},{countryName:"Somalia","alpha-2":"SO","alpha-3":"SOM",numeric:"706"},{countryName:"South Africa","alpha-2":"ZA","alpha-3":"ZAF",numeric:"710"},{countryName:"South Gerogia and the South Sandwich Islands","alpha-2":"GS","alpha-3":"SGS",numeric:"239"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"South Sudan","alpha-2":"SS","alpha-3":"SSD",numeric:"728"},{countryName:"Spain","alpha-2":"ES","alpha-3":"ESP",numeric:"724"},{countryName:"Sri Lanka","alpha-2":"LK","alpha-3":"LKA",numeric:"144"},{countryName:"Sudan (the)","alpha-2":"SD","alpha-3":"SDN",numeric:"729"},{countryName:"Suriname","alpha-2":"SR","alpha-3":"SUR",numeric:"740"},{countryName:"Svalbard, Jan Mayen","alpha-2":"SJ","alpha-3":"SJM",numeric:"744"},{countryName:"Sweden","alpha-2":"SE","alpha-3":"SWE",numeric:"752"},{countryName:"Switzerland","alpha-2":"CH","alpha-3":"CHE",numeric:"756"},{countryName:"Syrian Arab Republic (the)","alpha-2":"SY","alpha-3":"SYR",numeric:"760"},{countryName:"Taiwan","alpha-2":"TW","alpha-3":"TWN",numeric:"158"},{countryName:"Tajikistan","alpha-2":"TJ","alpha-3":"TJK",numeric:"762"},{countryName:"Tanzania, the United Republic of","alpha-2":"TZ","alpha-3":"TZA",numeric:"834"},{countryName:"Thailand","alpha-2":"TH","alpha-3":"THA",numeric:"764"},{countryName:"Timor-Leste","alpha-2":"TL","alpha-3":"TLS",numeric:"626"},{countryName:"Togo","alpha-2":"TG","alpha-3":"TGO",numeric:"768"},{countryName:"Tokelau","alpha-2":"TK","alpha-3":"TKL",numeric:"772"},{countryName:"Tonga","alpha-2":"TO","alpha-3":"TON",numeric:"776"},{countryName:"Trinidad and Tobago","alpha-2":"TT","alpha-3":"TTO",numeric:"780"},{countryName:"Tunisia","alpha-2":"TN","alpha-3":"TUN",numeric:"788"},{countryName:"Turkey","alpha-2":"TR","alpha-3":"TUR",numeric:"792"},{countryName:"Turkmenistan","alpha-2":"TM","alpha-3":"TKM",numeric:"795"},{countryName:"Turks and Caicos Islands (the)","alpha-2":"TC","alpha-3":"TCA",numeric:"796"},{countryName:"Tuvalu","alpha-2":"TV","alpha-3":"TUV",numeric:"798"},{countryName:"Uganda","alpha-2":"UG","alpha-3":"UGA",numeric:"800"},{countryName:"Ukraine","alpha-2":"UA","alpha-3":"UKR",numeric:"804"},{countryName:"United Arab Emirates","alpha-2":"AE","alpha-3":"ARE",numeric:"784"},{countryName:"United Kingdom of Great Britain and Northern Ireland","alpha-2":"GB","alpha-3":"GBR",numeric:"826"},{countryName:"United States Minor Outlying Islands (the)","alpha-2":"UM","alpha-3":"UMI",numeric:"581"},{countryName:"United States of America","alpha-2":"US","alpha-3":"USA",numeric:"840"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Uruguay","alpha-2":"UY","alpha-3":"URY",numeric:"858"},{countryName:"Uzbekistan","alpha-2":"UZ","alpha-3":"UZB",numeric:"860"},{countryName:"Vanuatu","alpha-2":"VU","alpha-3":"VUT",numeric:"548"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Venezuela (Bolivarian Republic of)","alpha-2":"VE","alpha-3":"VEN",numeric:"862"},{countryName:"Viet Nam","alpha-2":"VN","alpha-3":"VNM",numeric:"704"},{countryName:"Virgin Islands (British)","alpha-2":"VG","alpha-3":"VGB",numeric:"092"},{countryName:"Virgin Islands (U.S.)","alpha-2":"VI","alpha-3":"VIR",numeric:"850"},{countryName:"VERWIJZING","alpha-2":"","alpha-3":"",numeric:""},{countryName:"Wallis and Futuna","alpha-2":"WF","alpha-3":"WLF",numeric:"876"},{countryName:"Western Sahara","alpha-2":"EH","alpha-3":"ESH",numeric:"732"},{countryName:"Yemen","alpha-2":"YE","alpha-3":"YEM",numeric:"887"},{countryName:"Zambia","alpha-2":"ZM","alpha-3":"ZMB",numeric:"894"},{countryName:"Zimbabwe","alpha-2":"ZW","alpha-3":"ZWE",numeric:"716"}];

  return codeList;

}));
