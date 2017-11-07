var http = require('http');
var hostName = '127.0.0.1';
var port = 3000;

var server = http.createServer((req,res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');

    var html = buildHtml(req);
    
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);

});

function buildHtml(req) {
    var header = '<title>Serverska stranica</title>';
    var body = '<h1>Hello World</h1> <img src="http://gazettereview.com/wp-content/uploads/2015/05/Timberwolves-Logo.png" alt=""> <p>The Minnesota Timberwolves are an American professional basketball team based in Minneapolis, Minnesota. The Timberwolves compete in the National Basketball Association (NBA), as a member club of the leagues Western Conference Northwest Division.[7] Founded in 1989, the team is owned by Glen Taylor.[8] The Timberwolves play their home games at Target Center, their home since 1990 Like most expansion teams, the Timberwolves struggled in their early years, but after the acquisition of Kevin Garnett in the 1995 NBA draft, the team qualified for the playoffs in eight consecutive seasons from 1997 to 2004. Despite losing in the first round in their first seven attempts, the Timberwolves won their first division championship in 2004 and advanced to the Western Conference Finals that same season. Garnett was also named the NBA Most Valuable Player Award for that season.[10] The team has been in rebuilding mode for the past decade since missing the playoffs in 2005, and trading Garnett to the Boston Celtics in 2007.[11] Garnett returned to the Timberwolves in a February 2015 trade and finished his career there, retiring in the 2016 offseason. </p>';
  
    // concatenate header string
    // concatenate body string
  
    return '<!DOCTYPE html>'
         + '<html><header>' + header + '</header><body>' + body + '</body></html>';
  };

server.listen(port, hostName, () => {
    console.log('Server running at http://' + hostName + ':' + port + '/');
});