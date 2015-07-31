(function ($) {
  module('jQuery.predictibletimezonepicker', {
    setup: function() {
      $('#qunit').zonePicker();
    }
  });

  test('is SELECT', function () {
    expect(2);
    strictEqual($('#qunit')[0].tagName, 'SELECT', 'should be SELECT');
    strictEqual($("#qunit").data("zone"), 'Europe/Berlin', 'should be Europe/Berlin');
  });

}(jQuery));
