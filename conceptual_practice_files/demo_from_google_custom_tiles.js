/**
 * Created by School on 2/11/2016.
 */
/*
 * This demo demonstrates how to replace default map tiles with custom imagery.
 * In this case, the CoordMapType displays gray tiles annotated with the tile
 * coordinates.
 *
 * Try panning and zooming the map to see how the coordinates change.
 */
//tile 5-6 is center

/**
 * @constructor
 * @implements {google.maps.MapType}
 */
var map_config = {
    fileExt		: 'jpeg',
    tileSizeX	: 538,
    tileSizeY   : 433,
    defaultZoom	: 0,
    cacheMinutes	: 0,
    debug		: false
};
function FantasyMapType(tilesizeX,tilesizeY){
    this.tileSizeX=tilesizeX;
    this.tileSizeY=tilesizeY;
}
FantasyMapType.prototype.maxZoom=3;
FantasyMapType.prototype.name="archaevas";
FantasyMapType.prototype.alt='Custom Image Map Type';

FantasyMapType.prototype.getTile=function(zoom,ownerDocument){
    var div = ownerDocument.createElement('div');
    div.style.width=this.tileSizeX+'px';
    div.style.width=this.tileSizeY+'px';
    getTileURL=function(){
    var url= tiles_config.stem+'archaevas_'+ty+'-'+tx+'.jpeg';
    }

}
function CoordMapType(tileSize) {
    this.tileSize = tileSize;
}

CoordMapType.prototype.maxZoom = 7;
CoordMapType.prototype.name = 'Tile #s';
CoordMapType.prototype.alt = 'Tile Coordinate Map Type';

CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement('div');
    div.innerHTML = coord;
    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#AAAAAA';
    div.style.backgroundColor = '#E5E3DF';
    return div;
};

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.850, lng: -87.650},
        streetViewControl: false,
        mapTypeId: 'archaevas',
        mapTypeControlOptions: {
            mapTypeIds: ['archaevas', google.maps.MapTypeId.ROADMAP],
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });

    map.addListener('maptypeid_changed', function() {
        var showStreetViewControl = map.getMapTypeId() !== 'archaevas';
        map.setOptions({
            streetViewControl: showStreetViewControl
        });
    });

    // Now attach the coordinate map type to the map's registry.
    map.mapTypes.set('archaevas',
        new FantasyMapType(new google.maps.Size(538,433)));
}