const YOUTUBE_API_URL = process.env.REACT_APP_YOUTUBE_API_URL;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

async function get(url) {
  const response = await fetch(`${YOUTUBE_API_URL}/${url}`);
  return response.json();
}


const godsMap = [
  {
    day: 1,
    gods: ["Shiva"]
  },
  {
    day: 2,
    gods: ["Hanuman"]
  },
  {
    day: 3,
    gods: ["Krishna","Gopal","Murliwala"]
  },
  {
    day: 4,
    gods: ["Vishnu"]
  },
  {
    day: 5,
    gods: ["Durga","Kali"]
  },
  {
    day: 6,
    gods: ["Shani"]
  },
]

function getGodName() {
  let today = new Date();
  return  godsMap.find( e => e.day ==  today.getDay())
}

export async function search(queryString){
  let url, searchParams;
  if (queryString) {
    searchParams = queryString.split(' ').join('+');
  } else {
    let god = getGodName().gods[(Math.floor(Math.random() * getGodName().gods.length))]
    searchParams = `${god} bhajans`;
  }
  url=`search?part=snippet&maxResults=5&key=${YOUTUBE_API_KEY}&q=${searchParams}`;
  return await get(url);
}

