// Genera el <div> para buscar x apellido
var buscar = {
	div : function() {
		var divb = html.div('buscar');
		var h3 = html.h3('Búsqueda de datos por apellido');
		var form = html.form('Buscar','form-inline');
		var input = html.input('search','Apellido','form-control col-6 mb-2 mr-sm-2 mb-sm-0');
		var button = html.button('buscar','Buscar','btn btn-success col-2');

		divb.appendChild(h3);
		form.appendChild(input);
		form.appendChild(button);
		divb.appendChild(form);
		
		return divb;
	},
	//Click en el boton
	ok : function() {
		var apellido = document.getElementById('input-apellido').value;
		var results = db.buscarPorApellido(apellido);

		if (results.length > 0) {
			app.putInMain(listar.div(results));
		}
		else {
			alert('No hay datos con el apellido ' + apellido);
		}
	}
};
