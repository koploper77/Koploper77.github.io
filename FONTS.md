---
layout: page
title: "Fonts"
permalink: /fonts/
---

# My Fonts

Here are some fonts I created!

## ICMm destination display dotmatrix font

Note: Does not contain the letters "J", "Q", "W", "X", "Y", or any digit that is not a 1 or 7 due to a lack of reference material. All other characters are a pixel perfect recreation of real Dutch NS ICMm "Koploper" outside destination displays, under the assumption that the letter "q" is a mirrored "p" and the letter "F" is written like the letter "E" with the lower horizontal bar removed. All other letters have been verified with pictures of real Koploper trains :)

\<div class="font-card">   \<h3>Try the font!\</h3>

&#x20; \<textarea id="myFontText" spellcheck="false">This is a test sentence.\</textarea>

&#x20; \<div class="font-controls">     \<label for="myFontSize">Font size:\</label>     \<input type="range" id="myFontSize" min="12" max="100" value="36">     \<span id="myFontSizeValue">36px\</span>   \</div>

\<button type="button" id="myFontReset">Reset text\</button>

&#x20; \<a class="font-download" href="/assets/fonts/ICMm%20Koersbord%20v13.ttf" download>     Download ICMm Koersbord v13.ttf   \</a> \</div>

\<style> @font-face {   font-family: "ICMmKoersbord";   src: url("/assets/fonts/ICMm%20Koersbord%20v13.ttf") format("truetype");   font-weight: normal;   font-style: normal;   font-display: swap; }  .font-card {   border: 1px solid #ccc;   border-radius: 10px;   padding: 20px;   margin: 25px 0; }  #myFontText {   display: block;   box-sizing: border-box;   width: 100%;   min-height: 180px;   padding: 15px;   font-family: "ICMmKoersbord", sans-serif;   font-size: 36px;   resize: vertical;   border: 1px solid #aaa;   border-radius: 6px; }  .font-controls {   display: flex;   align-items: center;   gap: 12px;   margin: 15px 0; }  .font-controls input {   flex: 1; }  .font-download, .font-card button {   display: inline-block;   padding: 10px 16px;   margin: 5px;   border-radius: 5px;   background: #333;   color: white;   text-decoration: none;   border: none;   cursor: pointer; } \</style>

\<script> (function () {   const text = document.getElementById("myFontText");   const size = document.getElementById("myFontSize");   const sizeValue = document.getElementById("myFontSizeValue");   const reset = document.getElementById("myFontReset");    if (!text || !size || !sizeValue || !reset) return;    size.addEventListener("input", function () {     text.style.fontSize = size.value + "px";     sizeValue.textContent = size.value + "px";   });    reset.addEventListener("click", function () {     text.value = "This is a test sentence.";   }); })(); \</script>


<style>
.font-tester {
  margin: 25px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

#fontInput {
  width: 100%;
  min-height: 180px;
  box-sizing: border-box;
  padding: 15px;
  font-family: "ICMm_Koersbord", sans-serif;
  font-size: 36px;
  resize: vertical;
  border: 1px solid #aaa;
  border-radius: 6px;
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

.font-tester button,
.font-tester a {
  display: inline-block;
  padding: 10px 16px;
  margin: 5px;
  border-radius: 5px;
  background: #333;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
}
</style>

<script>
const fontInput = document.getElementById("fontInput");
const fontSize = document.getElementById("fontSize");
const fontSizeValue = document.getElementById("fontSizeValue");

fontSize.addEventListener("input", function() {
  fontInput.style.fontSize = this.value + "px";
  fontSizeValue.textContent = this.value + "px";
});
</script>
