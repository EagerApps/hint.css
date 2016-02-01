(function() {

  if (!document.documentElement.classList)
    return;

  var options = INSTALL_OPTIONS;
  var appliedClasses = [];

  var reset = function(){
    for (var i=appliedClasses.length; i--;){
      appliedClasses[i][0].classList.remove(appliedClasses[i][1]);
    }

    appliedClasses = [];
  }

  var addClass = function(el, className) {
    el.classList.add(className);

    appliedClasses.push([el, className]);
  }

  var render = function(){
    for (var i=0; i < options.tooltips.length; i++){
      var tip = options.tooltips[i];

      var el = document.querySelector(tip.location);
      if (!el) continue;

      addClass(el, "hint--" + tip.direction);

      if (tip.style !== 'standard')
        addClass(el, "hint--" + tip.style);

      if (tip.animation !== 'slide')
        addClass(el, "hint--" + tip.animation);

      if (tip.roundedCorners)
        addClass(el, "hint--rounded");

      if (tip.alwaysShow)
        addClass(el, "hint--always");

      el.setAttribute('data-hint', tip.text);
    }
  }

  render();

  INSTALL_SCOPE = {
    setOptions: function(opts) {
      options = opts;

      reset();
      render();
    }
  }
})()
