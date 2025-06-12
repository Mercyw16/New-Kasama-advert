ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20935").setExtent([704626.016915, 8765375.978908, 709755.879594, 8768085.257033]);
var wms_layers = [];

var format_New_Kasama_0 = new ol.format.GeoJSON();
var features_New_Kasama_0 = format_New_Kasama_0.readFeatures(json_New_Kasama_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_New_Kasama_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Kasama_0.addFeatures(features_New_Kasama_0);
var lyr_New_Kasama_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Kasama_0, 
                style: style_New_Kasama_0,
                popuplayertitle: 'New_Kasama',
                interactive: true,
                title: '<img src="styles/legend/New_Kasama_0.png" /> New_Kasama'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_New_Kasama_2 = new ol.format.GeoJSON();
var features_New_Kasama_2 = format_New_Kasama_2.readFeatures(json_New_Kasama_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_New_Kasama_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Kasama_2.addFeatures(features_New_Kasama_2);
var lyr_New_Kasama_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Kasama_2, 
                style: style_New_Kasama_2,
                popuplayertitle: 'New_Kasama',
                interactive: true,
                title: '<img src="styles/legend/New_Kasama_2.png" /> New_Kasama'
            });

lyr_New_Kasama_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_New_Kasama_2.setVisible(true);
var layersList = [lyr_New_Kasama_0,lyr_OpenStreetMap_1,lyr_New_Kasama_2];
lyr_New_Kasama_0.set('fieldAliases', {});
lyr_New_Kasama_2.set('fieldAliases', {});
lyr_New_Kasama_0.set('fieldImages', {});
lyr_New_Kasama_2.set('fieldImages', {});
lyr_New_Kasama_0.set('fieldLabels', {});
lyr_New_Kasama_2.set('fieldLabels', {});
lyr_New_Kasama_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});