const path = require('path');

module.exports = (app) => {
 app.get('/NewPost', function(req, res) {
     res.sendFile(path.join(__dirname, '../NewPost/NewPost.html'));
 })
}