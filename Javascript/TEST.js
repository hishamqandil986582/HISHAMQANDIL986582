$(function () {



    const chelist=$('input[type=checkbox]');
    chelist.change(function () {
        if($(this).is(':checked'))
        {
            alert($(this).val());
        }
    })



// if ($('input[name="extra"]:checked').val() ==="extra1")
  //   alert($('#1').text());



 //$('input[name="extra"]')
});