score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogameover = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    // console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) {
        hero = document.querySelector('.hero');
        hero.classList.add('animatedhero');
        setTimeout(() => {
            hero.classList.remove('animatedhero');
        }, 700);
    }

    if (e.keyCode == 39) {
        hero = document.querySelector('.hero');
        hero.classList.remove('reversehero');
        heroX = parseInt(window.getComputedStyle(hero ,null).getPropertyValue('left'));
        hero.style.left = heroX + 112 +"px";
    }

    if (e.keyCode == 37) {
        hero = document.querySelector('.hero');
        hero.classList.add('reversehero');
        heroNX = parseInt(window.getComputedStyle(hero ,null).getPropertyValue('left'));
        hero.style.left = (heroNX - 112) +"px";
    }


}
setInterval(() => {
    hero = document.querySelector('.hero');
    gameover= document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

   hx = parseInt(window.getComputedStyle(hero ,null).getPropertyValue('left'));
   hy = parseInt(window.getComputedStyle(hero ,null).getPropertyValue('top'));

   ox = parseInt(window.getComputedStyle(obstacle ,null).getPropertyValue('left'));
   oy = parseInt(window.getComputedStyle(obstacle ,null).getPropertyValue('top'));

   offsetX = Math.abs(hx-ox);
   offsetY = Math.abs(hy-oy);

//    console.log(offsetX , offsetY);

   if(offsetX < 73 && offsetY < 52){
    gameover.style.visibility = 'visible';
   obstacle.classList.remove('obstacleAni');
   hero = document.querySelector('.hero');
   hero.classList.add('heroout');
   obstacle.classList.add('WINobstacle');


   audiogameover.play();
   setTimeout(() => {
    audiogameover.pause();
    audio.pause();
   }, 1000);
   }

   else if(offsetX < 145 && cross){
       score+=1;
       updateScore(score);
       cross= false;
       setTimeout(() => {
           cross=true;
       }, 1000);

    //    code to increase the speed of obstacle.....
       setTimeout(() => {
        anidur =  parseFloat(window.getComputedStyle(obstacle ,null).getPropertyValue('animation-duration'));
        newdur = anidur - 0.1 ;
        obstacle.style.animationDuration = newdur + 's';
        console.log('new animation duration', newdur );
       }, 500);
   }

}, 100);

function updateScore(score){
    scorecontainer.innerHTML = "Your Score : " + score
}