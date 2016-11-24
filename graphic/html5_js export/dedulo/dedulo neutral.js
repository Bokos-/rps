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
(lib.dedobeta4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vlas
	this.instance = new lib.Symbol2();
	this.instance.setTransform(186.4,277.3,0.115,0.132,0,0,0,39.1,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39,regY:50.5,y:278.3},0).wait(1).to({x:186.3,y:279.2},0).wait(1).to({y:280.1},0).wait(1).to({y:280.9},0).wait(1).to({y:281.6},0).wait(1).to({x:186.2,y:281.7},0).wait(17).to({x:186.3,y:281.6},0).wait(1).to({y:280.9},0).wait(1).to({y:280.1},0).wait(1).to({y:279.2},0).wait(1).to({x:186.4,y:278.3},0).wait(1).to({y:277.2},0).wait(1).to({y:278},0).wait(1).to({y:278.6},0).wait(1).to({x:186.3,y:279.1},0).wait(1).to({y:279.5},0).wait(1).to({y:279.7},0).wait(1).to({y:279.9},0).wait(1).to({y:280},0).wait(1).to({y:279.9},0).wait(1).to({y:279.7},0).wait(1).to({y:279.5},0).wait(1).to({y:279.1},0).wait(1).to({x:186.4,y:278.6},0).wait(1).to({y:278},0).wait(1).to({y:277.2},0).wait(1).to({y:277.6},0).wait(1).to({y:277.9},0).wait(1).to({y:278.1},0).wait(1).to({y:278.2},0).wait(2).to({y:278.1},0).wait(1).to({y:277.9},0).wait(1).to({y:277.6},0).wait(1).to({y:277.2},0).wait(1).to({y:277.4},0).wait(1).to({y:277.5},0).wait(1).to({y:277.6},0).wait(2).to({y:277.5},0).wait(1).to({y:277.4},0).wait(1).to({y:277.2},0).wait(2));

	// brada s nosom
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(206.5,249.3,0.115,0.132,0,0,0,259.4,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:259.5,x:206.6,y:249.5},0).wait(1).to({x:206.7,y:249.8},0).wait(1).to({x:206.8,y:250},0).wait(1).to({x:206.9,y:250.3},0).wait(1).to({x:207,y:250.5},0).wait(1).to({x:207.1,y:250.8},0).wait(1).to({x:207.2,y:251},0).wait(1).to({x:207.3,y:251.3},0).wait(1).to({x:207.4,y:251.5},0).wait(1).to({y:251.8},0).wait(1).to({x:207.5,y:252},0).wait(1).to({x:207.6,y:252.3},0).wait(1).to({x:207.7,y:252.5},0).wait(1).to({x:207.8,y:252.8},0).wait(1).to({x:207.9,y:253},0).wait(1).to({x:208,y:253.3},0).wait(1).to({x:208.1,y:253.5},0).wait(1).to({x:208.2,y:253.8},0).wait(1).to({x:208.3,y:254},0).wait(1).to({x:208.2,y:254.1},0).wait(1).to({x:208.1},0).wait(1).to({x:208,y:254.2},0).wait(1).to({x:207.9},0).wait(1).to({x:207.8},0).wait(1).to({x:207.7,y:254.3},0).wait(1).to({x:207.6},0).wait(1).to({x:207.5,y:254.4},0).wait(1).to({x:207.3},0).wait(1).to({x:207.2},0).wait(1).to({x:207.1,y:254.5},0).wait(1).to({x:207},0).wait(1).to({x:206.9},0).wait(1).to({x:206.8,y:254.6},0).wait(1).to({x:206.7},0).wait(1).to({x:206.6,y:254.7},0).wait(1).to({x:206.5},0).wait(1).to({x:206.4},0).wait(1).to({x:206.3,y:254.8},0).wait(1).to({x:206.2},0).wait(1).to({x:206.1,y:254.9},0).wait(1).to({x:206},0).wait(1).to({x:205.9},0).wait(1).to({x:205.8,y:255},0).wait(1).to({x:205.7},0).wait(1).to({x:205.5},0).wait(1).to({x:205.6,y:253.7},0).wait(1).to({x:205.7,y:252.3},0).wait(1).to({x:205.8,y:250.9},0).wait(1).to({x:205.9,y:249.6},0).wait(1).to({x:206,y:248.2},0).wait(1).to({x:206.1,y:246.8},0).wait(1).to({y:247.1},0).wait(1).to({x:206.2,y:247.4},0).wait(1).to({y:247.7},0).wait(1).to({x:206.3,y:248},0).wait(1).to({y:248.3},0).wait(1).to({x:206.4,y:248.6},0).wait(1).to({y:248.9},0).wait(1).to({x:206.5,y:249.2},0).wait(1));

	// vraska
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(187.4,197.2,0.115,0.132,0,0,0,77.7,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:78,regY:25.5,y:194.7},0).wait(1).to({y:194.9},0).wait(1).to({y:195},0).wait(1).to({y:195.1},0).wait(1).to({y:195.3},0).wait(1).to({y:195.4},0).wait(1).to({y:195.5},0).wait(1).to({y:195.7},0).wait(1).to({y:195.8},0).wait(1).to({y:195.9},0).wait(1).to({y:196.1},0).wait(1).to({y:196.2},0).wait(1).to({y:196.4},0).wait(1).to({y:196.5},0).wait(1).to({y:196.6},0).wait(1).to({y:196.8},0).wait(1).to({y:196.9},0).wait(1).to({y:197},0).wait(1).to({y:197.2},0).wait(1).to({y:197.3},0).wait(1).to({y:197.4},0).wait(1).to({y:197.6},0).wait(1).to({y:197.7},0).wait(1).to({y:197.8},0).wait(1).to({y:198},0).wait(1).to({y:198.1},0).wait(1).to({y:198.2},0).wait(1).to({y:198.4},0).wait(1).to({y:198.5},0).wait(1).to({y:198.6},0).wait(1).to({y:198.5},0).wait(1).to({y:198.4},0).wait(1).to({y:198.2},0).wait(1).to({y:198.1},0).wait(1).to({y:198},0).wait(1).to({y:197.8},0).wait(1).to({y:197.7},0).wait(1).to({y:197.5},0).wait(1).to({y:197.4},0).wait(1).to({y:197.3},0).wait(1).to({y:197.1},0).wait(1).to({y:197},0).wait(1).to({y:196.8},0).wait(1).to({y:196.7},0).wait(1).to({y:196.6},0).wait(1).to({y:196.4},0).wait(1).to({y:196.3},0).wait(1).to({y:196.1},0).wait(1).to({y:196},0).wait(1).to({y:195.9},0).wait(1).to({y:195.7},0).wait(1).to({y:195.6},0).wait(1).to({y:195.4},0).wait(1).to({y:195.3},0).wait(1).to({y:195.2},0).wait(1).to({y:195},0).wait(1).to({y:194.9},0).wait(1).to({y:194.7},0).wait(1).to({y:194.6},0).wait(1));

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

	this.instance_3 = new lib.Symbol27();
	this.instance_3.setTransform(185.7,183.1,0.394,0.389,0,0,0,14.3,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghCMQgFgBgBgCQgDgDABgDQAAgFADgCIACgBIAAgBQgCgDABgEIABgHIAAgBIAAgDIABgGQgDAAgBgDQgCgCABgEIgHACQgHACgEgDQgBgFAGgHIALgOQgGAAgGgCIAAgCQgGACgGgDIAAgFQALgGAHgKIgDgGQAFgCAEgGQAEgGgBgGIAAgEIAAgDQgEgBgCgDQgDgCABgEQAAgFADgDIgBAAIgGgBQgFgCgDgEIgIADQAAABAAAAQAAABAAAAQAAABAAAAQgBABgBAAIgEABQgEABgGgCIAAgFQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIADgBIARgDIgEgDIgDgDIgBAAIgFgBQgIgCgEgEIgBAAIgDACQgLAJgGAOIgCAGIAAAEIgBAGQgBAEgDACIABADIAAAFIgBAFIAAACIABAJIACAIIADAJQABAEgCADIACADQAFAKgCAGIgCAFIADAHIADAFIAEACQACABACADIAAAHIgCADIACAEQABAFgFADQgFAEgEgDQgEgBgEgIIgJgUIgMgcQgGgQgDgQQgJgnAKgtIgBgEQAAgGACgFIAEgJIABgCIAKgNQAKgLAPgJQAggVAlgEIAAgBIADABQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIABgBIAOABIABgBIADABIABgBIADAAIADACIACgCQAGABAIADQAHAAANAGIAFADIAEAEIADACIABgBIADACQANAKAPAHQANAFAVAEQAQACAOAAQAFAGAAAHIgBAEQgiANghAQQgPAGgLAIQgVAQgKAXQgLAQgNAYQgIAQgCAIQgGARACAQIACAHQgEAMgFAJQgDAFgDACQgCACgDAAIgBgBg");
	this.shape_7.setTransform(193,177.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// hlava normal
	this.instance_4 = new lib.Symbol24();
	this.instance_4.setTransform(188.5,215.1,0.394,0.389,0,0,0,73.5,66.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:73.4,x:188.4,y:215.2},0).wait(1).to({y:215.3},0).wait(1).to({y:215.4},0).wait(1).to({y:215.5},0).wait(1).to({y:215.7},0).wait(1).to({y:215.8},0).wait(1).to({y:215.9},0).wait(1).to({y:216},0).wait(1).to({y:216.1},0).wait(1).to({y:216.2},0).wait(1).to({y:216.3},0).wait(1).to({y:216.4},0).wait(1).to({y:216.6},0).wait(1).to({y:216.7},0).wait(1).to({y:216.8},0).wait(1).to({y:216.9},0).wait(1).to({y:217},0).wait(1).to({y:217.1},0).wait(1).to({y:217.2},0).wait(1).to({y:217.3},0).wait(1).to({y:217.4},0).wait(1).to({y:217.6},0).wait(1).to({y:217.7},0).wait(1).to({y:217.8},0).wait(1).to({y:217.9},0).wait(1).to({y:218},0).wait(1).to({y:218.1},0).wait(1).to({y:218.2},0).wait(1).to({y:218.3},0).wait(1).to({y:218.5},0).wait(1).to({y:218.3},0).wait(1).to({y:218.2},0).wait(1).to({y:218.1},0).wait(1).to({y:218},0).wait(1).to({y:217.9},0).wait(1).to({y:217.8},0).wait(1).to({y:217.6},0).wait(1).to({y:217.5},0).wait(1).to({y:217.4},0).wait(1).to({y:217.3},0).wait(1).to({y:217.2},0).wait(1).to({y:217.1},0).wait(1).to({y:216.9},0).wait(1).to({y:216.8},0).wait(1).to({y:216.7},0).wait(1).to({y:216.6},0).wait(1).to({y:216.5},0).wait(1).to({y:216.4},0).wait(1).to({y:216.3},0).wait(1).to({y:216.1},0).wait(1).to({y:216},0).wait(1).to({y:215.9},0).wait(1).to({y:215.8},0).wait(1).to({y:215.7},0).wait(1).to({y:215.6},0).wait(1).to({y:215.4},0).wait(1).to({y:215.3},0).wait(1).to({y:215.2},0).wait(1).to({y:215.1},0).wait(1));

	// viecka
	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(189.1,206.1,0.394,0.389,0,0,0,50.6,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:50.5,regY:25.6,x:189},0).wait(2).to({x:189.1,y:220.4},0).wait(1).to({x:189.2,y:220.6},0).wait(1).to({y:220.9},0).wait(1).to({y:221.1},0).wait(1).to({y:221.4},0).wait(1).to({y:221.6},0).wait(1).to({y:221.8},0).wait(1).to({y:222.1},0).wait(1).to({y:222.3},0).wait(1).to({y:222.6},0).wait(1).to({y:222.8},0).wait(1).to({x:189.3,y:223},0).wait(1).to({y:223.3},0).wait(1).to({y:223.5},0).wait(1).to({y:223.8},0).wait(1).to({y:224},0).wait(1).to({y:224.3},0).wait(1).to({y:224.5},0).wait(1).to({y:224.7},0).wait(1).to({y:225},0).wait(1).to({y:225.2},0).wait(1).to({y:225.5},0).wait(1).to({x:189.4,y:225.7},0).wait(1).to({y:225.9},0).wait(1).to({y:226.2},0).wait(1).to({y:226.4},0).wait(1).to({y:226.7},0).wait(1).to({y:226.9},0).wait(21).to({x:188.6,y:208},0).wait(1).to({y:223},0).wait(8));

	// oko prave
	this.instance_6 = new lib.Symbol21();
	this.instance_6.setTransform(189,204.8,0.394,0.389,0,0,0,37.8,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:21,x:189.1,y:205},0).wait(1).to({x:189.2,y:205.4},0).wait(1).to({x:189.4,y:205.7},0).wait(1).to({x:189.5,y:206},0).wait(1).to({x:189.7,y:206.4},0).wait(1).to({x:189.8,y:206.7},0).wait(1).to({x:190,y:207},0).wait(1).to({x:190.1,y:207.4},0).wait(1).to({x:190.3,y:207.7},0).wait(1).to({x:190.4,y:207.9},0).wait(1).to({y:208},0).wait(1).to({x:190.5,y:208.2},0).wait(1).to({x:190.6,y:208.4},0).wait(1).to({y:208.6},0).wait(1).to({x:190.7,y:208.7},0).wait(1).to({x:190.8,y:208.9},0).wait(1).to({y:209.1},0).wait(1).to({x:190.9,y:209.2},0).wait(1).to({x:191,y:209.4},0).wait(1).to({y:209.6},0).wait(1).to({x:191.1,y:209.7},0).wait(1).to({x:191.2,y:209.9},0).wait(1).to({y:210.1},0).wait(1).to({x:191.3,y:210.3},0).wait(1).to({x:191.1,y:210.4},0).wait(1).to({x:191,y:210.5},0).wait(1).to({x:190.8,y:210.6},0).wait(1).to({x:190.6,y:210.7},0).wait(1).to({x:190.4,y:210.8},0).wait(1).to({x:190.3,y:211},0).wait(1).to({x:190.1,y:211.1},0).wait(1).to({x:189.9,y:211.2},0).wait(1).to({x:189.8,y:211.3},0).wait(1).to({x:189.6,y:211.4},0).wait(1).to({x:189.4,y:211.6},0).wait(1).to({x:189.3,y:211.7},0).wait(1).to({x:189.1,y:211.8},0).wait(1).to({x:188.9,y:211.9},0).wait(1).to({x:188.7,y:212},0).wait(1).to({x:188.6,y:212.1},0).wait(1).to({x:188.4,y:212.3},0).wait(1).to({x:188.2,y:212.4},0).wait(1).to({x:188.1,y:212.5},0).wait(1).to({x:187.9,y:212.6},0).wait(1).to({x:187.7,y:212.7},0).wait(1).to({x:187.5,y:212.9},0).wait(1).to({x:188.9,y:204.7},0).wait(13));

	// bielko
	this.instance_7 = new lib.Symbol22();
	this.instance_7.setTransform(187.9,205.4,0.394,0.389,0,0,0,46.8,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:46.7,regY:26.9,x:187.8,y:205.3},0).wait(59));

	// ruka velka
	this.instance_8 = new lib.Symbol11();
	this.instance_8.setTransform(158.7,220.5,0.115,0.132,0,0,0,130.6,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:128.5,regY:106.5,rotation:-0.1,x:158.4,y:228},0).wait(59));

	// prsiplast
	this.instance_9 = new lib.Symbol10();
	this.instance_9.setTransform(195.2,239.9,0.115,0.132,0,0,0,371.8,281.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:372.5,regY:281.5,y:239.8},0).wait(2).to({y:239.7},0).wait(2).to({y:239.6},0).wait(2).to({y:239.5},0).wait(4).to({y:239.4},0).wait(5).to({y:239.3},0).wait(7).to({y:239.2},0).wait(15).to({y:239.3},0).wait(7).to({y:239.4},0).wait(5).to({y:239.5},0).wait(3).to({y:239.6},0).wait(2).to({y:239.7},0).wait(2).to({y:239.8},0).wait(1).to({y:239.9},0).wait(2));

	// kapuca
	this.instance_10 = new lib.Symbol12();
	this.instance_10.setTransform(187,200,0.115,0.132,0,0,0,191.8,171.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:191.5,regY:171.5,y:200.1},0).wait(1).to({y:200.2},0).wait(1).to({y:200.3},0).wait(1).to({x:187.1,y:200.4},0).wait(1).to({y:200.5},0).wait(2).to({y:200.6},0).wait(1).to({y:200.7},0).wait(2).to({x:187.2,y:200.8},0).wait(3).to({y:200.9},0).wait(3).to({y:201},0).wait(4).to({y:201.1},0).wait(2).to({x:187.3},0).wait(2).to({y:201.2},0).wait(5).to({y:201.3},0).wait(4).to({y:201.2},0).wait(4).to({y:201.1},0).wait(2).to({x:187.2},0).wait(2).to({y:201},0).wait(4).to({y:200.9},0).wait(3).to({y:200.8},0).wait(2).to({x:187.1,y:200.7},0).wait(2).to({y:200.6},0).wait(1).to({y:200.5},0).wait(2).to({y:200.4},0).wait(1).to({x:187,y:200.3},0).wait(1).to({y:200.2},0).wait(1).to({y:200},0).wait(1).to({x:186.9,y:199.9},0).wait(1));

	// kabat
	this.instance_11 = new lib.Symbol13();
	this.instance_11.setTransform(185.1,248,0.115,0.132,0,0,0,258.1,250.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:258,regY:251,y:247.8},0).wait(1).to({y:247.6},0).wait(1).to({y:247.4},0).wait(1).to({y:247.2},0).wait(1).to({y:247.1},0).wait(1).to({y:246.9},0).wait(1).to({y:246.8},0).wait(1).to({y:246.7},0).wait(1).to({y:246.6},0).wait(1).to({y:246.5},0).wait(2).to({y:246.4},0).wait(1).to({y:246.3},0).wait(2).to({y:246.2},0).wait(1).to({y:246.1},0).wait(2).to({y:246},0).wait(3).to({y:245.9},0).wait(2).to({y:245.8},0).wait(2).to({y:245.7},0).wait(2).to({y:245.6},0).wait(3).to({y:245.5},0).wait(2).to({y:245.6},0).wait(2).to({y:245.7},0).wait(2).to({y:245.8},0).wait(3).to({y:245.9},0).wait(2).to({y:246},0).wait(2).to({y:246.1},0).wait(1).to({y:246.2},0).wait(2).to({y:246.3},0).wait(2).to({y:246.4},0).wait(1).to({y:246.5},0).wait(1).to({y:246.6},0).wait(1).to({y:246.7},0).wait(1).to({y:246.8},0).wait(1).to({y:247},0).wait(1).to({y:247.1},0).wait(1).to({y:247.3},0).wait(1).to({y:247.4},0).wait(1).to({y:247.7},0).wait(1).to({y:247.9},0).wait(1).to({x:185,y:248},0).wait(1));

	// prsiplast zadok
	this.instance_12 = new lib.Symbol14();
	this.instance_12.setTransform(159.5,242.5,0.115,0.132,0,0,0,75.5,211.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:75,regY:212,x:159.4},0).wait(1).to({y:242.6},0).wait(1).to({x:159.5},0).wait(1).to({y:242.7},0).wait(2).to({y:242.8},0).wait(1).to({x:159.6},0).wait(1).to({y:242.9},0).wait(2).to({y:243},0).wait(1).to({x:159.7},0).wait(1).to({y:243.1},0).wait(2).to({y:243.2},0).wait(1).to({x:159.8},0).wait(1).to({y:243.3},0).wait(3).to({x:159.9,y:243.4},0).wait(2).to({y:243.5},0).wait(2).to({x:160,y:243.6},0).wait(2).to({y:243.7},0).wait(2).to({x:160.1,y:243.8},0).wait(2).to({y:243.9},0).wait(2).to({x:160.2,y:244},0).wait(2).to({y:244.1},0).wait(2).to({x:160.3,y:244.2},0).wait(3).to({y:244.3},0).wait(1).to({x:160.4},0).wait(1).to({y:244.4},0).wait(2).to({y:244.5},0).wait(1).to({x:160.5},0).wait(1).to({y:244.6},0).wait(2).to({y:244.7},0).wait(1).to({x:160.6},0).wait(1).to({y:244.8},0).wait(2).to({y:244.9},0).wait(1).to({x:160.7},0).wait(1).to({y:245},0).wait(3).to({x:160.5,y:244.5},0).wait(1).to({x:160.2,y:244},0).wait(1).to({x:159.9,y:243.5},0).wait(1).to({x:159.7,y:243},0).wait(1).to({x:159.4,y:242.5},0).wait(1));

	// batoh
	this.instance_13 = new lib.Symbol15();
	this.instance_13.setTransform(221.6,251,0.115,0.132,0,0,0,133.6,166.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:133.5,regY:166.5},0).wait(59));

	// sal
	this.instance_14 = new lib.Symbol16();
	this.instance_14.setTransform(208.3,215.3,0.115,0.132,0,0,0,44.7,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:192,regY:140,rotation:-0.9,x:225.5,y:224.5},0).wait(1).to({rotation:-1.9,x:225.6,y:224.3},0).wait(1).to({rotation:-2.8,x:225.7,y:224},0).wait(1).to({rotation:-3.7,x:225.9,y:223.7},0).wait(1).to({rotation:-4.7,x:226,y:223.4},0).wait(1).to({rotation:-5.6,x:226.1,y:223.1},0).wait(1).to({rotation:-6.5,x:226.3,y:222.8},0).wait(1).to({rotation:-7.5,x:226.4,y:222.5},0).wait(1).to({rotation:-8.4,x:226.5,y:222.2},0).wait(1).to({rotation:-9.3,x:226.6,y:221.9},0).wait(1).to({rotation:-10.3,x:226.7,y:221.6},0).wait(1).to({rotation:-11.2,x:226.8,y:221.3},0).wait(1).to({rotation:-12.1,x:226.9,y:221},0).wait(1).to({rotation:-13.1,x:227,y:220.7},0).wait(1).to({rotation:-14,y:220.4},0).wait(1).to({rotation:-14.9,x:227.2,y:220.1},0).wait(1).to({rotation:-15.9,y:219.8},0).wait(1).to({rotation:-16.8,x:227.3,y:219.5},0).wait(1).to({rotation:-17.7,x:227.4,y:219.2},0).wait(1).to({rotation:-17.3,y:219.3},0).wait(1).to({rotation:-16.9,x:227.3,y:219.5},0).wait(1).to({rotation:-16.4,y:219.6},0).wait(1).to({rotation:-16,y:219.8},0).wait(1).to({rotation:-15.5,x:227.2,y:220},0).wait(1).to({rotation:-15.1,x:227.1,y:220.1},0).wait(1).to({rotation:-14.6,y:220.2},0).wait(1).to({rotation:-14.2,y:220.3},0).wait(1).to({rotation:-13.8,y:220.5},0).wait(1).to({rotation:-13.3,x:227,y:220.6},0).wait(1).to({rotation:-12.9,x:226.9,y:220.8},0).wait(1).to({rotation:-12.4,y:221},0).wait(1).to({rotation:-12,y:221.1},0).wait(1).to({rotation:-11.5,y:221.3},0).wait(1).to({rotation:-11.1,x:226.8,y:221.4},0).wait(1).to({rotation:-10.6,x:226.7,y:221.5},0).wait(1).to({rotation:-10.2,y:221.7},0).wait(1).to({rotation:-9.8,y:221.8},0).wait(1).to({rotation:-9.3,x:226.6,y:221.9},0).wait(1).to({rotation:-8.9,x:226.5,y:222.1},0).wait(1).to({rotation:-8.4,y:222.2},0).wait(1).to({rotation:-8,x:226.4,y:222.4},0).wait(1).to({rotation:-7.5,y:222.5},0).wait(1).to({rotation:-7.1,x:226.3,y:222.6},0).wait(1).to({rotation:-6.7,y:222.8},0).wait(1).to({rotation:-6.2,x:226.2,y:222.9},0).wait(1).to({rotation:-5.8,x:226.1,y:223.1},0).wait(1).to({rotation:-5.3,y:223.2},0).wait(1).to({rotation:-4.9,x:226,y:223.3},0).wait(1).to({rotation:-4.4,y:223.5},0).wait(1).to({rotation:-4,x:225.9,y:223.6},0).wait(1).to({rotation:-3.5,y:223.8},0).wait(1).to({rotation:-3.1,x:225.8,y:223.9},0).wait(1).to({rotation:-2.7,x:225.7,y:224},0).wait(1).to({rotation:-2.2,x:225.6,y:224.2},0).wait(1).to({rotation:-1.8,x:225.5,y:224.3},0).wait(1).to({rotation:-1.3,y:224.4},0).wait(1).to({rotation:-0.9,y:224.5},0).wait(1).to({rotation:-0.4,x:225.4,y:224.7},0).wait(1).to({rotation:0,x:225.3,y:224.8},0).wait(1));

	// palec
	this.instance_15 = new lib.Symbol17();
	this.instance_15.setTransform(142.9,238.7,0.115,0.132,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:38.5,regY:41.5,rotation:1.1,x:138.3,y:244.1},0).wait(1).to({rotation:2.3,x:138.2,y:244},0).wait(1).to({rotation:3.5,x:138.1,y:243.9},0).wait(1).to({rotation:4.7,x:137.9,y:243.8},0).wait(1).to({rotation:5.9,x:137.8,y:243.7},0).wait(1).to({rotation:7.1,x:137.7,y:243.6},0).wait(1).to({rotation:8.3,x:137.6,y:243.5},0).wait(1).to({rotation:9.5,y:243.4},0).wait(1).to({rotation:10.7,x:137.5,y:243.2},0).wait(1).to({rotation:11.9,x:137.3,y:243.1},0).wait(1).to({rotation:13.1,x:137.2,y:243},0).wait(1).to({rotation:14.3,y:242.9},0).wait(1).to({rotation:15.5,x:137.1,y:242.8},0).wait(1).to({rotation:16.7,x:137,y:242.6},0).wait(1).to({rotation:17.9,x:136.9,y:242.5},0).wait(1).to({rotation:19.1,x:136.8,y:242.4},0).wait(1).to({rotation:20.3,y:242.3},0).wait(1).to({rotation:21.4,x:136.7,y:242.1},0).wait(1).to({rotation:22.6,x:136.6,y:242},0).wait(1).to({rotation:23.8,y:241.9},0).wait(1).to({rotation:25,x:136.5,y:241.8},0).wait(1).to({rotation:26.2,y:241.6},0).wait(1).to({rotation:27.4,x:136.4,y:241.5},0).wait(1).to({rotation:28.6,x:136.3,y:241.3},0).wait(1).to({rotation:29.8,y:241.2},0).wait(1).to({rotation:28.9,y:241.3},0).wait(1).to({rotation:28.1,y:241.5},0).wait(1).to({rotation:27.2,x:136.4},0).wait(1).to({rotation:26.3,x:136.5,y:241.6},0).wait(1).to({rotation:25.4,y:241.7},0).wait(1).to({rotation:24.5,x:136.6,y:241.9},0).wait(1).to({rotation:23.7,x:136.5},0).wait(1).to({rotation:22.8,x:136.6,y:242},0).wait(1).to({rotation:21.9,y:242.1},0).wait(1).to({rotation:21,x:136.7,y:242.2},0).wait(1).to({rotation:20.1,y:242.3},0).wait(1).to({rotation:19.3,x:136.8,y:242.4},0).wait(1).to({rotation:18.4,x:136.9,y:242.5},0).wait(1).to({rotation:17.5,x:137,y:242.6},0).wait(1).to({rotation:16.6,y:242.7},0).wait(1).to({rotation:15.8},0).wait(1).to({rotation:14.9,x:137.1,y:242.9},0).wait(1).to({rotation:14,x:137.2},0).wait(1).to({rotation:13.1,y:243},0).wait(1).to({rotation:12.2,x:137.4,y:243.1},0).wait(1).to({rotation:11.4},0).wait(1).to({rotation:10.5,y:243.3},0).wait(1).to({rotation:9.6,x:137.6,y:243.4},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:7.8,x:137.7,y:243.5},0).wait(1).to({rotation:7,x:137.8,y:243.6},0).wait(1).to({rotation:6.1,y:243.7},0).wait(1).to({rotation:5.2,x:137.9},0).wait(1).to({rotation:4.3,x:138,y:243.8},0).wait(1).to({rotation:3.5,x:138.1,y:243.9},0).wait(1).to({rotation:2.6,x:138.2},0).wait(1).to({rotation:1.7,x:138.3,y:244},0).wait(1).to({rotation:0.8,y:244.1},0).wait(1).to({rotation:-0.1,x:138.4,y:244.2},0).wait(1));

	// efekt
	this.instance_16 = new lib.Symbol30();
	this.instance_16.setTransform(125.7,163,0.394,0.389,0,0,0,30.6,67.1);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:30,regY:67.9,x:125.5,y:163.3},0).wait(59));

	// stafka
	this.instance_17 = new lib.Symbol18();
	this.instance_17.setTransform(139.9,244,0.115,0.132,0,0,0,517.7,706.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:340,regY:540,skewX:0.1,x:119.4,y:222},0).wait(1).to({skewX:0.3,skewY:0.1,x:119.5},0).wait(1).to({skewX:0.4,skewY:0.3,y:221.9},0).wait(1).to({skewX:0.5,skewY:0.4,x:119.6},0).wait(1).to({skewX:0.6,skewY:0.5},0).wait(1).to({skewX:0.8,skewY:0.6,x:119.7,y:221.8},0).wait(1).to({skewX:0.9,skewY:0.8},0).wait(1).to({skewX:1.1,skewY:0.9,x:119.8,y:221.7},0).wait(1).to({skewX:1.2,skewY:1.1,x:119.9,y:221.6},0).wait(1).to({skewX:1.4,skewY:1.3},0).wait(1).to({skewX:1.6,skewY:1.5,x:120,y:221.5},0).wait(1).to({skewX:1.8,skewY:1.7,x:120.1,y:221.4},0).wait(1).to({skewX:2.1,skewY:2,x:120.2,y:221.3},0).wait(1).to({skewX:2.4,skewY:2.3,x:120.3,y:221.2},0).wait(1).to({skewX:2.8,skewY:2.6,x:120.5,y:221.1},0).wait(1).to({skewX:3.2,skewY:3.1,x:120.6,y:220.9},0).wait(1).to({skewX:4.1,skewY:3.9,x:121,y:220.7},0).wait(1).to({skewX:5.1,skewY:5,x:121.4,y:220.3},0).wait(1).to({skewX:5.7,skewY:5.6,x:121.6,y:220.1},0).wait(1).to({skewX:6,skewY:5.9,x:121.8,y:220},0).wait(1).to({skewX:6.3,skewY:6.2,x:121.9,y:219.9},0).wait(1).to({skewX:6.4,skewY:6.3,x:122},0).wait(1).to({skewX:6.5,skewY:6.4},0).wait(1).to({skewX:6.6,skewY:6.5},0).wait(1).to({x:122.1},0).wait(1).to({x:122},0).wait(1).to({skewX:6.5,skewY:6.4},0).wait(1).to({skewX:6.4,skewY:6.3,x:121.9},0).wait(1).to({skewX:6.3,skewY:6.2,y:220},0).wait(1).to({skewX:6.1,skewY:6,x:121.8},0).wait(1).to({skewX:5.9,skewY:5.8,x:121.7},0).wait(1).to({skewX:5.7,skewY:5.6,y:220.1},0).wait(1).to({skewX:5.5,skewY:5.4,x:121.6,y:220.2},0).wait(1).to({skewX:5.3,skewY:5.2,x:121.4,y:220.3},0).wait(1).to({skewX:5.1,skewY:5,y:220.4},0).wait(1).to({skewX:4.8,skewY:4.7,x:121.3},0).wait(1).to({skewX:4.6,skewY:4.4,x:121.2,y:220.5},0).wait(1).to({skewX:4.3,skewY:4.2,x:121.1,y:220.6},0).wait(1).to({skewX:3.9,skewY:3.8,x:120.9,y:220.7},0).wait(1).to({skewX:3.6,skewY:3.5,x:120.8,y:220.8},0).wait(1).to({skewX:3.3,skewY:3.1,x:120.7,y:221},0).wait(1).to({skewX:2.9,skewY:2.8,x:120.5},0).wait(1).to({skewX:2.6,skewY:2.5,x:120.4,y:221.2},0).wait(1).to({skewX:2.4,skewY:2.3,x:120.3,y:221.3},0).wait(1).to({skewX:2.1,skewY:2,x:120.2},0).wait(1).to({skewX:1.8,skewY:1.7,x:120.1,y:221.4},0).wait(1).to({skewX:1.6,skewY:1.5,x:120,y:221.5},0).wait(1).to({skewX:1.4,skewY:1.3,x:119.9,y:221.6},0).wait(1).to({skewX:1.2,skewY:1.1,y:221.7},0).wait(1).to({skewX:1,skewY:0.9,x:119.8},0).wait(1).to({skewX:0.8,skewY:0.7,x:119.7,y:221.8},0).wait(1).to({skewX:0.7,skewY:0.6,x:119.6},0).wait(1).to({skewX:0.5,skewY:0.4,y:221.9},0).wait(1).to({skewX:0.4,skewY:0.3,x:119.5},0).wait(1).to({skewX:0.3,skewY:0.2},0).wait(1).to({skewX:0.2,skewY:0.1,y:222},0).wait(1).to({skewX:0.1,skewY:0,x:119.4},0).wait(1).to({y:222.1},0).wait(1).to({skewY:-0.1,y:222},0).wait(1));

	// ruka
	this.instance_18 = new lib.Symbol19();
	this.instance_18.setTransform(158.7,220.5,0.115,0.132,0,0,0,243,-89.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:84.5,regY:65.5,rotation:-0.1,x:140.5,y:241},0).wait(59));

	// tien
	this.instance_19 = new lib.Symbol20();
	this.instance_19.setTransform(179,275.3,0.115,0.132,0,0,0,650.2,340.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:649.5,regY:340.5,x:178.9},0).wait(59));

	// Layer 43 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AExMWQBKiQCZhAQCWhBCJgdQB/gYBkgbQCVhDBuhUQBzhcA3g2Qg8A/hxBpQihCXjFChQhoBXiABiQiDBhi0AgQgvhJgxhHg");
	mask.setTransform(147.6,93.5);

	// Layer 44
	this.instance_20 = new lib.Symbol29();
	this.instance_20.setTransform(54.2,275.5,0.394,0.419,0,-56.9,-33.6,729.6,21.6);

	this.instance_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:729.7,regY:21.2,scaleY:0.42,skewX:-57,skewY:-33.7,x:56.6,y:273.8},0).wait(1).to({x:59.1,y:272.2},0).wait(1).to({x:61.7,y:270.6},0).wait(1).to({x:64.2,y:269},0).wait(1).to({x:66.7,y:267.4},0).wait(1).to({x:69.2,y:265.8},0).wait(1).to({x:71.7,y:264.2},0).wait(1).to({x:74.2,y:262.6},0).wait(1).to({x:76.7,y:261},0).wait(1).to({x:79.2,y:259.4},0).wait(1).to({x:81.7,y:257.8},0).wait(1).to({x:84.2,y:256.2},0).wait(1).to({x:86.7,y:254.6},0).wait(1).to({x:89.2,y:253},0).wait(1).to({x:91.7,y:251.4},0).wait(1).to({x:94.2,y:249.8},0).wait(1).to({x:96.7,y:248.2},0).wait(1).to({x:99.3,y:246.6},0).wait(1).to({x:101.8,y:245},0).wait(1).to({x:104.3,y:243.4},0).wait(1).to({x:106.8,y:241.8},0).wait(1).to({x:109.3,y:240.2},0).wait(1).to({x:111.8,y:238.6},0).wait(1).to({x:114.3,y:237},0).wait(1).to({x:116.8,y:235.4},0).wait(1).to({x:119.3,y:233.8},0).wait(1).to({x:121.8,y:232.2},0).wait(1).to({x:124.3,y:230.6},0).wait(1).to({x:126.8,y:229},0).wait(1).to({x:129.3,y:227.4},0).wait(1).to({x:131.8,y:225.8},0).wait(1).to({x:134.4,y:224.2},0).wait(1).to({x:136.9,y:222.6},0).wait(1).to({x:139.4,y:221},0).wait(1).to({x:141.9,y:219.4},0).wait(1).to({x:144.4,y:217.8},0).wait(1).to({x:146.9,y:216.2},0).wait(1).to({x:149.4,y:214.6},0).wait(1).to({x:151.9,y:213},0).wait(1).to({x:154.4,y:211.4},0).wait(1).to({x:156.9,y:209.8},0).wait(1).to({x:159.4,y:208.2},0).wait(1).to({x:161.9,y:206.6},0).wait(1).to({x:164.4,y:205},0).wait(1).to({x:166.9,y:203.4},0).wait(1).to({x:169.4,y:201.8},0).wait(1).to({x:172,y:200.2},0).wait(1).to({x:174.5,y:198.6},0).wait(1).to({x:177,y:197},0).wait(1).to({x:179.5,y:195.4},0).wait(1).to({x:182,y:193.8},0).wait(1).to({x:184.5,y:192.2},0).wait(1).to({x:187,y:190.6},0).wait(1).to({x:189.5,y:189},0).wait(1).to({x:192,y:187.4},0).wait(1).to({x:194.5,y:185.8},0).wait(1).to({x:197,y:184.2},0).wait(1).to({x:199.5,y:182.6},0).wait(1).to({x:202,y:181},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277.7,271.7,219.2,214);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;