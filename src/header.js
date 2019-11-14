import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './welcome.css';
import LanguageProvider from './languageProvider'
import {Head, TranslatableText} from './languageProvider'

class Header extends React.Component {
  render() {
    return(
   
              <div className='header'>
                   
                  <div> 
                      <a className='main'>
                          <TranslatableText
                                dictionary={{
                                    russian: "Главная",
                                    english: "Main",
                                }} />
                      </a>
                      <a className='main1' href='#skills'>
                          <TranslatableText
                                    dictionary={{
                                        russian: "Навыки",
                                        english: "Skills",
                                    }} />
                      </a>
                      <Link to='projects' className='main2'>
                          <TranslatableText
                                    dictionary={{
                                        russian: "Проекты",
                                        english: "Projects",
                                    }} />
                      </Link>
                      <a className='main4' href='#contacts'>
                          <TranslatableText
                                        dictionary={{
                                            russian: "Контакты",
                                            english: "Contacts",
                                    }} />
                        
                      </a>
                  </div>
              

              </div>   
      
    );
  }
}
      
export default Header;