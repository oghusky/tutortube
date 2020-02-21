const axios = require("axios"),
  cheerio = require("cheerio");

// fetches data from url
exports.fetchData = async (url) => {
  let result = await axios.get(url);
  return cheerio.load(result.data)
}
