const save = document.querySelector(".save");

function saveDoc(filename, content) {
  const element = document.createElement("a");

  const blob = new Blob([content], {
    type: "plain/text",
  });

  const link = URL.createObjectURL(blob);

  element.setAttribute("href", link);
  element.setAttribute("download", filename);

  element.style.display = "none";

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
}

window.onload = () => {
  save.addEventListener("click", () => {
    const filename = document.querySelector("#doc-name").value;
    const content = document.querySelector("#doc").value;

    if (filename && content) {
      saveDoc(filename, content);
    }
  });
};

const textarea = document.querySelector("#doc");
function fontSize(e) {
  let value = e.value;
  textarea.style.fontSize = value + "px";
}
function fontColor(e) {
  let value = e.value;
  textarea.style.color = value;
}
function bold(e) {
  if (textarea.style.fontWeight == "bold") {
    textarea.style.fontWeight = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontWeight = "bold";
    e.classList.add("active");
  }
}
function italicize(e) {
  if (textarea.style.fontStyle == "italic") {
    textarea.style.fontStyle = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontStyle = "italic";
    e.classList.add("active");
  }
}
function underline(e) {
  if (textarea.style.textDecoration == "underline") {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textDecoration = "underline";
    e.classList.add("active");
  }
}
function alignLeft(e) {
  textarea.style.textAlign = "left";
}
function alignCenter(e) {
  textarea.style.textAlign = "center";
}
function alignRight(e) {
  textarea.style.textAlign = "right";
}
function upperCase(e) {
  if (textarea.style.textTransform == "uppercase") {
    textarea.style.textTransform = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textTransform = "uppercase";
    e.classList.add("active");
  }
}
function resetChanges(e) {
  textarea.style.fontWeight = "normal";
  textarea.style.textAlign = "left";
  textarea.style.fontStyle = "normal";
  textarea.style.textTransform = "capitalize";
  textarea.value = "";
}
