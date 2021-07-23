var factList = [
  "According to the World Health Organization, a child under the age of fifteen dies every five seconds across the globe",/*0*/
  "Over half of the world is living without access to medical care and treatment",
  "From Unicef data, an additional 140 million children will be living in a household below the poverty line after the COVID-19 pandemic",
  "One of the most impoverished areas of the world is South Asia, second to Africa "
  ];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
