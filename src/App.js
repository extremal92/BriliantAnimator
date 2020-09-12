import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import axios from 'axios';



//Image Persons
import personOne from './image/person/annaEliza.jpg';
import personTwo from './image/person/cloun.jpg';
import personThree from './image/person/fiksiki.jpg';
import personFour from './image/person/miniMiki.jpg';
import personFive from './image/person/minion.jpg';
import personSix from './image/person6.png';
//Image Programs
import programOne from './image/programs/show1.jpg';
import programTwo from './image/programs/show2.jpg';
import programThree from './image/programs/show3.png';
import programFour from './image/programs/show4.png';
import programFive from './image/programs/show5.png';
import programSix from './image/programs/show6.png';
import programSeven from './image/programs/show7.png';
// Image Toys
import mashaBear from './image/toys/briliant/mashaBear.jpg';
import crocadail from './image/toys/briliant/crocadail.jpg';
import fluffySlime from './image/toys/briliant/fluffySlime.jpg';
import ktoea from './image/toys/briliant/ktoea.jpg';
import pieface from './image/toys/briliant/pieface.jpg';
import vegabalance from './image/toys/briliant/vegabalance.jpg';
//End Images
import { MyContext } from './context/MyContext';


function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// TODO: REDUX
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentLang: true,
      animators: {
        mike: { name:'Анна и Эльза', image: personOne, desc: '💃 Анна и Эльза - это самые нежные, милые и глубоко любимые персонажи принцесс 🩰⠀💃 Каждая девочка, мечтает стать принцессой и поэтому на своем празднике,  она конечно будет безумно рада повстречаться с Эльзой и Анной. Ваша дочурка, сможет их обнять, потрогать, сфотографировать и конечно провести с ними незабываемое время, поиграть и потанцевать. А также похвастаться перед своими подружками, таким невероятным сюрпризом от родителей, что у нее на дне рождении были самые настоящие Эльза и Анна 🩰.⠀💃 Подарите радость Вашему ребенку 🥰'},
        mikeq: { name:'Клоун', image: personTwo, desc: '🤹‍♂️ Клоун - это самый яркий, весёлый, неуклюжий и добродушный персонаж на Вашем празднике. 🤸‍♂️⠀🤹‍♂️ Как только клоун войдет к Вам в двери, сразу праздничная атмосфера пропитает каждого гостя.⠀С нами праздник веселее! 🎉'},
        mikea: { name:'Фиксики', image: personThree, desc: '💡 Фиксики - это самые смышленные, умные и любознательные персонажи на вашем празднике! 🔎 Они научат Ваших деток проходить самые сложные лабиринты. Покажут им химические и научные эксперименты. 🧯 Расскажут такие факты, о которых не знает даже каждый взрослый. 💡 Фиксики могут прийти сами или с всеми любимым профессором Чудаковым.  Кстати фиксики, как и детки очень любят играть, хоть и кажутся на первый взгляд слишком умными 🙃 '},
        mikez: { name:'Minnie и Mickey mouse', image: personFour, desc: 'Minnie mouse и mickey mouse - это самые любимые персонажи всех деток и взрослых 🐭⠀🎉 Это персонажи без которых не начинается ни одно мероприятие, они встречают гостей,  потом весь праздник проводят с детками, устраивая им самые интересные конкурсы, увлекательные эстафеты, незабываемые шоу, танцуют веселые танцы и в конце праздника,  они выносят торт с поздравлениями для виновника торжества!⠀И конечно с ними хотят сфотографироваться все гости и каждый ребёночек тянется на ручки к своему любимому персонажу 🔥'},
        mikex: { name:'Миньоны', image: personFive, desc: '☀️ Миньоны - самые яркие персонажи на вашем празднике.Это те персонажи,  которые ни на секунду ни дадут Вашему ребёночку скучать.⠀💙 Миньоны - они украсят не только праздник красочной и веселой атмосферой. Они также научат детак новым танцам и проведут с ними самые интересные мастер-классы, и домой все детки уйдут с подарками!'},
        mikes: { name:'MikeMouse6', image: personSix, desc: 'Описание персонажа номер 6 '},
      },
      programs: {
        milinoe: {name: 'Шоу мыльных пузырей', image: programOne, desc: 'Трудно найти ребенка или взрослого, который не любил бы мыльные пузыри. А теперь представьте себе яркое и зрелищное шоу мыльных пузырей. На любом празднике эффектное представление станет самым запоминающимся моментом. Оно украсит не только детские праздники, но и свадьбы, корпоративы, презентации и юбилеи.', price: '2000 лей/60 мин.'},
        bumajnoe: {name: 'Бумажное шоу', image: programTwo, desc: 'Детская бумажная дискотека – это очень интересное и оригинальное шоу, которое в последнее время набирает все большую и большую популярность. Наша творческая студия предлагает вам устроить для ваших детей необычный и запоминающийся праздник, на котором они смогут весело провести время в компании сверстников и получить массу неизгладимых впечатлений.', price: '2000 лей/60 мин.'},
        him: {name: 'Химическое шоу', image: programThree, desc: 'Химия может быть увлекательной, если урок проводит настоящий мастер детских праздников. Активные дети, которые любят познавать мир, придут в восторг от «Химического шоу».Эффектные и наглядные эксперименты вызовут настоящую эйфорию, они смогут поразить не только детей, но и родителей.Сухой лед. Азот.', price: '3000 лей/60 мин.'},
        twoPersonExtra: {name: 'Развернутая программа с двумя аниматорами', image: programFour, desc: '<ul><li><span>Два персонажа аниматора на выбор</span></li><li><span>Музыкальное сопровождение</span></li><li><span>Игровой тематический реквизит</span></li><li><span>Игры&nbsp;&nbsp;</span></li><li><span>Танцы</span></li><li><span>Конкурсы</span></li><li><span>Элементы аквагримма</span></li><li><span>Вынос торта с поздравлением</span></li><li><span>Игрушка из шарика всем детям в подарок</span></li><li><span>Продолжительность программы 90 минут&nbsp;</span><br></li></ul>', price: '2200 лей/60 мин.'},
        twoPersonStandart: {name: 'Стандартная программа с двумя аниматорами', image: programFive, desc: '<ul><li><span>Два персонажа аниматора на выбор</span></li><li><span>Музыкальное сопровождение</span></li><li><span>Игровой тематический реквизит</span></li><li><span>Игры&nbsp;&nbsp;</span></li><li><span>Танцы</span></li><li><span>Конкурсы</span></li><li><span>Вынос торта с поздравлением</span></li><li><span>Игрушка из шарика всем детям в подарок</span></li><li><span>Продолжительность программы 60 минут&nbsp;</span><br></li></ul>', price: '1500 лей/60 мин.'},
        onePersonStandart: {name: 'Стандартная программа с одним аниматором', image: programSix, desc: '<ul><li><span>Персонаж аниматор на выбор</span></li><li><span>Музыкальное сопровождение</span></li><li><span>Игровой тематический реквизит</span></li><li><span>Танцы</span></li><li><span>Конкурсы</span></li><li><span>Вынос торта с поздравлением</span></li><li><span>Игрушка из шарика всем детям в подарок</span></li><li><span>Продолжительность программы 60 минут</span></li></ul>', price: '1000 лей/60 мин.'},
        onePersonExpres: {name: 'Экспресс-программа с одним аниматором', image: programSeven, desc: '<ul><li><span>Персонаж аниматор на выбор</span></li><li><span>Музыкальное сопровождение</span></li><li><span>Игровой тематический реквизит</span></li><li><span>Игры - 1 или 2&nbsp;</span></li><li>Вынос торта с поздравлением<br></li><li><span>Продолжительность программы 30 минут&nbsp;</span><br></li></ul>', price: '700 лей/30 мин.'},
      },
      toys:{
        briliant: {
          item: {name: 'Пазлы с любимой - Машей и Медведем', image: mashaBear, desc:'🔹️ С удовольствием доставим! 🚘 Доставка по Кишиневу бесплатная и почтой.', price: ' 145 лей'},
          item1: {name: 'Fluffy Slime', image: fluffySlime, desc:'Fluffy Slime — очень лёгкий, нежный и невероятно растущий слайм. 💛⠀🍡 Его бархатная текстура, приятный запах и нежные цвета погрузят Вас в атмосферу расслабления и отвлекут от ежедневной суеты.⠀🍡 Играя в руках, РАСТЁТ на глазах — это не просто слова, поскольку новая формула этого слайма позволяет ему расти и увеличиваться в размерах до 2х раз. Объем баночки - 200мл.', price: '200 лей'},
          item2: {name: 'Дженга «Vega» ', image: vegabalance, desc:'Дженга «Vega» – знаменитая настольная игра, простая по своей форме, но время очень увлекательная. 🔥⠀🗼 Другое название игры - «Падающая башня».⠀🗼 Дженга - это игра для азартных людей с логическим складом мышления, у которых не дрогнет рука в самый ответственный момент.⠀🗼Правила игры Vega просты. Из деревянных брусочков строится башня, в каждом ряду по 3 брусочка, брусочки в соседних рядах кладутся перпендикулярно друг другу. Затем игроки по очереди вытаскивают из башни по одному брусочку и кладут его наверх. Задача игрока – вытащить брусок так, чтобы не обрушить башню. Тот игрок, который обрушит башню, проигрывает.⠀🗼Дженга очень полезна как для детей, так и для взрослых.⠀🔥 Во время игры тренируется ловкость, внимательность, пространственное мышление, развивается мелкая моторика и умение концентрироваться.', price: '700 лей'},
          item3: {name: '"Кто Я" 🤷‍♀️', image: ktoea, desc:'Интересная, увлекательная игра в которой предстоит угадать кто Вы.⠀🦩 Суть игры заключается в том, что каждому игроку одевается на голову обруч и устанавливается карточкам рисунком, который известен всем игрокам, кроме Вас. Ваша задача отгадать кто Вы.⠀Можно использовать наводящие вопросы из вспомогательных карточек с вопросами, соперники могут отвечать только да или нет', price: '250 лей'},
          item4: {name: 'PieFace', image: pieface, desc:'🙃 Весёлая и увлекательная игра основана на чистом везении.⠀🦄 Игроки по очереди помещают голову в отверстие на игровой панели, потом крутят рулетку. Выпавшее число означает сколько раз нужно прокрутить ручку.⠀Неизвестно, когда сработает механизм и участник получит пирог в лицо. Это делает игру более неожиданной и интересной.⠀🦄 А использовать можно не только пирог, но и взбитые сливки, крем для торта, мороженое и даже пену для бритья', price: '188 лей'},
          item5: {name: 'Крокодил', image: crocadail, desc:'💥Перед вами тот самый "Крокодил", который знаком каждому.⠀🐊 Принцип игры такой же: надо объяснять самые разные слова жестами. В случайном порядке с помощью кубика необходимо определить слово, которое нужно изобразить для других участников за время.⠀🐊 Игра отлично тренирует мимику, язык жестов и искусство изображения предметов.⠀🤘Попробуете показать всем телом "Конец"?))⠀🐊 Крокодил – отличное развлечение для всей семьи и большой компании.⠀🐊 Цель игры - без особой подготовки участников начать играть и развеселить компанию. Большой комплект карточек с заданиями гарантирует оживлённую и разнообразную игру.', price: '211 лей'},
        },
        eco: {
          item: {name: 'Item1', image: crocadail, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ', price: '188 лей'},
          item1: {name: 'Item2', image: pieface, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ', price: '198 лей'},
          item2: {name: 'Item3', image: ktoea, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ', price: '288 лей'},
        },
      },
      //Subscribe
      subscribe:{phone:'', email:'', comment:''},

    }
    this.subscribeWrite = this.subscribeWrite.bind(this);
  }

  phoneHandler = (event) =>{
    this.setState({subscribe: {...this.state.subscribe, phone: event.target.value}})
  }

  emailHandler = (event) =>{
    this.setState({subscribe: {...this.state.subscribe, email: event.target.value}})
  }

  commentHandler = (event) =>{
    this.setState({subscribe: {...this.state.subscribe, comment: event.target.value}})
  }

  subscribeWrite = async (subscribe) =>{
    await axios.post('https://briliantanimators.firebaseio.com/subscribe.json', subscribe)

    .then((response) =>{
      this.setState({subscribe: { phone: '', email:'', comment:''}})
      alert('Ваша заявка успешно отправлена ')

    })

  }


  render(){

    return(
        <MyContext.Provider
            value = {{state: this.state,
                      phoneHandler: this.phoneHandler,
                      emailHandler: this.emailHandler,
                      commentHandler: this.commentHandler,
                      subscribeWrite: this.subscribeWrite,

        }}>
          <Layout p="propsTest"/>
        </MyContext.Provider>
    )
  }
}


export default App
