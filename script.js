//get ->first element
let inputBox = document.querySelector(".input-box");
let ul = document.querySelector("ul");
let arr = [];

// extract last info from local storage
if (localStorage.getItem("allTask")) {
    let strArr = localStorage.getItem("allTask");
    arr = JSON.parse(strArr);

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        // add value to it, which is the text of input box
        li.textContent = arr[i];
        //add class to it, which is a attribute
        li.setAttribute("class", "task");
        //append this li as a child of ul
        ul.appendChild(li);

        li.addEventListener("dblclick", function () {
            let index = li.innerText;
            arr.splice(index, 1);
            strArr = JSON.stringify(arr);
            localStorage.setItem("allTask", strArr);
            li.remove();
        });
    }
}

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
        arr.push(value);
        //converting array to string
        let strArr = JSON.stringify(arr);
        //add it to local storage
        localStorage.setItem("allTask", strArr);
        //add class to it, which is a attribute
        li.setAttribute("class", "task");
        //append this li as a child of ul
        ul.appendChild(li);
        //empty the input box for new task
        inputBox.value = "";

        li.addEventListener("dblclick", function () {
            let index = li.innerText;
            arr.splice(index, 1);
            strArr = JSON.stringify(arr);
            localStorage.setItem("allTask");
            li.remove();
        });
    }
});
