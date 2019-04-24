// Arma el form de carga de datos en un <div>
var agregar = {
	div : function() {
		var diva = html.div('agregar');

		var divApellido = html.div('apellido','form-group row');
		var labelApellido = html.label('Apellido','col-2');
		var inputApellido = html.input('text','Apellido','form-control col-8');
		divApellido.appendChild(labelApellido);
		divApellido.appendChild(inputApellido);

		var divNombre = html.div('nombre','form-group row');
		var labelNombre = html.label('Nombre','col-2');
		var inputNombre = html.input('text','Nombre','col-8 col-form-label');
		divNombre.appendChild(labelNombre);
		divNombre.appendChild(inputNombre);

		var divFnac = html.div('fnac','form-group row');
		var labelFnac = html.label('F.Nac.','col-2');
		var inputFnac = html.input('date','FNac','col-8 col-form-label');
		divFnac.appendChild(labelFnac);
		divFnac.appendChild(inputFnac);

		var divDNI = html.div('dni','form-group row');
		var labelDNI = html.label('DNI','col-2');
		var inputDNI = html.input('text','DNI','col-8 col-form-label');
		divDNI.appendChild(labelDNI);
		divDNI.appendChild(inputDNI);

		var divEmail = html.div('email','form-group row');
		var labelEmail = html.label('Email','col-2');
		var inputEmail = html.input('email','Email','col-8 col-form-label');
		divEmail.appendChild(labelEmail);
		divEmail.appendChild(inputEmail);

		var divBtns = html.div('div-agregar-btns','btn-toolbar');
		var btnGuardar = html.button('agregar','Guardar','col-2 btn btn-primary');
		var btnLimpiar = html.button('agregar','Limpiar','col-2 btn btn-warning ml-2');
		divBtns.appendChild(btnGuardar);
		divBtns.appendChild(btnLimpiar);

		diva.appendChild(divApellido);
		diva.appendChild(divNombre);
		diva.appendChild(divFnac);
		diva.appendChild(divDNI);
		diva.appendChild(divEmail);
		diva.appendChild(divBtns);

		return diva;
	},
	//El formulario tiene 2 buttons. 
	// Aqui, sus eventos
	ok : function() {
		var key = document.getElementById('input-dni').value;
		var value = {
			apellido: document.getElementById('input-apellido').value,
			nombre: document.getElementById('input-nombre').value,
			fnac: document.getElementById('input-fnac').value,
			dni: document.getElementById('input-dni').value,
			email: document.getElementById('input-email').value
		};

		db.guardar(key, JSON.stringify(value));
		app.putInMain(listar.div());
	},

	limpiar : function() {
		app.putInMain(agregar.div());
		app.enfocar();
	}
};