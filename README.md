## Kurulum

 1. NodeJS kurun:
    [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
 2. Projeyi klonlayın.
 3. Veritabanına bağlanmak için “backend” klasörü içine .env dosyası oluşturun. [Dokümantasyon](https://www.mongodb.com/docs/drivers/node/current/usage-examples/)
```.env
# .env key
ATLAS_URI=<mongodb access uri>
```
 4. Terminalden projeye “`cimri-scraping`” cd olun ve “`npm install`” komutunu kullanın.
 5. “`backend`” kalasörüne cd olun ve “`nodemon server`” komunutu çalıştırın. Server api çalışacaktır.
 6. `cimri-scrapping`” cd olun ve “`npm start`” komutunu çalıştırın.
 7. Proje “`http://localhost:3000`” adresinde çalışmaya başlayacaktır. Tarayıcının url kısmına “`http://localhost:3000`” yazarak inceleyebilirsiniz.

## Giriş
Javascript, Nodejs, React ve Redux kullanılarak geliştirilmiştir. Scraping için Axios Api ve Cheerio paketi kullanılmıştır. Ön yüz geliştirmesinde React ve Redux temelini oluşturmaktadır. Backend tarafında Nodejs ile api yazılmış ve Cors politikalarından sıyrılmıştır.

Projenin çalışma prensibi ön yüzden Axios Api kullanılarak server’a gönderilen isteklerin, server tarafında Cimri.com’a Scraping yapılarak verileri ön yüze iletmesinden oluşuyor. Cimri.com’da istenilen ürünün bilgileri HTML formatında alınarak Cheerio paketi ile istenilen formatta ayrıştırıldıktan sonra ön yüze gönderilmektedir.

Projede veri tabanı olarak MongoDB Atlas kullanılarak online bir sistemde proje derlendikten sonra tekrardan veritabanı kurulumu gerektirmemektedir. 

 - Models klasörü altında bulunan dosyalar Mongoose kullanılarak MongoDB Atlas veritabanında kullanılmak üzere modellemeler yapıldı. Veritabanında üç faklı model JSON formatında saklanmaktadır.
 ![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/backend2.png)
 - Veritabanında kullanıcıların kayıt oldukları mail ve şifreleri başta olmak üzere, kullanıcı bilgileri, favori ve fiyat takibine ekledikleri ürünler saklanmaktadır.
 - **cimri.js:** cimri.com üzerinde scraping yaparak ürün arama ve bazı sayfaları kazmaktadır.
 - **productAlarm.js:** Ön uçta kullanıcıların fiyat alarmına ekledikleri ürünlerden gelen   request isteklerini cimri.com üzerinden sorgulayarak ürünün fiyatının durumunu response etmektedir.
 - **userProducts.js:** Kullanıcıların favoriye veya fiyat alarmına ekledikleri ürünleri veritabanına ekleme, silme, güncelleme ve bulmak için kullanılmaktadır.
   
 - **Users.js:** Kullanıcıların veritabanına üyelik kaydı, giriş, şifre değiştirme ve üyelik silme için kullanılmaktadır.
 - **Usersinfo.js:** Kullanıcıların veritabanında bilgilerini ekleme, değiştirme ve silmek için kullanılmaktadır.
 - **cimriSearch.js:** cimri.js routue’una gelen ürün arama isteklerini cimri.com’a iletilecek request url’ını düzenlemektedir.
 - **priceSplit.js:** productAlarm.js route’una gelen isteklerin fiyat bilgilerini istenilen forma dönüştürmek için kullanılmaktadır. Fiyat bilgisinden noktalama işaretlerini çıkartarak numerik bir forma sokarak ürünün fiyatını karşılaştırmaktadır.
 - **Cimri.js:** Scraping yapılan bu dosyada cheerio paketi kullanılarak, cimri.com üzerinden dönen html response’una html etiketlerinde bulunan class özelliklerine göre DOM ayrıştırması yapılarak sayfalar kazınmaktadır. Tüm scraping filtreleme, ayrıştırma ve response edilmek üzere hazırlanma işlemleri bu kısımda yapılmaktadır. Bu kısımda internet üzerinde bulunan tüm e-ticaret siteleri için fonksiyonlar eklenerek genişletilebilir ve bir çok siteden ürünler çekilebilir fakat bunun olumsuz yanı server maliyetini arttıracak olmasıdır.
 

## Görseller

![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p1.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p2.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p3.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p4.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p5.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p6.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/cimri-scraping/master/screenshot/p7.png)

