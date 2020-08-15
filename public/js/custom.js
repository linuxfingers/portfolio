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

//draggable modals

$( function() {
  $( ".draggable" ).draggable();
} );

$( function() {
  $( ".resizable" ).resizable();
} );
