// Her bir soruyu temsil etmesi için Soru nesnesi oluşturduk
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this. dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
    
}

let sorular = [
     new Soru("JavaScripti hangi HTML öğesinin içine koyuyoruz?", {a: "scripting", b: "js", c:"script", d:"javascript"}, 'c'),

     new Soru("JavaScript hangi tür bir dildir?", {a:  "Yüksek seviye diller", b:  "Düşük seviye diller", c:"Orta seviye diller", d: "Hem yüksek hem de düşük seviye diller"}, 'c'),

     new Soru("JavaScript'te değişkenleri tanımlamak için hangi anahtar kelimeyi kullanırız?", {a: "var", b: 'const', c: 'Hepsi', d: 'let'}, 'c'),

     new Soru('Hangisi js paket yönetim uygulamasıdır ? ', {a: 'Node.js', b: 'Typescript', c: 'Npm', }, 'c'),

     new Soru("JavaScript'te döngülerle ilgili hangi ifade yanlıştır?", {a: "for döngüsü, belirli bir sayıda tekrarlamak için kullanılır.", b: "while döngüsü, belirli bir koşul sağlandığı sürece tekrarlamak için kullanılır.", c: "do-while döngüsü, en az bir kez döngünün içeriğini çalıştırır.", d: "foreach döngüsü, bir dizi üzerinde gezinmek için kullanılır." }, 'a'),

]



function Quiz(sorular) {

    this.sorular = sorular;
    this.soruIndex = 0;

    
}

Quiz.prototype.soruGetir = function () {

    return this.sorular[this.soruIndex];
    
}
//soruları aldığımız Quiz nesnesi oluşturduk ve bunu quize atadık
const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener('click',function () {
    if (quiz.sorular.length != quiz.soruIndex) {

        console.log(quiz.soruGetir())
        quiz.soruIndex += 1;
        
    }
    else {
        console.log("quiz  bitti")
    }
   
})



