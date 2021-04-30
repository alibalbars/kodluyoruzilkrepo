const listItems = document.querySelectorAll(".list-group-item");
const inputQuery = document.querySelector("#query");
const btnAdd = document.querySelector("#btn-add");
const list = document.querySelector("#list");
var closes = document.querySelectorAll(".close");

console.log(typeof closes);

listItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});

var resetInput = () => {
    inputQuery.value = "";
    inputQuery.focus();
};

btnAdd.addEventListener("click", () => {
    let text = inputQuery.value;

    if (text.trim() === "") {
        resetInput();
        return;
    }

    let span = document.createElement("span");
    span.appendChild(document.createTextNode("x"))
    span.className = "close";
    console.log(typeof span);
    // closes.push(span);
    var closes = document.querySelectorAll(".close");

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(text));
    li.appendChild(span);
    list.appendChild(li);

    resetInput();
});

closes.forEach((item, i) => {
    item.addEventListener("click", () => {
        console.log(closes);
        // console.log(i);
        // console.log(list.children);
        let parentDiv = item.parentNode;
        parentDiv.style.display = "none";
    })
})