// sending a xml http reqheadlines
// have to think the logic to disable the next and previous button
var pagenumber = 1
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c255bd6c522d4e92845046c1b0e648c2&page=${pagenumber} `


const xhr = new XMLHttpRequest()
xhr.open('GET',url,true)

// what happend after loading
xhr.onload= function(){
  if(this.status===200)
  {
    let json = JSON.parse(this.responseText)
        console.log(json.totalResults)
        let article = json.articles
        console.log(article)
        let newsarea = document.getElementById("newsarea")
        let html="";
        article.map(function(element,index) {
          console.log(element)
            html+=` <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>Breaking News ${index+1}</b>: ${element.title}
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                 ${element.content}<a id = "urlpoint" href=${element.url} style = text-decoration-line: none; target = __blank> Click to Read</a>
              </div>
            </div>
          </div>`
          
            
        });
        newsarea.innerHTML= html;
      
    }
    else 
    console.log("error")
}
xhr.send()
document.getElementById("newsimg").style.width= "60px";


// next button logic
let nextbtn = document.getElementById("next")
nextbtn.addEventListener("click",function next(){
 
  pagenumber= pagenumber+ 1
 console.log(pagenumber)

  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c255bd6c522d4e92845046c1b0e648c2&page=${pagenumber}`


const xhr = new XMLHttpRequest()
xhr.open('GET',url,true)

// what happend after loading
xhr.onload= function(){
    if(this.status===200)
    {
         json = JSON.parse(this.responseText)
        let article = json.articles
        console.log(article)
        let newsarea = document.getElementById("newsarea")
        let html="";
        article.forEach(function(element,index) {
            html+=` <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>Breaking News ${index+1}</b>: ${element.title}
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                 ${element.content}<a id = "urlpoint" href=${element.url} style = text-decoration-line: none; target = __blank> Click to Read</a>
              </div>
            </div>
          </div>`
          
            
        });
        newsarea.innerHTML= html;
      
    }
    else 
    console.log("error")
}
xhr.send()

})

// previous button logic

let prebtn = document.getElementById("previous")
prebtn.addEventListener("click",function pre(){
pagenumber = pagenumber-1
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c255bd6c522d4e92845046c1b0e648c2&page=${pagenumber} `


const xhr = new XMLHttpRequest()
xhr.open('GET',url,true)

// what happend after loading
xhr.onload= function(){
    if(this.status===200)
    {
        let json = JSON.parse(this.responseText)
        let article = json.articles
        console.log(article)
        let newsarea = document.getElementById("newsarea")
        let html="";
        article.forEach(function(element,index) {
            html+=` <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>Breaking News ${index+1}</b>: ${element.title}
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                 ${element.content}<a id = "urlpoint" href=${element.url} style = text-decoration-line: none; target = __blank> Click to Read</a>
              </div>
            </div>
          </div>`
          
            
        });
        newsarea.innerHTML= html;
      
    }
    else 
    console.log("error")
}
xhr.send()

})
function defineme(){

  return("false");
  
}




// document.getElementById("urlpoint").style.textDecorationLine= "none";
