// this is the solution to problem 3 in the coding with dax video

// find the video here: https://www.youtube.com/watch?v=jeS34mOmhzo
// find the github repo here: https://github.com/codingwithdax/exercises/tree/main/domjs_3

// this function builds dynamic html by creating an ol and as many li elements as specified
// by the count field; each li has text specified by the message field
function problem3() {
    // represents the div which is the node we use to get things started
    const problem3DivElement = document.getElementById("problem3_id");

    if (problem3DivElement.firstChild) {
        problem3DivElement.removeChild(problem3DivElement.firstChild);
    }

    // ol
    const tableElement = document.createElement("table");
    // olElement.setAttribute("style", "background-color: yellow; width: 50px");
    problem3DivElement.appendChild(tableElement);

    // get message and count
    const rowsElement = document.getElementById("rows_id");
    const columnsElement = document.getElementById("columns_id");
    const colorElement = document.getElementById("color_id");

    const rowCount = rowsElement.value;
    const columnCount = columnsElement.value;
    const colorValue = colorElement.value;

    // problem3Div.setAttribute("style", "background-color: " + colorValue);

    for (let indexRow = 0; indexRow < rowCount; indexRow++) {
        const trElement = document.createElement("tr");
        tableElement.appendChild(trElement);

        for (let indexColumn = 0; indexColumn < columnCount; indexColumn++) {
            const tdElement = document.createElement("td");
            trElement.appendChild(tdElement);

            const tdDivElement = document.createElement("div");
            // tdDivElement.setAttribute("style", "padding: 0.5rem; margin: 1rem; background-color: " + colorValue);
            tdDivElement.setAttribute("class", "cell");
            tdDivElement.setAttribute("style", "background-color: " + colorValue);
            tdElement.appendChild(tdDivElement);
        }
    }
}
