console.log("News Website Project");

// Initialize the parameters
let apiKey = "d17c903f25d54089bfaa9792cede0cd9";
let source = "the-times-of-india";

// Grab
let accordionFlush = document.getElementById("accordionFlush");
let url=`https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`;

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  url,
  true
);

xhr.onload = function () {
  let json = JSON.parse(this.responseText);
  let articles = json.articles;
  let news = "";

  articles.forEach(function (element, index) {
    news += `
        <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
            <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index}"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            >
            <strong>Breaking news ${index + 1}</strong>  : ${element.title}
            </button>
        </h2>
        <div
            id="collapse${index}"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
        >
            <div class="accordion-body" style="display:flex">
            <img src="${element.urlToImage}" alt="Some Image" style="width:400px;height:200px;"><br>
            <div class="news" style="margin:30px">
            ${element.description}<br>
            <a href="${element.url}" style="text-decoration:none" target="_blank">Click here to Read More</a>
            <br>
            <br>
            <br>
            Published At : ${element.publishedAt}
            </div>
            </div>
        </div>
        </div>
        `;
  });
  accordionFlush.innerHTML = news;
};

xhr.send();


let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    let searchTxt = document.getElementById('searchTxt');
    let q=searchTxt.value;
    url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`;
    xhr.open('GET',url,true);
});