(function() {
  function AlbumCtrl() {
    this.albumData = angular.copy(albumPinback);
  };

  angular
    .module('blocJams')
    .controller('AlbumCtrl',AlbumCtrl)
})();
