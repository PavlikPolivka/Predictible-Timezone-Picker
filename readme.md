# Predictible TimeZone Picker

> TimeZone Picker that fills in user's timezone.


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/PavlikPolivka/Predictible-Timezone-Picker/master/dist/jquery.predictibletimezonepicker.min.js
[max]: https://raw.githubusercontent.com/PavlikPolivka/Predictible-Timezone-Picker/master/dist/jquery.predictibletimezonepicker.js

In your web page:

```html

<select id="zonePicker"></select>

<script src="jquery.js"></script>
<script src="dist/predictibletimezonepicker.min.js"></script>
<script>
  jQuery(function ($) {
    $("#zonePicker").zonePicker();
  });
</script>
```

By default options created by zone picker will be in this format:

```html
  <option value="-5">-5 America/New_York</option>
```

You can change format of options by passing some options to Zone Picker:

```html
<script>
  jQuery(function ($) {
    $('#zonePicker').zonePicker({
      valueFormat: 'name',
      textFormat: 'number'
    });
  });
</script>
```

Supported formats are:
- number - just a offset number -5 for NY, this is default for value
- name - just a name of time zone (America/New_York)
- combination - combination of both (-5 America/New_York), default for text
- custom - custom formating function, function needs to be passed in options (valueFunction and textFunction)

####Custom functions

Usage of custom function:

```html
<script>
  jQuery(function ($) {
    $('#zonePicker').zonePicker({
      valueFormat: 'custom',
      valueFunction: function(zone) {
      	return zone.name + " " + zone.offset;
      },
      textFormat: 'custom',
      textFunction: function(zone) {
      	return zone.name + zone.name + " " + zone.offset;
      }
    });
  });
</script>
```

Zone object only has info about name of zone and number (offset of the zone).

```javascript
{
	'offset' : '-5',
	'name' : 'America/New_York'
}
```

## License

MIT © Pavel Polivka
