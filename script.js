function beforesubmit(){
    console.log("toto"); 
    let outputdate = document.querySelector(".outputdate");
    let inputdate  =  document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);

    let formattedate = new Date(inputdate.value).toLocaleDateString("fr-FR");
    //console.log("inputdate.value reformated",formattedate.toString());
    console.log("stop");
    outputdate.value=formattedate;
}