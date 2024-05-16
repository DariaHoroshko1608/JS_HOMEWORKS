"use strict";

const generatedHtmlList = (function generateList(array) {
  let html = "<ul>";
  array.forEach((item) => {
    if (Array.isArray(item)) {
      html += "<li>" + generateList(item) + "</li>";
    } else {
      html += "<li>" + item + "</li>";
    }
  });
  html += "</ul>";
  return html;
})([1, 2, 3]);

console.log(generatedHtmlList);
