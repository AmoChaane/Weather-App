import * as utils from './dateAndTime';
import './style.css'; 

const countries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};



function elems() {
    const weatherType = document.querySelector('.weatherType');
    const location = document.querySelector('.location');
    const timeDate = document.querySelector('.timeDate');
    const searchInput = document.querySelector('input');
    const celcius = document.querySelectorAll('.celcius');
    const fahrenheit = document.querySelectorAll('.fahrenheit');
    const temp = document.querySelector('.temp');
    const min = document.querySelector('.min');
    const max = document.querySelector('.max');
    const feelsLike = document.querySelector('.feelsLike');
    const windSpeed = document.querySelector('.windSpeed');
    const humidity = document.querySelector('.humidity');
    const pressure = document.querySelector('.pressure');
    const searchBtn = document.querySelector('.searchBtn');
    const loading = document.querySelector('.lds-spinner');
    const overlay = document.querySelector('#overlay');

    return {
        weatherType,
        location,
        timeDate,
        searchInput,
        celcius,
        fahrenheit,
        temp,
        min,
        max,
        feelsLike,
        windSpeed,
        humidity,
        pressure,
        searchBtn,
        loading,
        overlay
    }
}

function capitalize(str) {
    return str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}

window.onload = function() {
    elems().searchInput.value = 'London';
    elems().searchBtn.click();
    // elems().celcius.classList.add('selected');
    elems().celcius.forEach(i => i.classList.add('selected'))
    elems().searchInput.value = '';
}



async function getWeatherInfo(city) {
    elems().overlay.style.display = 'block';
    elems().loading.style.display = 'inline-block';
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01c4921ec264bb0180d423464076aedb&units=metric`, {mode: 'cors'});
    const urlF = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01c4921ec264bb0180d423464076aedb&units=imperial`, {mode: 'cors'});
    const result = await url.json();
    const result2 = await urlF.json();
    console.log('F', result2);
    console.log('C', result);
    return {result, result2} // This is the json object with all the info we need
}


let objC;
let objF;

elems().searchBtn.addEventListener('click', async e => {
    // elems().loading.style.display = 'inline-block';
    // elems().celcius.click();
    const city = elems().searchInput.value;
    // console.log(city);
    const obj = await getWeatherInfo(city);
    objC = {...obj.result};
    objF = {...obj.result2};
    elems().celcius.forEach(i => i.click());

    elems().loading.style.display = 'none';
    elems().overlay.style.display = 'none';
    elems().weatherType.textContent = capitalize(obj.result.weather[0].description);
    const country = obj.result.sys.country;
    elems().location.innerHTML = `${obj.result.name}, ${countries[country]}`;
    // elems().timeDate.innerHTML = `${utils.formatDate(obj.result.dt, obj.result.timezone)}<br>${utils.formatTime(obj.result.dt, obj.result.timezone)}`;
    elems().timeDate.innerHTML = `${utils.formatDate(obj.result.dt, obj.result.timezone)}`;
    elems().temp.innerHTML = `${Math.round(obj.result.main.temp).toString()}&#x2103`;
    elems().min.innerHTML = `Min Temp:<br>${Math.round(obj.result.main.temp_min).toString()}&#x2103`;
    elems().max.innerHTML = `Max Temp:<br>${Math.round(obj.result.main.temp_max).toString()}&#x2103`;
    elems().feelsLike.innerHTML = `Feels Like:<br>${Math.round(obj.result.main.feels_like).toString()}&#x2103`;
    elems().humidity.innerHTML = `Humidity:<br>${Math.round(obj.result.main.humidity).toString()}%`;
    elems().windSpeed.innerHTML = `Wind Speed:<br>${((obj.result2.wind.speed).toFixed(1)).toString()}km/h`;
    elems().pressure.innerHTML = `Pressure:<br>${((obj.result.main.pressure / 10).toFixed(1)).toString()} kPa`;
    
});


window.addEventListener('click', e => {
    if(e.code == 'Enter') elems().searchBtn.click();
});

elems().celcius.forEach(i => {
    i.addEventListener('click', async e => {
        // elems().celcius.classList.add('selected');
        elems().celcius.forEach(i => i.classList.add('selected'))
        // elems().fahrenheit.classList.remove('selected');
        elems().fahrenheit.forEach(i => i.classList.remove('selected'))
        console.log(objC);
        elems().temp.innerHTML = await `${Math.round(objC.main.temp).toString()}&#x2103`;
        elems().min.innerHTML = `Min Temp:<br>${Math.round(objC.main.temp_min).toString()}&#x2103`;
        
        elems().max.innerHTML = `Max Temp:<br>${Math.round(objC.main.temp_max).toString()}&#x2103`;
        elems().feelsLike.innerHTML = `Feels Like:<br>${Math.round(objC.main.feels_like).toString()}&#x2103`;
    });
});

elems().fahrenheit.forEach(i => {
    i.addEventListener('click', e => {
        // console.log("clicked fahrenheit")
        // elems().celcius.classList.remove('selected');
        elems().celcius.forEach(i => i.classList.remove('selected'))
        // elems().fahrenheit.classList.add('selected');
        elems().fahrenheit.forEach(i => i.classList.add('selected'))
        elems().temp.innerHTML = `${Math.round(objF.main.temp).toString()}&#x2109;`;
        elems().min.innerHTML = `Min Temp:<br>${Math.round(objF.main.temp_min).toString()}&#x2109;`;
        elems().max.innerHTML = `Max Temp:<br>${Math.round(objF.main.temp_max).toString()}&#x2109;`;
        elems().feelsLike.innerHTML = `Feels Like:<br>${Math.round(objF.main.feels_like).toString()}&#x2109;`;
    })
});

