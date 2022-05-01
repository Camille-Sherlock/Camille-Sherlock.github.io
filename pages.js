let imgUrl = "img2.jpeg"
let firstOpen = true;
function onChangFront(){
    firstOpen=false;
    document.getElementById('img').innerHTML= `<img class="main-photo" src='img1.jpeg' alt="no image">`
}
function onChangeBack(){
    firstOpen=false
document.getElementById('img').innerHTML= `<img class="main-photo" src='img2.jpeg' alt="no image">`
}
function onChange(address){
    imgUrl=address
}

document.getElementById('img').innerHTML= `<img class="main-photo" src='img1.jpeg' alt="no image">`

