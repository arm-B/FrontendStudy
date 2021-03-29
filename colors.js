var body = {
  setColor : function(color){
    document.querySelector('body').style.color = color;
    // $('body').css('color', color);
  },
  setBackColor :function(color){
    document.querySelector('body').style.backgroundColor = color;
    //$('body').css('backgroundColor', color);
  }
}
var link = {
  setColor : function(color){
    var lists = document.querySelectorAll('a');
    var now = document.querySelector('#now');
    var i = 0;
    while(i<lists.length){
        lists[i].style.color=color;
        i++;
    }
    //$('a').css('color', color)
    now.style.color='#9FC93C'
  }
}

function nightDayHandler(button){
  var target = document.querySelector('body');
  if (button.value === 'night'){
      body.setBackColor('black');
      body.setColor('white');
      button.value='day';
      link.setColor('pink');
    } else {
      body.setBackColor('white');
      body.setColor('black');
      button.value='night';
      link.setColor('#3DB7CC');
  }
}
