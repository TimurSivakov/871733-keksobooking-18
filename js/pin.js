'use strict';
(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var deps = {
    data: window.data
  };
  window.pin = {
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT
  };
  /**
   * Функция создает новый dom элемент с разметкой из шаблона
   * @param {{
   *   location: string,
   *   author: string
   * }} ad
   * @return {Node}
   */
  window.renderMapPin = function (ad) {
    var pin = deps.data.similarPinTemplate.cloneNode(true);
    pin.style.left = (ad.location.x - PIN_WIDTH / 2) + 'px';
    pin.style.top = (ad.location.y - PIN_HEIGHT) + 'px';
    pin.children[0].src = ad.author.avatar;
    pin.children[0].alt = 'Метка объявления';
    return pin;
  };
})();
