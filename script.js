const calculate = () => {
  const getScore = (selector) => parseFloat(document.querySelector(selector).value);

  const listening = getScore("#listening");
  const structure = getScore("#structure");
  const reading = getScore("#reading");

  const l_conv_scores = [24, 25, 26, 27, 28, 29, 30, 31, 32, 32, 33, 35, 37, 38, 39, 41, 41,
    42, 43, 44, 45, 45, 46, 47, 47, 48, 48, 49, 49, 50, 51, 51, 52, 52,
    53, 54, 54, 55, 56, 57, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68];
  const s_conv_scores = [20, 20, 21, 22, 23, 25, 26, 27, 29, 31, 33, 35, 36, 37, 38, 40, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    58, 60, 61, 63, 65, 67, 68];
  const r_conv_scores = [21, 22, 23, 23, 24, 25, 26, 27, 28, 28, 29, 30, 31, 32, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 43, 44, 45, 46, 46, 47, 48, 48, 49, 50,
    51, 52, 52, 53, 54, 54, 55, 56, 57, 58, 59, 60, 61, 63, 65, 66, 67];

  const convertScore = (score, conv_scores) => conv_scores[score];

  const listening_converted_score = convertScore(listening, l_conv_scores);
  const structure_converted_score = convertScore(structure, s_conv_scores);
  const reading_converted_score = convertScore(reading, r_conv_scores);

  const itp_score = Math.round(((listening_converted_score + structure_converted_score + reading_converted_score) / 3) * 10);

  const resultElement = document.querySelector("#your_itp_score");

  if (isNaN(listening) || isNaN(structure) || isNaN(reading)) {
    resultElement.innerHTML = "Please fill all the fields";
  } else if (isNaN(itp_score)) {
    resultElement.innerHTML = "You entered INVALID number of correct answers. <br> Maximum correct answers are 50, 40, 50 for Listening, Structure and Reading respectively.";
  } else {
    resultElement.innerHTML = `Your TOEFL ITP score is ${itp_score}`;
  }
};

const calculateIbt = () => {
  let reading = parseInt(document.querySelector("#reading").value);
  let listening = parseInt(document.querySelector("#listening").value);
  let speaking = parseInt(document.querySelector("#speaking").value);
  let writing = parseInt(document.querySelector("#writing").value);

  if (
    isNaN(reading) || reading < 0 || reading > 22 ||
    isNaN(listening) || listening < 0 || listening > 28 ||
    isNaN(speaking) || speaking < 0 || speaking > 5 ||
    isNaN(writing) || writing < 0 || writing > 5
  ) {
    document.querySelector("#ibt_score_info").innerHTML =
      "Please enter valid numbers for all sections.";
    return;
  }

  const readingConversion = [
    [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [1, 2], [2, 4], [4, 7],
    [7, 9], [9, 12], [12, 14], [14, 16], [16, 18], [18, 19], [19, 21],
    [21, 22], [22, 24], [24, 26], [26, 28], [28, 29], [29, 30], [30, 30]
  ];
  const listeningConversion = [
    [0, 0], [0, 0], [0, 1], [1, 2], [2, 4], [4, 6], [6, 7], [7, 9],
    [9, 10], [10, 12], [12, 14], [14, 16], [16, 17], [17, 19], [19, 20],
    [20, 21], [21, 22], [22, 23], [23, 24], [24, 25], [25, 26], [26, 27],
    [27, 29], [29, 30], [30, 30], [30, 30], [30, 30], [30, 30], [30, 30]
  ];
  const speakingConversion = [
    [0, 9], [10, 15], [16, 19], [20, 24], [25, 30], [25, 30]
  ];
  const writingConversion = [
    [0, 6], [7, 12], [13, 16], [17, 23], [24, 30], [24, 30]
  ];

  const readingScaled = readingConversion[reading];
  const listeningScaled = listeningConversion[listening];
  const speakingScaled = speakingConversion[speaking];
  const writingScaled = writingConversion[writing];

  const bestCaseScore =
    readingScaled[1] +
    listeningScaled[1] +
    speakingScaled[1] +
    writingScaled[1];

  const worstCaseScore =
    readingScaled[0] +
    listeningScaled[0] +
    speakingScaled[0] +
    writingScaled[0];
  const averageScore = ((bestCaseScore + worstCaseScore) / 2).toFixed(0);

  const ci = ((bestCaseScore - worstCaseScore) / 2).toFixed(0);

  document.querySelector("#ibt_score").innerHTML = `${averageScore}`;
  document.querySelector("#ibt_score_info").innerHTML = ` ± ${ci}`;
};

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookiesBtn = document.getElementById("acceptCookies");

    // Check if user previously accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieBanner.style.display = "block";
    }

    acceptCookiesBtn.addEventListener("click", function () {
        // Set a flag to indicate cookies have been accepted
        localStorage.setItem("cookiesAccepted", "true");
        
        // Hide the cookie banner
        cookieBanner.style.display = "none";
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});


// Global site tag (gtag.js) - Google Analytics
async
src="https://www.googletagmanager.com/gtag/js?id=G-3QSQXNSTG5"

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-3QSQXNSTG5");


// Toggles showing/hiding each section
function toggleSection(sectionId) {
  const header = event.target; 
  const content = document.getElementById(sectionId);

  // Toggle the display
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    header.classList.add("active");
  } else {
    content.style.display = "none";
    header.classList.remove("active");
  }
}

function checkAnswers() {
  document.getElementById('answer-key').style.display = 'block';
}