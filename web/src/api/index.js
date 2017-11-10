// TODO: remove hard coded host
const API_HOST = 'http://localhost';

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

export function search(query) {
  const url = apiUrl('search', {q: query});
  return fetch(url, {mode: 'cors'})
    .then(response => response.json());
}
