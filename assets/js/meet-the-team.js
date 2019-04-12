$(document).ready(function () {
    // Deklarera antal i teamet
    var numberOfEmployees = $(".teamMember").length;
    // Gör ett random nummer mellan 1 och numberOfEmployees
    var randomNum = Math.floor((Math.random() * numberOfEmployees) + 1);
    // Väljer specifik persion i teamet och "unblurar"
    $(".teamMember:nth-child(" + randomNum + ")").addClass("randomMember");

    // Skapar en loop och ändrar bild
    setInterval(function () {
        // Tar bort highligt
        $(".teamMember").removeClass("randomMember");
        // Gör om hightligt
        randomNum = Math.floor((Math.random() * numberOfEmployees) + 1);
        $(".teamMember:nth-child(" + randomNum + ")").addClass("randomMember");
    }, 2500);

});