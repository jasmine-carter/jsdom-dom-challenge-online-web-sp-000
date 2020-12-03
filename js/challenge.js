// A counter that increases by 1 each second and only counts up when button is not paused
let counter = document.getElementById("counter");
let likedNumbers = []
document.addEventListener("DOMContentLoaded", () => {
function countUp () {
  if (document.querySelector("#pause").textContent == " pause ") {
    //let counter = document.getElementById("counter")
    let c = parseInt(counter.textContent);
    c = c+1;
    counter.textContent = c;
  }
}
setInterval(countUp, 1000);
//if clicked on pause, button text changes to resume and countUp stops
  document.querySelector("#pause").addEventListener("click", function(event){
    let button = document.querySelector("#pause");
    if (button.textContent == " pause ") {
      button.textContent = " resume ";
      document.getElementById("plus").disabled = true;
      document.getElementById("minus").disabled = true;
      document.getElementById("heart").disabled = true;
      document.getElementById("submit").disabled = true;
    }
    else {
      button.textContent = " pause ";
      document.getElementById("plus").disabled = false;
      document.getElementById("minus").disabled = false;
      document.getElementById("heart").disabled = false;
      document.getElementById("submit").disabled = false;
    event.preventDefault();
    }
  });

//if button is paused, don't let user increment or decrement
  document.querySelector("#plus").addEventListener("click", function(event){
    counter.textContent = parseInt(counter.textContent) + 1;
  });
  document.querySelector("#minus").addEventListener("click", function(event){
    counter.textContent = parseInt(counter.textContent) - 1;
  });
//function to count likedNumbers for heart action
	function likedCounter(number) {
	let count = 0;
	for (i = 0; i < likedNumbers.length; i ++ ) {
		if (number == likedNumbers[i]) {
		count += 1;
		}
	}
	return count;
}
// a like button that adds a like for the number that is currently displayed by the timer
// it needs to know what the counter is at
// it needs to create a new li
// the li needs to have the value of `${counter.textContent} has been likd ${x} time`
//needs to store the unique number
//needs to increment the unique number's like by one every time

const likesUl = document.querySelector("ul.likes");
  document.querySelector("#heart").addEventListener("click", function(event){
    let li = document.createElement("li");
    let number = 0
    number = (parseInt(counter.textContent));
    likedNumbers.push(parseInt(counter.textContent));

//function to get count of times a number has been liked
    function likedCounter(number) {
  	let count = 0
    let i;
  	for (i = 0; i < likedNumbers.length; i ++ ) {
  		if (number == likedNumbers[i]) {
  		count += 1;
  		}
  	}
  	return count;
  }
    let likes = likedCounter(number);
    if (likes > 1 && likedNumbers.includes(number)) {
      //it updates an existing li
      document.getElementById(`${number}`).textContent = `${counter.textContent} has been liked ${likes} times`;
    } else {
      //it creates a new li
      li.textContent = `${counter.textContent} has been liked 1 time`;
      li.setAttribute("id", number);
      likesUl.appendChild(li);
    }
  });
});
