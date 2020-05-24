const square = document.querySelector('div');
square.addEventListener('mouseover', function(event) {
    event.target.classList.add('colored')
});

const reset = document.querySelector('button');
reset.addEventListener('click', resetSite)

function resetSite() {
    location.reload();
}

let userInput = prompt("How many squares per site?", "32");

function createDivs(userInput) {
     for (i = 0; i < (userInput * userInput); i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'square');

        let newTitle = document.createElement('h1');
        newTitle.textContent = " ";

        newDiv.appendChild(newTitle);
        container.appendChild(newDiv);
    }
}

function adjustGrid(userInput) {
    container.style.setProperty(
        "grid-template-rows", `repeat(${userInput}, 1fr, !important)`
    );

    container.style.setProperty(
        "grid-template-columns", `repeat(${userInput}, 1fr, !important)`
    );
}


createDivs(userInput);
adjustGrid(userInput);






