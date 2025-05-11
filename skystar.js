// poem
var words=[
    '母亲，您的无私奉献是我前行的动力',
    '您的关怀如阳光，照亮我人生的每一个角落',
    '您的爱如春风化雨，滋润我成长的每一步',
    '母亲，您的爱是我生命中最珍贵的存在，感谢您一直在我身边',
    '母亲，您的爱如大海般深邃，包容我的一切',
    '感谢您用温柔的手抚平我所有的伤痛',
    '感谢母亲，您是我生命中最温暖的港湾',
    '感谢您为我付出的一切，您的爱让我无比幸福',
    '感谢您用无尽的爱和耐心陪伴我度过每一个难关',
    '母爱如歌，悠扬动听',
    '母爱如画，色彩斑斓',
    '母爱如诗，意境深远',
    '母爱如花，芬芳四溢',
    '母爱无声，情深似海',
    '母爱如泉，滋润心扉',
    '母爱如酒，醇厚绵长',
    '母爱如海，无边无际',
    '慈母手中线，游子身上衣',
    '白头老母遮门啼，挽断衫袖留不止',
    '惨惨柴门风雪夜，此时有子不如无',
    '见面怜清瘦，呼儿问苦辛',
    '慈母倚门情，游子行路苦',
    '灿灿萱草花，罗生北堂下',
    '谁言寸草心，报得三春晖',
    '爱子心无尽，归家喜及辰',
    '一始扶行一初坐，坐啼行哭牵人衣',
    '思尔为雏日，高飞背母时',
    '十五彩衣年，承欢慈母前',
    '慈母爱，爱幼雏，赵家光义为皇储',
    '母别子，子别母，白日无光哭声苦',
    '哀哀父母，生我劬劳',
    '慈乌失其母，哑哑吐哀音',
    '棘心夭夭，母氏劬劳',
    '寒衣针线密，家信墨痕新',
    '有子七人，母氏劳苦',
    '老母与子别，呼天野草间',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '我的星空永远为您闪耀';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '';
        texttwo.innerHTML = '';
        textthree.innerHTML = '';
      },112500)


 
