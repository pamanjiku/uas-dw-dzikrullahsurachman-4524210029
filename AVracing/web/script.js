/* =========================
   ADMIN STATUS (AUTO)
========================= */
function isAdminOnline() {
  const jam = new Date().getHours();
  return jam < 7 || jam >= 19;
}

/* =========================
   CHAT BOT
========================= */
function sendChat() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chatBox");
  if (!input || !chat) return;

  const text = input.value.trim();
  if (text === "") return;

  chat.innerHTML += `<div class="bubble user">${text}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  const typing = document.createElement("div");
  typing.className = "bubble bot";
  typing.innerHTML =
    "<b>🤖 Bot AVracing</b><br><i>sedang mengetik...</i>";
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();

    let reply = isAdminOnline()
      ? `Admin sedang online ✅<br>Pesan Anda akan segera dibalas.`
      : `Admin sedang sibuk akan dibalas setelah jam operasional.<br>Bengkel dalam keadaan ramai.`;

    chat.innerHTML += `
      <div class="bubble bot">
        <b>🤖 Bot AVracing</b><br>${reply}
      </div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 1200);
}

/* =========================
   SHOP / CART
========================= */
let cart = [];
let total = 0;

function addCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart");
  const totalEl = document.getElementById("total");
  if (!list || !totalEl) return;

  list.innerHTML = "";
  total = 0;

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} - Rp ${item.price}</li>`;
    total += item.price;
  });

  totalEl.innerText = "Total: Rp " + total;
}

function checkout() {
  const note = document.getElementById("note")?.value || "-";
  const payment = document.getElementById("payment")?.value || "-";

  alert(
    "Checkout berhasil!\n\n" +
    "Total: Rp " + total +
    "\nPembayaran: " + payment +
    "\nCatatan: " + note
  );

  cart = [];
  renderCart();
}

/* =========================
   HOME BACKGROUND
========================= */
const heroImages = ["bengkel1.jpg", "bengkel2.jpg", "bengkel3.jpg"];
let heroIndex = 0;
const hero = document.querySelector(".hero");

if (hero) {
  hero.style.backgroundImage = `url(${heroImages[0]})`;
  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;
  }, 5000);
}

/* =========================
   PLUS MENU
========================= */
function togglePlusMenu() {
  const menu = document.getElementById("plusMenu");
  if (!menu) return;
  menu.style.display =
    menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", e => {
  const plus = document.querySelector(".plus-wrapper");
  if (plus && !plus.contains(e.target)) {
    const menu = document.getElementById("plusMenu");
    if (menu) menu.style.display = "none";
  }
});
