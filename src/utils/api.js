import getRandomGod from './gods';
const YOUTUBE_API_URL = process.env.REACT_APP_YOUTUBE_API_URL;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

async function get(url) {
  const response = await fetch(`${YOUTUBE_API_URL}/${url}`);
  return response.json();
}

export async function search(queryString){
  let url, searchParams;
  if (queryString) {
    searchParams = queryString.split(' ').join('+');
  // } else {
  //   let _god=getRandomGod();
  //   searchParams = `${_god} bhajans`;
  }
  url=`search?part=snippet&maxResults=5&key=${YOUTUBE_API_KEY}&q=${searchParams}`;
  return await get(url);
}

