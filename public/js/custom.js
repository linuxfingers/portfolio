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


//Activate Windows, you scrub
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}



//birthday because I'm lazy
//
//var birth = new Date('1988-02-25');
//var now = new Date();
//var difference = now - birth;
//var age = new Date(difference).getFullYear() - 1970
//var span = document.getElementById('age');
//span.innerHTML = age;

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
