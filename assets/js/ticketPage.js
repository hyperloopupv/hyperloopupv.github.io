var selection = false;
//Detects if device is mobile
function detectmob() {
   if(window.innerWidth <= 800 || window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
  }
  if (detectmob()){
  window.location.replace("mobile.html");;
  }


//Code for calendar page div
  var winHeight = $(window).height()*0.50;
  var height = ( winHeight * 16.6666 ) / 100;
  var lineHeight = height + "px";

  $("li").css("line-height", lineHeight);
  $("li").css("height", height);


//Code controlling page logic when clicking next and back buttons
$('#map').hide();
$('#routes').hide();
$("#map").fadeIn("slow");
$("#routes").fadeIn("slow");
var calendarPage = false;
$('#btnClickNext').on('click',function(){
  if(selection){
    if(calendarPage){
      $('#map').fadeIn("slow");
      $('#datePicker').hide();
      $('#pickMoreInfo').fadeIn("slow");
      calendarPage = false;
      $('#btnClickNext').hide();
      selection = false;
    }else{
      $('#map').hide();
      $('#routes').hide();
      $('#btnBack').show();
      $('#datePicker').fadeIn("slow");
      calendarPage = true;
      $('#btnClickNext').addClass("disable");
      selection = false;
    }
  }

});
$('#btnBack').on('click',function(){
    selection = true; //remembers that we chose one before
    $('#map').siblings('div').hide();
    $("#map").fadeIn("slow");
    $('#routes').fadeIn("slow");
    $('#btnBack').hide();
    calendarPage = false;
    $('#btnClickNext').show();
    $('#btnClickNext').removeClass("disable");

});


  $("#route tr").click(function() {
    selection=true;
  var selected = $(this).hasClass("highlight");
  $("#route tr").removeClass("highlight");
  if(!selected)
          $(this).addClass("highlight");
});

$("#datePicker li").click(function() {
  selection=true;
var selected = $(this).hasClass("activate");
$("#datePicker li").removeClass("activate");
$('#btnClickNext').removeClass("disable");
if(!selected)
        $(this).addClass("activate");
        $('#btnClickNext').removeClass("disable");
});

//Code logic for choosing destination
  var table = document.getElementById("route");
  if (table != null) {
      for (var i = 0; i < table.rows.length; i++) {
          for (var j = 0; j < table.rows[i].cells.length; j++)
          table.rows[i].cells[j].onclick = function () {
              tableText(this);
          };
      }
  }

  function tableText(tableCell) {
    selection = true;
      if(tableCell.innerHTML.indexOf("Valencia") !== -1){
        //CHANGE ATTRIBUTES
        $(".origin").html('Valencia');
        $(".destination").html('Barcelona');
        $(".price").html('18 Euros');
        $(".mapImg").attr("src","img/map/map_Val-Bar.png");
        //CHANGE BOOKING ticketPage
        $(".")

      }else if(tableCell.innerHTML.indexOf("Madrid") !== -1){
        //CHANGE ATTRIBUTES
        $(".origin").html('Madrid');
        $(".destination").html('Toulouse');
        $(".price").html('24 Euros');
        $(".mapImg").attr("src","img/map/map_Mad-Tou.png");
      }else if(tableCell.innerHTML.indexOf("Paris") !== -1){
        //CHANGE ATTRIBUTES
        $(".origin").html('Paris');
        $(".destination").html('Frankfurt');
        $(".price").html('22 Euros');
        $(".mapImg").attr("src","img/map/map_Par-Fra.png");
      }else if(tableCell.innerHTML.indexOf("Zurich") !== -1){
        //CHANGE ATTRIBUTES
        $(".origin").html('Zurich');
        $(".destination").html('Rome');
        $(".price").html('25 Euros');
        $(".mapImg").attr("src","img/map/map_Zur-Rom.png");
      }
  }

//Changes date depending on current month
$('#chooseDate li').click(function(){
  var temp = $(this).text();
  $('.date').html(temp + ' November');
});

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var d = new Date();
$('#month').html(monthNames[d.getMonth()]);
