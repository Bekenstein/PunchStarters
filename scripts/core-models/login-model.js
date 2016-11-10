class LoginModel {
    constructor() {
    }

    render(isLoggedIn, database) {
        if(isLoggedIn){
            $('.wrapper header .header-button-holder').html(
                '<div class="header-button home-redirect">' +
                '   <p>Home</p>' +
                '</div>' +
                '<div class="header-button list-redirect">' +
                '   <p>PunchStarter Lis</p>' +
                '</div>' +
                '<div class="header-button create-redirect">' +
                '   <p>Create</p>' +
                '</div>' +
                '<div class="header-button logout-redirect">' +
                '   <p>Logout</p>' +
                '</div>'
            )
        }else{
            
        }

        $('.wrapper main').html(
            '<div class="stars"></div>' +
            '<div class="twinkling"></div>' +
            '<div class="clouds"></div>' +
            '<div class="login-wrapper">' +
            '   <form class="login-form">' +
            '       <label>Choose username:</label>' +
            '       <div class="input-holder">' +
            '           <input type="text" maxlength="15" placeholder="Username...">' +
            '       </div>' +
            '   </form>' +
            '   <button type="button" class="login-button">Login</button>' +
            '</div>'
        );
    }

    attachEvents() {
        $('.login-wrapper .login-button').on('click', function () {
            let value = $('.login-form .input-holder input').val();
            if (value.length > 0) {
                sessionStorage['username'] = value;
                $('.wrapper main').trigger('changePage', ['home']);
            }
        });
    }
}

module.exports = LoginModel;