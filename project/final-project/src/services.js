export const getPlayers = () =>{
    return fetch(`/register/`)
    .catch( err => Promise.reject({ error: 'service-error', err }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({ error: 'service-complaint', err: response.statusText });
    });
  };
  
export const addPlayers = (player) => {
    return fetch('/register/', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(player)
    })
    .catch( err => Promise.reject({ error: 'service-error', err }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({ error: 'service-complaint', err: response.statusText });
    });
  };