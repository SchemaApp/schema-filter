# SchemaFilter
JavaScript Filter tool to remove Schema markup in JSON-LD, Microdata, or RDFa formats from webpages.


## Usage

To the use the script import it using a script tag. We recommend using the CDN version of the script where possible. 

```html
	// Using the CDN Version (Recommended)
	<script src="https://cdn.schemaapp.com/javascript/schemaFilter.min.js"></script>

	// Loading asyncronously 
	<script async src="https://cdn.schemaapp.com/javascript/schemaFilter.min.js"></script>

	// Or load it locally
	<script src="schemaFilter.js"></script>	

```


### Modes of removal

Schema Filter supports the removal of JSON-LD, Microdata, and RDFa. This is done by calling the specific functions or through specifying them by name.
Multiple calls to the function can be used to remove more than one format.  

- JSON-LD ```SchemaFilter.remove([],'json-ld');``` or ```SchemaFilter.removeJSONLD();```
- Microdata ```SchemaFilter.remove();``` or ```SchemaFilter.removeMicroData();```
- RDFa ```SchemaFilter.remove([],'rdfa');``` or ```SchemaFilter.removeRDFa();```


### Specifying specific Types

Specifying particular schema classes is done through passing an array to the remove function. If all classes are to be removed then the array may be left empty (```[]```), or passed in as ```null```. 

```javascript
// This will remove all Event and Organization types on Microdata
SchemaFilter.remove(['Event', 'Organization']); 

// This will remove LocalBusiness, Organization, and WebSite classes in a JSON-LD format. 
SchemaFilter.remove(['LocalBusiness', 'Organization', 'WebSite'], 'json-ld');

// Remove all classes of rdfa (notice the empty array).
SchemaFilter.remove([],'rdfa');

// Remove all Organizations of RDFa
SchemaFilter.remove(['Organization'], 'rdfa');

// Remove all classes of JSON-LD (notice we can also use null for the array).
SchemaFilter.remove(null,'json-ld');

```


### Running the script on your page

Once the script is imported you may the run script in another block of javascript. The script should be run when the document is ready or after another event that injects Schema Markup into the page. If the markup is embedded in the source you may run when the document is loaded as shown below.

```javascript
document.addEventListener('DOMContentLoaded', function(event) {
	SchemaFilter.remove(null, 'json-ld');
});
```
 


