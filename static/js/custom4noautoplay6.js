
  // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav:true,
        items:1,
        responsive:{
	         0: {
        		items: 1
		    },
		    320: {
		        items: 1
		    },
		    700: {
		        items: 2
		    },
		    1000: {
		        items: 3
		    }
    }
    });