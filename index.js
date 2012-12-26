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

/*
 * ViewModel
 * Create a viewmodel.
 *
 * @param {Element} el element
 * @param {Object} model model
 * @return {ViewModel} a viewmodel
 */

function ViewModel(el, model) {
  if (!(this instanceof View)) return new View(el, model);

  this.el = el;
  this.model = model;
  this.events = delegates(el, this);
  this.messages = events(model, this);
}