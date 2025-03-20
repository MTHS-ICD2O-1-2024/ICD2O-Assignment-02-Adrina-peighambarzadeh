// Copyright (c) 2025 Adrina. peighambarzadeh All rights reserved
//
// Created by: Adrina. peighambarzadeh
// Created on: mar 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const a = parseFloat(document.getElementById("a").value)
  const b = parseFloat(document.getElementById("b").value)

   // process
  const c = Math.sqrt(a * a + b * b);
  const perimeterOfTriangle = ( a + b + c);

  // output
  document.getElementById("perimeter-of-right-triangle").innerHTML =
    "The answer is: " + perimeterOfTriangle + " cm"
}
