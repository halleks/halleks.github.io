var page = 1;

function update() {
    var old_page = page;
    const circ1 = document.getElementById("circ1");
    const circ2 = document.getElementById("circ2");
    const circ3 = document.getElementById("circ3");
    
    let trigger = document.getElementById("trigger");
    let hero = $('#trigger').offset().top - $('.about').offset().top;
    let about = $('#trigger').offset().top - $('.products').offset().top;
    if(hero <= 0){
        page = 1;
    }
    if(hero > 0){
        page = 2;
    }
    if(about > 0){
        page = 3;
    }
    
    if(old_page != page){
        console.log(page);
        current();
    }
}

function current(){
    
    let bullet_count = document.getElementsByClassName("bullet-indicator").length;
    
    for(i=1; i <= bullet_count; i++){
        if(i == page){
            document.getElementById("circ"+i).setAttribute("name","radio-button-on-outline");
            console.log(page +" "+i);
        }
        else{
            document.getElementById("circ"+i).setAttribute("name","ellipse-outline");
            console.log(page +" "+i);
        }
    }
    
    
}

document.addEventListener('scroll', update);
update();