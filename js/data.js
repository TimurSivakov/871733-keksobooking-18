'use strict';
(function () {
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
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
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
  var errorButton = main.querySelector('.error__button');
  var filters = map.querySelector('.map__filters');
  var filterTypeSelect = filters.querySelector('#housing-type');
  window.data = {
    main: main,
    errorButton: errorButton,
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
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
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
