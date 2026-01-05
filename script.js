const apiURL= 'https://iskarr.github.io/austindonovan.github.io/api/business.json';

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
});