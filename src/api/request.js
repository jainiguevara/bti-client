const request = ({ url, body, token = undefined, method = 'POST', headers = {} }) => {
  const server = process.env.REACT_APP_API_SERVER
  const serverToken = process.env.REACT_APP_SERVER_TOKEN
  let rawResponse
  headers = {
    ...headers,
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${serverToken}`
  }
  if (token) {
    headers = {
      ...headers,
      'x-auth': token
    }
  }
  return fetch(`${server}${url}`, {
    method,
    body: JSON.stringify(body),
    cache: 'no-cache',
    mode: 'cors',
    headers
  }).then(response => {
    rawResponse = response
    if (method === 'DELETE') {
      return response
    } else {
      return response.json()
    }
  }).then(response => {
    if (response) {
      if (rawResponse.status >= 400) {
        throw response
      }
      return response
    }
  }).catch(err => {
    if (err) {
      throw {
        message: 'system_error',
        details: err
      }
    }
    if (rawResponse) {
      if (rawResponse.ok === false && err.toString().match(/^Syntax/i)) {
        // Could not parse the body.
        err = {
          message: 'request_failed',
          details: rawResponse.statusText,
        }
        throw err
      }
      return rawResponse
    } 
  })
}

export default request