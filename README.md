# Animate.css.js #

A JavaScript add-on to for Animate.css <https://daneden.me/animate/>.

The script adds an `animate()` method to JavaScript's HTMLElement prototype so that Animate.css animations can be called directly on HTML elements from JavaScript:

```js
HTMLElement.animate(String animation, [Function callback[, Object context]])
```

- `animation`: the name of an animation in the Animate.css library (e.g. "tada")
- `callback`: an optional function to call when the animation is complete
- `context`: the context object (`this`) that is applied to the callback

## Examples ##

```html
<!-- Download animate.min.css from here: https://daneden.me/animate/ -->
<link rel="stylesheet" type="text/css" href="animate.min.css">

<!-- Link to the Animate.css.js library -->
<script type="text/javascript" src="animate.css.min.js"></script>

<!-- click to animate -->
<button id="button" onclick="this.animate('tada');">Click Me</button>

<script type="text/javascript">

var el = document.getElementById("button");

el.animate('tada'); // performs the 'tada' animation
el.animate('tada', callback); // "Animate.css done! [object Window]"
el.animate('tada', callback, document); // "Animate.css done! [object HTMLDocument]"

// the callback function used above
function callback(){
  alert("Animate.css done! " + this);
}

</script>
```

## jQuery plugin ##

A [jQuery](http://jquery.com/) plugin is provided with the script.  To use the plugin, include both the main script file and the jQuery plugin file:
```html
<link rel="stylesheet" type="text/css" href="animate.min.css">
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="animate.css.min.js"></script>
<script type="text/javascript" src="jquery.animate.css.min.js"></script>

<button id="button" onclick="$(this).animate2('tada');">Click Me</button>
```

The plugin adds a `animate2()` method to jQuery that accepts the same parameters as the HTMLElement add-on. The plugin fully supports collections and chaining, allowing multiple elements to be animated simultaneously in one line of code.
