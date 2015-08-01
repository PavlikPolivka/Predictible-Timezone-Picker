(function ($) {
  module('jQuery.predictibletimezonepicker', {
    setup: function() {
        $('#qunit1').zonePicker();
        $('#qunit2').zonePicker({
          valueFormat: 'custom',
          valueFunction: function(zone) {
              return zone.name + " " + zone.offset;
          },
          textFormat: 'custom',
          textFunction: function(zone) {
              return zone.name + zone.name + " " + zone.offset;
          }
        });
        $('#qunit3').zonePicker({
          valueFormat: 'name',
          textFormat: 'number'
        });
    }
  });

  test('Normal init', function () {
    expect(3);
    strictEqual($('#qunit1')[0].tagName, 'SELECT', 'should be SELECT');
    notEqual($("#qunit1").data("zone"), '', 'should not be empty');
    strictEqual($('#qunit1 option').size(), 71, 'should be 71');
  });

  test('Custom function', function () {
    expect(2);
    strictEqual($($("#qunit2 option")[0]).val(), 'Pacific/Majuro -12', 'should be result of valueFunction');
    strictEqual($($("#qunit2 option")[0]).html(), 'Pacific/MajuroPacific/Majuro -12', 'should be result of textFunction');
  });

  test('Not default values', function () {
    expect(2);
    strictEqual($($("#qunit3 option")[0]).val(), 'Pacific/Majuro', 'should be Pacific/Majuro');
    strictEqual($($("#qunit3 option")[0]).html(), '-12', 'should be -12');
  });

}(jQuery));
