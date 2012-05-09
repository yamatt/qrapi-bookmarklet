javascript:
var i;
var s;
var ss = [
    'http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js',
    'http://qrthisurl.appspot.com/bookmarklet.small.js'
];

escaped_url = encodeURIComponent(location.href);

for (i=0; i!=ss.length;i++) {
    s=document.createElement('script');
    s.src = ss[i];
    document.body.appendChild(s);
}
$(document).ready(function() {
    jQuery().QrThisURL(escaped_url);
});


void(0);
