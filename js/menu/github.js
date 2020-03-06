setTimeout(() => {
  // TODO here
  var $ = window.jQuery;
  var tasks = [];
  var trim = (text) => {  return (text || "").trim() };

  $('#js-issues-search').val('assignee:johnnydevpanel created:>=2020-02-01');
  $('#js-issues-search').trigger(jQuery.Event('keypress', { keycode: 13 }));

  setTimeout(() => {
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
  }, 3000);
}, 1000);