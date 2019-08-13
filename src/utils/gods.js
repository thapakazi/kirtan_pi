const godsMap = [
  {
    day: 1,
    gods: ["Shiva"]
  },
  {
    day: 2,
    gods: ["Hanuman","Ganesh"]
  },
  {
    day: 3,
    gods: ["Krishna","Gopal","Murliwala"]
  },
  {
    day: 4,
    gods: ["Vishnu","Bishnu"]
  },
  {
    day: 5,
    gods: ["Durga","Kali"]
  },
  {
    day: 6,
    gods: ["Shani"]
  },
];

export function getGodMap() {
  let today = new Date();
  return godsMap.find( e => e.day ==  today.getDay());
}

export default function getRandomGod() {
  return getGodMap().gods[(Math.floor(Math.random() * getGodMap().gods.length))];
}
