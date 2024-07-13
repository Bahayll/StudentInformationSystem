# Student Information System
## GİRİŞ BÖLÜMÜ 
  Rapor, bir üniversite öğrenci bilgi sisteminin tasarımına yönelik gereksinimleri ve kısıtları 
detaylı bir şekilde açıklamaktadır. Sistem, öğrencilerin ders seçiminden not girişine kadar çeşitli 
işlevleri içermekte ve farklı kullanıcı rollerine sahip olmaktadır. Her bir kullanıcı rolü, belirli 
işlevleri gerçekleştirebilmekte ve sistemin temel yapı taşlarını oluşturmaktadır. Ayrıca, 
kullanıcıların sisteme erişim ve işlevlerine ilişkin belirli kısıtlamalar ve gereksinimler de 
belirtilmiştir. Raporun en alt sayfasında projenin GitHub linki mevcuttur. Bu rapor, sistemin 
genel yapısını ve tasarım sürecindeki ana hedefleri açıklamak amacıyla hazırlanmıştır. 
•  Sistem Üyelikleri ve Giriş: 
 Sistemde üyelik ekranı yoktur. Her kullanıcının sisteme kayıtlı birer üyeliği vardır ve 
sadece sistemde kayıtlı kullanıcılar oturum açabilmektedir. 
 Kullanıcılar, sisteme kayıtlı TC Kimlik numaralarıyla ve parolalarıyla sisteme giriş 
yapabilirler. 
 Her kullanıcıya sadece bir üyelik tipi atanmaktadır: Öğrenci, öğretim elemanı, 
danışman veya idareci. 
 Her üyelik tipi kendisine atanmış üyelik sistemine giriş yapabilir. Örneğin; danışman 
‘Öğreti Elemanı Sistemine’ öğretim elemanı ise ‘Danışman Sistemin’ giriş yapamaz. 
 Üyelik tipleri sadece kendisine ait işlevleri gerçekleştirebilmektedir. Örneğin 
danışman not girişi yapamamaktadır. 
 Bütün üyelik tipleri için hesap ayarları; cep telefonu bilgisi, kurumsal ve kişisel e
posta, ikamet adres ve şifre ayarlarını içerir. Bütün üyelik tipleri, hesap ayarları 
menüsünden hesap ayarlarını görüntüleyerek değiştirebilir. 
•  Üyelik Tipleri İşlevleri, Kısıtlamaları ve Gereksinimleri:   
• 1. Öğrenci Bilgi Sistemi 
 Öğrenci Bilgi Sistemine giriş yapan kullanıcıların temel işlevleri yönetmeliğe uygun 
ders seçimi yaparlar ve aldıkları ders bilgilerini, notlarını ve detaylarını 
görüntüleyebilirler.  
 Öğrenci Bilgi Sistemi, ‘Derslerim’, ‘Ders Seçimi/Kayıt Yenileme’, ‘Belge Talebi’, 
‘Görüntüleme işlemleri’, ‘Hesap Ayaları’ menülerini içermektedir. 
 Ders Seçimi/Kayıt Yenileme Menüsünde; öğrenciler, her dönem başında 
yönetmeliklere uygun olarak ders seçimi yaparlar. Öğrenciler ders seçiminde; 
 Zorunlu dersler, alttan dersler(varsa), döneme göre sayısı değişen seçmeli 
dersler, GNO < 2.00 ise koşullu dersleri, GNO < 1.80 ise gereken yarıyıllardan 
ders alınamaz, önceki yıla ait dersleri seçmeleri zorunludur. 
 Alttan dersleri yoksa ve GNO => 3.00 ise üst dönemden de ders seçebilirler.  
 Notu “DD-DC” olan dersler GNO'ya bakılmaksızın yükseltmeye alınabilir, 
transkriptten silinmez. GNO 2.00'ın üzerinde ise notu “CC” ve üzeri dersler 
yükseltmeye alınabilir.  
 Seçmeli ders/derslerden başarısız (FD, FF, YS ve DS) olan öğrenci, bu 
ders/derslerin yerine danışmanı tarafından uygun görülen ve kredisi eşit olan 
başka bir seçmeli ders/dersler alabilir.   
 Genel not ortalaması 3.00 ve üzeri öğrenciler seçmeli ders sınırlamalarından 
muaf olup, istedikleri seçmeli derslere kayıt olabilirler ve kontenjana dahil 
edilmezler.  
 Öğrencilerin seçtiği dersler 45-48 (7. Ve 8. Yarıyıl İçin) AKTS’yi geçemez.Bir 
