"use strict"
import * as str from './stringscript.js';
window.addEventListener("DOMContentLoaded", start);


function start() {
  window.start = start; // Hack for exposing the start() function to the console!
  console.log("Start!");

  sayHello("justin fiNCh-fleTchley");
  
}


function sayHello( name ) {
  console.log(`Hello ${str.capitalize(name)}`);
}

