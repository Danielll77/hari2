const barangData = [
    { nama: "Kulkas", harga: 3000000, stok: 10, gambar: "kulkas.jpg" },
    { nama: "Mesin Cuci", harga: 2500000, stok: 15, gambar: "mesin_cuci.jpg" },
    { nama: "Laptop", harga: 8000000, stok: 8, gambar: "laptop.jpg" },
    { nama: "Televisi", harga: 4000000, stok: 20, gambar: "televisi.jpg" },
    { nama: "AC", harga: 5000000, stok: 12, gambar: "ac.jpg" },
    { nama: "Kipas", harga: 500000, stok: 30, gambar: "kipas.jpg" },
    { nama: "Blender", harga: 600000, stok: 25, gambar: "blender.jpg" },
    { nama: "Setrika", harga: 300000, stok: 40, gambar: "setrika.jpg" },
    { nama: "Handphone", harga: 4000000, stok: 50, gambar: "handphone.jpg" },
    { nama: "Smartwatch", harga: 1000000, stok: 30, gambar: "smartwatch.jpg" },
];

function renderBarang(barangList) {
    const container = document.querySelector('.barang-container');
    container.innerHTML = "";
    barangList.forEach((barang, index) => {
        const barangHTML = `
            <div class="barang">
                <img src="${barang.gambar}" alt="${barang.nama}">
                <h3>${barang.nama}</h3>
                <p>Harga: Rp ${barang.harga.toLocaleString()}</p>
                <p>Stok: ${barang.stok}</p>
            </div>
        `;
        container.innerHTML += barangHTML;
    });
}

function searchBarang() {
    const query = document.querySelector('#search-input').value.toLowerCase();
    const filteredBarang = barangData.filter(barang =>
        barang.nama.toLowerCase().includes(query)
    );
    renderBarang(filteredBarang);
}

function sortBarang() {
    const sortType = document.querySelector('#sort-select').value;
    const sortedBarang = [...barangData].sort((a, b) => {
        if (sortType === "nama") return a.nama.localeCompare(b.nama);
        if (sortType === "harga") return a.harga - b.harga;
        if (sortType === "stok") return a.stok - b.stok;
    });
    renderBarang(sortedBarang);
}

document.addEventListener("DOMContentLoaded", () => {
    renderBarang(barangData);
});
