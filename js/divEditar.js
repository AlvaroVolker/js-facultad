var editar = {
	div : function(datos) {
		var dive = html.div('editar');

		var divApellido = html.div('apellido','form-group row');
		var labelApellido = html.label('Apellido','col-2');
		var inputApellido = html.input('text','Apellido','form-control col-8', datos.apellido);
		divApellido.appendChild(labelApellido);
		divApellido.appendChild(inputApellido);

		var divNombre = html.div('nombre','form-group row');
		var labelNombre = html.label('Nombre','col-2');
		var inputNombre = html.input('text','Nombre','form-control col-8', datos.nombre);
		divNombre.appendChild(labelNombre);
		divNombre.appendChild(inputNombre);

		var divFnac = html.div('fnac','form-group row');
		var labelFnac = html.label('F.Nac','col-2');
		var inputFnac = html.input('date','FNac','form-control col-8', datos.fnac);
		divFnac.appendChild(labelFnac);
		divFnac.appendChild(inputFnac);

		var divDNI = html.div('dni','form-group row');
		var labelDNI = html.label('DNI','col-2');
		var inputDNI = html.input('text','DNI','form-control col-8', datos.dni);
		divDNI.appendChild(labelDNI);
		divDNI.appendChild(inputDNI);

		var divEmail = html.div('email','form-group row');
		var labelEmail = html.label('Email','col-2');
		var inputEmail = html.input('email','Email','col-8 col-form-label', datos.email);
		divEmail.appendChild(labelEmail);
		divEmail.appendChild(inputEmail);

		dive.appendChild(divApellido);
		dive.appendChild(divNombre);
		dive.appendChild(divFnac);
		dive.appendChild(divDNI);
		dive.appendChild(divEmail);

		this.dniOriginal = datos.dni;

		var divBtns = html.div('div-editar-btns','btn-toolbar');

		var btnConfirmar = html.button('editar','Confirmar','btn btn-primary');
		var btnBorrar = html.button('editar','Borrar','btn btn-danger ml-2');
		var btnCancelar = html.button('editar','Cancelar','btn btn-success ml-2');
		
		divBtns.appendChild(btnConfirmar);
		divBtns.appendChild(btnBorrar);
		divBtns.appendChild(btnCancelar);

		dive.appendChild(divBtns);

		return dive;
	},

	ok : function() {
		var key = document.getElementById('input-dni').value;

		var value = {
			apellido: document.getElementById('input-apellido').value,
			nombre: document.getElementById('input-nombre').value,
			fnac: document.getElementById('input-fnac').value,
			dni: document.getElementById('input-dni').value,
			email: document.getElementById('input-email').value
		};

		//Verificar si estamos cambiando el DNI
		var original = db.buscar(this.dniOriginal);
		if (original.length > 0) {
			db.borrar(this.dniOriginal);
		}

		//Verificar q el DNI que viene existe
		var nuevo = db.buscar(key);
		if (nuevo.length > 0) {
			db.borrar(key);
		}

		db.guardar(key, JSON.stringify(value));
		app.putInMain(listar.div());
	},

	cancelar : function() {
		app.putInMain(listar.div());
	},

	borrar : function() {
		var key = document.getElementById('dni').value;
		db.borrar(key);
		app.putInMain(listar.div());
	},
	dbiOriginal : ''
};
