function addToCart(item){
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " 已加入购物车！");
}
