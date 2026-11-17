---
layout: page
title: "Fonts"
permalink: /fonts/
---

# My Fonts

Here are some fonts I created!

## NS Koploper (ICMm) destination display dotmatrix font

Note: Does not contain the letters "J", "Q", "W", "X", "Y", or any digit that is not a 1 or 7 due to a lack of reference material. All other characters are a pixel perfect recreation of real Dutch NS ICMm "Koploper" outside destination displays, under the assumption that the letter "q" is a mirrored "p" and the letter "F" is written like the letter "E" with the lower horizontal bar removed. All other letters have been verified with pictures of real Koploper trains :) Special thanks to Maru and Roger for providing essential reference material for some of the letters.

<div class="font-card">

<h3>Try the font!</h3>

<textarea id="myFontText_ICMm" spellcheck="false">This is a test sentence.</textarea>

<div class="font-controls">
  <label for="myFontSize">Font size:</label>
  <input type="range" id="myFontSize" min="12" max="100" value="36">
  <span id="myFontSizeValue">36px</span>
</div>

<button type="button" id="myFontReset">Reset text</button>

<a class="font-download" href="/assets/fonts/ICMm%20Koersbord%20v15.ttf" download>
  Download the font
</a>

</div>


<h2>NMBS MS96 interior dotmatrix font</h2>
Note: the characters "I", "J", "K", "Q", "R", "X", "Y", "q" and "y" are drawn based on guesses, as well as every digit as these are not shown on these displays normally. To type the NMBS logo, use the character "|". For the punctuation marks, "-", ":", "'", ".", "/" are realistic, the other punctuation marks have also been guessed. All other characters are pixel perfect recreations.

<div class="font-card">

<h3>Try the font!</h3>

<textarea id="myFontText_MS96" spellcheck="false">This is a test sentence.</textarea>

<div class="font-controls">
  <label for="myFontSize_MS96">Font size:</label>
  <input type="range" id="myFontSize_MS96" min="12" max="100" value="36">
  <span id="myFontSizeValue_MS96">36px</span>
</div>

<button type="button" id="myFontReset_MS96">Reset text</button>

<a class="font-download" href="/assets/fonts/NMBS%20MS96%20Koersbord%20Binnenkant%20v26_correctmap.ttf" download>
  Download the font
</a>

</div>





<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap');  
@font-face {
  font-family: "ICMmKoersbord";
  src: url("/assets/fonts/ICMm%20Koersbord%20v15.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.font-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 25px 0;
}

#myFontText_ICMm {
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 180px;
  padding: 15px;

  font-family: "ICMmKoersbord", sans-serif;
  font-size: 36px;

  background-color: #2B1715;
  color: #FFF171;
  text-align: center;

  resize: vertical;
  border: 1px solid #aaa;
  border-radius: 6px;
  text-shadow:
  0 0 5px #FF8000,
  0 0 10px #FF8000,
  0 0 20px #FF8000,
  0 0 35px #FF5500;
}
  
/* Dark page background and white text */
body {
  background-color: #252525 !important;
  color: #FFFFFF !important;
}

/* Keep the page layout transparent so the dark background shows */
.wrapper, header, section, footer {
  background-color: transparent !important;
}  

body, body p, body li, body h1, body h2,
body h3, body h4, body h5, body h6,
body label, body span {
  color: #FFFFFF;
  font-family: 'Source Sans 3', sans-serif;
}

.font-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.font-controls input {
  flex: 1;
}

.font-download,
.font-card button {
  display: inline-block;
  padding: 10px 16px;
  margin: 5px;
  border-radius: 5px;
  background: #000080;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.font-download:hover,
.font-card button:hover {
  background: #555;
}
/* Match the font-size slider to the buttons */
.font-controls input[type="range"] {
  accent-color: #000080;
}


/* NMBS MS96 interior display font */
@font-face {
  font-family: "MS96Binnenkant";
  src: url("/assets/fonts/NMBS%20MS96%20Koersbord%20Binnenkant%20v26_correctmap.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* MS96 tester */
#myFontText_MS96 {
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 180px;
  padding: 15px;

  font-family: "MS96Binnenkant", sans-serif;
  font-size: 36px;

  background-color: #1E1913;
  color: #EDB700;
  text-align: center;

  resize: vertical;
  border: 1px solid #555555;
  border-radius: 6px;

  text-shadow:
    0 0 5px #EDB700,
    0 0 10px #EDB700,
    0 0 20px #D99F00,
    0 0 35px #A87500;
}

  
</style>

<script>
(function () {
  const text = document.getElementById("myFontText_ICMm");
  const size = document.getElementById("myFontSize");
  const sizeValue = document.getElementById("myFontSizeValue");
  const reset = document.getElementById("myFontReset");

  if (!text || !size || !sizeValue || !reset) return;

  size.addEventListener("input", function () {
    text.style.fontSize = size.value + "px";
    sizeValue.textContent = size.value + "px";
  });

  reset.addEventListener("click", function () {
    text.value = "This is a test sentence.";
  });
})();
</script>
