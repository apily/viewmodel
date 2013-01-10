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

var events = require('event-manager');
var delegates = require('delegate-manager');
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
  options = options || {};
  this.el = options.el || document.createElement('div');
  this.model = options.model || new Model();
  this.events = delegates(this.el, this);
  this.messages = events(this.model, this);
}
