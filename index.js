//alışveriş listesi

function urunGirisi() {
  let urunSayisi = prompt("kac adet urun eklemek istersiniz ?");
  let urunler = []; 

  for (let i = 0; i < urunSayisi; i++) {
    let urun = prompt((i + 1) + "urun ismini girin:");
    urunler.push(urun);
  }

  console.log("girilen urunler:", urunler);
  console.log("toplam urun sayisi:", urunler.length);
}

urunGirisi();

// Kullanıcıya kaç adet ürün eklemek istediğini soralım
// Kullanıcıdan aldığı cevaba göre ürünleri yazdığında diziye eklesin.
// Console'a tüm ürünleri yazdıralım ve dizi içinde kaç eleman olduğunu yazdıralım