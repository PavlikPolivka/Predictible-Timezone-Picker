/*
 * Simple jQuery plugin for time zone picker,
 * that will preselect current users time zone.
 *
 * Copyright (c) 2015 Pavel Polivka
 * Licensed under the MIT license.
 */

(function ($) {

  var _ = require('jstimezonedetect');

  var pluginName = "zonePicker",
  		defaults = {
  		valueFormat: "number",
      textFormat: "combination"
  };

  // The actual plugin constructor
  function ZonePicker (element, options) {
  		this.element = $(element);
  		this.settings = $.extend( {}, defaults, options );
  		this._defaults = defaults;

      if(this.settings.valueFormat === "custom") {
        this.settings.valueFormat = "customValue";
      }
      if(this.settings.textFormat === "custom") {
        this.settings.textFormat = "customText";
      }

  		this._name = pluginName;
      this.format = {};
      this.format.number = function(zone) {
          return zone.offset;
      };
      this.format.name = function(zone) {
          return zone.name;
      };
      this.format.combination = function(zone) {
          return zone.offset +" "+ zone.name;
      };
      this.format.customValue = function(zone) {
        if(options.valueFunction) {
          return options.valueFunction(zone);
        }
        return "";
      };
      this.format.customText = function(zone) {
        if(options.textFunction) {
          return options.textFunction(zone);
        }
        return "";
      };
  		this.init();
  }

  $.extend(ZonePicker.prototype, {
  		init: function () {
        var currentZone = this.predict().name();
        var zones = [];
        $.each(_.jstz.olson.timezones, function(i,n) {
          zones.push({'offset': parseInt(i)/60, 'name':n});
        });

        var selected = false;

        zones.forEach(function(zone) {
          var option = $("<option/>",{
            value: this.format[this.settings.valueFormat](zone)
          });
          option.html(this.format[this.settings.textFormat](zone));
          if(!selected && zone.name === currentZone) {
            option.prop('selected','selected');
            selected = true;
          }
          this.element.append(option);
        }, this);

        this.element.data("zone", currentZone);
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
