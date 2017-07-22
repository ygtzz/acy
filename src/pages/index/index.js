import 'static/css/quick-layout.css';
import 'static/css/site.css';
import './index.scss';
// import FastClick from 'fastclick';
import $ from 'jquery';
import add from './widget/invite';

if(__DEV__){
    const eruda = require('eruda');
    eruda.init();
}

// window.addEventListener('load', () => {
//   FastClick.attach(document.body)
// });

$(function(){
    $('body').css('background-color','lightblue');
    var result = add(5,8);
    console.log('result ' + result);
});
