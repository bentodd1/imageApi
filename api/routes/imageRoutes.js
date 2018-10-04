'use strict';
module.exports = function(app) {
  var image = require('../controllers/imageController');

  // todoList Routes
  app.route('/images')
    .get(image.list_all_images)
    .post(images.create_a_image);


  app.route('/image/:image')
    .get(image.read_a_image)
    .put(image.update_a_image)
    .delete(image.delete_a_image);
};
