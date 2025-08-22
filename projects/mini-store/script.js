const els = {
  loginPage: document.getElementById("loginPage"),
  shopPage: document.getElementById("shopPage"),
  productsGrid: document.getElementById("productsGrid"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartItems: document.getElementById("cartItems"),
  cartTotal: document.getElementById("cartTotal")
};
const products = [
  { id: 1, name: "منتجات غذائيه", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3U736d1e6g37TT0thvygRn3QFoJA_2H8-wA&s" },
  { id: 2, name: "منتجات العنايه الشخصيه", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA59pFaearerY04u4AiOesqL-aWvNfLFNWZw&s" },
  { id: 3, name: "منتجات الالبان", price: 350, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3O8j4Ovs1LaabQfR2PrnjviUXSX9Tj4v-g&s" },
  { id: 4, name: "مكياج", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj06IUG0z6QnETrzAANEbX_zadMTdLQf3QiA&s" },
  { id: 6, name: "ادوات مطبخ", price: 400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LuTD-7cvznVV2LBq5hFYSHvYXDz7hOvDYg&s" },
  { id: 7, name: "هاتف", price: 6000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3ldL4Tc48tOMnmL0kVzF4Jz6zHll1QoJ-A&s" },
  { id: 5, name: " منتجات طبيعيه", price: 800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeY4QWebgJRUoyz2Lzj-7EbHIIBZx7zN8liA&s" },
  { id: 8, name: " اجهزه منزليه", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUjHdr1tIQQd6qxsclwD3VoO7VxyYACQMFg&s" },
  { id: 9, name: "لابتوب", price: 15000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4SNy9EVV6q5LiqcBgu_go7ieCx8wk42kJA&s" },
  { id: 10, name: "نظارة شمسية", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4v6oHCXCIa2IBFBlWqhSDvtDVJwVp33g8g&s" }
];


let cart = [];

// ========== تسجيل الدخول ==========
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if(username && password){
    localStorage.setItem("miniUser", username);
    checkLogin();
  } else {
    alert("من فضلك أدخل اسم المستخدم وكلمة المرور");
  }
}

function checkLogin() {
  const user = localStorage.getItem("miniUser");
  if(user){
    els.loginPage.style.display = "none";
    els.shopPage.style.display = "block";
    renderProducts(); updateCartUI();
  } else {
    els.loginPage.style.display = "flex";
    els.shopPage.style.display = "none";
  }
}

// ========== المنتجات ==========
function renderProducts(){
  els.productsGrid.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} ج.م</p>
      <button class="btn" onclick="addToCart(${p.id})">إضافة للسلة</button>
    </div>
  `).join("");
}

// ========== السلة ==========
function addToCart(id){
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCartUI();
}

function updateCartUI(){
  els.cartItems.innerHTML = cart.map((c,i)=>`
    <div class="cart-item">
      <span>${c.name}</span>
      <span>${c.price} ج.م</span>
    </div>
  `).join("");
  const total = cart.reduce((sum, i)=> sum+i.price, 0);
  els.cartTotal.textContent = total;
}

function toggleCart(){
  els.cartDrawer.classList.toggle("open");
}

checkLogin();
