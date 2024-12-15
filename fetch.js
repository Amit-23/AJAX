const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");



const getData = async () => {

    console.log("getting data .....");
    let response = await fetch(URL);
    let data = await response.json();
   factPara.innerText = data[2].text;

};



/*  
using promise chaining


function getData(){
   fetch(URL).then((response) => {
    return response.json();
   }).then((data) => {
    factPara.innerText = data[0].text;
   });
};

*/


const btn = document.querySelector("#btn");
btn.addEventListener("click",getData);
