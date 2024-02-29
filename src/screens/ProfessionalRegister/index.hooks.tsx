import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { HeaderStepperCounter } from "@app/components/HeaderStepperCounter";

const phonePrefixOptions = [
  {
    label: "🇦🇫 Afghanistan (+93)",
    value: "+93",
  },
  {
    label: "🇦🇽 Åland Islands (+358)",
    value: "+358",
  },
  {
    label: "🇦🇱 Albania (+355)",
    value: "+355",
  },
  {
    label: "🇩🇿 Algeria (+213)",
    value: "+213",
  },
  {
    label: "🇦🇸 American Samoa (+1684)",
    value: "+1684",
  },
  {
    label: "🇦🇩 Andorra (+376)",
    value: "+376",
  },
  {
    label: "🇦🇴 Angola (+244)",
    value: "+244",
  },
  {
    label: "🇦🇮 Anguilla (+1264)",
    value: "+1264",
  },
  {
    label: "🇦🇶 Antarctica (+672)",
    value: "+672",
  },
  {
    label: "🇦🇬 Antigua and Barbuda (+1268)",
    value: "+1268",
  },
  {
    label: "🇦🇷 Argentina (+54)",
    value: "+54",
  },
  {
    label: "🇦🇲 Armenia (+374)",
    value: "+374",
  },
  {
    label: "🇦🇼 Aruba (+297)",
    value: "+297",
  },
  {
    label: "🇦🇺 Australia (+61)",
    value: "+61",
  },
  {
    label: "🇦🇹 Austria (+43)",
    value: "+43",
  },
  {
    label: "🇦🇿 Azerbaijan (+994)",
    value: "+994",
  },
  {
    label: "🇧🇸 Bahamas (+1242)",
    value: "+1242",
  },
  {
    label: "🇧🇭 Bahrain (+973)",
    value: "+973",
  },
  {
    label: "🇧🇩 Bangladesh (+880)",
    value: "+880",
  },
  {
    label: "🇧🇧 Barbados (+1246)",
    value: "+1246",
  },
  {
    label: "🇧🇾 Belarus (+375)",
    value: "+375",
  },
  {
    label: "🇧🇪 Belgium (+32)",
    value: "+32",
  },
  {
    label: "🇧🇿 Belize (+501)",
    value: "+501",
  },
  {
    label: "🇧🇯 Benin (+229)",
    value: "+229",
  },
  {
    label: "🇧🇲 Bermuda (+1441)",
    value: "+1441",
  },
  {
    label: "🇧🇹 Bhutan (+975)",
    value: "+975",
  },
  {
    label: "🇧🇴 Bolivia (+591)",
    value: "+591",
  },
  {
    label: "🇧🇦 Bosnia and Herzegovina (+387)",
    value: "+387",
  },
  {
    label: "🇧🇼 Botswana (+267)",
    value: "+267",
  },
  {
    label: "🇧🇻 Bouvet Island (+47)",
    value: "+47",
  },
  {
    label: "🇧🇷 Brazil (+55)",
    value: "+55",
  },
  {
    label: "🇮🇴 British Indian Ocean Territory (+246)",
    value: "+246",
  },
  {
    label: "🇧🇳 Brunei Darussalam (+673)",
    value: "+673",
  },
  {
    label: "🇧🇬 Bulgaria (+359)",
    value: "+359",
  },
  {
    label: "🇧🇫 Burkina Faso (+226)",
    value: "+226",
  },
  {
    label: "🇧🇮 Burundi (+257)",
    value: "+257",
  },
  {
    label: "🇰🇭 Cambodia (+855)",
    value: "+855",
  },
  {
    label: "🇨🇲 Cameroon (+237)",
    value: "+237",
  },
  {
    label: "🇨🇦 Canada (+1)",
    value: "+1",
  },
  {
    label: "🇨🇻 Cape Verde (+238)",
    value: "+238",
  },
  {
    label: "🇰🇾 Cayman Islands (+345)",
    value: "+345",
  },
  {
    label: "🇨🇫 Central African Republic (+236)",
    value: "+236",
  },
  {
    label: "🇹🇩 Chad (+235)",
    value: "+235",
  },
  {
    label: "🇨🇱 Chile (+56)",
    value: "+56",
  },
  {
    label: "🇨🇳 China (+86)",
    value: "+86",
  },
  {
    label: "🇨🇽 Christmas Island (+61)",
    value: "+61",
  },
  {
    label: "🇨🇨 Cocos (Keeling) Islands (+61)",
    value: "+61",
  },
  {
    label: "🇨🇴 Colombia (+57)",
    value: "+57",
  },
  {
    label: "🇰🇲 Comoros (+269)",
    value: "+269",
  },
  {
    label: "🇨🇬 Congo (+242)",
    value: "+242",
  },
  {
    label: "🇨🇩 Democratic Republic of Congo (+243)",
    value: "+243",
  },
  {
    label: "🇨🇰 Cook Islands (+682)",
    value: "+682",
  },
  {
    label: "🇨🇷 Costa Rica (+506)",
    value: "+506",
  },
  {
    label: "🇨🇮 Cote d'Ivoire (+225)",
    value: "+225",
  },
  {
    label: "🇭🇷 Croatia (+385)",
    value: "+385",
  },
  {
    label: "🇨🇺 Cuba (+53)",
    value: "+53",
  },
  {
    label: "🇨🇾 Cyprus (+357)",
    value: "+357",
  },
  {
    label: "🇨🇿 Czech Republic (+420)",
    value: "+420",
  },
  {
    label: "🇩🇰 Denmark (+45)",
    value: "+45",
  },
  {
    label: "🇩🇯 Djibouti (+253)",
    value: "+253",
  },
  {
    label: "🇩🇲 Dominica (+1767)",
    value: "+1767",
  },
  {
    label: "🇩🇴 Dominican Republic (+1849)",
    value: "+1849",
  },
  {
    label: "🇪🇨 Ecuador (+593)",
    value: "+593",
  },
  {
    label: "🇪🇬 Egypt (+20)",
    value: "+20",
  },
  {
    label: "🇸🇻 El Salvador (+503)",
    value: "+503",
  },
  {
    label: "🇬🇶 Equatorial Guinea (+240)",
    value: "+240",
  },
  {
    label: "🇪🇷 Eritrea (+291)",
    value: "+291",
  },
  {
    label: "🇪🇪 Estonia (+372)",
    value: "+372",
  },
  {
    label: "🇪🇹 Ethiopia (+251)",
    value: "+251",
  },
  {
    label: "🇫🇰 Falkland Islands (Malvinas) (+500)",
    value: "+500",
  },
  {
    label: "🇫🇴 Faroe Islands (+298)",
    value: "+298",
  },
  {
    label: "🇫🇯 Fiji (+679)",
    value: "+679",
  },
  {
    label: "🇫🇮 Finland (+358)",
    value: "+358",
  },
  {
    label: "🇫🇷 France (+33)",
    value: "+33",
  },
  {
    label: "🇬🇫 French Guiana (+594)",
    value: "+594",
  },
  {
    label: "🇵🇫 French Polynesia (+689)",
    value: "+689",
  },
  {
    label: "🇹🇫 French Southern Territories (+262)",
    value: "+262",
  },
  {
    label: "🇬🇦 Gabon (+241)",
    value: "+241",
  },
  {
    label: "🇬🇲 Gambia (+220)",
    value: "+220",
  },
  {
    label: "🇬🇪 Georgia (+995)",
    value: "+995",
  },
  {
    label: "🇩🇪 Germany (+49)",
    value: "+49",
  },
  {
    label: "🇬🇭 Ghana (+233)",
    value: "+233",
  },
  {
    label: "🇬🇮 Gibraltar (+350)",
    value: "+350",
  },
  {
    label: "🇬🇷 Greece (+30)",
    value: "+30",
  },
  {
    label: "🇬🇱 Greenland (+299)",
    value: "+299",
  },
  {
    label: "🇬🇩 Grenada (+1473)",
    value: "+1473",
  },
  {
    label: "🇬🇵 Guadeloupe (+590)",
    value: "+590",
  },
  {
    label: "🇬🇺 Guam (+1671)",
    value: "+1671",
  },
  {
    label: "🇬🇹 Guatemala (+502)",
    value: "+502",
  },
  {
    label: "🇬🇬 Guernsey (+44)",
    value: "+44",
  },
  {
    label: "🇬🇳 Guinea (+224)",
    value: "+224",
  },
  {
    label: "🇬🇼 Guinea-Bissau (+245)",
    value: "+245",
  },
  {
    label: "🇬🇾 Guyana (+592)",
    value: "+592",
  },
  {
    label: "🇭🇹 Haiti (+509)",
    value: "+509",
  },
  {
    label: "🇭🇲 Heard Island / Mcdonald Islands (+672)",
    value: "+672",
  },
  {
    label: "🇻🇦 Vatican City (+379)",
    value: "+379",
  },
  {
    label: "🇭🇳 Honduras (+504)",
    value: "+504",
  },
  {
    label: "🇭🇰 Hong Kong (+852)",
    value: "+852",
  },
  {
    label: "🇭🇺 Hungary (+36)",
    value: "+36",
  },
  {
    label: "🇮🇸 Iceland (+354)",
    value: "+354",
  },
  {
    label: "🇮🇳 India (+91)",
    value: "+91",
  },
  {
    label: "🇮🇩 Indonesia (+62)",
    value: "+62",
  },
  {
    label: "🇮🇷 Iran (+98)",
    value: "+98",
  },
  {
    label: "🇮🇶 Iraq (+964)",
    value: "+964",
  },
  {
    label: "🇮🇪 Ireland (+353)",
    value: "+353",
  },
  {
    label: "🇮🇲 Isle of Man (+44)",
    value: "+44",
  },
  {
    label: "🇮🇱 Israel (+972)",
    value: "+972",
  },
  {
    label: "🇮🇹 Italy (+39)",
    value: "+39",
  },
  {
    label: "🇯🇲 Jamaica (+1876)",
    value: "+1876",
  },
  {
    label: "🇯🇵 Japan (+81)",
    value: "+81",
  },
  {
    label: "🇯🇪 Jersey (+44)",
    value: "+44",
  },
  {
    label: "🇯🇴 Jordan (+962)",
    value: "+962",
  },
  {
    label: "🇰🇿 Kazakhstan (+7)",
    value: "+7",
  },
  {
    label: "🇰🇪 Kenya (+254)",
    value: "+254",
  },
  {
    label: "🇰🇮 Kiribati (+686)",
    value: "+686",
  },
  {
    label: "🇰🇵 Korea, North Korea (+850)",
    value: "+850",
  },
  {
    label: "🇰🇷 Korea, South Korea (+82)",
    value: "+82",
  },
  {
    label: "🇽🇰 Kosovo (+383)",
    value: "+383",
  },
  {
    label: "🇰🇼 Kuwait (+965)",
    value: "+965",
  },
  {
    label: "🇰🇬 Kyrgyzstan (+996)",
    value: "+996",
  },
  {
    label: "🇱🇦 Laos (+856)",
    value: "+856",
  },
  {
    label: "🇱🇻 Latvia (+371)",
    value: "+371",
  },
  {
    label: "🇱🇧 Lebanon (+961)",
    value: "+961",
  },
  {
    label: "🇱🇸 Lesotho (+266)",
    value: "+266",
  },
  {
    label: "🇱🇷 Liberia (+231)",
    value: "+231",
  },
  {
    label: "🇱🇾 Libyan Arab Jamahiriya (+218)",
    value: "+218",
  },
  {
    label: "🇱🇮 Liechtenstein (+423)",
    value: "+423",
  },
  {
    label: "🇱🇹 Lithuania (+370)",
    value: "+370",
  },
  {
    label: "🇱🇺 Luxembourg (+352)",
    value: "+352",
  },
  {
    label: "🇲🇴 Macao (+853)",
    value: "+853",
  },
  {
    label: "🇲🇰 Macedonia (+389)",
    value: "+389",
  },
  {
    label: "🇲🇬 Madagascar (+261)",
    value: "+261",
  },
  {
    label: "🇲🇼 Malawi (+265)",
    value: "+265",
  },
  {
    label: "🇲🇾 Malaysia (+60)",
    value: "+60",
  },
  {
    label: "🇲🇻 Maldives (+960)",
    value: "+960",
  },
  {
    label: "🇲🇱 Mali (+223)",
    value: "+223",
  },
  {
    label: "🇲🇹 Malta (+356)",
    value: "+356",
  },
  {
    label: "🇲🇭 Marshall Islands (+692)",
    value: "+692",
  },
  {
    label: "🇲🇶 Martinique (+596)",
    value: "+596",
  },
  {
    label: "🇲🇷 Mauritania (+222)",
    value: "+222",
  },
  {
    label: "🇲🇺 Mauritius (+230)",
    value: "+230",
  },
  {
    label: "🇾🇹 Mayotte (+262)",
    value: "+262",
  },
  {
    label: "🇲🇽 Mexico (+52)",
    value: "+52",
  },
  {
    label: "🇫🇲 Micronesia (+691)",
    value: "+691",
  },
  {
    label: "🇲🇩 Moldova (+373)",
    value: "+373",
  },
  {
    label: "🇲🇨 Monaco (+377)",
    value: "+377",
  },
  {
    label: "🇲🇳 Mongolia (+976)",
    value: "+976",
  },
  {
    label: "🇲🇪 Montenegro (+382)",
    value: "+382",
  },
  {
    label: "🇲🇸 Montserrat (+1664)",
    value: "+1664",
  },
  {
    label: "🇲🇦 Morocco (+212)",
    value: "+212",
  },
  {
    label: "🇲🇿 Mozambique (+258)",
    value: "+258",
  },
  {
    label: "🇲🇲 Myanmar (+95)",
    value: "+95",
  },
  {
    label: "🇳🇦 Namibia (+264)",
    value: "+264",
  },
  {
    label: "🇳🇷 Nauru (+674)",
    value: "+674",
  },
  {
    label: "🇳🇵 Nepal (+977)",
    value: "+977",
  },
  {
    label: "🇳🇱 Netherlands (+31)",
    value: "+31",
  },
  {
    label: "🇧🇶 Netherlands Antilles (+599)",
    value: "+599",
  },
  {
    label: "🇳🇨 New Caledonia (+687)",
    value: "+687",
  },
  {
    label: "🇳🇿 New Zealand (+64)",
    value: "+64",
  },
  {
    label: "🇳🇮 Nicaragua (+505)",
    value: "+505",
  },
  {
    label: "🇳🇪 Niger (+227)",
    value: "+227",
  },
  {
    label: "🇳🇬 Nigeria (+234)",
    value: "+234",
  },
  {
    label: "🇳🇺 Niue (+683)",
    value: "+683",
  },
  {
    label: "🇳🇫 Norfolk Island (+672)",
    value: "+672",
  },
  {
    label: "🇲🇵 Northern Mariana Islands (+1670)",
    value: "+1670",
  },
  {
    label: "🇳🇴 Norway (+47)",
    value: "+47",
  },
  {
    label: "🇴🇲 Oman (+968)",
    value: "+968",
  },
  {
    label: "🇵🇰 Pakistan (+92)",
    value: "+92",
  },
  {
    label: "🇵🇼 Palau (+680)",
    value: "+680",
  },
  {
    label: "🇵🇸 Palestine (+970)",
    value: "+970",
  },
  {
    label: "🇵🇦 Panama (+507)",
    value: "+507",
  },
  {
    label: "🇵🇬 Papua New Guinea (+675)",
    value: "+675",
  },
  {
    label: "🇵🇾 Paraguay (+595)",
    value: "+595",
  },
  {
    label: "🇵🇪 Peru (+51)",
    value: "+51",
  },
  {
    label: "🇵🇭 Philippines (+63)",
    value: "+63",
  },
  {
    label: "🇵🇳 Pitcairn (+64)",
    value: "+64",
  },
  {
    label: "🇵🇱 Poland (+48)",
    value: "+48",
  },
  {
    label: "🇵🇹 Portugal (+351)",
    value: "+351",
  },
  {
    label: "🇵🇷 Puerto Rico (+1939)",
    value: "+1939",
  },
  {
    label: "🇶🇦 Qatar (+974)",
    value: "+974",
  },
  {
    label: "🇷🇴 Romania (+40)",
    value: "+40",
  },
  {
    label: "🇷🇺 Russia (+7)",
    value: "+7",
  },
  {
    label: "🇷🇼 Rwanda (+250)",
    value: "+250",
  },
  {
    label: "🇷🇪 Reunion (+262)",
    value: "+262",
  },
  {
    label: "🇧🇱 Saint Barthelemy (+590)",
    value: "+590",
  },
  {
    label: "🇸🇭 Saint Helena / Ascension / Tristan Da Cunha (+290)",
    value: "+290",
  },
  {
    label: "🇰🇳 Saint Kitts and Nevis (+1869)",
    value: "+1869",
  },
  {
    label: "🇱🇨 Saint Lucia (+1758)",
    value: "+1758",
  },
  {
    label: "🇲🇫 Saint Martin (+590)",
    value: "+590",
  },
  {
    label: "🇵🇲 Saint Pierre and Miquelon (+508)",
    value: "+508",
  },
  {
    label: "🇻🇨 Saint Vincent and the Grenadines (+1784)",
    value: "+1784",
  },
  {
    label: "🇼🇸 Samoa (+685)",
    value: "+685",
  },
  {
    label: "🇸🇲 San Marino (+378)",
    value: "+378",
  },
  {
    label: "🇸🇹 Sao Tome and Principe (+239)",
    value: "+239",
  },
  {
    label: "🇸🇦 Saudi Arabia (+966)",
    value: "+966",
  },
  {
    label: "🇸🇳 Senegal (+221)",
    value: "+221",
  },
  {
    label: "🇷🇸 Serbia (+381)",
    value: "+381",
  },
  {
    label: "🇸🇨 Seychelles (+248)",
    value: "+248",
  },
  {
    label: "🇸🇱 Sierra Leone (+232)",
    value: "+232",
  },
  {
    label: "🇸🇬 Singapore (+65)",
    value: "+65",
  },
  {
    label: "🇸🇰 Slovakia (+421)",
    value: "+421",
  },
  {
    label: "🇸🇮 Slovenia (+386)",
    value: "+386",
  },
  {
    label: "🇸🇧 Solomon Islands (+677)",
    value: "+677",
  },
  {
    label: "🇸🇴 Somalia (+252)",
    value: "+252",
  },
  {
    label: "🇿🇦 South Africa (+27)",
    value: "+27",
  },
  {
    label: "🇸🇸 South Sudan (+211)",
    value: "+211",
  },
  {
    label: "🇬🇸 South Georgia / South Sandwich Islands (+500)",
    value: "+500",
  },
  {
    label: "🇪🇸 Spain (+34)",
    value: "+34",
  },
  {
    label: "🇱🇰 Sri Lanka (+94)",
    value: "+94",
  },
  {
    label: "🇸🇩 Sudan (+249)",
    value: "+249",
  },
  {
    label: "🇸🇷 Suriname (+597)",
    value: "+597",
  },
  {
    label: "🇸🇯 Svalbard and Jan Mayen (+47)",
    value: "+47",
  },
  {
    label: "🇸🇿 Swaziland (+268)",
    value: "+268",
  },
  {
    label: "🇸🇪 Sweden (+46)",
    value: "+46",
  },
  {
    label: "🇨🇭 Switzerland (+41)",
    value: "+41",
  },
  {
    label: "🇸🇾 Syrian Arab Republic (+963)",
    value: "+963",
  },
  {
    label: "🇹🇼 Taiwan (+886)",
    value: "+886",
  },
  {
    label: "🇹🇯 Tajikistan (+992)",
    value: "+992",
  },
  {
    label: "🇹🇿 Tanzania, United Republic of Tanzania (+255)",
    value: "+255",
  },
  {
    label: "🇹🇭 Thailand (+66)",
    value: "+66",
  },
  {
    label: "🇹🇱 Timor-Leste (+670)",
    value: "+670",
  },
  {
    label: "🇹🇬 Togo (+228)",
    value: "+228",
  },
  {
    label: "🇹🇰 Tokelau (+690)",
    value: "+690",
  },
  {
    label: "🇹🇴 Tonga (+676)",
    value: "+676",
  },
  {
    label: "🇹🇹 Trinidad and Tobago (+1868)",
    value: "+1868",
  },
  {
    label: "🇹🇳 Tunisia (+216)",
    value: "+216",
  },
  {
    label: "🇹🇷 Turkey (+90)",
    value: "+90",
  },
  {
    label: "🇹🇲 Turkmenistan (+993)",
    value: "+993",
  },
  {
    label: "🇹🇨 Turks and Caicos Islands (+1649)",
    value: "+1649",
  },
  {
    label: "🇹🇻 Tuvalu (+688)",
    value: "+688",
  },
  {
    label: "🇺🇬 Uganda (+256)",
    value: "+256",
  },
  {
    label: "🇺🇦 Ukraine (+380)",
    value: "+380",
  },
  {
    label: "🇦🇪 United Arab Emirates (+971)",
    value: "+971",
  },
  {
    label: "🇬🇧 United Kingdom (+44)",
    value: "+44",
  },
  {
    label: "🇺🇸 United States (+1)",
    value: "+1",
  },
  {
    label: "🇺🇾 Uruguay (+598)",
    value: "+598",
  },
  {
    label: "🇺🇿 Uzbekistan (+998)",
    value: "+998",
  },
  {
    label: "🇻🇺 Vanuatu (+678)",
    value: "+678",
  },
  {
    label: "🇻🇪 Venezuela (+58)",
    value: "+58",
  },
  {
    label: "🇻🇳 Vietnam (+84)",
    value: "+84",
  },
  {
    label: "🇻🇬 Virgin Islands, British (+1284)",
    value: "+1284",
  },
  {
    label: "🇻🇮 Virgin Islands, U.S. (+1340)",
    value: "+1340",
  },
  {
    label: "🇼🇫 Wallis and Futuna (+681)",
    value: "+681",
  },
  {
    label: "🇾🇪 Yemen (+967)",
    value: "+967",
  },
  {
    label: "🇿🇲 Zambia (+260)",
    value: "+260",
  },
  {
    label: "🇿🇼 Zimbabwe (+263)",
    value: "+263",
  },
];

