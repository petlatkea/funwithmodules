"use strict";

let globalName = "Peter";

export function capitalize( str ) {
  if(!str) {
    str = globalName;
  }
  if( str.indexOf("-") != -1) {
    return capitalizeHyphen(str);
  } else {
    return str.trim().charAt(0).toUpperCase() + str.trim().substring(1).toLowerCase();
  }
}

function capitalizeHyphen( str ) {
  const hyphenPos = str.indexOf("-");
  const result = str.substring(0,hyphenPos+1) + str.charAt(hyphenPos+1).toUpperCase() + str.substring(hyphenPos+2).toLowerCase();

  return result;
}
