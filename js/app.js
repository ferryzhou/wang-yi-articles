$( document ).ready(function() {

var index = [
  {"title": "人若赚得全世界：电影《投名状》", "date": "2007-12-21"},
  {"title": "灰烬中的钻石：电影《卡廷森林》", "date": "2008-03-04"}
];

var tmpl = _.template($("#article_tmpl").html());

// load all index data
// load all contents

// populate dom when required
// first populate 20 titles
// when user scroll down, load more, delete previous, use a window, curIndex +/- 20

function add_to_list() {
  $.each(index, function(i, value) {
    console.log(i + " - " + value.title);
    $('#articleList').append('<li id="list' + i + '"><a href="#article' + i + '" id="link' + i + '">' + value.title + '</a></li>');
    create_article_dom(i);
  });
}

function create_article_dom(i) {
  var entry = index[i];
  entry['i'] = i;
  var str = tmpl(entry);
  $('body').append(str)
}

add_to_list();

}); // onready
