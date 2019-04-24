var listar = {
	thead : function() {
		var vthead = html.thead();
		var vtr = html.tr();
		vtr.appendChild(html.th('Apellido'));
		vtr.appendChild(html.th('Nombre'));
		vtr.appendChild(html.th('F.Nac.'));
		vtr.appendChild(html.th('DNI'));
		vtr.appendChild(html.th('Email'));
		vthead.appendChild(vtr);
		return vthead;
	},
	tbody : function(datos) {
			var recsCnt = datos.length;
			var vtbody = html.tbody();

			for (var i = 0; i < recsCnt; i++) {
			    var vtr = html.tr();  //Creo la <tr>
		    	vtr.className = 'clickable';

			    var elem = JSON.parse(datos[i]);   
		    	vtr.id = elem.dni;
			 
			    for (var key in elem) {
			    	vtr.appendChild(html.td(elem[key])); //agrego a la <tr> cada <td>
			    }
			    vtbody.appendChild(vtr); // agrego la <tr> con todos sus <td> al <tbody>
			}
			return vtbody;
		},
	table : function(datos) {
		var vtable = html.table();
		vtable.className = 'table table-striped table-hover'; //bootstrap classes
		vtable.appendChild(this.thead()); //agrega <thead>
		vtable.appendChild(this.tbody(datos)); //agrega <thead>
		vtable.id = 'tab-listar';
		return vtable;
	},
	div : function(datosIn) {
		var divl = html.div('listar');
		var datos = datosIn || db.traerTodos();
		divl.appendChild(this.table(datos));
		return divl;
	}
};

