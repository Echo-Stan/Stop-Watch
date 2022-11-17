let start_button = document.getElementById("start");
let stop_button = document.getElementById("stop");
let reset_button = document.getElementById("reset");

let hour_ = 00;
let min_ = 00;
let sec_ = 00;
let count_ = 00;

start_button.addEventListener("click", (e) => {
  timer = true;
  stopWatch();
});
stop_button.addEventListener("click", (e) => {
  timer = false;
});

reset_button.addEventListener("click", (e) => {
  timer = false;
  hour_ = 0;
  min_ = 0;
  sec_ = 0;
  count_ = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

// Function Below

function stopWatch() {
  if (timer) {
    count_++;

    if (count_ == 100) {
      sec_++;
      count_ = 0;
    }
    if (sec_ == 60) {
      min_++;
      sec_ = 0;
    }
    if (min_ == 60) {
      hour_++;
      min_ = 0;
      sec_ = 0;
    }

    let hrString_ = hour_;
    let minString_ = min_;
    let secString_ = sec_;
    let countString_ = count_;

    if (hour_ < 10) {
      hrString_ = "0" + hrString_;
    }
    if (minString_ < 10) {
      minString_ = "0" + minString_;
    }

    if (secString_ < 10) {
      secString_ = "0" + secString_;
    }
    if (countString_ < 10) {
      countString_ = "0" + countString_;
    }
    document.getElementById("hr").innerHTML = hrString_;
    document.getElementById("min").innerHTML = minString_;
    document.getElementById("sec").innerHTML = secString_;
    document.getElementById("count").innerHTML = countString_;
    setTimeout(stopWatch, 10);
  }
}
