import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';

import URA_Blog from './components/URA_Blog.js';
import TA_Blog from './components/TA_Blog.js';
import Nokia_Blog from './components/Nokia_Blog.js';

import Main from './components/Main.js';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/portfolio_website" component={Main} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/blog" component={Blog} />

                <Route exact path="/ura_blog" component={URA_Blog} />
                <Route exact path="/ta_blog" component={TA_Blog} />
                <Route exact path="/nokia_blog" component={Nokia_Blog} />
                    
            </Switch>
        </BrowserRouter>
    );
}

export default App;
