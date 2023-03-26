let video = document.getElementById("myvideo");
let total = document.querySelector("#total");
let current = document.getElementById("current")
let duration = document.getElementById("duration");
let currentTime = document.getElementById("currenttime");
let pause = document.getElementById('video__btn');
let back = document.getElementById('back');
let up = document.getElementById('up')
let hasHours = false;
let check = 0;

video.addEventListener("click", function() {
    if (check == 0) {
        video.play();
        pause.style.display = 'none';
        videoPlay = setInterval(function() {
            let videoTime = Math.round(video.currentTime);
            let videoLength = Math.round(video.duration);   
            current.style.width = (videoTime * 100) / videoLength + '%';
        }, 10)
        check += 1
    } else {
        video.pause();
        pause.style.display = 'block';
        clearInterval(videoPlay);
        check = 0;
    }
})

back.addEventListener("click", function() {
    video.currentTime -= 10;
});

up.addEventListener("click", function() {
    video.currentTime += 10;
});

total.addEventListener("click", function(e) {
    let posX = e.clientX - 300;
    let timePos = (posX * 100) / 800;
    current.style.width = timePos + '%';
    video.currentTime = (timePos * Math.round(video.duration)) / 100
});

video.addEventListener("canplay", function() {
    hasHours = (video.duration / 3600) >= 1.0; 
                        
    duration.textContent = formatTime(video.duration, hasHours);
    currentTime.textContent = formatTime(0), hasHours;
}, false);

video.addEventListener("timeupdate", function() {
    currentTime.textContent = formatTime(video.currentTime, hasHours);
                    
    let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
    progress[0].style.width = Math.floor(progress * total.width()) + "px";
}, false);

function formatTime(time, hours) {
    if (hours) {
        let h = Math.floor(time / 3600);
        time = time - h * 3600;
                    
        let m = Math.floor(time / 60);
        let s = Math.floor(time % 60);
                    
        return h.lead0(2)  + ":" + m.lead0(2) + ":" + s.lead0(2);
    } else {
        let m = Math.floor(time / 60);
        let s = Math.floor(time % 60);
                    
        return m.lead0(2) + ":" + s.lead0(2);
    }
}
            
Number.prototype.lead0 = function(n) {
    let nz = "" + this;
    while (nz.length < n) {
        nz = "0" + nz;
    }
    return nz;
};