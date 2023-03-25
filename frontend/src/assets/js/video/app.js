$(document).ready(function () {
    var controls = {
        video: $("#myvideo"),
        total: $("#total"),
        buffered: $("#buffered"),
        progress: $("#current"),
        duration: $("#duration"),
        currentTime: $("#currenttime"),
        hasHours: false,

        togglePlayback: function () {
            (video.paused) ? video.play($('.video__btn').css('display', 'none'))
                : video.pause($('.video__btn').css('display', 'block'));
        }
    };

    var video = controls.video[0];

    video.addEventListener("ended", function () {
        video.pause();
    });

    controls.video.click(function () {
        controls.togglePlayback();
    });

    video.addEventListener("canplay", function () {
        controls.hasHours = (video.duration / 3600) >= 1.0;

        controls.duration.text(formatTime(video.duration, controls.hasHours));
        controls.currentTime.text(formatTime(0), controls.hasHours);
    }, false);

    video.addEventListener("timeupdate", function () {
        controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));

        var progress = Math.floor(video.currentTime) / Math.floor(video.duration);
        controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
    }, false);

    controls.total.click(function (e) {
        var x = (e.pageX - this.offsetLeft) / $(this).width();
        video.currentTime = x * video.duration;
    });
});

function formatTime(time, hours) {
    if (hours) {
        var h = Math.floor(time / 3600);
        time = time - h * 3600;

        var m = Math.floor(time / 60);
        var s = Math.floor(time % 60);

        return h.lead0(2) + ":" + m.lead0(2) + ":" + s.lead0(2);
    } else {
        var m = Math.floor(time / 60);
        var s = Math.floor(time % 60);

        return m.lead0(2) + ":" + s.lead0(2);
    }
}

Number.prototype.lead0 = function (n) {
    var nz = "" + this;
    while (nz.length < n) {
        nz = "0" + nz;
    }
    return nz;
};