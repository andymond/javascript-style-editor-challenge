$(document).ready(function(){
  $('#style-submit').click(function(event) {
    event.preventDefault();
    const selector = $('input[name=selector]');
    const property = $('input[name=property]');
    const value    = $('input[name=value]');
    $(selector.val()).css(property.val(), value.val())
    console.log('you clicked the thing');
  });
});
