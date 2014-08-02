/* global Parse,console,require */

var Mailgun = require('mailgun');
Mailgun.initialize('michaelwagner.mailgun.org', 'key-52e5c0575bf00510219fe7573292fbd3');

Parse.Cloud.beforeSave("MessageObject", function(request, response) {

  var text = "Contact Email\n" +
    "From: "+request.object.get("name") + "\n"+
    "Email: "+request.object.get("email") + "\n"+
    // "Area: "+request.object.get("area") + "\n\n"+
    "Message:\n" + request.object.get("message");

  Mailgun.sendEmail({
      to: "wagnerdmike@gmail.com",
      from: request.object.get("email"),
      subject: "Contact Form Submission",
      text: text
    }, {
    success: function(httpResponse) {
      response.success();
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      response.error("Uh oh, something went wrong");
    }
  });

});