$(function() {
  $('div.billingNameInfo-section').after('<div class="crm-section"><div class="label"><input type="checkbox" id="copyAddressLink" /></div><div class="content"><label for="copyAddressLink">Check this box if your billing address is the same as your contact info.</label></div></div>');
  $('#copyAddressLink').click(function(){
    copyAddr(this) ; 
  });
});
function copyAddr(o) {
  fields = [
    ['first_name','billing_first_name'],
    ['last_name','billing_last_name'],
    ['street_address-Primary','billing_street_address-5'],
    ['city-Primary','billing_city-5'],
    ['postal_code-Primary','billing_postal_code-5'],
    ['state_province-Primary','billing_state_province_id-5']
  ];
  if ($(o).attr('checked')) {
    for (var i in fields)  {
      $("#"+fields[i][1]).val($("#"+fields[i][0]).val())
    }
  } else {
    for (var i in fields)  {
      $("#"+fields[i][1]).val('')
    }
  }
}
