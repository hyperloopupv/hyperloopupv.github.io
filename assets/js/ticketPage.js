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
$("#map").fadeIn("slow");
var calendarPage = false;
$('#btnClickNext').on('click',function(){
    if(calendarPage){
      $('#datePicker').hide();
      $('#pickMoreInfo').fadeIn("slow");
      calendarPage = false;
      $('#download').fadeIn("slow");
    }else{
      $('#map').hide();
      $('#btnBack').show();
      $('#datePicker').fadeIn("slow");
      calendarPage = true;
      $('#btnClickNext').addClass("disable");
    }

});
$('#btnBack').on('click',function(){
    $('#map').siblings('div').hide();
    $("#map").fadeIn("slow");
    $('#btnBack').hide();
    calendarPage = false;

});


  $("#route tr").click(function() {
  var selected = $(this).hasClass("highlight");
  $("#route tr").removeClass("highlight");
  if(!selected)
          $(this).addClass("highlight");
});

$("#datePicker li").click(function() {
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
      if(tableCell.innerHTML.indexOf("Valencia") !== -1){
        //CHANGE ATTRIBUTES
        $(".origin").html('Valencia');
        $(".destination").html('Barcelona');
        $(".price").html('18 Euros');
        $(".mapImg").attr("src","img/map/map_Val-Bar.png");
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



//CODE FOR ANIMATED BUTTON
var loaderSVG = document.querySelector('.loader-svg');
var container = document.querySelector('.container');
var arrowMiddleNull = document.querySelector('.arrow-middle-null');
var arrowRightNull = document.querySelector('.arrow-right-null');
var arrowLeftNull = document.querySelector('.arrow-left-null');
var arrowHead = document.querySelector('.arrow-head');
var arrowLine = document.querySelector('.arrow-line');
var outline = document.querySelector('.outline');
var outlineBg = document.querySelector('.outline-bg');
var allLines = document.querySelector('.all-lines');
var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

TweenMax.set([container,'svg'], {
position:'absolute',
top:'50%',
left:'50%',
xPercent:-50,
yPercent:-50
});
if(!isDevice){

TweenMax.set(allLines, {
  filter:'url(#glow)'
})
}
TweenMax.set(arrowLeftNull, {
x:57.5,
y:103
})

TweenMax.set(arrowMiddleNull, {
x:90,
y:135.5
})
TweenMax.set(arrowRightNull, {
x:122.5,
y:103
})

var tl = new TimelineMax({paused:true, onUpdate:updateSVG});

tl.set(outline, {
alpha:0
})
.set(outline, {
drawSVG:'49.8% 49.9%'
})
.to(arrowLine, 0.6,{
drawSVG:'59% 60%',
ease:Power3.easeInOut
})

.to(arrowMiddleNull, 0.6, {
y:103,
ease:Elastic.easeOut
})

.to(arrowLine, 0.5, {
  y:'-=95',
ease:Power1.easeOut
}, '-=0.55')

.to(arrowLine, 0.2, {
  y:'+=17',
ease:Power1.easeIn
})
.set(arrowLine, {
alpha:0
})
.set(outline, {
alpha:1
})

.to(outline, 3, {
drawSVG:'0% 100%',
ease:Linear.easeNone
})
//shrinks the line
.to(arrowLeftNull, 3, {
x:'+=32.5',
ease:Linear.easeNone
}, '-=3')
.to(arrowRightNull, 3, {
x:'-=32.5',
ease:Linear.easeNone
}, '-=3')

.to(arrowLeftNull, 0.6, {
x:'-=30',
y:'-=5',
delay:0.4,
ease:Back.easeOut
})
.to(arrowMiddleNull, 0.6, {
y:'+=15',
ease:Back.easeOut
}, '-=0.6')
.to(arrowRightNull, 0.6, {
x:'+=32.5',
y:'-=35',
ease:Back.easeOut
}, '-=0.6')

.to(arrowHead, 0.6, {
stroke:'#2EC26A'
}, '-=0.6')
.to(outline, 0.5,{
drawSVG:'49.8% 49.9%',
delay:1
})


.set(outline, {
alpha:0
})
.set(arrowLine, {
alpha:1
})

.to(arrowLine, 0.3,{
y:'+=95',
//drawSVG:'0% 100%',
ease:Power1.easeIn
})
.to(arrowLine, 0.6,{
y:'-=18',
drawSVG:'0% 100%',

ease:Power2.easeInOut
})
.to(arrowHead, 0.6, {
stroke:'#ededed'
}, '-=0.6')
.to(arrowLeftNull, 0.6, {
x:57.5,
y:103,
//delay:1,
ease:Power3.easeOut
}, '-=0.6')
.to(arrowMiddleNull, 0.6, {
x:90,
y:135.5,
ease:Power3.easeOut
}, '-=0.6')
.to(arrowRightNull, 0.6, {
x:122.5,
y:103,
ease:Power3.easeOut
}, '-=0.6')




function updateSVG(){
//console.log(arrowMiddleNull._gsTransform.y)
var leftX = arrowLeftNull._gsTransform.x;
var leftY = arrowLeftNull._gsTransform.y;
var middleX = arrowMiddleNull._gsTransform.x;
var middleY = arrowMiddleNull._gsTransform.y;
var rightX = arrowRightNull._gsTransform.x;
var rightY = arrowRightNull._gsTransform.y;

var pointStr = leftX + ',' + leftY + ' ' + middleX +','+ middleY +' ' + rightX + ', ' + rightY;
setTimeout(
function()
{
window.location.replace("index.html");
//do something special
}, 6000);


//console.log(pointStr)
TweenMax.set(arrowHead, {
  attr:{
    points:pointStr
  }
})
}

loaderSVG.onclick = function(){

tl.restart();
}
