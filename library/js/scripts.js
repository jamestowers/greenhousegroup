(function() {
  var lastTime, repeatOften, requestTick, transEndEventNames, vendors, x;

  if (!window.console) {
    window.console = {};
  }

  if (!window.console.log) {
    window.console.log = function() {};
  }

  window.latestKnownScrollY = 0;

  window.dropshop = new Dropshop();

  transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  };

  window.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

  $.fn.visible = function(partial) {
    var $t, $w, _bottom, _top, compareBottom, compareTop, viewBottom, viewTop;
    $t = $(this);
    $w = $(window);
    viewTop = latestKnownScrollY;
    viewBottom = viewTop + $w.height();
    _top = $t.offset().top;
    _bottom = _top + $t.height();
    compareTop = (partial === true ? _bottom : _top);
    compareBottom = (partial === true ? _top : _bottom);
    return (compareBottom <= viewBottom) && (compareTop >= viewTop);
  };

  lastTime = 0;

  vendors = ["ms", "moz", "webkit", "o"];

  x = 0;

  while (x < vendors.length && !window.requestAnimationFrame) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    ++x;
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime, id, timeToCall;
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

  repeatOften = function() {
    window.globalID = requestAnimationFrame(repeatOften);
  };

  requestTick = function() {
    if (!window.ticking) {
      requestAnimationFrame(dropshop.onScroll);
    }
    window.ticking = true;
  };

  $(window).load(function() {
    return console.log('[Scripts] Page fully loaded');
  });

  $(window).scroll(function() {
    window.latestKnownScrollY = window.scrollY;
    return requestTick();
  });

  $(window).resize(function() {
    return dropshop.setWidths();
  });


  /*$(window).on 'statechangestarted', ->
    console.log '[scripts] stage change started'
    dropshop.onPageFetch()
    
  $(window).on 'statechangecomplete', ->
    console.log '[scripts] stage change complete'
    dropshop.onPageLoad()
   */

}).call(this);

//# sourceMappingURL=../sourcemaps/scripts.js.map
