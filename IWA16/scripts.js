 const MONTHS = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
 ]

const data = {
     response: {
       requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",

     data: {
       NM372: {
         firstName: "Nwabisa",
         surname: "Masiko",
         id: "NM372",
         races: [
           {
             date: '2022-11-18T20:00:00.000Z',
             time: [9, 7, 8, 6],
           },
           {
             date: '2022-12-02T20:00:00.000Z',
             time: [6, 7, 8, 7],
           },
         ],
       },

       SV782: {
         firstName: "Schalk",
         surname: "Venter",
         id: "SV782",
         races: [
           {
             date: '2022-11-18T20:00:00.000Z',
             time: [10, 8, 3, 12],
           },
           {
             date: '2022-11-25T20:00:00.000Z',
             time: [6, 8, 9, 11],
           },
           {
             date: '2022-12-02T20:00:00.000Z',
             time: [10, 11, 4, 8],
           },
           {
             date: '2022-12-09T20:00:00.000Z',
             time: [9, 8, 9, 11],
           },
         ],
       },
     },
   },
 };

// // Only edit below this comment

// const createHtml = (/* athlete */) => {
//   const nwabisaDetails = data.response.data.NM372
//   const  athleteNwabisa = nwabisaDetails.firstName +" "+ nwabisaDetails.surname
//   const races = Object.keys(data.response.data.NM372.races).length

//   const dateNwabisa = new Date (nwabisaDetails.races[1].date).getDate() +' '+ MONTHS[11] + ' '+ new Date (nwabisaDetails.races[1].date).getFullYear();
//   let latestRace = nwabisaDetails.races[1].time;
//   latestRace = latestRace[0] + latestRace[1] + latestRace[2] + latestRace[3]
//   latestRace = '00:' + latestRace    
 
//   let title = document.createElement("h2");
//   title.textContent = data.response.data.NM372.id;
//   const dl = document.querySelector('body');
//   return dl.appendChild(title);

//   const list = document.createElement('dl');

//   const day = date.getDate();
//   const month = MONTHS[date.getMonth()];
//   const year = date.getFullYear();

//   //first, second, third, fourth = timeAsArray;
//   const total = first.reduce((acc, curr) => acc + curr, 0);

//   const hours = math.floor(total / 60);
//   const minutes = total % 60;

//   list.innerHTML = /* html */ `
//     <dt>Athlete</dt>
//     <dd>${firstName} ${surname}</dd>

//     <dt>Total Races</dt>
//     <dd>${races.length}</dd>

//     <dt>Event Date (Latest)</dt>
//     <dd>${day} ${month} ${year}</dd>

//     <dt>Total Time (Latest)</dt>
//     <dd>${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}</dd>
//   `;

//   fragment.appendChild(list);
//   return fragment;
// };

// /*   const Data = [NM372, SV782] ; */
// /*  const [NM372, SV782] = data;*/
// const test = document.querySelector('h1').innerText = createHtml()  


// // document.querySelector("#" + NM372.id).appendChild(createHtml(NM372));
// // document.querySelector("#" + SV782.id).appendChild(createHtml(SV782));

//nwabisa//////////////////////////////
let Athlete  = data.response.data.NM372.firstName +' '+ data.response.data.NM372.surname
let races = Object.keys(data.response.data.NM372.races).length
let day = new Date(data.response.data.NM372.races[1].date).getDate() +' '+ MONTHS[11] +' '+ new Date(data.response.data.NM372.races[1].date).getFullYear()
console.log(day)
let timeAsArray = data.response.data.NM372.races[1].time[0] + data.response.data.NM372.races[1].time[1] + data.response.data.NM372.races[1].time[2] + data.response.data.NM372.races[1].time[3]
timeAsArray = '00:'+ timeAsArray

// schalk/////////////////////////////////////////////
const athleteSchalk = data.response.data.SV782.firstName +' '+ data.response.data.SV782.surname
let racesSchalk = Object.keys(data.response.data.SV782.races).length
let daySchalk = new Date(data.response.data.SV782.races.at(-1).date).getDate() +' '+ MONTHS[11] +' '+ new Date(data.response.data.NM372.races.at(-1).date).getFullYear()
let timeAsArraySchalk = data.response.data.SV782.races[1].time[0] + data.response.data.SV782.races[1].time[1] + data.response.data.SV782.races[1].time[2] + data.response.data.SV782.races[1].time[3]
timeAsArraySchalk = '00:'+ timeAsArraySchalk

////OUTPUT///////////////////////////////////////////////
const element = document.querySelector("body");
const fragment = document.createDocumentFragment('dl');
const athlete = [
  [ 'Athlete:' +' '+ Athlete,"Total Races: "+ races, 'Event Date : ' + day, 'Total Time: ' + timeAsArray],
  [ 'Athlete:' +' '+ athleteSchalk,"Total Races: "+ racesSchalk, 'Event Date : ' + daySchalk, 'Total Time: ' + timeAsArraySchalk],
]
let nwabisa = athlete[0]
let schalk = athlete[1]
for (let i = 0; i < 3; i++){
  if (i < 1){
   let title = document.createElement("h2");
    title.textContent = data.response.data.NM372.id;
    const dl = document.querySelector('body');
    dl.appendChild(title);

    nwabisa.forEach((athletes) => {
      const details = document.createElement("dd");
      details.textContent = athletes;
      fragment.appendChild(details);
       });
       element.appendChild(fragment);
    } else if ( i > 1 ){
      let titleSchalk = document.createElement("h2");
      titleSchalk.textContent = data.response.data.SV782.id;
      const dd = document.querySelector('body');
      dd.appendChild(titleSchalk);

      schalk.forEach((athletes) => {
      const details = document.createElement("dd");
      details.textContent = athletes;
      fragment.appendChild(details);
       });
       element.appendChild(fragment);
    }
   }