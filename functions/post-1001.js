exports.handler = async event => {
    if (event.headers.referer.includes('facebook')) {
      return {
        statusCode: 301,
        headers: {
          location: 'https://www.google.com/'
        }
      }
    } else {
      let pathName = location.pathname.split('/')[2].split('-')
      return {
        statusCode: 301,
        headers: {
          location: process.env.URL + pathName[0] + '/' + pathName[1]
        }
      }
    }
  }