(function (window, $) {
  'use strict';

  var $ratingForm = $('#frm-ratingForm');

  $ratingForm.on('submit.hook', function (e) {
    e.preventDefault();

    $.post(window.location.pathname + '?do=watchlistForm-submit', '&interval_1=1&interval_2=1&interval_3=1&interval_6=1&remove=true')
      .then(submit, function () {
        error();
        submit();
      });
  });

  function error() {
    window.alert('Something went wrong removing it from "chci videt"');
  }

  function submit() {
    $ratingForm.off('submit.hook').submit();
  }
})(this, this.jQuery);
