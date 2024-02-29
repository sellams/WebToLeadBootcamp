function beforesubmit() {
  console.log("toto");
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log("inputdate.value", inputdate.value);

  let formattedate = new Date(inputdate.value).toLocaleDateString("fr-FR");
  //console.log("inputdate.value reformated",formattedate.toString());
  console.log("stop");
  outputdate.value = formattedate;
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
