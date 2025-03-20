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
  const a = document.getElementById("a").value
  const b = parseInt(document.getElementById("b").value)
  // output
  document.getElementById("user-info").innerHTML =
    "The answer is: " + a + ", " + userAge + "."
}
