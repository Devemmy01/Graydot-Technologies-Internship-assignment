// Getting the containers and the draggable items
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const items = document.querySelectorAll(".item");

let draggedItem = null;

// Add event listeners to the draggable items for drag start
items.forEach(item => {
    item.addEventListener("dragstart", dragStart);
});

// Add event listeners to the containers for drag over and drop
container1.addEventListener("dragover", dragOver);
container2.addEventListener("dragover", dragOver);
container2.addEventListener("drop", drop);

// Function to the handle drag start event
function dragStart(event) {
    // Store the reference to the dragged item
    draggedItem = event.target;
}

// Function to the handle drag over event
function dragOver(event) {
    // Prevent default behavior to allow dropping
    event.preventDefault();
}

// Function to the handle drop event
function drop(event) {
    // Prevent default behavior and append the dragged item to the drop target container
    event.preventDefault();
    event.target.appendChild(draggedItem);
    draggedItem = null;
    showSuccessMessage();
}

// Function to show success modal
function showSuccessMessage() {
    // Show the success modal
    const message = document.getElementById("myModal");
    message.style.display = "block";
    
    // Hide the success modal after 2 seconds
    setTimeout(() => {
        message.style.display = "none";
    }, 2500);
}

// Reseting the containers
const Reset = document.getElementById("resetContainers")

Reset.addEventListener('click', resetBtn = () => {
    // Move all the items in container2 back to container1
    container2.querySelectorAll(".item").forEach(item => {
        container1.appendChild(item);
    });
})