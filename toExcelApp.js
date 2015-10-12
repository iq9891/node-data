var toxl = require('jsonexcel');
var fs = require('fs');
 
//var test = [
//    {
//        parent1: {
//            child1: {
//                child11: 10, 
//                child12: 11
//            }, 
//            child2: {
//                child21: 20, 
//                child22: 21
//            }
//        }, 
//        parent2 : {
//            child1: {
//                child11: 101, 
//                child21: 102
//            }
//        }
//    }, 
//    {
//        parent1: {
//            child2: {
//                child21: 20, 
//                child22: 21
//            }, 
//            child3: {
//                child31: 30, 
//                child32: 31
//            }
//        }, 
//        parent2 : {
//            child1: {
//                child11: 101, 
//                child21: 102
//            }
//        }
//    }
//];

var test = [
    {
        parent1: 
            'child1', 
        parent2 : 
            'child1', 
        parent3 : 
            'child1', 
        parent4 : 
            'child1', 
        parent5 : 
            'child1'
    }
]


 
var buffer = toxl(test, "My Example", ".");
fs.writeFile("toExcel.xls", buffer,  "binary",function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Saved excel file to example.xls");
    }
});