(function() {
  this.Dropshop = (function() {
    function Dropshop() {
      console.log('[Dropshop] Initialising...');
      this.$doc = $(document);
      this.$body = $('body');
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
      this.preloadBgImage();
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
      var $sheet, css, head;
      console.log('[Dropshop] setting page dims');
      this.sizes = {
        windowWidth: $(window).width(),
        windowHeight: $(window).height(),
        headerHeight: $('header.header').outerHeight()
      };
      this.isMobile = this.sizes.windowWidth < 580;
      this.navWidth = this.sizes.windowWidth > this.sizes.windowHeight ? this.sizes.windowWidth : this.sizes.windowHeight;
      this.$navWrapper.css({
        height: this.navWidth * 3,
        width: this.navWidth * 3,
        top: -this.navWidth * 1.5,
        left: -this.navWidth * 0.5
      });
      css = '.fullscreen { min-height : ' + this.sizes.windowHeight + 'px }';
      $sheet = document.getElementById('styles');
      if (!$sheet) {
        head = document.head || document.getElementsByTagName('head')[0];
        $sheet = document.createElement('style');
        $sheet.appendChild(document.createTextNode(""));
        $sheet.type = 'text/css';
        $sheet.setAttribute("id", "styles");
        head.appendChild($sheet);
      }
      $sheet = document.styleSheets[document.styleSheets.length - 1];
      return this.addCSSRule($sheet, '.fullscreen', 'min-height :' + this.sizes.windowHeight + 'px');
    };

    Dropshop.prototype.addCSSRule = function(sheet, selector, rules, index) {
      var i, myrules;
      myrules = sheet.cssRules ? sheet.cssRules : sheet.rules;
      if (myrules) {
        sheet.crossdelete = sheet.deleteRule ? sheet.deleteRule : sheet.removeRule;
        i = 0;
        while (i < myrules.length) {
          if (myrules[i].selectorText.toLowerCase().indexOf(selector) !== -1) {
            sheet.crossdelete(i);
            i--;
          }
          i++;
        }
        if ('insertRule' in sheet) {
          sheet.insertRule(selector + '{' + rules + '}', index);
        } else if ('addRule' in sheet) {
          sheet.addRule(selector, rules, index);
        }
      }
    };

    Dropshop.prototype.preloadBgImage = function() {
      var picture;
      picture = $('.fullscreen picture');
      if (!picture.length) {
        return;
      }
      return picture.each(function(i, el) {
        var img, imgLoad;
        console.log('[App] loading background image');
        el = $(el);
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
            return console.log('Image ' + imgSrc + ' loaded');
          }
        });
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
