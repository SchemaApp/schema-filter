import {SchemaFilter} from "../schemaFilter";



const htmlWitIDInJSONLD =
    '<script type="application/ld+json" data-schema="11085-page-App">' +
    '{"@id":"https:\/\/www.schemaapp.com\/", ' +
    '"@context":"http:\/\/schema.org","@type":"Organization","sameAs":["https:\/\/twitter.com\/schemaapptool","https:\/\/www.instagram.com\/lifeatschemaapp\/","https:\/\/www.linkedin.com\/company\/2480720\/","https:\/\/www.youtube.com\/channel\/UCqVBXnwZ3YNf2BVP1jXcp6Q"],"logo":"https:\/\/ezk8caoodod.exactdn.com\/wp-content\/uploads\/2020\/07\/SA_Logo_Main_Orange_w300-1.png?strip=all&lossy=1&ssl=1","name":"Schema App","telephone":"+18554448624","url":"https:\/\/www.schemaapp.com\/","knowsLanguage":"http:\/\/www.wikidata.org\/entity\/Q1860","areaServed":"http:\/\/www.wikidata.org\/entity\/Q13780930","image":"https:\/\/ezk8caoodod.exactdn.com\/wp-content\/uploads\/2021\/04\/Schema-App-Featured-Image.png?strip=all&lossy=1&ssl=1"}' +
    '</script>' +

    '<script>SchemaFilter.remove(null, \'json-ld\');</script>';


const htmlNoIDInJSONLD =
    '<script></script>' +

    '<script type="application/ld+json" data-schema="11085-page-App">' +
    '{"@context":"http://schema.org","@type":"Organization","address":{"@type":"PostalAddress","name":"Schema App Address","addressCountry":"http://www.wikidata.org/entity/Q16","addressLocality":"Guelph","addressRegion":"Ontario","postalCode":"N1H 4E4","streetAddress":"C-15 Wyndham Street North"}}' +
    '</script>' +

    '<script id="newTodoInput">SchemaFilter.remove(null, \'json-ld\');</script>';


const htmlWithArrayOfItemsWithId = '<script type="application/ld+json" data-schema="11085-page-App">[{"@context":"http:\/\/schema.org","@type":"Organization","address":{"@type":"PostalAddress","name":"Schema App Address","addressCountry":"http:\/\/www.wikidata.org\/entity\/Q16","addressLocality":"Guelph","addressRegion":"Ontario","postalCode":"N1H 4E4","streetAddress":"C-15 Wyndham Street North","@id":"https:\/\/www.schemaapp.com\/#PostalAddress"},"sameAs":["https:\/\/twitter.com\/schemaapptool","https:\/\/www.instagram.com\/lifeatschemaapp\/","https:\/\/www.linkedin.com\/company\/2480720\/","https:\/\/www.youtube.com\/channel\/UCqVBXnwZ3YNf2BVP1jXcp6Q"],"knowsAbout":["https:\/\/www.wikidata.org\/wiki\/Q180711","https:\/\/www.wikidata.org\/wiki\/Q6108942","https:\/\/www.wikidata.org\/wiki\/Q26813700"],"logo":"https:\/\/ezk8caoodod.exactdn.com\/wp-content\/uploads\/2020\/07\/SA_Logo_Main_Orange_w300-1.png?strip=all&lossy=1&ssl=1","description":"Schema App is a full-service schema markup solution that easily integrates with any website to take control of your brand in search to engage customers \u2013 drive traffic \u2013 generate leads.","name":"Schema App","telephone":"+18554448624","url":"https:\/\/www.schemaapp.com\/","knowsLanguage":"http:\/\/www.wikidata.org\/entity\/Q1860","areaServed":"http:\/\/www.wikidata.org\/entity\/Q13780930","image":"https:\/\/ezk8caoodod.exactdn.com\/wp-content\/uploads\/2021\/04\/Schema-App-Featured-Image.png?strip=all&lossy=1&ssl=1","@id":"https:\/\/www.schemaapp.com\/"},{"@type":["BlogPosting"],"@id":"https:\/\/www.schemaapp.com\/#BlogPosting","@context":{"@vocab":"http:\/\/schema.org\/","kg":"http:\/\/g.co\/kg"},"url":"https:\/\/www.schemaapp.com\/","publisher":[{"@id":"https:\/\/www.schemaapp.com\/"}],"audience":"https:\/\/schema.org\/PeopleAudience","inLanguage":[{"@type":"Language","@id":"https:\/\/www.schemaapp.com\/#BlogPosting_inLanguage_Language","name":"English"}],"author":[{"@type":"Person","@id":"https:\/\/www.schemaapp.com\/#highlight#TagListauthorHighlight-202203241744170280","name":"Stefan Lazic"}],"dateModified":"2022-06-01T17:31:07+00:00","headline":"Get Rating Rich Results for Local Business with Third Party Reviews","articleBody":"Get Rating Rich Results for Local Business with Third Party Reviews","mainEntityOfPage":"https:\/\/www.schemaapp.com\/?p=13076","image":[{"@type":"ImageObject","@id":"https:\/\/www.schemaapp.com\/#BlogPosting_image_ImageObject","url":"https:\/\/www.schemaapp.com\/wp-content\/uploads\/2022\/05\/Screen-Shot-2022-05-31-at-1.21.03-PM-600x388.png"}],"datePublished":"-0001-11-30T00:00:00+00:00"},{"@context":"http:\/\/schema.org","@type":"Organization","address":{"@type":"PostalAddress","name":"Schema App Address","addressCountry":"http:\/\/www.wikidata.org\/entity\/Q16","addressLocality":"Guelph","addressRegion":"Ontario","postalCode":"N1H 4E4","streetAddress":"C-15 Wyndham Street North","@id":"https:\/\/www.schemaapp.com\/#PostalAddress"},"sameAs":["https:\/\/twitter.com\/schemaapptool","https:\/\/www.instagram.com\/lifeatschemaapp\/","https:\/\/www.linkedin.com\/company\/2480720\/","https:\/\/www.youtube.com\/channel\/UCqVBXnwZ3YNf2BVP1jXcp6Q"],"knowsAbout":["https:\/\/www.wikidata.org\/wiki\/Q180711","https:\/\/www.wikidata.org\/wiki\/Q6108942","https:\/\/www.wikidata.org\/wiki\/Q26813700"],"logo":"https:\/\/ezk8caoodod.exactdn.com\/wp-content\/uploads\/2020\/07\/SA_Logo_Main_Orange_w300-1.png?strip=all&lossy=1&ssl=1","description":"Schema App is a full-service schema markup solution that easily integrates with any website to take control of your brand in search to engage customers \u2013 drive traffic \u2013 generate leads.","name":"Schema App","telephone":"+18554448624","url":"https:\/\/www.schemaapp.com\/","knowsLanguage":"http:\/\/www.wikidata.org\/entity\/Q1860","areaServed":"http:\/\/www.wikidata.org\/entity\/Q13780930","image":"https:\/\/ezk8caoodod.exactdn.com\/wp-content\/uploads\/2021\/04\/Schema-App-Featured-Image.png?strip=all&lossy=1&ssl=1","@id":"https:\/\/www.schemaapp.com\/"}]</script>'

