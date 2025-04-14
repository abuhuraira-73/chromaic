import React, { useEffect } from "react";

function Countdown() {
  useEffect(() => {
    const countdownElem = document.querySelector(".js-countdown");
    if (!countdownElem) return;

    let countdownSeconds = parseInt(countdownElem.getAttribute("data-timer"), 10);

    function updateCountdown() {
      const days = Math.floor(countdownSeconds / (24 * 3600));
      const hours = Math.floor((countdownSeconds % (24 * 3600)) / 3600);
      const mins = Math.floor((countdownSeconds % 3600) / 60);
      const secs = countdownSeconds % 60;

      countdownElem.innerHTML = `
        <div class="tf-countdown-wrapper" style="display: flex; justify-content: center; align-items: center;">
          <div class="tf-countdown-box" style="margin: 0 10px; text-align: center; border: 1px solid #000; padding: 10px; min-width: 70px;">
            <span class="tf-countdown-time" style="font-size: 2rem; display: block;">${days}</span>
            <span class="tf-countdown-label" style="font-size: 1rem; display: block;">Days</span>
          </div>
          <div class="tf-countdown-box" style="margin: 0 10px; text-align: center; border: 1px solid #000; padding: 10px; min-width: 70px;">
            <span class="tf-countdown-time" style="font-size: 2rem; display: block;">${hours}</span>
            <span class="tf-countdown-label" style="font-size: 1rem; display: block;">Hours</span>
          </div>
          <div class="tf-countdown-box" style="margin: 0 10px; text-align: center; border: 1px solid #000; padding: 10px; min-width: 70px;">
            <span class="tf-countdown-time" style="font-size: 2rem; display: block;">${mins}</span>
            <span class="tf-countdown-label" style="font-size: 1rem; display: block;">Mins</span>
          </div>
          <div class="tf-countdown-box" style="margin: 0 10px; text-align: center; border: 1px solid #000; padding: 10px; min-width: 70px;">
            <span class="tf-countdown-time" style="font-size: 2rem; display: block;">${secs}</span>
            <span class="tf-countdown-label" style="font-size: 1rem; display: block;">Secs</span>
          </div>
        </div>
      `;

      if (countdownSeconds > 0) {
        countdownSeconds--;
      } else {
        clearInterval(intervalId);
      }
    }

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* <!-- Countdown --> */}
      <section className="flat-spacing-10 bg_light-green-2">
        <div className="container">
          <div className="tf-grid-layout md-col-2 align-items-center flat-wrap-countdown">
            <div className="tf-content-wrap-v2 wow fadeInUp" data-wow-delay="0s">
              <h4 className="heading">One-Time Only</h4>
              <p className="description">
                Special Offers You Can't Miss: These deals won't last forever!
              </p>
              <a href="shop-collection-list.html" className="tf-btn btn-line">
                Shop now<i className="icon icon-arrow-right"></i>
              </a>
            </div>
            <div className="tf-countdown-v2 wow fadeInUp" data-wow-delay="0s">
              <div className="js-countdown" data-timer="8007500" data-labels="Days,Hours,Mins,Secs"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Countdown --> */}
      <br/>
      <br/>

    </>
  );
}

export default Countdown;
