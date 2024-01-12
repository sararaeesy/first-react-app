import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
{/* <div>Hi!my first react project</div> */}
// react by JSX 
            function Logo(object) {
                                return object.children ? <div className="logo right">{object.children}</div> : "";
                            }
            function Header(object){
                return(
                    <div className="header">
                        <div className="user center">
                            <p>Hi,Welcome dear {object.userName}</p>
                        </div>
                        <Logo>
                        <img className="logoImage" src="https://res.cloudinary.com/practicaldev/image/fetch/s--licJEVfg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_775/https://i.imgur.com/Pc3NKhM.gif"/>    
                        <span className="name">front-coding</span>    
                        </Logo>                        
                        <div className="menu left">MENU</div>
                    </div>
                );
            }
            const renderDescription=(description) => {
               return <p>Hi,my first {description} project</p>
             };
            const element=(
                <div className="content">
                    <Header userName="react-user" />
                    <div className="hero-section">
                        <img className="poster" src="https://res.cloudinary.com/practicaldev/image/fetch/s--licJEVfg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_775/https://i.imgur.com/Pc3NKhM.gif" />
                        <i className="caption">poster caption</i>
                    </div>
                    {renderDescription("react-jsx")}
                </div>
            );
            ReactDOM.render(element, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
