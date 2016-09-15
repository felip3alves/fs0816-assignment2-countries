const Countries = require('world-countries');
var lodash = require('lodash');


//var nations = Countries.all;

//console.log(nations);

module.exports = {

  all: (setting = {loadAll:false, pageSize:15, index:0})  => {
      if (setting.loadAll) {
      return Countries;
      }

      var startIndex = setting.index * setting.pageSize;
      return Countries.slice(startIndex, setting.pageSize);






      if(setting.pageSize === 100) {
      return Countries.slice(startIndex, setting.pageSize);
      };



  },
  // all(){
  //
  // }



  //filter,
  //get,
  // etc
};






