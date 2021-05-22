
    $(document).ready(function() {
      let CountriesTreeCoverLoss = [];
      $.ajax({
            url: 'treeCoverLossByRegion.csv',
            dataType: 'text',
          }).done(successFunction);

      function successFunction(data) 
      { 
          var allRows = data.split(/\r?\n|\r/);
          CountriesTreeCoverLoss.push(allRows);
      }
      var country;
      $( "#Country" ).change(function() {
          var countryData = [];
          var countryYearlyData = [];
          country = this.value;
          for (let index = 0; index < CountriesTreeCoverLoss[0].length; index++) {
              if(CountriesTreeCoverLoss[0][index].includes(this.value))
              {
                countryData.push(CountriesTreeCoverLoss[0][index]);
              }
          }
          for (let index = 0; index < countryData.length; index++) {
              countryYearlyData[index] =countryData[index].split(',')
          }
          
          $('#global').css('display', 'none');
          function digits_count(n) {
            var count = 0;
            if (n >= 1) ++count;

            while (n / 10 >= 1) {
              n /= 10;
              ++count;
            }

            return count;
          }
          var digit = [];
          var check = "";
          for (let index = 0; index < countryYearlyData.length; index++) {
            countryYearlyData[index][2] = parseInt(countryYearlyData[index][2]);
          }
          for (let index = 0; index < countryYearlyData.length; index++) {
            if(digits_count(countryYearlyData[index][2])<7 && digits_count(countryYearlyData[index][2])>3)
              {
                countryYearlyData[index][2] = countryYearlyData[index][2]/1000;
                check="k";
              }
              else if(digits_count(countryYearlyData[index][2])>6)
              {
                countryYearlyData[index][2] = countryYearlyData[index][2]/1000000;
                check="m";
              }
          }
         
          let value;
          if(this.value === 'AFG')  {
                value='Afghanistan';
          }
          if(this.value === 'AGO')  {
                value='Angola';
          }
          if(this.value === 'AIA')  {
                value=='Anguilla';
          }
          if(this.value === 'ALA')  {
                value='Åland Islands';
          }
          if(this.value ==='ALB')  {
                value='Albania';
          }
          if(this.value ==='AND')  {
                value='Andorra';
          }
          if(this.value ==='ARE')  {
                value='United Arab Emirates';
          }
          if(this.value ==='ARG')  {
                value='Argentina';
          }
          if(this.value ==='ARM')  {
                value='Armenia';
          }
          if(this.value ==='ASM')  {
                value='American Samoa';
          }
          if(this.value ==='ATA')  {
                value='Antarctica';
          }
          if(this.value ==='ATF')  {
                value='French Southern Territories';
          }
          if(this.value ==='ATG')  {
                value='Antigua and Barbuda';
          }
          if(this.value ==='AUS')  {
                value='Australia';
          }
          if(this.value ==='AUT')  {
                value='Austria';
          }
          if(this.value ==='AZE')  {
                value='Azerbaijan';
          }
          if(this.value ==='BDI')  {
                value='Burundi';
          }
          if(this.value ==='BEL')  {
                value='Belgium';
          }
          if(this.value ==='BEN')  {
                value='Benin';
          }
          if(this.value ==='BES')  {
                value='Bonaire, Sint Eustatius and Saba';
          }
          if(this.value ==='BFA')  {
                value='Burkina Faso';
          }
          if(this.value ==='BGD')  {
                value='Bangladesh';
          }
          if(this.value ==='BGR')  {
                value='Bulgaria';
          }
          if(this.value ==='BHR')  {
                value='Bahrain';
          }
          if(this.value ==='BHS')  {
                value='Bahamas';
          }
          if(this.value ==='BIH')  {
                value='Bosnia and Herzegovina';
          }
          if(this.value ==='BLM')  {
                value='Saint Barthélemy';
          }
          if(this.value ==='BLR')  {
                value='Belarus';
          }
          if(this.value ==='BLZ')  {
                value='Belize';
          }
          if(this.value ==='BMU')  {
                value='Bermuda';
          }
          if(this.value ==='BOL')  {
                value='Bolivia (Plurinational State of)';
          }
          if(this.value ==='BRA')  {
                value='Brazil';
          }
          if(this.value ==='BRB')  {
                value='Barbados';
          }
          if(this.value ==='BRN')  {
                value='Brunei Darussalam';
          }
          if(this.value ==='BTN')  {
                value='Bhutan';
          }
          if(this.value ==='BVT')  {
                value='Bouvet Island';
          }
          if(this.value ==='BWA')  {
                value='Botswana';
          }
          if(this.value ==='CAF')  {
                value='Central African Republic';
          }
          if(this.value ==='CAN')  {
                value='Canada';
          }
          if(this.value ==='CCK')  {
                value='Cocos (Keeling) Islands';
          }
          if(this.value ==='CHE')  {
                value="Switzerland";
          }
          if(this.value ==='CHL')  {
                value='Chile';
          }
          if(this.value ==='CHN')  {
                value='China';
          }
          if(this.value ==='CIV')  {
                value="Côte d'Ivoire";
          }
          if(this.value ==='CMR')  {
                value='Cameroon';
          }
          if(this.value ==='COD')  {
                value='Congo, Democratic Republic of the';
          }
          if(this.value ==='COG')  {
                value='Congo';
          }
          if(this.value ==='COK')  {
                value='Cook Islands';
          }
          if(this.value ==='COL')  {
                value='Colombia';
          }
          if(this.value == 'COM') {
            value='Comoros';
          }
          if(this.value === 'CPV') {
              value='Cabo Verde';
          }
          if(this.value === 'CRI') {
              value='Costa Rica';
          }
          if(this.value === 'CUB') {
              value='Cuba';
          }
          if(this.value === 'CUW') {
              value='Curaçao';
          }
          if(this.value === 'CXR') {
              value='Christmas Island';
          }
          if(this.value === 'CYM') {
              value='Cayman Islands';
          }
          if(this.value === 'CYP') {
              value='Cyprus';
          }
          if(this.value === 'CZE') {
              value='Czechia';
          }
          if(this.value === 'DEU') {
              value='Germany';
          }
          if(this.value === 'DJI') {
              value='Djibouti';
          }
          if(this.value === 'DMA') {
              value='Dominica';
          }
          if(this.value === 'DNK') {
              value='Denmark';
          }
          if(this.value === 'DOM') {
              value='Dominican Republic';
          }
          if(this.value === 'DZA') {
              value='Algeria';
          }
          if(this.value === 'ECU') {
              value='Ecuador';
          }
          if(this.value === 'EGY') {
              value='Egypt';
          }
          if(this.value === 'ERI') {
              value='Eritrea';
          }
          if(this.value === 'ESH') {
              value='Western Sahara';
          }
          if(this.value === 'ESP') {
              value='Spain';
          }
          if(this.value === 'EST') {
              value='Estonia';
          }
          if(this.value === 'ETH') {
              value='Ethiopia';
          }
          if(this.value === 'FIN') {
              value='Finland';
          }
          if(this.value === 'FJI') {
              value='Fiji';
          }
          if(this.value === 'FLK') {
              value='Falkland Islands (Malvinas)';
          }
          if(this.value === 'FRA') {
              value='France';
          }
          if(this.value === 'FRO') {
              value='Faroe Islands';
          }
          if(this.value === 'FSM') {
              value='Micronesia (Federated States of)';
          }
          if(this.value === 'GAB') {
              value='Gabon';
          }
          if(this.value === 'GBR') {
              value='United Kingdom of Great Britain and Northern Ireland';
          }
          if(this.value === 'GEO') {
              value='Georgia';
          }
          if(this.value === 'GGY') {
              value='Guernsey';
          }
          if(this.value === 'GHA') {
              value='Ghana';
          }
          if(this.value === 'GIB') {
              value='Gibraltar';
          }
          if(this.value === 'GIN') {
              value='Guinea';
          }
          if(this.value === 'GLP') {
              value='Guadeloupe';
          }
          if(this.value === 'GMB') {
              value='Gambia';
          }
          if(this.value === 'GNB') {
              value='Guinea-Bissau';
          }
          if(this.value === 'GNQ') {
              value='Equatorial Guinea';
          }
          if(this.value === 'GRC') {
              value='Greece';
          }
          if(this.value === 'GRD') {
              value='Grenada';
          }
          if(this.value === 'GRL') {
              value='Greenland';
          }
          if(this.value === 'GTM') {
              value='Guatemala';
          }
          if(this.value === 'GUF') {
              value='French Guiana';
          }
          if(this.value === 'GUM') {
              value='Guam';
          }
          if(this.value === 'GUY') {
              value='Guyana';
          }
          if(this.value === 'HKG') {
              value='Hong Kong';
          }
          if(this.value === 'HMD') {
              value='Heard Island and McDonald Islands';
          }
          if(this.value === 'HND') {
              value='Honduras';
          }
          if(this.value === 'HRV') {
              value='Croatia';
          }
          if(this.value === 'HTI') {
              value='Haiti';
          }
          if(this.value === 'HUN')  {
              value='Hungary';
          }
          if(this.value === 'IDN')  {
              value='Indonesia';
          }
          if(this.value === 'IMN')  {
              value='Isle of Man';
          }
          if(this.value === 'IND')  {
              value='India';
          }
          if(this.value === 'IOT')  {
              value='British Indian Ocean Territory';
          }
          if(this.value === 'IRL')  {
              value='Ireland';
          }
          if(this.value === 'IRN')  {
              value='Iran (Islamic Republic of)';
          }
          if(this.value === 'IRQ')  {
              value='Iraq';
          }
          if(this.value === 'ISL')  {
              value='Iceland';
          }
          if(this.value === 'ISR')  {
              value='Israel';
          }
          if(this.value === 'ITA')  {
              value='Italy';
          }
          if(this.value === 'JAM')  {
              value='Jamaica';
          }
          if(this.value === 'JEY')  {
              value='Jersey';
          }
          if(this.value === 'JOR')  {
              value='Jordan';
          }
          if(this.value === 'JPN')  {
              value='Japan';
          }
          if(this.value === 'KAZ')  {
              value='Kazakhstan';
          }
          if(this.value === 'KEN')  {
              value='Kenya';
          }
          if(this.value === 'KGZ')  {
              value='Kyrgyzstan';
          }
          if(this.value === 'KHM')  {
              value='Cambodia';
          }
          if(this.value === 'KIR')  {
              value='Kiribati';
          }
          if(this.value === 'KNA')  {
              value='Saint Kitts and Nevis';
          }
          if(this.value === 'KOR')  {
              value='Korea, Republic of';
          }
          if(this.value === 'KWT')  {
              value='Kuwait';
          }
          if(this.value === 'LAO')  {
              value="Lao People's Democratic Republic";
          }
          if(this.value === 'LBN')  {
              value='Lebanon';
          }
          if(this.value === 'LBR')  {
              value='Liberia';
          }
          if(this.value === 'LBY')  {
              value='Libya';
          }
          if(this.value === 'LCA')  {
              value='Saint Lucia';
          }
          if(this.value === 'LIE')  {
              value='Liechtenstein';
          }
          if(this.value === 'LKA')  {
              value='Sri Lanka';
          }
          if(this.value === 'LSO')  {
              value='Lesotho';
          }
          if(this.value === 'LTU')  {
              value='Lithuania';
          }
          if(this.value === 'LUX')  {
              value='Luxembourg';
          }
          if(this.value === 'LVA')  {
              value='Latvia';
          }
          if(this.value === 'MAC')  {
              value='Macao';
          }
          if(this.value === 'MAF')  {
              value='Saint Martin (French part)';
          }
          if(this.value === 'MAR')  {
              value='Morocco';
          }
          if(this.value === 'MCO')  {
              value='Monaco';
          }
          if(this.value === 'MDA')  {
              value='Moldova, Republic of';
          }
          if(this.value === 'MDG')  {
              value='Madagascar';
          }
          if(this.value === 'MDV')  {
              value='Maldives';
          }
          if(this.value === 'MEX')  {
              value='Mexico';
          }
          if(this.value === 'MHL')  {
              value='Marshall Islands';
          }
          if(this.value === 'MKD')  {
              value='North Macedonia';
          }
          if(this.value === 'MLI')  {
              value='Mali';
          }
          if(this.value === 'MLT')  {
              value='Malta';
          }
          if(this.value === 'MMR')  {
              value='Myanmar';
          }
          if(this.value === 'MNE')  {
              value='Montenegro';
          }
          if(this.value === 'MNG')  {
              value='Mongolia';
          }
          if(this.value === 'MNP')  {
              value='Northern Mariana Islands';
          }
          if(this.value === 'MOZ') {  
                value='Mozambique';
          }
          if(this.value === 'MRT') {  
                value='Mauritania';
          }
          if(this.value === 'MSR') {  
                value='Montserrat';
          }
          if(this.value === 'MTQ') {  
                value='Martinique';
          }
          if(this.value === 'MUS') {  
                value='Mauritius';
          }
          if(this.value === 'MWI') {  
                value='Malawi';
          }
          if(this.value === 'MYS') {  
                value='Malaysia';
          }
          if(this.value === 'MYT') {  
                value='Mayotte';
          }
          if(this.value === 'NAM') {  
                value='Namibia';
          }
          if(this.value === 'NCL') {  
                value='New Caledonia';
          }
          if(this.value === 'NER') {  
                value='Niger';
          }
          if(this.value === 'NFK') {  
                value='Norfolk Island';
          }
          if(this.value === 'NGA') {  
                value='Nigeria';
          }
          if(this.value === 'NIC') {  
                value='Nicaragua';
          }
          if(this.value === 'NIU') {  
                value='Niue';
          }
          if(this.value === 'NLD') {  
                value='Netherlands';
          }
          if(this.value === 'NOR') {  
                value='Norway';
          }
          if(this.value === 'NPL') {  
                value='Nepal';
          }
          if(this.value === 'NRU') {  
                value='Nauru';
          }
          if(this.value === 'NZL') {  
                value='New Zealand';
          }
          if(this.value === 'OMN') {  
                value='Oman';
          }
          if(this.value === 'PAK') {  
                value='Pakistan';
          }
          if(this.value === 'PAN') {  
                value='Panama';
          }
          if(this.value === 'PCN') {  
                value='Pitcairn';
          }
          if(this.value === 'PER') {  
                value='Peru';
          }
          if(this.value === 'PHL') {  
                value='Philippines';
          }
          if(this.value === 'PLW') {  
                value='Palau';
          }
          if(this.value === 'PNG') {  
                value='Papua New Guinea';
          }
          if(this.value === 'POL') {  
                value='Poland';
          }
          if(this.value === 'PRI') {  
                value='Puerto Rico';
          }
          if(this.value === 'PRK') {  
                value="Korea (Democratic People's Republic of)";
          }
          if(this.value === 'PRT') {  
                value='Portugal';
          }
          if(this.value === 'PRY') {  
                value='Paraguay';
          }
          if(this.value === 'PSE') {  
                value='Palestine, State of';
          }
          if(this.value === 'PYF') {  
                value='French Polynesia';
          }
          if(this.value === 'QAT') {  
                value='Qatar';
          }
          if(this.value === 'REU') {  
                value='Réunion';
          }
          if(this.value === 'ROU') {  
                value='Romania';
          }
          if(this.value === 'RUS') {  
                value='Russian Federation';
          }
          if(this.value === 'RWA') {  
                value='Rwanda';
          }
          if(this.value === 'SAU') {  
                value='Saudi Arabia';
          }
          if(this.value === 'SDN') {  
                value='Sudan';
          }
          if(this.value === 'SEN') {  
                value='Senegal';
          }
          if(this.value === 'SGP') {  
                value='Singapore';
          }
          if(this.value === 'SGS') {  
                value='South Georgia and the South Sandwich Islands';
          }
          if(this.value === 'SHN') {  
                value='Saint Helena, Ascension and Tristan da Cunha';
          }
          if(this.value === 'SJM') {  
                value='Svalbard and Jan Mayen';
          }
          if(this.value === 'SLB') {  
                value='Solomon Islands';
          }
          if(this.value === 'SLE') {  
                value='Sierra Leone';
          }          
          if(this.value === 'SLV') {
              value='El Salvador';
          }
          if(this.value === 'SMR') {
              value='San Marino';
          }
          if(this.value === 'SOM') {
              value='Somalia';
          }
          if(this.value === 'SPM') {
              value='Saint Pierre and Miquelon';
          }
          if(this.value === 'SRB') {
              value='Serbia';
          }
          if(this.value === 'SSD') {
              value='South Sudan';
          }
          if(this.value === 'STP') {
              value='Sao Tome and Principe';
          }
          if(this.value === 'SUR') {
              value='Suriname';
          }
          if(this.value === 'SVK') {
              value='Slovakia';
          }
          if(this.value === 'SVN') {
              value='Slovenia';
          }
          if(this.value === 'SWE') {
              value='Sweden';
          }
          if(this.value === 'SWZ') {
              value='Eswatini';
          }
          if(this.value === 'SXM') {
              value='Sint Maarten (Dutch part)';
          }
          if(this.value === 'SYC') {
              value='Seychelles';
          }
          if(this.value === 'SYR') {
              value='Syrian Arab Republic';
          }
          if(this.value === 'TCA') {
              value='Turks and Caicos Islands';
          }
          if(this.value === 'TCD') {
              value='Chad';
          }
          if(this.value === 'TGO') {
              value='Togo';
          }
          if(this.value === 'THA') {
              value='Thailand';
          }
          if(this.value === 'TJK') {
              value='Tajikistan';
          }
          if(this.value === 'TKL') {
              value='Tokelau';
          }
          if(this.value === 'TKM') {
              value='Turkmenistan';
          }
          if(this.value === 'TLS') {
              value='Timor-Leste';
          }
          if(this.value === 'TON') {
              value='Tonga';
          }
          if(this.value === 'TTO') {
              value='Trinidad and Tobago';
          }
          if(this.value === 'TUN') {
              value='Tunisia';
          }
          if(this.value === 'TUR') {
              value='Turkey';
          }
          if(this.value === 'TUV') {
              value='Tuvalu';
          }
          if(this.value === 'TWN') {
              value='Taiwan, Province of China';
          }
          if(this.value === 'TZA') {
              value='Tanzania, United Republic of';
          }
          if(this.value === 'UGA') {
              value='Uganda';
          }
          if(this.value === 'UKR') {
              value='Ukraine';
          }
          if(this.value === 'UMI') {
              value='United States Minor Outlying Islands';
          }
          if(this.value === 'URY') {
              value='Uruguay';
          }
          if(this.value === 'USA') {
              value='United States of America';
          }
          if(this.value === 'UZB') {
              value='Uzbekistan';
          }
          if(this.value === 'VAT') {
              value='Holy See';
          }
          if(this.value === 'VCT') {
              value='Saint Vincent and the Grenadines';
          }
          if(this.value === 'VEN') {
              value='Venezuela (Bolivarian Republic of)';
          }
          if(this.value === 'VGB') {
              value='Virgin Islands (British)';
          }
          if(this.value === 'VIR') {
              value='Virgin Islands (U.S.)';
          }
          if(this.value === 'VNM') {
              value='Viet Nam';
          }
          if(this.value === 'VUT') {
              value='Vanuatu';
          }
          if(this.value === 'WLF') {
              value='Wallis and Futuna';
          }
          if(this.value === 'WSM') {
              value='Samoa';
          }
          if(this.value === 'YEM') {
              value='Yemen';
          }
          if(this.value === 'ZAF') {
              value='South Africa';
          }
          if(this.value === 'ZMB') {
              value='Zambia';
          }
          if(this.value === 'ZWE') {
              value='Zimbabwe';
          }
          $('#individual').css('display', 'block');
          $('.heading1').html(value+" Annual Tree Cover Loss");
          google.charts.load('current', {'packages':['bar']});
          google.charts.setOnLoadCallback(drawChart);

            function drawChart() 
            {
                  var data = google.visualization.arrayToDataTable([
                    ['Years', country, { role: 'annotation' } ],
                    ['2001', countryYearlyData[0][2],  ''],
                    ['2002', countryYearlyData[1][2],  ''],
                    ['2003', countryYearlyData[2][2],  ''],
                    ['2004', countryYearlyData[3][2], ''],
                    ['2005', countryYearlyData[4][2], ''],
                    ['2006', countryYearlyData[5][2], ''],
                    ['2007', countryYearlyData[6][2], ''],
                    ['2008', countryYearlyData[7][2], ''],
                    ['2009', countryYearlyData[8][2], ''],
                    ['2010', countryYearlyData[9][2], ''],
                    ['2011', countryYearlyData[10][2], ''],
                    ['2012', countryYearlyData[11][2], ''],
                    ['2013', countryYearlyData[12][2], ''],
                    ['2014', countryYearlyData[13][2], ''],
                    ['2015', countryYearlyData[14][2], ''],
                    ['2016', countryYearlyData[15][2], ''],
                    ['2017', countryYearlyData[16][2], ''],
                    ['2018', countryYearlyData[17][2], ''],
                    ['2019', countryYearlyData[18][2], ''],
                    ['2020', countryYearlyData[19][2], ''],
                  ]);
                  var unit; 
                  if(check==="k")
                  {
                      var formatter = new google.visualization.NumberFormat(
                      { suffix:' kha', pattern:"#.00"});
                      unit = "#.00 kha";
                      formatter.format(data,1); 
                  }
                  else if(check=="m")
                  {
                      var formatter = new google.visualization.NumberFormat(
                      { suffix:' Mha', pattern:"#.00"});
                      unit = "#.00 Mha";
                      formatter.format(data,1); 
                  }
                          
                  let options = {
                    width: 1000,
                    height: 400,
                    format:'short',
                    vAxis:{format:unit}
                  };

                  var chart = new google.charts.Bar(document.getElementById('columnchart_material_country'));

                  chart.draw(data, google.charts.Bar.convertOptions(options));
            }
            setTimeout(() => {
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                    ['Years', country, { role: 'annotation' } ],
                    ['2001', countryYearlyData[0][2],  ''],
                    ['2002', countryYearlyData[1][2],  ''],
                    ['2003', countryYearlyData[2][2],  ''],
                    ['2004', countryYearlyData[3][2], ''],
                    ['2005', countryYearlyData[4][2], ''],
                    ['2006', countryYearlyData[5][2], ''],
                    ['2007', countryYearlyData[6][2], ''],
                    ['2008', countryYearlyData[7][2], ''],
                    ['2009', countryYearlyData[8][2], ''],
                    ['2010', countryYearlyData[9][2], ''],
                    ['2011', countryYearlyData[10][2], ''],
                    ['2012', countryYearlyData[11][2], ''],
                    ['2013', countryYearlyData[12][2], ''],
                    ['2014', countryYearlyData[13][2], ''],
                    ['2015', countryYearlyData[14][2], ''],
                    ['2016', countryYearlyData[15][2], ''],
                    ['2017', countryYearlyData[16][2], ''],
                    ['2018', countryYearlyData[17][2], ''],
                    ['2019', countryYearlyData[18][2], ''],
                    ['2020', countryYearlyData[19][2], ''],
                  ]);
                  var unit; 
                  if(check==="k")
                  {
                      var formatter = new google.visualization.NumberFormat(
                      { suffix:' kha', pattern:"#.00"});
                      unit = "#.00 kha";
                      formatter.format(data,1); 
                  }
                  else if(check=="m")
                  {
                      var formatter = new google.visualization.NumberFormat(
                      { suffix:' Mha', pattern:"#.00"});
                      unit = "#.00 Mha";
                      formatter.format(data,1); 
                  }
                  var options = {
                  width: 1100,
                  height: 450,
                  legend: { position: 'center', maxLines: 3 },
                  chartArea:{left:40,top:0,width:'70%',height:'65%'},
                  bar: { groupWidth: '75%' },
                  hAxis:{format:unit},
                  isStacked: true
                };

                  var chart = new google.visualization.BarChart(document.getElementById('noAura_country'));

                  chart.draw(data, options);
                }
              }, 1000);

                });
          
    });
