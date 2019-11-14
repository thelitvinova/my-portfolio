import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends React.Component {
  state = {
    language: "english"
  };

  updateLanguage = e => this.setState({ language: e.target.value });

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          updateLanguage: this.updateLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

const Head = () => {
  return (
    <LanguageConsumer>
      {({ updateLanguage }) => (
        <header className='head'>
        
          <select onChange={updateLanguage}>
            <option value="english">English</option>
            <option value="russian">Русский</option>
        
          </select>
        </header>
      )}
    </LanguageConsumer>
  );
};

const TranslatableText = props => (
  <LanguageConsumer>
    {({ language }) => props.dictionary[language]}
  </LanguageConsumer>
);
export default LanguageProvider;
export {TranslatableText, Head};
