---
layout: page
title: "Fonts"
permalink: /fonts/
---
Here are some fonts I created:

<div class="font-tester">
  <h3>Try ICMm destination display dotmatrix font</h3>

  <textarea
    id="fontInput"
    placeholder="Type something here..."
    spellcheck="false"
  >This is a test sentence.</textarea>

  <div class="font-controls">
    <label for="fontSize">Font size:</label>
    <input
      type="range"
      id="fontSize"
      min="12"
      max="100"
      value="36"
    >
    <span id="fontSizeValue">36px</span>
  </div>

  <button type="button" onclick="
    document.getElementById('fontInput').value =
    'This is a test sentence.';
  ">Reset text</button>

  <a href="/assets/fonts/ICMm Koersbord v13.ttf" download>
    Download ICMm Koersbord v13.ttf
  </a>
</div>

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
  font-family: "MyFont", sans-serif;
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
