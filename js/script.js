
document.getElementById("logButton").addEventListener("click", function() {
  var moment = new Date(),
      resultDiv = null;
  console.log(getDate(moment));
  console.log(getTime(moment));
  console.log(getTimeStamp(moment));
  resultDiv = document.createElement("div");
  resultDiv.innerHTML = getTime(moment) + "<br /><b>" + getTimeStamp(moment) + "</b>";
  resultDiv.className = "resultEntry";
  var resultsDiv = document.getElementById("logResults");
  var hammertime = new Hammer(resultDiv);
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_LEFT });
  hammertime.on('swipe', function(ev) {
    if (ev.target.nodeName == "B") {
      ev.target.parentNode.remove();
    } else {
        ev.target.remove();
    }
  });
  if (resultsDiv.firstChild) {
    resultsDiv.insertBefore(resultDiv, resultsDiv.firstChild);
  } else {
    resultsDiv.appendChild(resultDiv);
  }
});


function prefix(digit) {
  var prefix = "";
  if (digit < 10) prefix = "0";
  return prefix + digit;
}

function getTimeStamp(moment) {
  return moment.valueOf();
}

function getDate(moment) {
  var year = moment.getFullYear(),
      month = prefixString(moment.getMonth() + 1, 2),
      day = prefixString(moment.getDate(), 2);
  return year + "-" + month + "-" + day;
}

function getTime(moment) {
  var hours = prefixString(moment.getHours(), 2),
      minutes = prefixString(moment.getMinutes(), 2),
      seconds = prefixString(moment.getSeconds(), 2),
      mSeconds = prefixString(moment.getMilliseconds(), 3);
  return hours + ":" + minutes + ":" + seconds + "." + mSeconds;
}

function prefixString(number, digits, prefixChar) {
  var result = "" + number;
  prefixChar = (!prefixChar) ? "0": prefixChar;
  while (result.length < digits) {
    result = prefixChar + result;
  }
  return result;
}
