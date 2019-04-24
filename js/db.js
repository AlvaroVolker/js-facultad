var db = {
	guardar :	function(key, value) {
		localStorage.setItem(key,value);
	},
	traerTodos : function() {
	    var datos = [];
	    for (var i = 0; i < localStorage.length; i++) {
	        datos[i] = localStorage.getItem(localStorage.key(i));
	    }
	    return datos;
	},
	buscar : function(dni) {
		return this.traerTodos().filter( x => JSON.parse(x).dni === dni );
	},
	buscarPorApellido : function(apellido) {
		return this.traerTodos().filter( x => JSON.parse(x).apellido === apellido );	
	},
	borrar : function(dni) {
		localStorage.removeItem(dni);
	},
	traerJSON : function() {
		return this.traerTodos().map( x => JSON.parse(x) );
	}
};
