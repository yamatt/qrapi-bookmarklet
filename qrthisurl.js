/*
 * This script adds a QR generating add-on to jQuery to make coding easier.
*/

__qrthisurl_lightbox = null;

(function(jQuery){
    jQuery.fn.extend({ 
        QrThisURL: function(cleaned_value) {
            var qr_url = 'http://qrthisurl.appspot.com/' + cleaned_value;
            
            function display_lightbox(contents) {
                if (__qrthisurl_lightbox != null) {
                    jQuery.RemoveThisQr();
                }
                lightbox_style = {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    padding: "1em",
                    border: "2px #000 solid",
                    background: "#fff",
                    "margin-top": "-50%",
                    "margin-left": "-50%",
                    "border-radius": "1em",
                    "text-align": "center",
                    "block-shadow": "0.5em 0.5em 1em #000",
                }
                // create lightbox
                __qrthisurl_lightbox = jQuery("<div></div>");
                __qrthisurl_lightbox.append(contents);
                __qrthisurl_lightbox.css(lightbox_style);
                
                
                // add close button
                close_button_style = {
                    position: "absolute",
                    top: "3px",
                    right: "3px",
                }
                var close_button = jQuery("<div></div>");
                close_button.text("&#215;");
                close_button.click(jQuery().RemoveThisQr());
                close_button.css(close_button_style);
                close_button.attr("title", "Close");
                __qrthisurl_lightbox.append(close_button);
                
                // setup lightbox
                __qrthisurl_lightbox.hide();
                jQuery("body").append(__qrthisurl_lightbox);
                __qrthisurl_lightbox.fadeIn();
            }
            
            function display_message(contents) {
                var message = jQuery("<p></p>");
                message.text(contents);
                display_lightbox(message);
            }

            function display_image(url) {
                var container = jQuery("<div><div/>");
                
                // image
                var image = jQuery("<img />");
                image_style = {
                    display: "block",
                    border: "0px",
                }
                image.css(image_style);
                image.attr("href", url);
                container.append(image);
                
                // link
                var link = jQuery("<a></a>");
                link.attr("href", url);
                link.text("Link");
                container.append(link);
                
                display_lightbox(container);
            }
            
            $.ajax({
                url: qr_url,
                data: {
                    "info": true,
                    "callback": "?",
                },
                dataType: "jsonp",
                success: function (data) {
                    if (data['success']){
                        display_image(qr_url);
                    }
                    else {
                        display_message("Sadly we could not get you your QR code because: " + data['message'])
                    }
                }
            });
		},
        RemoveThisQr: function() {
            __qrthisurl_lightbox.fadeOut();
            jQuery().remove(__qrthisurl_lightbox);
            __qrthisurl_lightbox = null;
        }
	});
})(jQuery);