const htmlWithArrayOfItemsWithoutId = '[{"@context":"http://schema.org","@type":"Organization","address":{"@type":"PostalAddress","name":"Schema App Address","addressCountry":"http://www.wikidata.org/entity/Q16","addressLocality":"Guelph","addressRegion":"Ontario","postalCode":"N1H 4E4","streetAddress":"C-15 Wyndham Street North","@id":"https://www.schemaapp.com/#PostalAddress"},"sameAs":["https://twitter.com/schemaapptool","https://www.instagram.com/lifeatschemaapp/","https://www.linkedin.com/company/2480720/","https://www.youtube.com/channel/UCqVBXnwZ3YNf2BVP1jXcp6Q"],"knowsAbout":["https://www.wikidata.org/wiki/Q180711","https://www.wikidata.org/wiki/Q6108942","https://www.wikidata.org/wiki/Q26813700"],"logo":"https://ezk8caoodod.exactdn.com/wp-content/uploads/2020/07/SA_Logo_Main_Orange_w300-1.png?strip=all&lossy=1&ssl=1","description":"Schema App is a full-service schema markup solution that easily integrates with any website to take control of your brand in search to engage customers – drive traffic – generate leads.","name":"Schema App","telephone":"+18554448624","url":"https://www.schemaapp.com/","knowsLanguage":"http://www.wikidata.org/entity/Q1860","areaServed":"http://www.wikidata.org/entity/Q13780930","image":"https://ezk8caoodod.exactdn.com/wp-content/uploads/2021/04/Schema-App-Featured-Image.png?strip=all&lossy=1&ssl=1"},{"@type":["BlogPosting"],"@context":{"@vocab":"http://schema.org/","kg":"http://g.co/kg"},"url":"https://www.schemaapp.com/","publisher":[{"@id":"https://www.schemaapp.com/"}],"audience":"https://schema.org/PeopleAudience","inLanguage":[{"@type":"Language","@id":"https://www.schemaapp.com/#BlogPosting_inLanguage_Language","name":"English"}],"author":[{"@type":"Person","@id":"https://www.schemaapp.com/#highlight#TagListauthorHighlight-202203241744170280","name":"Stefan Lazic"}],"dateModified":"2022-06-01T17:31:07+00:00","headline":"Get Rating Rich Results for Local Business with Third Party Reviews","articleBody":"Get Rating Rich Results for Local Business with Third Party Reviews","mainEntityOfPage":"https://www.schemaapp.com/?p=13076","image":[{"@type":"ImageObject","@id":"https://www.schemaapp.com/#BlogPosting_image_ImageObject","url":"https://www.schemaapp.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-31-at-1.21.03-PM-600x388.png"}],"datePublished":"-0001-11-30T00:00:00+00:00"},{"@context":"http://schema.org","@type":"Organization","address":{"@type":"PostalAddress","name":"Schema App Address","addressCountry":"http://www.wikidata.org/entity/Q16","addressLocality":"Guelph","addressRegion":"Ontario","postalCode":"N1H 4E4","streetAddress":"C-15 Wyndham Street North","@id":"https://www.schemaapp.com/#PostalAddress"},"sameAs":["https://twitter.com/schemaapptool","https://www.instagram.com/lifeatschemaapp/","https://www.linkedin.com/company/2480720/","https://www.youtube.com/channel/UCqVBXnwZ3YNf2BVP1jXcp6Q"],"knowsAbout":["https://www.wikidata.org/wiki/Q180711","https://www.wikidata.org/wiki/Q6108942","https://www.wikidata.org/wiki/Q26813700"],"logo":"https://ezk8caoodod.exactdn.com/wp-content/uploads/2020/07/SA_Logo_Main_Orange_w300-1.png?strip=all&lossy=1&ssl=1","description":"Schema App is a full-service schema markup solution that easily integrates with any website to take control of your brand in search to engage customers – drive traffic – generate leads.","name":"Schema App","telephone":"+18554448624","url":"https://www.schemaapp.com/","knowsLanguage":"http://www.wikidata.org/entity/Q1860","areaServed":"http://www.wikidata.org/entity/Q13780930","image":"https://ezk8caoodod.exactdn.com/wp-content/uploads/2021/04/Schema-App-Featured-Image.png?strip=all&lossy=1&ssl=1"}]';

