const btn = document.getElementById("hider");
const textTohide = document.getElementById("text");

btn.addEventListener('click', ()=>{ 
    if(textTohide.style.display !== 'none'){
        textTohide.style.display = 'none';
    }else {
        textTohide.style.display = 'block';
    }
})

const card = document.createElement("div");
card.innerHTML = "<h2>Vaniko</h2>\n<a href=\"#\">Go to profile</a>";
card.id = "card";
document.getElementById("two").appendChild(card)

const cardDiv = document.querySelector('#card');
cardDiv.style.backgroundColor = 'red';