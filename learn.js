//  <button type="button" onclick='document.getElementById("demo").innerHTML="hello surprised"'>click me</button>;


const messages = ["You are beautiful", "Sorry, that was a joke", "Do not be sad","Okay I will tell you the truth","you are actually ugly","Still, you don't beleive me?","okay okay listen","Just go to mental hospital then","Still present here? No more talk plz I have already told you :the real truth  "];
let index = 0;

// Function to handle button clicks
function handleClick() {
    document.getElementById("message").textContent = messages[index];
    index++;
    
    // Check if we've shown all messages
    if (index >= messages.length) {
        document.getElementById("messageButton").removeEventListener("click", handleClick);
    }
}

// Add event listener to the button
document.getElementById("messageButton").addEventListener("click", handleClick);
//////////////////////////////////////////////////////////////////////////////////////////////
// ***************if we want button to repeat  the cycle again and again****************//////
//////////////////////////////////////////////////////////////////////////////////////////////

// Array of messages to cycle through
// const messages = ["I love you", "Sorry, that was a joke", "Do not be sad"];
// let index = 0; // To keep track of the current message index
// document.getElementById("messageButton").addEventListener("click", function() {
    // Display the current message
    // document.getElementById("message").textContent = messages[index];
    // Update the index to point to the next message, cycling back to 0 if at the end
    // index = (index + 1) % messages.length;
// });