
function problem3Callback() {

    const rowsElement = document.getElementById("rows_id");
    const numberRows = rowsElement.value;
    console.log("numberRows", numberRows);

    const columnsElement = document.getElementById("columns_id");
    const numberCols = columnsElement.value;
    console.log("numberCols", numberCols);

    const colorElement = document.getElementById("color_id");
    const colorValue = colorElement.value;
    console.log("colorValue", colorValue);

    for (let indexRow = 0; indexRow < numberRows; indexRow++) {
        for (let indexCol = 0; indexCol < numberCols; indexCol++) {
            console.log("in loop, indexRow", indexRow);
            console.log("in loop, indexCol", indexCol);
        }
    }
}