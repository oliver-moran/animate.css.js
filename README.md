Animate.css.js
==============

A JavaScript add-on to for Animate.css <https://daneden.me/animate/>.

The script adds an `animate` method to JavaScript's HTMLElement prototype so that Animate.css animations can be called directly on HTML elements:

    HTMLElement.animate(String animation, [Function callback[, Object context]])

- `animation`: the name of an animation in the Animate.css library (e.g. "tada")
- `callback`: an optional function to call when the animation is complete
- `context`: the context object (`this`) that applied to the callback

Examples
--------

    <!-- Download animate.min.css from here: https://daneden.me/animate/ -->
    <link rel="stylesheet" type="text/css" href="animate.min.css">

    <!-- Link to the Animate.css.js library -->
    <script type="text/javascript" src="animate.css.min.js"></script>
    
    <!-- click to animate -->
    <button id="button" onclick="this.animate('tada');">Click Me</button>

    <script type="text/javascript">

    var el = document.getElementById("button");

    el.animate('tada'); // performs the 'tada' animation
    el.animate('tada', callback); // "Animate.css done! [object Window];"
    el.animate('tada', callback, document); // "Animate.css done! [object HTMLDocument];"

    // the callback function used above
    function callback(){
      alert("Animate.css done! " + this)
    }

    </script>
