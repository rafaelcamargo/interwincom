(function() {
  'use strict';

  function init(){
    bindElements();
  }

  function bindElements(){
    var openChildWindowBtn = document.querySelectorAll('[data-js="open-child-window-button"]')[0];
    openChildWindowBtn.addEventListener('click', onOpenChildWindowBtnClick);
  }

  function onOpenChildWindowBtnClick(){
    var childWindow = window.open('./child.html', 'child', "width=400,height=400");
    childWindow.onCloseCallback = onChildWindowClose;
  }

  function onChildWindowClose(info){
    var logger = document.querySelectorAll('[data-js="logger"]')[0];
    logger.innerHTML = 'The information received was: "' + info + '"';
  }

  init();
}());
