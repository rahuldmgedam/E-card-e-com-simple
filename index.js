
function myFunction() {
  // leftNavbar
  let hide = document.getElementsByClassName('leftNavbar')[0].style.display = "none "



  let gridstyle = document.getElementsByClassName('section-container')[0]

  gridstyle.classList.add("change");



  // console.log(grid);
}
function myFunctionreverse() {
  // leftNavbar
  let hide = document.getElementsByClassName('leftNavbar')[0].style.display = "block "
  // let 
  let gridstyle = document.getElementsByClassName('section-container')[0]
  console.log(gridstyle);
  gridstyle.classList.remove("change");

}

function OpenmyCard() {
  let maincontainer = document.getElementsByClassName("main-container")[0]
  let carddetail = document.getElementsByClassName("data")[0]

  maincontainer.classList.add('dimmcontainer');
  carddetail.classList.remove('close');


}
function OpenmyCardTop() {
  let cardId = document.getElementById('container')
  // let carddetail = document.getElementsByClassName("data")[0]
  console.log("card button click", cardId);
  // maincontainer1.classList.add('dimmcontainer');
  // carddetail.classList.remove('close');


}

function closeCarddetail() {
  let maincontainer = document.getElementsByClassName("main-container")[0]
  let carddetail = document.getElementsByClassName("data")[0]

  maincontainer.classList.remove('dimmcontainer');
  carddetail.classList.add('close');


}

{
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000);
  }
}

function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log('click');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// ============== card data ======================== 

const Category =
  [
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    ' home-decoration'

  ]

const products = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
   
  {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "APPle",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
   
  {
    "id": 11,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/11/1.jpg",
      "https://i.dummyjson.com/data/products/11/2.jpg",
      "https://i.dummyjson.com/data/products/11/3.jpg",
      "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
    ]
  },
  {
    "id": 12,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "price": 40,
    "discountPercentage": 15.66,
    "rating": 4,
    "stock": 52,
    "brand": "Royal_Mirage",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
      "https://i.dummyjson.com/data/products/12/4.jpg",
      "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
    ]
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    "id": 16,
    "title": "Hyaluronic Acid Serum",
    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "price": 19,
    "discountPercentage": 13.31,
    "rating": 4.83,
    "stock": 110,
    "brand": "L'Oreal Paris",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
    ]
  },
  {
    "id": 17,
    "title": "Tree Oil 30ml",
    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    "price": 12,
    "discountPercentage": 4.09,
    "rating": 4.52,
    "stock": 78,
    "brand": "Hemani Tea",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/17/1.jpg",
      "https://i.dummyjson.com/data/products/17/2.jpg",
      "https://i.dummyjson.com/data/products/17/3.jpg",
      "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
    ]
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    ]
  },
  {
    "id": 21,
    "title": "- Daal Masoor 500 grams",
    "description": "Fine quality Branded Product Keep in a cool and dry place",
    "price": 20,
    "discountPercentage": 4.81,
    "rating": 4.44,
    "stock": 133,
    "brand": "Saaf & Khaas",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/21/1.png",
      "https://i.dummyjson.com/data/products/21/2.jpg",
      "https://i.dummyjson.com/data/products/21/3.jpg"
    ]
  },
  {
    "id": 22,
    "title": "Elbow Macaroni - 400 gm",
    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "price": 14,
    "discountPercentage": 15.58,
    "rating": 4.57,
    "stock": 146,
    "brand": "Bake Parlor Big",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/22/1.jpg",
      "https://i.dummyjson.com/data/products/22/2.jpg",
      "https://i.dummyjson.com/data/products/22/3.jpg"
    ]
  },
  {
    "id": 26,
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 41,
    "discountPercentage": 17.86,
    "rating": 4.08,
    "stock": 131,
    "brand": "Boho Decor",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/26/1.jpg",
      "https://i.dummyjson.com/data/products/26/2.jpg",
      "https://i.dummyjson.com/data/products/26/3.jpg",
      "https://i.dummyjson.com/data/products/26/4.jpg",
      "https://i.dummyjson.com/data/products/26/5.jpg",
      "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
    ]
  },
  {
    "id": 27,
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 51,
    "discountPercentage": 15.58,
    "rating": 4.41,
    "stock": 17,
    "brand": "Flying Wooden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    "images": [
      "https://i.dummyjson.com/data/products/27/1.jpg",
      "https://i.dummyjson.com/data/products/27/2.jpg",
      "https://i.dummyjson.com/data/products/27/3.jpg",
      "https://i.dummyjson.com/data/products/27/4.jpg",
      "https://i.dummyjson.com/data/products/27/thumbnail.webp"
    ]
  },
]


const CardData = () => {
  let CardContainer = document.getElementById('CardDataItem')
  products.map((value) => {
    console.log(value.id);
    let showcard = document.createElement('div') 
    showcard.className = 'showcard'
    showcard.innerHTML = `<div  id="mySidenav" class="sidenav" ><a onclick = 'MyCardData(${value.id})' id="about">Add to card </a></div>`
    let imagedata = document.createElement('div') 
    imagedata.className = 'imagedata'
    
    
    let image   = document.createElement('img')
    image.className = 'cardImage'
    let titledata = document.createElement('div')
    titledata.className = 'titledata '
    let priceratingdata = document.createElement('div')
    priceratingdata.className = 'priceratingdata'
    let pricedata = document.createElement('div')
    pricedata.className = 'pricedata'
    let ratingdata = document.createElement('div')
    ratingdata.className = 'ratingdata'
    let branddata = document.createElement('div')
    branddata.className = 'branddata'
    let grandItem =  document.createElement('div')
    grandItem.className = 'grandItem'
    // imagedata.innerHTML =  `<div  id="mySidenav" class="sidenav"><a onclick = 'MyCardData(${value.id})' id="about">Abofffffffffffffffffffffffffffffffffffffffffffffffffffffut</a></div>`
    image.src = value.images[1]
    imagedata.appendChild(image)
     
    titledata.innerHTML= `<h3>${value.title}</h3>`
    // CardContainer.append(titledata)
    pricedata.innerHTML= `<h3>${value.price}₹</h3>`
    ratingdata.innerHTML= `<h3> ⭐${value.rating}</h3>`
    priceratingdata.append(pricedata, ratingdata)
    // priceratingdata.appendChild(ratingdata)
    branddata.innerHTML= `<h3>${value.brand}</h3>`
    
    grandItem.append(  imagedata, titledata, priceratingdata, branddata,showcard)



    
      CardContainer.appendChild(grandItem)
  })
}

CardData()



function MyCardData(val){
  console.log(val);
}