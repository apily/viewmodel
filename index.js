
/*
 * viewmodel
 * ViewModel component
 *
 * @copyright 2012 Enrico Marino and Federico Spini
 * @license MIT
 */ 

/*
 * Expose `ViewModel`
 */

module.exports = ViewModel;

/*
 * Module dependencies
 */

var View = require('view');
var Model = require('model');

/*
 * ViewModel
 * Create a viewmodel.
 * 
 * @param {Object} options
 *   @param {Element} [options.el] element
 *   @param {Object} [options.model] model
 * @return {ViewModel} a viewmodel
 */

function ViewModel(options) {
  if (!(this instanceof ViewModel)) {
    return new ViewModel(options);
  }
  View.call(this, options);
  
  this.model = options.model || new Model();
  this.listen(this.model, this.messages);
}

/**
 * Inherit from `View`
 */

ViewModel.prototype = Object.create(View.prototype);
ViewModel.prototype.constructor = ViewModel;

/**
 * messages
 */

ViewModel.prototype.messages = {};
