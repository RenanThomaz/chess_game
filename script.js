// Create a center tag to center all the elements
var center = document.createElement('center');
  
// Create a table element
var ChessTable = document.createElement('table');
for (var i = 0; i < 8; i++) {

    // Create a row
    var tr = document.createElement('tr');
    for (var j = 0; j < 8; j++) {

        // Create a cell
        var td = document.createElement('td');

        // If the sum of cell coordinates is even
        // then color the cell white
        if ((i + j) % 2 == 0) {

            // Create a class attribute for all white cells
            td.setAttribute('class', 'cell whitecell');
            tr.appendChild(td);
        }

        // If the sum of cell coordinates is odd then
        // color the cell black
        else {

            // Create a class attribute for all black cells
            td.setAttribute('class', 'cell blackcell');

            // Append the cell to its row
            tr.appendChild(td);
        }
    }

    // Append the row
    ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

// Modifiying table attribute properties
ChessTable.setAttribute('cellspacing', '0');
ChessTable.setAttribute('width', '810px');
document.body.appendChild(center);