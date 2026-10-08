var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_area_estudio_1 = new ol.format.GeoJSON();
var features_area_estudio_1 = format_area_estudio_1.readFeatures(json_area_estudio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_estudio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_estudio_1.addFeatures(features_area_estudio_1);
var lyr_area_estudio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_estudio_1, 
                style: style_area_estudio_1,
                popuplayertitle: 'area_estudio',
                interactive: true,
                title: '<img src="styles/legend/area_estudio_1.png" /> area_estudio'
            });
var format_Sitios_Andrea_2 = new ol.format.GeoJSON();
var features_Sitios_Andrea_2 = format_Sitios_Andrea_2.readFeatures(json_Sitios_Andrea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitios_Andrea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitios_Andrea_2.addFeatures(features_Sitios_Andrea_2);
var lyr_Sitios_Andrea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitios_Andrea_2, 
                style: style_Sitios_Andrea_2,
                popuplayertitle: 'Sitios_Andrea',
                interactive: true,
                title: '<img src="styles/legend/Sitios_Andrea_2.png" /> Sitios_Andrea'
            });
var format_base_practicasitios_3 = new ol.format.GeoJSON();
var features_base_practicasitios_3 = format_base_practicasitios_3.readFeatures(json_base_practicasitios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_base_practicasitios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_base_practicasitios_3.addFeatures(features_base_practicasitios_3);
var lyr_base_practicasitios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_base_practicasitios_3, 
                style: style_base_practicasitios_3,
                popuplayertitle: 'base_practica — sitios',
                interactive: true,
                title: '<img src="styles/legend/base_practicasitios_3.png" /> base_practica — sitios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_area_estudio_1.setVisible(true);lyr_Sitios_Andrea_2.setVisible(true);lyr_base_practicasitios_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_area_estudio_1,lyr_Sitios_Andrea_2,lyr_base_practicasitios_3];
lyr_area_estudio_1.set('fieldAliases', {'nombre': 'nombre', 'origen': 'origen', });
lyr_Sitios_Andrea_2.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'origen': 'origen', });
lyr_base_practicasitios_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'origen': 'origen', });
lyr_area_estudio_1.set('fieldImages', {'nombre': '', 'origen': '', });
lyr_Sitios_Andrea_2.set('fieldImages', {'id': '', 'nombre': '', 'categoria': '', 'origen': '', });
lyr_base_practicasitios_3.set('fieldImages', {'id': '', 'nombre': '', 'categoria': '', 'origen': '', });
lyr_area_estudio_1.set('fieldLabels', {'nombre': 'inline label - always visible', 'origen': 'inline label - always visible', });
lyr_Sitios_Andrea_2.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'categoria': 'header label - always visible', 'origen': 'inline label - always visible', });
lyr_base_practicasitios_3.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'categoria': 'inline label - always visible', 'origen': 'inline label - always visible', });
lyr_base_practicasitios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});