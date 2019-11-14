import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import onepro from './onepro.jpg';
import twopro from './twopro.jpg';
import threepro from './threepro.jpg';
import LanguageProvider from './languageProvider'
import {Head, TranslatableText} from './languageProvider'



class Projects extends React.Component {
  render() {
    return(
    
            <div>
              
               <LanguageProvider>
                    <div> <Head/> </div>
                    <div  className='header2'>
                    
                        <div>
                        
                          <TranslatableText
                                    dictionary={{
                                    russian: "Здесь Вы можете увидеть проекты, над которыми я работала:",
                                    english: "Here you can see the projects of mine:",    
                            }} />
                        </div>
                        <div>
                          <TranslatableText
                                      dictionary={{
                                      russian: "веб-сайты, макеты, а также арт работы",
                                      english: "websites, mockups and art-works",    
                              }} />
                          
                        </div> 
                    </div>

                    <div className='otstup'></div>
                    <div className='prcours'> 
                          <TranslatableText
                                      dictionary={{
                                      russian: "ВЕБ-САЙТЫ",
                                      english: "WEBSITES",    
                              }} />
                      
                    </div>
                    
                    <div className='container'>
                    <div className='row site'>
                        <div className='col'><a href="https://thelitvinova.github.io/photographer/"><img src={onepro} className = 'onepro' ></img><br></br>
                              <TranslatableText
                                            dictionary={{
                                            russian: "САЙТ ФОТОГРАФА",
                                            english: "PHOTOGRAPHER`S WEBSITE",    
                                    }} />
                        
                        </a></div>
                        <br></br>
                        <div className='col'><a href="http://laos.tilda.ws/page7492996.html"><img src={twopro} className = 'twopro' ></img><br></br>
                              <TranslatableText
                                            dictionary={{
                                            russian: "БЛОГ ПУТЕШЕСТВЕННИКА",
                                            english: "TRAVELER`S BLOG",    
                                     }} />
                        
                        </a></div>
                        <br></br>
                        <div className='col'><a href="https://eridanross38.000webhostapp.com"><img src={threepro} className = 'threepro' ></img><br></br>
                              <TranslatableText
                                            dictionary={{
                                            russian: "САЙТ КИНОЛОГА",
                                            english: "DOG EXPERT`S WEBSITE",    
                                      }} />
                              
                        </a></div>
                    </div>
                    </div>
                    
                    <div className='prcours1'><a href="https://drive.google.com/drive/folders/1_0JeJm3VhCaYqSMvUBtx4uP95yJxTLAM?usp=sharing">
                          <TranslatableText
                                  dictionary={{
                                  russian: "МАКЕТЫ",
                                  english: "MOCKUPS",    
                          }} />
                      
                    </a></div>
                    
                    <div className='prcours'><a href="https://drive.google.com/drive/folders/1ggkg33wehp7jyzqyHMWr4Qtsl_sVW8on?usp=sharing">
                          <TranslatableText
                                  dictionary={{
                                  russian: "АРТ-РАБОТЫ",
                                  english: "ART-WORKS",    
                                }} />
                      </a></div>
              </LanguageProvider>
 
            </div>
       
    );
  }
}

export default Projects;