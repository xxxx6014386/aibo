function scroll(){
    const controller = new ScrollMagic.Controller();
   new ScrollMagic.Scene({
    duration:"200%",
    triggerElement:'.about-title',
    triggerHook:1
   })
   .setPin('.about-title')
   
   .addTo(controller);
}
scroll();