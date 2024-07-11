document.addEventListener("DOMContentLoaded", function()
{
    createEtch(8);
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
        
    }
}