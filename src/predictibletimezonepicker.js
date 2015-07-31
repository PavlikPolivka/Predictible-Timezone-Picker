/*
 *
 *
 *
 * Copyright (c) 2015 Pavel Polivka
 * Licensed under the MIT license.
 */

(function ($) {

  var _ = require('jstimezonedetect');

  var pluginName = "zonePicker",
  		defaults = {
  		idFormat: "number"
  };

  // The actual plugin constructor
  function ZonePicker (element, options) {
  		this.element = $(element);
  		this.settings = $.extend( {}, defaults, options );
  		this._defaults = defaults;
  		this._name = pluginName;
      this.format = {};
      this.format.number = function(zone) {
          return zone.offset;
      };
      this.format.name = function(zone) {
          return zone.name;
      };
  		this.init();
  }

  $.extend(ZonePicker.prototype, {
  		init: function () {
        var currentZone = this.predict();
        var zones = [];
        $.each(_.jstz.olson.timezones, function(i,n) {
          zones.push({'offset': parseInt(i)/60, 'name':n});
        });

        this.element.data("zone", currentZone.name());
  		},
  		predict: function () {
  			return _.jstz.determine();
  		}
  });

  $.fn[pluginName] = function ( options ) {
    return this.each(function() {
        if ( !$.data( this, "plugin_" + pluginName ) ) {
            $.data( this, "plugin_" + pluginName, new ZonePicker( this, options ) );
        }
    });
};

}(jQuery));
