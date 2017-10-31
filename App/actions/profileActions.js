export function getPerson(id){
  return fetch(`https://swapi.co/api/people/${id}/`)
}
