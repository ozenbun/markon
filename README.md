# MARKONBANT Website

GitHub ve Netlify için hazırlanmış statik tanıtım sitesi.

## Dosya Yapısı

- `index.html`: Ana sayfa
- `styles.css`: Tasarım stilleri
- `script.js`: Mobil menü ve üst bar davranışı
- `assets/markon-hero.png`: Ana görsel
- `netlify.toml`: Netlify yayın ayarları
- `_redirects`: Netlify yönlendirme kuralı

## Netlify Kurulum

1. Bu klasördeki dosyaları GitHub reposuna yükleyin.
2. Netlify'de **Add new site > Import an existing project** seçin.
3. GitHub reposunu bağlayın.
4. Build ayarlarında:
   - Build command: boş bırakın
   - Publish directory: `.`
5. Deploy edin.

Site statiktir; ek kurulum veya paket yükleme gerektirmez.
