//store the products array in localstorage as "products"

function objectdemo(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function fun(){
    event.preventDefault();
    let products =document.getElementById("products");
    let type =products.type.value;
    let desc=products.desc.value;
    let price=products.price.value;
    let image=products.image.value;
    
    let res= new objectdemo(type,desc,price,image);
    // console.log(res)
    var dataarr=JSON.parse(localStorage.getItem("datas")) || [];
    dataarr.push(res)
    console.log(dataarr);
    console.log(type,desc,price,image);
    localStorage.setItem("datas",JSON.stringify(dataarr));
}



