var http = require('http');
var dt = require('./loginclientes');
var dt1 = require('./cadastroclientes');
var dt2 = require('./loginfuncionarios');
var dt3 = require('./cadastrofuncionarios');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Login Clientes " + dt.myDateTime() + "<br>" + "<br>" + " Cadastro Clientes" + dt1.myDateTime1() + "<br>" + "<br>" + "Login Funcionarios" + dt2.myDateTime2() + "<br>" "<br>" +  " Cadastro Funcionários" + dt3.myDateTime3();
  res.end();
}).listen(5002);
