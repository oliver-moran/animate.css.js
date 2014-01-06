// (c) 2013 Oliver Moran <oliver@nth-iteration.ie>
// Licensed under the MIT license.

// A jQuery plugin for HTMLElement.animate add-on
// Usage: e.g. $(document.body).animate2("tada");
(function ( $ ) {
	$.fn.animate2 = function(animation, callback, context) {
		return this.each(function() {
            this.animate(animation, callback, context);
		});
	};
}( jQuery ));