eğitim-öğretim yılında önlisans/lisans programları için ders ve uygulama kredisi   
toplamı 60 AKTS’dir. Önlisans programları toplam 120, dört yıllık lisans 
programlarında 240, beş yıllık lisans programlarında ise toplam 300 AKTS’dir.  
 Derslerim Menüsünden; öğrenciler, ders ataması gerçekleşmişse aldıkları dersleri ve 
notlarını, aldıkları dersler ile ilgili genel bilgileri, hafta içeriklerini, ödevlerini ve ders 
bilgilerini görüntüleyebilirler. 
 Belge Menüsünden; öğrenciler, öğrenci belgesi, transkript ve öğrenci ders içeriği 
raporunu görüntüleyebilirler. 
 Görüntüleme İşlemleri Menüsünden; öğrenciler, ders programı, danışman bilgileri ve 
takvimi görüntüleyebilirler. 
• 2. Öğretim Elemanı Sistemi 
 Öğretim elemanlarının temel görevleri, kendilerine atanmış derslerle ilgili işlemleri 
yönetmek, not girişi yapmak, devamsızlık girişi yapmak ve derslerin akademik içeriğini 
yönetmektir. 
 Öğretim Elemanı Sistemi, ‘Derslerim’, ‘Görüntüleme işlemleri’ ve ‘Hesap Ayarları’ 
menülerini içermektedir. 
 Derslerim menüsünden; öğretim elemanı, İdareci tarafından kendisine atanmış dersleri 
görüntüleyebilir ve atanan derslere ait işlemler gerçekleştirebilir. Öğretim elemanı 
işlemlerden; ders detaylarını, yoklama raporunu, sınıf listesini, devam listesini, 
vize/final sınavı yoklama listesini, vize/final sonuç raporunu, öğrenci not listesini ve 
bütünlemeye girmek isteyen öğrenci listesini görüntüleyebilir ve kendilerine atanan 
dersler için öğrencilerin sınav notlarını girerler.  
 Not girişi her ders için bir ara sınav (%40) ve bir final sınavı (%60) notu 
olarak girmelidir. Ön tanımlı olarak ara sınav ve final sınav yüzdesi %40 - %60 
olarak atanmıştır lakin öğretim elemanı ara sınav ve final sınavı yüzdesini 
değiştirebilir.  
 Öğretim elemanı not girişini yaptıktan sonra sisteme notları kaydettiğinde 
sistem tarafından otomatik olarak yüzdelere göre yıl sonu not ortalaması ve harf 
notu hesaplamaları yapılır. 
 Görüntüleme işlemleri menüsünden; öğretim elemanları, tüm öğrencileri, haftalık 
ders programlarını ve yoklama bilgilerini görüntüleyebilir. Aynı zamanda devamsızlık 
girişi de yapabilirler. (Öğrenciler teorik derslerin en az %70’ine ve uygulamalı derslerin 
en az %80’ine devam etmeleri zorunludur.) 
•  3. Danışman Sistemi 
 Danışmanların temel görevi öğrenciler ile derslerin eşleştirilmesini kontrol edip 
kayıtlanma raporunu onaylamalarıdır. 
 Danışman Sistemi, ‘Danışmanlık İşlemleri’ ve ‘Hesap Ayarları’ menülerini 
içermektedir. 
 Danışmanlık İşlemleri Menüsünden; Danışman, danışman olduğu öğrencileri 
görüntüleyebilir ve danışman olduğu öğrencileri ait transkript, öğrenci bilgileri, ders 
kayıtlanma kontrol sayfası ve ders kayıtlanmasını görüntüleyebilir.  
 Öğrenci ders seçimini danışman onayına göndermişse danışman, öğrencilerin 
ve derslerin eşleştirilmesini kontrol eder ve onaylar. Aynı zamanda öğrencinin 
seçili ders seçiminde değişiklik yapıp (ekle/sil) öğrenci onayına gönderebilirler 
ya da öğrenci onayına gönderilmeden de kayıtlanma tamamlanabilir. 
•  4. İdareci Sistemi  
 İdarecinin temel görevi dersleri kontrol edip uygun öğretim elemanlarına belirli       
koşullara uyarak ders ataması yapmasıdır. 
 İdareci Sistemi, ‘İdareci İşlemleri’ ve ‘Hesap Ayarları’ menülerini içermektedir. 
 İdareci İşlemleri Menüsünden; İdareci, Öğretim Elemanlarını ve dersleri 
görüntüleyebilir ve koşullara göre ders ataması gerçekleştirebilir.  
İdareci tarafından, bir öğretim elemanına haftalık en fazla 20 saatlik ders ve bir 
derse de sadece bir öğretim elemanı atanabilir.