const provincesOptions = [
  {
    label: "Agrigento",
    value: "AG",
  },
  {
    label: "Alessandria",
    value: "AL",
  },
  {
    label: "Ancona",
    value: "AN",
  },
  {
    label: "Aosta",
    value: "AO",
  },
  {
    label: "Arezzo",
    value: "AR",
  },
  {
    label: "Ascoli Piceno",
    value: "AP",
  },
  {
    label: "Asti",
    value: "AT",
  },
  {
    label: "Avellino",
    value: "AV",
  },
  {
    label: "Bari",
    value: "BA",
  },
  {
    label: "Barletta-Andria-Trani",
    value: "BT",
  },
  {
    label: "Belluno",
    value: "BL",
  },
  {
    label: "Benevento",
    value: "BN",
  },
  {
    label: "Bergamo",
    value: "BG",
  },
  {
    label: "Biella",
    value: "BI",
  },
  {
    label: "Bologna",
    value: "BO",
  },
  {
    label: "Bolzano",
    value: "BZ",
  },
  {
    label: "Brescia",
    value: "BS",
  },
  {
    label: "Brindisi",
    value: "BR",
  },
  {
    label: "Cagliari",
    value: "CA",
  },
  {
    label: "Caltanissetta",
    value: "CL",
  },
  {
    label: "Campobasso",
    value: "CB",
  },
  {
    label: "Carbonia-Iglesias",
    value: "CI",
  },
  {
    label: "Caserta",
    value: "CE",
  },
  {
    label: "Catania",
    value: "CT",
  },
  {
    label: "Catanzaro",
    value: "CZ",
  },
  {
    label: "Chieti",
    value: "CH",
  },
  {
    label: "Como",
    value: "CO",
  },
  {
    label: "Cosenza",
    value: "CS",
  },
  {
    label: "Cremona",
    value: "CR",
  },
  {
    label: "Crotone",
    value: "KR",
  },
  {
    label: "Cuneo",
    value: "CN",
  },
  {
    label: "Enna",
    value: "EN",
  },
  {
    label: "Fermo",
    value: "FM",
  },
  {
    label: "Ferrara",
    value: "FE",
  },
  {
    label: "Firenze",
    value: "FI",
  },
  {
    label: "Foggia",
    value: "FG",
  },
  {
    label: "Forlì-Cesena",
    value: "FC",
  },
  {
    label: "Frosinone",
    value: "FR",
  },
  {
    label: "Genova",
    value: "GE",
  },
  {
    label: "Gorizia",
    value: "GO",
  },
  {
    label: "Grosseto",
    value: "GR",
  },
  {
    label: "Imperia",
    value: "IM",
  },
  {
    label: "Isernia",
    value: "IS",
  },
  {
    label: "La Spezia",
    value: "SP",
  },
  {
    label: "L'Aquila",
    value: "AQ",
  },
  {
    label: "Latina",
    value: "LT",
  },
  {
    label: "Lecce",
    value: "LE",
  },
  {
    label: "Lecco",
    value: "LC",
  },
  {
    label: "Livorno",
    value: "LI",
  },
  {
    label: "Lodi",
    value: "LO",
  },
  {
    label: "Lucca",
    value: "LU",
  },
  {
    label: "Macerata",
    value: "MC",
  },
  {
    label: "Mantova",
    value: "MN",
  },
  {
    label: "Massa-Carrara",
    value: "MS",
  },
  {
    label: "Matera",
    value: "MT",
  },
];

