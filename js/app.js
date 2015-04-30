(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var symbols = document.querySelectorAll('.symbol'),
        selectText = function(element) {
          var range,
              selection;

          if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
          }
          else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        };

    for (var i = 0; i < symbols.length; i++) {
      symbols[i].addEventListener('click', function(e) {
        selectText(this);
      });
    }
  });
})();
