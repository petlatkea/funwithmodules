"use strict";

let globalName = "Peter";

export function capitalize( str ) {
  if(str.includes(" ") ) {
    const parts = str.split(" ");
    const fullname = parts.map( capitalize ).join(" ");
    return fullname;
  }
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
  const result = str.charAt(0).toUpperCase() +           
              str.substring(1,hyphenPos+1).toLowerCase() +
              str.charAt(hyphenPos+1).toUpperCase() +
              str.substring(hyphenPos+2).toLowerCase();

  return result;
}
