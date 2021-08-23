const miles = {
  id: 1,
  username: "milesdavis",
  avatarUrl: "miles.jpg",
  description: "Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz.",
}

const trane = {
  id: 1,
  username: "trane",
  avatarUrl: "trane.jpg",
  description: "John William Coltrane (September 23, 1926 – July 17, 1967) was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz. He led at least fifty recording sessions and appeared on many albums by other musicians, including trumpeter Miles Davis and pianist Thelonious Monk.",
}

export default async function login(username, password){
  switch(username){
    case "milesdavis":
      return miles
    case "trane":
      return trane
    default:
      return null
  }
}
