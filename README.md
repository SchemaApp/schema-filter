# SchemaFilter
JavaScript Filter tool to remove Schema markup in JSON-LD, Microdata, or RDFa formats.


## Usage

Import the script on the page.

```
<script src="schemaFilter.js"><script>
```

Run the script when the document is ready or after another event that injects Schema Markup into the page.

```
	document.addEventListener('DOMContentLoaded', function(event) {
		SchemaFilter.schemaClass = new Set(['LocalBusiness']);
		SchemaFilter.remove();
	});
```
 
### Modes of removal

Schema Filter supports the removal of JSON-LD, Microdata, and RDFa. This is done by calling the specific functions or through specifying them by name.

- JSON-LD SchemaFilter.remove('json-ld') or SchemaFilter.removeJSONLD();
- Microdata SchemaFilter.remove() or SchemaFilter.removeMicroData();
- RDFa SchemaFilter.remove('rdfa') or SchemaFilter.removeRDFa();



