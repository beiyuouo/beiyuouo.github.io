function setLanguage(lang) {
  console.log(lang);
  if (lang == "en") {
    // show all lang-en class elements
    $(".lang-en").show();
    // hide all lang-zh class elements
    $(".lang-zh").hide();
  } else {
    // show all lang-zh class elements
    $(".lang-zh").show();
    // hide all lang-en class elements
    $(".lang-en").hide();
  }
}

function changeLanguage() {
  var lang = $.cookie("lang");
  lang = lang == "en" ? "zh" : "en";
  setLanguage(lang);
  $.cookie("lang", lang, { expires: 7 });
  // reflash the page
  // location.reload();
}

$(document).ready(function () {
  var lang = $.cookie("lang") || "en";
  $.cookie("lang", lang, { expires: 7 });
  setLanguage(lang);
  console.log(lang);
});
