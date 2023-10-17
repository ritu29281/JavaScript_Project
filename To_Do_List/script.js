const input = document.getElementById("inputbox");
const listbox = document.getElementById("list");

function Addfunc() {
    if (input.value === '') {
        alert("Please Add Your Task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listbox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
}
listbox.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listbox.innerHTML);
}

function show() {
    listbox.innerHTML = localStorage.getItem("data");
}
show();