var wms_layers = [];

var lyr_Clippedextent_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (extent)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedextent_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8429416.967757, 91522.434877, -8234676.052032, 226003.746816]
                            })
                        });

lyr_Clippedextent_0.setVisible(true);
var layersList = [lyr_Clippedextent_0];
