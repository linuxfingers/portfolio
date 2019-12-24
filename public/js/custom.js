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
            container: $elem,
            delay: {hide:400}
        });
    });
});


//draggable modals

$('.modal-content').resizable({
  //alsoResize: ".modal-dialog",
  minHeight: 300,
  minWidth: 300
});
$('.modal-dialog').draggable();
