var exec = require('child_process').exec;


function start() {

  console.log('RequestHandler START was called');

  var content = 'CONTENT';

  exec(  'ls-lah', function(error, stdout, stderr){  content = stdout;   }   );

  return content;

}



function upload() {

  console.log('RequestHandler UPLOAD was called');

  return 'Hello upload';

}


exports.start = start;

exports.upload = upload;
