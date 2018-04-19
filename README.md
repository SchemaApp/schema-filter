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

Schema Filter supports the removal of JSON-LD, Microdata, and RDFa. This is done by calling the specific functions or through specifying them by name. Multiple calls to the function can be used to remove more than one format. Each command must be within a <script>...</script>.

- JSON-LD ```SchemaFilter.remove([],'json-ld');``` or ```SchemaFilter.removeJSONLD();```
- Microdata ```SchemaFilter.remove();``` or ```SchemaFilter.removeMicroData();```
- RDFa ```SchemaFilter.remove([],'rdfa');``` or ```SchemaFilter.removeRDFa();```


### Specifying specific Types

Specifying particular schema classes is done through passing an array to the remove function. If all classes are to be removed then the array may be left empty (```[]```), or passed in as ```null```. 

```javascript
// This will remove all Event and Organization types on Microdata
<script>SchemaFilter.remove(['Event', 'Organization']);</script>

// This will remove LocalBusiness, Organization, and WebSite classes in a JSON-LD format. 
<script>SchemaFilter.remove(['LocalBusiness', 'Organization', 'WebSite'], 'json-ld');</script>

// Remove all classes of rdfa (notice the empty array).
<script>SchemaFilter.remove([],'rdfa');</script>

// Remove all Organizations of RDFa
<script>SchemaFilter.remove(['Organization'], 'rdfa');</script>

// Remove all classes of JSON-LD (notice we can also use null for the array).
<script>SchemaFilter.remove(null,'json-ld');</script>

```


### Running the script on your page

Once the script is imported you may the run script in another block of javascript. The script should be run when the document is ready or after another event that injects Schema Markup into the page. If the markup is embedded in the source you may run when the document is loaded as shown below.

```javascript
<script>SchemaFilter.remove(null, 'json-ld');</script>
```

If you want to alter the event in which the code is loaded you can specify the string event value into the ```onLoad``` property of the SchemaFilter. 

```javascript
<script>
SchemaFilter.onLoad = 'SomeEventHere'; // the default value
SchemaFilter.remove();
</script>
```
 


