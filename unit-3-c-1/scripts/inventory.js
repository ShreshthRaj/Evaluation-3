dataarr=JSON.parse(localStorage.getItem("datas")) || [];
display(dataarr)

function display(data){
    data.forEach(function(ele,index)
    {
        var box=document.createElement("div");
        var image=document.createElement("img");
        image.setAttribute("src",ele.image)
        var p1=document.createElement("p");
        p1.innerText=ele.type;
        var p3=document.createElement("p");
        p3.innerText= "Price- "+ ele.price+"$";
        var p2=document.createElement("p");
        p2.innerText= "Description-  " +  ele.desc;
        var rem=document.createElement("button");
        rem.innerText="Remove";
        rem.style.margin="11px auto"
        rem.style.cursor="pointer"
        rem.addEventListener("click",function()
        {
            play(ele,index)
            just(ele,index)
        })

        
        box.append(image,p1,p3,p2,rem);
        document.querySelector("#all_products").append(box);
        

    })

}
function play(ele,index){
    event.target.parentNode.remove();
    document.querySelector("#all_products>div").innerText=""
}
function just(ele,index){
    
    let data=JSON.parse(localStorage.getItem("datas"));
    let newdata=data.filter(function(ele,i){
    if(i===index){
        let trash=JSON.parse(localStorage.getItem("trash")) || [];
    trash.push(ele);
    localStorage.setItem("trash",JSON.stringify(trash));

    }else{
        return i !==index;
    }
    });
    localStorage.setItem("datas",JSON.stringify(newdata));
    display(); 

}

