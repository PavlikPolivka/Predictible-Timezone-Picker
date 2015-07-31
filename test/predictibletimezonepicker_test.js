(function ($) {
  module('jQuery.predictibletimezonepicker', {
    setup: function() {
      $('#qunit').zonePicker();
    }
  });

  test('is SELECT', function () {
    expect(1);
    strictEqual($('#qunit')[0].tagName, 'SELECT', 'should be SELECT');
  });

}(jQuery));
