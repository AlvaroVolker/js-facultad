const fs = require('fs');
const querystring = require('querystring');
const index = fs.readFileSync('../index.html');

const sendIndex = function(res) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(index);
};

const sendFile = function(response, file) {
	var fdata = fs.readFileSync(file);
	var extension = file.substring(file.lastIndexOf('.') + 1);
	switch (extension) {
		case 'css'  : { response.writeHead(200,{'Content-Type' : 'text/css'}); break;}
		case 'js'   : { response.writeHead(200,{'Content-Type' : 'text/javascript'}); break;}
		case 'json' : { response.writeHead(200,{'Content-Type' : 'application/json'}); break;}
		case 'jpeg' : { response.writeHead(200,{'Content-Type' : 'image/jpeg'}); break;}
		case 'ico'  : { response.writeHead(200,{'Content-Type' : 'image/x-icon'}); break;}
	}
	response.end(fdata);
};

const sincronizar = function(req, res) {
	 if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Ok');

    	archivar(JSON.parse(body));
    });
};

const archivar = function(datos) {
	var fname = __dirname + '/datos/' + 'personas_' + Date.now() + '.dat';
	//console.log(fname);
	var fstream = fs.createWriteStream(fname);
	datos.forEach( x => fstream.write('Apellido: ' + x.apellido + ', Nombre: ' + x.nombre + ', DNI: ' + 
		x.dni + ', F.Nacto: ' + x.fnac + ', Email: ' + x.email + '\n'));
	fstream.end();
};

var route = function(request, response) {
	var url = request.url;
console.log(url);
	switch (url) {
		case '/' : { sendIndex(response); break; }
		case '/favicon.ico' : { sendFile(response, '../css/img' + url); break; }
		case '/sincronizar' : { sincronizar(request, response); break; }
		default :  {sendFile(response, '..' + url); break;}
	}
};


exports.route = route;


