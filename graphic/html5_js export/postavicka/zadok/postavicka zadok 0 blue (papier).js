(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 70,
	height: 113,
	fps: 24,
	color: "#332626",
	webfonts: {},
	manifest: [
		{src:"postavicka zad(png)/batohvrch.png", id:"batohvrch"},
		{src:"postavicka zad(png)/hlava.png", id:"hlava"},
		{src:"postavicka zad(png)/kapuca.png", id:"kapuca"},
		{src:"postavicka zad(png)/papier.png", id:"papier"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.batohvrch = function() {
	this.initialize(img.batohvrch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,131);


(lib.hlava = function() {
	this.initialize(img.hlava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,208);


(lib.kapuca = function() {
	this.initialize(img.kapuca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,283);


(lib.papier = function() {
	this.initialize(img.papier);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,435);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FFFF").ss(8,1,1).p("AiYBEQAUghAdghQA7hAAtAAQAXAAAdAIQAQAFAcAKQArAMANgo");
	this.shape.setTransform(-6.9,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#33FFFF").ss(8,1,1).p("AiYBEQAUghAdghQA7hAAtAAQAXAAAdAIQAQAFAcAKQArAMANgo");
	this.shape_1.setTransform(53.7,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33FFFF").ss(8,1,1).p("AiYBEQAUghAdghQA7hAAtAAQAXAAAdAIQAQAFAcAKQArAMANgo");
	this.shape_2.setTransform(23.9,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-15.2,99.4,48.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AgMBUIgDgCIgEgGQgQgggGgdQgIgjAJgaIAIgQQAEgJAGgFQAHgIAIAAQAPgBANAKIADACIACADIADADQAOAPACAZQACAPgDAUQgBAOgEAMQgEAOgIALIgDAFQgJALgIADIgGADIgBABIAAABIgDACIgFAAIgEgBg");
	this.shape.setTransform(4.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,17.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlava();
	this.instance.setTransform(0,0,0.206,0.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.1,42.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kapuca();
	this.instance.setTransform(0,0,0.206,0.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.4,58.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.papier();
	this.instance.setTransform(0,0,0.193,0.193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.2,84);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.batohvrch();
	this.instance.setTransform(0,0,0.207,0.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,27.1);


// stage content:
(lib.postavkabackanimacia0papierred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// batoh vrch
	this.instance = new lib.Symbol2();
	this.instance.setTransform(36.3,77,1,1,0,0,0,6.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.4,regY:13.5,x:38.2,y:82.4},0).wait(1).to({y:82.3},0).wait(1).to({x:38.3,y:82.2},0).wait(1).to({y:82.1},0).wait(1).to({y:82},0).wait(1).to({y:81.9},0).wait(1).to({y:81.8},0).wait(1).to({x:38.4},0).wait(1).to({y:81.7},0).wait(1).to({y:81.6},0).wait(1).to({y:81.5},0).wait(1).to({y:81.4},0).wait(1).to({x:38.5,y:81.3},0).wait(1).to({y:81.2},0).wait(1).to({y:81.1},0).wait(2).to({y:81},0).wait(1).to({x:38.6,y:80.9},0).wait(1).to({y:80.8},0).wait(1).to({y:80.7},0).wait(1).to({y:80.6},0).wait(1).to({y:80.5},0).wait(1).to({x:38.7},0).wait(1).to({x:38.6},0).wait(1).to({y:80.6},0).wait(1).to({y:80.7},0).wait(1).to({y:80.8},0).wait(2).to({y:80.9},0).wait(1).to({x:38.5,y:81},0).wait(1).to({y:81.1},0).wait(2).to({y:81.2},0).wait(1).to({y:81.3},0).wait(1).to({x:38.4,y:81.4},0).wait(1).to({y:81.5},0).wait(2).to({y:81.6},0).wait(1).to({y:81.7},0).wait(1).to({y:81.8},0).wait(1).to({x:38.3},0).wait(1).to({y:81.9},0).wait(1).to({y:82},0).wait(1).to({y:82.1},0).wait(2).to({y:82.2},0).wait(1).to({x:38.2,y:82.3},0).wait(1).to({y:82.4},0).wait(1).to({y:82.5},0).wait(1));

	// papier
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(31.6,77.7,1,1,0,0,0,32.2,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:23.1,regY:42,rotation:0.1,x:22.5,y:64.1},0).wait(1).to({rotation:0.2,x:22.6},0).wait(1).to({y:64.2},0).wait(1).to({rotation:0.3,y:64.1},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.5},0).wait(1).to({rotation:0.6,x:22.7},0).wait(1).to({rotation:0.8,y:64},0).wait(1).to({rotation:1},0).wait(1).to({rotation:1.2,x:22.8},0).wait(1).to({rotation:1.5,y:63.9},0).wait(1).to({rotation:1.9,x:22.9},0).wait(1).to({rotation:2.5,x:23.1,y:63.8},0).wait(1).to({rotation:3.1,x:23.2,y:63.7},0).wait(1).to({rotation:3.5,x:23.3,y:63.6},0).wait(1).to({rotation:3.8,x:23.4},0).wait(1).to({rotation:4.1,x:23.5},0).wait(1).to({rotation:4.3,y:63.5},0).wait(1).to({rotation:4.4},0).wait(1).to({rotation:4.6,x:23.6},0).wait(1).to({rotation:4.7,y:63.4},0).wait(2).to({rotation:4.8},0).wait(1).to({y:63.5},0).wait(2).to({y:63.4},0).wait(1).to({rotation:4.7,y:63.5},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:4.5},0).wait(1).to({rotation:4.3,x:23.5},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:3.9,x:23.4,y:63.6},0).wait(1).to({rotation:3.7,x:23.3},0).wait(1).to({rotation:3.3,y:63.7},0).wait(1).to({rotation:2.9,x:23.2},0).wait(1).to({rotation:2.4,x:23.1,y:63.8},0).wait(1).to({rotation:1.9,x:23,y:63.9},0).wait(1).to({rotation:1.5,x:22.9,y:64},0).wait(1).to({rotation:1.1,x:22.7},0).wait(1).to({rotation:0.9},0).wait(1).to({rotation:0.7,x:22.6},0).wait(1).to({rotation:0.5,y:64.1},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.1,x:22.5},0).wait(1).to({y:64.2},0).wait(1).to({rotation:0},0).wait(3));

	// Layer 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiRB0IAAAAIAAAAQgDgBgCgBIAAAAIgFgFIgDgGQgDgCgCgDIAAAAIgCgHIAAAAIgEgLIAAAAQgDgGgFgSIAAAAQgEgRgBgRIAAAAQgBgTAHgMIAAAAIABgBIAAAAIgBgCIAAAAQAGgNAKgLIAAAAIAJgKIAAAAQAKgKAKgHIAAAAIAVgHIAAAAIAigJIAAAAQAjgHA8gIIAAAAIBHgKIAlgEIAAAAIALgCIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIAsgGIAAAAIgGACIAAAAQhDAShRAuIAAAAIgDACIAAAAIgKAIIAAAAIAAgBIAAAAIgKAJIAAAAIgBABIAAAAIgBAAIAAAAIAAAAIAAAAIgBABIAAAAIAAAAIAAAAIgVAXIAAAAIgBAAIAAAAIgFAGIAAAAIAAAAIAAAAIgKAJIAAAAIAAABIAAAAIgGAHIAAAAIgBABIAAAAIgBABIAAAAIgCACIgFAGIAAAAIAAABIAAAAIAAAAIAAAAIgCACIAAABIAAAAIgBAAIAAAAIAAAAQgWAdgOAgIAAAAIgQAPIAAAAQgHAGgGAAIAAAAIgFAAIAAAAIgDAAIAAAAIgGADIAAAAQgDACgEAAIAAAAIgHgBg");
	mask.setTransform(46.1,19.9);

	// Layer 23
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(39.9,19,0.843,0.999,0.8,0,0,37,3.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:23.4,regY:8.9,scaleX:0.84,rotation:0.9,x:28.9,y:24.3},0).wait(1).to({x:29.4,y:24.1},0).wait(1).to({x:29.9,y:23.8},0).wait(1).to({x:30.5,y:23.5},0).wait(1).to({x:31,y:23.3},0).wait(1).to({x:31.5,y:23},0).wait(1).to({x:32,y:22.7},0).wait(1).to({x:32.6,y:22.5},0).wait(1).to({x:33.1,y:22.2},0).wait(1).to({x:33.6,y:21.9},0).wait(1).to({x:34.1,y:21.7},0).wait(1).to({x:34.6,y:21.4},0).wait(1).to({x:35.2,y:21.1},0).wait(1).to({x:35.7,y:20.9},0).wait(1).to({x:36.2,y:20.6},0).wait(1).to({x:36.7,y:20.3},0).wait(1).to({x:37.3,y:20.1},0).wait(1).to({x:37.8,y:19.8},0).wait(1).to({x:38.3,y:19.5},0).wait(1).to({x:38.8,y:19.3},0).wait(1).to({x:39.4,y:19},0).wait(1).to({x:39.9,y:18.7},0).wait(1).to({x:40.4,y:18.5},0).wait(1).to({x:40.9,y:18.2},0).wait(1).to({x:41.5,y:18},0).wait(1).to({x:42,y:17.7},0).wait(1).to({x:42.5,y:17.4},0).wait(1).to({x:43,y:17.2},0).wait(1).to({x:43.6,y:16.9},0).wait(1).to({x:44.1,y:16.6},0).wait(1).to({x:44.6,y:16.4},0).wait(1).to({x:45.1,y:16.1},0).wait(1).to({x:45.7,y:15.8},0).wait(1).to({x:46.2,y:15.6},0).wait(1).to({x:46.7,y:15.3},0).wait(1).to({x:47.2,y:15},0).wait(1).to({x:47.8,y:14.8},0).wait(1).to({x:48.3,y:14.5},0).wait(1).to({x:48.8,y:14.2},0).wait(1).to({x:49.3,y:14},0).wait(1).to({x:49.9,y:13.7},0).wait(1).to({x:50.4,y:13.4},0).wait(1).to({x:50.9,y:13.2},0).wait(1).to({x:51.4,y:12.9},0).wait(1).to({x:52,y:12.6},0).wait(1).to({x:52.5,y:12.4},0).wait(1).to({x:53,y:12.1},0).wait(1).to({x:53.5,y:11.9},0).wait(1).to({x:54.1,y:11.6},0).wait(1));

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AgBBGIgDgFIgBgDIgBgCIAAgBIgBgCIgFgMIgEgKQgJgZgCgMIgBgIQgBgJAAgNIACgOIABgEIACgCIACgHIABgBIgBACIgBAFIADgBIABAAIAAgCIABgCQABgEACgDIgCABIgCACIAAAAIgCACIAEgHIAEgDIABAAIABAAIAIAEIABAAIACACIAHAEIAAAAIADADIAEAGIAAAAIAAABIAHAKIAJAOIgDgDIgHgKIgDADIgBABIgDAAIgBgBIgCgCIgCgCIAAgBIAAgFIAAgBIAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIgCgBIgDgBIgBgBQgCAAgDgCIgCgCIAAAAIgBABIAAABIAEABIAAABIABACIACAAIACAAIAAACIABABIgEgCIgBgBIgDAAIAAgBQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIgBgBIAAAAIgDAEIgCABIgBADIAAgDIgCAAIAAAAIgBAFIgBAEIABABIAAgBIAAgBIAAAAIADgEIAAgBIAAACIABAFIAAAJIAAACIAAACIAFAXQACADgBACIAAABIgBgEIgEgMIgBgBIgBgFIAAgCIgBAAIAAgCIAAAHIABAHIAGATIAAAAIABgDIAAgBIAAgBIAAgBIACAHIAAABIACAGIAAAHIAEALIACAHIABAFQACAHgBAEIAAABIgBADIgBACIgCADIgCAAIgBAAIgCgBg");
	this.shape.setTransform(32.5,26.4);

	this.instance_3 = new lib.Symbol19();
	this.instance_3.setTransform(32,26.8,1.074,0.817,0,0,28.9,4.5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape}]}).wait(50));

	// kapuca
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(36.4,77,1,1,0,0,0,24.7,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:76.9},0).wait(2).to({y:76.8},0).wait(1).to({y:76.7},0).wait(2).to({y:76.6},0).wait(2).to({y:76.5},0).wait(1).to({y:76.4},0).wait(2).to({y:76.3},0).wait(1).to({y:76.2},0).wait(2).to({y:76.1},0).wait(1).to({y:76},0).wait(2).to({y:75.9},0).wait(1).to({y:75.8},0).wait(2).to({y:75.7},0).wait(1).to({y:75.6},0).wait(2).to({y:75.5},0).wait(1).to({x:36.5,y:75.4},0).wait(1).to({x:36.4,y:75.5},0).wait(1).to({y:75.6},0).wait(2).to({y:75.7},0).wait(1).to({y:75.8},0).wait(2).to({y:75.9},0).wait(1).to({y:76},0).wait(2).to({y:76.1},0).wait(1).to({y:76.2},0).wait(2).to({y:76.3},0).wait(1).to({y:76.4},0).wait(2).to({y:76.5},0).wait(2).to({y:76.6},0).wait(1).to({y:76.7},0).wait(2).to({y:76.8},0).wait(2).to({y:76.9},0).wait(2).to({y:77},0).wait(1));

	// hlava
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(34.6,51.1,1,1,0,0,0,26.5,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({y:51.2},0).wait(2).to({y:51.3},0).wait(3).to({y:51.4},0).wait(2).to({y:51.5},0).wait(2).to({y:51.6},0).wait(3).to({y:51.7},0).wait(3).to({y:51.8},0).wait(3).to({y:51.9},0).wait(2).to({y:52},0).wait(3).to({y:51.9},0).wait(3).to({y:51.8},0).wait(4).to({y:51.7},0).wait(3).to({y:51.6},0).wait(4).to({y:51.5},0).wait(3).to({y:51.4},0).wait(4).to({y:51.3},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.4,64.7,65.3,98);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;