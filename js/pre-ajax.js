$(document).ready(function(){
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function displayNames(arrItems) {
        var output = "";
        output += "<ul>";
        arrItems.forEach(function (person) {
            output += "<li style='color:" + person.favColor + "'>" + person.name + "</li>";
        });
        output += "</ul>";
        return output;
    }
    $('#add-names-btn').click(function() {
        $('#names-list').html(displayNames(people));

    });
    });

