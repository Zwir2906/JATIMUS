// Ambil elemen
const searchBox = document.getElementById('searchMuseum');
const list = document.getElementById('museumList');
const items = list.getElementsByTagName('li') || [];

// Fungsi filter museum
function filterMuseums(query) {
query = query.toLowerCase();
for (let i = 0; i < items.length; i++) {
    const text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(query) ? "" : "none";
}
}

// --- Jalankan filter berdasarkan parameter URL ketika halaman dimuat ---
const params = new URLSearchParams(window.location.search);
const presetSearch = params.get("search");

if (presetSearch) {
    searchBox.value = presetSearch;
    filterMuseums(presetSearch);
}

// --- Ketika pengguna menekan ENTER ---
searchBox.addEventListener("keydown", function (e) {
if (e.key === "Enter") {
    e.preventDefault(); // cegah form submit (jika ada)
    const keyword = searchBox.value.trim();

    // Jika input kosong → kembali ke halaman tanpa filter
    if (keyword === "") {
    window.location.href = "museum.html";
    } else {
    // Buka halaman dengan parameter filter
    window.location.href = "museum.html?search=" + encodeURIComponent(keyword);
    }
}
});