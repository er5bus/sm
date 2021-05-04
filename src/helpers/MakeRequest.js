import axios from 'axios'


export const ping = ({ url = "https://www.google.com", timeout=5000, isOnlineCallback, isOfflineCallback }) => {
  return new Promise(resolve => {
    const isOnline = () => {
      isOnlineCallback()
      resolve(true);
    }
    const isOffline = () => {
      isOfflineCallback()
      resolve(false);
    }

    const xhr = new XMLHttpRequest();

    xhr.onerror = isOffline;
    xhr.ontimeout = isOffline;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        if (xhr.status) {
          isOnline();
        } else {
          isOffline();
        }
      }
    };

    xhr.open("HEAD", url);
    xhr.timeout = timeout;
    xhr.send();
  });
}




export const makeCall = (baseURL, method, url, data = {}, headers = {}, params = {}, extra = {}) => {

  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return client.request({
    method,
    data,
    url,
    headers,
    params,
    ...extra
  })
}
