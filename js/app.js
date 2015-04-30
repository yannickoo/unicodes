(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var symbols = document.querySelectorAll('.symbol'),
        search = document.querySelector('input[type="search"]'),
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

    search.addEventListener('input', function() {
      var value = this.value,
          unicodeWrapper = document.querySelector('.unicodes'),
          figures = unicodeWrapper.querySelectorAll('figure'),
          matches = [].filter.call(figures, function(figure) {
            return figure.innerText.toLowerCase().indexOf(value) !== -1;
          });

          console.log(matches);

      if (matches.length) {
        unicodeWrapper.classList.add('filtered');

        for (var i = 0; i < figures.length; i++) {
          figures[i].classList.remove('show');
        }

        matches.forEach(function(match) {
          match.classList.add('show');
        });
      }
      else {
        unicodeWrapper.classList.add('hide');
      }
    });
  });
})();
