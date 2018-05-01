$(document).ready(function () {

    var data = [];
    var hexy = [];
    var json = {};

    //----------- PRZYGOTOWANIE PANELU KONTROLNEGO

    var size = $("<select>").attr("id", "size");
    for (i = 5; i < 14; i++) {
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
                choosen = $(this).attr("id");
            })
        $("#control").append(button);
    }

    var choosen = "wall";
    $("#wall").attr("class", "choosen");

    $("#root").empty();

    draw(5);
    update();

    //---------- EVENTS

    $("#size").on("change", function () {
        hexy = [];
        $("#root").empty();

        var size = $("#size").val();
        draw(size);
        update();
    });

    $("#restore").on("click", function () {
        var content = JSON.parse($("#textarea").val());
        data = content.level;
        update();
    });

    function draw(size) {
        for (i = 0; i < size; i++) {        //kolumny
            var tab = [];
            for (j = 0; j < size - 1; j++) {    //wiersze
                var pole = $("<div>")
                    .attr("class", "pole")
                    .css("left", i * 87)
                    .data("x", i)
                    .data("y", j)

                if (i % 2 == 0) {
                    pole.css("top", j * 100);
                }
                else {
                    pole.css("top", j * 100 + 50);
                }

                $("#root").append(pole);
                tab.push(pole[0]);
            }
            hexy.push(tab);
        }

        $(".pole").on("click", function (e) {
            click_event(e);
        });
    };

    function click_event(e) {

        var num = -1;
        var istnieje = false;

        for (i = 0; i < data.length; i++) {
            if (data[i].x == $(e.currentTarget).data("x") && data[i].y == $(e.currentTarget).data("y")) {
                istnieje = true
                num = i;
                i = data.length;
            }
        }

        if (!istnieje) {
            var obj = {
                index: data.length,
                x: $(e.currentTarget).data("x"),
                y: $(e.currentTarget).data("y"),
                dirOut: 0,
                type: choosen

            }
            if (data[data.length - 1]) {
                obj.dirIn = (data[data.length - 1].dirOut + 3) % 6;
            }
            data.push(obj);
            console.log(data.length)
        }

        else {
            data[num].dirOut = (data[num].dirOut + 1) % 6;
            data[num].type = choosen;
        }

        update();
    }

    //-------- UPDATE WIDOKU Z OBIEKTU GŁÓWNEGO
    function update() {

        $(".arr").each(function () {
            $(this).remove();
        });
        $("p").each(function () {
            $(this).remove();
        });

        for (i = 0; i < data.length; i++) {
            var hex = hexy[data[i].x][data[i].y]

            if (hex) {
                var arr = $("<div>")
                    .attr("class", "arr")
                $(hex).append(arr);

                var p = $("<p>")
                    .text(data[i].type[0].toUpperCase())
                $(hex).append(p[0])

                hex.children[0].style.transform = "rotate(" + data[i].dirOut * 60 + "deg)";
                hex.children[1].innerHTML = data[i].type[0].toUpperCase();
            }
            else {
                data.splice(i);
            }
        }

        json =
            {
                size: data.length,
                level: data
            }

        $("#textarea").val(JSON.stringify(json, undefined, 4));
    };
});