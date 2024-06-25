const inputBox = document.getElementById("input-box");                      // Get the input box element by its ID
const listContainer = document.getElementById("list-container");            // Get the list container element by its ID

function addTask(){
    if(inputBox.value === ''){                                              // Check if the input box is empty
        alert("You must write something!");                                 // Show an alert if the input box is empty
    }
    else{
        let li = document.createElement("li");                              // Create a new list item element
        li.innerHTML = inputBox.value;                                      // Set the inner HTML of the list item to the input box value
        listContainer.appendChild(li);                                      // Append the list item to the list container
        let span = document.createElement("span");                          // Create a new span element
        span.innerHTML = "\u00d7";                                          // Set the inner HTML of the span to the Unicode character for multiplication (×)
        li.appendChild(span);                                               // Append the span to the list item
    }
    inputBox.value="";                                                      // Clear the input box
    saveData();                                                             // Save the current state of the list
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                                          // Check if the clicked element is a list item
        e.target.classList.toggle("checked");                               // Toggle the 'checked' class on the list item
        saveData();                                                         // Save the current state of the list
    }
    else if(e.target.tagName === "SPAN"){                                   // Check if the clicked element is a span
        e.target.parentElement.remove();                                    // Remove the parent list item of the span
        saveData();                                                         // Save the current state of the list
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);                  // Save the current state of the list container's inner HTML to local storage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");                 // Retrieve the saved list state from local storage and set it as the list container's inner HTML
}
showTask();                                                                 // Call the showTask function to display the saved tasks when the page loads
