/* global $,document,console,Parse */
$(document).ready(function() {

    var parseAPPID = "1xW2AmMzvU7pukTxmXycGC6zVIsC9llnLesiGvXZ";
    var parseJSID = "k8dOFpCbQcdyaGCDk9jytrlaGezfnGMIKsuy8veX";

    Parse.initialize(parseAPPID, parseJSID);
    var MessageObject = Parse.Object.extend("MessageObject");

    $("#contactForm").on("submit", function(e) {
        e.preventDefault();

        console.log("Handling the submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.message = $("#message").val();

        var message = new MessageObject();
        message.save(data, {
            success:function() {
                console.log("Success");
                //Alerts are lame - but quick and easy
                alert("Thanks for getting in touch!");
            },
            error:function(e) {
                console.dir(e);
            }
        });

    });

});
