// select the elements
const TotalConfirmed = document.querySelector(".TotalConfirmed-g")
const TotalDeaths = document.querySelector(".TotalDeaths-g")
const TotalRecovered =  document.querySelector(".TotalRecovered-g")
const NewConfirmed = document.querySelector(".NewConfirmed-g")
const NewDeath =  document.querySelector(".NewDeath-g")
const NewRecovered = document.querySelector(".NewRecovered-g")
const LastUpdated = document.querySelector(".LastUpdated-g")

const TotalConfirmedInd = document.querySelector(".TotalConfirmed-i")
const TotalDeathsInd =   document.querySelector(".TotalDeaths-i")
const TotalRecoveredInd = document.querySelector(".TotalRecovered-i")
const NewConfirmedInd = document.querySelector(".NewConfirmed-i")
const NewDeathInd =  document.querySelector(".NewDeath-i")
const NewRecoveredInd =  document.querySelector(".NewRecovered-i")
const LastUpdatedInd = document.querySelector(".LastUpdated-i")

const TotalConfirmedUs = document.querySelector(".TotalConfirmed-us")
const TotalDeathsUs =   document.querySelector(".TotalDeaths-us")
const TotalRecoveredUs = document.querySelector(".TotalRecovered-us")
const NewConfirmedUs = document.querySelector(".NewConfirmed-us")
const NewDeathUs =  document.querySelector(".NewDeath-us")
const NewRecoveredUs =  document.querySelector(".NewRecovered-us")
const LastUpdatedUs = document.querySelector(".LastUpdated-us")

const TotalConfirmedUk = document.querySelector(".TotalConfirmed-uk")
const TotalDeathsUk =   document.querySelector(".TotalDeaths-uk")
const TotalRecoveredUk = document.querySelector(".TotalRecovered-uk")
const NewConfirmedUk = document.querySelector(".NewConfirmed-uk")
const NewDeathUk =  document.querySelector(".NewDeath-uk")
const NewRecoveredUk =  document.querySelector(".NewRecovered-uk")
const LastUpdatedUk = document.querySelector(".LastUpdated-uk")

const Global = document.querySelector(".Global");
const US = document.querySelector(".US");
const Uk = document.querySelector(".Uk")
const India = document.querySelector(".India");
const China = document.querySelector(".China");
const Canada = document.querySelector(".Canada");
const Australia = document.querySelector(".Australia");

//Get all the data from covid-19-api and display the data using async method
async function covidData(){
  const data = await fetch("https://api.covid19api.com/summary")
  const corona =  await data.json();
  console.log(corona.Countries);
  console.log(corona.Countries[76].TotalConfirmed);
    //Progress bar data
  Global.innerHTML =` Global: ${corona.Global.TotalConfirmed}`
  US.innerHTML = `US: ${corona.Countries[184].TotalConfirmed}`
  Uk.innerHTML = `Uk:${corona.Countries[183].TotalConfirmed}`
  India.innerHTML = `India : ${corona.Countries[76].TotalConfirmed}`
  China.innerHTML = `China: ${corona.Countries[25].TotalConfirmed}`
  Canada.innerHTML = `Canada: ${corona.Countries[30].TotalConfirmed}`
  Australia.innerHTML = `Australia${corona.Countries[8].TotalConfirmed}`
 
  //Global cases data
  TotalConfirmed.innerHTML = corona.Global.TotalConfirmed
  TotalDeaths.innerHTML = corona.Global.TotalDeaths;
  TotalRecovered.innerHTML = corona.Global.TotalRecovered;
  NewConfirmed.innerHTML = corona.Global.NewConfirmed;
  NewDeath.innerHTML = corona.Global.NewDeaths;
  NewRecovered .innerHTML = corona.Global.NewRecovered;
  LastUpdated.innerHTML = corona.Global.Date;
  //Indian data
  TotalConfirmedInd.innerHTML = corona.Countries[76].TotalConfirmed
  TotalDeathsInd.innerHTML = corona.Countries[76].TotalDeaths;
  TotalRecoveredInd.innerHTML = corona.Countries[76].TotalRecovered;
  NewConfirmedInd.innerHTML = corona.Countries[76].NewConfirmed;
  NewDeathInd.innerHTML = corona.Countries[76].NewDeaths;
  NewRecoveredInd.innerHTML = corona.Countries[76].NewRecovered;
  LastUpdatedInd.innerHTML = corona.Countries[76].Date;
   //US data
  TotalConfirmedUs.innerHTML = corona.Countries[184].TotalConfirmed
  TotalDeathsUs.innerHTML = corona.Countries[184].TotalDeaths;
  TotalRecoveredUs.innerHTML = corona.Countries[184].TotalRecovered;
  NewConfirmedUs.innerHTML = corona.Countries[184].NewConfirmed;
  NewDeathUs.innerHTML = corona.Countries[184].NewDeaths;
  NewRecoveredUs.innerHTML = corona.Countries[184].NewRecovered;
  LastUpdatedUs.innerHTML = corona.Countries[184].Date;
   // UK data
  TotalConfirmedUk.innerHTML = corona.Countries[183].TotalConfirmed
  TotalDeathsUk.innerHTML = corona.Countries[183].TotalDeaths;
  TotalRecoveredUk.innerHTML = corona.Countries[183].TotalRecovered;
  NewConfirmedUk.innerHTML = corona.Countries[183].NewConfirmed;
  NewDeathUk.innerHTML = corona.Countries[183].NewDeaths;
  NewRecoveredUk.innerHTML = corona.Countries[183].NewRecovered;
  LastUpdatedUk.innerHTML = corona.Countries[183].Date;
}
covidData();