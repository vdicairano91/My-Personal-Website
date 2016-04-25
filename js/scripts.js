$(window).load(function () {
  var in_view = new Waypoint.Inview({
    element: $('.project-flip')[0],
    enter: function () {
        $('.project-flip').addClass('animated flipInX');
      }
      //    exit: function() { 
      //      $('#test').removeClass('animated flipInX');
      //    }
  });
  var in_view = new Waypoint.Inview({
    element: $('.glyphicon-headphones')[0],
      enter: function () {
        $('.glyphicon-headphones').addClass('animated rollIn');
      }
  });
  var in_view = new Waypoint.Inview({
    element: $('.skills')[0],
    enter: function () {
      $('.expert').animate({
        width: '95%'
      }, 1500, function () {});
      $('.pro').animate({
        width: '85%'
      }, 1500, function () {});
      $('.intermediate').animate({
        width: '60%'
      }, 1500, function () {});
      $('.learning').animate({
        width: '50%'
      }, 1500, function () {});
      $('.novice').animate({
        width: '40%'
      }, 1500, function () {});
    }
  });
});
