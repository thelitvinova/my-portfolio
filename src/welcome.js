import React from 'react';
import './welcome.css';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import telegram from './telegram.png';
import github from './github.png';
import whatsapp from './whatsapp.png';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './header';
import LanguageProvider from './languageProvider'
import {Head, TranslatableText} from './languageProvider'





class Welcome extends React.Component {
  render() {
    return(
          <div>

            <LanguageProvider>

            <div className='container'className='pinksquare'>
                <div className='row'>
            
            
            <Head/>    
            <Header/>
            
                
                <div className='col'className='welc'>
                    <div className='hi1'>
                        <TranslatableText
                            dictionary={{
                                russian: "WELCOME!",
                                english: "WELCOME!",
                            }} />
                    </div>
                    <div>
                        <TranslatableText
                            dictionary={{
                                russian: "ПРИВЕТ, МЕНЯ ЗОВУТ АЛЕКСАНДРА",
                                english: "HELLO, MY NAME IS ALEKSANDRA",
                                }} />
                    </div>
                    <div className='hi3'>
                        <TranslatableText
                                dictionary={{
                                    russian: "Я - ФРОНТЕНД РАЗРАБОТЧИК",
                                    english: "I`M FRONTEND DEVELOPER",
                                    }} />
                    </div>
                </div>
                <div className='aa'> </div>
                <div className='a'></div>
                
                </div>
            </div>
            

            <div className='container contone'>
                <div className='row'>
                    <div className='col col-lg-5'><img src={one} className = 'oneimg' ></img></div>
                    <div className='col col-lg-7'> 
                    
                                        <div className='whoami'>
                                            <TranslatableText
                                                dictionary={{
                                                    russian: "КТО Я?",
                                                    english: "WHO AM I?",
                                                    
                                                }} />
                                        </div>
                                        <br></br>
                                        <div>
                                            <TranslatableText
                                                dictionary={{
                                                    russian: "Меня зовут Александра и я фронтенд разработчик, я ответственна за создание клиентской части сайта / приложения",
                                                    english: "My name is Aleksandra and I`m a frontend developer, I am responsable for creation of the user side of an application  ",
                                                }} />
                                        </div>
                                        <br></br>
                                        <div>
                                            <TranslatableText
                                                    dictionary={{
                                                        russian: "Создаю пользовательские интерфейсы и воплощаю Ваши идеи в реальность",
                                                        english: "I build user interfaces and turn your dreams into reality ",
                                                    }} />
                                        </div>
                     </div>
                </div>
            </div>
          


            <div className='container conttwo' id='skills'>
                <div className='row'>
                    <div className='col col-lg-7'> 
                                            <div className='whatican'>
                                                <TranslatableText
                                                    dictionary={{
                                                        russian: "ЧТО Я УМЕЮ?",
                                                        english: "WHAT CAN I DO?",    
                                                    }} />
                                            </div>
                                            <br></br>
                                            <br></br>
                                            <div>
                                                 <TranslatableText
                                                    dictionary={{
                                                        russian: "Я МОГУ:",
                                                        english: "I CAN:",    
                                                    }} />
                                            </div>
                                            <br></br>
                                            <div> 
                                                <TranslatableText
                                                        dictionary={{
                                                            russian: "- сделать макет для будущего сайта или приложения, полностью разработать дизайн;",
                                                            english: "- make a mockup for your site or an application, build UI;",    
                                                        }} />
                                            </div>
                                            <div>
                                                <TranslatableText
                                                        dictionary={{
                                                            russian: "- сделать сайт любого вида и дизайна;",
                                                            english: "- make a website;",    
                                                        }} />
                                            </div>
                                            <div>
                                                <TranslatableText
                                                        dictionary={{
                                                            russian: "- нарисовать красочный логотип, иконки или иные иллюстрации в векторной графике;",
                                                            english: "- draw a logo, icons or other illustrations using vector graphics;",    
                                                        }} />
                                            </div>
                                            <div>
                                                <TranslatableText
                                                        dictionary={{
                                                            russian: "- протестировать приложение / сайт, написать тест-кейсы и отчеты;",
                                                            english: "- testing your application / website, write test cases and bug reports;",    
                                                        }} />
                                            </div>
                    </div>
                    <div className='col col-lg-5'><img src={two} className = 'oneimg'></img></div>
                </div>
            </div>

            <div className='container contthree' >
                <div className='row'>
                    <div className='col col-lg-5'><img src={three} className = 'oneimg'></img></div>
                    <div className='col col-lg-7'>
                                                <div className='instrument'>
                                                    <TranslatableText
                                                        dictionary={{
                                                            russian: "С КАКИМИ ИНСТРУМЕНТАМИ Я УМЕЮ РАБОТАТЬ?",
                                                            english: "TOOLS WHICH I CAN WORK WHITH?",    
                                                        }} />
                                                </div>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <div>
                                                     <TranslatableText
                                                    dictionary={{
                                                        russian: "Веб-разработка: ",
                                                        english: "Web development:",    
                                                    }} />
                                                    
                                                </div>
                                                <br></br>
                                                - HTML / CSS / SCSS
                                                <br></br>
                                                - JavaScript
                                                <br></br>
                                                - Bootstrap
                                                <br></br>
                                                - WordPress
                                                <br></br>
                                                - ReactJS
                                                <br></br>
                                                - Tilda 
                                                <br></br>
                                                <br></br>
                                                <div>
                                                    <TranslatableText
                                                        dictionary={{
                                                            russian: "Программные инструменты:",
                                                            english: "Software tools:",    
                                                        }} />
                                                        
                                                </div>
                                                <br></br>
                                                - Adobe Photoshop CC
                                                <br></br>
                                                - Adobe Illustrator
                                                <br></br>
                                                - Adobe Lightroom Classic</div>
                </div>
            </div>
        
            <div className='container'className='footer' id='contacts'>
                <div className='row'>
                <div className='contact'>
                    <TranslatableText
                                dictionary={{
                                    russian: "КОНТАКТЫ",
                                    english: "CONTACTS",
                                    
                                }} />
                </div>
                <div className='col'className='inf'>
                    <div className='git'><a href="https://github.com/thelitvinova"><img src={github} className='git2'></img>GitHub</a></div>
                    <div className='tel'><a href="https://tlgg.ru/the_litvinova"><img src={telegram} className='tel2'></img>Telegram</a></div>
                    <div className='wa'><a href="https://wa.me/66614742724"><img src={whatsapp} className='wa2'></img>WhatsApp</a></div>
                    <div>E-mail: the.litvinova1@gmail.com</div>
                    <div>
                        <TranslatableText
                                    dictionary={{
                                        russian: "Телефон: +79501001123 (RUS) / +66614742724 (TH)",
                                        english: "Tel#: +79501001123 (RUS) / +66614742724 (TH)",
                                        
                                    }} />
                    </div>
                </div>
                <div className='f'> </div>
                <div className='ff'></div>
                </div>
            </div>

            
            </LanguageProvider>

          </div>
    );
  }
}

export default Welcome;