const professionsOptions = [
  {
    label: "Medico",
    value: "Medico",
  },
  {
    label: "Infermiere",
    value: "Infermiere",
  },
  {
    label: "Chirurgo",
    value: "Chirurgo",
  },
  {
    label: "Dentista",
    value: "Dentista",
  },
  {
    label: "Farmacista",
    value: "Farmacista",
  },
  {
    label: "Ostetrica",
    value: "Ostetrica",
  },
  {
    label: "Fisioterapista",
    value: "Fisioterapista",
  },
  {
    label: "Psicologo",
    value: "Psicologo",
  },
  {
    label: "Dietista",
    value: "Dietista",
  },
  {
    label: "Radiologo",
    value: "Radiologo",
  },
  {
    label: "Biologo",
    value: "Biologo",
  },
  {
    label: "Nutrizionista",
    value: "Nutrizionista",
  },
  {
    label: "Optometrista",
    value: "Optometrista",
  },
  {
    label: "Logopedista",
    value: "Logopedista",
  },
  {
    label: "Podologo",
    value: "Podologo",
  },
  {
    label: "Terapista occupazionale",
    value: "Terapista occupazionale",
  },
  {
    label: "Ortopedico",
    value: "Ortopedico",
  },
  {
    label: "Anestesista",
    value: "Anestesista",
  },
  {
    label: "Cardiologo",
    value: "Cardiologo",
  },
  {
    label: "Neurologo",
    value: "Neurologo",
  },
];

