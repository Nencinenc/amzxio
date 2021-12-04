import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }   
  
 
.login-reg-panel{
    top: 50%;
    transform: translateY(-50%);
    width:100%;
  right:0;left:0;
    margin:auto;
    height:400px;
    background-color: #660708;
}

.white-panel{
    background-color: #000000;
    height:500px;
    position:absolute;
    top:-50px;
    width:50%;
    right:calc(50% - 50px);
    transition:.3s ease-in-out;
    z-index:0;
    box-shadow: 8px 8px 15px #660708;
}

.login-reg-panel input[type="radio"]{
    position:relative;
    display:none;
    
}

.login-reg-panel{
    color:#B8B8B8;
}

.login-reg-panel #label-login, 
.login-reg-panel #label-register{
    border:1px solid #9E9E9E;
    padding:5px 5px;
    width:150px;
    display:block;
    text-align:center;
    border-radius:10px;
    cursor:pointer;
    font-weight: 600;
    
    font-size: 18px;
}

.login-info-box{
    width:30%;
    padding:0 50px;
    top:20%;
    left:0;
    position:absolute;
    text-align:left;
}

.register-info-boax{
    max-width: 20%;
    padding:0 50px;
    top:20%;
    right:0;
    position:absolute;
    text-align:left;
}

.register-info-box{
  width: 40%;
  right: 0;
  top: 35%;
  padding: 0 50px;
  position: absolute;
}

.right-log{right:50px !important;}
.login-show, 
.register-show{
    z-index: 1;
    display:none;
    opacity:0;
    transition:0.3s ease-in-out;
    color:#242424;
    text-align:left;
    padding:50px;
}

.show-log-panel{
    display:block;
    opacity:0.9;
}

.credit {
    position:absolute;
    bottom:10px;
    left:10px;
    color: #3B3B25;
    margin: 0;
    padding: 0;
    font-family: Arial,sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    z-index: 99;
}

.maincontainer { 
    color: #000;
}

.rounded-lg {
  border-radius: 1rem !important;
}
.text-small {
  font-size: 0.9rem !important;
}
.custom-separator {
  width: 5rem;
  height: 6px;
  border-radius: 1rem;
}
.text-uppercase {
  letter-spacing: 0.2em;
}

.nav-pills-custom .nav-link {
    color: #aaa;
    background: #fff;
    position: relative;
}

.nav-pills-custom .nav-link.active {
    color: #45b649;
    background: #fff;
}


/* Add indicator arrow for the active tab */
@media (min-width: 992px) {
    .nav-pills-custom .nav-link::before {
        content: '';
        display: block;
        border-top: 8px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 8px solid transparent;
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
        opacity: 0;
    }
}

.nav-pills-custom .nav-link.active::before {
    opacity: 1;
}



`;

export default GlobalStyles;