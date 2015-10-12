var excel = require('excel-stream');
var fs = require('fs');
 
fs.createReadStream('a.xls')
  .pipe(excel({
     sheet: 'Sheet1'
  }))
  .on('data', function(data){
	console.log(data);
  });

  //https://www.npmjs.com/package/excel-stream