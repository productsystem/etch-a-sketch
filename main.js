let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function()
{
    createEtch(16);
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON")
        {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click)
            {
                draw.textContent = "Draw Now by hovering over pixels. Click once to stop drawing";
            }
            else
            {
                draw.textContent = "Click once anywhere to start drawing";
            }
        }
    })
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function()
    {
        let size = getSize();
        createEtch(size);
    })

})

function createEtch(size)
{
    let etch = document.querySelector(".etch");
    etch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    etch.style.gridTemplateRows = `repeat(${size},1fr)`;

    let divNum = size * size;

    for(i = 0; i< divNum; i++)
    {
        let div = document.createElement("div");
        etch.insertAdjacentElement("beforeend", div);
        div.style.border = "1px solid black";
        div.addEventListener("mouseover",colorIn);
    }
}

function getSize()
{
    let input = prompt("Provide size for the board:");
    let message = document.querySelector("#message");
    if(input < 0 && input > 100)
    {
        message.innerHTML = "Provide number between 1 and 100";
    }
    else if(input > 0 && input < 100)
    {
        message.innerHTML = "Board Changed";
        resetEtch();
        return input;
    }
    else
    {
        message.innerHTML = "Incorrect input provided";
    }

}

function colorIn(){
    if(click){
        if(color == "random")
        {
            this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
        }
        else{
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(choice){
    color = choice;

}

function resetEtch(){
    let divArray = document.querySelectorAll("div");
    divArray.forEach((div) => div.style.backgroundColor = "white");
}