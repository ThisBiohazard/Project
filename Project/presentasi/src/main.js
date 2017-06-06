// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  aria3d = require('bespoke-theme-carousel'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');
// Bespoke.js
bespoke.from('article', [
  aria3d(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism')
$('#p04').hide();
$('#p05').hide();
$('#q01').hide();
$('#p02').hide();
$('#q02').hide();
$('#q03').hide();
$('#q04').hide();
$('#q05').hide();
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==81){$("#p02").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==87){$("#p04").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==69){$("#p05").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==82){$("#q01").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==84){$("#q02").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==89){$("#q03").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==85){$("#q04").slideToggle();}});});
$(document).ready(function(){$(document).keyup(function(objEvent){(objEvent)?keycode=objEvent.keyCode:keycode=event.keyCode;if(keycode==73){$("#q05").slideToggle();}});});