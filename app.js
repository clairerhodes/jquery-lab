// $(selector).action()
// $ sign to access jQuery
// (selector) to "find" HTML elements
// jQuery action() to be performed on the elements

$(document).ready(function(){
    // jQuery methods go here...

    let totalBoba = 0;

    // hide play again button
    $("#restart").hide();

    // make boba counter button
    $("#boba").click(function(){
       
        
        // reload page on click
        $("#restart").click(function(){
            location.reload();
        })
        
        totalBoba = totalBoba + 1;
        $("#counter").text(`Boba Count = ${totalBoba}`)

        

    })

    $("#combust").on("click", function(){

    })
})