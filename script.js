
// ==================================
// إعدادات الموقع
// ==================================

const CONFIG = {

  password: "love",

  startDate: "2021-02-13",

  recipient: "هبه روح قلبي"

};


// ==================================
// عناصر الصفحة
// ==================================

const form = document.getElementById("unlockForm");

const passwordInput = document.getElementById("password");

const hint = document.getElementById("hint");

const intro = document.getElementById("intro");

const surprise = document.getElementById("surprise");


// ==================================
// تسجيل الدخول
// ==================================

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword !== CONFIG.password) {

    hint.textContent = "كلمة السر مش صحيحة، حاولي تاني ❤️";

    return;

  }

  intro.classList.add("hidden");

  surprise.classList.remove("hidden");

  updateCounter();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ==================================
// حساب مدة الذكريات
// ==================================

function updateCounter() {

  const start = new Date(CONFIG.startDate + "T00:00:00");

  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  let months = now.getMonth() - start.getMonth();

  let days = now.getDate() - start.getDate();

  if (days < 0) {

    months--;

    const previousMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    );

    days += previousMonth.getDate();

  }

  if (months < 0) {

    years--;

    months += 12;

  }

  if (now < start) {

    years = 0;
    months = 0;
    days = 0;

  }

  document.getElementById("years").textContent = years;

  document.getElementById("months").textContent = months;

  document.getElementById("days").textContent = days;

}


// ==================================
// مشغل الأغنية
// ==================================

const audio = document.getElementById("ourSong");

const playBtn = document.getElementById("playBtn");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("currentTime");

const duration = document.getElementById("duration");


// تنسيق الوقت

function formatTime(seconds) {

  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = Math.floor(seconds % 60);

  return minutes + ":" +
    String(remainingSeconds).padStart(2, "0");

}


// تشغيل وإيقاف الأغنية

playBtn.addEventListener("click", async function() {

  if (audio.paused) {

    try {

      await audio.play();

      playBtn.textContent = "Ⅱ";

    } catch (error) {

      alert("مش قادر أشغل الأغنية. اتأكدي إن ملف song.mp3 موجود.");

    }

  } else {

    audio.pause();

    playBtn.textContent = "▶";

  }

});


// تحديث مدة الأغنية

audio.addEventListener("loadedmetadata", function() {

  duration.textContent = formatTime(audio.duration);

});


// تحديث شريط الأغنية

audio.addEventListener("timeupdate", function() {

  if (!audio.duration) return;

  const percentage = (audio.currentTime / audio.duration) * 100;

  progress.value = percentage;

  currentTime.textContent = formatTime(audio.currentTime);

});


// تقديم وتأخير الأغنية

progress.addEventListener("input", function() {

  if (!audio.duration) return;

  audio.currentTime = (progress.value / 100) * audio.duration;

});


// عند انتهاء الأغنية

audio.addEventListener("ended", function() {

  playBtn.textContent = "▶";

  progress.value = 0;

});


// ==================================
// الرجوع للبداية
// ==================================

document.getElementById("backBtn").addEventListener("click", function() {

  audio.pause();

  audio.currentTime = 0;

  playBtn.textContent = "▶";

  surprise.classList.add("hidden");

  intro.classList.remove("hidden");

  passwordInput.value = "";

  hint.textContent = "فيه مفاجأة مستنياكي";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("hearts-container");

    if (!container) {
        console.log("لم يتم العثور على hearts-container");
        return;
    }

    function createHeart() {
        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.textContent = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 400);
});
function openLoveLetter() {
    const envelope = document.querySelector(".envelope");
    const popup = document.getElementById("loveLetterPopup");

    envelope.classList.add("open");

    setTimeout(() => {
        popup.style.display = "flex";
    }, 700);
}

function closeLoveLetter() {
    document.getElementById("loveLetterPopup").style.display = "none";
    document.querySelector(".envelope").classList.remove("open");
}