test('JSON-LD with \'@id\' tag', () => {
    document.body.innerHTML = htmlWitIDInJSONLD;

    SchemaFilter.removeJSONLD(true);

    // Since there is an @id tag in the markup, the html file doesn't change
    expect(document.body.innerHTML).toEqual(htmlWitIDInJSONLD);


    // similar functionality with the remove method is expected
    document.body.innerHTML = htmlWitIDInJSONLD;

    SchemaFilter.remove(null, 'json-ld', true);

    // Since there is an @id tag in the markup, the html file doesn't change
    expect(document.body.innerHTML).toEqual(htmlWitIDInJSONLD);
});

test('JSON-LD without \'@id\' tag', () => {
    document.body.innerHTML = htmlNoIDInJSONLD;

    SchemaFilter.removeJSONLD(true);

    expect(document.body.innerHTML).toEqual(
        '<script></script>' +
        '<script id="newTodoInput">SchemaFilter.remove(null, \'json-ld\');</script>'
    );

    // similar functionality with the remove method is expected
    document.body.innerHTML = htmlNoIDInJSONLD;

    SchemaFilter.remove(null, 'json-ld', true);

    expect(document.body.innerHTML).toEqual(
        '<script></script>' +
        '<script id="newTodoInput">SchemaFilter.remove(null, \'json-ld\');</script>'
    );
});

test('JSON-LD with an array that has @ids is not removed when searching for @ids', () => {
    
    document.body.innerHTML = htmlWithArrayOfItemsWithId;
    
    SchemaFilter.removeJSONLD(true);
    
    expect(document.body.innerHTML).toContain('<script type="application/ld+json" data-schema="11085-page-App">'); 
});

test('JSON-LD with an array that has no @ids is removed when searching for @ids', () => {
    document.body.innerHTML = htmlWithArrayOfItemsWithoutId;
    SchemaFilter.removeJSONLD(true);
    expect(document.body.innerHTML).not.toContain('<script type="application/ld+json"');
})

test('Remove JSON-LD with an array', () => {
    document.body.innerHTML = htmlWithArrayOfItemsWithId;
    
    SchemaFilter.removeJSONLD();
    
    expect(document.body.innerHTML).not.toContain('<script type="application/ld+json" data-schema="11085-page-App">'); 
});

test('JSON-LD Meta Element is left', () => {
    const bodyContent = '<link rel="alternate" type="application/ld+json" href="https://www.schemaapp.com/?format=application/ld+json" title="Structured Descriptor Document (JSON-LD format)">';
    document.body.innerHTML = bodyContent;
    
    SchemaFilter.remove([], 'json-ld');
    
    expect(document.body.innerHTML).toStrictEqual(bodyContent);
});

test('remove any json-ld', () => {
    document.body.innerHTML = htmlNoIDInJSONLD;

    SchemaFilter.removeJSONLD(false);

    expect(document.body.innerHTML).toEqual(
        "<script></script>" +
        "<script id=\"newTodoInput\">SchemaFilter.remove(null, 'json-ld');</script>"
    );

    // similar functionality with the remove method is expected
    document.body.innerHTML = htmlNoIDInJSONLD;

    SchemaFilter.remove(null, 'json-ld');

    expect(document.body.innerHTML).toEqual(
        "<script></script>" +
        "<script id=\"newTodoInput\">SchemaFilter.remove(null, 'json-ld');</script>"
    );
});