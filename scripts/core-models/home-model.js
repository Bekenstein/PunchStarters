class HomeModel {
    constructor() {
    }

    render(isLoggedIn, database) {
        if (isLoggedIn) {
            $('.wrapper header .header-button-holder').html(
                '<div class="header-button home-redirect">' +
                '   <p>Home</p>' +
                '</div>' +
                '<div class="header-button list-redirect">' +
                '   <p>PunchStarter List</p>' +
                '</div>' +
                '<div class="header-button create-redirect">' +
                '   <p>Create</p>' +
                '</div>' +
                '<div class="header-button logout-redirect">' +
                '   <p>Logout</p>' +
                '</div>');

            $('.wrapper main').html(
                '<div class="home-logged-in-welcome">' +
                    'Welcome, '+ sessionStorage['username'] + '!' +
                '</div>' +
                '<div class="home-logged-in-title">' +
                'Top 3 Punchstarters' +
                '</div>' +
                '<div class="top-3-starters-wrapper">' +
                '</div>'
            );

            let progressArray = [];
            for(let punch of database){
                let progress = (punch.accumulatedMoney / punch.targetPrice) * 100;
                progressArray.push(progress);
            }
            let sortedPunchStarters = [];
            progressArray.sort((a,b) => b-a);

            for(let i =0; i < 3; i++){
                for(let punch of database){
                    let progress = (punch.accumulatedMoney / punch.targetPrice) * 100;
                    if(progressArray[i] == progress){
                        sortedPunchStarters.push(punch);
                        let container = $('.top-3-starters-wrapper');
                        let punchBox = $('<div class="punch-starter-holder">');
                        container.append(punchBox);
                        punchBox.append($('<label>').text(punch.name));
                        punchBox.append($('<label>').text(punch.manufacturer));
                        punchBox.append($('<label>').text(`${punch.accumulatedMoney} / ${punch.targetPrice}`));
                    }
                }
            }


        } else {
            $('.wrapper header .header-button-holder').html(
                '<div class="header-button home-redirect">' +
                '   <p>Home</p>' +
                '</div>' +
                '<div class="header-button login-redirect">' +
                '   <p>Login</p>' +
                '</div>'
            );

            $('.wrapper main').html(
                '<div class="stars"></div>' +
                '<div class="twinkling"></div>' +
                '<div class="clouds"></div>' +
                '<div class="home-logged-out-wrapper">' +
                '   <h1>PunchStarter - The unique public-benefit, crowdfunding platform for unique projects!</h1>' +
                '   <h2><a href="#/">Login now</a>, and create your own PunchStarter.</h2>' +
                '</div>'
            );
        }
    }

    attachEvents(isLoggedIn) {
        if (isLoggedIn) {
            //TODO: Home redirect onclick
            $('.home-redirect').on('click', function(){
                $('.wrapper main').trigger('changePage',['home']);
            });
            //TODO: List redirect onclick
            $('.list-redirect').on('click', function(){
                $('.wrapper main').trigger('changePage',['list']);
            });
            //TODO: Create redirect onclick
            $('.create-redirect').on('click', function(){
                $('.wrapper main').trigger('changePage',['create']);
            });
			//TODO: Logout redirect onclick
            $('.logout-redirect').on('click', function(){
                sessionStorage.removeItem('username');
                $('.wrapper main').trigger('changePage',['home']);
            });

        } else {
            $('.home-redirect').on('click', function () {
                $('.wrapper main').trigger('changePage', ['home']);
            });

            $('.login-redirect').on('click', function () {
                $('.wrapper main').trigger('changePage', ['login']);
            });

            $('.home-logged-out-wrapper h2 a').on('click', function() {
                $('.wrapper main').trigger('changePage', ['login']);
            });

            let hovered = false;

            $('.home-logged-out-wrapper h2 a').mouseenter(function () {
                hovered = true;
            }).mouseleave(function () {
                hovered = false;
                blink();
            });

            function blink() {
                if (!hovered) {
                    $('.home-logged-out-wrapper h2 a').fadeOut(1000).fadeIn(1000, function () {
                        if (!hovered) {
                            blink();
                        } else {
                            $('.home-logged-out-wrapper h2 a').fadeIn();
                        }
                    });
                } else {
                    $('.home-logged-out-wrapper h2 a').fadeIn();
                }
            }

            blink();
        }
    }
}

module.exports = HomeModel;