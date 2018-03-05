$(document).ready(function () {

    //----------- PRZYGOTOWANIE PANELU KONTROLNEGO

    var size = $("<select>").attr("id", "size");
    for (i = 3; i < 14; i++) {
        var option = $("<option>")
            .val(i)
            .html(i);
        size.append(option);
    }
    $("#control").append(size);

    var buttons = ["wall", "enemy", "treasure", "light"];

    for (i = 0; i < buttons.length; i++) {
        var button = $("<button>")
            .html(buttons[i].toUpperCase())
            .attr("id", buttons[i])
            .click(function () {
                $("button").attr("class", "");
                $(this).attr("class", "choosen");
                console.log($(this).attr("id"))
            })
        $("#control").append(button);
    }


    //---------- EVENTS

    $("#root").empty();
    draw(3);

    $("#size").on("change", function () {
        $("#root").empty();
        var size = $("#size").val();
        draw(size);
    });

    function draw(size) {
        for (i = 0; i < size; i++) {        //kolumny
            for (j = 0; j < size - 1; j++) {    //wiersze
                var pole = $("<div>")
                    .attr("class", "pole")
                    .css("left", i * 87)
                    .css("top", j * 100)

                if (i % 2 == 0) {
                    pole.css("top", j * 100)
                }
                else {
                    pole.css("top", j * 100 + 50)
                }
                $("#root").append(pole);
            }
        }
    }

    /*
    $(".button").on("click", "div", function (e) {
        
        console.log($(".choosen")[0].attr("id"))
    })
    */
})