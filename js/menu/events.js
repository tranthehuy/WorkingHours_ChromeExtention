// console.log('test', window._extensionContext)
function checkTime() {
  var $ = window.jQuery;
  if ($) {
    var startTime = $($('.today-active .ltby-txt')[0]).text();
    var startTimeValue = (startTime + '').split(":");
    var startH = startTimeValue[0] - 0;
    var startM = startTimeValue[1] - 0;
    var endH = (new Date()).getHours() - 0;
    var endM = (new Date()).getMinutes() - 0;
    var length = endH + endM/60 - 1.25 - (startH + startM/60);
    length = Math.floor(length * 100) / 100;
    alert('You worked ' + length + 'h');
  }
}

checkTime();