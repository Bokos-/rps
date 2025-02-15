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
		{src:"postavicka p (png)/hlava1.png", id:"hlava1"},
		{src:"postavicka p (png)/kapuca111.png", id:"kapuca111"},
		{src:"postavicka p (png)/nos.png", id:"nos"},
		{src:"postavicka p (png)/okovnutro.png", id:"okovnutro"},
		{src:"postavicka p (png)/okovonk.png", id:"okovonk"},
		{src:"postavicka p (png)/ruka.png", id:"ruka"},
		{src:"postavicka p (png)/USTA5.png", id:"USTA5"},
		{src:"postavicka p (png)/usta1.png", id:"usta1"},
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


(lib.hlava1 = function() {
	this.initialize(img.hlava1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,134);


(lib.kapuca111 = function() {
	this.initialize(img.kapuca111);
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


(lib.USTA5 = function() {
	this.initialize(img.USTA5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.usta1 = function() {
	this.initialize(img.usta1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,28);


(lib.viecko = function() {
	this.initialize(img.viecko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,71);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usta1();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.4,8.6);


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
	this.instance = new lib.kapuca111();
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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlava1();
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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.USTA5();
	this.instance.setTransform(0,0,0.317,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,8.3);


// stage content:
(lib.postvickaanimaciaemocia1RED = function(mode,startPosition,loop) {
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

	// USTA 5
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(35.6,58.5,1,1,0,0,0,4.2,4.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:4.3,x:35.7},0).wait(17).to({alpha:1},0).wait(20).to({alpha:0},0).wait(12));

	// usta1
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(34.2,57.2,1,1,0,0,0,6.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:4.3,y:57.3},0).wait(16).to({alpha:0.5},0).wait(1).to({x:36.5,alpha:0},0).wait(10).to({x:36.6},0).wait(10).to({x:36.7},0).wait(1).to({x:34.2,alpha:1},0).wait(11));

	// nos
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(34.3,49.6,1,1,0,0,0,6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({x:34.7,y:49.2},0).wait(1).to({x:35.2,y:48.9},0).wait(1).to({x:35.6,y:48.5},0).wait(1).to({x:35.8,y:48.4},0).wait(21).to({x:35.7},0).wait(1).to({x:35.2,y:48.8},0).wait(1).to({x:34.6,y:49.3},0).wait(1).to({x:34.3,y:49.6},0).wait(8));

	// hlava1
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(33.7,50.2,1,1,0,0,0,26.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// viecko
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(33.9,45.1,1,1,0,0,0,20.3,10.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({x:33.8},0).wait(4).to({x:33.7},0).wait(2).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({x:33.6,alpha:0.5},0).wait(1).to({alpha:0},0).wait(5).to({x:33.7},0).wait(6).to({alpha:1},0).wait(1).to({x:33.6,alpha:0},0).wait(26));

	// oko vnutro
	this.instance_7 = new lib.Symbol14();
	this.instance_7.setTransform(32.8,40.2,1,1,0,0,0,14.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:6.6},0).wait(15).to({x:35,y:41.5},0).wait(1).to({x:37.2,y:42.8},0).wait(1).to({x:37.1},0).wait(1).to({x:37,y:42.9},0).wait(1).to({x:36.9},0).wait(1).to({x:36.8,y:43},0).wait(1).to({x:36.7},0).wait(1).to({x:36.6},0).wait(1).to({x:36.5,y:43.1},0).wait(1).to({x:36.4},0).wait(1).to({x:36.3},0).wait(1).to({x:36.2,y:43.2},0).wait(1).to({x:36.1},0).wait(1).to({x:36,y:43.3},0).wait(1).to({x:35.9},0).wait(1).to({x:35.8},0).wait(1).to({x:35.7,y:43.4},0).wait(1).to({x:35.6},0).wait(1).to({x:35.5},0).wait(1).to({x:35.4,y:43.5},0).wait(1).to({x:35.3},0).wait(1).to({x:35.2,y:43.6},0).wait(1).to({x:34,y:41.9},0).wait(1).to({x:32.8,y:40.3},0).wait(11));

	// oko vonk
	this.instance_8 = new lib.Symbol13();
	this.instance_8.setTransform(36.2,41.1,1,1,0,0,0,20.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// bielko
	this.instance_9 = new lib.Symbol15();
	this.instance_9.setTransform(33.5,45.5,1,1,0,0,0,20.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:11.3,y:45.6},0).wait(49));

	// boty
	this.instance_10 = new lib.Symbol16();
	this.instance_10.setTransform(33.2,104.8,1,1,0,0,0,5.5,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:5.6,regY:4.3,x:33.3,y:104.9},0).wait(49));

	// ruka
	this.instance_11 = new lib.Symbol17();
	this.instance_11.setTransform(23.8,79.4,1,1,0,0,0,9.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({y:79.3},0).wait(1).to({y:79.2},0).wait(1).to({y:79.1},0).wait(1).to({y:79},0).wait(2).to({y:78.9},0).wait(1).to({y:78.8},0).wait(1).to({y:78.7},0).wait(1).to({y:78.6},0).wait(2).to({y:78.5},0).wait(1).to({y:78.4},0).wait(1).to({y:78.3},0).wait(2).to({y:78.2},0).wait(1).to({y:78.1},0).wait(2).to({y:78},0).wait(1).to({y:77.9},0).wait(1).to({y:77.8},0).wait(2).to({y:77.7},0).wait(1).to({y:77.6},0).wait(3).to({y:77.7},0).wait(1).to({y:77.8},0).wait(2).to({y:77.9},0).wait(1).to({y:78},0).wait(1).to({y:78.1},0).wait(2).to({y:78.2},0).wait(1).to({y:78.3},0).wait(1).to({y:78.4},0).wait(2).to({y:78.5},0).wait(1).to({y:78.6},0).wait(1).to({y:78.7},0).wait(2).to({y:78.8},0).wait(1).to({y:78.9},0).wait(1).to({y:79},0).wait(2).to({y:79.1},0).wait(1).to({y:79.2},0).wait(1).to({y:79.3},0).wait(2).to({y:79.4},0).wait(1));

	// oblecko
	this.instance_12 = new lib.Symbol18();
	this.instance_12.setTransform(33,82.8,1,1,0,0,0,24.1,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:32.9,y:82.7},0).wait(1).to({y:82.6},0).wait(1).to({y:82.5},0).wait(1).to({y:82.4},0).wait(1).to({x:33,y:82.3},0).wait(1).to({y:82.2},0).wait(1).to({y:82.1},0).wait(1).to({y:82},0).wait(1).to({y:81.9},0).wait(1).to({y:81.8},0).wait(2).to({y:81.7},0).wait(1).to({x:33.1,y:81.6},0).wait(1).to({y:81.5},0).wait(1).to({y:81.4},0).wait(1).to({y:81.3},0).wait(1).to({y:81.2},0).wait(1).to({y:81.1},0).wait(2).to({y:81},0).wait(1).to({y:80.9},0).wait(1).to({y:80.8},0).wait(1).to({y:80.7},0).wait(1).to({y:80.6},0).wait(1).to({y:80.7},0).wait(1).to({y:80.8},0).wait(1).to({y:80.9},0).wait(2).to({y:81},0).wait(1).to({y:81.1},0).wait(1).to({y:81.2},0).wait(1).to({y:81.3},0).wait(1).to({y:81.4},0).wait(1).to({y:81.5},0).wait(1).to({y:81.6},0).wait(1).to({x:33},0).wait(1).to({y:81.7},0).wait(1).to({y:81.8},0).wait(1).to({y:81.9},0).wait(1).to({y:82},0).wait(1).to({y:82.1},0).wait(2).to({y:82.2},0).wait(1).to({y:82.3},0).wait(1).to({y:82.4},0).wait(1).to({y:82.5},0).wait(1).to({y:82.6},0).wait(1).to({x:32.9,y:82.7},0).wait(1).to({y:82.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,68.2,57.5,100.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;