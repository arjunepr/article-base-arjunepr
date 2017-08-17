/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
    Articles.find({}).exec(function(err, articles){
      if(err){
        return res.send(500, {error: 'Internal Server Error'});
      };

      res.view('list', {articles})
    })
  }
};

