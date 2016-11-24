(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 395,
	height: 331,
	fps: 24,
	color: "#332626",
	webfonts: {},
	manifest: [
		{src:"dedulo (png)/batoh.png", id:"batoh"},
		{src:"dedulo (png)/boty.png", id:"boty"},
		{src:"dedulo (png)/bradasnosom.png", id:"bradasnosom"},
		{src:"dedulo (png)/dd_0003_okoprave.png", id:"dd_0003_okoprave"},
		{src:"dedulo (png)/dd_0004_hlava.png", id:"dd_0004_hlava"},
		{src:"dedulo (png)/dd_0005_Layer4.png", id:"dd_0005_Layer4"},
		{src:"dedulo (png)/dd_0006_Layer3.png", id:"dd_0006_Layer3"},
		{src:"dedulo (png)/dd_0009_Layer1copy.png", id:"dd_0009_Layer1copy"},
		{src:"dedulo (png)/kabat.png", id:"kabat"},
		{src:"dedulo (png)/kapuca.png", id:"kapuca"},
		{src:"dedulo (png)/palec.png", id:"palec"},
		{src:"dedulo (png)/prsiplast.png", id:"prsiplast"},
		{src:"dedulo (png)/prsiplastzadok.png", id:"prsiplastzadok"},
		{src:"dedulo (png)/ruka.png", id:"ruka"},
		{src:"dedulo (png)/rukavelka.png", id:"rukavelka"},
		{src:"dedulo (png)/sal.png", id:"sal"},
		{src:"dedulo (png)/stafka.png", id:"stafka"},
		{src:"dedulo (png)/tien.png", id:"tien"},
		{src:"dedulo (png)/vraska.png", id:"vraska"}
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



(lib.batoh = function() {
	this.initialize(img.batoh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,333);


(lib.boty = function() {
	this.initialize(img.boty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,101);


(lib.bradasnosom = function() {
	this.initialize(img.bradasnosom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,624);


(lib.dd_0003_okoprave = function() {
	this.initialize(img.dd_0003_okoprave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,145);


(lib.dd_0004_hlava = function() {
	this.initialize(img.dd_0004_hlava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,399);


(lib.dd_0005_Layer4 = function() {
	this.initialize(img.dd_0005_Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,129);


(lib.dd_0006_Layer3 = function() {
	this.initialize(img.dd_0006_Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,125);


(lib.dd_0009_Layer1copy = function() {
	this.initialize(img.dd_0009_Layer1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,182);


(lib.kabat = function() {
	this.initialize(img.kabat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,502);


(lib.kapuca = function() {
	this.initialize(img.kapuca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,343);


(lib.palec = function() {
	this.initialize(img.palec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,83);


(lib.prsiplast = function() {
	this.initialize(img.prsiplast);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,745,563);


(lib.prsiplastzadok = function() {
	this.initialize(img.prsiplastzadok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,424);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,131);


(lib.rukavelka = function() {
	this.initialize(img.rukavelka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,213);


(lib.sal = function() {
	this.initialize(img.sal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,280);


(lib.stafka = function() {
	this.initialize(img.stafka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,1080);


(lib.tien = function() {
	this.initialize(img.tien);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1299,681);


(lib.vraska = function() {
	this.initialize(img.vraska);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,51);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("Ai3B5QgFgDgBgGQgBgGADgDQAEgEAEABIABgBQAGABACAFIACADIgBAFQgCAFgCACQgCACgDAAIgFgBgAjnBcQgIgDgDgEQgDgEgBgGQgBgCABgDIAAgDIACgEQAHgLALAAIABAAIgBAAQAGAAAGAFIAFAEIACAGIABAKIgEAHIgEAEIgFADQgDABgEAAgAgvBJQgCgBgCgDQgCgDAAgDQAAgDACgEIACgCQACgCADABIABgBIAIACIAEAFQABADAAADIgDAGIgDADIgFABQgDAAgDgCgACNAlIgEgDIgBgFIAAgGQABgEACgCIAFgBIACgBQAFAAACAFQADADAAAGIgCAFQgCACgDABIgDABgAiIAkQgEgBgDgEIgBgGIAAgIQACgGAHAAIABAAQAIAAADAIQAEAFgDAFIgGAFIgCACIgCABIgEgBgADtgyQgFAAgDgEIgCgHIABgFIABgCQACgDACgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIAAAAIABAAQAGAAACAEQACAEgBAGQgCAGgEACgAC3hoQgCgDAAgEQAAgDABgDIACgCQADgCAEABIAAgBQAFABACACQAEAEgBAEIgDAFQgCADgCAAIgEABQgFgBgCgCg");
	this.shape.setTransform(24.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.7,24.6);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AmUGVQiniogBjtQABjsCnioQCoinDsgBQDtABCoCnQCnCoAADsQAADtinCoQioCnjtAAQjsAAioing");
	this.shape.setTransform(57.3,57.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.6,114.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B0FDF9").ss(18,1,1).p("Aq2GaQAAgDBjgiQAzgSAlgNQAxgSAYgKQAMgFAHgdQAJgoAGgWQAXhaA7gTQAdgJCIgZQBfgSAQgWQAYgiAAg/QgBgaAEgKQAHgQASgFQCfgTCPgpQEUhPBriX");
	this.shape.setTransform(-7.6,-21.9,1,1,0,0,0,-35.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-44.9,157,100);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkBICYAAAAAAgFAAgJYgBgEAAgGAAgHYAAgGABgHAAgJYABgQACgUAEgWYABgFABgGABgGYABgGABgGACgGYABgGACgHABgGYABgDABgDABgEIABgCIAAgBYAAAAgBADABgCIAAAAIAAgBIACgFYAEgOAEgOAFgPYAFgNAGgOAGgOYACgGAEgHADgHYAEgHAEgHADgHYACgEACgEACgDYACgDACgEACgDYAEgHAFgHAEgHYASgcAVgbAXgbYAKgNAOgMAMgNYAMgNAOgLANgNIAKgHIAFgEIAGgFIATgTYAOgMAPgOAOgOYAOgNANgOANgNYANgPANgNAMgOYAYgcAVgeATgcYATgdAQgcANgbYANgbAIgbAHgXYADgMADgLACgKYABgLABgJABgJYACgRgBgOAAgJYgBgJAAgFAAAAIAAAAYAAAAgCAFgDAIYgBAEgCAGgCAGYgDAGgDAHgDAHYgDAIgFAIgEAJYgFAIgFAJgFAKYgMATgOAVgRAWYgQAWgUAXgVAXYgWAXgXAYgZAYYgMAMgNAMgNAMYgOAMgNAMgMAMYgOAMgNALgPANIgVASYgCACgCABgCACIgFAFIgMAKYgOANgQANgNAQYgHAHgHAIgHAHYgDACgEADgDAEIgJAMYgZAggWAigRAiYgEAJgEAIgEAJYgCAEgCAEgCAFYgCAEgBAEgCAFYgDAIgDAJgDAJYgDAIgDAIgCAKYgEARgEARgDARYgBAPgCAPgBAOIAAAGIgBABIAAAAYABgBgBADAAAAIAAABIAAACYAAAEAAAEAAADYAAAHgBAHABAHYAAAHABAHAAAGYAAAHABAGAAAGYADAYAEAVAFARYABAEACAEABAEYABADABAEACADYACAGACAFACAEYAEAJACAEAAAAIAAAA");
	this.shape.setTransform(27.1,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArEJYAAAAgEgBgHgBYgGgCgKgCgMgDYgKgDgNgEgQgGYgEgCgEgBgEgCYgEgCgEgCgEgCYgEgCgFgCgEgCYgBAAgCgBAAAAIgDgCYgCgBgDgBgCgBYgQgJgRgMgMgPYgFgHgFgIgDgIYgDgIgCgJAAgKYgBgTAEgVAJgYYAHgWAMgWANgVYAbgoAmgmAlghYARgRATgPATgPYAJgHAKgHAJgHYAJgHAIgHAJgFYARgMAOgMAPgJYAHgFAHgEAGgFYAGgEAFgEAGgDYAKgGAIgGAGgEYAGgEADgCAAAAIAAAAYAAAAgEABgHABYgGABgKABgNADYgMACgPAFgRAFYgRAFgSAHgVAJYgVAIgTAKgXALYgUAMgXAOgXAQYgtAfguApgiA1YgRAagOAbgJAfYgIAdgGAiAGAhYADARAFAQAIAPYAJAOAKAMAMAKYAXAUAZAKAWAGYADABADAAACABIAEABYACABABAAABAAYAGABAFABAFABYAFAAAFABAFABYAFAAAEAAAFABYAEAAAFAAAEAAYAEABAEAAAEgBYAIAAAHAAAFgBYAGAAAFgBAFgBYAFgBAEgBADgBYAHgBAEgBAAAAIAAAA");
	this.shape_1.setTransform(39.9,108.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,64.4,135.8);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(23.8,1,1).p("EhyAADUQEtgxExgsQJjhYAaAZQAZAYFpAYQDEANFcASQBTAFDBgiQBtgTEQg6QINhvB8AOQBQAJBSAoQAwAWBXA6QBTA3ArATQBFAgBAgEQA6gEBGgxQApgdBjhIQDciKFmATQEGAODCBIQAvARBLAbQA8AUA3gBQBYgCFEhmQFQhtBdgIQFDgdCUBoQBJA0AJA4ID5hVQEJhYBfAAQDWAABeAmQAcALA1AbQA4AZBDASQCEAiBqgnQAfgLBAgbQA9gYA7gLQCLgYIjAqQIWApEDAzQBxAVBQgVQA7gRA6gwQAggbA+g0QA6goBDgFQCFgIIzBvQBVARJrCBQBJAQAugbQAUgMA0g3QAvg0AxgWQBKggB2AIQDDAODHBWQB+A1AUAHQBSAeBLAJQBNAJAfgbQATgQAMgtQAMguATgPQAggZBMANQBDAKEWAoQFpAxCaAXQERAqA4AR");
	this.shape.setTransform(729.7,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-11.9,1483.2,66.2);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2DpQgCgJgFgKIgLgRIgOgdIgNgeIgJgVQgFgMgCgJQgCgJAAgSQAAgRgCgJIgEgRIgEgRQgBgSgBgKIgIghQgDgOAAgUIAAgiIAAgnQACgVAKgNIAMgNQAGgIgCgHQAIAAAJgHIAPgMQAIgGAKABIAAgCQBJgDAzAcQATALANAOQASAQAKAVQALAWAEAgIAEAyQACA0gEAUIgGAaQgDASABAQIACAnQACAYgDAPQgBAMgGAXQgFAUAEAOIgvAQQgcAHgWACIgLAAQgkAAgigPg");
	this.shape.setTransform(14.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,49.8);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dd_0005_Layer4();
	this.instance.setTransform(45,0,0.352,0.397);

	this.instance_1 = new lib.dd_0006_Layer3();
	this.instance_1.setTransform(0,3.6,0.315,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,51.3);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dd_0004_hlava();
	this.instance.setTransform(0,0,0.28,0.334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.8,133.1);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dd_0009_Layer1copy();
	this.instance.setTransform(0,3.2,0.268,0.278);

	this.instance_1 = new lib.dd_0009_Layer1copy();
	this.instance_1.setTransform(48.2,0,0.237,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.4,53.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dd_0003_okoprave();
	this.instance.setTransform(0,0,0.25,0.29);

	this.instance_1 = new lib.dd_0003_okoprave();
	this.instance_1.setTransform(39.3,0,0.25,0.29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.6,42.1);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tien();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1299,681);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ruka();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,131);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stafka();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,680,1080);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.palec();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,83);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384,280);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.batoh();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,333);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prsiplastzadok();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,424);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kabat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,516,502);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kapuca();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,343);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rukavelka();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,213);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prsiplast();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,745,563);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vraska();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,51);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bradasnosom();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,519,624);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boty();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,101);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(73.4,66.5,1,1,0,0,0,73.4,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.8,133.1);


// stage content:
(lib.dedobeta2red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ziara
	this.instance = new lib.Symbol34();
	this.instance.setTransform(125.7,192.2,1,1,0,0,0,57.3,57.3);
	this.instance.alpha = 0.012;
	this.instance.filters = [new cjs.BlurFilter(66, 66, 1), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-93, -16, 100, 171))];
	this.instance.cache(-2,-2,119,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:125.3,y:190,alpha:0.026},0).wait(1).to({x:125,y:187.7,alpha:0.045},0).wait(1).to({x:124.6,y:185.5,alpha:0.068},0).wait(1).to({x:124.3,y:183.2,alpha:0.097},0).wait(1).to({x:123.9,y:181,alpha:0.131},0).wait(1).to({x:123.6,y:178.7,alpha:0.171},0).wait(1).to({x:123.2,y:176.5,alpha:0.218},0).wait(1).to({x:122.9,y:174.2,alpha:0.274},0).wait(1).to({x:122.5,y:172,alpha:0.341},0).wait(1).to({x:122.2,y:169.8,alpha:0.423},0).wait(1).to({x:121.8,y:167.5,alpha:0.529},0).wait(1).to({x:121.5,y:165.3,alpha:0.625},0).wait(1).to({x:121.1,y:163,alpha:0.688},0).wait(1).to({x:120.8,y:160.8,alpha:0.732},0).wait(1).to({x:120.4,y:158.5,alpha:0.762},0).wait(1).to({x:120.1,y:156.3,alpha:0.783},0).wait(1).to({x:119.7,y:154,alpha:0.795},0).wait(1).to({x:119.4,y:151.8,alpha:0.798},0).wait(1).to({x:119.2,y:152.8,alpha:0.807},0).wait(1).to({x:119,y:153.8,alpha:0.799},0).wait(1).to({x:118.9,y:154.7,alpha:0.781},0).wait(1).to({x:118.7,y:155.7,alpha:0.755},0).wait(1).to({x:118.6,y:156.7,alpha:0.724},0).wait(1).to({x:118.4,y:157.7,alpha:0.688},0).wait(1).to({x:118.3,y:158.7,alpha:0.647},0).wait(1).to({x:118.1,y:159.7,alpha:0.603},0).wait(1).to({x:117.9,y:160.6,alpha:0.555},0).wait(1).to({x:117.8,y:161.6,alpha:0.504},0).wait(1).to({x:117.6,y:162.6,alpha:0.45},0).wait(1).to({x:117.5,y:163.6,alpha:0.4},0).wait(1).to({x:117.3,y:164.6,alpha:0.357},0).wait(1).to({x:117.2,y:165.6,alpha:0.32},0).wait(1).to({x:117,y:166.5,alpha:0.287},0).wait(1).to({x:116.8,y:167.5,alpha:0.258},0).wait(1).to({x:116.7,y:168.5,alpha:0.232},0).wait(1).to({x:116.5,y:169.5,alpha:0.208},0).wait(1).to({x:116.4,y:170.5,alpha:0.186},0).wait(1).to({x:116.2,y:171.5,alpha:0.165},0).wait(1).to({x:116.1,y:172.4,alpha:0.147},0).wait(1).to({x:115.9,y:173.4,alpha:0.13},0).wait(1).to({x:115.7,y:174.4,alpha:0.114},0).wait(1).to({x:115.6,y:175.4,alpha:0.099},0).wait(1).to({x:115.4,y:176.4,alpha:0.086},0).wait(1).to({x:115.3,y:177.4,alpha:0.073},0).wait(1).to({x:115.1,y:178.3,alpha:0.062},0).wait(1).to({x:115,y:179.3,alpha:0.051},0).wait(1).to({x:114.8,y:180.3,alpha:0.041},0).wait(1).to({x:114.6,y:181.3,alpha:0.032},0).wait(1).to({x:114.5,y:182.3,alpha:0.024},0).wait(1).to({x:114.3,y:183.3,alpha:0.017},0).wait(1).to({x:114.2,y:184.2,alpha:0.01},0).wait(1).to({x:114,y:185.2,alpha:0.004},0).wait(1).to({x:113.9,y:186.2,alpha:0},0).wait(7));

	// vlas
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(186.4,277.3,0.115,0.132,0,0,0,39.1,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:39,regY:50.5,y:278.3},0).wait(1).to({x:186.3,y:279.2},0).wait(1).to({y:280.1},0).wait(1).to({y:280.9},0).wait(1).to({y:281.6},0).wait(1).to({x:186.2,y:281.7},0).wait(17).to({x:186.3,y:281.6},0).wait(1).to({y:280.9},0).wait(1).to({y:280.1},0).wait(1).to({y:279.2},0).wait(1).to({x:186.4,y:278.3},0).wait(1).to({y:277.2},0).wait(1).to({y:278},0).wait(1).to({y:278.6},0).wait(1).to({x:186.3,y:279.1},0).wait(1).to({y:279.5},0).wait(1).to({y:279.7},0).wait(1).to({y:279.9},0).wait(1).to({y:280},0).wait(1).to({y:279.9},0).wait(1).to({y:279.7},0).wait(1).to({y:279.5},0).wait(1).to({y:279.1},0).wait(1).to({x:186.4,y:278.6},0).wait(1).to({y:278},0).wait(1).to({y:277.2},0).wait(1).to({y:277.6},0).wait(1).to({y:277.9},0).wait(1).to({y:278.1},0).wait(1).to({y:278.2},0).wait(2).to({y:278.1},0).wait(1).to({y:277.9},0).wait(1).to({y:277.6},0).wait(1).to({y:277.2},0).wait(1).to({y:277.4},0).wait(1).to({y:277.5},0).wait(1).to({y:277.6},0).wait(2).to({y:277.5},0).wait(1).to({y:277.4},0).wait(1).to({y:277.2},0).wait(2));

	// sparkles
	this.instance_2 = new lib.Symbol35();
	this.instance_2.setTransform(129.5,153.2,1,1,0,0,0,24.8,12.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:12.3,x:135.6,y:150.5,alpha:0.042},0).wait(1).to({x:142.5,y:148.1,alpha:0.086},0).wait(1).to({x:149.6,y:146.1,alpha:0.132},0).wait(1).to({x:156.8,y:144.3,alpha:0.18},0).wait(1).to({x:162.7,y:142.7,alpha:0.23},0).wait(1).to({x:164.2,y:141.3,alpha:0.282},0).wait(1).to({x:165.6,y:140.2,alpha:0.336},0).wait(1).to({x:167,y:139.2,alpha:0.393},0).wait(1).to({x:168.4,y:138.6,alpha:0.453},0).wait(1).to({x:169.8,alpha:0.517},0).wait(1).to({x:171.1,y:138.5,alpha:0.586},0).wait(1).to({x:172.3,alpha:0.662},0).wait(1).to({x:173.6,y:138.4,alpha:0.734},0).wait(1).to({x:174.8,alpha:0.794},0).wait(1).to({x:175.9,y:138.3,alpha:0.844},0).wait(1).to({x:177.1,alpha:0.886},0).wait(1).to({x:178.2,alpha:0.921},0).wait(1).to({x:179.2,alpha:0.949},0).wait(1).to({x:180.3,y:138.2,alpha:0.972},0).wait(1).to({x:181.3,alpha:0.989},0).wait(1).to({x:182.3,alpha:1},0).wait(1).to({x:183.2,alpha:0.983},0).wait(1).to({x:184.1,alpha:0.961},0).wait(1).to({x:185,alpha:0.935},0).wait(1).to({x:185.9,alpha:0.903},0).wait(1).to({x:186.8,y:138.1,alpha:0.867},0).wait(1).to({x:187.6,alpha:0.826},0).wait(1).to({x:188.4,y:138.2,alpha:0.778},0).wait(1).to({x:189.2,alpha:0.722},0).wait(1).to({x:189.9,alpha:0.657},0).wait(1).to({x:190.6,alpha:0.58},0).wait(1).to({x:191.4,alpha:0.486},0).wait(1).to({x:192,alpha:0.367},0).wait(1).to({x:192.7,alpha:0.277},0).wait(1).to({x:193.4,y:138.3,alpha:0.222},0).wait(1).to({x:194,alpha:0.182},0).wait(1).to({x:194.6,y:138.4,alpha:0.15},0).wait(1).to({x:195.2,alpha:0.124},0).wait(1).to({x:195.8,alpha:0.102},0).wait(1).to({x:196.4,y:138.5,alpha:0.083},0).wait(1).to({x:196.9,alpha:0.067},0).wait(1).to({x:197.5,y:138.6,alpha:0.053},0).wait(1).to({x:198,y:138.7,alpha:0.041},0).wait(1).to({x:198.5,alpha:0.03},0).wait(1).to({x:199,y:138.8,alpha:0.021},0).wait(1).to({x:199.5,y:138.9,alpha:0.014},0).wait(1).to({x:200,y:139,alpha:0.008},0).wait(1).to({x:200.5,y:139.1,alpha:0.003},0).wait(1).to({x:200.9,y:139.2,alpha:0},0).wait(1).to({x:201.4,y:139.3},0).wait(1).to({x:201.8,y:139.4},0).wait(1).to({x:202.3,y:139.5},0).wait(1).to({x:202.7,y:139.6},0).wait(1).to({x:203.2,y:139.8},0).wait(1).to({x:203.6,y:139.9},0).wait(1).to({y:140},0).wait(1).to({y:140.2},0).wait(3));

	// brada s nosom
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(206.5,249.3,0.115,0.132,0,0,0,259.4,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:259.5,x:206.8,y:248.7},0).wait(1).to({x:207.1,y:248.2},0).wait(1).to({x:207.4,y:247.6},0).wait(1).to({x:207.7,y:247.1},0).wait(1).to({x:208,y:246.5},0).wait(1).to({x:208.3,y:246},0).wait(1).to({x:207.9,y:246.7},0).wait(1).to({x:207.4,y:247.3},0).wait(1).to({x:206.9,y:248},0).wait(1).to({x:206.5,y:248.7},0).wait(1).to({x:206,y:249.3},0).wait(1).to({x:205.1,y:249.5},0).wait(1).to({x:204.1,y:249.6},0).wait(1).to({x:203.2,y:249.8},0).wait(1).to({x:202.3,y:249.9},0).wait(1).to({x:203.3,y:249.8},0).wait(1).to({x:204.3,y:249.7},0).wait(1).to({x:205.3,y:249.6},0).wait(1).to({x:206.3,y:249.4},0).wait(1).to({x:207.3,y:249.3},0).wait(1).to({x:208.3,y:249.2},0).wait(1).to({x:207.9,y:249.5},0).wait(1).to({x:207.5,y:249.8},0).wait(1).to({x:207.1,y:250.1},0).wait(1).to({x:206.7,y:250.4},0).wait(1).to({x:206.3,y:250.7},0).wait(1).to({x:205.9,y:251},0).wait(1).to({x:205.5,y:251.3},0).wait(1).to({x:205.1,y:251.6},0).wait(1).to({x:204.7,y:251.9},0).wait(30));

	// vraska
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(186.5,196.2,0.115,0.132,0,0,0,77.7,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:78,regY:25.5,x:186,y:194.8},0).wait(1).to({y:195.3},0).wait(1).to({x:186.9,y:194.4},0).wait(1).to({x:186.8,y:194.6},0).wait(1).to({x:186.5,y:194.9},0).wait(1).to({x:186.3,y:195.2},0).wait(1).to({x:186.2,y:195.5},0).wait(7).to({x:186.1},0).wait(7).to({x:186.2},0).wait(14).to({y:195.2},0).wait(1).to({y:195.3},0).wait(1).to({y:195.1},0).wait(1).to({y:195.2},0).wait(1).to({x:186.1},0).wait(1).to({y:195.3},0).wait(1).to({x:186.2,y:195.2},0).wait(1).to({x:186.1,y:195.3},0).wait(1).to({y:195.5},0).wait(1).to({y:195.3},0).wait(1).to({y:194.9},0).wait(2).to({y:194.8},0).wait(2).to({x:186.2,y:194.7},0).wait(1).to({y:194.6},0).wait(1).to({y:194.5},0).wait(2).to({y:194.4},0).wait(1).to({x:186.3,y:194.3},0).wait(1).to({y:194.1},0).wait(1).to({y:194},0).wait(1).to({x:186.4,y:193.9},0).wait(1).to({y:193.8},0).wait(1).to({x:186.5,y:193.6},0).wait(1));

	// Layer 42
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQANQgFgCgBgFQAAgEACgCQAUgHAXgGQgJAHgHAGQgIALgFACIgFABIgFgBg");
	this.shape.setTransform(184.6,168.8,0.394,0.389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABAAFQgKgEgTAAIg0ABQgXAAgLgCQgTgCgLgKIgBgCQAugCAqADQAcABAfAFIADADIAHAEIAEAEIAEAKIAAACIgTgLg");
	this.shape_1.setTransform(193.6,168.2,0.394,0.389);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAJQgDgBgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgFIABgBQAEgEADAAIAAgBQAEABADACQAEADgCAFQgDAFgFABIgBAAIgBAAg");
	this.shape_2.setTransform(194.2,168.4,0.394,0.389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0CYQgHgCgGgOQgJAJgMADQgNADgIgHQgIgIACgNQACgLAIgKIAQgRQAJgLADgJIgWAJQgPAGgIgEQgJgEAAgMQAAgKAFgLQAJgRAPgSIAdgdIhLAiQgIAEgEgBQgHgBAAgJQgBgGADgIQgFgDgBgHQgCgHADgGQAEgJAPgHQAmgXAugHQAKgCAGACQAKAEgCAJQAGADAQgFQAGgCAGAAQAGABABAFQABAEgBAHQgEASgOARQgJAMgTAQQgJAKgJADQgNAGgIgKQgQAOgFAVQAZAAAZgWQAPgMAYgbQAZgbAtgfQAYgQAQgFQAWgHASAIIABAEQADANAEAKIgDAEIABAAIADgBQAEAJAFAGQAJAKABAEQABAFAAAKQABAGAHAJIABAFIgSANQgvAfgTASQgUASgTAcQgTABgQANQgNAKgEABQgGABgFgDQgGgEABgGQgEACgLANQgIAJgGAAIgDAAgAhdB9IABACQAEABAEgDIAVgPIgCgDIgCgEIgCgKIgBAAIgBABIAAAAgAAhAOIgSALIgcAhQAHAAAIgHQAJgIAKgMQAOgRADgCIgCAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABgAgzgPIAAABIgLALQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBIACgCQAHgHAAgCgAAhgSIgJAIQAEgBACgCIAIgGIgBgBIgEACgAh4guIABABQgJAFgHADQgJAEgBAEIABABIASgLQAJgGAFgBgAiZg/QgDgEgBgEQAAgGAGgKQAXgiAWgaIAfgEQgNALgMAQQgLAOgaAqQgFAHgEAAIgCAAQgDAAgCgCg");
	this.shape_3.setTransform(192,173.6,0.394,0.389);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBcQgSgDgJAAQgKAAgDgBQgKgCAAgIQgNAFgPABQgJAAgDgCQgFgFABgHQADgQAVgNIARgJQAKgFAFgGQgSAGgWAOQgXAOgKAEQgSAIgQgEQgQgFgIgBQgGgBgJACIgPACQgIAAgGgEQgIgFAAgHQABgFAFgGIAKgKIAJgMIAIgLQAKgPAhgSQAsgZAXgKQAmgRAfgEIABAAQAPgFAOAHIAJAFIAQADQANACADAMQAGgBAIABIAPACQAMACAHADQAFACAJAGIALAGQAKAFADAMQADALgDALIgDAFIgCACQgvAfgTASQgNALgMAQIgIAEQgYAKgSAAIgCAAgABgAIIAAAAQgfASggAWIgFAEQAAABAAABQgBAAAAABQAAAAABABQAAABAAAAQAIAAAOgGIAlgUQAOgJAFgEQgHgHAAgFgACIgFQgFABgFADIAAABQADABAFgBIAHgEIgDgBgABiggQALAAAIgGIAAAAgAA9g6IAOgCIgRgBIAAACIAAAAQABAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAg");
	this.shape_4.setTransform(190.9,174.3,0.394,0.389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQDMQgIgZACgbQACgQgBgJQAAgJgEgNIgIgUQgRgtgCg4QgBgqAIhBQAGgmAFgOQAKgcAUgPIABABQAFADAQABQAGABAEAGQADAGgEAEQgDAEgJgCQgLgCgEABQgDACgEAHQgMAWgFAqQgIBCAAAlQABA4ATArQAKhBAQglQAKgUAMAAQAKABAFAMQACAGgBAOIgGAkIgLAxQgHAmgJATQgEAJgFADQgGAGgFgFQgEAYAGAWQAEAKAAAFQAAAKgFACIgCAAQgJAAgFgPgAAegHIAAABIgJAbQgIAZgCAJIgIA8QAEgDACgJIADgYIAHghIAJgiQADgOAAgGIgBABg");
	this.shape_5.setTransform(186.8,181.7,0.394,0.389);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUCpQgbgDgNgMQgJgJgHgRQgehKANhQQACgMgEgFQgCgDgHgBQgIgCgCgCQgGgFABgJQABgGAFgJIAXgpQAMgVAIgJQAOgPAQAAIAAgCQAdABAWAKQAOAGAHAHQAKALgDAMQgCAGgGAHQgFAJgGADQgFACgKgCQgPgEgOgJQAAAEgEADIgJAFQgDACgDAHIgUAfIgHAMQgDAGgBANQgFAzAEAeQAEAbAOAmQAIAWALAFIAPACQAIAAAGAEQACADABAEQAAAEgCADQgDACgFAAIgEAAgAAJiKQACAEAEABIAFACIAHAGQAEADAIADQAJADAEgCIADgDQADgEAAgDQgBgDgGgEIgQgGQgQgHgKACQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBAAQADAEgCADg");
	this.shape_6.setTransform(186.1,177.3,0.394,0.389);

	this.instance_5 = new lib.Symbol27();
	this.instance_5.setTransform(185.7,183.1,0.394,0.389,0,0,0,14.3,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghCMQgFgBgBgCQgDgDABgDQAAgFADgCIACgBIAAgBQgCgDABgEIABgHIAAgBIAAgDIABgGQgDAAgBgDQgCgCABgEIgHACQgHACgEgDQgBgFAGgHIALgOQgGAAgGgCIAAgCQgGACgGgDIAAgFQALgGAHgKIgDgGQAFgCAEgGQAEgGgBgGIAAgEIAAgDQgEgBgCgDQgDgCABgEQAAgFADgDIgBAAIgGgBQgFgCgDgEIgIADQAAABAAAAQAAABAAAAQAAABAAAAQgBABgBAAIgEABQgEABgGgCIAAgFQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIADgBIARgDIgEgDIgDgDIgBAAIgFgBQgIgCgEgEIgBAAIgDACQgLAJgGAOIgCAGIAAAEIgBAGQgBAEgDACIABADIAAAFIgBAFIAAACIABAJIACAIIADAJQABAEgCADIACADQAFAKgCAGIgCAFIADAHIADAFIAEACQACABACADIAAAHIgCADIACAEQABAFgFADQgFAEgEgDQgEgBgEgIIgJgUIgMgcQgGgQgDgQQgJgnAKgtIgBgEQAAgGACgFIAEgJIABgCIAKgNQAKgLAPgJQAggVAlgEIAAgBIADABQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIABgBIAOABIABgBIADABIABgBIADAAIADACIACgCQAGABAIADQAHAAANAGIAFADIAEAEIADACIABgBIADACQANAKAPAHQANAFAVAEQAQACAOAAQAFAGAAAHIgBAEQgiANghAQQgPAGgLAIQgVAQgKAXQgLAQgNAYQgIAQgCAIQgGARACAQIACAHQgEAMgFAJQgDAFgDACQgCACgDAAIgBgBg");
	this.shape_7.setTransform(193,177.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_5},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// hlava normal
	this.instance_6 = new lib.Symbol24();
	this.instance_6.setTransform(188.5,215.1,0.394,0.389,0,0,0,73.5,66.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:73.4,x:188.4,y:215.2},0).wait(1).to({y:215.3},0).wait(1).to({y:215.4},0).wait(1).to({y:215.5},0).wait(1).to({y:215.7},0).wait(1).to({y:215.8},0).wait(1).to({y:215.9},0).wait(1).to({y:216},0).wait(1).to({y:216.1},0).wait(1).to({y:216.2},0).wait(1).to({y:216.3},0).wait(1).to({y:216.4},0).wait(1).to({y:216.6},0).wait(1).to({y:216.7},0).wait(1).to({y:216.8},0).wait(1).to({y:216.9},0).wait(1).to({y:217},0).wait(1).to({y:217.1},0).wait(1).to({y:217.2},0).wait(1).to({y:217.3},0).wait(1).to({y:217.4},0).wait(1).to({y:217.6},0).wait(1).to({y:217.7},0).wait(1).to({y:217.8},0).wait(1).to({y:217.9},0).wait(1).to({y:218},0).wait(1).to({y:218.1},0).wait(1).to({y:218.2},0).wait(1).to({y:218.3},0).wait(1).to({y:218.5},0).wait(1).to({y:218.3},0).wait(1).to({y:218.2},0).wait(1).to({y:218.1},0).wait(1).to({y:218},0).wait(1).to({y:217.9},0).wait(1).to({y:217.8},0).wait(1).to({y:217.6},0).wait(1).to({y:217.5},0).wait(1).to({y:217.4},0).wait(1).to({y:217.3},0).wait(1).to({y:217.2},0).wait(1).to({y:217.1},0).wait(1).to({y:216.9},0).wait(1).to({y:216.8},0).wait(1).to({y:216.7},0).wait(1).to({y:216.6},0).wait(1).to({y:216.5},0).wait(1).to({y:216.4},0).wait(1).to({y:216.3},0).wait(1).to({y:216.1},0).wait(1).to({y:216},0).wait(1).to({y:215.9},0).wait(1).to({y:215.8},0).wait(1).to({y:215.7},0).wait(1).to({y:215.6},0).wait(1).to({y:215.4},0).wait(1).to({y:215.3},0).wait(1).to({y:215.2},0).wait(1).to({y:215.1},0).wait(1));

	// viecka
	this.instance_7 = new lib.Symbol25();
	this.instance_7.setTransform(189.1,206.1,0.394,0.389,0,0,0,50.6,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:50.5,regY:25.6,x:189},0).wait(2).to({x:189.2,y:212.1},0).wait(1).to({x:189.1},0).wait(1).to({y:212.2},0).wait(1).to({x:189,y:212.3},0).wait(1).to({y:212.4},0).wait(1).to({x:188.9,y:212.5},0).wait(1).to({x:188.8,y:212.6},0).wait(1).to({y:212.7},0).wait(1).to({x:188.7,y:212.8},0).wait(1).to({x:188.6},0).wait(1).to({y:212.9},0).wait(1).to({x:188.5,y:213},0).wait(1).to({y:213.1},0).wait(1).to({x:188.4,y:213.2},0).wait(1).to({x:188.3,y:213.3},0).wait(1).to({y:213.4},0).wait(1).to({x:188.2,y:213.5},0).wait(1).to({x:188.1},0).wait(1).to({y:213.6},0).wait(1).to({x:188,y:213.7},0).wait(1).to({y:213.8},0).wait(1).to({x:187.9,y:213.9},0).wait(1).to({x:188.3,y:216.6},0).wait(1).to({x:188.8,y:219.4},0).wait(1).to({x:189.2,y:222.1},0).wait(1).to({x:189.3,y:209},0).wait(1).to({x:188.5},0).wait(1).to({x:187.8,y:209.1},0).wait(1).to({x:185.1,y:228.3},0).wait(15).to({x:187.8,y:207.1},0).wait(3).to({x:185.1,y:228.3},0).wait(11));

	// oko prave
	this.instance_8 = new lib.Symbol21();
	this.instance_8.setTransform(189,204.8,0.394,0.389,0,0,0,37.8,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:21,x:188.9,y:204.7},0).wait(1).to({x:188.8},0).wait(1).to({x:188.7},0).wait(1).to({x:188.6},0).wait(1).to({x:188.5},0).wait(2).to({x:188.4},0).wait(1).to({x:188.3},0).wait(1).to({x:186.2,y:199.7},0).wait(1).to({y:199.8},0).wait(1).to({y:200},0).wait(1).to({x:186.1,y:200.1},0).wait(1).to({y:200.2},0).wait(1).to({x:186,y:200.3},0).wait(1).to({y:200.5},0).wait(1).to({x:185.9,y:200.6},0).wait(1).to({y:200.7},0).wait(1).to({x:185.8,y:200.9},0).wait(1).to({y:201},0).wait(1).to({x:185.7,y:201.1},0).wait(1).to({y:201.2},0).wait(1).to({x:185.6,y:201.4},0).wait(1).to({y:201.5},0).wait(1).to({x:188.3,y:205.1},0).wait(7).to({y:205},0).wait(6).to({x:187.3,y:207.5},0).wait(1).to({x:186.4,y:210},0).wait(1).to({y:209.9},0).wait(1).to({x:186.3},0).wait(4).to({x:186.2},0).wait(2).to({y:209.8},0).wait(2).to({x:186.1},0).wait(4).to({x:186},0).wait(2).to({y:209.7},0).wait(2).to({x:185.9},0).wait(2).to({x:189.9,y:204.2},0).wait(2));

	// bielko
	this.instance_9 = new lib.Symbol22();
	this.instance_9.setTransform(187.9,205.4,0.394,0.389,0,0,0,46.8,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:46.7,regY:26.9,x:187.8,y:205.3},0).wait(59));

	// ruka velka
	this.instance_10 = new lib.Symbol11();
	this.instance_10.setTransform(158.7,220.5,0.115,0.132,0.6,0,0,128.9,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:128.5,regY:106.5,rotation:-3.2,x:159.1,y:228.2},0).wait(1).to({rotation:1,x:158.5,y:228.3},0).wait(1).to({rotation:9.6,x:157.3,y:228.2},0).wait(1).to({rotation:21.2,x:155.9,y:227.7},0).wait(1).to({rotation:35.2,x:154.2,y:226.9},0).wait(1).to({rotation:48.2,x:152.9,y:225.7},0).wait(1).to({rotation:58,x:152.1,y:224.6},0).wait(1).to({rotation:65.7,x:151.6,y:223.6},0).wait(1).to({rotation:71.9,x:151.3,y:222.9},0).wait(1).to({rotation:76.8,x:151.1,y:222.2},0).wait(1).to({rotation:80.6,x:151,y:221.7},0).wait(1).to({rotation:83.6,y:221.3},0).wait(1).to({rotation:85.8,y:221},0).wait(1).to({rotation:87.2,x:150.9,y:220.9},0).wait(1).to({rotation:87.8,y:220.8},0).wait(2).to({rotation:87.4},0).wait(1).to({rotation:86.5,y:220.9},0).wait(1).to({rotation:85.2,y:221.1},0).wait(1).to({rotation:83.4,x:151,y:221.3},0).wait(1).to({rotation:81.3,y:221.7},0).wait(1).to({rotation:78.6,x:151.1,y:222},0).wait(1).to({rotation:75.4,y:222.4},0).wait(1).to({rotation:71.5,x:151.3,y:222.9},0).wait(1).to({rotation:66.9,x:151.5,y:223.5},0).wait(1).to({rotation:61.3,x:151.9,y:224.2},0).wait(1).to({rotation:54.7,x:152.3,y:225},0).wait(1).to({rotation:46.6,x:153,y:225.8},0).wait(1).to({rotation:36.5,x:154,y:226.7},0).wait(1).to({rotation:25.6,x:155.3,y:227.5},0).wait(1).to({rotation:16,x:156.5,y:228},0).wait(1).to({rotation:7.8,x:157.6,y:228.2},0).wait(1).to({rotation:1.6,x:158.4,y:228.3},0).wait(1).to({rotation:-2,x:158.9},0).wait(1).to({rotation:-0.7,x:158.7},0).wait(25));

	// prsiplast
	this.instance_11 = new lib.Symbol10();
	this.instance_11.setTransform(195.2,239.9,0.115,0.132,0,0,0,371.8,281.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:372.5,regY:281.5,y:239.8},0).wait(2).to({y:239.7},0).wait(2).to({y:239.6},0).wait(2).to({y:239.5},0).wait(4).to({y:239.4},0).wait(5).to({y:239.3},0).wait(7).to({y:239.2},0).wait(15).to({y:239.3},0).wait(7).to({y:239.4},0).wait(5).to({y:239.5},0).wait(3).to({y:239.6},0).wait(2).to({y:239.7},0).wait(2).to({y:239.8},0).wait(1).to({y:239.9},0).wait(2));

	// kapuca
	this.instance_12 = new lib.Symbol12();
	this.instance_12.setTransform(187,200,0.115,0.132,0,0,0,191.8,171.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:191.5,regY:171.5,y:200.1},0).wait(1).to({y:200.2},0).wait(1).to({y:200.3},0).wait(1).to({x:187.1,y:200.4},0).wait(1).to({y:200.5},0).wait(2).to({y:200.6},0).wait(1).to({y:200.7},0).wait(2).to({x:187.2,y:200.8},0).wait(3).to({y:200.9},0).wait(3).to({y:201},0).wait(4).to({y:201.1},0).wait(2).to({x:187.3},0).wait(2).to({y:201.2},0).wait(5).to({y:201.3},0).wait(4).to({y:201.2},0).wait(4).to({y:201.1},0).wait(2).to({x:187.2},0).wait(2).to({y:201},0).wait(4).to({y:200.9},0).wait(3).to({y:200.8},0).wait(2).to({x:187.1,y:200.7},0).wait(2).to({y:200.6},0).wait(1).to({y:200.5},0).wait(2).to({y:200.4},0).wait(1).to({x:187,y:200.3},0).wait(1).to({y:200.2},0).wait(1).to({y:200},0).wait(1).to({x:186.9,y:199.9},0).wait(1));

	// kabat
	this.instance_13 = new lib.Symbol13();
	this.instance_13.setTransform(185.1,248,0.115,0.132,0,0,0,258.1,250.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:258,regY:251,y:247.8},0).wait(1).to({y:247.6},0).wait(1).to({y:247.4},0).wait(1).to({y:247.2},0).wait(1).to({y:247.1},0).wait(1).to({y:246.9},0).wait(1).to({y:246.8},0).wait(1).to({y:246.7},0).wait(1).to({y:246.6},0).wait(1).to({y:246.5},0).wait(2).to({y:246.4},0).wait(1).to({y:246.3},0).wait(2).to({y:246.2},0).wait(1).to({y:246.1},0).wait(2).to({y:246},0).wait(3).to({y:245.9},0).wait(2).to({y:245.8},0).wait(2).to({y:245.7},0).wait(2).to({y:245.6},0).wait(3).to({y:245.5},0).wait(2).to({y:245.6},0).wait(2).to({y:245.7},0).wait(2).to({y:245.8},0).wait(3).to({y:245.9},0).wait(2).to({y:246},0).wait(2).to({y:246.1},0).wait(1).to({y:246.2},0).wait(2).to({y:246.3},0).wait(2).to({y:246.4},0).wait(1).to({y:246.5},0).wait(1).to({y:246.6},0).wait(1).to({y:246.7},0).wait(1).to({y:246.8},0).wait(1).to({y:247},0).wait(1).to({y:247.1},0).wait(1).to({y:247.3},0).wait(1).to({y:247.4},0).wait(1).to({y:247.7},0).wait(1).to({y:247.9},0).wait(1).to({x:185,y:248},0).wait(1));

	// prsiplast zadok
	this.instance_14 = new lib.Symbol14();
	this.instance_14.setTransform(159.5,242.5,0.115,0.132,0,0,0,75.5,211.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:75,regY:212,x:159.4},0).wait(59));

	// batoh
	this.instance_15 = new lib.Symbol15();
	this.instance_15.setTransform(221.6,251,0.115,0.132,0,0,0,133.6,166.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:133.5,regY:166.5},0).wait(59));

	// sal
	this.instance_16 = new lib.Symbol16();
	this.instance_16.setTransform(208.3,215.3,0.115,0.132,0,0,0,44.7,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:192,regY:140,rotation:-0.9,x:225.5,y:224.5},0).wait(1).to({rotation:-1.9,x:225.6,y:224.3},0).wait(1).to({rotation:-2.8,x:225.7,y:224},0).wait(1).to({rotation:-3.7,x:225.9,y:223.7},0).wait(1).to({rotation:-4.7,x:226,y:223.4},0).wait(1).to({rotation:-5.6,x:226.1,y:223.1},0).wait(1).to({rotation:-6.5,x:226.3,y:222.8},0).wait(1).to({rotation:-7.5,x:226.4,y:222.5},0).wait(1).to({rotation:-8.4,x:226.5,y:222.2},0).wait(1).to({rotation:-9.3,x:226.6,y:221.9},0).wait(1).to({rotation:-10.3,x:226.7,y:221.6},0).wait(1).to({rotation:-11.2,x:226.8,y:221.3},0).wait(1).to({rotation:-12.1,x:226.9,y:221},0).wait(1).to({rotation:-13.1,x:227,y:220.7},0).wait(1).to({rotation:-14,y:220.4},0).wait(1).to({rotation:-14.9,x:227.2,y:220.1},0).wait(1).to({rotation:-15.9,y:219.8},0).wait(1).to({rotation:-16.8,x:227.3,y:219.5},0).wait(1).to({rotation:-17.7,x:227.4,y:219.2},0).wait(1).to({rotation:-17.3,y:219.3},0).wait(1).to({rotation:-16.9,x:227.3,y:219.5},0).wait(1).to({rotation:-16.4,y:219.6},0).wait(1).to({rotation:-16,y:219.8},0).wait(1).to({rotation:-15.5,x:227.2,y:220},0).wait(1).to({rotation:-15.1,x:227.1,y:220.1},0).wait(1).to({rotation:-14.6,y:220.2},0).wait(1).to({rotation:-14.2,y:220.3},0).wait(1).to({rotation:-13.8,y:220.5},0).wait(1).to({rotation:-13.3,x:227,y:220.6},0).wait(1).to({rotation:-12.9,x:226.9,y:220.8},0).wait(1).to({rotation:-12.4,y:221},0).wait(1).to({rotation:-12,y:221.1},0).wait(1).to({rotation:-11.5,y:221.3},0).wait(1).to({rotation:-11.1,x:226.8,y:221.4},0).wait(1).to({rotation:-10.6,x:226.7,y:221.5},0).wait(1).to({rotation:-10.2,y:221.7},0).wait(1).to({rotation:-9.8,y:221.8},0).wait(1).to({rotation:-9.3,x:226.6,y:221.9},0).wait(1).to({rotation:-8.9,x:226.5,y:222.1},0).wait(1).to({rotation:-8.4,y:222.2},0).wait(1).to({rotation:-8,x:226.4,y:222.4},0).wait(1).to({rotation:-7.5,y:222.5},0).wait(1).to({rotation:-7.1,x:226.3,y:222.6},0).wait(1).to({rotation:-6.7,y:222.8},0).wait(1).to({rotation:-6.2,x:226.2,y:222.9},0).wait(1).to({rotation:-5.8,x:226.1,y:223.1},0).wait(1).to({rotation:-5.3,y:223.2},0).wait(1).to({rotation:-4.9,x:226,y:223.3},0).wait(1).to({rotation:-4.4,y:223.5},0).wait(1).to({rotation:-4,x:225.9,y:223.6},0).wait(1).to({rotation:-3.5,y:223.8},0).wait(1).to({rotation:-3.1,x:225.8,y:223.9},0).wait(1).to({rotation:-2.7,x:225.7,y:224},0).wait(1).to({rotation:-2.2,x:225.6,y:224.2},0).wait(1).to({rotation:-1.8,x:225.5,y:224.3},0).wait(1).to({rotation:-1.3,y:224.4},0).wait(1).to({rotation:-0.9,y:224.5},0).wait(1).to({rotation:-0.4,x:225.4,y:224.7},0).wait(1).to({rotation:0,x:225.3,y:224.8},0).wait(1));

	// palec
	this.instance_17 = new lib.Symbol17();
	this.instance_17.setTransform(160.7,218.1,0.115,0.132,0.6,0,0,231.7,-156.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:38.5,regY:41.5,rotation:-3.2,x:139.9,y:245.4},0).wait(1).to({rotation:1,x:137.9,y:243.8},0).wait(1).to({rotation:9.6,x:134.4,y:240.1},0).wait(1).to({rotation:21.2,x:130.4,y:234.4},0).wait(1).to({rotation:35.2,x:127.4,y:226.5},0).wait(1).to({rotation:48.2,x:126.3,y:218.9},0).wait(1).to({rotation:58,x:126.7,y:213},0).wait(1).to({rotation:65.7,x:127.6,y:208.5},0).wait(1).to({rotation:71.9,x:128.9,y:205},0).wait(1).to({rotation:76.8,x:130.1,y:202.3},0).wait(1).to({rotation:80.6,x:131.2,y:200.4},0).wait(1).to({rotation:83.6,x:132.2,y:198.8},0).wait(1).to({rotation:85.8,x:132.9,y:197.8},0).wait(1).to({rotation:87.2,x:133.5,y:197.1},0).wait(1).to({rotation:87.8,x:133.7,y:196.8},0).wait(2).to({rotation:87.4,x:133.5,y:197},0).wait(1).to({rotation:86.5,x:133.2,y:197.5},0).wait(1).to({rotation:85.2,x:132.7,y:198},0).wait(1).to({rotation:83.4,x:132.1,y:198.9},0).wait(1).to({rotation:81.3,x:131.4,y:200},0).wait(1).to({rotation:78.6,x:130.7,y:201.4},0).wait(1).to({rotation:75.4,x:129.7,y:203.1},0).wait(1).to({rotation:71.5,x:128.8,y:205.2},0).wait(1).to({rotation:66.9,x:127.9,y:207.9},0).wait(1).to({rotation:61.3,x:127.1,y:211.1},0).wait(1).to({rotation:54.7,x:126.5,y:214.9},0).wait(1).to({rotation:46.6,x:126.3,y:219.8},0).wait(1).to({rotation:36.5,x:127.2,y:225.8},0).wait(1).to({rotation:25.6,x:129.3,y:232},0).wait(1).to({rotation:16,x:132,y:237},0).wait(1).to({rotation:7.8,x:135,y:240.9},0).wait(1).to({rotation:1.6,x:137.7,y:243.5},0).wait(1).to({rotation:-2,x:139.3,y:244.9},0).wait(1).to({rotation:-0.7,x:138.7,y:244.4},0).wait(25));

	// efekt
	this.instance_18 = new lib.Symbol30();
	this.instance_18.setTransform(125.7,163,0.394,0.389,0,0,0,30.6,67.1);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:30,regY:67.9,x:125.5,y:163.3},0).wait(59));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmOFDQABAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAAAQgUgdgNgkIAAAAIABgGIAAAAIAIgjIAAAAIABgGIAAAAIADgMIAAAAIAGAAIAAAAIABgFIAAAAQAfhRAzg2IAAAAIAFgBIAAAAQArgkAtgfIAAAAIAFgBIAAAAQCahDCQhOIAAAAIgCAGIAAAAQgrA0gzApIAAAAIAFAAIAAAAQAwgQAwgTIAAAAIACgEIAAAAQAXgTAZgRIAAAAIACgGIAAAAQBFh5BehZIAAAAIAGgBIAAAAQBGgTBFAOIAAAAIgGAAIAAAAQg9AKgwAZIAAAAIgDAAIAAAAQhzDxisClIAAAAIgGABIAAAAQhuAuhNBYIAAAAQgBAAAAABQAAABAAAAQAAAAABABQAAAAAAAAIAAAAQAgATAhgWIAAAAIAAgFIAAAAQgSgbA9gDIAAAAIgBAGIAAAAQgTBbhiBCIAAAAIgGABIAAAAQg0AQgsAAIAAAAQhGAAgygpgAmlDVIAAAAIAAAAIAAAAgAmlDVQAIAAAAgLIAAAAQAAALgIAAgAmmDVIAAAAIAAAAIAAAAgAmdDJIAAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AmPFDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAAAQgUgegMgkIAAAAIABgFIAAAAIAIgjIAAAAIABgGIAAAAIACgMIAAAAIAHAAIAAAAIABgGIAAAAQAfhQA0g2IAAAAIAFgBIAAAAQArgkAtgfIAAAAIAFgBIAAAAQCahDCRhNIAAAAIgDAFIAAAAQgrA0gzApIAAAAIAFAAIAAAAQAxgQAvgSIAAAAIACgFIAAAAQAXgTAZgRIAAAAIADgGIAAAAQBFh4BfhaIAAAAIAGgBIAAAAQBGgTBEAOIAAAAIgGABIAAAAQg9AJgwAZIAAAAIgDABIAAAAQh0DwisClIAAAAIgGABIAAAAQhvAuhOBYIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAIAAAAQAgASAhgVIAAAAIAAgFIAAAAQgSgbA9gDIAAAAIgBAFIAAAAQgUBbhiBDIAAAAIgGABIAAAAQg0AQgsAAIAAAAQhGAAgxgpgAmnDVIAAAAIAAAAIAAAAgAmmDVQAIgBAAgLIAAAAQAAALgIABgAmeDJIAAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AmRFDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAAAQgUgdgMgkIAAAAIACgGIAAAAIAHgiIAAAAIACgHIAAAAIACgLIAAAAIAHAAIAAAAIABgGIAAAAQAfhQA0g2IAAAAIAFgBIAAAAQAsgkAsgfIAAAAIAGgBIAAAAQCahDCRhNIAAAAIgCAFIAAAAQgsA0gzAqIAAAAIAFgBIAAAAQAxgPAvgTIAAAAIACgFIAAAAQAYgTAZgRIAAAAIACgGIAAAAQBGh4BfhaIAAAAIAGAAIAAAAQBGgUBFAPIAAAAIgGAAIAAAAQg9AJgxAZIAAAAIgDABIAAAAQh0DwiuClIAAAAIgGABIAAAAQhuAthPBYIAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAQAhASAggWIAAAAIAAgEIAAAAQgRgcA9gDIAAAAIgBAGIAAAAQgVBbhhBCIAAAAIgHABIAAAAQg0AQgsAAIAAAAQhGAAgxgogAmoDVIAAAAIAAAAIAAAAgAmnDVQAIgBAAgLIAAAAQAAALgIABgAmfDJIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AmTFCQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgTgdgMgkIAAAAIABgGIAAAAIAIgjIAAAAIACgGIAAAAIACgLIAAAAIAHAAIAAAAIABgGIAAAAQAfhQA1g2IAAAAIAFgBIAAAAQArgkAtgfIAAAAIAGgBIAAAAQCahDCShNIAAAAIgDAFIAAAAQgsA0gzAqIAAAAIAFgBIAAAAQAxgPAvgTIAAAAIADgFIAAAAQAXgTAZgRIAAAAIADgFIAAAAQBGh5BghZIAAAAIAGgBIAAAAQBGgTBEAOIAAAAIgGABIAAAAQg9AJgwAZIAAAAIgDAAIAAAAQh2DwivClIAAAAIgGABIAAAAQhuAthPBYIAAAAQgBABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAAAAQAgATAhgWIAAAAIAAgEIAAAAQgRgcA9gDIAAAAIgCAGIAAAAQgUBbhiBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgxgpgAmpDUIAAAAIAAAAIAAAAgAmpDUQAJAAAAgMIAAAAQAAAMgJAAgAmqDUIAAAAIAAAAIAAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AmVFCQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAIAAAAQgTgegMgjIAAAAIACgGIAAAAIAIgjIAAAAIABgGIAAAAIADgMIAAAAIAGAAIAAAAIACgFIAAAAQAghQA0g2IAAAAIAFgBIAAAAQAsgkAtgfIAAAAIAGgBIAAAAQCahDCShNIAAAAIgCAFIAAAAQgsA0g0AqIAAAAIAFgBIAAAAQAxgPAwgTIAAAAIACgFIAAAAQAXgSAZgSIAAAAIADgFIAAAAQBHh4BghaIAAAAIAGAAIAAAAQBHgUBEAOIAAAAIgGABIAAAAQg+AJgwAZIAAAAIgDABIAAAAQh3DwivCkIAAAAIgGABIAAAAQhvAthQBYIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIAAAAQAgASAhgVIAAAAIAAgFIAAAAQgRgbA9gDIAAAAIgCAGIAAAAQgVBahiBCIAAAAIgGACIAAAAQg1AQgsAAIAAAAQhGAAgxgpgAmqDUIAAAAIAAAAIAAAAgAmqDUQAJAAAAgMIAAAAQAAAMgJAAgAmrDUIAAAAIAAAAIAAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AmXFCQABgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAQgUgdgLgkIAAAAIABgFIAAAAIAJgjIAAAAIABgGIAAAAIADgMIAAAAIAGAAIAAAAIACgFIAAAAQAghQA1g2IAAAAIAFgBIAAAAQAsgkAtgfIAAAAIAFgBIAAAAQCchDCShNIAAAAIgDAFIAAAAQgsA0g0AqIAAAAIAGgBIAAAAQAwgPAwgTIAAAAIACgFIAAAAQAYgSAZgRIAAAAIACgGIAAAAQBIh4BghaIAAAAIAGAAIAAAAQBHgTBEAOIAAAAIgGAAIAAAAQg9AJgxAZIAAAAIgDABIAAAAQh4DwiwCkIAAAAIgGABIAAAAQhvAthQBYIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAQAgASAigVIAAAAIgBgFIAAAAQgQgbA8gDIAAAAIgBAGIAAAAQgVBahjBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgxgogAmsDUIAAAAIAAAAIAAAAgAmrDUQAIAAAAgMIAAAAQAAAMgIAAgAmsDUIAAAAIAAAAIAAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AmYFBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAAAQgTgdgMgkIAAAAIACgGIAAAAIAIgiIAAAAIACgHIAAAAIADgLIAAAAIAGAAIAAAAIABgGIAAAAQAhhPA1g2IAAAAIAFgBIAAAAQAsgkAugfIAAAAIAFgBIAAAAQCchDCShNIAAAAIgCAGIAAAAQgtAzg0AqIAAAAIAGgBIAAAAQAwgPAwgTIAAAAIACgEIAAAAQAYgTAZgRIAAAAIADgGIAAAAQBIh4BhhZIAAAAIAGgBIAAAAQBHgTBEAOIAAAAIgGABIAAAAQg+AJgxAZIAAAAIgDAAIAAAAQh5DwixCkIAAAAIgGABIAAAAQhvAthQBXIAAAAQAAABgBABQAAAAAAABQAAAAABAAQAAABAAAAIAAAAQAgASAhgWIAAAAIAAgEIAAAAQgRgbA9gDIAAAAIgBAFIAAAAQgWBbhjBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgwgpgAmtDUIAAAAIAAAAIAAAAgAmtDUIgBAAIAAAAIABAAgAmsDUQAIgBAAgLIAAAAQAAALgIABg");
	var mask_graphics_7 = new cjs.Graphics().p("AmaFBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIAAAAQgTgdgLgjIAAAAIABgGIAAAAIAJgjIAAAAIACgGIAAAAIACgLIAAAAIAHAAIAAAAIABgGIAAAAQAhhPA2g2IAAAAIAEgBIAAAAQAtgkAugfIAAAAIAFgBIAAAAQCchDCThMIAAAAIgDAFIAAAAQgtAzg0AqIAAAAIAGgBIAAAAQAwgPAwgTIAAAAIACgEIAAAAQAYgTAagRIAAAAIACgGIAAAAQBJh4BhhZIAAAAIAGAAIAAAAQBHgUBEAPIAAAAIgGAAIAAAAQg9AJgxAZIAAAAIgDABIAAAAQh7DvixCkIAAAAIgGABIAAAAQhwAthRBXIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIAAAAQAfATAigWIAAAAIAAgEIAAAAQgRgcA9gDIAAAAIgBAGIAAAAQgXBahjBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgwgogAmuDTIAAAAIAAAAIAAAAgAmuDTQAJAAAAgMIAAAAQAAAMgJAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AmcFBQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAIAAAAQgTgdgLgkIAAAAIACgFIAAAAIAJgjIAAAAIABgGIAAAAIADgLIAAAAIAHAAIAAAAIABgGIAAAAQAihQA1g1IAAAAIAFgCIAAAAQAtgjAtgfIAAAAIAGgBIAAAAQCchDCThMIAAAAIgCAFIAAAAQgtA0g1ApIAAAAIAGgBIAAAAQAwgPAwgTIAAAAIADgEIAAAAQAYgTAZgRIAAAAIADgGIAAAAQBJh3BihZIAAAAIAGgBIAAAAQBHgTBEAOIAAAAIgGABIAAAAQg+AJgxAZIAAAAIgDAAIAAAAQh8DviyCkIAAAAIgGABIAAAAQhwAshRBYIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAAAQAgASAigVIAAAAIAAgFIAAAAQgRgbA9gDIAAAAIgBAGIAAAAQgXBahkBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgwgogAmvDTIgBAAIAAAAIABAAgAmvDTQAJAAAAgMIAAAAQAAAMgJAAgAmwDTIAAAAIAAAAIAAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AmeFAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgTgdgLgkIAAAAIABgGIAAAAIAJgiIAAAAIACgGIAAAAIADgMIAAAAIAGAAIAAAAIACgFIAAAAQAihQA1g1IAAAAIAFgCIAAAAQAtgjAugfIAAAAIAGgBIAAAAQCchDCUhMIAAAAIgDAFIAAAAQgtA0g1ApIAAAAIAGgBIAAAAQAwgPAxgTIAAAAIACgEIAAAAQAYgTAagRIAAAAIACgFIAAAAQBKh4BihZIAAAAIAGAAIAAAAQBHgUBEAOIAAAAIgGABIAAAAQg9AJgyAZIAAAAIgDABIAAAAQh8Dui0CjIAAAAIgGACIAAAAQhwAshRBYIAAAAQAAAAAAABQgBAAAAABQABAAAAABQAAAAAAAAIAAAAQAgASAhgVIAAAAIAAgFIAAAAQgQgbA9gDIAAAAIgCAGIAAAAQgXBahkBBIAAAAIgGACIAAAAQg1AQgsAAIAAAAQhGAAgwgpgAmxDTIAAAAIAAAAIAAAAgAmwDTQAIAAABgMIAAAAQgBAMgIAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AmgFAQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAAAQgTgdgKgjIAAAAIABgGIAAAAIAJgiIAAAAIACgHIAAAAIADgLIAAAAIAGAAIAAAAIACgGIAAAAQAihPA2g2IAAAAIAFgBIAAAAQAtgjAugfIAAAAIAGgBIAAAAQCchCCUhNIAAAAIgCAFIAAAAQguA0g1ApIAAAAIAGAAIAAAAQAxgQAwgSIAAAAIACgFIAAAAQAYgTAagRIAAAAIADgFIAAAAQBKh4BjhYIAAAAIAGgBIAAAAQBHgTBDAOIAAAAIgGAAIAAAAQg9AKgxAYIAAAAIgDABIAAAAQh+Dui0CjIAAAAIgGABIAAAAQhwAthTBXIAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAfASAigWIAAAAIAAgEIAAAAQgQgbA9gDIAAAAIgCAFIAAAAQgXBahlBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgwgogAmyDTIAAAAIAAAAIAAAAgAmyDTQAJgBAAgLIAAAAQAAALgJABgAmyDTIgBAAIAAAAIABAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AmhE/QAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAAAQgTgdgKgkIAAAAIACgFIAAAAIAJgjIAAAAIACgGIAAAAIADgLIAAAAIAGAAIAAAAIACgGIAAAAQAihPA2g2IAAAAIAFgBIAAAAQAugjAugfIAAAAIAFgBIAAAAQCehCCUhNIAAAAIgDAGIAAAAQguAzg1ApIAAAAIAGAAIAAAAQAxgQAwgSIAAAAIACgFIAAAAQAZgSAZgRIAAAAIADgGIAAAAQBLh3BjhZIAAAAIAGgBIAAAAQBHgTBEAOIAAAAIgGABIAAAAQg+AJgxAZIAAAAIgDAAIAAAAQh/Dui1CjIAAAAIgGABIAAAAQhwAthTBXIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAgASAigVIAAAAIAAgFIAAAAQgQgbA9gCIAAAAIgCAFIAAAAQgYBahlBCIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgvgpgAmzDSIAAAAIAAAAIAAAAgAmzDSQAJAAAAgMIAAAAQAAAMgJAAgAm0DSIAAAAIAAAAIAAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AmjE/QAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIAAAAQgSgcgKgkIAAAAIABgGIAAAAIAKgiIAAAAIABgGIAAAAIADgLIAAAAIAHAAIAAAAIABgGIAAAAQAjhPA3g2IAAAAIAFgBIAAAAQAtgjAvgeIAAAAIAFgCIAAAAQCehCCUhMIAAAAIgCAFIAAAAQguAzg2ApIAAAAIAGAAIAAAAQAxgQAwgSIAAAAIADgFIAAAAQAYgSAagRIAAAAIACgGIAAAAQBMh3BjhZIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg9AJgyAZIAAAAIgDABIAAAAQiADti1CjIAAAAIgHABIAAAAQhwAthTBXIAAAAQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAAAIAAAAQAfASAigVIAAAAIAAgFIAAAAQgQgbA+gDIAAAAIgCAGIAAAAQgZBahlBBIAAAAIgGABIAAAAQg1AQgsAAIAAAAQhGAAgvgogAm1DSIAAAAIAAAAIAAAAgAm1DSIAAAAIAAAAIAAAAgAm0DSQAIAAABgLIAAAAQgBALgIAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AmlE/QAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAIAAAAQgSgdgKgjIAAAAIACgGIAAAAIAJgiIAAAAIACgGIAAAAIADgMIAAAAIAHAAIAAAAIABgFIAAAAQAkhPA2g2IAAAAIAFgBIAAAAQAugjAugeIAAAAIAGgCIAAAAQCehCCVhMIAAAAIgDAFIAAAAQguAzg2ApIAAAAIAGAAIAAAAQAxgPAwgTIAAAAIADgFIAAAAQAYgSAagRIAAAAIADgGIAAAAQBMh3BkhYIAAAAIAGgBIAAAAQBHgTBEAOIAAAAIgGABIAAAAQg+AJgxAZIAAAAIgEAAIAAAAQiBDti2CjIAAAAIgGABIAAAAQhxAthTBWIAAAAQgBABAAABQAAAAAAABQAAAAAAAAQABABAAAAIAAAAQAfASAigWIAAAAIAAgEIAAAAQgQgbA9gDIAAAAIgBAGIAAAAQgZBZhlBCIAAAAIgHABIAAAAQg1AQgsAAIAAAAQhGAAgvgogAm2DSIAAAAIAAAAIAAAAgAm2DSQAJAAABgMIAAAAQgBAMgJAAgAm2DSIgBAAIAAAAIABAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AmnE+QAAgBAAAAQABgBgBAAQAAgBAAAAQAAgBAAAAIAAAAQgSgdgKgkIAAAAIABgFIAAAAIAKgiIAAAAIACgHIAAAAIADgLIAAAAIAGAAIAAAAIACgGIAAAAQAkhOA3g2IAAAAIAFgBIAAAAQAugjAugeIAAAAIAGgCIAAAAQCehCCVhMIAAAAIgCAFIAAAAQgvAzg1ApIAAAAIAFAAIAAAAQAxgPAxgTIAAAAIACgEIAAAAQAZgTAagRIAAAAIACgFIAAAAQBNh3BkhZIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg9AJgyAZIAAAAIgDABIAAAAQiDDti3CiIAAAAIgGABIAAAAQhxAshUBXIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIAAAAQAfASAigWIAAAAIAAgEIAAAAQgQgbA9gDIAAAAIgBAFIAAAAQgaBahlBBIAAAAIgHABIAAAAQg1AQgsAAIAAAAQhGAAgvgogAm3DSIAAAAIAAAAIAAAAgAm3DSQAJgBAAgLIAAAAQAAALgJABgAm3DSIgBAAIAAAAIABAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AmpE+QABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAAAQgSgcgKgkIAAAAIACgGIAAAAIAKgiIAAAAIACgGIAAAAIADgLIAAAAIAGAAIAAAAIACgGIAAAAQAkhOA3g2IAAAAIAFgBIAAAAQAugjAvgeIAAAAIAGgCIAAAAQCehCCWhMIAAAAIgDAFIAAAAQgvAzg1ApIAAAAIAFAAIAAAAQAxgPAxgTIAAAAIACgEIAAAAQAZgTAagRIAAAAIADgFIAAAAQBNh3BlhYIAAAAIAGgBIAAAAQBHgTBEAOIAAAAIgGABIAAAAQg+AJgyAZIAAAAIgDAAIAAAAQiEDti3CiIAAAAIgHABIAAAAQhxAshUBXIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAAAQAfASAjgVIAAAAIAAgFIAAAAQgQgbA9gCIAAAAIgBAFIAAAAQgaBahmBBIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgvgogAm4DRIAAAAIAAAAIAAAAgAm4DRQAJAAAAgLIAAAAQAAALgJAAgAm5DRIAAAAIAAAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AmqE9QAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgSgdgJgjIAAAAIABgGIAAAAIALgiIAAAAIABgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgGIAAAAQAkhPA4g1IAAAAIAFgBIAAAAQAugjAvgeIAAAAIAFgCIAAAAQCfhCCWhMIAAAAIgCAGIAAAAQgvAzg2ApIAAAAIAFgBIAAAAQAxgPAxgTIAAAAIADgEIAAAAQAYgTAagRIAAAAIADgFIAAAAQBOh3BlhYIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg+AJgyAZIAAAAIgDABIAAAAQiEDsi5CiIAAAAIgGABIAAAAQhyAshUBXIAAAAQAAAAgBABQAAAAAAABQAAAAABAAQAAABAAAAIAAAAQAfASAigVIAAAAIAAgFIAAAAQgPgbA9gDIAAAAIgCAGIAAAAQgaBZhmBBIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgugogAm6DRIAAAAIAAAAIAAAAgAm5DRQAIAAABgMIAAAAQgBAMgIAAgAm6DRIAAAAIAAAAIAAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AmsE9QAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAAAQgRgcgKgkIAAAAIACgFIAAAAIAKgiIAAAAIACgHIAAAAIAEgLIAAAAIAGAAIAAAAIACgFIAAAAQAlhPA3g1IAAAAIAFgBIAAAAQAvgjAvgeIAAAAIAFgCIAAAAQCfhCCXhLIAAAAIgDAFIAAAAQgvAzg2ApIAAAAIAFgBIAAAAQAxgPAxgTIAAAAIADgEIAAAAQAZgSAagRIAAAAIADgGIAAAAQBOh2BmhYIAAAAIAGgBIAAAAQBHgTBEAOIAAAAIgGABIAAAAQg+AJgyAYIAAAAIgDABIAAAAQiGDsi6CiIAAAAIgGABIAAAAQhyAshVBWIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIAAAAQAeASAjgWIAAAAIAAgEIAAAAQgPgbA9gDIAAAAIgCAGIAAAAQgbBZhmBBIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgugogAm7DRIAAAAIAAAAIAAAAgAm7DRQAJAAABgMIAAAAQgBAMgJAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AmuE8QAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgSgdgJgjIAAAAIACgGIAAAAIAKgiIAAAAIACgGIAAAAIADgLIAAAAIAHAAIAAAAIACgGIAAAAQAlhOA4g1IAAAAIAFgBIAAAAQAugjAwgeIAAAAIAFgBIAAAAQCghDCWhLIAAAAIgCAFIAAAAQgwAzg2ApIAAAAIAFgBIAAAAQAygPAwgSIAAAAIADgFIAAAAQAZgSAagRIAAAAIADgGIAAAAQBPh2BmhYIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg+AJgyAZIAAAAIgDAAIAAAAQiHDsi6ChIAAAAIgHACIAAAAQhxAshWBWIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAfASAjgVIAAAAIAAgFIAAAAQgPgaA9gDIAAAAIgCAFIAAAAQgbBZhnBBIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgugogAm8DQIAAAAIAAAAIAAAAgAm8DQQAJAAABgLIAAAAQgBALgJAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AmwE8QABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAAAQgSgcgJgjIAAAAIACgGIAAAAIALgiIAAAAIACgGIAAAAIADgLIAAAAIAHAAIAAAAIABgGIAAAAQAmhOA4g1IAAAAIAFgBIAAAAQAvgjAvgeIAAAAIAGgBIAAAAQCghCCXhMIAAAAIgDAFIAAAAQgwAzg2ApIAAAAIAFgBIAAAAQAygPAxgSIAAAAIACgFIAAAAQAZgSAbgRIAAAAIACgFIAAAAQBQh2BmhYIAAAAIAGgBIAAAAQBIgTBEAOIAAAAIgHABIAAAAQg9AJgzAYIAAAAIgDABIAAAAQiIDri7ChIAAAAIgGABIAAAAQhyAthWBWIAAAAQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAAAIAAAAQAfASAigVIAAAAIABgFIAAAAQgPgbA9gDIAAAAIgCAGIAAAAQgcBZhnBBIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgugogAm9DQIAAAAIAAAAIAAAAgAm9DQQAIAAABgLIAAAAQgBALgIAAgAm+DQIAAAAIAAAAIAAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AmxE7QAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAAAQgRgdgJgjIAAAAIACgFIAAAAIALgiIAAAAIABgGIAAAAIAEgMIAAAAIAGAAIAAAAIACgFIAAAAQAmhOA5g1IAAAAIAFgBIAAAAQAvgjAvgeIAAAAIAGgBIAAAAQCghCCXhMIAAAAIgCAFIAAAAQgwAzg3ApIAAAAIAFgBIAAAAQAygPAxgSIAAAAIACgFIAAAAQAagSAagRIAAAAIADgFIAAAAQBQh2BnhYIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg+AJgyAZIAAAAIgEAAIAAAAQiJDri8ChIAAAAIgGABIAAAAQhyAshWBWIAAAAQgBABAAABQAAAAAAAAQAAABAAAAQAAAAABABIAAAAQAeARAjgVIAAAAIAAgEIAAAAQgPgbA+gDIAAAAIgCAGIAAAAQgcBZhoBAIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgtgogAm/DQIAAAAIAAAAIAAAAgAm+DQQAIAAABgMIAAAAQgBAMgIAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AmzE7QAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIAAAAQgRgcgIgjIAAAAIABgGIAAAAIALgiIAAAAIACgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgFIAAAAQAnhOA4g1IAAAAIAFgBIAAAAQAvgjAwgeIAAAAIAGgBIAAAAQCghCCYhLIAAAAIgDAFIAAAAQgwAyg3ApIAAAAIAFgBIAAAAQAygPAxgSIAAAAIADgEIAAAAQAZgTAagRIAAAAIADgFIAAAAQBRh2BnhXIAAAAIAGgBIAAAAQBIgTBDAOIAAAAIgGABIAAAAQg+AJgyAYIAAAAIgDABIAAAAQiLDqi8ChIAAAAIgHABIAAAAQhyAshXBWIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAfASAjgVIAAAAIAAgFIAAAAQgPgaA9gDIAAAAIgBAGIAAAAQgdBYhoBBIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgtgogAnADPIAAAAIAAAAIAAAAgAnADPQAJAAABgLIAAAAQgBALgJAAg");
	var mask_graphics_22 = new cjs.Graphics().p("Am1E6QAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgRgcgJgjIAAAAIACgGIAAAAIALgiIAAAAIACgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgGIAAAAQAnhOA5g0IAAAAIAFgCIAAAAQAvgiAwgeIAAAAIAFgBIAAAAQChhCCYhLIAAAAIgCAFIAAAAQgxAzg3AoIAAAAIAFAAIAAAAQAygPAxgTIAAAAIADgEIAAAAQAZgTAbgQIAAAAIADgGIAAAAQBRh1BohYIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg+AJgzAZIAAAAIgDAAIAAAAQiMDri9CgIAAAAIgGABIAAAAQhzAshXBWIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAQAfASAjgVIAAAAIAAgFIAAAAQgPgbA9gCIAAAAIgBAFIAAAAQgdBZhoBAIAAAAIgHABIAAAAQg2AQgsAAIAAAAQhGAAgtgogAnBDPIAAAAIAAAAIAAAAgAnBDPQAJAAABgMIAAAAQgBAMgJAAg");
	var mask_graphics_23 = new cjs.Graphics().p("Am3E6QAAgBABAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIAAAAQgRgcgIgjIAAAAIACgFIAAAAIALgiIAAAAIACgGIAAAAIAEgMIAAAAIAGAAIAAAAIACgFIAAAAQAnhOA5g1IAAAAIAFgBIAAAAQAwgiAwgeIAAAAIAFgBIAAAAQChhCCZhLIAAAAIgDAFIAAAAQgxAzg3AoIAAAAIAFAAIAAAAQAygPAxgTIAAAAIADgEIAAAAQAagSAagRIAAAAIADgGIAAAAQBSh1BohXIAAAAIAGgBIAAAAQBJgSBCANIAAAAIgGABIAAAAQg+AJgzAYIAAAAIgDABIAAAAQiMDqi/CgIAAAAIgGABIAAAAQhzAshXBVIAAAAQAAABgBABQAAAAAAAAQAAABAAAAQABAAAAABIAAAAQAeARAjgVIAAAAIABgEIAAAAQgPgbA9gDIAAAAIgCAGIAAAAQgdBYhoBBIAAAAIgHABIAAAAQg2APgsAAIAAAAQhGAAgtgngAnCDPIAAAAIAAAAIAAAAgAnCDPQAJAAABgMIAAAAQgBAMgJAAgAnDDPIAAAAIAAAAIAAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("Am5E5QABAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAAAQgRgcgIgjIAAAAIACgGIAAAAIAMgiIAAAAIACgGIAAAAIADgLIAAAAIAHAAIAAAAIACgFIAAAAQAnhOA6g1IAAAAIAFgBIAAAAQAvgiAwgeIAAAAIAGgBIAAAAQChhCCZhLIAAAAIgCAFIAAAAQgyAzg3AoIAAAAIAFAAIAAAAQAygPAygTIAAAAIACgEIAAAAQAagSAbgRIAAAAIADgFIAAAAQBSh1BphXIAAAAIAGgBIAAAAQBIgTBDAOIAAAAIgGABIAAAAQg+AIgzAZIAAAAIgDAAIAAAAQiODqi/CgIAAAAIgGABIAAAAQh0AshXBVIAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIAAAAQAeASAjgVIAAAAIAAgFIAAAAQgOgaA9gDIAAAAIgCAGIAAAAQgdBYhpBAIAAAAIgGABIAAAAQg3AQgsAAIAAAAQhGAAgtgogAnEDOIAAAAIAAAAIAAAAgAnDDOQAIAAACgLIAAAAQgCALgIAAg");
	var mask_graphics_25 = new cjs.Graphics().p("Am6E5QAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIAAAAQgQgcgIgjIAAAAIACgFIAAAAIALgiIAAAAIACgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgGIAAAAQAohNA5g1IAAAAIAFgBIAAAAQAwgiAwgeIAAAAIAGgBIAAAAQCihCCZhKIAAAAIgDAFIAAAAQgxAyg4AoIAAAAIAFAAIAAAAQAygPAygSIAAAAIADgFIAAAAQAZgSAbgRIAAAAIADgFIAAAAQBTh1BphXIAAAAIAGAAIAAAAQBJgTBCAOIAAAAIgGAAIAAAAQg+AJgzAYIAAAAIgDABIAAAAQiPDpjACgIAAAAIgGABIAAAAQhzArhZBWIAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAQAeASAkgVIAAAAIAAgFIAAAAQgOgaA9gDIAAAAIgCAFIAAAAQgeBYhpBBIAAAAIgGABIAAAAQg2APgtAAIAAAAQhGAAgsgngAnFDOIAAAAIAAAAIAAAAgAnFDOIAAAAIAAAAIAAAAgAnEDOQAIAAABgLIAAAAQgBALgIAAg");
	var mask_graphics_26 = new cjs.Graphics().p("Am8E4QAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgRgcgIgjIAAAAIACgGIAAAAIAMghIAAAAIACgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgGIAAAAQAphNA6g1IAAAAIAFgBIAAAAQAwgiAwgeIAAAAIAGgBIAAAAQCihBCZhLIAAAAIgCAFIAAAAQgyAyg4AoIAAAAIAFAAIAAAAQAygPAygSIAAAAIADgFIAAAAQAZgSAbgQIAAAAIADgGIAAAAQBUh1BphWIAAAAIAGgBIAAAAQBJgTBDAOIAAAAIgGABIAAAAQg/AJgzAYIAAAAIgDAAIAAAAQiQDpjBCfIAAAAIgGABIAAAAQhzAshZBVIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIAAAAQAeARAkgVIAAAAIAAgEIAAAAQgOgbA9gCIAAAAIgCAFIAAAAQgfBYhpBAIAAAAIgGABIAAAAQg2AQgtAAIAAAAQhGAAgsgogAnGDOIAAAAIAAAAIAAAAgAnGDOIgBAAIAAAAIABAAgAnGDOQAJgBABgLIAAAAQgBALgJABg");
	var mask_graphics_27 = new cjs.Graphics().p("Am+E4QAAgBABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAAAQgQgcgIgjIAAAAIACgFIAAAAIAMgiIAAAAIACgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgFIAAAAQAphNA6g1IAAAAIAFgBIAAAAQAwgiAxgeIAAAAIAGgBIAAAAQCihBCahLIAAAAIgDAFIAAAAQgyAyg4ApIAAAAIAGgBIAAAAQAygPAxgSIAAAAIADgEIAAAAQAagTAbgQIAAAAIADgGIAAAAQBUh0BqhXIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGAAIAAAAQg+AJg0AYIAAAAIgDABIAAAAQiRDojBCfIAAAAIgGABIAAAAQh0AshZBVIAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIAAAAQAeASAjgVIAAAAIABgFIAAAAQgOgaA9gDIAAAAIgCAGIAAAAQgfBXhqBAIAAAAIgGACIAAAAQg2APgsAAIAAAAQhHAAgsgngAnHDNIAAAAIAAAAIAAAAgAnHDNQAHAAACgIIAAAAQgCAIgHAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AnAE3QABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgQgcgHgjIAAAAIACgFIAAAAIAMgiIAAAAIACgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgGIAAAAQAphNA7g0IAAAAIAFgBIAAAAQAwgiAxgeIAAAAIAFgBIAAAAQCjhBCbhLIAAAAIgDAFIAAAAQgzAyg4ApIAAAAIAGgBIAAAAQAygPAygSIAAAAIACgEIAAAAQAagSAbgRIAAAAIADgFIAAAAQBVh1BqhWIAAAAIAGgBIAAAAQBJgSBCANIAAAAIgGABIAAAAQg+AJgzAYIAAAAIgDABIAAAAQiTDnjCCfIAAAAIgGABIAAAAQh0AshaBUIAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAQAeARAkgVIAAAAIAAgEIAAAAQgOgaA+gDIAAAAIgCAFIAAAAQggBYhqBAIAAAAIgGABIAAAAQg2APgsAAIAAAAQhGAAgtgngAnJDNIAAAAIAAAAIAAAAgAnIDNQAIAAABgKIAAAAQgBAKgIAAgAnJDNIAAAAIAAAAIAAAAgAm+DCIAAgBIAAAAIAAABg");
	var mask_graphics_29 = new cjs.Graphics().p("AnBE3QAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAQgRgcgHgiIAAAAIACgGIAAAAIAMghIAAAAIADgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgGIAAAAQAqhNA6g0IAAAAIAFgBIAAAAQAxgiAxgeIAAAAIAFgBIAAAAQCjhBCbhKIAAAAIgDAFIAAAAQgyAyg5AoIAAAAIAGgBIAAAAQAygPAygSIAAAAIACgEIAAAAQAagSAbgRIAAAAIAEgFIAAAAQBVh0BrhXIAAAAIAGAAIAAAAQBIgTBDAOIAAAAIgGABIAAAAQg+AIg0AZIAAAAIgDAAIAAAAQiUDnjCCfIAAAAIgHABIAAAAQh0ArhaBVIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAeASAkgVIAAAAIAAgEIAAAAQgOgbA+gCIAAAAIgCAFIAAAAQggBXhrBAIAAAAIgGABIAAAAQg2AQgsAAIAAAAQhGAAgsgngAnKDNIAAAAIAAAAIAAAAgAnKDNQAJAAACgMIAAAAQgCAMgJAAgAnKDNIgBAAIAAAAIABAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AnDE2QAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgQgcgHgjIAAAAIACgFIAAAAIAMgiIAAAAIACgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgFIAAAAQAqhNA7g0IAAAAIAFgBIAAAAQAwgiAxgeIAAAAIAGgBIAAAAQCjhBCchKIAAAAIgDAFIAAAAQgzAyg5AoIAAAAIAGgBIAAAAQAygOAygTIAAAAIADgEIAAAAQAagSAbgRIAAAAIADgFIAAAAQBWh0BrhWIAAAAIAGAAIAAAAQBJgTBCAOIAAAAIgGAAIAAAAQg+AJg0AYIAAAAIgDABIAAAAQiVDnjDCeIAAAAIgGABIAAAAQh1ArhaBVIAAAAQAAAAAAABQgBABAAAAQAAAAABABQAAAAAAAAIAAAAQAeASAjgVIAAAAIABgFIAAAAQgOgaA+gDIAAAAIgDAGIAAAAQggBXhqBAIAAAAIgHABIAAAAQg2APgsAAIAAAAQhGAAgsgngAnLDMIAAAAIAAAAIAAAAgAnLDMIAAAAIAAAAIAAAAgAnKDMQAIAAABgLIAAAAQgBALgIAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AnFE2QAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAAAQgQgcgHgiIAAAAIACgGIAAAAIANghIAAAAIACgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgGIAAAAQAqhMA7g0IAAAAIAFgBIAAAAQAxgiAxgeIAAAAIAGgBIAAAAQCjhBCchKIAAAAIgDAFIAAAAQgzAyg5AoIAAAAIAGgBIAAAAQAygOAygSIAAAAIADgFIAAAAQAagSAbgQIAAAAIADgGIAAAAQBXhzBrhWIAAAAIAGgBIAAAAQBJgSBDANIAAAAIgGABIAAAAQg/AJg0AYIAAAAIgDAAIAAAAQiVDnjFCeIAAAAIgGABIAAAAQh1ArhaBUIAAAAQgBABAAABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAdARAkgVIAAAAIABgEIAAAAQgOgaA9gDIAAAAIgCAFIAAAAQggBYhrA/IAAAAIgGABIAAAAQg3AQgsAAIAAAAQhGAAgsgngAnMDMIAAAAIAAAAIAAAAgAnMDMQAJAAABgLIAAAAQgBALgJAAgAnNDMIAAAAIAAAAIAAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AnHE1QABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgPgcgHgjIAAAAIACgFIAAAAIANghIAAAAIACgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgGIAAAAQAqhMA8g0IAAAAIAFgBIAAAAQAxgiAxgeIAAAAIAGgBIAAAAQCkhBCchJIAAAAIgEAEIAAAAQgzAyg5AoIAAAAIAGAAIAAAAQAygPAygSIAAAAIADgFIAAAAQAagSAcgQIAAAAIADgGIAAAAQBXhzBshWIAAAAIAGAAIAAAAQBJgTBCAOIAAAAIgGAAIAAAAQg+AJg0AYIAAAAIgDABIAAAAQiXDmjFCeIAAAAIgHABIAAAAQh0ArhcBUIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAeASAkgVIAAAAIAAgEIAAAAQgNgbA9gCIAAAAIgCAFIAAAAQghBXhrA/IAAAAIgGACIAAAAQg3APgsAAIAAAAQhGAAgsgngAnNDMIgBAAIAAAAIABAAgAnNDMQAIgBACgLIAAAAQgCALgIABgAnODMIAAAAIAAAAIAAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AnIE0QAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBIAAAAQgQgcgHgiIAAAAIADgGIAAAAIAMghIAAAAIADgGIAAAAIAEgLIAAAAIAGAAIAAAAIADgFIAAAAQArhNA7gzIAAAAIAFgCIAAAAQAxghAygeIAAAAIAGgBIAAAAQCkhBCchJIAAAAIgDAFIAAAAQgzAxg6AoIAAAAIAGAAIAAAAQAygPAzgSIAAAAIACgEIAAAAQAbgSAbgRIAAAAIADgFIAAAAQBYhzBshWIAAAAIAGgBIAAAAQBJgSBDANIAAAAIgHABIAAAAQg+AJg0AYIAAAAIgDAAIAAAAQiYDmjGCdIAAAAIgGABIAAAAQh1AshcBUIAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAQAeARAkgUIAAAAIAAgFIAAAAQgNgaA9gDIAAAAIgCAGIAAAAQghBXhsA/IAAAAIgGABIAAAAQg3APgsAAIAAAAQhGAAgrgngAnPDLIAAAAIAAAAIAAAAgAnPDLIgBAAIAAAAIABAAgAnODLQAIAAACgLIAAAAQgCALgIAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AnKE0QAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAAAIAAAAQgPgcgHgjIAAAAIACgFIAAAAIANghIAAAAIADgGIAAAAIAEgLIAAAAIAGAAIAAAAIACgGIAAAAQAshMA8g0IAAAAIAFgBIAAAAQAxghAygeIAAAAIAFgBIAAAAQClhACchKIAAAAIgDAFIAAAAQgzAyg6AnIAAAAIAGAAIAAAAQAygPAzgSIAAAAIADgEIAAAAQAagSAbgRIAAAAIAEgFIAAAAQBXhzBthVIAAAAIAHgBIAAAAQBJgTBCAOIAAAAIgGABIAAAAQg/AIg0AYIAAAAIgDABIAAAAQiZDljHCdIAAAAIgFABIAAAAQh2ArhcBUIAAAAQAAABAAAAQgBABAAAAQAAABAAAAQABAAAAAAIAAAAQAdASAkgVIAAAAIABgEIAAAAQgNgaA9gDIAAAAIgCAFIAAAAQgiBXhsA/IAAAAIgGABIAAAAQg3AQgsAAIAAAAQhGAAgrgngAnQDLIAAAAIAAAAIAAAAgAnQDLQAIAAACgJIAAAAQgCAJgIAAgAnQDLIgBAAIAAAAIABAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AnMEzQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgPgcgGgiIAAAAIACgFIAAAAIANgiIAAAAIACgGIAAAAIAFgKIAAAAIAGAAIAAAAIACgGIAAAAQAshMA8g0IAAAAIAFgBIAAAAQAyghAygeIAAAAIAFgBIAAAAQClhACdhKIAAAAIgDAFIAAAAQg0Ayg6AnIAAAAIAGAAIAAAAQAygPAzgSIAAAAIADgEIAAAAQAagSAcgQIAAAAIADgGIAAAAQBYhyBuhWIAAAAIAGAAIAAAAQBJgTBCAOIAAAAIgGAAIAAAAQg+AJg1AYIAAAAIgDAAIAAAAQiaDljHCdIAAAAIgFABIAAAAQh3ArhcBUIAAAAQgBAAAAABQAAABAAAAQAAAAAAABQAAAAABAAIAAAAQAdARAkgUIAAAAIABgFIAAAAQgNgaA9gCIAAAAIgCAFIAAAAQgiBXhtA/IAAAAIgGABIAAAAQg3APgsAAIAAAAQhGAAgrgngAnRDKIAAAAIAAAAIAAAAgAnRDKIgBAAIAAAAIABAAgAnRDKQAJAAACgLIAAAAQgCALgJAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AnNEzQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAQgQgbgGgiIAAAAIACgGIAAAAIAOghIAAAAIACgGIAAAAIAFgLIAAAAIAGAAIAAAAIACgFIAAAAQAshMA9g0IAAAAIAFgBIAAAAQAxghAygeIAAAAIAGgBIAAAAQClhACdhJIAAAAIgDAFIAAAAQg0Axg6AoIAAAAIAGgBIAAAAQAzgPAygSIAAAAIADgEIAAAAQAbgSAbgQIAAAAIAEgFIAAAAQBYhzBuhVIAAAAIAGgBIAAAAQBKgSBCANIAAAAIgGABIAAAAQg/AJg0AYIAAAAIgDAAIAAAAQicDkjICdIAAAAIgEABIAAAAQh4ArhdBTIAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAQAeARAkgVIAAAAIABgEIAAAAQgNgaA9gDIAAAAIgCAGIAAAAQgjBWhsA/IAAAAIgHABIAAAAQg3APgsAAIAAAAQhGAAgqgmgAnSDKIAAAAIAAAAIAAAAgAnTDKIAAAAIAAAAIAAAAgAnSDKQAIAAACgJIAAAAQgCAJgIAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AnPEyQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgPgcgGgiIAAAAIACgFIAAAAIAOghIAAAAIACgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgGIAAAAQAthLA8g0IAAAAIAFgBIAAAAQAygiAygdIAAAAIAGgBIAAAAQClhACehJIAAAAIgDAFIAAAAQg1Axg6AoIAAAAIAGgBIAAAAQAzgOAygSIAAAAIADgFIAAAAQAbgSAcgQIAAAAIADgFIAAAAQBZhyBvhWIAAAAIAGAAIAAAAQBJgSBCANIAAAAIgGABIAAAAQg/AIg0AYIAAAAIgDABIAAAAQidDkjICcIAAAAIgFABIAAAAQh4ArhdBTIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAdASAlgVIAAAAIAAgEIAAAAQgMgaA9gDIAAAAIgCAFIAAAAQgkBWhsA/IAAAAIgHABIAAAAQg3AQgsAAIAAAAQhGAAgqgngAnUDKIAAAAIAAAAIAAAAgAnUDKIAAAAIAAAAIAAAAgAnTDKQAIgBACgKIAAAAQgCAKgIABg");
	var mask_graphics_38 = new cjs.Graphics().p("AnRExQAAAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAAAQgPgbgGgiIAAAAIADgGIAAAAIANghIAAAAIADgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgFIAAAAQAthMA9gzIAAAAIAFgBIAAAAQAygiAygdIAAAAIAGgBIAAAAQClhACehJIAAAAIgDAFIAAAAQg0Axg6AoIAAAAIAFgBIAAAAQAzgOAzgSIAAAAIACgFIAAAAQAbgRAcgRIAAAAIADgFIAAAAQBahyBvhVIAAAAIAGAAIAAAAQBKgTBCAOIAAAAIgHAAIAAAAQg+AJg1AYIAAAAIgDAAIAAAAQidDkjKCcIAAAAIgEABIAAAAQh4AqheBUIAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQABABAAAAIAAAAQAdARAkgUIAAAAIABgFIAAAAQgNgaA+gCIAAAAIgCAFIAAAAQgkBWhtA/IAAAAIgGABIAAAAQg3APgtAAIAAAAQhGAAgqgngAnVDJIAAAAIAAAAIAAAAgAnUDJQAHAAADgJIAAAAQgDAJgHAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AnTExQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAIAAAAQgOgcgGgiIAAAAIACgFIAAAAIAOghIAAAAIADgGIAAAAIAEgLIAAAAIAHAAIAAAAIACgFIAAAAQAthMA9gzIAAAAIAGgBIAAAAQAxgiAzgdIAAAAIAGgBIAAAAQClhACfhIIAAAAIgDAEIAAAAQg1Ayg6AnIAAAAIAFgBIAAAAQAzgOAzgSIAAAAIADgEIAAAAQAagSAcgQIAAAAIAEgGIAAAAQBahxBvhVIAAAAIAGgBIAAAAQBKgSBCANIAAAAIgGABIAAAAQg/AJg1AXIAAAAIgDABIAAAAQieDjjLCbIAAAAIgEACIAAAAQh4AqheBTIAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABAAIAAAAQAdASAkgVIAAAAIABgEIAAAAQgNgaA+gDIAAAAIgDAGIAAAAQgkBVhtA/IAAAAIgGABIAAAAQg3APgsAAIAAAAQhHAAgqgmgAnWDJIAAAAIAAAAIAAAAgAnWDJQAIAAACgJIAAAAQgCAJgIAAgAnWDJIgBAAIAAAAIABAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AnUEwQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgPgcgFghIAAAAIACgGIAAAAIAOghIAAAAIACgGIAAAAIAFgKIAAAAIAGAAIAAAAIADgGIAAAAQAthLA+gzIAAAAIAFgBIAAAAQAygiAzgdIAAAAIAFgBIAAAAQCng/CehJIAAAAIgDAFIAAAAQg1Axg6AnIAAAAIAFgBIAAAAQAzgOAzgSIAAAAIADgEIAAAAQAbgSAcgQIAAAAIADgFIAAAAQBbhyBwhUIAAAAIAGgBIAAAAQBKgSBBANIAAAAIgGABIAAAAQg/AIg0AYIAAAAIgDABIAAAAQigDijLCbIAAAAIgFABIAAAAQh4ArhfBTIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAQAdARAlgUIAAAAIABgFIAAAAQgNgZA+gDIAAAAIgDAFIAAAAQgkBWhuA+IAAAAIgGABIAAAAQg3AQgsAAIAAAAQhGAAgqgngAnXDIIAAAAIAAAAIAAAAgAnXDIQAIAAACgIIAAAAQgCAIgIAAgAnYDIIAAAAIAAAAIAAAAgAnNC/IABgCIAAAAIgBACg");
	var mask_graphics_41 = new cjs.Graphics().p("AnWEwQAAgBAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgGgiIAAAAIADgFIAAAAIAOghIAAAAIACgGIAAAAIAFgLIAAAAIAGAAIAAAAIADgFIAAAAQAuhLA9gzIAAAAIAGgBIAAAAQAygiAygdIAAAAIAGgBIAAAAQCng/CfhJIAAAAIgDAFIAAAAQg2Axg6AnIAAAAIAFAAIAAAAQAzgPAzgSIAAAAIADgEIAAAAQAbgSAcgQIAAAAIAEgFIAAAAQBbhxBwhVIAAAAIAGAAIAAAAQBKgTBCAOIAAAAIgGAAIAAAAQg/AJg1AYIAAAAIgDAAIAAAAQihDijMCbIAAAAIgEABIAAAAQh5ArhfBSIAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAQAdARAlgVIAAAAIAAgEIAAAAQgMgaA+gCIAAAAIgDAFIAAAAQglBVhuA/IAAAAIgGABIAAAAQg3APgsAAIAAAAQhGAAgqgmgAnYDIIAAAAIAAAAIAAAAgAnZDIIAAAAIAAAAIAAAAgAnYDIQAIAAACgJIAAAAQgCAJgIAAgAnOC+IABgBIAAAAIgBABg");
	var mask_graphics_42 = new cjs.Graphics().p("AnYEvQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgOgcgFghIAAAAIACgGIAAAAIAPggIAAAAIACgGIAAAAIAFgLIAAAAIAGAAIAAAAIADgFIAAAAQAuhLA+gzIAAAAIAFgBIAAAAQAygiAzgdIAAAAIAGgBIAAAAQCng/CfhIIAAAAIgDAEIAAAAQg1Axg7AnIAAAAIAFAAIAAAAQAzgPAzgRIAAAAIADgFIAAAAQAbgRAcgQIAAAAIAEgGIAAAAQBchxBwhUIAAAAIAHgBIAAAAQBKgSBBAOIAAAAIgGAAIAAAAQg/AJg1AXIAAAAIgDABIAAAAQiiDhjNCbIAAAAIgEABIAAAAQh5AqhfBTIAAAAQAAABAAAAQgBABAAAAQAAAAAAABQABAAAAAAIAAAAQAdARAlgUIAAAAIAAgEIAAAAQgMgaA+gDIAAAAIgDAGIAAAAQglBVhuA+IAAAAIgHABIAAAAQg3APgsAAIAAAAQhGAAgqgmgAnaDIIAAAAIAAAAIAAAAgAnaDIIAAAAIAAAAIAAAAgAnZDIQAIgBACgJIAAAAQgCAJgIABgAnPC+IAAgCIAAAAIAAACg");
	var mask_graphics_43 = new cjs.Graphics().p("AnZEuQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAQgPgbgEgiIAAAAIACgFIAAAAIAOghIAAAAIADgGIAAAAIAFgKIAAAAIAGAAIAAAAIADgGIAAAAQAuhLA+gzIAAAAIAGgBIAAAAQAyghAzgdIAAAAIAGgBIAAAAQCng/CghIIAAAAIgDAFIAAAAQg2Awg7AnIAAAAIAFAAIAAAAQAzgPA0gRIAAAAIADgFIAAAAQAbgRAcgQIAAAAIADgGIAAAAQBdhwBxhUIAAAAIAGgBIAAAAQBKgSBBANIAAAAIgGABIAAAAQg+AIg2AYIAAAAIgDAAIAAAAQijDijNCaIAAAAIgFABIAAAAQh5AqhfBSIAAAAQAAABgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgVIAAAAIABgEIAAAAQgMgZA9gDIAAAAIgCAFIAAAAQgmBVhuA+IAAAAIgGABIAAAAQg4APgsAAIAAAAQhGAAgpgmgAnbDHIAAAAIAAAAIAAAAgAnbDHQAJAAACgLIAAAAQgCALgJAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AnbEuQAAgBAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgFghIAAAAIADgGIAAAAIAOggIAAAAIADgGIAAAAIAFgLIAAAAIAGAAIAAAAIACgFIAAAAQAvhLA/gzIAAAAIAFgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCng/CghIIAAAAIgDAFIAAAAQg2Axg7AmIAAAAIAFAAIAAAAQA0gOAzgSIAAAAIADgEIAAAAQAbgSAcgQIAAAAIAEgFIAAAAQBdhxBxhUIAAAAIAGAAIAAAAQBKgSBCANIAAAAIgGAAIAAAAQg/AJg1AYIAAAAIgEAAIAAAAQikDhjNCaIAAAAIgFABIAAAAQh5AqhgBSIAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIAAAAQAdARAlgUIAAAAIABgEIAAAAQgMgaA9gDIAAAAIgCAGIAAAAQgmBVhvA+IAAAAIgGABIAAAAQg4APgsAAIAAAAQhGAAgpgmgAncDHIAAAAIAAAAIAAAAgAnbDHQAIgBACgKIAAAAQgCAKgIABgAndDHIAAAAIAAAAIAAAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AndEtQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAQgOgbgEgiIAAAAIACgFIAAAAIAPghIAAAAIADgGIAAAAIAEgKIAAAAIAHAAIAAAAIACgGIAAAAQAwhKA+gzIAAAAIAGgBIAAAAQAyghA0gdIAAAAIAGgBIAAAAQCng/ChhIIAAAAIgDAFIAAAAQg3Axg7AnIAAAAIAFgBIAAAAQA0gOAzgSIAAAAIADgEIAAAAQAbgSAdgQIAAAAIADgFIAAAAQBehwBxhUIAAAAIAHgBIAAAAQBKgSBBAOIAAAAIgGAAIAAAAQg/AJg1AXIAAAAIgDABIAAAAQilDgjOCZIAAAAIgGABIAAAAQh5ArhhBSIAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAAAQAdARAlgUIAAAAIABgFIAAAAQgMgZA9gDIAAAAIgCAFIAAAAQgnBVhvA+IAAAAIgGABIAAAAQg4APgsAAIAAAAQhGAAgpgmgAndDGIAAAAIAAAAIAAAAgAneDGIAAAAIAAAAIAAAAgAndDGQAJAAACgLIAAAAQgCALgJAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AneEsQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBIAAAAQgOgbgFghIAAAAIADgGIAAAAIAPggIAAAAIACgGIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhKA/gzIAAAAIAFgBIAAAAQAzghA0gdIAAAAIAFgBIAAAAQCog+ChhIIAAAAIgDAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgSIAAAAIADgEIAAAAQAcgRAcgQIAAAAIAEgGIAAAAQBehwByhTIAAAAIAGgBIAAAAQBKgSBCANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQimDgjOCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAAAAAAAIAAAAQAcARAmgUIAAAAIAAgEIAAAAQgLgaA9gCIAAAAIgCAFIAAAAQgnBVhwA9IAAAAIgGABIAAAAQg4APgsAAIAAAAQhGAAgogmgAneDGIgBAAIAAAAIABAAgAnfDGIAAAAIAAAAIAAAAgAneDGQAIAAACgJIAAAAQgCAJgIAAgAnTC8IAAgBIAAAAIAAABg");
	var mask_graphics_47 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_53 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AngEsQAAgBAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBIAAAAQgOgbgEghIAAAAIACgFIAAAAIAQghIAAAAIACgFIAAAAIAFgLIAAAAIAHAAIAAAAIACgFIAAAAQAwhLA/gyIAAAAIAGgBIAAAAQAzghAzgdIAAAAIAGgBIAAAAQCpg+ChhIIAAAAIgEAFIAAAAQg2Awg8AnIAAAAIAFgBIAAAAQA0gOAzgRIAAAAIADgFIAAAAQAcgRAcgQIAAAAIAEgFIAAAAQBfhwByhUIAAAAIAGAAIAAAAQBLgSBBANIAAAAIgGABIAAAAQg/AIg2AYIAAAAIgDAAIAAAAQinDfjPCZIAAAAIgGABIAAAAQh6AqhhBSIAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAAAAQAcARAlgUIAAAAIABgFIAAAAQgLgZA9gDIAAAAIgCAGIAAAAQgoBUhvA9IAAAAIgHABIAAAAQg3APgtAAIAAAAQhGAAgoglgAngDFIAAAAIAAAAIAAAAgAngDFIAAAAIAAAAIAAAAgAnfDFQAIAAADgLIAAAAQgDALgIAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:148,y:166.3}).wait(1).to({graphics:mask_graphics_1,x:147,y:162.7}).wait(1).to({graphics:mask_graphics_2,x:146,y:159.1}).wait(1).to({graphics:mask_graphics_3,x:144.9,y:155.5}).wait(1).to({graphics:mask_graphics_4,x:143.9,y:151.9}).wait(1).to({graphics:mask_graphics_5,x:142.9,y:148.3}).wait(1).to({graphics:mask_graphics_6,x:141.9,y:144.7}).wait(1).to({graphics:mask_graphics_7,x:140.9,y:141.1}).wait(1).to({graphics:mask_graphics_8,x:139.9,y:137.5}).wait(1).to({graphics:mask_graphics_9,x:138.9,y:133.9}).wait(1).to({graphics:mask_graphics_10,x:137.9,y:130.3}).wait(1).to({graphics:mask_graphics_11,x:136.9,y:126.7}).wait(1).to({graphics:mask_graphics_12,x:135.9,y:123.1}).wait(1).to({graphics:mask_graphics_13,x:134.9,y:119.5}).wait(1).to({graphics:mask_graphics_14,x:135.9,y:120.6}).wait(1).to({graphics:mask_graphics_15,x:136.9,y:121.8}).wait(1).to({graphics:mask_graphics_16,x:137.9,y:122.9}).wait(1).to({graphics:mask_graphics_17,x:138.8,y:124}).wait(1).to({graphics:mask_graphics_18,x:139.8,y:125.2}).wait(1).to({graphics:mask_graphics_19,x:140.8,y:126.3}).wait(1).to({graphics:mask_graphics_20,x:141.8,y:127.5}).wait(1).to({graphics:mask_graphics_21,x:142.8,y:128.6}).wait(1).to({graphics:mask_graphics_22,x:143.8,y:129.7}).wait(1).to({graphics:mask_graphics_23,x:144.8,y:130.9}).wait(1).to({graphics:mask_graphics_24,x:145.8,y:132}).wait(1).to({graphics:mask_graphics_25,x:146.7,y:133.2}).wait(1).to({graphics:mask_graphics_26,x:147.7,y:134.3}).wait(1).to({graphics:mask_graphics_27,x:148.7,y:135.4}).wait(1).to({graphics:mask_graphics_28,x:149.7,y:136.6}).wait(1).to({graphics:mask_graphics_29,x:150.7,y:137.7}).wait(1).to({graphics:mask_graphics_30,x:151.7,y:138.8}).wait(1).to({graphics:mask_graphics_31,x:152.7,y:140}).wait(1).to({graphics:mask_graphics_32,x:153.7,y:141.1}).wait(1).to({graphics:mask_graphics_33,x:154.6,y:142.3}).wait(1).to({graphics:mask_graphics_34,x:155.6,y:143.4}).wait(1).to({graphics:mask_graphics_35,x:156.6,y:144.5}).wait(1).to({graphics:mask_graphics_36,x:157.6,y:145.7}).wait(1).to({graphics:mask_graphics_37,x:158.6,y:146.8}).wait(1).to({graphics:mask_graphics_38,x:159.6,y:148}).wait(1).to({graphics:mask_graphics_39,x:160.6,y:149.1}).wait(1).to({graphics:mask_graphics_40,x:161.6,y:150.2}).wait(1).to({graphics:mask_graphics_41,x:162.5,y:151.4}).wait(1).to({graphics:mask_graphics_42,x:163.5,y:152.5}).wait(1).to({graphics:mask_graphics_43,x:164.5,y:153.6}).wait(1).to({graphics:mask_graphics_44,x:165.5,y:154.8}).wait(1).to({graphics:mask_graphics_45,x:166.5,y:155.9}).wait(1).to({graphics:mask_graphics_46,x:167.5,y:157.1}).wait(1).to({graphics:mask_graphics_47,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_48,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_49,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_50,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_51,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_52,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_53,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_54,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_55,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_56,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_57,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_58,x:168.5,y:158.2}).wait(1).to({graphics:mask_graphics_59,x:168.5,y:158.2}).wait(1));

	// flare 2
	this.instance_19 = new lib.Symbol33();
	this.instance_19.setTransform(77.9,251.8,1.2,1.2,0,0,0,37.2,25.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;
	this.instance_19.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-98, 26, 94, 175))];
	this.instance_19.cache(-53,-47,161,104);

	this.instance_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(11).to({_off:false},0).wait(1).to({regX:27.9,regY:5,x:72.7,y:219.3,alpha:0.07},0).wait(1).to({x:78.7,y:211.4,alpha:0.14},0).wait(1).to({x:84.8,y:203.6,alpha:0.213},0).wait(1).to({x:90.8,y:195.8,alpha:0.54},0).wait(1).to({x:96.8,y:188,alpha:0.771},0).wait(1).to({x:102.8,y:180.1,alpha:0.851},0).wait(1).to({x:108.8,y:172.3,alpha:0.904},0).wait(1).to({x:114.8,y:164.5,alpha:0.94},0).wait(1).to({x:115.6,y:161.9,alpha:0.959},0).wait(1).to({x:116.3,y:159.3,alpha:0.969},0).wait(1).to({x:117.1,y:156.7,alpha:0.972},0).wait(1).to({x:117.8,y:154.1,alpha:0.968},0).wait(1).to({x:118.5,y:151.5,alpha:0.959},0).wait(1).to({x:121.3,y:151.1,alpha:0.944},0).wait(1).to({x:124,y:150.8,alpha:0.924},0).wait(1).to({x:126.7,y:150.5,alpha:0.899},0).wait(1).to({x:129.5,y:150.1,alpha:0.869},0).wait(1).to({x:132.2,y:149.8,alpha:0.834},0).wait(1).to({x:134.9,y:149.5,alpha:0.794},0).wait(1).to({x:137.6,y:149.1,alpha:0.75},0).wait(1).to({x:140.4,y:148.8,alpha:0.7},0).wait(1).to({x:143.1,y:148.5,alpha:0.65},0).wait(1).to({x:145.8,y:148.1,alpha:0.603},0).wait(1).to({x:148.5,y:147.8,alpha:0.56},0).wait(1).to({x:151.3,y:147.5,alpha:0.519},0).wait(1).to({x:154,y:147.1,alpha:0.481},0).wait(1).to({x:156.7,y:146.8,alpha:0.445},0).wait(1).to({x:159.5,y:146.5,alpha:0.411},0).wait(1).to({x:162.2,y:146.1,alpha:0.378},0).wait(1).to({x:164.9,y:145.8,alpha:0.348},0).wait(1).to({x:167.6,y:145.5,alpha:0.318},0).wait(1).to({x:170.4,y:145.1,alpha:0.291},0).wait(1).to({x:173.1,y:144.8,alpha:0.264},0).wait(1).to({x:175.8,y:144.5,alpha:0.239},0).wait(1).to({x:178.5,y:144.1,alpha:0.214},0).wait(1).to({x:181.3,y:143.8,alpha:0.191},0).wait(1).to({x:184,y:143.4,alpha:0.169},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0},0).wait(2));

	// stafka
	this.instance_20 = new lib.Symbol18();
	this.instance_20.setTransform(122,217,0.115,0.132,0,0,0,370.6,483.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:340,regY:540,skewX:-2.6,skewY:-2.8,x:117.4,y:223.3},0).wait(1).to({skewX:-5.2,skewY:-5.3,x:116.9,y:222.1},0).wait(1).to({skewX:-7.5,skewY:-7.6,x:114.2,y:220.8},0).wait(1).to({skewX:-9.4,skewY:-9.6,x:113.4,y:219.7},0).wait(1).to({skewX:-10.5,skewY:-10.6,x:113,y:218},0).wait(1).to({skewX:-11.3,skewY:-11.4,x:111.7,y:212.3},0).wait(1).to({skewX:-11.9,skewY:-12,x:109.9,y:206.6},0).wait(1).to({skewX:-12.3,skewY:-12.4,x:108,y:200.8},0).wait(1).to({skewX:-12.7,skewY:-12.8,x:109.4,y:195},0).wait(1).to({skewX:-13.1,skewY:-13.2,x:111.1,y:193.4},0).wait(1).to({skewX:-13.3,skewY:-13.4,x:112.3,y:191.9},0).wait(1).to({skewX:-13.4,skewY:-13.6,x:113.2,y:190.5},0).wait(1).to({x:113.9,y:189.3},0).wait(1).to({x:114.4,y:188.6},0).wait(1).to({x:114.7,y:188.4},0).wait(1).to({x:115,y:188.7},0).wait(1).to({x:115.2,y:190.2},0).wait(1).to({x:115.4,y:192.1},0).wait(1).to({skewX:-13.6,skewY:-13.7,x:115.5,y:194.3},0).wait(1).to({skewX:-13.4,skewY:-13.5,y:196.6},0).wait(1).to({skewX:-13,skewY:-13.1,y:199.1},0).wait(1).to({skewX:-12.3,skewY:-12.5,x:115.4,y:201.5},0).wait(1).to({skewX:-11.4,skewY:-11.5,y:204},0).wait(1).to({skewX:-10.2,skewY:-10.3,x:115.2,y:206.4},0).wait(1).to({skewX:-8.6,skewY:-8.7,x:115,y:208.8},0).wait(1).to({skewX:-6.4,skewY:-6.6,x:114.8,y:211.3},0).wait(1).to({skewX:-4.4,skewY:-4.5,x:114.5,y:213.1},0).wait(1).to({skewX:-2.9,skewY:-3,x:114.4,y:214.6},0).wait(1).to({skewX:-1.8,skewY:-1.9,x:114.3,y:216.4},0).wait(1).to({skewX:-0.9,skewY:-1,y:218},0).wait(1).to({skewX:-0.3,skewY:-0.5,x:114.4,y:219.7},0).wait(1).to({skewX:0,skewY:-0.1,x:114.5,y:221.3},0).wait(1).to({skewX:0.2,skewY:0.1,x:114.6,y:222.9},0).wait(1).to({x:114.8,y:224.2},0).wait(1).to({skewX:0,skewY:-0.1,x:115.1,y:224.3},0).wait(1).to({x:115.5},0).wait(1).to({x:115.9},0).wait(1).to({x:116.5},0).wait(1).to({x:117.2},0).wait(1).to({x:118.1},0).wait(1).to({x:118.4},0).wait(19));

	// ruka
	this.instance_21 = new lib.Symbol19();
	this.instance_21.setTransform(158.7,220.5,0.115,0.132,0.6,0,0,242.8,-89.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({regX:84.5,regY:65.5,rotation:-3.2,x:141.6,y:242},0).wait(1).to({rotation:1,x:140.1,y:240.6},0).wait(1).to({rotation:9.6,x:137.3,y:237.6},0).wait(1).to({rotation:21.2,x:134.3,y:233},0).wait(1).to({rotation:35.2,x:132,y:226.7},0).wait(1).to({rotation:48.2,x:131.3,y:220.5},0).wait(1).to({rotation:58,x:131.6,y:215.9},0).wait(1).to({rotation:65.7,x:132.6,y:212.3},0).wait(1).to({rotation:71.9,x:133.6,y:209.5},0).wait(1).to({rotation:76.8,x:134.6,y:207.5},0).wait(1).to({rotation:80.6,x:135.6,y:205.8},0).wait(1).to({rotation:83.6,x:136.3,y:204.6},0).wait(1).to({rotation:85.8,x:137,y:203.8},0).wait(1).to({rotation:87.2,x:137.3,y:203.3},0).wait(1).to({rotation:87.8,x:137.6,y:203.1},0).wait(1).to({x:137.5},0).wait(1).to({rotation:87.4,x:137.4,y:203.2},0).wait(1).to({rotation:86.5,x:137.2,y:203.5},0).wait(1).to({rotation:85.2,x:136.8,y:204},0).wait(1).to({rotation:83.4,x:136.3,y:204.7},0).wait(1).to({rotation:81.3,x:135.7,y:205.6},0).wait(1).to({rotation:78.6,x:135.1,y:206.6},0).wait(1).to({rotation:75.4,x:134.3,y:208},0).wait(1).to({rotation:71.5,x:133.5,y:209.7},0).wait(1).to({rotation:66.9,x:132.7,y:211.8},0).wait(1).to({rotation:61.3,x:131.9,y:214.3},0).wait(1).to({rotation:54.7,x:131.5,y:217.4},0).wait(1).to({rotation:46.6,x:131.3,y:221.3},0).wait(1).to({rotation:36.5,x:131.9,y:226.1},0).wait(1).to({rotation:25.6,x:133.4,y:231},0).wait(1).to({rotation:16,x:135.5,y:235.1},0).wait(1).to({rotation:7.8,x:137.8,y:238.3},0).wait(1).to({rotation:1.6,x:139.9,y:240.4},0).wait(1).to({rotation:-2,x:141.2,y:241.6},0).wait(1).to({rotation:-0.7,x:140.7,y:241.2},0).wait(25));

	// tien
	this.instance_22 = new lib.Symbol20();
	this.instance_22.setTransform(179,275.3,0.115,0.132,0,0,0,650.2,340.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:649.5,regY:340.5,x:178.9},0).wait(59));

	// Layer 43 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AExMWQBKiQCZhAQCWhBCJgdQB/gYBkgbQCVhDBuhUQBzhcA3g2Qg8A/hxBpQihCXjFChQhoBXiABiQiDBhi0AgQgvhJgxhHg");
	mask_1.setTransform(147.6,93.5);

	// Layer 44
	this.instance_23 = new lib.Symbol29();
	this.instance_23.setTransform(54.2,275.5,0.394,0.419,0,-56.9,-33.6,729.6,21.6);

	this.instance_23.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:729.7,regY:21.2,scaleY:0.42,skewX:-57,skewY:-33.7,x:56.6,y:273.8},0).wait(1).to({x:59.1,y:272.2},0).wait(1).to({x:61.7,y:270.6},0).wait(1).to({x:64.2,y:269},0).wait(1).to({x:66.7,y:267.4},0).wait(1).to({x:69.2,y:265.8},0).wait(1).to({x:71.7,y:264.2},0).wait(1).to({x:74.2,y:262.6},0).wait(1).to({x:76.7,y:261},0).wait(1).to({x:79.2,y:259.4},0).wait(1).to({x:81.7,y:257.8},0).wait(1).to({x:84.2,y:256.2},0).wait(1).to({x:86.7,y:254.6},0).wait(1).to({x:89.2,y:253},0).wait(1).to({x:91.7,y:251.4},0).wait(1).to({x:94.2,y:249.8},0).wait(1).to({x:96.7,y:248.2},0).wait(1).to({x:99.3,y:246.6},0).wait(1).to({x:101.8,y:245},0).wait(1).to({x:104.3,y:243.4},0).wait(1).to({x:106.8,y:241.8},0).wait(1).to({x:109.3,y:240.2},0).wait(1).to({x:111.8,y:238.6},0).wait(1).to({x:114.3,y:237},0).wait(1).to({x:116.8,y:235.4},0).wait(1).to({x:119.3,y:233.8},0).wait(1).to({x:121.8,y:232.2},0).wait(1).to({x:124.3,y:230.6},0).wait(1).to({x:126.8,y:229},0).wait(1).to({x:129.3,y:227.4},0).wait(1).to({x:131.8,y:225.8},0).wait(1).to({x:134.4,y:224.2},0).wait(1).to({x:136.9,y:222.6},0).wait(1).to({x:139.4,y:221},0).wait(1).to({x:141.9,y:219.4},0).wait(1).to({x:144.4,y:217.8},0).wait(1).to({x:146.9,y:216.2},0).wait(1).to({x:149.4,y:214.6},0).wait(1).to({x:151.9,y:213},0).wait(1).to({x:154.4,y:211.4},0).wait(1).to({x:156.9,y:209.8},0).wait(1).to({x:159.4,y:208.2},0).wait(1).to({x:161.9,y:206.6},0).wait(1).to({x:164.4,y:205},0).wait(1).to({x:166.9,y:203.4},0).wait(1).to({x:169.4,y:201.8},0).wait(1).to({x:172,y:200.2},0).wait(1).to({x:174.5,y:198.6},0).wait(1).to({x:177,y:197},0).wait(1).to({x:179.5,y:195.4},0).wait(1).to({x:182,y:193.8},0).wait(1).to({x:184.5,y:192.2},0).wait(1).to({x:187,y:190.6},0).wait(1).to({x:189.5,y:189},0).wait(1).to({x:192,y:187.4},0).wait(1).to({x:194.5,y:185.8},0).wait(1).to({x:197,y:184.2},0).wait(1).to({x:199.5,y:182.6},0).wait(1).to({x:202,y:181},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.9,234.4,296.9,255);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;