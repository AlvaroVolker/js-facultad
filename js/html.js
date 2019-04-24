var html = {
	table : function(id, classname) {
		var t = document.createElement('table');
		t.id = id;
		t.className = classname;
		return t;
	},
	tr : function() {
		var r = document.createElement('tr');
		return r;
	},
	td : function(data) {
		var d = document.createElement('td');
		var txt = document.createTextNode(data);
		d.appendChild(txt);
		return d;
	},
	th : function(data) {
		var d = document.createElement('th');
		var txt = document.createTextNode(data);
		d.appendChild(txt);
		return d;
	},	
	tbody : function() {
		var b = document.createElement('tbody');
		return b;
	},
	thead : function() {
		var h = document.createElement('thead');
		return h;
	},
	txt : function(texto) {
		var tx = document.createTextNode(texto);
		return tx;
	},
	button : function(modulo, action, classname) {
		var b = document.createElement('button');
		b.id = 'btn-' + modulo + '-' + action.toLowerCase();
		b.value = action;
		b.type = 'button';
		b.innerHTML = action;
		b.className = classname;
		return b;
	},
	label : function(text, classname) {
		var l = document.createElement('label');
		var txt = document.createTextNode(text);
		l.appendChild(txt);
		l.setAttribute('for',text.toLowerCase());
		l.className = classname;
		return l;
	},
	input : function(type, placeholder, classname, data) {
		var i = document.createElement('input');
		i.className = classname;
		i.type = type;
		i.placeholder = placeholder;
		i.id = 'input-' + placeholder.toLowerCase();
		if (data) {
			//console.log('html.input.data', data);
			i.value = data;
		}
		return i;
	},
	div : function(id, classname) {
		var d = document.createElement('div');
		d.id = 'div-' + id;
		d.className = classname  || 'mx-1 my-1';
		return d;
	},
	h3 : function(texto) {
		var h = document.createElement('h3');
		var txt = document.createTextNode(texto);
		h.appendChild(txt);
		return h;
	},
	h2 : function(texto, classname) {
		var h = document.createElement('h2');
		var txt = document.createTextNode(texto);
		h.className = classname || '';
		h.appendChild(txt);
		return h;
	},	form : function(name, classname) {
		var f = document.createElement('form');
		f.id = 'form-' + name.toLowerCase();
		f.className = classname;
		return f;
	}
};  
