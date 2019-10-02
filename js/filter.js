'use strict';
(function () {
  window.filter = {
    /**
     * Функция копирует данные с сервера
     * @param {* []} ads
     * @return {[]}
     */
    copyAds: function (data) {
      window.filteredAds = data.filter(function (ad) {
        window.data.filterTypeSelect.addEventListener('change', function () {
          return ad.offer.type === 'house';
        });
      });
      return window.filteredAds;
    }
  };
})();
