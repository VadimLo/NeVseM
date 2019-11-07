$(document).ready(function () {
  var valueSelect = $("#tshirttype").val();
  $("#tshirttype").change(function () {
    valueSelect = $(this).val();
  });
  $('#flipback').click(
    function () {
      if (valueSelect === "../assets/img/crew_front.png") {
        if ($(this).attr("data-original-title") == "Show Back View") {
          $(this).attr('data-original-title', 'Show Front View');
          $("#tshirtFacing").attr("src", "../assets/img/crew_back.png");
          a = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(b);
            canvas.loadFromJSON(b);
          } catch (e) {
          }

        } else {
          $(this).attr('data-original-title', 'Show Back View');
          $("#tshirtFacing").attr("src", "../assets/img/crew_front.png");
          b = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(a);
            canvas.loadFromJSON(a);
          } catch (e) {
          }
        }
      } else if (valueSelect === "img/mens_longsleeve_front.png") {
        if ($(this).attr("data-original-title") == "Show Back View") {
          $(this).attr('data-original-title', 'Show Front View');
          $("#tshirtFacing").attr("src", "img/mens_longsleeve_back.png");
          a = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(b);
            canvas.loadFromJSON(b);
          } catch (e) {
          }

        } else {
          $(this).attr('data-original-title', 'Show Back View');
          $("#tshirtFacing").attr("src", "img/mens_longsleeve_front.png");
          b = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(a);
            canvas.loadFromJSON(a);
          } catch (e) {
          }
        }
      } else if (valueSelect === "img/mens_tank_front.png") {
        if ($(this).attr("data-original-title") == "Show Back View") {
          $(this).attr('data-original-title', 'Show Front View');
          $("#tshirtFacing").attr("src", "img/mens_tank_back.png");
          a = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(b);
            canvas.loadFromJSON(b);
          } catch (e) {
          }

        } else {
          $(this).attr('data-original-title', 'Show Back View');
          $("#tshirtFacing").attr("src", "img/mens_tank_front.png");
          b = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(a);
            canvas.loadFromJSON(a);
          } catch (e) {
          }
        }
      } else if (valueSelect === "img/mens_hoodie_front.png") {
        if ($(this).attr("data-original-title") == "Show Back View") {
          $(this).attr('data-original-title', 'Show Front View');
          $("#tshirtFacing").attr("src", "img/mens_hoodie_back.png");
          a = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(b);
            canvas.loadFromJSON(b);
          } catch (e) {
          }

        } else {
          $(this).attr('data-original-title', 'Show Back View');
          $("#tshirtFacing").attr("src", "img/mens_hoodie_front.png");
          b = JSON.stringify(canvas);
          canvas.clear();
          try {
            var json = JSON.parse(a);
            canvas.loadFromJSON(a);
          } catch (e) {
          }
        }
      }
      /*	if ($(this).attr("data-original-title") == "Show Back View") {
          $(this).attr('data-original-title', 'Show Front View');
           $("#tshirtFacing").attr("src","img/crew_back.png");
           a = JSON.stringify(canvas);
           canvas.clear();
           try
           {
              var json = JSON.parse(b);
              canvas.loadFromJSON(b);
           }
           catch(e)
           {}

       } else {
         $(this).attr('data-original-title', 'Show Back View');
         $("#tshirtFacing").attr("src","img/crew_front.png");
         b = JSON.stringify(canvas);
         canvas.clear();
         try
           {
              var json = JSON.parse(a);
              canvas.loadFromJSON(a);
           }
           catch(e)
           {}
       }		*/
      canvas.renderAll();
      setTimeout(function () {
        canvas.calcOffset();
      }, 200);
    });
});
