/*
  jQuery scripts for HuraPrazdniny.cz
*/

/* -----------------------------------------------------------------
   After DOM is loaded
*/

$(document).ready(function() {

  /* ------------------------------------------------------
    Vzkazovnik
  */

  $("#tab-deti .btn").fancybox({
    overlayOpacity: 0.5,
    overlayColor: "#013241",
    padding: "0",
    onStart: function() {
      $("#letter #id_to").val(this.orig.attr("id"));
    }
  });

  $("#letter form").submit(function() {
    if (!$("#letter #id_content").val().length) {
      $("#letter #id_content").addClass("error");
      return false;
    }
  });
});
