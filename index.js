var xhr = new XMLHttpRequest(); 

        // This configures the object to perform a GET request to the given url
        // Notice how we pass page=2
        xhr.open('GET', 'https://rickandmortyapi.com/api/character/');
        // This will send the GET request to the server.
        xhr.send()
        // This function will be called after the information is retrieved
        xhr.onload = function (){
        // The HTTP 200 code is returned when your request is successful so we check for that
        if(xhr.status == 200){
            console.log(xhr.response) // Print the response from the server after a successful request
        var res= JSON.parse(xhr.response)
        console.log(res.results.length)

        

        for( i = 0; i <res.results.length;i++)
        {
            // console.log(res.results[i].name);
            // console.log(res.results[i].status);
            // console.log(res.results[i].gender);
            // console.log(res.results[i].species);
            // console.log(res.results[i].origin.name);
            // console.log(res.results[i].origin.url);
            // console.log(res.results[i].location.name)
            // console.log(res.results[i].location.url)
            // console.log(res.results[i].image);
            // console.log('\n');
            var divs=document.getElementById("divs");
            divs.classList.add("row");
            //create another div inside main div element
           var divs1=document.createElement("div");
           divs1.classList.add("card");
           divs1.classList.add("cardl");
           // image create using dom 
           var imgs=document.createElement('img');
           imgs.classList.add("card-img-top");
           imgs.classList.add("imgl");
           imgs.setAttribute('src',res.results[i].image);
           divs1.appendChild(imgs);
        //    divs.appendChild(divs1);
          var divsBody=document.createElement("div");
          divsBody.classList.add("card-body");
            // create para
           var para1=document.createElement('p');
           para1.classList.add("card-title");
           para1.textContent="Name :"+res.results[i].name;
           divsBody.appendChild(para1);
          
           var para2=document.createElement('p');
           para2.classList.add("card-text");
           para2.textContent="Status :"+res.results[i].status;
           divsBody.appendChild(para2);
           divs1.appendChild(divsBody);
           divs.appendChild(divs1);

        //    var para3=document.createElement('p');
        //    para3.textContent="gender :"+res.results[i].gender;
        //    divs.appendChild(para3);

        //    var para4=document.createElement('p');
        //    para4.textContent="species: "+res.results[i].species;
        //    divs.appendChild(para4);

        //   var para5=document.createElement('p');
        //   para5.textContent="origin.name: "+res.results[i].origin.name;
        //   divs.appendChild(para5); 

        //   var para6=document.createElement('p')
        //   para6.textContent="location.name: "+res.results[i].location.name;
        //   divs.appendChild(para6); 

        //   var div2=document.createElement("div")
        //    div2.textContent="epsiode: "+res.results[i].epsiode;
        //   divs.appendChild(div2);

           
        }
        
        }
        else{
            console.log("Error Code is:" + xhr.status)
        }
        }