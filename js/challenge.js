// A counter that increases by 1 each second and only counts up when button is not paused
let counter = document.getElementById("counter")
document.addEventListener("DOMContentLoaded", () => {
function countUp () {
  if (document.querySelector("#pause").textContent == " pause ") {
    //let counter = document.getElementById("counter")
    c = parseInt(counter.textContent)
    c = c+1
    counter.textContent = c
  }
};

setInterval(countUp, 1000);


//if clicked on pause, button text changes to resume and countUp stops

  document.querySelector("#pause").addEventListener("click", function(event){
    let button = document.querySelector("#pause")
    if (button.textContent == " pause ") {
      button.textContent = " resume "
      document.getElementById("plus").disabled = true
      document.getElementById("minus").disabled = true
      document.getElementById("heart").disabled = true
      document.getElementById("submit").disabled = true
    }
    else {
      button.textContent = " pause "
      document.getElementById("plus").disabled = false
      document.getElementById("minus").disabled = false
      document.getElementById("heart").disabled = false
      document.getElementById("submit").disabled = false
    event.preventDefault()
    }
  });

//if button is paused, don't let user increment or decrement
  document.querySelector("#plus").addEventListener("click", function(event){
    counter.textContent = parseInt(counter.textContent) + 1
  })
  document.querySelector("#minus").addEventListener("click", function(event){
    counter.textContent = parseInt(counter.textContent) - 1
  })

// a like button that adds a like for the number that is currently displayed by the timer
// it needs to know what the counter is at
// it needs to create a new li
// the li needs to have the value of `${counter.textContent} has been likd ${x} time`
//if distinct number has been liked > 1 time, $times else $time
// the li needs to get appended to the ul class "likes"
//need to know the number that is liked, and store it in an array

const likesUl = document.querySelector("ul.likes")
  let unique_number = []
  document.querySelector("#heart").addEventListener("click", function(event){
    let li = document.createElement("li")
    li.textContent = `${counter.textContent} has been liked 1 time`
    likesUl.appendChild(li);
  })
});
