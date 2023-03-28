export default {
    mounted() {
        //////////////////////////////// player video ///////////////////////////////////////////////////////////
        let controls = {
            video: $("#myvideo"),
            total: $("#total"),
            buffered: $("#buffered"),
            progress: $("#current"),
            duration: $("#duration"),
            currentTime: $("#currenttime"),
            back: $("#back"),
            up: $("#up"),
            play: $("#play"),
            stop: $("#stop"),
            btn1: $(".btn-1"),
            hasHours: false,

            togglePlayback: function () {
                (video.paused) ? video.play($('.video__btn').css('display', 'none'))
                    : video.pause($('.video__btn').css('display', 'block'));
            }
        };

        let check = 0;
        let check1 = 0;
        let video = controls.video[0];

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

            let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
            controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
        }, false);

        controls.total.click(function (e) {
            let x = (e.pageX - this.offsetLeft) / $(this).width();
            video.currentTime = x * video.duration;
        });

        controls.up.click(function (e) {
            video.currentTime += 15;
        });

        controls.back.click(function (e) {
            video.currentTime -= 15;
        });

        function formatTime(time, hours) {
            if (hours) {
                let h = Math.floor(time / 3600);
                time = time - h * 3600;

                let m = Math.floor(time / 60);
                let s = Math.floor(time % 60);

                return h.lead0(2) + ":" + m.lead0(2) + ":" + s.lead0(2);
            } else {
                let m = Math.floor(time / 60);
                let s = Math.floor(time % 60);

                return m.lead0(2) + ":" + s.lead0(2);
            }
        }

        Number.prototype.lead0 = function (n) {
            let nz = "" + this;
            while (nz.length < n) {
                nz = "0" + nz;
            }
            return nz;
        };


        document.querySelector('.sun__btn').addEventListener('click', () => {
            if (check === 0) {
                document.querySelector(".br__co__wrapper").style.display = "block";
                document.querySelector('.sun__svg').style.fill = "rgba(155, 155, 155, 1)";
                check += 1;
            } else {
                document.querySelector(".br__co__wrapper").style.display = "none";
                document.querySelector('.sun__svg').style.fill = "rgba(255, 255, 255, 1)";
                check = 0;
            }
        })

        document.querySelector('.alice-block').addEventListener('click', () => {
            if (check1 === 0) {
                document.querySelector(".alica-text-wrapper").style.display = "block";
                document.querySelector('.ali__svg').style.fill = "rgba(155, 155, 155, 1)";
                check1 += 1;
            } else {
                document.querySelector(".alica-text-wrapper").style.display = "none";
                document.querySelector('.ali__svg').style.fill = "rgba(255, 255, 255, 1)";
                check1 = 0;
            }
        })

    }
}