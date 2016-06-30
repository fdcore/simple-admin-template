$(document).ready(function () {

  if ($('#search-table').length > 0) {
      var jets = new Jets({
        searchTag: '#search-table',
        contentTag: '#table tbody',
      });
  }

});
