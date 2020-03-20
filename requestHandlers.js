function start(response, postData){


  console.log('request handler start was called');

  const body = 'BODY START';

  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write (body);

  response.end();


}



function upload(response,postData) {

  console.log('request handler upload was called');

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end();

}


exports.start = start;

exports.upload = upload;
