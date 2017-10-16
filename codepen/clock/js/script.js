setInterval(function() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate(' + deg + ' 250 250)')
  }
  var d = new Date()
  r(seconds, 6 * d.getSeconds())
  r(minute, 6 * d.getMinutes())
  r(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2)
}, 1000)



