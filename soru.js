function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-JavaScript'i hangi HTML öğesinin içine koyuyoruz?", { a: "scripting", b: "js", c: "script", d: "javascript"}, 'c'),

    new Soru("2-JavaScript hangi tür bir dildir?", { a: "Yüksek seviye diller", b: "Düşük seviye diller", c: "Orta seviye diller", d: "Hem yüksek hem de düşük seviye diller"}, 'c'),

    new Soru("3-JavaScript'te değişkenleri tanımlamak için hangi anahtar kelimeyi kullanırız?",  { a: "var", b: 'const', c: 'Hepsi', d: 'let'}, 'c'),

    new Soru('4-Hangisi js paket yönetim uygulamasıdır? ', { a: 'Node.js', b: 'Typescript', c: 'Npm', d:'Bootstrap'}, 'c'),

    new Soru("5-JavaScript'te döngülerle ilgili hangi ifade yanlıştır?", { a: "for döngüsü, belirli bir sayıda tekrarlamak için kullanılır.", b: "while döngüsü, belirli bir koşul sağlandığı sürece tekrarlamak için kullanılır.", c: "do-while döngüsü, en az bir kez döngünün içeriğini çalıştırır.", d: "foreach döngüsü, bir dizi üzerinde gezinmek için kullanılır."}, 'a')
];
