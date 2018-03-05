$(document).ready(function () {

    var data = [];
    var hexy = [];

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
    var choosen = "wall";

    for (i = 0; i < buttons.length; i++) {
        var button = $("<button>")
            .html(buttons[i].toUpperCase())
            .attr("id", buttons[i])
            .click(function () {
                $("button").attr("class", "");
                $(this).attr("class", "choosen");
                choosen = $(this).attr("id");
                console.log(choosen)
            })
        $("#control").append(button);
    }


    //---------- EVENTS

    $("#root").empty();
    draw(5);

    $("#size").on("change", function () {
        $("#root").empty();
        var size = $("#size").val();
        draw(size);
    });

    function draw(size) {
        hexy = []
        for (i = 0; i < size; i++) {        //kolumny
            for (j = 0; j < size - 1; j++) {    //wiersze
                var pole = $("<div>")
                    .attr("class", "pole")
                    .css("left", i * 87)
                    .css("top", j * 100)
                    .data("x", i)
                    .data("y", j)

                if (i % 2 == 0) {
                    pole.css("top", j * 100)
                }
                else {
                    pole.css("top", j * 100 + 50)
                }
                hexy.push(pole[0])
                $("#root").append(pole);
            }
        }

        console.log(hexy)

        $(".pole").on("click", function (e) {
            //console.log(e)
            //console.log(hexy.indexOf(e.currentTarget))

            //$(e.currentTarget).empty();


            var obj = { index: hexy.indexOf(e.currentTarget), number: data.length, x: $(e.currentTarget).data("x"), y: $(e.currentTarget).data("y"), element: e.currentTarget, poz: 0, dirOut: 0, dirIn: 3, type: choosen[0].toUpperCase(), long_type: choosen }

            var num = -1;
            var istnieje = false;

            for (i = 0; i < data.length; i++) {
                if (data[i].index == hexy.indexOf(e.currentTarget)) {
                    istnieje = true
                    num = i;
                }
            }
            if (!istnieje) {
                var arr = $("<div>")
                    .attr("class", "arr")
                $(e.currentTarget).append(arr);

                var p = $("<p>")
                    .text(obj.type)
                obj.element.append(p[0])

                data.push(obj)

            }
            else {
                data[num].poz++;
                data[num].dirOut = (data[num].dirOut + 1) % 6;
                data[num].dirIn = (data[num].dirIn + 1) % 6;
                data[num].element.children[0].style.transform = "rotate(" + data[num].poz * 60 + "deg)";

                data[num].type = choosen[0].toUpperCase()
                data[num].element.children[1].innerHTML = data[num].type
            }


            console.log(data)

        })
    }

    //----------- EVENT KLIK HEXAGON


})