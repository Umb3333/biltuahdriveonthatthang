const video = document.getElementById('#carvideo');



function autoplay () {
    let requesting = browser.permissions.request(
        permissions
      )
 videoplayer.play();

}


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
if ('--scroll' <= 1){
  'scroll' - 0.1;
}
}, false);