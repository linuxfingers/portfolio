//Random website list

var sites = [
              "http://www.stackexchange.com",
              "http://www.steampowered.com",
              "http://www.ubuntu.com",
              "http://www.slackware.com",
              "http://www.defcon.org",
              "http://www.blackhat.com",
              "http://www.arstechnica.com",
              "http://hackertyper.net",
              "http://fauux.neocities.org/",
              "http://www.lkozma.net/wpv/index.html",
              "http://unicodesnowmanforyou.com",
              "http://www.thealiencon.com",
              "http://www.reddit.com",
              "http://www.sans.org",
              "http://www.linux.com",
              "http://www.google.com",
              "http://www.microsoft.com"
            ];

            function randomSite() {
                var i = parseInt(Math.random() * sites.length);
                location.href = sites[i];
            }

// Menu JS

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

//footnote & tooltip JS

jQuery(document).ready(function() {
  jQuery('[data-toggle="tooltip"]').each(function() {
    var $elem = jQuery(this);
    $elem.tooltip({
      html:true,
      //container: $elem,
      delay: {hide:400}
    });
  });
});

//folder animation

var counter = 0;
function resetImage(){
     document.getElementById("initFolder").src = "/icons/folder.svg";
     if(counter === 2)
       document.getElementById('initFolder').style.visibility = "show";
}

function folderTimer() {
counter++;
  if (counter === 2)
  {
	document.getElementById("offFolder").src = "/icons/openfolder.svg";
  }else{
     document.getElementById("offFolder").src = "/icons/folder.svg";
  }
  setTimeout(function(){
     resetImage();
  }, 3000)

}

var counter = 0;
function resetImage(){
     document.getElementById("defFolder").src = "/icons/folder.svg";
     if(counter === 2)
       document.getElementById('defFolder').style.visibility = "show";
}

function folderTimer() {
counter++;
  if (counter === 2)
  {
	document.getElementById("wriFolder").src = "/icons/openfolder.svg";
  }else{
     document.getElementById("wriFolder").src = "/icons/folder.svg";
  }
  setTimeout(function(){
     resetImage();
  }, 3000)

}

var counter = 0;
function resetImage(){
     document.getElementById("vaFolder").src = "/icons/folder.svg";
     if(counter === 2)
       document.getElementById('vaFolder').style.visibility = "show";
}

function folderTimer() {
counter++;
  if (counter === 2)
  {
	document.getElementById("aboutFolder").src = "/icons/openfolder.svg";
  }else{
     document.getElementById("aboutFolder").src = "/icons/folder.svg";
  }
  setTimeout(function(){
     resetImage();
  }, 3000)

}

//draggable modals

$('#initFolder').click(function() {
	var modalDiv = $('#initModal');
  modalDiv.modal({backdrop: false, show: true});

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});

$('#offFolder').click(function() {
	var modalDiv = $('#offModal');
  modalDiv.modal({backdrop: false, show: true});

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});

$('#defFolder').click(function() {
	var modalDiv = $('#defModal');
  modalDiv.modal({backdrop: false, show: true});

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});

$('#wriFolder').click(function() {
	var modalDiv = $('#wriModal');
  modalDiv.modal({backdrop: false, show: true});

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});

$('#vaFolder').click(function() {
	var modalDiv = $('#vaModal');
  modalDiv.modal({backdrop: false, show: true});

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});

$('#aboutFolder').click(function() {
	var modalDiv = $('#aboutModal');
  modalDiv.modal({backdrop: false, show: true});

  $('.modal-dialog').draggable({
    handle: ".modal-header"
  });
});
