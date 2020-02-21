const { fetchData } = require("../utils/scrapeHelper");

exports.getIndex = async (req, res) => {
  let ytObj;
  let vidInfo = [];
  let yt = await fetchData("https://www.youtube.com/results?search_query=tutorial");
  yt("div.yt-lockup-content").each((i, elem) => {
    let title = yt(elem).find("h3.yt-lockup-title > a").attr("title");
    let duration = yt(elem).find("span.accessible-description").text();
    let image = yt(elem).parent().parent().find("img").attr("data-thumb");
    let description = yt(elem).parent().parent().find(".yt-lockup-description").text();
    let href = yt(elem).parent().parent().find(".yt-uix-tile-link").attr("href");
    let age = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[0];
    let views = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[1];
    let link = `https://www.youtube.com${href}`;
    ytObj = { title, duration, image, description, link, age, views };
    vidInfo.push(ytObj);
  });
  res.send(vidInfo);
  console.log(vidInfo.length);
}
exports.getIndexHour = async (req, res) => {
  let ytObj;
  let vidInfo = [];
  let yt = await fetchData("https://www.youtube.com/results?search_query=tutorial&sp=EgQIAhAB");
  yt("div.yt-lockup-content").each((i, elem) => {
    let title = yt(elem).find("h3.yt-lockup-title > a").attr("title");
    let duration = yt(elem).find("span.accessible-description").text();
    let image = yt(elem).parent().parent().find("img").attr("data-thumb");
    let description = yt(elem).parent().parent().find(".yt-lockup-description").text();
    let href = yt(elem).parent().parent().find(".yt-uix-tile-link").attr("href");
    let age = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[0];
    let views = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[1];
    let link = `https://www.youtube.com${href}`;
    ytObj = { title, duration, image, description, link, age, views };
    vidInfo.push(ytObj);
  });
  res.send(vidInfo);
  console.log(vidInfo.length);
}
exports.getIndexToday = async (req, res) => {
  let ytObj;
  let vidInfo = [];
  let yt = await fetchData("https://www.youtube.com/results?search_query=tutorial&sp=EgQIARAB");
  yt("div.yt-lockup-content").each((i, elem) => {
    let title = yt(elem).find("h3.yt-lockup-title > a").attr("title");
    let duration = yt(elem).find("span.accessible-description").text();
    let image = yt(elem).parent().parent().find("img").attr("data-thumb");
    let description = yt(elem).parent().parent().find(".yt-lockup-description").text();
    let href = yt(elem).parent().parent().find(".yt-uix-tile-link").attr("href");
    let age = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[0];
    let views = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[1];
    let link = `https://www.youtube.com${href}`;
    ytObj = { title, duration, image, description, link, age, views };
    vidInfo.push(ytObj);
  });
  res.send(vidInfo);
  console.log(vidInfo.length);
}
exports.getIndexWeek = async (req, res) => {
  let ytObj;
  let vidInfo = [];
  let yt = await fetchData("https://www.youtube.com/results?search_query=tutorial&sp=EgQIAxAB");
  yt("div.yt-lockup-content").each((i, elem) => {
    let title = yt(elem).find("h3.yt-lockup-title > a").attr("title");
    let duration = yt(elem).find("span.accessible-description").text();
    let image = yt(elem).parent().parent().find("img").attr("data-thumb");
    let description = yt(elem).parent().parent().find(".yt-lockup-description").text();
    let href = yt(elem).parent().parent().find(".yt-uix-tile-link").attr("href");
    let age = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[0];
    let views = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[1];
    let link = `https://www.youtube.com${href}`;
    ytObj = { title, duration, image, description, link, age, views };
    vidInfo.push(ytObj);
  });
  res.send(vidInfo);
  console.log(vidInfo.length);
}
exports.getIndexMonth = async (req, res) => {
  let ytObj;
  let vidInfo = [];
  let yt = await fetchData("https://www.youtube.com/results?search_query=tutorial&sp=EgQIBBAB");
  yt("div.yt-lockup-content").each((i, elem) => {
    let title = yt(elem).find("h3.yt-lockup-title > a").attr("title");
    let duration = yt(elem).find("span.accessible-description").text();
    let image = yt(elem).parent().parent().find("img").attr("data-thumb");
    let description = yt(elem).parent().parent().find(".yt-lockup-description").text();
    let href = yt(elem).parent().parent().find(".yt-uix-tile-link").attr("href");
    let age = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[0];
    let views = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[1];
    let link = `https://www.youtube.com${href}`;
    ytObj = { title, duration, image, description, link, age, views };
    vidInfo.push(ytObj);
  });
  res.send(vidInfo);
  console.log(vidInfo.length);
}
exports.getIndexYear = async (req, res) => {
  let ytObj;
  let vidInfo = [];
  let yt = await fetchData("https://www.youtube.com/results?search_query=tutorial&sp=EgQIBRAB");
  yt("div.yt-lockup-content").each((i, elem) => {
    let title = yt(elem).find("h3.yt-lockup-title > a").attr("title");
    let duration = yt(elem).find("span.accessible-description").text();
    let image = yt(elem).parent().parent().find("img").attr("data-thumb");
    let description = yt(elem).parent().parent().find(".yt-lockup-description").text();
    let href = yt(elem).parent().parent().find(".yt-uix-tile-link").attr("href");
    let age = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[0];
    let views = yt(elem).parent().parent().parent().find(".yt-lockup-meta-info > li").text().split("ago")[1];
    let link = `https://www.youtube.com${href}`;
    ytObj = { title, duration, image, description, link, age, views };
    vidInfo.push(ytObj);
  });
  res.send(vidInfo);
  console.log(vidInfo.length);
}