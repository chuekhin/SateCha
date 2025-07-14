$(document).ready(()=>
        {      

             $('.nav-item a').click((event)=>
            {
                $('.nav-item a').removeClass('active')
                const element= $(event.currentTarget)
                element.addClass('active')
            })

             //animation1(slide from left)
            const slideobjects1 = $(".slideobject1")
            function SlideAnimations1()
            {
                $(window).scroll(()=>
                {
                    const winTop = $(window).scrollTop();
                    slideobjects1.each((index,slideobject1)=>
                    {
                    const jqueryslideObject1 =  $(slideobject1)
                        if(winTop+700 > jqueryslideObject1.offset().top)
                        {
                            $('.slideobject1').removeClass("invisible");
                            jqueryslideObject1.addClass('slideL')
                        }
                    })
                })
            }
            $(window).on("scroll", SlideAnimations1);
           SlideAnimations1();

            //animation2(slide from right)
            const slideObjects2 = $(".slideobject2")
            function SlideAnimations2()
            {
                $(window).scroll(()=>
                {
                    const winTop = $(window).scrollTop();
                    slideObjects2.each((index,slideobject2)=>
                    {
                    const jqueryslideObject2 =  $(slideobject2)
                        if(winTop+700 > jqueryslideObject2.offset().top)
                        {
                            $('.slideobject2').removeClass("invisible");
                            jqueryslideObject2.addClass('slideR')
                        }
                    })
                })
            }
            $(window).on("scroll", SlideAnimations2);
            SlideAnimations2();

            //animation3(slide down)
            setTimeout(function () 
            {
            $('.slideobject3').removeClass("invisible");
            $('.slideobject3').addClass('slideD');
            }, 2000);

            // Highlighting each word
            $('#welcome span').each(function (index) 
            {
                let word = $(this);
                setTimeout(function () 
                {
                    word.addClass('highlight');
                }, index * 600); // delay each word by 600ms
            });

            $('body').addClass('light-mode');
            $('#modeToggle').click(function () {
            $('body').toggleClass('light-mode');
            $('body').toggleClass('dark-mode');
            });
                })
