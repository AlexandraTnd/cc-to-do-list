let addButton = document.getElementById("addButton");
let inputItem = document.querySelector("input");
let list = document.getElementById("list");

function addItem(item) {
    list.insertAdjacentHTML("afterbegin", `<div>
    <span>${item}</span>
    <button class="toggleStatus">done</button>
</div>`);
}

addButton.addEventListener("click", () => {
    if (inputItem.value !== "") {
        addItem(inputItem.value);
        inputItem.value = "";
    }
})

function markDoneOrNotDone(item) {
    if (item.innerHTML === "done") {
        item.innerHTML = "not done";
        item.parentNode.classList.add('done');
    } else {
        item.innerHTML = "done";
        item.parentNode.classList.remove('done');
    }
}

list.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    markDoneOrNotDone(event.target);
})

let markAllDone = document.getElementById("mark");

markAllDone.addEventListener("click", () => {
    let buttons = document.getElementsByClassName("toggleStatus");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "done") {
            markDoneOrNotDone(buttons[i]);
        }
    }
})

let filter = document.getElementById("filterBox");
filter.addEventListener("input", (text) => {
    let items = document.getElementsByTagName("span");

    for (let i = 0; i < items.length; i++) {
        if (!items[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
            items[i].parentNode.style.display = "none";
        } else {
            items[i].parentNode.style.display = "flex";
        }
    }
})