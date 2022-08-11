let id=0;
const xhr=new XMLHttpRequest();
xhr.open('GET',"https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");
xhr.onreadystatechange= () =>{
    if(xhr.status===200 && xhr.readyState===4){
        const response=JSON.parse(xhr.responseText)
        const buttons=document.getElementsByClassName("open-pop-up")
        const closeButtons=document.getElementsByClassName("close-button")
        const popUpWindow=document.getElementsByClassName("pop-up")

        const cards=document.getElementById("cards");
        for(let i=0;i<response.length;i++){
            let template=`<div class="card">
                            <div><img src="./assets/Profile.png"></div>
                            <h3>${response[i].name}</h3>
                            <p class="title">${response[i].company.name}</p>
                            <p><button id=${response[i].id} class="open-pop-up">See More Information</button></p>
                        </div>
                        <div class="pop-up">
                            <div class="profile-picture"><img src="./assets/Profile.png"></div>
                            <p>ID : ${response[i].id}</p>
                            <p>Name : ${response[i].name}</p>
                            <p>Email : ${response[i].email}</p>
                            <p>Address : ${response[i].address.suite}, ${response[i].address.street}, ${response[i].address.city}</p>
                            <p>Phone : ${response[i].phone}</p>
                            <p>Website : ${response[i].website}</p>
                            <p>Company : ${response[i].company.name}</p>
                            <div class="close"><button class="close-button">Close</button></div>
                        </div>`
            cards.innerHTML=cards.innerHTML+template;
        }

        
        for(let i=0;i<buttons.length;i++){
            buttons[i].addEventListener("click", (e) =>{
                document.getElementsByClassName("pop-up")[e.target.id-1].style.display="block"
            });
        }

        for(let i=0;i<closeButtons.length;i++){
            closeButtons[i].addEventListener("click", (e) =>{
                e.target.parentElement.parentElement.style.display="none";
            });
        }
        id=buttons.length;

    }
}
xhr.send();

document.getElementById("add").addEventListener("click", (e)=>{
    e.preventDefault();
    let person={id:id,
        name:document.getElementById("name-input").value,
        email:document.getElementById("email-input").value,
        company:document.getElementById("company-input").value,
        address:document.getElementById("address-input").value,
        phone:document.getElementById("phone-input").value,
        website:document.getElementById("website-input").value,
    }
    let template=`<div class="card">
                    <div><img src="./assets/Profile.png"></div>
                    <h3>${person.name}</h3>
                    <p class="title">${person.company}</p>
                    <p><button id=${id} class="open-pop-up">See More Information</button></p>
                </div>
                <div class="pop-up">
                    <div class="profile-picture"><img src="./assets/Profile.png"></div>
                    <p>ID : ${id}</p>
                    <p>Name : ${person.name}</p>
                    <p>Email : ${person.email}</p>
                    <p>Address : ${person.address}</p>
                    <p>Phone : ${person.phone}</p>
                    <p>Website : ${person.website}</p>
                    <p>Company : ${person.companyname}</p>
                    <div class="close"><button class="close-button">Close</button></div>
                </div>`
    const cards=document.getElementById("cards");
    cards.innerHTML=cards.innerHTML+template;

    id++;
})