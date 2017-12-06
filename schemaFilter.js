
var microAttrs = ['itemscope', 'itemtype', 'itemid', 'itemprop', 'itemref', 'itemid'];

var SchemaFilter = {
		
		schemaClass : '',

 	performRemoval: function() {
		// Normalize the user input
		this.schemaClass = this.schemaClass.split('/').toUpperCase();
	
	},

	removeMicroData: function() {
		var typeElements = document.querySelectorAll('[itemtype]');
		var filteredElements = [];
		
		if (this.schemaClass != '') {
			typeElements.forEach(function(ele) { 
				var type = ele.getAttribute('itemtype');
				var normalizedType = type.split('/')[-1].toUpperCase();
				if (normalizedType === this.schemaClass) {
					filterElements.push(ele);
				}
			});
		} else {
			filteredElements = typeElements;
		}
		
		
		filteredElements.forEach(function (ele) {
			
			for (var i = 0; i < microAttrs.length; i++) {
				ele.removeAttribute(microAttrs[i]);
			}
		});
	},
	isJSONLD: function(value) {
		var type = value.getAttribute('type');
		return type === 'application/ld+json';
	
	},
	removeJSONLD: function() {
		var scriptElements = document.querySelectorAll('script');
		var jsonLDElements = [];
		
		for (var i = 0; i < scriptElements.length; i++) {
			if (this.isJSONLD(scriptElements[i])) {
				var obj = JSON.parse(scriptElements[i].innerHTML);
				
				if (this.schemaClass === '') {
					scriptElements[i].remove();
					continue;
				}
				
				jsonLDElements.push([scriptElements[i], obj]);
			}
		}
		
		jsonLDElements.forEach(function(element) {
			var script = element[0];
			var jObj = element[1]
			if (jObj['@type'] === this.schemaClass) {
				script.remove();
			}
		
		});
		
	}
	
};




