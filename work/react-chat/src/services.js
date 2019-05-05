export const getUsers = () =>{
  return fetch(`/users/`)
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const addUser = (user) => {
  return fetch('/users/', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({user})
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const removeUser = (user) => {
  return fetch('/logout/', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({user})
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const getMessages = () =>{
  return fetch(`/messages/`)
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
}

export const postMessage = (message) => {
    return fetch('/messages/', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({message})
    })
    .catch( err => Promise.reject({ error: 'service-error', err }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({ error: 'service-complaint', err: response.statusText });
    });
  };