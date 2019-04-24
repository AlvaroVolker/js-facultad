var app = {
	crearEventosMenu : function() {
		var nav = document.getElementById('menu');
		nav.addEventListener('click', this.eventoMenu);

		var maindiv = document.getElementById('main');
		maindiv.addEventListener('click', this.eventoMain);
	},

	eventoMenu : function(evt) {
		var option = evt.srcElement.text;
		switch (option) {
			case 'Agregar'      : { app.putInMain(agregar.div()); app.enfocar(); break;}
			case 'Buscar'       : { app.putInMain(buscar.div()); app.enfocar();  break;}
			case 'Listar'       : { app.putInMain(listar.div()); break;}
			case 'Ingresar'     : { app.putInMain(login.div()); app.enfocar('input-email'); break;}
			case 'Sincronizar'  : { app.sincronizar(); break;}
			case 'Inicio'       : { app.clearMain(); break;}
			default             : { app.clearMain(); break;}
		}
	},

	eventoMain : function(evt) {
		if ( evt.target.localName === 'button') {
			var option = evt.target.id;

			switch (option) {
				case 'btn-agregar-guardar'    : { agregar.ok(); break;}
				case 'btn-agregar-limpiar'    : { agregar.limpiar(); break;}
				case 'btn-buscar-buscar'      : { buscar.ok(); break;}
				case 'btn-editar-confirmar'   : { editar.ok(); break;}
				case 'btn-editar-borrar'      : { editar.borrar(); break;}
				case 'btn-editar-cancelar'    : { editar.cancelar(); break;}
				case 'btn-login-ingresar'     : { login.login(); break; }
				case 'btn-login-cancelar'     : { login.cancelar(); break; }
				case 'btn-login-crear'        : { login.div('Crear'); break; }
				case 'btn-registrar-crear'    : { login.crear(); break; }
				case 'btn-registrar-cancelar' : { login.cancelar(); break; }

				default        : { console.log('Nada para ', option); break;}
			}
		}
		else if (evt.target.localName === 'td') {
			var dni = evt.target.parentNode.id;

			// La siguiente linea es para romperse un poco la cabeza!
			app.putInMain(editar.div(JSON.parse(db.buscar(dni)[0])));
			//El truco es ir de adentro hacia afuera

			app.enfocar();
		}
	},

	clearMain : function() {
		var mainDiv = document.getElementById('main');
		while(mainDiv.hasChildNodes())
		{
		   mainDiv.removeChild(mainDiv.lastChild);
		}
	},

	putInMain : function(node) {
		this.clearMain();
		var mainDiv = document.getElementById('main');
		mainDiv.appendChild(node);
	},

	enfocar : function(destino) {
	    var textbox = document.getElementById(destino || 'input-apellido');
	    textbox.focus();
	    textbox.scrollIntoView();
	},

	sincronizar : function() {
		var dbData = db.traerTodos();
		var http = new XMLHttpRequest();
		http.open("POST", "/sincronizar", true);
		http.setRequestHeader("Content-type", "application/json");
		http.onreadystatechange = function() { //Call a function when the state changes.
		    if(http.readyState == 4 && http.status == 200) {
		        console.log(http.responseText);
		        if ( http.responseText === 'Ok') {
		        	alert('Sincronizacion exitosa');
		        }
		    }
		};
		http.send('[' + dbData.toString() + ']');
	}
};


app.crearEventosMenu();
