window.onload = function(){
    let Lookup= document.getElementById("lookup");
    Lookup.addEventListener("click", function(){
        dataRequest();
        displayDiv();
    });

 async function dataRequest(){
    let form = document.getElementById("country");
    const url = `world.php?country=${form.value}`;
    let response = await fetch(url);
    let data = await response.text();
    displayDiv(data);
    return data;
    }
function displayDiv(data){
    resultDiv = document.getElementById('result');
    resultDiv.innerHTML = data;
}
}