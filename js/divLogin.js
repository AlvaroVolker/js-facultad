/*
<form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
*/

var login = {
	form : function() {
		var f = html.form('login','form-signin');
		var h = html.h2('Ingresar','form-signin-heading');
		var le = html.label('Usuario','sr-only');
		var ie = html.input('email','Usuario','form-control','');
		var lp = html.label('Password','sr-only');
		var ip = html.input('password','Password','form-control','');
		var bi = html.button('login','Ingresar','btn btn-lg btn-primary btn-block');
		f.appendChild(h);
		f.appendChild(le);
		f.appendChild(ie);
		f.appendChild(lp);
		f.appendChild(ip);
		f.appendChild(bi);
		app.putInMain(f);
	},
	div : function(accion) {
		var divl = html.div('login','mx-3 my-3');
		divl.appendChild(html.h3('Ingreso al sistema'));
		var divDNI = html.div('dni','form-group row');
		var labelDNI = html.label('DNI','col-2');
		var inputDNI = html.input('text','DNI','col-8 col-form-label');
		divDNI.appendChild(labelDNI);
		divDNI.appendChild(inputDNI);


		var divUsuario = html.div('Usuario','form-group row');
		var labelUsuario = html.label('Usuario','col-2');
		var inputUsuario = html.input('text','Email','form-control col-6 mb-2 mr-sm-2 mb-sm-0','');
		divUsuario.appendChild(labelUsuario);
		divUsuario.appendChild(inputUsuario);

		var divPassword = html.div('Password','form-group row');
		var labelPassword = html.label('Usuario','col-2');
		var inputPassword = html.input('password','Password','form-control col-6 mb-2 mr-sm-2 mb-sm-0','');
		divPassword.appendChild(labelPassword);
		divPassword.appendChild(inputPassword);

		divl.appendChild(divUsuario);
		divl.appendChild(divPassword);

		if (accion) {
			divl.appendChild(this.registerbuttons());
			app.putInMain(divl);
			app.enfocar('input-email');
			return;
		}
		else {
			divl.appendChild(this.loginbuttons());
		}
		return divl;
	},

	loginbuttons : function() {
		var divBtns = html.div('div-login-btns','btn-toolbar');
		var btnIngresar = html.button('login','Ingresar','col-2 btn btn-primary');
		var btnCancelar = html.button('login','Cancelar','col-2 btn btn-success ml-2');
		var btnCrear = html.button('login','Crear','col-2 btn btn-warning ml-2');
		divBtns.appendChild(btnIngresar);
		divBtns.appendChild(btnCancelar);
		divBtns.appendChild(btnCrear);
		return divBtns;
	},

	registerbuttons : function() {
		var divBtns = html.div('div-register-btns','btn-toolbar');
		var btnCrear = html.button('registrar','Crear','col-2 btn btn-primary');
		var btnCancelar = html.button('registrar','Cancelar','col-2 btn btn-success ml-2');
		divBtns.appendChild(btnCrear);
		divBtns.appendChild(btnCancelar);
		return divBtns;
	},


	login : function() {
		var email = document.getElementById('input-email').value;
		var password = document.getElementById('input-password').value;
		var link = document.getElementById('loggedIn');

		if (!email || !password) {
			alert("Datos imcompletos");
			return;
		}

		var dbpass = db.buscarusuario(email);

		if (!dbpass) {
			alert("El usuario no existe");
			return;
		}

		if (password === dbpass ) {
			var usuconn = document.getElementById('usuarioConectado');
			var uh4 = document.createElement('h4');
			var txt = document.createTextNode('Usuario: ' + email);
			uh4.appendChild(txt);
			usuconn.appendChild(uh4);
			link.innerHTML = email;
			app.clearMain();
		}
		else {
			alert("Password incorrecta");
		}
	},

	cancelar : function() {
		app.clearMain();
	},

	crear : function() {
		var email = document.getElementById('input-email').value;
		var password = document.getElementById('input-password').value;
		if (!email || !password) {
			alert("Datos incompletos");
			return;
		}

		alert("Datos completos: " + email + '/' + password + '->' + md5(password));
		//db.guardar(email, password);
	},

};
