import 'isomorphic-unfetch'

const getGeoIP = () => {
  const IP_STACK_ACCESS_KEY = process.env.GEOIP_ACCESS_KEY
  const url = `https://ipinfo.io?token=${IP_STACK_ACCESS_KEY}`
  return fetch(url).then((response) => {
    return response.json()
  })
}

export default getGeoIP
