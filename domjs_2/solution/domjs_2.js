function problem2() {
    const problem2Div = document.getElementById("problem2_id");

    const olElement = document.createElement("ol");
    olElement.setAttribute("style", "background-color: yellow; width: 50px");
    problem2Div.appendChild(olElement);

    const messageElement = document.getElementById("message_id");
    const countElement = document.getElementById("count_id");

    const countValue = countElement.value;
    const message = messageElement.value;

    for (let index = 0; index < countValue; index++) {
        const liElement = document.createElement("li");
        olElement.appendChild(liElement);

        const appendedMessage = message + (index + 1);
        const textNode = document.createTextNode(appendedMessage);
        liElement.appendChild(textNode);
    }
}