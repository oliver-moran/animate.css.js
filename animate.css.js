// (c) 2013 Oliver Moran <oliver@nth-iteration.ie>
// Licensed under the MIT license.

/*
 * Extends the HTMLElement prototype with a method to temporarily add 
 * and then remove Animate.css class names.
 * @param animation A string name for an Animate.css animation (e.g. "tada")
 * @param callback (optional) A function to call when the animation 
 * has finished. Otherwise no callback is made.
 * @param context (optional) A context object (i.e. 'this') to use 
 * when calling callback defaults to the window object
 */
HTMLElement.prototype.animate = function (animation, callback, context) {
	if (typeof animation != "string") return; // must pass animation type
	var _self = this;
	animation = " animated " + animation;
	_self.className += animation;
	setTimeout(function(){
		_self.className = _self.className.replace(animation, "");
		if (typeof callback == "function") {
			callback.call((context) ? context : window);
		}
	}, (animation == "hinge") ? 2e3 : 1e3)
}