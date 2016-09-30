(function() {
  this.Dropshop = (function() {
    function Dropshop() {
      console.log('[Dropshop] Initialising...');
      this.$doc = $(document);
      this.$body = $('body');
      this.$hero = $('.hero-container');
      this.$navWrapper = $('#nav-overlay');
      this.init();
    }

    Dropshop.prototype.init = function() {
      FastClick.attach(document.body);
      this.setWidths();
      return this.onPageLoad();
    };

    Dropshop.prototype.onPageFetch = function() {
      return console.log('[Dropshop] Fetching page');
    };

    Dropshop.prototype.onPageLoad = function() {
      console.log('[Dropshop] onPageLoad');
      this.preloadBgImage(this.$hero);
      picturefill();
      this.setEventListeners();
      this.$body.removeClass('nav-open show-nav');
      return this.$allMods = $("[data-animate]");
    };

    Dropshop.prototype.openNav = function() {
      this.$body.addClass('nav-open');
      return setTimeout((function(_this) {
        return function() {
          return _this.$body.addClass('show-nav');
        };
      })(this), 600);
    };

    Dropshop.prototype.closeNav = function() {
      return this.$body.removeClass('show-nav nav-open');
    };

    Dropshop.prototype.setWidths = function() {
      console.log('[Dropshop] setting page dims');
      return this.$navWrapper.css({
        height: window.dims.navWidth * 3,
        width: window.dims.navWidth * 3,
        top: -window.dims.navWidth * 1.5,
        left: -window.dims.navWidth * 0.5
      });

      /*@sizes = 
        windowWidth: $(window).width()
        windowHeight: $(window).height()
        headerHeight: $('header.header').outerHeight()
      @isMobile = @sizes.windowWidth < 580
      @navWidth = if @sizes.windowWidth > @sizes.windowHeight then @sizes.windowWidth else @sizes.windowHeight
       */

      /*$sheet = document.getElementById('styles')
      unless $sheet
        head = document.head or document.getElementsByTagName('head')[0]
        $sheet = document.createElement('style')
        $sheet.appendChild(document.createTextNode("")) # WebKit hack :(
        $sheet.type = 'text/css'
        $sheet.setAttribute("id", "styles")
        head.appendChild $sheet
      $sheet = document.styleSheets[(document.styleSheets.length - 1)]
      @addCSSRule($sheet, '.fullscreen', 'min-height :' + (window.dims.windowHeight) + 'px' )
      
        addCSSRule: (sheet, selector, rules, index) ->
      myrules = if sheet.cssRules then sheet.cssRules else sheet.rules
      if myrules
        sheet.crossdelete = if sheet.deleteRule then sheet.deleteRule else sheet.removeRule
        i = 0
        while i < myrules.length
          if myrules[i].selectorText.toLowerCase().indexOf(selector) != -1
            sheet.crossdelete i
            i--
          i++
      
        if 'insertRule' of sheet
          sheet.insertRule selector + '{' + rules + '}', index
        else if 'addRule' of sheet
          sheet.addRule selector, rules, index
        return
       */
    };

    Dropshop.prototype.preloadBgImage = function(parent) {
      var el, img, imgLoad, picture;
      picture = $(parent).find('picture');
      if (!picture.length) {
        return;
      }
      console.log('[App] lazy loading image');
      el = $(picture);
      img = el.find('img');
      imgLoad = imagesLoaded(el);
      return imgLoad.on('progress', function(instance, image) {
        var imgSrc;
        if (typeof image.img.currentSrc === 'undefined') {
          imgSrc = image.img.src;
        } else {
          imgSrc = image.img.currentSrc;
        }
        if (image.isLoaded) {
          $(image.img).parent().addClass('loaded');
          console.log('Image ' + imgSrc + ' loaded');
          return dropshop.$body.removeClass('loading').addClass('loaded');
        }
      });
    };

    Dropshop.prototype.onScroll = function() {
      window.ticking = false;
      if (window.latestKnownScrollY > 100) {
        dropshop.$body.addClass('scrolled');
      } else {
        dropshop.$body.removeClass('scrolled');
      }
      dropshop.$allMods.each(function(i, el) {
        el = $(el);
        if (el.visible(true)) {
          return el.addClass('animate');
        }
      });
    };

    Dropshop.prototype.setEventListeners = function() {
      console.log('[Dropshop] setting event listeners');
      return this.$doc.on('click', 'a#menu-toggle', function() {
        if (dropshop.$body.hasClass('nav-open')) {
          dropshop.closeNav();
        } else {
          dropshop.openNav();
        }
        return false;
      });
    };

    return Dropshop;

  })();

}).call(this);

//# sourceMappingURL=../sourcemaps/dropshop.js.map
