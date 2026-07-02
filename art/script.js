
        function open_menu() {
            document.getElementById("myNav").style.width = "100%";
        }

        function close_menu() {
            document.getElementById("myNav").style.width = "0%";
        }

        function reload_page(url) {
            if (url == "#") {
                location.reload();
            } else {
                location.href = url;
            }
        }

        var heroShinker = function () {
            var hero = $('.hero-nav'),
                heroHeight = $('.hero-nav').outerHeight(true);
            $(hero).parent().css('padding-top', heroHeight);
            $(window).scroll(function () {
                var scrollOffset = $(window).scrollTop();
                if (scrollOffset < heroHeight) {
                    $(hero).css('height', (heroHeight - scrollOffset));
                }
                if (scrollOffset > (heroHeight - 215)) {
                    hero.addClass('fixme');
                } else {
                    hero.removeClass('fixme');
                };
            });
        }
        heroShinker();