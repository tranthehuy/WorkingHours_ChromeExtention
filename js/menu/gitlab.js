alert("Please scroll down to load all");
setTimeout(() => {
  var $ = window.jQuery;
  var tasks = [];
  var trim = (text) => {  return (text || "").trim() };
  $(".board-card").each((index, card) => {
    var a = $(card).find("h4.board-card-title a");
    var cardTitle = trim(a.text());
    var img = $(card).find("img");
    var worker = trim((img.attr("alt") || '').replace("Avatar for ", ''));
    var dateTag = $(card).find(".board-card-info.card-number");
    var dateStr = trim(dateTag.text());
    var cardNumber = trim($(card).find(".board-card-number").text());

    var line = cardNumber + "," + cardTitle + "," + worker + "," + dateStr + ",";
    line = line.replace(/\n/g,"");
    tasks.push(line);
  })
  console.log(tasks.join("\n"));
}, 1000);