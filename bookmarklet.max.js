javascript:
var jquery_url = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js'
var other_sources = [
    'http://qrthisurl.appspot.com/bookmarklet.small.js'
];

escaped_url = encodeURIComponent(location.href);

function add_script(url) {
    var script_elem = document.createElement('script');
    script_elem.src = url;
    document.body.appendChild(s);
}

if (!jQuery) {
    add_script(jquery_url)
}

for (var i=0; i < other_sources.length;i++) {
    add_script(other_sources[i])
}
jQuery(document).ready(function() {
    jQuery().QrThisURL(escaped_url);
});

void(0);
