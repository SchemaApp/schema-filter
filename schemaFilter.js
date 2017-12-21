var SchemaFilter = {
		
	schemaClass : new Set(),
	onLoad: 'DOMContentLoaded',

	remove: function(classes=[],type='micro') {
		if (classes !== null) {		
			if (classes.constructor === Array) {
				if (classes.length >= 0) {
					this.schemaClass = new Set(classes);
				}
			}
			if (classes.constructor === Set) {
				this.schemaClass = classes;
			}
		}
		// In the case this was added after the document was loaded.
		if (document.readyState === "complete") {
			switch(type) {
				case 'microdata':
				case 'micro':
					SchemaFilter.removeMicroData();
					break;
				case 'json-ld':
					SchemaFilter.removeJSONLD();
					break;
				case 'rdfa':
					SchemaFilter.removeMicroData();
				}
			return;
		}
		switch(type) {
			case 'microdata':
			case 'micro':
				window.addEventListener(this.onLoad, function(event) {SchemaFilter.removeMicroData()});
				break;
			case 'json-ld':
				window.addEventListener(this.onLoad, function(event) {SchemaFilter.removeJSONLD()});
				break;
			case 'rdfa':
				window.addEventListener(this.onLoad, function(event) {SchemaFilter.removeMicroData()});
				break;
		}
	},

	removeMicroData: function() {
	
		var typeElements = document.querySelectorAll('[itemtype]');
		if (typeElements.length === 0) {
			typeElements = document.querySelector("html"); // Check the HTML tag to see if the type is there
		}
		var filteredElements = [];

		if (this.schemaClass.length !== 0) {
			for (var i = 0; i < typeElements.length; i++) {
				var ele = typeElements[i];
				var type = ele.getAttribute('itemtype');
				var normalizedType = type.split('/').pop();
				if (this.schemaClass.has(normalizedType)) {
					filteredElements.push(ele);
				}
			}
		} else {
			filteredElements = typeElements;
		}
		
		for (var i = 0; i < filteredElements.length; i++) {
			var element = filteredElements[i];
			element.removeAttribute('itemtype');
			var taggedChildren = element.querySelectorAll('[itemprop]');
			for (var j = 0; j < taggedChildren.length; j++) {
				var childElement = taggedChildren[j];
				childElement.removeAttribute('itemprop');
				childElement.removeAttribute('content');
			}
		}
	},
	removeJSONLD: function() {
		var scriptElements = document.querySelectorAll('[type="application/ld+json"]');
		var jsonLDElements = [];
		
		for (var i = 0; i < scriptElements.length; i++) {
			var obj = JSON.parse(scriptElements[i].innerHTML);
			
			if (this.schemaClass.length === 0) {
				scriptElements[i].remove();
				continue;
			}
			
			jsonLDElements.push([scriptElements[i], obj]);
		}
		
		for (var i = 0; i < jsonLDElements.length; i++) {
			var element = jsonLDElements[i];
			var script = element[0];
			var jObj = element[1];
			
			if (this.schemaClass.has(jObj['@type'])) {
				script.remove();
			}
		}
		
	},
	removeRDFa: function() {
		var markedTags = document.querySelectorAll('[typeof]');
		var tagsToRemove = [];
		if (this.schemaClass.length !== 0) {
			for (var i = 0; i < markedTags.length; i++) {
				var ele = markedTags[i];
				if (this.schemaClass.has(ele.getAttribute('typeof'))) {
					tagsToRemove.push(ele);
				}
			}
		} else {
			tagsToRemove = markedTags;
		}
		
		tagsToRemove.forEach(function(ele) {
			var elements = ele.querySelectorAll('[property]');
		
			for (var i = 0; i < elements.length; i++) {
				elements[i].removeAttribute('property');
				elements[i].removeAttribute('typeof');
			}
		
		});
	}
};




