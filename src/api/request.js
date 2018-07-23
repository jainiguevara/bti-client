const request = ({ url, body, authorization, method = 'POST' }) => {
  const server = process.env.REACT_APP_API_SERVER
  let rawResponse
  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  if (authorization) {
    headers.append('Authorization', `Bearer ${authorization.token}`)
  }
  
  return fetch(`${server}${url}`, {
    method,
    body: JSON.stringify(body),
    cache: 'no-cache',
    mode: 'cors',
    credentials: 'same-origin',
    headers,
  }).then(response => {
    rawResponse = response
    return response.json()
  }).then(response => {
    if (response) {
      if (rawResponse.status >= 400) {
        throw response
      }
      return response
    }
  }).catch(err => {
    if (err) {
      return {
        message: 'err::system_error',
        details: err.toString()
      }
    }
    if (rawResponse) {
      if (rawResponse.ok === false && err.toString().match(/^Syntax/i)) {
        // Could not parse the body.
        err = {
          message: 'err::request_failed',
          details: rawResponse.statusText,
        }
      }
      throw err
    } 
  })
}

export default request