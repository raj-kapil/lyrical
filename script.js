async function fetchData() {
    var sourceText = "Hellow";
    var sourceLang = 'hi';
    var targetLang = 'en';
    console.log(sourceText);
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    console.log(url);
    const res=await fetch (url);
    const record=await res.json();
    console.log(record);
   
}
fetchData();
