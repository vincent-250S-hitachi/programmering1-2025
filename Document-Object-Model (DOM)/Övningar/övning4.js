let links = document.querySelectorAll("a")
for(let i = 0; i < links.length; i++){
    console.log(links[i])
    console.log(links[i].getAttribute("href"))
    if(links[i].hasAttribute("href")){
        if(links[i].getAttribute("href").includes("://")){
            links[i].style.color = "orange"
        }
    }
}