interface ProfessionalRegisterFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  phonePrefix: string;
  phoneNumber: string;
  professionalPaperPhoto: any;
  professionalRegistrationNumber: string;
  province: string;
  specialization: string;
  officeLocation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  birthDate: yup.date().required("Inserisci la tua data di nascita"),
  phonePrefix: yup.string().required("Scegli il prefisso telefonico"),
  phoneNumber: yup.string().required("Inserisci il tuo numero di telefono"),
  professionalPaperPhoto: yup.mixed().required("Inserisci la tua foto"),
  professionalRegistrationNumber: yup
    .string()
    .required("Inserisci il tuo numero di registrazione"),
  province: yup.string().required("Inserisci la tua provincia"),
  specialization: yup.string().required("Inserisci la tua specializzazione"),
  officeLocation: yup.string().required("Inserisci la tua sede"),
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("Inserisci il tuo indirizzo email"),
  password: yup
    .string()
    .min(8, "La password deve contenere almeno 8 caratteri")
    .matches(
      /[A-Z]/,
      "La password deve contenere almeno un carattere maiuscolo",
    )
    .matches(/[0-9]/, "La password deve contenere almeno un numero")
    .matches(/[-!|]/, "La password deve contenere almeno uno tra -!|")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Le password non corrispondono")
    .required(),
});

