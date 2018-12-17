$(function () {
    $(document).scroll(function () {
    });
        
    // Cache selectors
    var lastId,
    topMenu = $(".nav"),
    topMenuHeight = $(".navbar").outerHeight()+1,
    // All list items
    menuItems = topMenu.find("a"),
    currentLang = $(menuItems[1]).attr("href").substring(0,2),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href").substring(2));
        if (item.length) { return item; }
    });

    // Bind to scroll
    $(window).scroll(function(){
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;
      
      // Get id of current scroll item
      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
      
      if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          menuItems
            .parent().removeClass("active")
            .end().filter("[href=\""+currentLang+"#"+id+"\"]").parent().addClass("active");
      }                   
    });


});