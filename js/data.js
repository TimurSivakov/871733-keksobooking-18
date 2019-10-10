'use strict';
(function () {
  var map = document.querySelector('.map');
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var similarErrorMessage = document.querySelector('#error').content.querySelector('.error');
  var similarPinElement = document.querySelector('.map__pins');
  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
  var adFormTypeSelect = adForm.querySelector('#type');
  var adFormPriceInput = adForm.querySelector('#price');
  var adFormTimeInSelect = adForm.querySelector('#timein');
  var adFormTimeInOption = adFormTimeInSelect.querySelectorAll('option');
  var adFormTimeOutSelect = adForm.querySelector('#timeout');
  var adFormTimeOutOption = adFormTimeOutSelect.querySelectorAll('option');
  var adFormRoomsSelect = adForm.querySelector('#room_number');
  var adFormRoomsOption = {
    oneRoom: adFormRoomsSelect.querySelector('option:first-child'),
    twoRooms: adFormRoomsSelect.querySelector('option:nth-child(2)'),
    threeRooms: adFormRoomsSelect.querySelector('option:nth-child(3)'),
    hundredRooms: adFormRoomsSelect.querySelector('option:last-child'),
  };
  var roomCapacitySelect = adForm.querySelector('#capacity');
  var roomCapacityOption = {
    oneGuest: roomCapacitySelect.querySelector('option:first-child'),
    twoGuests: roomCapacitySelect.querySelector('option:nth-child(2)'),
    threeGuests: roomCapacitySelect.querySelector('option:nth-child(3)'),
    notForGuests: roomCapacitySelect.querySelector('option:last-child')
  };
  var mapFilterSelects = document.querySelectorAll('.map__filter');
  var mapFilterInputs = document.querySelectorAll('.map__checkbox');
  var addressInput = adForm.querySelector('#address');
  var USERS_AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];
  var TYPES_OF_HOUSING = ['bungalo', 'flat', 'house', 'palace'];
  var NUMBER_OF_ADS = 8;
  var MAP_FADED_CLASS = 'map--faded';
  var ADFORM_DISABLED_CLASS = 'ad-form--disabled';
  var MAP_X_RANGE = {
    min: 0,
    max: similarPinElement.clientWidth
  };
  var MAP_Y_RANGE = {
    min: 130,
    max: 630
  };
  var MAIN_PIN_X = 570;
  var MAIN_PIN_Y = 375;
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_INACTIVE_HEIGHT = 65;
  var MAIN_PIN_ACTIVE_HEIGHT = MAIN_PIN_INACTIVE_HEIGHT + 22;
  var mainPinXCenter = MAIN_PIN_X + MAIN_PIN_WIDTH / 2;
  var mainPinYCenter = MAIN_PIN_Y + MAIN_PIN_INACTIVE_HEIGHT / 2;
  var MAIN_PIN_ACTIVE_Y = MAIN_PIN_Y + MAIN_PIN_ACTIVE_HEIGHT;
  var MIN_PRICE_FOR_NIGHT = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };
  var mapIsEnabled = 'false';
  var maxAdsNumber = 5;
  var filters = document.querySelector('.map__filters');
  var filterTypeSelect = filters.querySelector('#housing-type');

  var pins = [];

  window.data = {
    setPins: function (data) {
      pins = data;
    },
    getPins: function () {
      return pins;
    },
    map: map,
    similarPinTemplate: similarPinTemplate,
    similarErrorMessage: similarErrorMessage,
    similarPinElement: similarPinElement,
    mainPin: mainPin,
    adForm: adForm,
    adFormFieldsets: adFormFieldsets,
    adFormTypeSelect: adFormTypeSelect,
    adFormPriceInput: adFormPriceInput,
    adFormTimeInSelect: adFormTimeInSelect,
    adFormTimeInOption: adFormTimeInOption,
    adFormTimeOutSelect: adFormTimeOutSelect,
    adFormTimeOutOption: adFormTimeOutOption,
    adFormRoomsSelect: adFormRoomsSelect,
    adFormRoomsOption: adFormRoomsOption,
    roomCapacitySelect: roomCapacitySelect,
    roomCapacityOption: roomCapacityOption,
    mapFilterSelects: mapFilterSelects,
    mapFilterInputs: mapFilterInputs,
    addressInput: addressInput,
    USERS_AVATARS: USERS_AVATARS,
    TYPES_OF_HOUSING: TYPES_OF_HOUSING,
    NUMBER_OF_ADS: NUMBER_OF_ADS,
    MAP_FADED_CLASS: MAP_FADED_CLASS,
    ADFORM_DISABLED_CLASS: ADFORM_DISABLED_CLASS,
    MAP_X_RANGE: MAP_X_RANGE,
    MAP_Y_RANGE: MAP_Y_RANGE,
    MAIN_PIN_X: MAIN_PIN_X,
    MAIN_PIN_Y: MAIN_PIN_Y,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_INACTIVE_HEIGHT: MAIN_PIN_INACTIVE_HEIGHT,
    MAIN_PIN_ACTIVE_HEIGHT: MAIN_PIN_ACTIVE_HEIGHT,
    mainPinXCenter: mainPinXCenter,
    mainPinYCenter: mainPinYCenter,
    MAIN_PIN_ACTIVE_Y: MAIN_PIN_ACTIVE_Y,
    MIN_PRICE_FOR_NIGHT: MIN_PRICE_FOR_NIGHT,
    mapIsEnabled: mapIsEnabled,
    maxAdsNumber: maxAdsNumber,
    filters: filters,
    filterTypeSelect: filterTypeSelect
  };
})();
