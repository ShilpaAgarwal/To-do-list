//get ->first element
let inputBox = document.querySelector(".input-box");
let ul = document.querySelector("ul");

//listener
//dom ->form->value  (like for inputbox, value is there)
//rest -> textContent
inputBox.addEventListener("keydown", function (object) {
  if (object.key == "Enter" && inputBox.value != "") {
    let value = inputBox.value;

    // document creates a li
    let li = document.createElement("li");
    // add value to it, which is the text of input box
    li.textContent = value;
    //add class to it, which is a attribute
    li.setAttribute("class", "task");
    //append this li as a child of ul
    ul.appendChild(li);
    //empty the input box for new task
    inputBox.value = "";

    li.addEventListener("dblclick", function () {
        li.remove();
    })
  }
});
