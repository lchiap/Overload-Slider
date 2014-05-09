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

    var iterador = 1;
	var margin = 0;

    $('.arrow-right').click(function(e){
        e.preventDefault();
		margin = margin - slideW;
        $('#ovr-slider ul').animate({
            marginLeft: margin,
        }, function() {
            iterador++
        });
    });
        
    $('.arrow-left').click(function(e){
        e.preventDefault();
		margin = margin + slideW;
        $('#ovr-slider ul').animate({
            marginLeft: margin,
        }, function() {
            iterador--
        });
    });
    
   

});