'use strict';
var main = document.querySelector('main');
var map = document.querySelector('.map');
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var similarErrorMessage = document.querySelector('#error').content.querySelector('.error');
var similarPinElement = map.querySelector('.map__pins');
var mainPin = map.querySelector('.map__pin--main');
var adForm = document.querySelector('.ad-form');
var adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
var adFormTypeSelect = adForm.querySelector('#type');
var adFormPriceInput = adForm.querySelector('#price');
var adFormTimeInSelect = adForm.querySelector('#timein');
var adFormTimeInOption = adFormTimeInSelect.querySelectorAll('option');
var adFormTimeOutSelect = adForm.querySelector('#timeout');
var adFormTimeOutOption = adFormTimeOutSelect.querySelectorAll('option');
var mapFilterSelects = map.querySelectorAll('.map__filter');
var mapFilterInputs = map.querySelectorAll('.map__checkbox');
var addressInput = adForm.querySelector('#address');
var deps = {
  load: window.load,
  filter: window.filter,
  map: window.map,
  form: window.form
};
deps.load.getDataFromServer(deps.filter.copyAds, deps.load.onError);
deps.map.activateMap();
deps.form.disableFilter();
deps.form.setMainPinAddressInput();
deps.form.changeFormValue();
