var Contact = {
  init: function () {
    this.login();
  },

  login: function () {
    $("#form-login").validate({
      rules: {
        "login-mail": {
          required: true
        },
        "login-password": {
          required: true
        }
      }
    });
  }

};

$(document).on("ready", function () { Contact.init(); });