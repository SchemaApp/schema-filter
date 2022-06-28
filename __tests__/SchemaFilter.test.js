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



test('JSON-LD with \'@id\' tag', () => {
    document.body.innerHTML = htmlWitIDInJSONLD;

    SchemaFilter.removeJSONLD(true);

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
});

test('remove any json-ld', () => {
    document.body.innerHTML = htmlNoIDInJSONLD;

    SchemaFilter.removeJSONLD(false);

    expect(document.body.innerHTML).toEqual(
        "<script></script>" +
        "<script id=\"newTodoInput\">SchemaFilter.remove(null, 'json-ld');</script>"
    );
});