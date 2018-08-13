$(document).ready(function () {
  /* global moment */

  $('#sumbit_btn').on('click', function (event) {
    event.preventDefault();

    var newSkill = {
      weekNumber: $('#weekNumber').val().trim(),
      gitlabLink: $('#gitlabLink').val().trim(),
      skill: $('#skill').val().trim(),
      webRef: $('#webReference').val().trim()
    }
    console.log(newSkill);
  });

  // send an AJAX POST-request with jQuery
//   $.post("/api/new", newSkill)
//     // on success, run this callback
//     .then(function (data) {
//       // log the data we found
//       console.log(data);
//       // tell the user we're adding a character with an alert window
//       alert("Adding skill...");
//     });

//   // empty each input box by replacing the value with an empty string
//   $("#weekNumber").val("");
//   $("#gitlabLink").val("");
//   $("#skill").val("");
//   $("#webReference").val("");
  
// });

  