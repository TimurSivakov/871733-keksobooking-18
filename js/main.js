'use strict';
var main = document.querySelector('main');
var deps = {
  load: window.load,
  filter: window.filter,
  map: window.map,
  form: window.form,
  data: window.data,
};

var onError = function () {
  var fragment = document.createDocumentFragment();
  var errorMessage = window.data.similarErrorMessage.cloneNode(true);
  fragment.appendChild(errorMessage);
  main.appendChild(fragment);
  errorMessage.addEventListener('click', function () {
    main.removeChild(errorMessage);
  });
};

deps.load.getDataFromServer(deps.data.setPins, onError);
deps.map.activateMap();
deps.form.disableFilter();
deps.form.setMainPinAddressInput();
deps.form.changeFormValue();
