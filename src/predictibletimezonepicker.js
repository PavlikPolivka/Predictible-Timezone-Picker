/*
 *
 *
 *
 * Copyright (c) 2015 Pavel Polivka
 * Licensed under the MIT license.
 */
(function ($) {

  var pluginName = "zonePicker",
  		defaults = {
  		propertyName: "value"
  };

  // The actual plugin constructor
  function ZonePicker (element, options) {
  		this.element = element;
  		this.settings = $.extend( {}, defaults, options );
  		this._defaults = defaults;
  		this._name = pluginName;
  		this.init();
  }

  $.extend(ZonePicker.prototype, {
  		init: function () {
  				console.log("xD");
  		},
  		predict: function (date) {
  				console.log(date);
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
