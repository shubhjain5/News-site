// // sending a xml http request
// const xhr = new XMLHttpRequest()
// xhr.open('GET',"https://newsapi.org/v2/everything?q=apple&from=2022-09-10&to=2022-09-10&sortBy=popularity&apiKey=c255bd6c522d4e92845046c1b0e648c2",true)

// // what happend after loading
// xhr.onload= function(){
//     if(this.status===200)
//     {
//         let json = JSON.parse(this.responseText)
//         let article = json.articles
//         console.log(article)
//         let newsarea = document.getElementById("newsarea")
//         let html="";
//         article.forEach(function(element,index) {
//             html+=` <div class="accordion-item">
//             <h2 class="accordion-header" id="headingOne">
//               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                 <b>Breaking News ${index+1}</b>: ${element.title}
//               </button>
//             </h2>
//             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//               <div class="accordion-body">
//                  ${element.content}<a id = "urlpoint" href=${element.url} target = __blank> Click to Read</a>
//               </div>
//             </div>
//           </div>`
          
            
//         });
//         newsarea.innerHTML= html;
      
//     }
//     else 
//     console.log("error")
// }
// xhr.send()
// document.getElementById("newsimg").style.width= "60px";
function getdata(){
    let url ="https://newsapi.org/v2/everything?q=apple&from=2022-09-10&to=2022-09-10&sortBy=popularity&apiKey=c255bd6c522d4e92845046c1b0e648c2"
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        let json = data
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
                         ${element.content}<a id = "urlpoint" href=${element.url} target = __blank> Click to Read</a>
                      </div>
                    </div>
                  </div>`
        
       });
    })
}
getdata();
document.getElementById("newsimg").style.width= "60px";