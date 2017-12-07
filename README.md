# SchemaFilter
JavaScript Filter tool to remove Schema markup in JSON-LD, Microdata, or RDFa formats.


## Usage

Import the script on the page.

```
<script src="schemaFilter.js"><script>
```

Run the script when the document is ready or after another event that injects Schema Markup into the page.

```javascript
	document.addEventListener('DOMContentLoaded', function(event) {
		SchemaFilter.schemaClass = new Set(['LocalBusiness']);
		SchemaFilter.remove();
	});
```
 
### Modes of removal

Schema Filter supports the removal of JSON-LD, Microdata, and RDFa. This is done by calling the specific functions or through specifying them by name.

- JSON-LD ```SchemaFilter.remove('json-ld');``` or ```SchemaFilter.removeJSONLD();```
- Microdata ```SchemaFilter.remove();``` or ```SchemaFilter.removeMicroData();```
- RDFa ```SchemaFilter.remove('rdfa');``` or ```SchemaFilter.removeRDFa();```


### Specifying specific Types

Specifying types is done through a static Set on the SchemaFilter, this alters the use of the filter regardless of the mode it is in
If called multiple times without changing the filter the same filter will be used, this may mean in certain cases it will be need to be
set multiple times. The filter is set by creating a ```Set``` and assigning it to the filter.

```javascript
	SchemaFilter.schemaClass = new Set(['Event', 'Organization']); // This will remove all Event and Organization types

```


