

const xhr=new XMLHttpRequest();
xhr.open('GET',"https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");
xhr.onreadystatechange= () =>{
    if(xhr.status===200 && xhr.readyState===4){
        const response=JSON.parse(xhr.responseText)
        const cards=document.getElementById("cards");
        for(let i=0;i<response.length;i++){
            console.log(response[i]);
            let template=`<div id=${response[i].id} class="card">
                            <div class="profile-picture">
                                <img src="./assets/Profile.png">
                            </div>
                            <div>Name : ${response[i].name}</div>
                            <div>Email : ${response[i].email}</div>                            
                          </div>`
            cards.innerHTML=cards.innerHTML+template;
        }

    }
}
xhr.send();