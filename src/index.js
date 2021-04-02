import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faBrain,
  faChevronCircleLeft,
  faChevronCircleRight,
  faPhoneAlt,
  faDollarSign,
  faUser,
  faCalendarAlt,
  faUsers,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
faGithubAlt,
faGithubSquare,

} from '@fortawesome/free-brands-svg-icons'
library.add(fab,
faBrain,
  faGithubSquare,
  faLinkedin,
  faEnvelope,
  faPhoneAlt,
  faChevronCircleLeft,
  faChevronCircleRight,
  faDollarSign,
  faGithubAlt,
  faUsers,
  faUser,
  faCalendarAlt)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

