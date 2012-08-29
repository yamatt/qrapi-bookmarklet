/*
 * This script adds a QR generating add-on to jQuery to make coding easier.
*/

(function(jQuery){
    jQuery.fn.extend({ 
        QrThisURL: function(cleaned_value) {
            var qr_url = 'http://qrthisurl.appspot.com/';
            
            function display_lightbox(contents) {
                style = {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    margin-top: "-50%",
                    margin-left: "-50%",
                    
                }
                var lightbox = jQuery("<div></div>");
            }
            function display_message(contents, level) {
                var message = jQuery("<div></div>");
                message.text(contents):
            }
            function apply_dict_style_to_element(style, elem){
                for (key in style) {
                    elem.css(key, style[key]);
                }
            }
            
            // check qr code worked
            // if it worked then 
                // load up lightbox with close button
            // if it did not then
                // load up a little error
		}
	});
})(jQuery);
