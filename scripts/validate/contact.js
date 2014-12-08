var Contact = {
  init: function () {
    this.login();
    this.cadastre();
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
  },

  cadastre: function () {
    $("#form-cadastre").validate({
      rules: {
        "cadastre-nome": {
          required: true
        },
        "cadastre-login-email": {
          required: true,
          email: true
        },
        "cadastre-cpf": {
          required: true
        },
        "cadastre-senha": {
          required: true
        },
        "cadastre-senha-repeat": {
          required: true,
          equalTo: "#cadastre-senha"
        },
        "cadastre-cep": {
          required: true
        },
        "cadastre-address": {
          required: true
        },
        "cadastre-number": {
          required: true
        },
        "cadastre-complement": {
          required: true
        },
        "cadastre-reference": {
          required: true
        },
        "cadastre-district": {
          required: true
        },
        "cadastre-city": {
          required: true
        },
        "cadastre-state": {
          required: true
        }
      }
    });
  }

};

$(document).on("ready", function () { Contact.init(); });