const API_HOST = process.env.REACT_APP_API_URL;

// Build the full url for the api call.  If there is any data to include in the 
// query string, properly encode it.
const apiUrl = (uri, params) => {
  // strip leading and trailing slashes
  uri = uri.replace(/^\//, '').replace(/\/$/, '');
  uri = `${API_HOST}/api/${uri}`;
  if(typeof params === "object") {
    let qs = new URLSearchParams(params);
    uri = `${uri}?${qs.toString()}`;
  }

  return uri;
};


const fetchJSON = (url, options) => {
  options = options || {};
  options.mode = 'cors';

  const authString = sessionStorage.getItem('auth');

  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  if (authString) {
    const auth = JSON.parse(authString);
    headers.set('Authorization', `Bearer ${auth.token}`);
  }
  options.headers = headers;

  return fetch(url, options)
    .then(resp => {
      if (resp.status === 500) {
        let err = {error: "Server Error"};
        throw err;
      }

      if (resp.status === 204) {
        // No body - but expects "json"
        return {};
      }

      return resp.json();
    })
    .then(json => {
      if(json.error) {
        throw json;
      }

      return json;
    });
}

const get = (url, queryParams) => fetchJSON(apiUrl(url, queryParams), null)

const post = (url, payload) => {
  url = apiUrl(url);
  const options = {
    method: 'POST',
    body: JSON.stringify(payload)
  };

  return fetchJSON(url, options);
};

const del = (url) => {
  const options = {
    method: 'DELETE'
  };

  return fetchJSON(apiUrl(url), options);
};

const patch = (url, payload) => {
  url = apiUrl(url);
  const options = {
    method: 'PATCH',
    body: JSON.stringify(payload)
  };

  return fetchJSON(url, options);
};


export function commentCreate(payload) {
  return post('/comments', payload);
}

export function resourceCreate(payload) {
  return post('/resources', payload);
}

export function topicGet(id) {
  return get(`/topics/${id}`);
}

export function topicCreate(payload) {
  return post('/topics', payload);
}

export function search(query) {
  const params = query? {q: query}: undefined;
  return get('topics', params);
}

export function register(name, email, password) {
  const payload = {
    name,
    email,
    password
  };

  return post('users', payload);
}

export function signin(email, password) {
  const payload = {
    email,
    password
  };

  return post('login', payload);
}

export function usersGet(id) {
  return get(`users/${id}`);
};

export function voteUp(resource_id) {
  const payload = {
    resource_id,
    type: 'up'
  };

  return post('votes', payload);
}

export function voteDown(resource_id) {
  const payload = {
    resource_id,
    type: 'down'
  };

  return post('votes', payload);
}

export function editResourceName(resource_id, value) {
  const payload = {
    resource_id,
    name: value
  };

  return patch(`resources/${resource_id}`, payload);
}

export function delResource(resource_id)
{
  return del(`/resources/${resource_id}`);
}
