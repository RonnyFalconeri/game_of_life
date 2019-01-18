$(document).ready(function() {
    console.log( "ready!" );
    
    $("#play").click(function(){
        alert("button pressed!");    
    });
    
    var canvas = document.getElementById("fieldcanvas").getContext("2d");
    
    canvas.strokeStyle = "lightgrey";
    canvas.fillStyle = "black";
    
    init();
    
    function init(){
        for(var i=0; i<20; i++){
            cells[i] = [];
            for(var j=0; j<20; j++){
                cells[i][j] = 0;
            }
        }
    }
    
});