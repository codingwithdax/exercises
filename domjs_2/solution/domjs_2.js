// this is the solution to problem 2 in the coding with dax video

// find the video here: https://www.youtube.com/watch?v=jeS34mOmhzo
// find the github repo here: https://github.com/codingwithdax/exercises/tree/main/domjs_2

// this function builds dynamic html by creating an ol and as many li elements as specified
// by the count field; each li has text specified by the message field
function problem2() {
    // represents the div which is the node we use to get things started
    const problem2Div = document.getElementById("problem2_id");

    // ol
    const olElement = document.createElement("ol");
    olElement.setAttribute("style", "background-color: yellow; width: 50px");
    problem2Div.appendChild(olElement);

    // get message and count
    const messageElement = document.getElementById("message_id");
    const countElement = document.getElementById("count_id");

    const countValue = countElement.value;
    const message = messageElement.value;

    // loop the number of times specified by the count field  
    // each time through the loop, add another li with text
    // specified by the message field, appended with the (one-based)
    // index
    for (let index = 0; index < countValue; index++) {
        const liElement = document.createElement("li");
        olElement.appendChild(liElement);

        const appendedMessage = message + (index + 1);
        const textNode = document.createTextNode(appendedMessage);
        liElement.appendChild(textNode);
    }
}
