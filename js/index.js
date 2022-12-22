    
    
    var pLeft = 0
    var pTop = 0
    var demo = document.getElementById('demo')


onkeydown = function(e){
   
  

    if(e.key == "ArrowRight"){
        if(pLeft < 900){
            console.log(e.key)
            demo.style.left = pLeft+"px"
            demo.style.transform = "rotateY(0deg)"
            pLeft+=30
        }
        
    }

    if(e.key == "ArrowLeft"){
        console.log(e.key)
        demo.style.left = pLeft+"px"
        demo.style.transform = "rotateY(180deg)"
        pLeft-=30
    }

    if(e.key == "ArrowUp"){
        console.log(e.key)
        demo.style.top = pTop+"px"
        pTop-=30
    }

    if(e.key == "ArrowDown"){
        console.log(e.key)
        demo.style.top = pTop+"px"
        pTop+=30
    }
}

