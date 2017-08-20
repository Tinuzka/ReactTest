import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import Question from './ModelObjects/Question';
import Answer from './ModelObjects/Answer';
import registerServiceWorker from './registerServiceWorker';

var testAnswer = new Answer('test', 10);
var question = new Question('Mitä teet aamulla', [new Answer('Mietit maailman valloitusta', 1, 's'), new Answer('Nouset ahkerana päivän toimiin', 1, 'h'), new Answer('Valmistaudut rohkeasti päivän haasteisiin', 1, 'g'), new Answer('Mietit yhä sitä ongelmaa, mihin et keksinyt eilen ratkaisua', 1, 'r')]);
var question2 = new Question('Lempi eläimesti', [new Answer('Käärme', 1, 's'), new Answer('Mäyrä', 1, 'h'), new Answer('Leijona', 1, 'g'), new Answer('Kotka', 1, 'r')]);

var testResult = {'s': 'Olet luihuinen', 'h': 'Olet puuskupuh', 'g':'Olet rohkelikko', 'r':'Olet korpinkynsi'}

var testItems = [question, question2];
ReactDOM.render(<Test items={ testItems } result ={testResult} />, document.getElementById('root'));
registerServiceWorker();
