// this is the solution to problem 1 in the coding with dax video

// find the video here: https://www.youtube.com/watch?v=c1B8zPPwdxk
// find the github repo here: https://github.com/codingwithdax/exercises/tree/main/domjs_1

// this function builds dynamic html by creating an ol and three li
// elements
function problem1() {
    // represents the div which is the node we use to get things
    // started
    const problem1Root = document.getElementById("problem1_id");

    // ol
    const olElement = document.createElement("ol");
    olElement.setAttribute("style", "background-color: cyan; width: 50px");
    problem1Root.appendChild(olElement);

    // li 1
    const liElement1 = document.createElement("li");
    olElement.appendChild(liElement1);
    const textNode1 = document.createTextNode("a");
    liElement1.appendChild(textNode1);

    // li 2
    const liElement2 = document.createElement("li");
    olElement.appendChild(liElement2);
    const textNode2 = document.createTextNode("b");
    liElement2.appendChild(textNode2);

    // li 3
    const liElement3 = document.createElement("li");
    olElement.appendChild(liElement3);
    const textNode3 = document.createTextNode("c");
    liElement3.appendChild(textNode3);
}