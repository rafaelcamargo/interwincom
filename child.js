(function(){
  'use strict';

  function init(){
    bindElements();
  }

  function bindElements(){
    var sendInfoButton = document.querySelectorAll('[data-js="send-info-button"]')[0];
    sendInfoButton.addEventListener('click', onSendInfoBtnClick);
  }

  function onSendInfoBtnClick(){
    var info = getInfo();
    window.onCloseCallback(info);
    window.close();
  }

  function getInfo(){
    return document.querySelectorAll('[data-js="info-input"]')[0].value;
  }

  init();
}());
