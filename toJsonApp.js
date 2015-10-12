var node_xj = require("xls-to-json");
node_xj({
	input: "a.xls",  // input xls 
	output: "data.json", // output json 
	sheet: "Sheet1",  // specific sheetname 
}, function(err, result) {
	if(err) {
	  console.error(err);
	} else {
	  console.log(result);
	}
});