'use strict';


var mongoose = require('mongoose'),
  Scene = mongoose.model('Scenes');

exports.list_all_images = function(req, res) {
 console.log('In here');
  Scene.find({}, function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};

export.get_a_image = function(req, res) {
app.get("/image.png", (req, res) => {
  res.sendFile(path.join(__dirname, "./uploads/image.png"));
});
}

export.create_a_image = function(req, res) {
  var new_image = new Image(req.body);
  new_image.save(function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};


exports.read_a_image = function(req, res) {
  Scene.findById(req.params.id, function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};


exports.update_a_image = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};


exports.delete_a_image = function(req, res) {


  Image.remove({
    _id: req.params.id
  }, function(err, image) {
    if (err)
      res.send(err);
    res.json({ message: 'Scene successfully deleted' });
  });
};
