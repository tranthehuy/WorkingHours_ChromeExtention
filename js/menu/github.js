prompt("Please go to this url and update your filter", "https://github.com/issues?utf8=%E2%9C%93&q=assignee%3Ajohnnydevpanel+created%3A%3E%3D2020-01-01");
setTimeout(() => {
  // TODO here
  var $ = window.jQuery;
  var tasks = [];
  var trim = (text) => {  return (text || "").trim() };

  var getWorkers = arr => {
    var t = ""
    $(arr).each((i,c) => {
      t += $(c).attr("alt") + " "
    })
    return t;
  }
  $(".js-issue-row").each((index, card) => {
    var a = $(card).find("a.h4.js-navigation-open");
    var cardTitle = trim(a.text());
    var img = $(card).find("img");
    var workers = getWorkers(img);

    var dateTag = $(card).find("relative-time");
    var dateStr = trim(dateTag.attr("datetime"));

    var cardNumber = trim($(card).find(".opened-by").text()).split("   ")[0];

    var line = cardNumber + "," + cardTitle + "," + workers + "," + dateStr + ",";
    line = line.replace(/\n/g,"");
    tasks.push(line);
  })
  console.log(tasks.join("\n"));
}, 1000);