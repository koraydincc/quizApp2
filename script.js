// Her bir soruyu temsil etmesi için Soru nesnesi oluşturduk
// constructor metodu ekledik
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    // Her bir soru constructorının örneğinde kullanmak için "this" ile tanımlama yaptık
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-JavaScript'i hangi HTML öğesinin içine koyuyoruz?", { a: "scripting", b: "js", c: "script", d: "javascript"}, 'c'),

    new Soru("2-JavaScript hangi tür bir dildir?", { a: "Yüksek seviye diller", b: "Düşük seviye diller", c: "Orta seviye diller", d: "Hem yüksek hem de düşük seviye diller"}, 'c'),

    new Soru("3-JavaScript'te değişkenleri tanımlamak için hangi anahtar kelimeyi kullanırız?",  { a: "var", b: 'const', c: 'Hepsi', d: 'let'}, 'c'),

    new Soru('4-Hangisi js paket yönetim uygulamasıdır? ', { a: 'Node.js', b: 'Typescript', c: 'Npm'}, 'c'),

    new Soru("5-JavaScript'te döngülerle ilgili hangi ifade yanlıştır?", { a: "for döngüsü, belirli bir sayıda tekrarlamak için kullanılır.", b: "while döngüsü, belirli bir koşul sağlandığı sürece tekrarlamak için kullanılır.", c: "do-while döngüsü, en az bir kez döngünün içeriğini çalıştırır.", d: "foreach döngüsü, bir dizi üzerinde gezinmek için kullanılır."}, 'a')
];

// Quiz adında bir constructor tanımladık
function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular)


document.querySelector(".btn_start").addEventListener("click", function() {
    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());
})

document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
    } else {
        console.log("quiz bitti");
    }
});
// Soru gösterme işlemini gerçekleştiren fonksiyon
function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }
    const option_list = document.querySelector(".option_list")
    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;
    
    const option = option_list.querySelectorAll(".option")
    
    for(let opt of option){
        console.log(opt)
    }
}
