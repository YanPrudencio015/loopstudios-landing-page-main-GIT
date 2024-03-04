import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import {WindowSizeProvider} from './windowSizeContext';
import Footer from './components/footer/Footer';

import {MobileMenuProvider} from './MobileMenuContext'

function App() {
  return (
    <div className="App">
      <WindowSizeProvider>
        <MobileMenuProvider>
          <Header />
          <Main/>
          <Footer/>
        </MobileMenuProvider>
      </WindowSizeProvider>
    </div>
  );
}

export default App;
