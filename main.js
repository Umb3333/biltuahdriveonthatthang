const video = document.getElementById('#carvideo');



function autoplay () {
    let requesting = browser.permissions.request(
        permissions
      )
 videoplayer.play();

}
const reddiv = document.querySelector('.reddiv');

window.addEventListener('scroll', () => {
                                 
  //set the value of --scroll to the scroll position of the page
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

  
}, false);