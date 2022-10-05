// let buton = document.querySelector('#click') ; 

// buton.onclick = function () {


//     let sorgu = new XMLHttpRequest();

//     sorgu.onreadystatechange = function () {

//         if(this.readyState===4 && this.status ===200) {
//             console.log("sorgu qebul olundu")
//             this.responseText
//         }
//         else if (this.status === 404) {
//             console.log('yoxdu');
//         }

//     }

//     sorgu.open('GET', "text.txt")
//     sorgu.send();   

// }


// buton.onclick= function () {
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(data => {

//         let carts = '';
//         data.forEach(cart=> {

//             carts+= `

//             <div class="card col-lg-3 mt-4 mb-3 ">
//             <img class="card-img-top" src=${cart.image} alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
//                     card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//             `
//             document.getElementById('box').innerHTML=carts;
//         });
//     })
//     .catch(error => console.log(error))
// }






// if (localStorage.getItem('users') === null) {

//     localStorage.setItem('users', JSON.stringify([]))

// }
// let buttond = document.querySelector('#btn');

// buttond.onclick = function () {

//     let inp = document.querySelector('#inp').value;
//     let inpemail = document.querySelector('#inpemail').value;

//     let userlist = JSON.parse(localStorage.getItem('users'));
//     userlist.push(
//         {
//             ad: inp,
//             email: inpemail
//         }
//     )

//     localStorage.setItem('users',JSON.stringify(userlist))

//     Add();

// }

// function Add() {

//     let userlist = JSON.parse(localStorage.getItem('users'));


//     userlist.forEach(user => {

//         document.querySelector('#userarea').innerHTML = `${user.ad} ${user.email}` ;
//     }) 


    
// }
// Add();



let btns= document.querySelectorAll('.btn')


if(localStorage.getItem('basket')===null){
    localStorage.setItem('basket',JSON.stringify([]))
}


for(let btn of btns){
btn.onclick=function(e){
    e.preventDefault()
    let prId=e.target.parentElement.parentElement.id;
    let prName=e.target.parentElement.children[0].innerHTML
    let prPrice=e.target.previousElementSibling.innerHTML
    let prImage=e.target.parentElement.previousElementSibling.src

    let basket=JSON.parse(localStorage.getItem('basket'));

    

    let existProd = basket.find(pr => pr.Id === prId);

    if(existProd == undefined){
        basket.push({
            Id: prId,
            Name: prName,
            Price: prPrice,
            Image: prImage,
            Count: 1
        })
    }
    else{
        existProd.Count +=1 
    }

    localStorage.setItem('basket',JSON.stringify(basket))

CountProduct()

}
}



function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));

    document.getElementById('count').innerHTML=basket.length
}

CountProduct()