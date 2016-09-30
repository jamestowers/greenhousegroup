class @Dropshop

  constructor: ->
    console.log '[Dropshop] Initialising...'
    @$doc = $(document)
    @$body = $('body')
    @$hero = $('.hero-container')
    @$navWrapper = $('#nav-overlay')
    @init()

  init: ->
    FastClick.attach(document.body)
    @setWidths()
    @onPageLoad()

  onPageFetch: ->
    console.log '[Dropshop] Fetching page'

  onPageLoad: ->
    console.log '[Dropshop] onPageLoad'
    @preloadBgImage( @$hero )
    picturefill()
    @setEventListeners()
    @$body.removeClass 'nav-open show-nav'
    @$allMods = $("[data-animate]")

  openNav: ->
    @$body.addClass 'nav-open'
    setTimeout( =>
      @$body.addClass 'show-nav'
    600 )


  closeNav: ->
    @$body.removeClass 'show-nav nav-open'

  setWidths:->
    console.log '[Dropshop] setting page dims'
    @$navWrapper.css
      height: window.dims.navWidth*3
      width: window.dims.navWidth*3
      top: -window.dims.navWidth*1.5
      left: -window.dims.navWidth*0.5
      
    ###@sizes = 
      windowWidth: $(window).width()
      windowHeight: $(window).height()
      headerHeight: $('header.header').outerHeight()
    @isMobile = @sizes.windowWidth < 580
    @navWidth = if @sizes.windowWidth > @sizes.windowHeight then @sizes.windowWidth else @sizes.windowHeight
    ###
    
      #width: @sizes.windowWidth

    # Amend #wrapper height in stylesheet so no need to do it on each page load
    #css = '.fullscreen { min-height : '+ window.dims.windowHeight + 'px }'
    ###$sheet = document.getElementById('styles')
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
      return###


  preloadBgImage: (parent)->
    picture = $(parent).find('picture')
    return unless picture.length
    console.log '[App] lazy loading image'
    el = $(picture)
    img = el.find 'img'
    imgLoad = imagesLoaded(el);
    imgLoad.on 'progress', (instance, image) ->
      if typeof image.img.currentSrc == 'undefined'
        imgSrc = image.img.src
      else
        imgSrc = image.img.currentSrc

      if image.isLoaded
        $(image.img).parent().addClass 'loaded'
        console.log 'Image ' + imgSrc + ' loaded'
        dropshop.$body.removeClass('loading').addClass 'loaded'
      

  ######################
  ## ON SCROLL
  ######################
  onScroll: ->
    window.ticking = false
    #unless dropshop.isMobile
    if window.latestKnownScrollY > 100
      dropshop.$body.addClass 'scrolled'
    else
      dropshop.$body.removeClass 'scrolled'

    # Animate elements on scroll when visible
    dropshop.$allMods.each (i, el) ->
      el = $(el)
      el.addClass 'animate' if el.visible(true)

    return




  ######################
  ## EVENT LISTENERS
  ######################
  setEventListeners: ->
    # Use this for setting new event listeners that need to be set after ajax page loads
    console.log '[Dropshop] setting event listeners'
    
    @$doc.on 'click', 'a#menu-toggle', ->
      if dropshop.$body.hasClass 'nav-open'
        dropshop.closeNav()
      else  
        dropshop.openNav()
      false

