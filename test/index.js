var delegates = require('viewmodel');
var Model = require('model');

(function(){
  var el = document.getElementById('list-one');
  var model = new Model();
  var view = ViewModel(el, model);
  
  // view.messages.bind('change:size', 'onchange');
  // view.events.bind('click li a', 'onclick');

}());