const firstStepFieldKeys = [
  "firstName",
  "lastName",
  "birthDate",
  "phonePrefix",
  "phoneNumber",
] as const;
const secondStepFieldKeys = [
  "professionalPaperPhoto",
  "professionalRegistrationNumber",
  "province",
  "specialization",
  "officeLocation",
] as const;
const thirdStepFieldKeys = ["email", "password", "confirmPassword"] as const;

export const useProfessionalRegister = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const stepperIndex = useSelector(
    selectors.getProfessionalRegisterStepperCounter,
  );

  const formData = useForm<ProfessionalRegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: undefined,
      phonePrefix: "",
      phoneNumber: "",
      professionalPaperPhoto: undefined,
      professionalRegistrationNumber: "",
      province: "",
      specialization: "",
      officeLocation: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isDirty, isValid, isSubmitted, errors },
  } = formData;

  const [firstName, lastName, birthDate, phonePrefix, phoneNumber] = useWatch({
    control,
    name: firstStepFieldKeys,
  });

  const [
    professionalPaperPhoto,
    professionalRegistrationNumber,
    province,
    specialization,
    officeLocation,
  ] = useWatch({
    control,
    name: secondStepFieldKeys,
  });

  const [email, password, confirmPassword] = useWatch({
    control,
    name: thirdStepFieldKeys,
  });

  const step1Filled = useMemo(
    () =>
      Boolean(firstName) &&
      Boolean(lastName) &&
      Boolean(birthDate) &&
      Boolean(phonePrefix) &&
      Boolean(phoneNumber),
    [firstName, lastName, birthDate, phonePrefix, phoneNumber],
  );

  const step2Filled = useMemo(
    () =>
      Boolean(professionalPaperPhoto) &&
      Boolean(professionalRegistrationNumber) &&
      Boolean(province) &&
      Boolean(specialization) &&
      Boolean(officeLocation),
    [
      professionalPaperPhoto,
      professionalRegistrationNumber,
      province,
      specialization,
      officeLocation,
    ],
  );

  const step3Filled = useMemo(
    () => Boolean(email) && Boolean(password) && Boolean(confirmPassword),
    [email, password, confirmPassword],
  );

  const currentStepFilled = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return step1Filled;
      case 2:
        return step2Filled;
      case 3:
        return step3Filled;
      default:
        return false;
    }
  }, [stepperIndex, step1Filled, step2Filled, step3Filled]);

  const submitDisabled = useMemo(
    () =>
      !isDirty ||
      (isSubmitted && !isValid) ||
      !step1Filled ||
      !step2Filled ||
      !step3Filled,
    [isDirty, isSubmitted, isValid, step1Filled, step2Filled, step3Filled],
  );

  const canGoToNextStep = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return step1Filled;
      case 2:
        return step2Filled;
      case 3:
        return step3Filled;
      default:
        return false;
    }
  }, [stepperIndex, step1Filled, step2Filled, step3Filled]);

  const firstStepCompletionPercentage = useMemo(
    () =>
      ([firstName, lastName, birthDate, phonePrefix, phoneNumber].filter(
        Boolean,
      ).length /
        5) *
      100,
    [firstName, lastName, birthDate, phonePrefix, phoneNumber],
  );

  const secondStepCompletionPercentage = useMemo(() => {
    const fields = [
      professionalPaperPhoto,
      professionalRegistrationNumber,
      province,
      specialization,
      officeLocation,
    ];

    return (fields.filter(Boolean).length / fields.length) * 100;
  }, [
    professionalPaperPhoto,
    professionalRegistrationNumber,
    province,
    specialization,
    officeLocation,
  ]);

  const thirdStepCompletionPercentage = useMemo(() => {
    const fields = [email, password, confirmPassword];

    return (fields.filter(Boolean).length / fields.length) * 100;
  }, [email, password, confirmPassword]);

  const currentStepCompletionPercentage = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return firstStepCompletionPercentage;
      case 2:
        return secondStepCompletionPercentage;
      case 3:
        return thirdStepCompletionPercentage;
      default:
        return 0;
    }
  }, [
    stepperIndex,
    firstStepCompletionPercentage,
    secondStepCompletionPercentage,
    thirdStepCompletionPercentage,
  ]);

  const triggerProfessionalRegisterSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log(data);
      }),
    [dispatch, handleSubmit],
  );

  const onNextStepButtonPressed = useCallback(async () => {
    let stepValid = false;

    switch (stepperIndex) {
      case 1:
        // Trigger fields from step 1
        stepValid = await trigger(firstStepFieldKeys);
        break;
      case 2:
        // Trigger fields from step 2
        stepValid = await trigger(secondStepFieldKeys);
        break;
      case 3:
        // Trigger fields from step 3
        stepValid = await trigger(thirdStepFieldKeys);
        break;
      default:
        break;
    }

    if (stepValid) {
      dispatch(
        actions.setProfessionalRegisterStepperCounter(
          Math.min(stepperIndex + 1, 3),
        ),
      );
    }
  }, [dispatch, stepperIndex, trigger]);

  const onPreviousStepButtonPressed = useCallback(() => {
    dispatch(
      actions.setProfessionalRegisterStepperCounter(
        Math.max(stepperIndex - 1, 1),
      ),
    );
  }, [dispatch, stepperIndex]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderStepperCounter currentStep={stepperIndex} totalSteps={3} />
      ),
    });
  }, [navigation, stepperIndex]);

  return {
    formData,
    submitDisabled,
    phonePrefixOptions,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
  };
};
