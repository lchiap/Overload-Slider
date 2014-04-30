/*
*
* Overload slider v1.1
* Copyright 2014, Luis Chiappe - Overload - Web & Graphic design -
* Overloadesign.com | luischiappe.com.ar
* Free to use for web designers and web developers.
* Enjoy!
*
*/

$(document).ready(function(){
    
    var slideW = $('#ovr-slider ul li').width();
    var slides = $('#ovr-slider ul li').size();
    
    /* Set width slider according the number of slides */
    var sliderW = $('#ovr-slider ul').css('width', slideW*slides);
    
    /* Set width slider container iqual to images size */
    $('#ovr-slider').css('width', slideW);
    
    $('.arrow-right').click(function(){
        var li = $('#ovr-slider').find('li');

        $(li).each(function(i){
            var i = 0;
            if(i < slides){
                $(this).animate({
                marginLeft: -slideW,
                opacity: 0.4
            
                });
            }
            
         });
        
    });  
   
	 
});