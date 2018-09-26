$(document).ready(function(){
                
            $(".nav-item").click(function () {
                $(".nav-item").removeClass("active");
                $(this).addClass("active");
            });


                $('a[href*="#"]')
                // Remove links that don't actually link to anything
                    .not('[href="#"]')
                    .not('[href="#0"]')
                    .not('[href="#tabsNavigationSimpleIcons1"]')
                    .not('[href="#tabsNavigationSimpleIcons2"]')
                    .not('[href="#tabsNavigationSimpleIcons3"]')
                    .not('[href="#tabsNavigationSimpleIcons4"]')
                    .not('[href="#tabsNavigationSimpleIcons5"]')
                    .click(function(event) {
                        // On-page links
                        if (
                            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                            &&
                            location.hostname == this.hostname
                        ) {
                            // Figure out element to scroll to
                            var target = $(this.hash);
                            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                            // Does a scroll target exist?
                            if (target.length) {
                                // Only prevent default if animation is actually gonna happen
                                event.preventDefault();
                                $('html, body').animate({
                                    scrollTop: target.offset().top
                                }, 1000, function() {
                                    // Callback after animation
                                    // Must change focus!
                                    var $target = $(target);
                                    $target.focus();
                                    if ($target.is(":focus")) { // Checking if the target was focused
                                        return false;
                                    } else {
                                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                        $target.focus(); // Set focus again
                                    };
                                });
                            }
                        }
                    });
                    
                    
                    /*$(document).scroll(function() {
                        if($(document).scrollTop() > 50){
                            $('.header-row a').css('color', 'black');
                            $('.header-social-icons a i').css('color', 'black');
                            // $(".header-body").addClass("shrink");
                        }else{
                            $('.header-row a').css('color', 'white');
                            $('.header-social-icons  i').css('color', 'white');
                            // $(".header-body").removeClass("shrink");
                        }
                    });*/
                  
            });