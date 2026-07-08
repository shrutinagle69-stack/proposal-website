// =============================
// ELEMENTS
// =============================

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const celebration = document.getElementById("celebration");
const hearts = document.getElementById("hearts");

// =============================
// VARIABLES
// =============================

let escapeLevel = 1;

// =============================
// START MUSIC
// =============================

// =============================
// NO BUTTON ESCAPE
// =============================

function moveNoButton() {

    const padding = 40;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

function escapeNoButton() {

    for (let i = 0; i < escapeLevel; i++) {

        setTimeout(moveNoButton, i * 70);

    }

    if (escapeLevel < 8) {

        escapeLevel++;

    }

}

noBtn.addEventListener("mouseenter", escapeNoButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    escapeNoButton();

});

// =============================
// YES BUTTON
// =============================

yesBtn.addEventListener("click", function(){

    result.style.display = "block";

    celebration.classList.add("show");

    launchHearts();

    launchBalloons();

    launchSparkles();

    setTimeout(function(){

        celebration.classList.remove("show");

    },7000);

});

// =============================
// FLOATING HEARTS
// =============================

function launchHearts(){

    for(let i=0;i<100;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=Math.random()>0.5?"💖":"❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*30)+"px";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },8000);

    }

}
// =============================
// BALLOONS
// =============================

function launchBalloons(){

    const balloons=["🎈","🎈","🎈","🎈","🎈","🎈"];

    for(let i=0;i<30;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.animationDuration=(5+Math.random()*5)+"s";

        balloon.style.fontSize=(35+Math.random()*35)+"px";

        document.body.appendChild(balloon);

        setTimeout(function(){

            balloon.remove();

        },10000);

    }

}

// =============================
// SPARKLES
// =============================

function launchSparkles(){

    for(let i=0;i<120;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.innerHTML=Math.random()>0.5?"✨":"🌸";

        sparkle.style.left=Math.random()*100+"vw";

        sparkle.style.top=Math.random()*100+"vh";

        sparkle.style.animationDelay=(Math.random()*2)+"s";

        sparkle.style.fontSize=(12+Math.random()*20)+"px";

        document.body.appendChild(sparkle);

        setTimeout(function(){

            sparkle.remove();

        },3000);

    }

}

// =============================
// CONTINUOUS FLOATING HEARTS
// =============================

setInterval(function(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"💖":"💕";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },8000);

},700);

// =============================
// EXTRA YES BUTTON EFFECT
// =============================

yesBtn.addEventListener("mouseenter",function(){

    yesBtn.style.transform="scale(1.12)";

});

yesBtn.addEventListener("mouseleave",function(){

    yesBtn.style.transform="scale(1)";

});

// =============================
// MOBILE SUPPORT
// =============================

window.addEventListener("resize",function(){

    noBtn.style.position="relative";

    noBtn.style.left="0";

    noBtn.style.top="0";

});

// =============================
// PAGE LOAD ANIMATION
// =============================

window.onload=function(){

    document.body.style.opacity="0";

    setTimeout(function(){

        document.body.style.transition="opacity 1s";

        document.body.style.opacity="1";

    },100);

};