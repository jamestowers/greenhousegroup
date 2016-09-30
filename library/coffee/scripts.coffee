# Fix IE consol.log bug
if !window.console
  window.console = {}
if !window.console.log
  window.console.log = ->

window.latestKnownScrollY = 0

window.dropshop = new Dropshop()

# transition end event name
transEndEventNames =
  'WebkitTransition': 'webkitTransitionEnd'
  'MozTransition': 'transitionend'
  'OTransition': 'oTransitionEnd'
  'msTransition': 'MSTransitionEnd'
  'transition': 'transitionend'
window.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')]

$.fn.visible = (partial) ->
  $t = $(this)
  $w = $(window)
  viewTop = latestKnownScrollY
  viewBottom = viewTop + $w.height()
  _top = $t.offset().top
  _bottom = _top + $t.height()
  compareTop = (if partial is true then _bottom else _top)
  compareBottom = (if partial is true then _top else _bottom)
  (compareBottom <= viewBottom) and (compareTop >= viewTop)



##################################
## requestAnimationFrame Polyfill
##################################

lastTime = 0
vendors = [
  "ms"
  "moz"
  "webkit"
  "o"
]
x = 0

while x < vendors.length and not window.requestAnimationFrame
  window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"]
  window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] or window[vendors[x] + "CancelRequestAnimationFrame"]
  ++x
unless window.requestAnimationFrame
  window.requestAnimationFrame = (callback, element) ->
    currTime = new Date().getTime()
    timeToCall = Math.max(0, 16 - (currTime - lastTime))
    id = window.setTimeout(->
      callback currTime + timeToCall
      return
    , timeToCall)
    lastTime = currTime + timeToCall
    id
unless window.cancelAnimationFrame
  window.cancelAnimationFrame = (id) ->
    clearTimeout id
    return
################################## 
## end requestAnimationFrame Polyfill
##################################




repeatOften = ->
  window.globalID = requestAnimationFrame(repeatOften)
  return

# ON SCROLL EVENTS

# Call requestTick on window.scroll - see bottom
requestTick = ->
  requestAnimationFrame dropshop.onScroll  unless window.ticking
  window.ticking = true
  return


$(window).load ->
  console.log '[Scripts] Page fully loaded'

$(window).scroll ->
  window.latestKnownScrollY = window.scrollY
  requestTick()

$(window).resize ->
  dropshop.setWidths()

###$(window).on 'statechangestarted', ->
  console.log '[scripts] stage change started'
  dropshop.onPageFetch()
  
$(window).on 'statechangecomplete', ->
  console.log '[scripts] stage change complete'
  dropshop.onPageLoad()###
