const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const btn_container = document.querySelector(".btn-container")
let btn_list = []

const btn_all = document.createElement("BUTTON"); btn_list.push(btn_all);
const btn_korea = document.createElement("BUTTON"); btn_list.push(btn_korea);
const btn_japan = document.createElement("BUTTON"); btn_list.push(btn_japan);
const btn_china = document.createElement("BUTTON"); btn_list.push(btn_china);

btn_all.innerHTML = "All"
btn_korea.innerHTML = "Korea"
btn_japan.innerHTML = "Japan"
btn_china.innerHTML = "China"

btn_list.forEach(btn => { 
  btn.style.border = "1px solid black"
  btn.classList.add("btn", "btn-item")
  btn_container.appendChild(btn)
})

const section_center = document.querySelector(".section-center")



var createProduct = ({title = "", img = "", price = "0.00", desc= ""}) => {
  const div = document.createElement("div")
  div.classList.add("menu-items", "col-lg-6", "col-sm-12")
  
  var product_img = document.createElement("img")
  product_img.src = img
  product_img.className = "photo"
  
  
  const menu_info = document.createElement("div")
  menu_info.className = "menu-info"
  
  const menu_title = document.createElement("div")
  menu_title.className = "menu-title"
  const product_name = document.createElement("h4")
  const product_price = document.createElement("h4")
  var name_text = document.createTextNode(title)
  var price_text = document.createTextNode(price)
  product_name.appendChild(name_text)
  product_price.appendChild(price_text)
  
  
  const menu_text = document.createElement("div")
  menu_text.className = "menu-text"
  var text = document.createTextNode(desc)
  
  
  
  menu_text.appendChild(text)
  
  menu_title.appendChild(product_name)
  menu_title.appendChild(product_price)
  
  menu_info.appendChild(menu_title)
  menu_info.appendChild(menu_text)
  
  div.appendChild(product_img)
  div.appendChild(menu_info)
  
  section_center.appendChild(div)

}

menu.forEach(item => {
  createProduct(item)
})










