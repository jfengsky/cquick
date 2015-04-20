
var cmd = {

  init: function(_query, _res){
    console.log(_query);
    _res.send('success');
  }
};

module.exports = cmd;