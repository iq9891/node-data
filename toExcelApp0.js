var json2xls = require('json2xls');
var fs = require('fs');
var request = require('request');

var options = {
    url: 'http://data.appadhoc.com/apps/0030ffb5-0ab2-4dc6-8d35-746958151675/daily_api_count?from_hour=2016-09-30T16:00:00.000Z&to_hour=2016-10-08T15:59:59.999Z',
    headers: {
      'Auth-Key':'5a2319e8-4234-495e-a3db-72e0ecbfa957'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        var xls = json2xls(info.daily_api_count,{
            fields: {
              api_count:'number',
              app_id:'string',
              experiment_id:'string',
              hour:'string'
            }
        });
        fs.writeFile('data.xlsx', xls, 'binary');
    }
}

request(options, callback);
