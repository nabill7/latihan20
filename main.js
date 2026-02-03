// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function process() {
let JUMLAH_BARANG =  Number (prompt("JUMLAH_BARANG")) 
  
  let total = 0;
  let output = "";
  
  // LOOP INPUT HARGA BARANG
  for (let i = 1; i <= JUMLAH_BARANG; i++) {
    let harga = Number(prompt("Masukkan harga barang ke-" + i));
    total += harga;
    
    output += "Barang ke-" + i + ": Rp " + rupiah(harga) + "<br>";
  }
  
  // HITUNG DISKON
  let diskon = 0;
  if (total > 500000) {
    diskon = total * 0.2;
  }
  
  let setelahDiskon = total - diskon;
  
  // HITUNG PPN
  let ppn = setelahDiskon * 0.1;
  
  // TOTAL BAYAR
  let totalBayar = setelahDiskon + ppn;
  
  // OUTPUT RINGKASAN
  output += `
    <div class="ringkasan">
      Total belanja: Rp ${rupiah(total)}<br>
      Diskon: Rp ${rupiah(diskon)}<br>
      PPN 10%: Rp ${rupiah(ppn)}<br>
      Total bayar: Rp ${rupiah(totalBayar)}
    </div>
  `;
  
  document.getElementById("hasil").innerHTML = output;
}