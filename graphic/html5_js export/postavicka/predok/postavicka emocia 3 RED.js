(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 66,
	height: 120,
	fps: 24,
	color: "#332626",
	webfonts: {},
	manifest: [
		{src:"postavicka p (png)/bielko.png", id:"bielko"},
		{src:"postavicka p (png)/boty.png", id:"boty"},
		{src:"postavicka p (png)/hlavarage.png", id:"hlavarage"},
		{src:"postavicka p (png)/kapuca1111.png", id:"kapuca1111"},
		{src:"postavicka p (png)/nos.png", id:"nos"},
		{src:"postavicka p (png)/okovnutro.png", id:"okovnutro"},
		{src:"postavicka p (png)/okovonk.png", id:"okovonk"},
		{src:"postavicka p (png)/ruka.png", id:"ruka"},
		{src:"postavicka p (png)/usta2.png", id:"usta2"},
		{src:"postavicka p (png)/usta3.png", id:"usta3"},
		{src:"postavicka p (png)/USTA8.png", id:"USTA8"},
		{src:"postavicka p (png)/viecko.png", id:"viecko"}
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



(lib.bielko = function() {
	this.initialize(img.bielko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,74);


(lib.boty = function() {
	this.initialize(img.boty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,28);


(lib.hlavarage = function() {
	this.initialize(img.hlavarage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,134);


(lib.kapuca1111 = function() {
	this.initialize(img.kapuca1111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,162);


(lib.nos = function() {
	this.initialize(img.nos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,26);


(lib.okovnutro = function() {
	this.initialize(img.okovnutro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,43);


(lib.okovonk = function() {
	this.initialize(img.okovonk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,69);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,56);


(lib.usta2 = function() {
	this.initialize(img.usta2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,40);


(lib.usta3 = function() {
	this.initialize(img.usta3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,38);


(lib.USTA8 = function() {
	this.initialize(img.USTA8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,55);


(lib.viecko = function() {
	this.initialize(img.viecko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,71);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0066").ss(8,1,1).p("AiYBEQAUghAdghQA7hAAtAAQAXAAAdAIQAQAFAcAKQArAMANgo");
	this.shape.setTransform(-6.9,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0066").ss(8,1,1).p("AiYBEQAUghAdghQA7hAAtAAQAXAAAdAIQAQAFAcAKQArAMANgo");
	this.shape_1.setTransform(53.7,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0066").ss(8,1,1).p("AiYBEQAUghAdghQA7hAAtAAQAXAAAdAIQAQAFAcAKQArAMANgo");
	this.shape_2.setTransform(23.9,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-15.2,99.4,48.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgMBUIgDgCIgEgGQgQgggGgdQgIgjAJgaIAIgQQAEgJAGgFQAHgIAIAAQAPgBANAKIADACIACADIADADQAOAPACAZQACAPgDAUQgBAOgEAMQgEAOgIALIgDAFQgJALgIADIgGADIgBABIAAABIgDACIgFAAIgEgBg");
	this.shape.setTransform(4.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,17.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kapuca1111();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.3,49.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ruka();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,17.1);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boty();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,8.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bielko();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,22.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.okovnutro();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,13.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.okovonk();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,21.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.viecko();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.6,21.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlavarage();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,40.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nos();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,7.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usta3();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,11.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.USTA8();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,16.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usta2();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,12.2);


// stage content:
(lib.postAvickaanimaciaemocia3RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiRB0IAAAAIAAAAQgDgBgCgBIAAAAIgFgFIgDgGQgDgCgCgDIAAAAIgCgHIAAAAIgEgLIAAAAQgDgGgFgSIAAAAQgEgRgBgRIAAAAQgBgTAHgMIAAAAIABgBIAAAAIgBgCIAAAAQAGgNAKgLIAAAAIAJgKIAAAAQAKgKAKgHIAAAAIAVgHIAAAAIAigJIAAAAQAjgHA8gIIAAAAIBHgKIAlgEIAAAAIALgCIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIAsgGIAAAAIgGACIAAAAQhDAShRAuIAAAAIgDACIAAAAIgKAIIAAAAIAAgBIAAAAIgKAJIAAAAIgBABIAAAAIgBAAIAAAAIAAAAIAAAAIgBABIAAAAIAAAAIAAAAIgVAXIAAAAIgBAAIAAAAIgFAGIAAAAIAAAAIAAAAIgKAJIAAAAIAAABIAAAAIgGAHIAAAAIgBABIAAAAIgBABIAAAAIgCACIgFAGIAAAAIAAABIAAAAIAAAAIAAAAIgCACIAAABIAAAAIgBAAIAAAAIAAAAQgWAdgOAgIAAAAIgQAPIAAAAQgHAGgGAAIAAAAIgFAAIAAAAIgDAAIAAAAIgGADIAAAAQgDACgEAAIAAAAIgHgBg");
	mask.setTransform(46.1,19.9);

	// Layer 23
	this.instance = new lib.Symbol20();
	this.instance.setTransform(39.9,19,0.843,0.999,0.8,0,0,37,3.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23.4,regY:8.9,scaleX:0.84,rotation:0.9,x:28.9,y:24.3},0).wait(1).to({x:29.4,y:24.1},0).wait(1).to({x:29.9,y:23.8},0).wait(1).to({x:30.5,y:23.5},0).wait(1).to({x:31,y:23.3},0).wait(1).to({x:31.5,y:23},0).wait(1).to({x:32,y:22.7},0).wait(1).to({x:32.6,y:22.5},0).wait(1).to({x:33.1,y:22.2},0).wait(1).to({x:33.6,y:21.9},0).wait(1).to({x:34.1,y:21.7},0).wait(1).to({x:34.6,y:21.4},0).wait(1).to({x:35.2,y:21.1},0).wait(1).to({x:35.7,y:20.9},0).wait(1).to({x:36.2,y:20.6},0).wait(1).to({x:36.7,y:20.3},0).wait(1).to({x:37.3,y:20.1},0).wait(1).to({x:37.8,y:19.8},0).wait(1).to({x:38.3,y:19.5},0).wait(1).to({x:38.8,y:19.3},0).wait(1).to({x:39.4,y:19},0).wait(1).to({x:39.9,y:18.7},0).wait(1).to({x:40.4,y:18.5},0).wait(1).to({x:40.9,y:18.2},0).wait(1).to({x:41.5,y:18},0).wait(1).to({x:42,y:17.7},0).wait(1).to({x:42.5,y:17.4},0).wait(1).to({x:43,y:17.2},0).wait(1).to({x:43.6,y:16.9},0).wait(1).to({x:44.1,y:16.6},0).wait(1).to({x:44.6,y:16.4},0).wait(1).to({x:45.1,y:16.1},0).wait(1).to({x:45.7,y:15.8},0).wait(1).to({x:46.2,y:15.6},0).wait(1).to({x:46.7,y:15.3},0).wait(1).to({x:47.2,y:15},0).wait(1).to({x:47.8,y:14.8},0).wait(1).to({x:48.3,y:14.5},0).wait(1).to({x:48.8,y:14.2},0).wait(1).to({x:49.3,y:14},0).wait(1).to({x:49.9,y:13.7},0).wait(1).to({x:50.4,y:13.4},0).wait(1).to({x:50.9,y:13.2},0).wait(1).to({x:51.4,y:12.9},0).wait(1).to({x:52,y:12.6},0).wait(1).to({x:52.5,y:12.4},0).wait(1).to({x:53,y:12.1},0).wait(1).to({x:53.5,y:11.9},0).wait(1).to({x:54.1,y:11.6},0).wait(1));

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgBBGIgDgFIgBgDIgBgCIAAgBIgBgCIgFgMIgEgKQgJgZgCgMIgBgIQgBgJAAgNIACgOIABgEIACgCIACgHIABgBIgBACIgBAFIADgBIABAAIAAgCIABgCQABgEACgDIgCABIgCACIAAAAIgCACIAEgHIAEgDIABAAIABAAIAIAEIABAAIACACIAHAEIAAAAIADADIAEAGIAAAAIAAABIAHAKIAJAOIgDgDIgHgKIgDADIgBABIgDAAIgBgBIgCgCIgCgCIAAgBIAAgFIAAgBIAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIgCgBIgDgBIgBgBQgCAAgDgCIgCgCIAAAAIgBABIAAABIAEABIAAABIABACIgDAAIAAgBQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIgBgBIAAAAIgDAEIgCABIgBADIAAgDIgCAAIAAAAIgBAFIgBAEIABABIAAgBIAAgBIAAAAIADgEIAAgBIAAACIABAFIAAAJIAAACIAAACIAFAXQACADgBACIAAABIgBgEIgEgMIgBgBIgBgFIAAgCIgBAAIAAgCIAAAHIABAHIAGATIAAAAIABgDIAAgBIAAgBIAAgBIACAHIAAABIACAGIAAAHIAEALIACAHIABAFQACAHgBAEIAAABIgBADIgBACIgCADIgCAAIgBAAIgCgBgAAEgxIgBgBIACAAIACAAIAAACIABABIgEgCg");
	this.shape.setTransform(32.5,26.4);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(32,26.8,1.074,0.817,0,0,28.9,4.5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(50));

	// usta 2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(35.7,60.8,1,1,0,0,0,5.5,6.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:5.6,x:35.8},0).wait(17).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(2).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(2).to({alpha:1},0).wait(4).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(3).to({alpha:1},0).wait(2).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(15));

	// USTA 8
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(35.9,61.3,1,1,0,0,0,10.8,8.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:8.4,y:61.4},0).wait(12).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(3).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(3).to({alpha:1},0).wait(3).to({alpha:0},0).wait(26));

	// usta 3
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(36.6,60,1,1,0,0,0,2.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:2.5,x:36.5},0).wait(12).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(14).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(2).to({alpha:0},0).wait(3).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(15));

	// nos
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(34.3,49.6,1,1,0,0,0,6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({x:35.2,y:49.4},0).wait(1).to({x:36,y:49.3},0).wait(1).to({x:36.9,y:49.1},0).wait(1).to({x:36.1},0).wait(1).to({x:35.2},0).wait(1).to({x:34.4},0).wait(1).to({x:33.6},0).wait(1).to({x:32.8},0).wait(1).to({x:33.3,y:49.3},0).wait(1).to({x:33.8,y:49.4},0).wait(1).to({x:34.3,y:49.6},0).wait(15));

	// hlava rage
	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(33.7,51.1,1,1,0,0,0,26.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:50.8},0).wait(1).to({y:50.6},0).wait(1).to({y:50.4},0).wait(1).to({y:50.2},0).wait(1).to({y:50},0).wait(1).to({y:49.8},0).wait(1).to({y:49.5},0).wait(1).to({x:33.9,y:49.3},0).wait(1).to({x:34.1,y:49.1},0).wait(1).to({x:34.3,y:48.9},0).wait(1).to({x:34.6,y:48.8},0).wait(1).to({x:34.7,y:49},0).wait(1).to({x:35,y:49.1},0).wait(1).to({x:35.2,y:49.2},0).wait(1).to({x:35.5,y:49.3},0).wait(1).to({x:34.9,y:49.9},0).wait(1).to({x:34.3,y:50.6},0).wait(1).to({x:33.7,y:51},0).wait(1).to({x:33.5,y:50.5},0).wait(1).to({x:33.3,y:50.1},0).wait(1).to({x:33.1,y:49.6},0).wait(1).to({x:32.9,y:49.1},0).wait(1).to({x:32.7,y:48.7},0).wait(1).to({x:32.4,y:48.2},0).wait(1).to({x:32.2,y:47.8},0).wait(1).to({x:32.3,y:47.5},0).wait(1).to({y:47.2},0).wait(1).to({x:32.4,y:47},0).wait(1).to({y:47.1},0).wait(1).to({y:47.2},0).wait(1).to({x:32.2,y:47.8},0).wait(1).to({x:32.3,y:47.9},0).wait(1).to({x:32.4,y:48.1},0).wait(1).to({x:32.5,y:48.2},0).wait(1).to({x:32.6,y:48.4},0).wait(1).to({x:32.7,y:48.5},0).wait(1).to({x:32.8,y:48.7},0).wait(1).to({x:32.9,y:48.8},0).wait(1).to({x:33,y:49},0).wait(1).to({x:33.1,y:49.2},0).wait(1).to({x:33.2,y:49.3},0).wait(1).to({x:33.3,y:49.5},0).wait(1).to({x:33.4,y:49.6},0).wait(1).to({x:33.5,y:49.8},0).wait(1).to({y:50},0).wait(1).to({x:33.6,y:50.1},0).wait(1).to({x:33.7,y:50.3},0).wait(1).to({x:33.8,y:50.5},0).wait(1).to({y:50.7},0).wait(1));

	// viecko
	this.instance_7 = new lib.Symbol12();
	this.instance_7.setTransform(34.6,42.9,1,1,0,0,0,20.3,10.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:34.5},0).wait(1).to({x:34.4},0).wait(1).to({x:34.3},0).wait(1).to({x:34.2},0).wait(1).to({x:34.1},0).wait(1).to({x:34},0).wait(1).to({x:33.9},0).wait(1).to({x:33.8},0).wait(1).to({x:33.7},0).wait(1).to({x:33.6},0).wait(1).to({x:33.5},0).wait(1).to({x:33.4},0).wait(1).to({x:33.3},0).wait(1).to({x:33.2},0).wait(1).to({x:33.1},0).wait(1).to({x:33},0).wait(1).to({x:32.9},0).wait(1).to({x:32.8},0).wait(1).to({x:32.7},0).wait(1).to({x:32.6},0).wait(1).to({x:32.5},0).wait(1).to({x:32.4},0).wait(1).to({x:32.3},0).wait(1).to({x:32.2},0).wait(1).to({x:32.1},0).wait(1).to({x:32},0).wait(1).to({x:31.9},0).wait(1).to({x:31.8},0).wait(1).to({x:31.7},0).wait(1).to({x:31.6},0).wait(1).to({x:31.5},0).wait(1).to({x:31.4,alpha:1},0).wait(1).to({alpha:0},0).wait(17));

	// oko vnutro
	this.instance_8 = new lib.Symbol14();
	this.instance_8.setTransform(32.8,40.2,1,1,0,0,0,14.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:6.6,y:40.3},0).wait(13).to({x:33.1,y:40.7},0).wait(1).to({x:33.5,y:41},0).wait(1).to({x:34,y:41.4},0).wait(1).to({x:34.6,y:41.5},0).wait(1).to({x:35.5,y:41.9},0).wait(1).to({x:36,y:42.8},0).wait(1).to({x:35.2},0).wait(1).to({x:34.2},0).wait(1).to({x:32.7},0).wait(1).to({x:32.2},0).wait(1).to({x:32,y:42.4},0).wait(1).to({x:32.5,y:41.3},0).wait(1).to({x:32.8,y:40.3},0).wait(1).to({x:34.8,y:38.4},0).wait(8).to({x:34.6,y:38.5},0).wait(1).to({x:34.4,y:38.6},0).wait(1).to({x:34.3,y:38.8},0).wait(1).to({x:34.1,y:38.9},0).wait(1).to({x:34,y:39},0).wait(1).to({x:33.8,y:39.1},0).wait(1).to({x:33.7,y:39.3},0).wait(1).to({x:33.5,y:39.4},0).wait(1).to({x:33.3,y:39.5},0).wait(1).to({x:33.2,y:39.6},0).wait(1).to({x:33,y:39.8},0).wait(1).to({x:32.9,y:39.9},0).wait(1).to({x:32.7,y:40},0).wait(1).to({x:32.6,y:40.1},0).wait(1).to({x:32.4,y:40.3},0).wait(1));

	// oko vonk
	this.instance_9 = new lib.Symbol13();
	this.instance_9.setTransform(36.2,41.1,1,1,0,0,0,20.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// bielko
	this.instance_10 = new lib.Symbol15();
	this.instance_10.setTransform(34.1,44.6,1,1,0,0,0,20.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:11.3,y:44.7},0).wait(22).to({x:33.6,y:44.2},0).wait(1).to({x:33.2,y:43.7},0).wait(1).to({x:32.7,y:43.3},0).wait(1).to({x:32.3,y:42.8},0).wait(1).to({x:31.8,y:42.3},0).wait(1).to({x:31.4,y:41.9},0).wait(1).to({x:31.6,y:42.1},0).wait(1).to({x:31.9,y:42.4},0).wait(1).to({x:32.1,y:42.6},0).wait(1).to({x:32.4,y:42.9},0).wait(1).to({x:32.6,y:43.1},0).wait(1).to({x:32.8,y:43.4},0).wait(1).to({x:33.1,y:43.6},0).wait(1).to({x:33.4,y:43.9},0).wait(1).to({x:33.6,y:44.1},0).wait(1).to({x:33.9,y:44.4},0).wait(1).to({x:34.1,y:44.7},0).wait(11));

	// boty
	this.instance_11 = new lib.Symbol16();
	this.instance_11.setTransform(33.2,104.8,1,1,0,0,0,5.5,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:5.6,regY:4.3,x:33.3,y:104.9},0).wait(12).to({y:101.6},0).wait(1).to({y:98.4},0).wait(1).to({y:100},0).wait(1).to({y:101.6},0).wait(1).to({y:103.2},0).wait(1).to({y:104.9},0).wait(1).to({y:104},0).wait(1).to({y:103.2},0).wait(1).to({y:102.4},0).wait(1).to({y:101.6},0).wait(1).to({y:102.7},0).wait(1).to({y:103.8},0).wait(1).to({y:104.9},0).wait(25));

	// ruka
	this.instance_12 = new lib.Symbol17();
	this.instance_12.setTransform(17.5,74.1,1,1,0,0,0,3.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:9.5,regY:8.5,x:23.7,y:79.3},0).wait(1).to({x:23.6,y:79.2},0).wait(1).to({y:79.1},0).wait(1).to({x:23.5,y:79},0).wait(1).to({x:23.4,y:78.9},0).wait(1).to({y:78.8},0).wait(1).to({x:23.3,y:78.7},0).wait(1).to({y:78.6},0).wait(1).to({y:78.4},0).wait(1).to({rotation:0.1,x:23.6,y:78.5},0).wait(1).to({rotation:4.5,x:23.5,y:78.9},0).wait(1).to({rotation:14.6,x:22.7,y:79.7},0).wait(1).to({rotation:36.3,x:20.2,y:80.7},0).wait(1).to({rotation:64.2,x:16.5,y:80.4},0).wait(1).to({rotation:84.1,x:14.2,y:78.9},0).wait(1).to({rotation:97.9,x:13,y:77.4},0).wait(1).to({rotation:106.4,x:12.2,y:76.3},0).wait(1).to({rotation:109.7,x:12,y:75.9},0).wait(1).to({rotation:108.7,x:12.1},0).wait(1).to({rotation:103.6,x:12.5,y:76.5},0).wait(1).to({rotation:93.9,x:13.4,y:77.5},0).wait(1).to({rotation:78.2,x:15.3,y:78.7},0).wait(1).to({rotation:53.4,x:18.7,y:79.5},0).wait(1).to({rotation:36.1,x:21.2,y:79.3},0).wait(1).to({rotation:27.2,x:22.4,y:78.8},0).wait(1).to({rotation:21,x:23.1,y:78.5},0).wait(1).to({rotation:16.5,x:23.7,y:78.3},0).wait(1).to({rotation:12.9,x:24,y:78.1},0).wait(1).to({rotation:10.2,x:24.3,y:77.9},0).wait(1).to({rotation:8.1,x:24.5,y:77.8},0).wait(1).to({rotation:6.5,x:24.6,y:77.7},0).wait(1).to({rotation:5.4,x:24.7},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:4.5,y:77.8},0).wait(1).to({rotation:4.2,y:77.9},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:3.6,y:78},0).wait(1).to({rotation:3.3},0).wait(1).to({rotation:3,y:78.1},0).wait(1).to({rotation:2.7,x:24.6,y:78.2},0).wait(1).to({rotation:2.4,x:24.5,y:78.3},0).wait(1).to({rotation:2.1,x:24.4,y:78.4},0).wait(1).to({rotation:1.8,x:24.3,y:78.6},0).wait(1).to({rotation:1.5,y:78.7},0).wait(1).to({rotation:1.2,x:24.1,y:78.8},0).wait(1).to({rotation:0.9,x:24,y:79},0).wait(1).to({rotation:0.6,y:79.1},0).wait(1).to({rotation:0.3,x:23.9,y:79.2},0).wait(1).to({rotation:0,x:23.8,y:79.4},0).wait(1));

	// oblecko
	this.instance_13 = new lib.Symbol18();
	this.instance_13.setTransform(33,82.8,1,1,0,0,0,24.1,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({x:32.9,y:82.7},0).wait(1).to({y:82.6},0).wait(1).to({y:82.5},0).wait(1).to({y:82.4},0).wait(1).to({x:33,y:82.3},0).wait(1).to({y:82.2},0).wait(1).to({y:82.1},0).wait(1).to({y:82},0).wait(1).to({y:81.9},0).wait(1).to({y:81.8},0).wait(2).to({y:81.7},0).wait(1).to({x:33.1,y:81.6},0).wait(1).to({y:81.5},0).wait(1).to({y:81.4},0).wait(1).to({y:81.3},0).wait(1).to({y:81.2},0).wait(1).to({y:81.1},0).wait(2).to({y:81},0).wait(1).to({y:80.9},0).wait(1).to({y:80.8},0).wait(1).to({y:80.7},0).wait(1).to({y:80.6},0).wait(1).to({y:80.7},0).wait(1).to({y:80.8},0).wait(1).to({y:80.9},0).wait(2).to({y:81},0).wait(1).to({y:81.1},0).wait(1).to({y:81.2},0).wait(1).to({y:81.3},0).wait(1).to({y:81.4},0).wait(1).to({y:81.5},0).wait(1).to({y:81.6},0).wait(1).to({x:33},0).wait(1).to({y:81.7},0).wait(1).to({y:81.8},0).wait(1).to({y:81.9},0).wait(1).to({y:82},0).wait(1).to({y:82.1},0).wait(2).to({y:82.2},0).wait(1).to({y:82.3},0).wait(1).to({y:82.4},0).wait(1).to({y:82.5},0).wait(1).to({y:82.6},0).wait(1).to({x:32.9,y:82.7},0).wait(1).to({y:82.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,68.2,57.5,100.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;