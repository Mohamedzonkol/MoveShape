document.addEventListener('DOMContentLoaded', function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("/moveShape").build();

    connection.start().then(function () {
        console.log("Connection established.");
    }).catch(function (err) {
        return console.error(err.toString());
    });

    // Handle received shape move event
    connection.on("ReceiveShapeMove", function (x, y) {
        // Update the position of the shape on the client
        moveShape(x, y);
    });

    // Function to move the shape on the client
    function moveShape(x, y) {
        // Update your shape's position based on x and y
        // For example, update the left and top CSS properties
        document.getElementById('shape').style.left = x + 'px';
        document.getElementById('shape').style.top = y + 'px';
    }

    // Handle user input to move the shape
    document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode;
        var step = 10;

        switch (keyCode) {
            case 37: // Left arrow
                connection.invoke("MoveShape", -step, 0);
                break;
            case 38: // Up arrow
                connection.invoke("MoveShape", 0, -step);
                break;
            case 39: // Right arrow
                connection.invoke("MoveShape", step, 0);
                break;
            case 40: // Down arrow
                connection.invoke("MoveShape", 0, step);
                break;
        }
    });
});
