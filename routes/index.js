
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};

exports.hw9 = function(req, res){
  var user = req.user;
  console.log(req);
  res.render('hw9.html', {u: user, title: 'Cloudant Boiler Plate' });
};
