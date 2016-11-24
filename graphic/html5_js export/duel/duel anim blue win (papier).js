(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 490,
	height: 420,
	fps: 24,
	color: "#2F2729",
	webfonts: {},
	manifest: [
		{src:"duel (png)/dualpapier.png", id:"dualpapier"},
		{src:"duel (png)/bielkoprave.png", id:"bielkoprave"},
		{src:"duel (png)/bielkoprave_1.png", id:"bielkoprave_1"},
		{src:"duel (png)/bota0.png", id:"bota0"},
		{src:"duel (png)/bota0_1.png", id:"bota0_1"},
		{src:"duel (png)/bota1.png", id:"bota1"},
		{src:"duel (png)/bota1_1.png", id:"bota1_1"},
		{src:"duel (png)/COP.png", id:"COP"},
		{src:"duel (png)/COP_1.png", id:"COP_1"},
		{src:"duel (png)/efektblue.png", id:"efektblue"},
		{src:"duel (png)/efektred.png", id:"efektred"},
		{src:"duel (png)/hlava1.png", id:"hlava1"},
		{src:"duel (png)/hlava2.png", id:"hlava2"},
		{src:"duel (png)/hlava2_1.png", id:"hlava2_1"},
		{src:"duel (png)/hlava3.png", id:"hlava3"},
		{src:"duel (png)/kamen.png", id:"kamen"},
		{src:"duel (png)/Layer18.png", id:"Layer18"},
		{src:"duel (png)/Layer8111.png", id:"Layer8111"},
		{src:"duel (png)/Layer811.png", id:"Layer811"},
		{src:"duel (png)/Layer9.png", id:"Layer9"},
		{src:"duel (png)/Layer9_1.png", id:"Layer9_1"},
		{src:"duel (png)/nos.png", id:"nos"},
		{src:"duel (png)/nos_1.png", id:"nos_1"},
		{src:"duel (png)/okovnutrolave.png", id:"okovnutrolave"},
		{src:"duel (png)/okovnutrolave_1.png", id:"okovnutrolave_1"},
		{src:"duel (png)/okovonkprave.png", id:"okovonkprave"},
		{src:"duel (png)/okovonkprave_1.png", id:"okovonkprave_1"},
		{src:"duel (png)/rukazadna.png", id:"rukazadna"},
		{src:"duel (png)/rukazadna_1.png", id:"rukazadna_1"},
		{src:"duel (png)/SLZY.png", id:"SLZY"},
		{src:"duel (png)/usta2.png", id:"usta2"},
		{src:"duel (png)/usta2copy.png", id:"usta2copy"},
		{src:"duel (png)/USTA6copy.png", id:"USTA6copy"},
		{src:"duel (png)/viecko.png", id:"viecko"},
		{src:"duel (png)/vir21.png", id:"vir21"},
		{src:"duel (png)/virrotacia.png", id:"virrotacia"},
		{src:"duel (png)/vnutorplast1.png", id:"vnutorplast1"},
		{src:"duel (png)/vnutorplast.png", id:"vnutorplast"},
		{src:"duel (png)/vybuch.png", id:"vybuch"}
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



(lib.dualpapier = function() {
	this.initialize(img.dualpapier);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,303);


(lib.bielkoprave = function() {
	this.initialize(img.bielkoprave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,82);


(lib.bielkoprave_1 = function() {
	this.initialize(img.bielkoprave_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,82);


(lib.bota0 = function() {
	this.initialize(img.bota0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.bota0_1 = function() {
	this.initialize(img.bota0_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,41);


(lib.bota1 = function() {
	this.initialize(img.bota1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.bota1_1 = function() {
	this.initialize(img.bota1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.COP = function() {
	this.initialize(img.COP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,100);


(lib.COP_1 = function() {
	this.initialize(img.COP_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,100);


(lib.efektblue = function() {
	this.initialize(img.efektblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,274);


(lib.efektred = function() {
	this.initialize(img.efektred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,275);


(lib.hlava1 = function() {
	this.initialize(img.hlava1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.hlava2 = function() {
	this.initialize(img.hlava2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.hlava2_1 = function() {
	this.initialize(img.hlava2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.hlava3 = function() {
	this.initialize(img.hlava3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.kamen = function() {
	this.initialize(img.kamen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,223);


(lib.Layer18 = function() {
	this.initialize(img.Layer18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,82);


(lib.Layer8111 = function() {
	this.initialize(img.Layer8111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,286);


(lib.Layer811 = function() {
	this.initialize(img.Layer811);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,280);


(lib.Layer9 = function() {
	this.initialize(img.Layer9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,180);


(lib.Layer9_1 = function() {
	this.initialize(img.Layer9_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,180);


(lib.nos = function() {
	this.initialize(img.nos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,28);


(lib.nos_1 = function() {
	this.initialize(img.nos_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,30);


(lib.okovnutrolave = function() {
	this.initialize(img.okovnutrolave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,53);


(lib.okovnutrolave_1 = function() {
	this.initialize(img.okovnutrolave_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,52);


(lib.okovonkprave = function() {
	this.initialize(img.okovonkprave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,77);


(lib.okovonkprave_1 = function() {
	this.initialize(img.okovonkprave_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,77);


(lib.rukazadna = function() {
	this.initialize(img.rukazadna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,35);


(lib.rukazadna_1 = function() {
	this.initialize(img.rukazadna_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,34);


(lib.SLZY = function() {
	this.initialize(img.SLZY);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,72);


(lib.usta2 = function() {
	this.initialize(img.usta2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,44);


(lib.usta2copy = function() {
	this.initialize(img.usta2copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,34);


(lib.USTA6copy = function() {
	this.initialize(img.USTA6copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,73);


(lib.viecko = function() {
	this.initialize(img.viecko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,107);


(lib.vir21 = function() {
	this.initialize(img.vir21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,318);


(lib.virrotacia = function() {
	this.initialize(img.virrotacia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,191);


(lib.vnutorplast1 = function() {
	this.initialize(img.vnutorplast1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,135);


(lib.vnutorplast = function() {
	this.initialize(img.vnutorplast);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,134);


(lib.vybuch = function() {
	this.initialize(img.vybuch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,595);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vybuch();
	this.instance.setTransform(0,0,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,276.2);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kamen();
	this.instance.setTransform(0,0,0.268,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,60);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.virrotacia();
	this.instance.setTransform(-89.3,-103,2.502,2.503);

	this.instance_1 = new lib.vir21();
	this.instance_1.setTransform(-97.8,-137.6,1.691,1.771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.8,-137.6,540.9,563);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.efektred();
	this.instance.setTransform(-4.6,5.4,0.469,0.469,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-6,172.6,140);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.efektblue();
	this.instance.setTransform(5.7,13.1,0.491,0.491,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.7,7.6,176.1,140);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.viecko();
	this.instance.setTransform(-53.2,-27.3,0.711,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-27.3,127.9,67.2);


(lib.Symbol62copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AgGALYAAAAAEAHAEAKYABACACADABACYACACABADACADYABACACADABACYACACABACACACYABACACADACAEYACAEACADAAAAYABAAAAgCgBgEYgBgDgBgEgCgFYgCgGgCgFgBgEYgDgHgCgFgBgEYgEgMgDgHAAAAYgCgEgCgDgCgEYAAAAgBgHgFgLYgCgEgCgFgDgGYgCgFgDgFgCgFYgDgFgCgDgBgDYgCgDgBgCgBAAYAAABABADABAEYABAEABAEABACYAAADABACAAADYAAACABADABADYABADAAADABADYABACAAADABADYADALACAIAAAAYACADACAFACAE");
	this.shape.setTransform(4.5,117.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFFF").s().p("At0JDYANgHAOgHANgGYAOgGANgIAOgHYANgHAOgHANgIYANgHANgHANgIIAUgKIAVgMYAGgEAHgDAHgFYAGgEAGgEAHgFYAMgLAMgMAKgNIANgUIAMgTYAFgGAEgHAEgFIANgSIAOgQYAEgGAFgFAGgFIAOgQIARgOYAFgEAGgFAEgEIAJgHIAFgDIAEgDYALgHALgHAMgEYADAAADgBACAAIAJAAYACAAACABADAAYACABACACABABIABAAIAAAAYgKAAAHAAgCAAIAAAAIABABIACABYACABADABAAAAYAAABgBABgBABYAAABgCAAABABYACACAAACACACYABACACACABACYALAMAKANAMAJIAAAAIAGADYAJAEAIAFALACYAFACAGABAGABYACAAADABADAAYADAAADAAADAAYAHgBAGAAAGgBYAGgBAGgCAGgCYAMgDAKgGAKgFYAFgDADgDAEgDYAEgDAEgEADgDYAHgGAFgHAFgGYAFgGAEgGAEgHIAFgIIABgDIADgGYACgFACgDACgGIAGgRYACgFACgHACgFIAEgPIAEgPYABgFABgFABgFIAFgdIgEAJYACgNAEgMAPgKYADgCAEgCAFgCIAHgCYACgBADAAADgBIAEgBIACAAIABAAYABAAgBAAABAAIAAAAIABAAYADgBAEAAADgBIAWgCYAegEAcgCAjgLIANgFYAJgEgDACAIgEYAHgDAFgEAFgEYAFgEAFgEAEgEYAFgFAEgGADgHYACgDACgDABgEIACgFIAAgBYABgCgBAEAAAAIAAgBIABgBIAEgKYABgCABAAAAAAIACgCIAIgKYAEgDAEgEAEgDYAIgHAJgHAKgHYAEgDAFgEAFgDYADgBADgCACgBIABgBIAAAAYACgCgDADAAAAIAAAAIADgCIAEgDYANgJAHgCAKgFIAHgDYACgBACAAACgBYAEgDAEAAADgBYACgBABAAABAAIACAAYAAAAABAAAAAAYABAAABgBAAABYAAAAAAAAAAAAIAAAAIAAAAIAAAAYACAAgRAAAHAAIABAAYAOABAOACAOgBYAHAAAHgBAHgBIACgBYAAAAACAAgDAAIAAAAIABAAIABgBIAGgBIAKgDYAHgCAJgCAJgCYAIgDAIgDAIgCYAIgEAIgCAIgDYAEgBAEgBAEgCYACAAgFABAHgBIAAAAIABgBIABAAIACgBYACgBACgBABAAYAHgDAHgCAGgCYAJgDAIgDAIgDIAMgGIALgFIAVgMIATgOIAKgHIAIgIIASgQYAFgGAFgFAGgGYAUgWARgZAPgZIAWgkYAHgMAIgLAHgMYAPgXARgWASgVYAIgKAKgKAKgIIABgBIAAAAYABgBgCABAAAAIABAAIACgCIAEgDIAJgGYAGgDAGgDAFgEYAGgDAGgDAHgCIATgJYAMgFANgFANgFIABAAYADgCACgEgBgEYgCgEgEgCgEACYgNAFgNAEgNAFIgUAHYgHADgGACgHAEYgHADgHADgGADIgJAFIgFADIgCABIgBAAIgBABIgBABYgMAJgLAJgLAKYgVATgTAVgTAVYgKALgJALgJALYgJALgJAKgJALYgSAUgSATgVAPIgPAMIgQAJIgIAFIgIAEIgRAHIgRAFIgIADIgIABIgQADYgHABgHAAgHABYgCAAgBAAgCAAIgDAAIgBAAIgBAAIAAAAYAHgBgFAAABAAYgDAAgDgBgDgBIgJgCYgDgBgDgBgDgCYgGgCgGgCgFgDYgGgDgEgCgIgDIgKgEIgFgCIgBgBIgBAAIAAAAYgEgBADABgBgBIgDgBYgHgCgHgCgGgCYgOgDgOAAgOgBIAAAAYAGAAgQAAABAAIgBAAIgDAAIgFABIgKABYgHABgFACgHABIgJADIgIADYgFACgFACgFADYgJAFgKAFgHAFYgEADgEADgEACIgLAJYgHAFgGAHgHAGYgHAHgEAFgFAFIgDAEIgCACIAAABYAAgBgDADABgBIgBABIgBABYgCADgDADgCADYgFAHgFAGgFAHYgKAOgJAOgIAQYgEAHgEAJgEAIIgFANYgBACgBACgBADIgCAIIgDAIYgBACgBADAAACIgBAKIAAABIAAABYAAgBgCAFABgCIAAAAYAAAAAAAAAAAAYABAAAAAAAAAAYABAAAAgBABABYAAAAAAAAAAABYAAABgBAAABAAYACAAgJAFACgBYgCABgCABgCABYgJAEgJAEgMACYgMACgNACgMAAIgKABYgDAAgDAAgEAAYgDAAgEAAgDAAIgBAAIAAAAYAAAAgBAAABAAIgCAAIgDAAIgGAAIgNAAIgOABYgJABgKACgJACYgnAIgoAbgYAjIgEAKIgOAXIgNAWIgGALYgCADgCADgCADIgGAIYgCADgDAEgCAEIgEAGIgCADIAAAAYABgBgDAEAEgGIAAAAIAAAAIAAAAIAAAAIgBABYgCABgBACgBABYgBAAgBABAAAAYAAAAAAAAABAAYAAgBAAABABgBYACgCABAAADgBYACgBABAAACAAYABAAACgBACABYAAAAABAAABAAYAAAAABAAABAAYABAAABABABABYABAAAAABAAACIAFACYgOgFgRgBgPgCYgGgCgFgBgGgBYgFgBgHAAgGgBYgCAAgFAAgEgBYgFAAgEAAgEAAYgDABgBAAgDABIgDABIAAAAIAAAAYgCAAAHAAgKAAIgCABIgCAAYgGACgGACgFADYgFACgFACgFADYgEADgEADgFACYgDADgEADgEADYgPALgOAKgMAMIgFAEIgEAFIgIAIYgGAHgEAFgGAHIgPASIgOAUYgEAHgEAGgFAHIgMAUIgMAVYgEAHgDAGgDAHIgKAVIgFAKIgFAJYgHAMgJALgJAKYgFAFgGAFgGAFYgFAEgGAEgGAEIgTANIgTAMYgNAIgMAIgNAIYgNAIgNAHgNAIYgNAHgNAHgOAHYgNAGgOAGgOAGYgEACgBAFABADYACAEAEACAEgCYAAAAAAAAABAA");
	this.shape_1.setTransform(88.9,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,179.4,125.8);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgGALYAAAAAEAHAEAKYABACACADABACYACACABADACADYABACACADABACYACACABACACACYABACACADACAEYACAEACADAAAAYABAAAAgCgBgEYgBgDgBgEgCgFYgCgGgCgFgBgEYgDgHgCgFgBgEYgEgMgDgHAAAAYgCgEgCgDgCgEYAAAAgBgHgFgLYgCgEgCgFgDgGYgCgFgDgFgCgFYgDgFgCgDgBgDYgCgDgBgCgBAAYAAABABADABAEYABAEABAEABACYAAADABACAAADYAAACABADABADYABADAAADABADYABACAAADABADYADALACAIAAAAYACADACAFACAE");
	this.shape.setTransform(4.5,117.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0066").s().p("At0JDYANgHAOgHANgGYAOgGANgIAOgHYANgHAOgHANgIYANgHANgHANgIIAUgKIAVgMYAGgEAHgDAHgFYAGgEAGgEAHgFYAMgLAMgMAKgNIANgUIAMgTYAFgGAEgHAEgFIANgSIAOgQYAEgGAFgFAGgFIAOgQIARgOYAFgEAGgFAEgEIAJgHIAFgDIAEgDYALgHALgHAMgEYADAAADgBACAAIAJAAYACAAACABADAAYACABACACABABIABAAIAAAAYgKAAAHAAgCAAIAAAAIABABIACABYACABADABAAAAYAAABgBABgBABYAAABgCAAABABYACACAAACACACYABACACACABACYALAMAKANAMAJIAAAAIAGADYAJAEAIAFALACYAFACAGABAGABYACAAADABADAAYADAAADAAADAAYAHgBAGAAAGgBYAGgBAGgCAGgCYAMgDAKgGAKgFYAFgDADgDAEgDYAEgDAEgEADgDYAHgGAFgHAFgGYAFgGAEgGAEgHIAFgIIABgDIADgGYACgFACgDACgGIAGgRYACgFACgHACgFIAEgPIAEgPYABgFABgFABgFIAFgdIgEAJYACgNAEgMAPgKYADgCAEgCAFgCIAHgCYACgBADAAADgBIAEgBIACAAIABAAYABAAgBAAABAAIAAAAIABAAYADgBAEAAADgBIAWgCYAegEAcgCAjgLIANgFYAJgEgDACAIgEYAHgDAFgEAFgEYAFgEAFgEAEgEYAFgFAEgGADgHYACgDACgDABgEIACgFIAAgBYABgCgBAEAAAAIAAgBIABgBIAEgKYABgCABAAAAAAIACgCIAIgKYAEgDAEgEAEgDYAIgHAJgHAKgHYAEgDAFgEAFgDYADgBADgCACgBIABgBIAAAAYACgCgDADAAAAIAAAAIADgCIAEgDYANgJAHgCAKgFIAHgDYACgBACAAACgBYAEgDAEAAADgBYACgBABAAABAAIACAAYAAAAABAAAAAAYABAAABgBAAABYAAAAAAAAAAAAIAAAAIAAAAIAAAAYACAAgRAAAHAAIABAAYAOABAOACAOgBYAHAAAHgBAHgBIACgBYAAAAACAAgDAAIAAAAIABAAIABgBIAGgBIAKgDYAHgCAJgCAJgCYAIgDAIgDAIgCYAIgEAIgCAIgDYAEgBAEgBAEgCYACAAgFABAHgBIAAAAIABgBIABAAIACgBYACgBACgBABAAYAHgDAHgCAGgCYAJgDAIgDAIgDIAMgGIALgFIAVgMIATgOIAKgHIAIgIIASgQYAFgGAFgFAGgGYAUgWARgZAPgZIAWgkYAHgMAIgLAHgMYAPgXARgWASgVYAIgKAKgKAKgIIABgBIAAAAYABgBgCABAAAAIABAAIACgCIAEgDIAJgGYAGgDAGgDAFgEYAGgDAGgDAHgCIATgJYAMgFANgFANgFIABAAYADgCACgEgBgEYgCgEgEgCgEACYgNAFgNAEgNAFIgUAHYgHADgGACgHAEYgHADgHADgGADIgJAFIgFADIgCABIgBAAIgBABIgBABYgMAJgLAJgLAKYgVATgTAVgTAVYgKALgJALgJALYgJALgJAKgJALYgSAUgSATgVAPIgPAMIgQAJIgIAFIgIAEIgRAHIgRAFIgIADIgIABIgQADYgHABgHAAgHABYgCAAgBAAgCAAIgDAAIgBAAIgBAAIAAAAYAHgBgFAAABAAYgDAAgDgBgDgBIgJgCYgDgBgDgBgDgCYgGgCgGgCgFgDYgGgDgEgCgIgDIgKgEIgFgCIgBgBIgBAAIAAAAYgEgBADABgBgBIgDgBYgHgCgHgCgGgCYgOgDgOAAgOgBIAAAAYAGAAgQAAABAAIgBAAIgDAAIgFABIgKABYgHABgFACgHABIgJADIgIADYgFACgFACgFADYgJAFgKAFgHAFYgEADgEADgEACIgLAJYgHAFgGAHgHAGYgHAHgEAFgFAFIgDAEIgCACIAAABYAAgBgDADABgBIgBABIgBABYgCADgDADgCADYgFAHgFAGgFAHYgKAOgJAOgIAQYgEAHgEAJgEAIIgFANYgBACgBACgBADIgCAIIgDAIYgBACgBADAAACIgBAKIAAABIAAABYAAgBgCAFABgCIAAAAYAAAAAAAAAAAAYABAAAAAAAAAAYABAAAAgBABABYAAAAAAAAAAABYAAABgBAAABAAYACAAgJAFACgBYgCABgCABgCABYgJAEgJAEgMACYgMACgNACgMAAIgKABYgDAAgDAAgEAAYgDAAgEAAgDAAIgBAAIAAAAYAAAAgBAAABAAIgCAAIgDAAIgGAAIgNAAIgOABYgJABgKACgJACYgnAIgoAbgYAjIgEAKIgOAXIgNAWIgGALYgCADgCADgCADIgGAIYgCADgDAEgCAEIgEAGIgCADIAAAAYABgBgDAEAEgGIAAAAIAAAAIAAAAIAAAAIgBABYgCABgBACgBABYgBAAgBABAAAAYAAAAAAAAABAAYAAgBAAABABgBYACgCABAAADgBYACgBABAAACAAYABAAACgBACABYAAAAABAAABAAYAAAAABAAABAAYABAAABABABABYABAAAAABAAACIAFACYgOgFgRgBgPgCYgGgCgFgBgGgBYgFgBgHAAgGgBYgCAAgFAAgEgBYgFAAgEAAgEAAYgDABgBAAgDABIgDABIAAAAIAAAAYgCAAAHAAgKAAIgCABIgCAAYgGACgGACgFADYgFACgFACgFADYgEADgEADgFACYgDADgEADgEADYgPALgOAKgMAMIgFAEIgEAFIgIAIYgGAHgEAFgGAHIgPASIgOAUYgEAHgEAGgFAHIgMAUIgMAVYgEAHgDAGgDAHIgKAVIgFAKIgFAJYgHAMgJALgJAKYgFAFgGAFgGAFYgFAEgGAEgGAEIgTANIgTAMYgNAIgMAIgNAIYgNAIgNAHgNAIYgNAHgNAHgOAHYgNAGgOAGgOAGYgEACgBAFABADYACAEAEACAEgCYAAAAAAAAABAA");
	this.shape_1.setTransform(88.9,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,179.4,125.8);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COP_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,100);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bielkoprave();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,82);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.okovonkprave_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,77);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.okovnutrolave_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,52);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlava2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlava3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SLZY();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,72);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nos_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,30);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.USTA6copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,73);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usta2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,44);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rukazadna_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,34);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vnutorplast1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,135);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,180);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer8111();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370,286);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bota0_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,41);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bota1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COP();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,100);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bielkoprave_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,82);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.okovonkprave();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,77);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.okovnutrolave();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,53);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlava2_1();
	this.instance.setTransform(0,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.8,187,147);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hlava1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,28);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usta2copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,34);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,82);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rukazadna();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,35);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vnutorplast();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,134);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,180);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer811();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,280);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bota0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bota1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dualpapier();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,413,303);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(21,14,1,1,0,0,0,21,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,28);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(121,90,1,1,0,0,0,121,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,180);


// stage content:
(lib.duelanimbluewinpaper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kamen
	this.instance = new lib.Symbol68();
	this.instance.setTransform(-245,160,0.999,0.999,-30,0,0,20.1,30.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:30,scaleX:1,scaleY:1,rotation:-24.3,x:-213.9,y:160.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-19.4,x:-182.7,y:161.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-15.1,x:-151.4,y:161.9,alpha:0.001},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-11.4,x:-120.2,y:162.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-8.3,x:-89.1,y:163.8,alpha:0.002},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-5.8,x:-57.9,y:164.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-4,x:-26.6,y:166,alpha:0.003},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-2.9,x:4.5,y:167.3,alpha:0.004},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-2.5,x:35.7,y:168.8,alpha:0.006},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-3,x:66.8,y:170.5,alpha:0.007},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-4.5,x:97.9,y:172.7,alpha:0.01},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-7.1,x:129,y:175.8,alpha:0.013},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-10.7,x:157.7,y:181.6,alpha:0.022},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-15.2,x:186,y:189.2,alpha:0.162},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-20.7,x:214.1,y:197.6,alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-27.2,x:242.1,y:206.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-34.5,x:269.9,y:215.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-42.7,x:297.7,y:225.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-51.7,x:325.4,y:234.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-61.8,x:353,y:244.6,alpha:0.991},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-73,x:343.1,y:215,alpha:0.972},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:63.6,x:330.2,y:186.3,alpha:0.941},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:189.8,x:315.1,y:158.9,alpha:0.898},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:307.2,x:298.7,y:131.3,alpha:0.838},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:415.3,x:281.9,y:105,alpha:0.752},0).wait(1).to({scaleX:1.93,scaleY:1.93,rotation:513.5,x:263,y:80.2,alpha:0.618},0).wait(1).to({scaleX:2.13,scaleY:2.13,rotation:600.3,x:242.2,y:55.9,alpha:0.3},0).wait(1).to({scaleX:2.33,scaleY:2.33,rotation:673.9,x:220.5,y:32.3,alpha:0.173},0).wait(1).to({scaleX:2.54,scaleY:2.54,rotation:731.3,x:197.5,y:11.2,alpha:0.127},0).wait(1).to({scaleX:2.74,scaleY:2.74,rotation:777.7,x:172.5,y:-7.2,alpha:0.096},0).wait(1).to({scaleX:2.94,scaleY:2.94,rotation:821.1,x:145.1,y:-22,alpha:0.074},0).wait(1).to({scaleX:3.14,scaleY:3.14,rotation:861.7,x:115.4,y:-32.6,alpha:0.057},0).wait(1).to({scaleX:3.34,scaleY:3.34,rotation:899.8,x:88.1,y:-46.5,alpha:0.043},0).wait(1).to({scaleX:3.54,scaleY:3.54,rotation:935.6,x:64.8,y:-68.8,alpha:0.032},0).wait(1).to({scaleX:3.74,scaleY:3.74,rotation:969.4,x:44.4,y:-93.9,alpha:0.024},0).wait(1).to({scaleX:3.94,scaleY:3.94,rotation:1001.2,x:26,y:-120.2,alpha:0.017},0).wait(1).to({scaleX:4.14,scaleY:4.14,rotation:1031.3,x:8.9,y:-147.3,alpha:0.013},0).wait(1).to({scaleX:4.34,scaleY:4.34,rotation:1059.6,x:-7.1,y:-174.8,alpha:0.009},0).wait(1).to({rotation:1086.2,x:-22.3,y:-202.4,alpha:0.007},0).wait(1).to({rotation:1111.3,x:-37.1,y:-230.2,alpha:0.006},0).wait(1).to({rotation:1134.8,x:-52.2,y:-259.5},0).wait(1).to({rotation:1156.8,x:-64.9,y:-285.2,alpha:0.008},0).wait(1).to({rotation:1177,x:-65,y:-284.8,alpha:0.01},0).wait(1).to({rotation:1195,y:-284.4,alpha:0.013},0).wait(1));

	// vir
	this.instance_1 = new lib.Symbol67();
	this.instance_1.setTransform(352,228,0.298,0.298,0,0,0,170.6,138.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:172.7,regY:143.9,rotation:-1.5,x:352.6,y:229.8,alpha:0.001},0).wait(1).to({rotation:-1.7,x:352.5,y:229.9},0).wait(1).to({rotation:-1,x:352.3,y:230},0).wait(1).to({rotation:0.5,x:352.2,y:230.1},0).wait(1).to({rotation:2.8,x:352,y:230.2},0).wait(1).to({rotation:5.8,x:351.8,y:230.3},0).wait(1).to({rotation:9.5,x:351.6,y:230.5},0).wait(1).to({rotation:13.9,x:351.4,y:230.6},0).wait(1).to({rotation:18.9,x:351.1,y:230.7},0).wait(1).to({rotation:24.6,x:350.8,y:230.8},0).wait(1).to({rotation:30.9,x:350.6,y:230.9},0).wait(1).to({rotation:37.9,x:350.3},0).wait(1).to({rotation:45.5,x:349.9},0).wait(1).to({rotation:53.9,x:349.6},0).wait(1).to({rotation:62.9,x:349.2},0).wait(1).to({rotation:72.5,x:349,y:230.8},0).wait(1).to({rotation:82.9,x:348.7,y:230.6},0).wait(1).to({rotation:94,x:348.4,y:230.4},0).wait(1).to({rotation:105.7,x:348.2,y:230.2,alpha:0.044},0).wait(1).to({rotation:124,x:339.4,y:232.1,alpha:0.22},0).wait(1).to({rotation:157.6,x:331.1,y:233.6,alpha:0.974},0).wait(1).to({rotation:213.8,x:324,y:235.7,alpha:0.742},0).wait(1).to({rotation:307.1,x:316.4,y:240.3,alpha:0.618},0).wait(1).to({rotation:470.5,x:304.1,y:242.3,alpha:0.512},0).wait(1).to({rotation:391.9,x:296.7,y:246.5,alpha:0.419},0).wait(1).to({rotation:269.6,x:289.9,alpha:0.338},0).wait(1).to({rotation:375,x:279.6,y:251.4,alpha:0.267},0).wait(1).to({rotation:424.1,x:269.4,y:253.3,alpha:0.206},0).wait(1).to({rotation:454.8,x:260.1,y:255,alpha:0.154},0).wait(1).to({rotation:476.2,x:251.3,y:256.8,alpha:0.11},0).wait(1).to({rotation:491.8,x:242.5,y:258.8,alpha:0.075},0).wait(1).to({rotation:503.3,x:233.9,y:260.9,alpha:0.048},0).wait(1).to({rotation:511.7,x:225.2,y:263.2,alpha:0.03},0).wait(1).to({rotation:517.5,x:216.5,y:265.5,alpha:0.019},0).wait(1).to({rotation:521.3,x:207.8,y:267.9,alpha:0.014},0).wait(1).to({rotation:523.3,x:199.1,y:270.3,alpha:0.011},0).wait(1).to({rotation:523.8,x:190.2,y:272.7,alpha:0.008},0).wait(1).to({rotation:522.9,x:181.4,y:275.2,alpha:0.006},0).wait(1).to({rotation:520.8,x:172.5,y:277.8,alpha:0.004},0).wait(1).to({rotation:517.6,x:163.6,y:280.3,alpha:0.003},0).wait(1).to({rotation:513.3,x:154.7,y:282.8,alpha:0.002},0).wait(1).to({rotation:508,x:154.6,y:282.9,alpha:0.001},0).wait(1).to({rotation:501.7,x:154.5,y:283.1,alpha:0},0).wait(1).to({rotation:494,x:154.4,y:283.3},0).wait(1));

	// vybuch
	this.instance_2 = new lib.Symbol69();
	this.instance_2.setTransform(445,420.1,0.959,1.183,0,0,0,159.2,314.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:65,regY:138.1,scaleX:0.96,scaleY:1.18,x:354.8,y:211.4},0).wait(1).to({scaleX:0.96,y:211.3},0).wait(1).to({scaleX:0.96,y:211.2},0).wait(1).to({x:354.9},0).wait(1).to({x:354.8,y:211.1},0).wait(1).to({y:211},0).wait(1).to({scaleX:0.96,x:354.7},0).wait(1).to({scaleX:0.96,x:354.6,y:210.9},0).wait(1).to({scaleX:0.96,x:354.4},0).wait(1).to({scaleX:0.96,x:354.2,y:210.8},0).wait(1).to({scaleX:0.96,x:354,y:210.7},0).wait(1).to({scaleX:0.97,scaleY:1.19,x:353.7},0).wait(1).to({scaleX:0.97,x:353.3,y:210.6},0).wait(1).to({scaleX:0.98,x:352.8,y:210.5},0).wait(1).to({scaleX:0.98,x:352.3},0).wait(1).to({scaleX:0.99,x:351.4,y:210.4},0).wait(1).to({scaleX:1,x:350.1},0).wait(1).to({scaleX:1.02,x:348.2,y:210.3},0).wait(1).to({scaleX:1.05,x:345.5,y:210.2},0).wait(1).to({scaleX:1.12,scaleY:1.24,x:339.1,y:201.2,alpha:1},0).wait(1).to({scaleY:1.25,x:320.7,y:190.7,alpha:0.942},0).wait(1).to({scaleY:1.26,x:302.4,y:180.9,alpha:0.7},0).wait(1).to({scaleY:1.26,x:296.2,y:177,alpha:0.307},0).wait(1).to({x:290,y:173.9,alpha:0.144},0).wait(1).to({x:283.6,y:170.8,alpha:0.076},0).wait(1).to({x:277.4,y:167.8,alpha:0.038},0).wait(1).to({alpha:0},0).wait(18));

	//  dual papier
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(265.7,238.4,0.298,0.298,0,0,0,205.3,151);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:206.5,regY:151.5,x:291.3,y:214.9,alpha:0.448},0).wait(1).to({rotation:-0.1,x:319.4,y:194.7,alpha:0.8},0).wait(1).to({x:336.2,y:185.8,alpha:0.936},0).wait(1).to({x:345.3,y:181.9,alpha:1},0).wait(1).to({x:354.8,y:179},0).wait(1).to({rotation:10.8,x:364.5},0).wait(1).to({rotation:22.8,x:381.3,y:183.3},0).wait(1).to({rotation:35.7,x:375.1,y:196.6},0).wait(1).to({rotation:49.7,x:372.5,y:199.5},0).wait(1).to({rotation:64.7,x:369.8,y:202.4},0).wait(1).to({rotation:81,x:367,y:205.1},0).wait(1).to({rotation:98.8,x:364,y:207.7},0).wait(1).to({rotation:118.7,x:361,y:210.2},0).wait(1).to({rotation:141.1,x:358,y:212.6},0).wait(1).to({rotation:167.6,x:354.9,y:214.9},0).wait(1).to({rotation:201,x:351.9,y:217},0).wait(1).to({rotation:243.4,x:349,y:219.1},0).wait(1).to({rotation:290.3,x:345.9,y:221.4},0).wait(1).to({rotation:340.4,x:336.1,y:225.7},0).wait(1).to({rotation:392.7,x:326,y:229.8},0).wait(1).to({rotation:446.6,x:315.6,y:233.6},0).wait(1).to({rotation:501.4,x:305.4,y:237},0).wait(1).to({rotation:556.6,x:295.5,y:240.3},0).wait(1).to({rotation:611.8,x:285.8,y:243.8,alpha:0.996},0).wait(1).to({rotation:666.6,x:276,y:247.6,alpha:0.99},0).wait(1).to({rotation:720.5,x:266,y:251.6,alpha:0.982},0).wait(1).to({rotation:773.2,x:255.7,y:255.3,alpha:0.972},0).wait(1).to({rotation:824.2,x:245.3,y:258.8,alpha:0.96},0).wait(1).to({rotation:872.9,x:235.1,y:262.1,alpha:0.946},0).wait(1).to({rotation:919,x:225.1,y:265.4,alpha:0.928},0).wait(1).to({rotation:961.7,x:215.3,y:268.8,alpha:0.906},0).wait(1).to({rotation:1000.3,x:205.4,y:272.4,alpha:0.879},0).wait(1).to({rotation:1034,x:195.5,y:276.1,alpha:0.844},0).wait(1).to({rotation:1063.5,x:185.5,y:279.8,alpha:0.793},0).wait(1).to({rotation:1089.5,x:175.3,y:283.4,alpha:0.678},0).wait(1).to({rotation:1112.8,x:165.1,y:287,alpha:0.474},0).wait(1).to({rotation:1133.6,x:154.9,y:290.5,alpha:0.355},0).wait(1).to({rotation:1152.4,x:144.7,y:294,alpha:0.268},0).wait(1).to({rotation:1169.3,x:134.5,y:297.5,alpha:0.199},0).wait(1).to({rotation:1184.5,x:124.3,y:300.9,alpha:0.143},0).wait(1).to({rotation:1198.1,x:114.2,y:304.3,alpha:0.096},0).wait(1).to({rotation:1210.1,x:104,y:307.7,alpha:0.057},0).wait(1).to({rotation:1220.7,x:93.9,y:311.1,alpha:0.025},0).wait(1).to({rotation:1229.3,y:311,alpha:0},0).wait(1));

	// bota 1
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(268,303.8,0.298,0.298,0,0,0,14.5,15);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:289.3,y:290.5,alpha:0.8},0).wait(1).to({x:307.6,y:278.8,alpha:0.916},0).wait(1).to({x:323.5,y:268.4,alpha:0.973},0).wait(1).to({x:337,y:259.3,alpha:1},0).wait(1).to({x:348.6,y:251.3},0).wait(1).to({x:358.3,y:244.3},0).wait(1).to({x:366.3,y:238.3},0).wait(1).to({x:373,y:233},0).wait(1).to({x:378.5,y:228.5},0).wait(1).to({x:382.9,y:224.5},0).wait(1).to({x:386.3,y:221.1},0).wait(1).to({x:388.8,y:218},0).wait(1).to({x:389.9,y:216.4},0).wait(1).to({x:390.1,y:216},0).wait(1).to({x:390.3,y:215.8},0).wait(1).to({x:390.4,y:215.6},0).wait(1).to({x:390.5,y:215.4},0).wait(1).to({y:215.2},0).wait(1).to({x:390.6,y:215.1},0).wait(1).to({x:390.7,y:214.9},0).wait(1).to({y:214.8},0).wait(1).to({x:390.8,y:214.7},0).wait(1).to({x:390.9,y:214.5},0).wait(1).to({y:214.4},0).wait(1).to({x:391,y:214.2},0).wait(1).to({x:391.1,y:214.1},0).wait(1).to({x:391.2,y:213.9},0).wait(1).to({y:213.7},0).wait(1).to({x:391.3,y:213.5},0).wait(1).to({x:391.5,y:213.2},0).wait(1).to({x:391.6,y:212.9},0).wait(1).to({x:391.8,y:212.5},0).wait(1).to({x:392,y:212},0).wait(1).to({x:392.2,y:211.4},0).wait(1).to({x:392.5,y:210.7},0).wait(1).to({x:392.8,y:209.8},0).wait(1).to({x:393,y:208.7},0).wait(1).to({x:393.3,y:207.4},0).wait(1).to({x:393.4,y:205.8},0).wait(1).to({x:393.1,y:203.9},0).wait(1).to({x:391.8,y:202.2,alpha:0.986},0).wait(1).to({x:389.4,y:201.3,alpha:0.945},0).wait(1).to({x:386.5,alpha:0.834},0).wait(1).to({x:383.2,y:202.1,alpha:0},0).wait(1));

	// bota 0
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(234,305.8,0.298,0.298,0,0,0,19.3,20);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:19.5,x:252.2,y:288.2,alpha:0.8},0).wait(1).to({x:267.8,y:272.7,alpha:0.916},0).wait(1).to({x:281.3,y:259.1,alpha:0.973},0).wait(1).to({x:292.6,y:247.1,alpha:1},0).wait(1).to({x:302.1,y:236.5},0).wait(1).to({x:304,y:234.1},0).wait(1).to({x:304.9,y:232.9},0).wait(1).to({x:305.7,y:231.9},0).wait(1).to({x:306.3,y:231},0).wait(1).to({x:306.8,y:230.3},0).wait(1).to({x:307.2,y:229.7},0).wait(1).to({x:307.6,y:229.2},0).wait(1).to({x:307.8,y:228.8},0).wait(1).to({x:308.1,y:228.5},0).wait(1).to({x:308.2,y:228.2},0).wait(1).to({x:308.4,y:228},0).wait(1).to({x:308.5,y:227.8},0).wait(1).to({x:308.6,y:227.6},0).wait(1).to({x:308.7,y:227.4},0).wait(1).to({x:308.8,y:227.3},0).wait(1).to({x:308.9,y:227.1},0).wait(1).to({x:309,y:227},0).wait(1).to({x:309.1,y:226.9},0).wait(1).to({x:309.2,y:226.7},0).wait(1).to({x:309.3,y:226.6},0).wait(1).to({x:309.4,y:226.4},0).wait(1).to({x:309.5,y:226.2},0).wait(1).to({x:309.7,y:226},0).wait(1).to({x:309.8,y:225.8},0).wait(1).to({x:310,y:225.5},0).wait(1).to({x:310.2,y:225.2},0).wait(1).to({x:310.4,y:224.8},0).wait(1).to({x:310.8,y:224.3},0).wait(1).to({x:311.1,y:223.6},0).wait(1).to({x:311.6,y:222.9},0).wait(1).to({x:312.1,y:222},0).wait(1).to({x:312.8,y:220.8},0).wait(1).to({x:313.5,y:219.5},0).wait(1).to({x:314.3,y:217.9},0).wait(1).to({x:315.3,y:216},0).wait(1).to({x:316.3,y:213.7,alpha:0.986},0).wait(1).to({x:317.3,y:211,alpha:0.945},0).wait(1).to({x:318.3,y:207.9,alpha:0.834},0).wait(1).to({x:319,y:204.1,alpha:0},0).wait(1));

	// Layer 8
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(261.5,295.1,0.297,0.297,-49.9,0,0,158.2,137.1);
	this.instance_6.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:183.5,regY:140,scaleX:0.3,scaleY:0.3,rotation:-46.8,x:284,y:277.9,alpha:0.464},0).wait(1).to({rotation:-44.2,x:298.6,y:267.2,alpha:0.814},0).wait(1).to({rotation:-41.6,x:311,y:257.8,alpha:0.946},0).wait(1).to({rotation:-38.6,x:321.7,y:249.4,alpha:1},0).wait(1).to({rotation:-34.1,x:330.8,y:242.2},0).wait(1).to({rotation:-27.2,x:338.3,y:236.2},0).wait(1).to({rotation:-16.3,x:344.4,y:231.5},0).wait(1).to({rotation:-6.3,x:348.9,y:227.4},0).wait(1).to({rotation:-2.3,x:349.9,y:226.3},0).wait(1).to({rotation:-1.3,x:350.3,y:225.6},0).wait(1).to({rotation:-1.7,x:350.6,y:224.8},0).wait(1).to({rotation:-2.5,x:351,y:224.2},0).wait(1).to({rotation:-3.2,x:351.2,y:223.6},0).wait(1).to({rotation:-3.7,x:351.4,y:223.2},0).wait(1).to({rotation:-4.2,x:351.6,y:222.8},0).wait(1).to({rotation:-4.6,x:351.7,y:222.5},0).wait(1).to({rotation:-4.8,x:351.8,y:222.2},0).wait(1).to({rotation:-5,x:351.9,y:222},0).wait(1).to({rotation:-5.2,x:352,y:221.8},0).wait(1).to({x:352.1,y:221.6},0).wait(1).to({x:352.2,y:221.4},0).wait(1).to({y:221.3},0).wait(1).to({rotation:-5.1,x:352.4,y:221.1},0).wait(1).to({rotation:-4.9,y:221},0).wait(1).to({rotation:-4.7,x:352.5,y:220.9},0).wait(1).to({rotation:-4.5,x:352.6,y:220.7},0).wait(1).to({rotation:-4.2,x:352.7,y:220.5},0).wait(1).to({rotation:-3.9,x:352.8,y:220.3},0).wait(1).to({rotation:-3.6,x:352.9,y:220.1},0).wait(1).to({rotation:-3.2,x:353,y:219.9},0).wait(1).to({rotation:-2.8,x:353.3,y:219.6},0).wait(1).to({rotation:-2.3,x:353.4,y:219.1},0).wait(1).to({rotation:-1.8,x:353.7,y:218.6},0).wait(1).to({rotation:-1.3,x:354.1,y:218},0).wait(1).to({rotation:-0.7,x:354.4,y:217.2},0).wait(1).to({rotation:-0.2,x:354.8,y:216.2},0).wait(1).to({rotation:0.5,x:355.4,y:215},0).wait(1).to({rotation:1.1,x:356,y:213.5},0).wait(1).to({rotation:1.8,x:356.6,y:211.7},0).wait(1).to({rotation:2.5,x:357.3,y:209.7},0).wait(1).to({rotation:3.2,x:358,y:207.2,alpha:0.986},0).wait(1).to({rotation:4,x:358.8,y:204.3,alpha:0.945},0).wait(1).to({rotation:4.8,x:359.4,y:200.9,alpha:0.834},0).wait(1).to({rotation:5.6,x:359.7,y:196.9,alpha:0},0).wait(1));

	// Layer 9
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(261.7,293.3,0.298,0.298,0,0,0,120.2,89.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:121,regY:90,x:278.9,y:280.7,alpha:0.8},0).wait(1).to({x:293.4,y:269.4,alpha:0.916},0).wait(1).to({x:305.9,y:259.4,alpha:0.973},0).wait(1).to({x:316.4,y:250.5,alpha:1},0).wait(1).to({x:325.4,y:242.5},0).wait(1).to({x:332.7,y:235.6},0).wait(1).to({x:338.6,y:229.4},0).wait(1).to({x:343,y:223.8},0).wait(1).to({x:344,y:222.1},0).wait(1).to({x:344.4,y:221.3},0).wait(1).to({x:344.8,y:220.6},0).wait(1).to({x:345.1,y:220},0).wait(1).to({x:345.3,y:219.6},0).wait(1).to({x:345.5,y:219.2},0).wait(1).to({x:345.7,y:218.9},0).wait(1).to({x:345.8,y:218.6},0).wait(1).to({x:345.9,y:218.4},0).wait(1).to({x:346,y:218.2},0).wait(1).to({x:346.1,y:218},0).wait(1).to({x:346.2,y:217.9},0).wait(1).to({x:346.3,y:217.7},0).wait(1).to({x:346.4,y:217.5},0).wait(1).to({y:217.4},0).wait(1).to({x:346.5,y:217.2},0).wait(1).to({x:346.6,y:217},0).wait(1).to({x:346.7,y:216.8},0).wait(1).to({x:346.8,y:216.6},0).wait(1).to({x:346.9,y:216.4},0).wait(1).to({x:347,y:216.2},0).wait(1).to({x:347.2,y:215.8},0).wait(1).to({x:347.4,y:215.5},0).wait(1).to({x:347.6,y:215},0).wait(1).to({x:347.8,y:214.4},0).wait(1).to({x:348.2,y:213.7},0).wait(1).to({x:348.6,y:212.8},0).wait(1).to({x:349,y:211.7},0).wait(1).to({x:349.5,y:210.5},0).wait(1).to({x:350.1,y:208.9},0).wait(1).to({x:350.8,y:207.1},0).wait(1).to({x:351.5,y:204.9},0).wait(1).to({x:352.3,y:202.3,alpha:0.986},0).wait(1).to({x:353,y:199.3,alpha:0.945},0).wait(1).to({x:353.7,y:195.8,alpha:0.834},0).wait(1).to({x:353.9,y:191.7,alpha:0},0).wait(1));

	// vnutor  plast
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(277,283,0.298,0.298,0,0,0,108.8,67.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:108.5,regY:67,rotation:-0.7,x:294,y:271.4,alpha:0.814},0).wait(1).to({rotation:-1.4,x:308.7,y:261.1,alpha:0.928},0).wait(1).to({rotation:-2.2,x:321.3,y:251.9,alpha:0.979},0).wait(1).to({rotation:-3,x:332,y:243.8,alpha:1},0).wait(1).to({rotation:-3.9,x:341.1,y:236.6},0).wait(1).to({rotation:-4.9,x:348.6,y:230.2},0).wait(1).to({rotation:-6,x:354.7,y:224.5},0).wait(1).to({rotation:-7.5,x:359.5,y:219.5},0).wait(1).to({rotation:-10.7,x:363.2,y:215},0).wait(1).to({rotation:-14.7,x:364.2,y:213.3},0).wait(1).to({rotation:-18.4,x:364.6,y:212.6},0).wait(1).to({rotation:-21.2,x:364.9,y:211.9},0).wait(1).to({rotation:-23.2,x:365.2,y:211.4},0).wait(1).to({rotation:-24,x:365.4,y:211},0).wait(1).to({rotation:-24.2,x:365.5,y:210.7},0).wait(1).to({rotation:-23.9,x:365.7,y:210.4},0).wait(1).to({rotation:-23.3,x:365.8,y:210.1},0).wait(1).to({rotation:-22.7,x:365.9,y:209.9},0).wait(1).to({rotation:-22,x:366,y:209.7},0).wait(1).to({rotation:-21.3,x:366.1,y:209.5},0).wait(1).to({rotation:-20.5,x:366.2,y:209.4},0).wait(1).to({rotation:-19.7,y:209.2},0).wait(1).to({rotation:-18.8,x:366.3,y:209},0).wait(1).to({rotation:-17.8,x:366.4,y:208.8},0).wait(1).to({rotation:-16.8,x:366.5,y:208.6},0).wait(1).to({rotation:-15.9,x:366.6,y:208.4},0).wait(1).to({rotation:-14.9,x:366.7,y:208.2},0).wait(1).to({rotation:-13.9,x:366.8,y:208},0).wait(1).to({rotation:-12.9,x:367,y:207.7},0).wait(1).to({rotation:-11.9,x:367.1,y:207.3},0).wait(1).to({rotation:-11,x:367.3,y:206.9},0).wait(1).to({rotation:-10,x:367.5,y:206.4},0).wait(1).to({rotation:-9.1,x:367.8,y:205.7},0).wait(1).to({rotation:-8.2,x:368.1,y:204.9},0).wait(1).to({rotation:-7.3,x:368.5,y:204},0).wait(1).to({rotation:-6.4,x:368.9,y:202.8},0).wait(1).to({rotation:-5.5,x:369.4,y:201.4},0).wait(1).to({rotation:-4.7,x:369.9,y:199.7},0).wait(1).to({rotation:-3.8,x:370.6,y:197.7},0).wait(1).to({rotation:-3,x:371.1,y:195.3},0).wait(1).to({rotation:-2.2,x:371.8,y:192.5,alpha:0.986},0).wait(1).to({rotation:-1.5,x:372.2,y:189.1,alpha:0.945},0).wait(1).to({rotation:-0.8,x:372.3,y:185.3,alpha:0.834},0).wait(1).to({rotation:-0.1,x:372,y:180.9,alpha:0},0).wait(1));

	// ruka zadna
	this.instance_9 = new lib.Symbol10();
	this.instance_9.setTransform(295.2,272.2,0.297,0.297,-55.4);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:31,regY:17.5,scaleX:0.3,scaleY:0.3,rotation:-56.1,x:322.7,y:254,alpha:0.448},0).wait(1).to({rotation:-56.3,x:338.1,y:241.9,alpha:0.8},0).wait(1).to({rotation:-55.9,x:351.3,y:231.2,alpha:0.936},0).wait(1).to({rotation:-55.2,x:362.5,y:221.8,alpha:1},0).wait(1).to({rotation:-54,x:372,y:213.5},0).wait(1).to({rotation:-52.4,x:379.7,y:206.1},0).wait(1).to({rotation:-50.5,x:385.6,y:199.4},0).wait(1).to({rotation:-48,x:387.2,y:197.6},0).wait(1).to({rotation:-43.2,x:388,y:197.4},0).wait(1).to({rotation:-12.1,x:388.3,y:202.3},0).wait(1).to({rotation:31.4,x:383.7,y:207.7},0).wait(1).to({rotation:36.2,x:383.2,y:207.6},0).wait(1).to({rotation:36.8,x:383.3,y:207.2},0).wait(1).to({rotation:37.2,x:383.4,y:206.8},0).wait(1).to({rotation:37.5,x:383.5,y:206.5},0).wait(1).to({rotation:37.7,x:383.6,y:206.3},0).wait(1).to({rotation:37.8,x:383.7,y:206.1},0).wait(1).to({rotation:37.9,x:383.8,y:205.9},0).wait(1).to({rotation:37.8,x:383.9,y:205.7},0).wait(1).to({rotation:37.6,x:384,y:205.6},0).wait(1).to({rotation:37.4,x:384.2,y:205.4},0).wait(1).to({rotation:37,y:205.2},0).wait(1).to({rotation:36.5,x:384.4,y:205},0).wait(1).to({rotation:35.9,x:384.6,y:204.7},0).wait(1).to({rotation:35.1,x:384.8,y:204.5},0).wait(1).to({rotation:34.2,x:385.1,y:204.3},0).wait(1).to({rotation:33.2,x:385.3,y:204},0).wait(1).to({rotation:32,x:385.6,y:203.7},0).wait(1).to({rotation:30.5,x:386,y:203.3},0).wait(1).to({rotation:28.9,x:386.4,y:202.8},0).wait(1).to({rotation:27,x:386.8,y:202.3},0).wait(1).to({rotation:24.8,x:387.4,y:201.6},0).wait(1).to({rotation:22.3,x:388,y:200.7},0).wait(1).to({rotation:19.5,x:388.7,y:199.7},0).wait(1).to({rotation:16.5,x:389.5,y:198.5},0).wait(1).to({rotation:13.4,x:390.3,y:197.1},0).wait(1).to({rotation:10.1,x:391.2,y:195.4},0).wait(1).to({rotation:6.6,x:392.2,y:193.4},0).wait(1).to({rotation:2.9,x:393.2,y:191},0).wait(1).to({rotation:-0.9,x:394.3,y:188.3},0).wait(1).to({rotation:-4.9,x:395.3,y:185.2,alpha:0.986},0).wait(1).to({rotation:-9,x:396.2,y:181.6,alpha:0.945},0).wait(1).to({rotation:-13.3,x:397.1,y:177.4,alpha:0.834},0).wait(1).to({rotation:-17.9,x:397.6,y:172.6,alpha:0},0).wait(1));

	// Layer 18
	this.instance_10 = new lib.Symbol11();
	this.instance_10.setTransform(278.1,254.4,0.298,0.298,0,0,0,59.6,40.8);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:60,regY:41,x:295.1,y:241.8},0).wait(1).to({x:309.7,y:230.5},0).wait(1).to({x:322.1,y:220.4},0).wait(1).to({x:332.7,y:211.5},0).wait(1).to({x:341.6,y:203.6},0).wait(1).to({x:348.9,y:196.6},0).wait(1).to({x:354.8,y:190.4},0).wait(1).to({x:359.2,y:184.8},0).wait(1).to({x:360.2,y:183.2},0).wait(1).to({x:360.7,y:182.4},0).wait(1).to({x:361,y:181.7},0).wait(1).to({x:361.3,y:181.1},0).wait(1).to({x:361.6,y:180.6},0).wait(1).to({x:361.8,y:180.3},0).wait(1).to({x:361.9,y:179.9},0).wait(1).to({x:362.1,y:179.7},0).wait(1).to({x:362.2,y:179.5},0).wait(1).to({x:362.3,y:179.3},0).wait(1).to({x:362.4,y:179.1},0).wait(1).to({x:362.5,y:178.9},0).wait(1).to({y:178.7},0).wait(1).to({x:362.6,y:178.6},0).wait(1).to({x:362.7,y:178.4},0).wait(1).to({x:362.8,y:178.2},0).wait(1).to({x:362.9,y:178.1},0).wait(1).to({x:363,y:177.9},0).wait(1).to({y:177.7},0).wait(1).to({x:363.2,y:177.5},0).wait(1).to({x:363.3,y:177.2},0).wait(1).to({x:363.4,y:176.9},0).wait(1).to({x:363.6,y:176.5},0).wait(1).to({x:363.8,y:176},0).wait(1).to({x:364.1,y:175.4},0).wait(1).to({x:364.4,y:174.7},0).wait(1).to({x:364.8,y:173.9,alpha:0.5},0).wait(1).to({x:365.3,y:172.8,alpha:1},0).wait(1).to({x:365.8,y:171.5},0).wait(1).to({x:366.4,y:170},0).wait(1).to({x:367,y:168.1},0).wait(1).to({x:367.8,y:166},0).wait(1).to({x:368.5,y:163.4,alpha:0.986},0).wait(1).to({x:369.3,y:160.4,alpha:0.945},0).wait(1).to({x:369.9,y:156.9,alpha:0.834},0).wait(1).to({x:370.1,y:152.8,alpha:0},0).wait(1));

	// usta 2 copy
	this.instance_11 = new lib.Symbol12();
	this.instance_11.setTransform(285.6,258.1,0.298,0.298,0,0,0,35.8,16.9);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:36,regY:17,x:302.6,y:245.4,alpha:0.448},0).wait(1).to({x:317.1,y:234.1,alpha:0.8},0).wait(1).to({x:329.6,y:224.1,alpha:0.936},0).wait(1).to({x:340.1,y:215.2,alpha:1},0).wait(1).to({x:349.1,y:207.2},0).wait(1).to({x:356.4,y:200.3},0).wait(1).to({x:362.3,y:194.1},0).wait(1).to({x:366.7,y:188.5},0).wait(1).to({x:367.7,y:186.8},0).wait(1).to({x:368.1,y:186},0).wait(1).to({x:368.5,y:185.3},0).wait(1).to({x:368.8,y:184.7},0).wait(1).to({x:369,y:184.3},0).wait(1).to({x:369.2,y:183.9},0).wait(1).to({x:369.4,y:183.6},0).wait(1).to({x:369.5,y:183.3},0).wait(1).to({x:369.6,y:183.1},0).wait(1).to({x:369.7,y:182.9},0).wait(1).to({x:369.8,y:182.7},0).wait(1).to({x:369.9,y:182.6},0).wait(1).to({x:370,y:182.4},0).wait(1).to({x:370.1,y:182.2},0).wait(1).to({y:182.1},0).wait(1).to({x:370.2,y:181.9},0).wait(1).to({x:370.3,y:181.7},0).wait(1).to({x:370.4,y:181.5},0).wait(1).to({x:370.5,y:181.3},0).wait(1).to({x:370.6,y:181.1},0).wait(1).to({x:370.7,y:180.9},0).wait(1).to({x:370.9,y:180.5},0).wait(1).to({x:371.1,y:180.2},0).wait(1).to({x:371.3,y:179.7},0).wait(1).to({x:371.5,y:179.1},0).wait(1).to({x:371.9,y:178.4},0).wait(1).to({x:372.3,y:177.5,alpha:0.5},0).wait(1).to({x:372.7,y:176.4,alpha:0},0).wait(1).to({x:373.2,y:175.2},0).wait(1).to({x:373.8,y:173.6},0).wait(1).to({x:374.5,y:171.8},0).wait(1).to({x:375.2,y:169.6},0).wait(1).to({x:376,y:167},0).wait(1).to({x:376.7,y:164},0).wait(1).to({x:377.4,y:160.5},0).wait(1).to({x:377.6,y:156.4},0).wait(1));

	// nos
	this.instance_12 = new lib.Symbol24();
	this.instance_12.setTransform(277.5,245,0.298,0.298,0,0,0,20.8,14);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:21,x:294.6,y:233.2,alpha:0.448},0).wait(1).to({x:309.2,y:222.7,alpha:0.8},0).wait(1).to({x:321.7,y:213.3,alpha:0.936},0).wait(1).to({x:332.3,y:204.8,alpha:1},0).wait(1).to({x:341.2,y:197.3},0).wait(1).to({x:348.5,y:190.6},0).wait(1).to({x:354.3,y:184.7},0).wait(1).to({x:358.6,y:179.2},0).wait(1).to({x:359.6,y:177.6},0).wait(1).to({x:360.1,y:176.7},0).wait(1).to({x:360.4,y:176},0).wait(1).to({x:360.7,y:175.5},0).wait(1).to({x:361,y:175},0).wait(1).to({x:361.2,y:174.6},0).wait(1).to({x:361.3,y:174.3},0).wait(1).to({x:361.5,y:174.1},0).wait(1).to({x:361.6,y:173.8},0).wait(1).to({x:361.7,y:173.6},0).wait(1).to({x:361.8,y:173.4},0).wait(1).to({y:173.3},0).wait(1).to({x:361.9,y:173.1},0).wait(1).to({x:362,y:172.9},0).wait(1).to({x:362.1,y:172.8},0).wait(1).to({x:362.2,y:172.6},0).wait(1).to({x:362.3,y:172.4},0).wait(1).to({y:172.2},0).wait(1).to({x:362.4,y:172},0).wait(1).to({x:362.5,y:171.8},0).wait(1).to({x:362.7,y:171.5},0).wait(1).to({x:362.8,y:171.2},0).wait(1).to({x:363,y:170.8},0).wait(1).to({x:363.2,y:170.4},0).wait(1).to({x:363.5,y:169.8},0).wait(1).to({x:363.8,y:169},0).wait(1).to({x:364.2,y:168.2},0).wait(1).to({x:364.6,y:167.1},0).wait(1).to({x:365.2,y:165.8},0).wait(1).to({x:365.8,y:164.2},0).wait(1).to({x:366.4,y:162.4},0).wait(1).to({x:367.2,y:160.2},0).wait(1).to({x:367.9,y:157.6,alpha:0.986},0).wait(1).to({x:368.7,y:154.6,alpha:0.945},0).wait(1).to({x:369.3,y:151.1,alpha:0.834},0).wait(1).to({x:369.5,y:147,alpha:0},0).wait(1));

	// Layer 11 copy 3
	this.instance_13 = new lib.Symbol27();
	this.instance_13.setTransform(283.6,246.8,0.298,0.298,-0.3,0,0,93,74);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:93.5,regY:73.5,rotation:-0.4,x:300.6,y:234},0).wait(1).to({rotation:-0.7,x:315.2,y:222.6},0).wait(1).to({rotation:-1.1,x:327.7,y:212.6},0).wait(1).to({rotation:-1.4,x:338.3,y:203.7},0).wait(1).to({rotation:-1.8,x:347.1,y:195.8},0).wait(1).to({rotation:-2.3,x:354.4,y:188.7},0).wait(1).to({rotation:-3.3,x:360.3,y:182.6},0).wait(1).to({rotation:-5.9,x:364.8,y:177},0).wait(1).to({rotation:-8.9,x:365.7,y:175.3},0).wait(1).to({rotation:-9.9,x:366.2,y:174.5},0).wait(1).to({rotation:-10.3,x:366.5,y:173.9},0).wait(1).to({rotation:-10.5,x:366.9,y:173.2},0).wait(1).to({rotation:-10.6,x:367.1,y:172.8},0).wait(1).to({rotation:-10.7,x:367.3,y:172.4},0).wait(1).to({rotation:-10.8,x:367.4,y:172.1},0).wait(1).to({rotation:-10.9,x:367.6,y:171.8},0).wait(1).to({x:367.7,y:171.6},0).wait(1).to({rotation:-11,x:367.8,y:171.4},0).wait(1).to({x:367.9,y:171.2},0).wait(1).to({rotation:-11.1,y:171.1},0).wait(1).to({x:368,y:170.9},0).wait(1).to({rotation:-11.2,x:368.1,y:170.7},0).wait(1).to({x:368.2,y:170.5},0).wait(1).to({x:368.3,y:170.4},0).wait(1).to({x:368.4,y:170.2},0).wait(1).to({rotation:-11.3,y:170},0).wait(1).to({x:368.6,y:169.8},0).wait(1).to({x:368.7,y:169.6},0).wait(1).to({x:368.8,y:169.3},0).wait(1).to({x:368.9,y:169},0).wait(1).to({x:369.1,y:168.6},0).wait(1).to({rotation:-11.4,x:369.3,y:168.1},0).wait(1).to({x:369.6,y:167.6},0).wait(1).to({x:369.9,y:166.8},0).wait(1).to({x:370.3,y:166,alpha:1},0).wait(1).to({x:370.7,y:164.9},0).wait(1).to({x:371.3,y:163.6},0).wait(1).to({x:371.9,y:162.1},0).wait(1).to({x:372.5,y:160.3},0).wait(1).to({x:373.3,y:158.1},0).wait(1).to({x:374,y:155.5},0).wait(1).to({x:374.8,y:152.5},0).wait(1).to({x:375.4,y:149,alpha:0.871},0).wait(1).to({x:375.6,y:144.9,alpha:0},0).wait(1));

	// oko cele copy 3
	this.instance_14 = new lib.Symbol28();
	this.instance_14.setTransform(283.6,246.7,0.298,0.298,-0.3,0,0,93,86.2);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:93.5,regY:85.2,rotation:-0.4,x:300.7,y:233.7,alpha:0.448},0).wait(1).to({rotation:-0.7,x:315.3,y:222.3,alpha:0.8},0).wait(1).to({rotation:-1.1,x:327.7,y:212.3,alpha:0.936},0).wait(1).to({rotation:-1.4,x:338.2,y:203.4,alpha:1},0).wait(1).to({rotation:-1.8,x:347.2,y:195.5},0).wait(1).to({rotation:-2.3,x:354.5,y:188.5},0).wait(1).to({rotation:-3.3,x:360.3,y:182.3},0).wait(1).to({rotation:-5.9,x:364.8,y:176.7},0).wait(1).to({rotation:-8.9,x:365.7,y:175.1},0).wait(1).to({rotation:-9.9,x:366.2,y:174.2},0).wait(1).to({rotation:-10.3,x:366.6,y:173.6},0).wait(1).to({rotation:-10.5,x:366.8,y:173},0).wait(1).to({rotation:-10.6,x:367,y:172.5},0).wait(1).to({rotation:-10.7,x:367.3,y:172.2},0).wait(1).to({rotation:-10.8,x:367.4,y:171.8},0).wait(1).to({rotation:-10.9,x:367.6,y:171.5},0).wait(1).to({x:367.7,y:171.3},0).wait(1).to({rotation:-11,x:367.8,y:171.1},0).wait(1).to({x:367.9,y:170.9},0).wait(1).to({rotation:-11.1,y:170.8},0).wait(1).to({x:368,y:170.6},0).wait(1).to({rotation:-11.2,x:368.1,y:170.4},0).wait(1).to({x:368.2,y:170.3},0).wait(1).to({x:368.3,y:170.1},0).wait(1).to({x:368.4,y:170},0).wait(1).to({rotation:-11.3,y:169.8},0).wait(1).to({x:368.5,y:169.6},0).wait(1).to({x:368.6,y:169.4},0).wait(1).to({x:368.8,y:169.1},0).wait(1).to({x:368.9,y:168.8},0).wait(1).to({x:369.1,y:168.4},0).wait(1).to({rotation:-11.4,x:369.3,y:167.9},0).wait(1).to({x:369.6,y:167.3},0).wait(1).to({x:369.9,y:166.6},0).wait(1).to({x:370.3,y:165.7,alpha:0},0).wait(1).to({x:370.7,y:164.6},0).wait(1).to({x:371.3,y:163.4},0).wait(1).to({x:371.9,y:161.8},0).wait(1).to({x:372.5,y:160},0).wait(1).to({x:373.3,y:157.8},0).wait(1).to({x:374,y:155.2},0).wait(1).to({x:374.8,y:152.2},0).wait(1).to({x:375.4,y:148.7},0).wait(1).to({x:375.6,y:144.6},0).wait(1));

	// viecko
	this.instance_15 = new lib.Symbol64();
	this.instance_15.setTransform(278,240.5,0.261,0.256,-0.3,0,0,10.9,6.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:10.8,regY:6.2,rotation:-0.4,x:294.9,y:227.8},0).wait(1).to({rotation:-0.7,x:309.5,y:216.4},0).wait(1).to({rotation:-1.1,x:322,y:206.4},0).wait(1).to({rotation:-1.4,x:332.5,y:197.5},0).wait(1).to({rotation:-1.8,x:341.4,y:189.6},0).wait(1).to({rotation:-2.3,x:348.7,y:182.6},0).wait(1).to({rotation:-3.3,x:354.6,y:176.4},0).wait(1).to({rotation:-5.9,x:359,y:170.8},0).wait(1).to({rotation:-8.9,x:360.1,y:169.1},0).wait(1).to({rotation:-9.9,x:360.4,y:168.3},0).wait(1).to({rotation:-10.3,x:360.8,y:167.7},0).wait(1).to({rotation:-10.5,x:361.1,y:167.1},0).wait(1).to({rotation:-10.6,x:361.4,y:166.6},0).wait(1).to({rotation:-10.7,x:361.6,y:166.2},0).wait(1).to({rotation:-10.8,x:361.7,y:165.9},0).wait(1).to({rotation:-10.9,x:361.9,y:165.7},0).wait(1).to({x:362,y:165.4},0).wait(1).to({rotation:-11,x:362.1,y:165.2},0).wait(1).to({x:362.2,y:165},0).wait(1).to({rotation:-11.1,y:164.9},0).wait(1).to({x:362.3,y:164.7},0).wait(1).to({rotation:-11.2,x:362.4,y:164.5},0).wait(1).to({x:362.5,y:164.4},0).wait(1).to({x:362.6,y:164.2},0).wait(1).to({x:362.7,y:164},0).wait(1).to({rotation:-11.3,y:163.9},0).wait(1).to({x:362.8,y:163.7,alpha:1},0).wait(1).to({x:362.9,y:163.4,alpha:0},0).wait(1).to({x:363.1,y:163.2},0).wait(1).to({x:363.2,y:162.9},0).wait(1).to({x:363.4,y:162.5},0).wait(1).to({rotation:-11.4,x:363.6,y:162},0).wait(1).to({x:363.9,y:161.4},0).wait(1).to({x:364.2,y:160.7},0).wait(1).to({x:364.6,y:159.8},0).wait(1).to({x:365,y:158.8},0).wait(1).to({x:365.6,y:157.5},0).wait(1).to({x:366.2,y:155.9},0).wait(1).to({x:366.8,y:154.1},0).wait(1).to({x:367.6,y:151.9},0).wait(1).to({x:368.3,y:149.4},0).wait(1).to({x:369.1,y:146.4},0).wait(1).to({x:369.7,y:142.8},0).wait(1).to({x:369.9,y:138.8},0).wait(1));

	// oko vnutropoza b
	this.instance_16 = new lib.Symbol29();
	this.instance_16.setTransform(279,241,0.298,0.298,-0.3,0,0,52.2,26.6);
	this.instance_16.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:52.5,regY:26.5,rotation:-0.4,x:295.8,y:228.7,alpha:0.454},0).wait(1).to({rotation:-0.7,x:310.1,y:217.7,alpha:0.8},0).wait(1).to({rotation:-1.1,x:322.3,y:207.8,alpha:0.936},0).wait(1).to({rotation:-1.4,x:332.7,y:199.1,alpha:1},0).wait(1).to({rotation:-1.8,x:341.4,y:191.3},0).wait(1).to({rotation:-2.3,x:348.4,y:184.5},0).wait(1).to({rotation:-3.3,x:354.1,y:178.3},0).wait(1).to({rotation:-5.9,x:358.4,y:172.8},0).wait(1).to({rotation:-8.9,x:359.4,y:171},0).wait(1).to({rotation:-9.9,x:359.9,y:170},0).wait(1).to({rotation:-10.3,x:360.3,y:169.2},0).wait(1).to({rotation:-10.5,x:360.6,y:168.5},0).wait(1).to({rotation:-10.6,x:360.9,y:167.9},0).wait(1).to({rotation:-10.7,x:361.1,y:167.5},0).wait(1).to({rotation:-10.8,x:361.3,y:167.1},0).wait(1).to({rotation:-10.9,x:361.5,y:166.9},0).wait(1).to({x:361.6,y:166.6},0).wait(1).to({rotation:-11,x:361.7,y:166.4},0).wait(1).to({x:361.8,y:166.2},0).wait(1).to({rotation:-11.1,x:361.9,y:166},0).wait(1).to({x:362,y:165.8},0).wait(1).to({rotation:-11.2,x:362.1,y:165.6},0).wait(1).to({x:362.2,y:165.4},0).wait(1).to({x:362.3,y:165.2},0).wait(1).to({x:362.4,y:165},0).wait(1).to({rotation:-11.3,x:362.5,y:164.8},0).wait(1).to({x:362.6,y:164.6},0).wait(1).to({x:362.7,y:164.3},0).wait(1).to({x:362.9,y:164},0).wait(1).to({x:363,y:163.6},0).wait(1).to({x:363.2,y:163.2},0).wait(1).to({rotation:-11.4,x:363.5,y:162.6},0).wait(1).to({x:363.8,y:161.9},0).wait(1).to({x:364.1,y:161.1},0).wait(1).to({x:364.6,y:160.1,alpha:0},0).wait(1).to({x:365.1,y:158.9},0).wait(1).to({x:365.7,y:157.4},0).wait(1).to({x:366.4,y:155.6},0).wait(1).to({x:367.2,y:153.5},0).wait(1).to({x:368.1,y:151},0).wait(1).to({x:369.1,y:148},0).wait(1).to({x:370.1,y:144.6},0).wait(1).to({x:371.2,y:140.6},0).wait(1).to({x:372.1,y:136},0).wait(1));

	// oko vnutro poza a
	this.instance_17 = new lib.Symbol29();
	this.instance_17.setTransform(281,237,0.298,0.298,-0.3,0,0,52.2,27.4);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:52.5,regY:26.5,rotation:-0.4,x:299.4,y:224.6},0).wait(1).to({rotation:-0.7,x:315.1,y:213.6},0).wait(1).to({rotation:-1,x:328.5,y:203.6},0).wait(1).to({rotation:-1.3,x:339.6,y:194.6},0).wait(1).to({rotation:-1.6,x:348.8,y:186.3},0).wait(1).to({rotation:-2.1,x:356.1,y:178.7},0).wait(1).to({rotation:-3.1,x:361.1,y:171.4},0).wait(1).to({rotation:-5.7,x:362.1,y:168.8},0).wait(1).to({rotation:-8.8,x:362.4,y:167.6},0).wait(1).to({rotation:-9.8,x:362.7,y:166.6},0).wait(1).to({rotation:-10.1,x:363,y:165.8},0).wait(1).to({rotation:-10.3,x:363.2,y:165.2},0).wait(1).to({rotation:-10.4,x:363.4,y:164.7},0).wait(1).to({rotation:-10.5,x:363.5,y:164.2},0).wait(1).to({rotation:-10.6,x:363.6,y:163.9},0).wait(1).to({x:363.7,y:163.6},0).wait(1).to({rotation:-10.7,y:163.3},0).wait(1).to({x:363.8,y:163.1},0).wait(1).to({rotation:-10.8,x:363.9,y:162.9},0).wait(1).to({x:364,y:162.7},0).wait(1).to({rotation:-10.9,y:162.5},0).wait(1).to({x:364.1,y:162.3},0).wait(1).to({y:162.1},0).wait(1).to({x:364.2,y:161.9},0).wait(1).to({x:364.3,y:161.8},0).wait(1).to({rotation:-11,y:161.6},0).wait(1).to({x:364.4,y:161.3},0).wait(1).to({x:364.5,y:161},0).wait(1).to({x:364.6,y:160.7},0).wait(1).to({x:364.7,y:160.4},0).wait(1).to({x:364.8,y:160},0).wait(1).to({x:365,y:159.4},0).wait(1).to({x:365.2,y:158.8},0).wait(1).to({x:365.4,y:158},0).wait(1).to({x:365.7,y:157,alpha:1},0).wait(1).to({x:366.1,y:155.8},0).wait(1).to({x:366.5,y:154.4},0).wait(1).to({x:367,y:152.7},0).wait(1).to({x:367.6,y:150.8},0).wait(1).to({x:368.3,y:148.4},0).wait(1).to({x:369.1,y:145.7,alpha:0.986},0).wait(1).to({x:370.1,y:142.5,alpha:0.945},0).wait(1).to({x:371.2,y:138.9,alpha:0.834},0).wait(1).to({x:372.4,y:134.7,alpha:0},0).wait(1));

	// oko vonk prave
	this.instance_18 = new lib.Symbol30();
	this.instance_18.setTransform(280.3,237.9,0.298,0.298,-0.3,0,0,68.7,38.5);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:69,rotation:-0.4,x:297.3,y:225.2,alpha:0.448},0).wait(1).to({rotation:-0.7,x:311.9,y:213.9,alpha:0.8},0).wait(1).to({rotation:-1.1,x:324.3,y:203.8,alpha:0.905},0).wait(1).to({rotation:-1.4,x:334.9,y:195,alpha:0.955},0).wait(1).to({rotation:-1.8,x:343.8,y:187,alpha:0.984},0).wait(1).to({rotation:-2.3,x:351.2,y:180.1,alpha:1},0).wait(1).to({rotation:-3.3,x:357,y:173.9},0).wait(1).to({rotation:-5.9,x:361.5,y:168.3},0).wait(1).to({rotation:-8.9,x:362.4,y:166.7},0).wait(1).to({rotation:-9.9,x:362.9,y:165.8},0).wait(1).to({rotation:-10.3,x:363.2,y:165.2},0).wait(1).to({rotation:-10.5,x:363.5,y:164.5},0).wait(1).to({rotation:-10.6,x:363.8,y:164},0).wait(1).to({rotation:-10.7,x:364,y:163.7},0).wait(1).to({rotation:-10.8,x:364.1,y:163.4},0).wait(1).to({rotation:-10.9,x:364.3,y:163.2},0).wait(1).to({y:162.9},0).wait(1).to({rotation:-11,x:364.5,y:162.7},0).wait(1).to({x:364.6,y:162.5},0).wait(1).to({rotation:-11.1,y:162.4},0).wait(1).to({x:364.7,y:162.2},0).wait(1).to({rotation:-11.2,x:364.8,y:162.1},0).wait(1).to({x:364.9,y:161.8},0).wait(1).to({x:365,y:161.7},0).wait(1).to({x:365.1,y:161.5},0).wait(1).to({rotation:-11.3,x:365.2,y:161.4},0).wait(1).to({x:365.3,y:161.2},0).wait(1).to({x:365.4,y:160.9},0).wait(1).to({x:365.5,y:160.6},0).wait(1).to({x:365.6,y:160.3},0).wait(1).to({x:365.8,y:160},0).wait(1).to({rotation:-11.4,x:366,y:159.5},0).wait(1).to({x:366.3,y:158.9},0).wait(1).to({x:366.6,y:158.2},0).wait(1).to({x:367,y:157.3},0).wait(1).to({x:367.4,y:156.3},0).wait(1).to({x:368,y:155},0).wait(1).to({x:368.6,y:153.4},0).wait(1).to({x:369.2,y:151.6},0).wait(1).to({x:370,y:149.4},0).wait(1).to({x:370.7,y:146.9,alpha:0.986},0).wait(1).to({x:371.5,y:143.8,alpha:0.945},0).wait(1).to({x:372.1,y:140.3,alpha:0.834},0).wait(1).to({x:372.3,y:136.2,alpha:0},0).wait(1));

	// bielko prave
	this.instance_19 = new lib.Symbol31();
	this.instance_19.setTransform(280.3,242.1,0.298,0.298,0,0,0,64.7,40.8);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:65,regY:41,x:297.3,y:229.4,alpha:0.448},0).wait(1).to({x:311.9,y:218.1,alpha:0.8},0).wait(1).to({x:324.3,y:208.1,alpha:1},0).wait(1).to({x:334.9,y:199.2},0).wait(1).to({x:343.8,y:191.2},0).wait(1).to({x:351.1,y:184.3},0).wait(1).to({x:357,y:178.1},0).wait(1).to({x:361.4,y:172.5},0).wait(1).to({x:362.4,y:170.8},0).wait(1).to({x:362.9,y:170},0).wait(1).to({x:363.2,y:169.3},0).wait(1).to({x:363.5,y:168.7},0).wait(1).to({x:363.8,y:168.3},0).wait(1).to({x:364,y:167.9},0).wait(1).to({x:364.1,y:167.6},0).wait(1).to({x:364.3,y:167.3},0).wait(1).to({x:364.4,y:167.1},0).wait(1).to({x:364.5,y:166.9},0).wait(1).to({x:364.6,y:166.7},0).wait(1).to({x:364.7,y:166.6},0).wait(1).to({y:166.4},0).wait(1).to({x:364.8,y:166.2},0).wait(1).to({x:364.9,y:166.1},0).wait(1).to({x:365,y:165.9},0).wait(1).to({x:365.1,y:165.7},0).wait(1).to({x:365.2,y:165.5},0).wait(1).to({y:165.3},0).wait(1).to({x:365.4,y:165.1},0).wait(1).to({x:365.5,y:164.9},0).wait(1).to({x:365.6,y:164.5},0).wait(1).to({x:365.8,y:164.2},0).wait(1).to({x:366,y:163.7},0).wait(1).to({x:366.3,y:163.1},0).wait(1).to({x:366.6,y:162.4},0).wait(1).to({x:367,y:161.5},0).wait(1).to({x:367.5,y:160.4},0).wait(1).to({x:368,y:159.2},0).wait(1).to({x:368.6,y:157.6},0).wait(1).to({x:369.2,y:155.8},0).wait(1).to({x:370,y:153.6},0).wait(1).to({x:370.7,y:151,alpha:0.986},0).wait(1).to({x:371.5,y:148,alpha:0.945},0).wait(1).to({x:372.1,y:144.5,alpha:0.834},0).wait(1).to({x:372.3,y:140.4,alpha:0},0).wait(1));

	// COP
	this.instance_20 = new lib.Symbol32();
	this.instance_20.setTransform(307.4,220.8,0.298,0.298,0,0,0,138.2,49.9);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:139,regY:50,x:324.6,y:208.1,alpha:0.448},0).wait(1).to({x:339.2,y:196.8,alpha:0.8},0).wait(1).to({x:351.6,y:186.8,alpha:1},0).wait(1).to({x:362.2,y:177.9},0).wait(1).to({x:371.1,y:169.9},0).wait(1).to({x:378.4,y:163},0).wait(1).to({x:384.3,y:156.8},0).wait(1).to({x:388.7,y:151.2},0).wait(1).to({x:389.7,y:149.5},0).wait(1).to({x:390.2,y:148.7},0).wait(1).to({x:390.5,y:148},0).wait(1).to({x:390.8,y:147.4},0).wait(1).to({x:391.1,y:147},0).wait(1).to({x:391.3,y:146.6},0).wait(1).to({x:391.4,y:146.3},0).wait(1).to({x:391.6,y:146},0).wait(1).to({x:391.7,y:145.8},0).wait(1).to({x:391.8,y:145.6},0).wait(1).to({x:391.9,y:145.4},0).wait(1).to({x:392,y:145.3},0).wait(1).to({y:145.1},0).wait(1).to({x:392.1,y:144.9},0).wait(1).to({x:392.2,y:144.8},0).wait(1).to({x:392.3,y:144.6},0).wait(1).to({x:392.4,y:144.4},0).wait(1).to({x:392.5,y:144.2},0).wait(1).to({y:144},0).wait(1).to({x:392.7,y:143.8},0).wait(1).to({x:392.8,y:143.6},0).wait(1).to({x:392.9,y:143.2},0).wait(1).to({x:393.1,y:142.9},0).wait(1).to({x:393.3,y:142.4},0).wait(1).to({x:393.6,y:141.8},0).wait(1).to({x:393.9,y:141.1},0).wait(1).to({x:394.3,y:140.2},0).wait(1).to({x:394.8,y:139.1},0).wait(1).to({x:395.3,y:137.9},0).wait(1).to({x:395.9,y:136.3},0).wait(1).to({x:396.5,y:134.5},0).wait(1).to({x:397.3,y:132.3},0).wait(1).to({x:398,y:129.7,alpha:0.986},0).wait(1).to({x:398.8,y:126.7,alpha:0.945},0).wait(1).to({x:399.4,y:123.2,alpha:0.834},0).wait(1).to({x:399.6,y:119.1,alpha:0},0).wait(1));

	// maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AJRWhQAzgZAagSQASgMAOgOIATgOQASgPAXgeQBHhhA/hoIABgCIAxhBIALgJQAjgpAfgdQBFhBBHgkIAVgFQAhgIAdACIAFAEIAFAEIAEAFQAKALAGAEIAIAEIAEADQAIAFAOADQAgAHAygOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgMAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgcATIgPAHQgWALgaATIgtAjQh+BhhyAqQgeAMgXACg");
	var mask_graphics_1 = new cjs.Graphics().p("AKXVcQA0gZAZgSQASgMAOgOIAUgOQARgPAXgeQBIhgA+hpIABgCIAyhBIAKgJQAjgpAfgdQBFhABHglIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgeAMgXACg");
	var mask_graphics_2 = new cjs.Graphics().p("ALUUfQAzgZAZgRQATgNAOgNIATgOQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgoAfgdQBEhBBIgkIAUgGQAigHAcACIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AgQhLALg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXADg");
	var mask_graphics_3 = new cjs.Graphics().p("AMITqQAzgZAZgRQATgNAOgNIATgOQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgoAfgdQBEhBBIgkIAUgGQAigHAcACIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AgQhLALg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXADg");
	var mask_graphics_4 = new cjs.Graphics().p("AM0S8QA0gZAZgRQASgNAOgOIAUgNQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAjgpAfgcQBFhBBHglIAVgFQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgeALgXACg");
	var mask_graphics_5 = new cjs.Graphics().p("ANaSUQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhhA+hoIABgCIAyhBIAKgJQAkgpAfgdQBEhBBIgkIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIAAAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhQAShAAdIAAgBIgHAEIgbANIgMAFQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeALgXADg");
	var mask_graphics_6 = new cjs.Graphics().p("AN5RxQA0gZAZgSQASgNAOgNIAUgOQARgPAXgeQBIhhA+hpIABgBIAyhBIAKgJQAjgpAfgdQBFhBBHgkIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgeALgXADg");
	var mask_graphics_7 = new cjs.Graphics().p("AOSRSQA0gZAZgRQASgNAPgOIATgNQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAegcQBFhBBHglIAVgFQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABgBQAsgJAcgJIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYACg");
	var mask_graphics_8 = new cjs.Graphics().p("AOaRIQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg5AbgdATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_9 = new cjs.Graphics().p("AOdREQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhhA+hoIABgCIAyhBIALgJQAjgpAfgdQBEhBBIgkIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeALgXADg");
	var mask_graphics_10 = new cjs.Graphics().p("AOgRAQAzgZAZgRQASgNAPgNIATgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBHgkIAVgGQAigIAcADIAGAEIAEADIAEAFQALALAGAEIAHAEIAFAEQAHAFAOADQAgAGAzgNIAKgDIAAAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIANgCIgBAGQgOBEgeArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgGADIgcANIgLAGQg6AbgcATIgOAHQgWAMgbATIgtAjQh+BghxArQgeALgXADg");
	var mask_graphics_11 = new cjs.Graphics().p("AOiQ9QAzgZAZgRQATgNAOgNIATgOQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgoAfgdQBEhBBIgkIAUgGQAigHAcACIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAAAQAtgJAbgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgdATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXADg");
	var mask_graphics_12 = new cjs.Graphics().p("AOkQ7QAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_13 = new cjs.Graphics().p("AOlQ5QA0gZAZgRQASgNAOgNIAUgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAjgpAfgcQBFhBBHgkIAVgGQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYADg");
	var mask_graphics_14 = new cjs.Graphics().p("AOnQ4QAzgZAZgSQASgMAPgOIATgOQASgPAWgeQBIhhA+hoIABgCIAyhBIAKgJQAkgpAfgdQBEhBBIgkIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIAAAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQgiAyg6AfQhMALgzAMQhQAShAAdIAAgBIgHAEIgbANIgMAFQg6AcgcATIgOAHQgWALgaATIguAjQh9BhhyAqQgeALgXADg");
	var mask_graphics_15 = new cjs.Graphics().p("AOoQ3QAzgZAZgSQATgNAOgNIATgOQASgPAWgeQBIhhA+hpIABgBIAyhBIAKgJQAkgpAfgdQBEhBBIgkIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIAAAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAxg7AgQhLALg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AcgcATIgOAHQgWALgaATIguAjQh9BhhyAqQgeALgXADg");
	var mask_graphics_16 = new cjs.Graphics().p("AOoQ2QA0gZAZgSQASgNAPgNIATgOQARgPAXgeQBIhhA+hpIABgBIAyhBIAKgJQAkgpAegdQBFhBBHgkIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgdALgYADg");
	var mask_graphics_17 = new cjs.Graphics().p("AOpQ1QA0gZAZgSQASgMAPgOIATgOQARgPAXgeQBIhhA+hpIABgBIAyhBIAKgJQAkgpAegdQBFhBBHgkIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAyg7AfQhLALg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgdALgYADg");
	var mask_graphics_18 = new cjs.Graphics().p("AOqQ0QAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhhA+hoIABgCIAyhBIALgJQAjgpAfgdQBFhABHglIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeAMgXACg");
	var mask_graphics_19 = new cjs.Graphics().p("AOrQzQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_20 = new cjs.Graphics().p("AOrQzQA0gZAZgSQASgNAOgNIAUgOQARgPAXgeQBIhhA+hpIABgBIAyhBIAKgJQAkgpAegdQBFhBBHgkIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgdALgYADg");
	var mask_graphics_21 = new cjs.Graphics().p("AOsQyQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhgA+hpIABgCIAyhBIALgJQAjgpAfgdQBEhABIglIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLAMg0ALQhPAThBAcIAAgBIgHAEIgbANIgMAFQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeAMgXACg");
	var mask_graphics_22 = new cjs.Graphics().p("AOsQxQA0gZAZgRQASgNAPgNIATgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgoAegdQBFhBBHgkIAVgGQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYADg");
	var mask_graphics_23 = new cjs.Graphics().p("AOtQxQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhhA+hpIABgBIAyhBIALgJQAjgpAfgdQBFhBBHgkIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeALgXADg");
	var mask_graphics_24 = new cjs.Graphics().p("AOuQwQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_25 = new cjs.Graphics().p("AOuQvQA0gZAZgRQASgNAOgNIAUgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgoAegdQBFhBBHgkIAVgGQAigHAcACIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYADg");
	var mask_graphics_26 = new cjs.Graphics().p("AOvQvQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhhA+hoIABgCIAyhBIALgJQAjgpAfgdQBEhBBIgkIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeALgXADg");
	var mask_graphics_27 = new cjs.Graphics().p("AOwQuQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_28 = new cjs.Graphics().p("AOwQtQA0gZAZgRQASgNAPgNIATgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAegcQBFhBBHgkIAVgGQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYADg");
	var mask_graphics_29 = new cjs.Graphics().p("AOxQsQA0gZAZgRQASgNAPgNIATgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAegcQBFhBBHgkIAVgGQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYADg");
	var mask_graphics_30 = new cjs.Graphics().p("AOzQrQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_31 = new cjs.Graphics().p("AO0QqQA0gZAZgSQASgMAOgOIAUgOQARgPAXgeQBHhhA/hoIABgCIAyhBIAKgJQAjgpAfgdQBFhBBHgkIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgeAMgXACg");
	var mask_graphics_32 = new cjs.Graphics().p("AO2QoQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIALgJQAjgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIABgBQAsgIAbgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgdATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_33 = new cjs.Graphics().p("AO4QmQA0gZAZgRQASgNAOgNIAUgOQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAjgpAfgcQBFhBBHgkIAVgGQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgeALgXADg");
	var mask_graphics_34 = new cjs.Graphics().p("AO7QkQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhhA+hoIABgCIAyhBIALgJQAjgpAfgdQBEhABIglIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIABAAQAsgJAbgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhPAShBAdIAAgBIgHAEIgbANIgMAFQg5AcgdATIgOAHQgWALgaATIguAjQh9BhhyAqQgeAMgXACg");
	var mask_graphics_35 = new cjs.Graphics().p("AO+QhQA0gZAZgRQASgNAPgOIATgNQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAegcQBFhBBHglIAVgFQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYACg");
	var mask_graphics_36 = new cjs.Graphics().p("APDQeQAzgZAZgSQATgMAOgOIATgOQASgPAWgeQBIhgA+hpIABgCIAyhBIAKgJQAkgpAfgdQBEhABIglIAUgFQAigIAcACIAGAEIAFAEIAEAFQAKALAGAEIAHAEIAFADQAIAFAOADQAfAHAzgOIAKgDIAAAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAFAKIAOgDIgCAHQgOBDgeArQghAyg7AfQhLALg0AMQhQAShAAdIAAgBIgHAEIgbANIgMAFQg6AcgcATIgOAHQgWALgaATIguAjQh9BhhyAqQgeAMgXACg");
	var mask_graphics_37 = new cjs.Graphics().p("APIQaQAzgZAZgRQATgNAOgNIATgOQASgPAWgfQBIhgA+hpIABgBIAyhCIALgJQAjgpAfgcQBEhBBIgkIAUgGQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIABAAQAsgJAbgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgdATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXADg");
	var mask_graphics_38 = new cjs.Graphics().p("APOQWQA0gZAZgRQASgNAPgOIATgNQARgPAXgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAegcQBFhBBHglIAVgFQAigIAcADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABgBQAsgIAcgKIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgGADIgcANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgdALgYACg");
	var mask_graphics_39 = new cjs.Graphics().p("APWQSQA0gZAZgSQASgMAPgOIATgOQARgPAXgeQBIhhA+hoIABgCIAyhBIAKgJQAkgpAegdQBFhBBHgkIAVgFQAigIAcACIAGAEIAEAEIAEAFQAKALAHAEIAHAEIAFADQAHAFAOADQAgAHAygOIAKgDIABAAQAsgJAcgJIADgBIgCAQQgLAJgNAIIABADIAEAKIAOgDIgBAHQgPBDgdArQgiAyg7AfQhLALg0AMQhPAShBAdIAAgBIgGAEIgcANIgMAFQg5AcgcATIgPAHQgVALgbATIgtAjQh+BhhyAqQgdAMgYACg");
	var mask_graphics_40 = new cjs.Graphics().p("APgQNQAzgZAZgRQATgNAOgNIATgOQASgPAWgfQBIhgA+hpIABgBIAyhCIALgJQAjgoAfgdQBFhBBHgkIAUgGQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIABAAQAsgJAbgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AgQhLALg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgdATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXADg");
	var mask_graphics_41 = new cjs.Graphics().p("APsQJQAzgZAZgRQATgNAOgOIATgNQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgpAfgcQBEhBBIglIAUgFQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAgBQAsgJAcgJIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AfQhLAMg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXACg");
	var mask_graphics_42 = new cjs.Graphics().p("AP6QFQAzgZAZgRQATgNAOgNIATgOQASgPAWgfQBIhgA+hpIABgBIAyhCIAKgJQAkgoAfgdQBEhBBIgkIAUgGQAigIAcADIAGAEIAFADIAEAFQAKALAGAEIAHAEIAFAEQAIAFAOADQAfAGAzgNIAKgDIAAAAQAsgJAcgKIADgBIgCARQgLAJgNAIIABADIAFAJIAOgCIgCAGQgOBEgeArQghAxg7AgQhLALg0AMQhQAShAAcIAAAAIgHADIgbANIgMAGQg6AbgcATIgOAHQgWAMgaATIguAjQh9BghyArQgeALgXADg");
	var mask_graphics_43 = new cjs.Graphics().p("AQKQDQA0gZAZgRQASgNAOgOIAUgNQARgPAXgfQBHhgA/hpIABgBIAyhCIAKgJQAjgpAfgcQBFhBBHglIAVgFQAhgIAdADIAGAEIAEADIAEAFQAKALAHAEIAHAEIAFAEQAHAFAOADQAgAGAygNIAKgDIABgBQAsgJAcgJIADgBIgCARQgLAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgcATIgPAHQgVAMgbATIgtAjQh+BghyArQgeALgXACg");
	var mask_graphics_44 = new cjs.Graphics().p("AQdQDQA0gZAZgRQASgNAOgOIAUgNQARgPAWgfQBIhgA+hpIABgBIAzhCIAKgJQAjgpAfgcQBFhBBHglIAUgFQAigIAdADIAGAEIAEADIAEAFQAKALAGAEIAHAEIAGAEQAHAFAOADQAfAGAzgNIAKgDIABgBQAsgIAbgKIAEgBIgDARQgKAJgNAIIABADIAEAJIAOgCIgBAGQgPBEgdArQgiAxg7AfQhLAMg0AMQhPAShBAcIAAAAIgHADIgbANIgMAGQg5AbgcATIgPAHQgWAMgaATIgtAjQh+BghyArQgeALgXACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:147.8,y:147.3}).wait(1).to({graphics:mask_graphics_1,x:154.8,y:140.4}).wait(1).to({graphics:mask_graphics_2,x:160.9,y:134.3}).wait(1).to({graphics:mask_graphics_3,x:166.1,y:129}).wait(1).to({graphics:mask_graphics_4,x:170.5,y:124.4}).wait(1).to({graphics:mask_graphics_5,x:174.3,y:120.4}).wait(1).to({graphics:mask_graphics_6,x:177.4,y:116.8}).wait(1).to({graphics:mask_graphics_7,x:179.9,y:113.8}).wait(1).to({graphics:mask_graphics_8,x:180.7,y:112.8}).wait(1).to({graphics:mask_graphics_9,x:181,y:112.4}).wait(1).to({graphics:mask_graphics_10,x:181.2,y:112}).wait(1).to({graphics:mask_graphics_11,x:181.5,y:111.7}).wait(1).to({graphics:mask_graphics_12,x:181.7,y:111.5}).wait(1).to({graphics:mask_graphics_13,x:181.8,y:111.3}).wait(1).to({graphics:mask_graphics_14,x:182,y:111.2}).wait(1).to({graphics:mask_graphics_15,x:182.1,y:111}).wait(1).to({graphics:mask_graphics_16,x:182.1,y:110.9}).wait(1).to({graphics:mask_graphics_17,x:182.2,y:110.8}).wait(1).to({graphics:mask_graphics_18,x:182.3,y:110.8}).wait(1).to({graphics:mask_graphics_19,x:182.4,y:110.7}).wait(1).to({graphics:mask_graphics_20,x:182.4,y:110.6}).wait(1).to({graphics:mask_graphics_21,x:182.5,y:110.6}).wait(1).to({graphics:mask_graphics_22,x:182.5,y:110.5}).wait(1).to({graphics:mask_graphics_23,x:182.6,y:110.4}).wait(1).to({graphics:mask_graphics_24,x:182.7,y:110.4}).wait(1).to({graphics:mask_graphics_25,x:182.7,y:110.3}).wait(1).to({graphics:mask_graphics_26,x:182.8,y:110.3}).wait(1).to({graphics:mask_graphics_27,x:182.9,y:110.2}).wait(1).to({graphics:mask_graphics_28,x:182.9,y:110.1}).wait(1).to({graphics:mask_graphics_29,x:183,y:110}).wait(1).to({graphics:mask_graphics_30,x:183.2,y:109.9}).wait(1).to({graphics:mask_graphics_31,x:183.3,y:109.8}).wait(1).to({graphics:mask_graphics_32,x:183.5,y:109.6}).wait(1).to({graphics:mask_graphics_33,x:183.7,y:109.4}).wait(1).to({graphics:mask_graphics_34,x:184,y:109.2}).wait(1).to({graphics:mask_graphics_35,x:184.3,y:108.9}).wait(1).to({graphics:mask_graphics_36,x:184.8,y:108.6}).wait(1).to({graphics:mask_graphics_37,x:185.3,y:108.2}).wait(1).to({graphics:mask_graphics_38,x:185.9,y:107.8}).wait(1).to({graphics:mask_graphics_39,x:186.7,y:107.4}).wait(1).to({graphics:mask_graphics_40,x:187.7,y:106.9}).wait(1).to({graphics:mask_graphics_41,x:188.9,y:106.5}).wait(1).to({graphics:mask_graphics_42,x:190.3,y:106.1}).wait(1).to({graphics:mask_graphics_43,x:191.9,y:105.9}).wait(1).to({graphics:mask_graphics_44,x:193.8,y:105.9}).wait(1));

	// vlasky
	this.instance_21 = new lib.Symbol62copy();
	this.instance_21.setTransform(344.7,186.5,1,1,0,0,0,88.9,59.1);
	this.instance_21.alpha = 0;

	this.instance_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({regY:62.1,x:343.3,y:189.9},0).wait(1).to({x:342,y:190.4,alpha:0.5},0).wait(1).to({x:340.7,y:190.8,alpha:1},0).wait(1).to({x:339.4,y:191.3},0).wait(1).to({x:338.1,y:191.7},0).wait(1).to({x:336.8,y:192.1},0).wait(1).to({x:335.5,y:192.6},0).wait(1).to({x:334.1,y:193},0).wait(1).to({x:332.8,y:193.4},0).wait(1).to({x:331.5,y:193.9},0).wait(1).to({x:330.2,y:194.3},0).wait(1).to({x:328.9,y:194.8},0).wait(1).to({x:327.6,y:195.2},0).wait(1).to({x:326.3,y:195.6},0).wait(1).to({x:324.9,y:196.1},0).wait(1).to({x:323.6,y:196.5},0).wait(1).to({x:322.3,y:197},0).wait(1).to({x:321,y:197.4},0).wait(1).to({x:319.7,y:197.8},0).wait(1).to({x:318.4,y:198.3},0).wait(1).to({x:317.1,y:198.7},0).wait(1).to({x:315.8,y:199.2},0).wait(1).to({x:314.4,y:199.6},0).wait(1).to({x:313.1,y:200},0).wait(1).to({x:311.8,y:200.5},0).wait(1).to({x:310.5,y:200.9},0).wait(1).to({x:309.2,y:201.3},0).wait(1).to({x:307.9,y:201.8},0).wait(1).to({x:306.6,y:202.2},0).wait(1).to({x:305.2,y:202.7},0).wait(1).to({x:303.9,y:203.1},0).wait(1).to({x:302.6,y:203.5},0).wait(1).to({x:301.3,y:204},0).wait(1).to({x:300,y:204.4},0).wait(1).to({x:298.7,y:204.9},0).wait(1).to({x:297.4,y:205.3},0).wait(1).to({x:296,y:205.7},0).wait(1).to({x:294.7,y:206.2},0).wait(1).to({x:293.4,y:206.6},0).wait(1).to({x:292.1,y:207},0).wait(1).to({x:290.8,y:207.5,alpha:0.75},0).wait(1).to({x:289.5,y:207.9,alpha:0.5},0).wait(1).to({x:288.2,y:208.4,alpha:0.25},0).wait(1).to({x:286.9,y:208.8,alpha:0},0).wait(1));

	// modry efekt
	this.instance_22 = new lib.Symbol65();
	this.instance_22.setTransform(323.8,259.8,1,1,0,0,0,97.2,80.4);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:93.7,regY:77.6,x:320.3,y:257},0).wait(4).to({alpha:0.032},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:1},0).wait(1).to({x:321,y:255.7,alpha:0.939},0).wait(1).to({x:321.8,y:254.5,alpha:0.88},0).wait(1).to({x:322.5,y:253.2,alpha:0.822},0).wait(1).to({x:323.3,y:252,alpha:0.765},0).wait(1).to({x:324,y:250.8,alpha:0.709},0).wait(1).to({x:324.8,y:249.5,alpha:0.654},0).wait(1).to({x:325.5,y:248.3,alpha:0.601},0).wait(1).to({x:326.3,y:247.1,alpha:0.548},0).wait(1).to({x:327,y:245.8,alpha:0.496},0).wait(1).to({x:327.8,y:244.6,alpha:0.446},0).wait(1).to({x:328.6,y:243.3,alpha:0.398},0).wait(1).to({x:329.3,y:242.1,alpha:0.35},0).wait(1).to({x:330.1,y:240.9,alpha:0.305},0).wait(1).to({x:330.8,y:239.6,alpha:0.261},0).wait(1).to({x:331.6,y:238.4,alpha:0.22},0).wait(1).to({x:332.3,y:237.2,alpha:0.183},0).wait(1).to({x:333.1,y:235.9,alpha:0.151},0).wait(1).to({x:333.8,y:234.7,alpha:0.124},0).wait(1).to({x:334.6,y:233.4,alpha:0.1},0).wait(1).to({x:335.4,y:232.2,alpha:0.079},0).wait(1).to({x:336.1,y:231,alpha:0.061},0).wait(1).to({x:336.9,y:229.7,alpha:0.046},0).wait(1).to({x:337.6,y:228.5,alpha:0.033},0).wait(1).to({x:338.4,y:227.3,alpha:0.022},0).wait(1).to({x:339.1,y:226,alpha:0.013},0).wait(1).to({x:339.9,y:224.8,alpha:0.007},0).wait(1).to({x:340.6,y:223.5,alpha:0.002},0).wait(1).to({x:341.4,y:222.3,alpha:0},0).wait(10));

	// bota 1
	this.instance_23 = new lib.Symbol35();
	this.instance_23.setTransform(222.8,296.3,0.313,0.313,0,0,0,14.4,15.1);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:14.5,regY:15,x:203.5,y:291.4,alpha:0.876},0).wait(1).to({x:186.8,y:287.2,alpha:0.965},0).wait(1).to({x:172.2,y:283.4,alpha:0.991},0).wait(1).to({x:159.7,y:280.1,alpha:1},0).wait(1).to({x:148.9,y:277.2},0).wait(1).to({x:139.8,y:274.7},0).wait(1).to({x:132,y:272.6},0).wait(1).to({x:125.6,y:270.7},0).wait(1).to({x:120.2,y:269.2},0).wait(1).to({x:115.7,y:267.8},0).wait(1).to({x:112.1,y:266.7},0).wait(1).to({x:109.1,y:265.7},0).wait(1).to({x:106.7,y:264.8},0).wait(1).to({x:104.5,y:264},0).wait(1).to({x:103.1,y:263.5},0).wait(1).to({x:102.1,y:263},0).wait(1).to({x:101.8,y:262.9},0).wait(1).to({x:101.5,y:262.7},0).wait(1).to({x:101.3,y:262.6},0).wait(1).to({x:101,y:262.5},0).wait(1).to({x:100.8,y:262.4},0).wait(1).to({x:100.6,y:262.2},0).wait(1).to({x:100.4,y:262.1},0).wait(1).to({x:100.2,y:262},0).wait(1).to({x:100,y:261.8},0).wait(1).to({x:99.8,y:261.7},0).wait(1).to({x:99.6,y:261.5},0).wait(1).to({x:99.3,y:261.3},0).wait(1).to({x:99,y:261.1},0).wait(1).to({x:98.7,y:260.7},0).wait(1).to({x:98.3,y:260.4},0).wait(1).to({x:97.8,y:259.8},0).wait(1).to({x:97.3,y:259.2},0).wait(1).to({x:96.8,y:258.3},0).wait(1).to({x:96.3,y:257.1},0).wait(1).to({x:96,y:255.7},0).wait(1).to({x:95.9,y:253.9},0).wait(1).to({x:96.2,y:251.7},0).wait(1).to({x:96.9,y:249.3},0).wait(1).to({x:98.2,y:246.6},0).wait(1).to({x:100,y:243.5},0).wait(1).to({x:102.3,y:240.3,alpha:0.93},0).wait(1).to({x:105.3,y:236.7,alpha:0.765},0).wait(1).to({x:109.1,y:232.8,alpha:0},0).wait(1));

	// bota 0
	this.instance_24 = new lib.Symbol36();
	this.instance_24.setTransform(272.5,306.6,0.313,0.313,0,0,0,18.9,20.4);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({regX:19,regY:20.5,x:257.1,y:306,alpha:0.876},0).wait(1).to({x:243.7,y:305.2,alpha:0.965},0).wait(1).to({x:232.1,y:304.1,alpha:0.991},0).wait(1).to({x:222,y:302.8,alpha:1},0).wait(1).to({x:213.5,y:301.4},0).wait(1).to({x:206.3,y:299.9},0).wait(1).to({x:200.2,y:298.4},0).wait(1).to({x:195.3,y:296.7},0).wait(1).to({x:191.3,y:295},0).wait(1).to({x:188.1,y:293.2},0).wait(1).to({x:185.8,y:291.4},0).wait(1).to({x:184.2,y:289.6},0).wait(1).to({x:183.3,y:288},0).wait(1).to({x:182.9,y:286.5},0).wait(1).to({y:285.2},0).wait(1).to({x:183,y:284},0).wait(1).to({x:183.1,y:283.7},0).wait(1).to({x:183.2,y:283.4},0).wait(1).to({y:283.2},0).wait(1).to({x:183.3,y:282.9},0).wait(1).to({y:282.7},0).wait(1).to({x:183.4,y:282.4},0).wait(1).to({y:282.2},0).wait(1).to({x:183.5,y:282},0).wait(1).to({y:281.7},0).wait(1).to({x:183.6,y:281.5},0).wait(1).to({y:281.2},0).wait(1).to({x:183.7,y:280.9},0).wait(1).to({y:280.5},0).wait(1).to({x:183.8,y:280},0).wait(1).to({y:279.5},0).wait(1).to({x:183.9,y:278.8},0).wait(1).to({x:184,y:278},0).wait(1).to({x:184.1,y:277},0).wait(1).to({y:275.8},0).wait(1).to({y:274.3},0).wait(1).to({x:183.9,y:272.5},0).wait(1).to({x:183.7,y:270.4},0).wait(1).to({x:183.1,y:267.9},0).wait(1).to({x:182.2,y:265.1},0).wait(1).to({x:180.7,y:262},0).wait(1).to({x:178.5,y:258.7,alpha:0.93},0).wait(1).to({x:175.4,y:255.3,alpha:0.765},0).wait(1).to({x:171.1,y:252.1,alpha:0},0).wait(1));

	// Layer 8
	this.instance_25 = new lib.Symbol37();
	this.instance_25.setTransform(241,291.1,0.313,0.313,43,0,0,187.8,120.8);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({regX:185,regY:143,rotation:37.9,x:220.6,y:291.5,alpha:0.876},0).wait(1).to({rotation:32.5,x:207.6,y:287.9,alpha:0.965},0).wait(1).to({rotation:26.8,x:196.5,y:284.6,alpha:0.991},0).wait(1).to({rotation:20.7,x:187.2,y:281.7,alpha:1},0).wait(1).to({rotation:13.9,x:179.4,y:279.3},0).wait(1).to({rotation:6.2,x:173,y:277},0).wait(1).to({rotation:-4.5,x:168.2,y:274.9},0).wait(1).to({rotation:-9.5,x:163.7,y:273},0).wait(1).to({rotation:-10.4,x:159.6,y:271.2},0).wait(1).to({rotation:-10,x:156.1,y:269.7},0).wait(1).to({rotation:-8.1,x:153,y:268.5},0).wait(1).to({rotation:-6.4,x:150.6,y:267.3},0).wait(1).to({rotation:-4.9,x:148.6,y:266.3},0).wait(1).to({rotation:-3.7,x:146.8,y:265.3},0).wait(1).to({rotation:-2.7,x:145.7,y:264.6},0).wait(1).to({rotation:-2,x:144.9,y:264},0).wait(1).to({rotation:-1.7,x:144.6,y:263.9},0).wait(1).to({rotation:-1.5,x:144.5,y:263.7},0).wait(1).to({x:144.3,y:263.6},0).wait(1).to({x:144.2,y:263.4},0).wait(1).to({rotation:-1.6,x:144,y:263.3},0).wait(1).to({rotation:-1.8,y:263.2},0).wait(1).to({rotation:-2,x:143.8,y:263.1},0).wait(1).to({rotation:-2.3,y:262.9},0).wait(1).to({rotation:-2.6,x:143.7,y:262.8},0).wait(1).to({rotation:-2.9,x:143.6,y:262.7},0).wait(1).to({rotation:-3.3,x:143.5,y:262.5},0).wait(1).to({rotation:-3.8,x:143.3,y:262.4},0).wait(1).to({x:143.1,y:262.2},0).wait(1).to({x:142.9,y:261.9},0).wait(1).to({x:142.6,y:261.6},0).wait(1).to({x:142.3,y:261.3},0).wait(1).to({x:141.9,y:260.8},0).wait(1).to({x:141.4,y:260.2},0).wait(1).to({x:140.8,y:259.5},0).wait(1).to({x:140.1,y:258.7},0).wait(1).to({x:139.4,y:257.6},0).wait(1).to({x:138.6,y:256.2},0).wait(1).to({x:137.8,y:254.5},0).wait(1).to({x:137,y:252.5},0).wait(1).to({x:136.5,y:250},0).wait(1).to({x:136.3,y:247,alpha:0.93},0).wait(1).to({x:136.9,y:243.7,alpha:0.765},0).wait(1).to({x:138.4,y:240,alpha:0},0).wait(1));

	// Layer 9
	this.instance_26 = new lib.Symbol38();
	this.instance_26.setTransform(243.8,296.4,0.313,0.313,0,0,0,120.8,90);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({regX:121,x:228.5,y:291.6,alpha:0.876},0).wait(1).to({x:215.1,y:287.3,alpha:0.965},0).wait(1).to({x:203.5,y:283.4,alpha:0.991},0).wait(1).to({x:193.5,y:280,alpha:1},0).wait(1).to({x:185,y:277},0).wait(1).to({x:177.8,y:274.3},0).wait(1).to({x:171.7,y:272},0).wait(1).to({x:166.7,y:270},0).wait(1).to({x:162.5,y:268.2},0).wait(1).to({x:159,y:266.7},0).wait(1).to({x:156.2,y:265.3},0).wait(1).to({x:154,y:264.2},0).wait(1).to({x:152.2,y:263.2},0).wait(1).to({x:150.6,y:262.2},0).wait(1).to({x:149.5,y:261.5},0).wait(1).to({x:148.8,y:260.9},0).wait(1).to({x:148.6,y:260.7},0).wait(1).to({x:148.5,y:260.6},0).wait(1).to({x:148.3,y:260.4},0).wait(1).to({x:148.2,y:260.3},0).wait(1).to({x:148.1,y:260.2},0).wait(1).to({x:148,y:260.1},0).wait(1).to({x:147.8,y:260},0).wait(1).to({x:147.7,y:259.9},0).wait(1).to({x:147.6,y:259.7},0).wait(1).to({x:147.5,y:259.6},0).wait(1).to({x:147.3,y:259.5},0).wait(1).to({x:147.1,y:259.3},0).wait(1).to({x:147,y:259.1},0).wait(1).to({x:146.7,y:258.9},0).wait(1).to({x:146.5,y:258.6},0).wait(1).to({x:146.1,y:258.3},0).wait(1).to({x:145.7,y:257.9},0).wait(1).to({x:145.3,y:257.3},0).wait(1).to({x:144.7,y:256.7},0).wait(1).to({x:144,y:255.9},0).wait(1).to({x:143.3,y:254.8},0).wait(1).to({x:142.5,y:253.6},0).wait(1).to({x:141.6,y:252},0).wait(1).to({x:140.8,y:250.1},0).wait(1).to({x:140.2,y:247.8},0).wait(1).to({x:139.9,y:245,alpha:0.93},0).wait(1).to({x:140.3,y:241.8,alpha:0.765},0).wait(1).to({x:141.7,y:238.3,alpha:0},0).wait(1));

	// vnutor  plast
	this.instance_27 = new lib.Symbol39();
	this.instance_27.setTransform(250.5,291.5,0.313,0.313,1.3,0,0,114.6,68.2);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({regX:108.5,regY:67.5,rotation:1.5,x:228.3,y:287.2,alpha:0.876},0).wait(1).to({rotation:1.8,x:210.8,y:283.3,alpha:0.965},0).wait(1).to({rotation:2.2,x:195.6,y:279.6,alpha:0.991},0).wait(1).to({rotation:2.8,x:182.5,y:276.1,alpha:1},0).wait(1).to({rotation:3.6,x:171.4,y:272.9},0).wait(1).to({rotation:4.5,x:162,y:270.1},0).wait(1).to({rotation:5.7,x:154,y:267.3},0).wait(1).to({rotation:7.1,x:147.5,y:264.9},0).wait(1).to({rotation:8.8,x:142.1,y:262.6},0).wait(1).to({rotation:11,x:137.7,y:260.6},0).wait(1).to({rotation:12.8,x:134.3,y:258.8},0).wait(1).to({rotation:13.6,x:131.4,y:257.2},0).wait(1).to({rotation:13.8,x:129.2,y:255.8},0).wait(1).to({x:127.3,y:254.5},0).wait(1).to({x:126,y:253.5},0).wait(1).to({rotation:13.7,x:125,y:252.6},0).wait(1).to({x:124.7,y:252.4},0).wait(1).to({x:124.5,y:252.2},0).wait(1).to({rotation:13.6,x:124.4,y:252},0).wait(1).to({x:124.3,y:251.8},0).wait(1).to({rotation:13.5,x:124.2,y:251.6},0).wait(1).to({rotation:13.4,x:124,y:251.5},0).wait(1).to({rotation:13.3,x:123.9,y:251.3},0).wait(1).to({rotation:13.2,x:123.8,y:251.1},0).wait(1).to({rotation:13,x:123.7,y:250.9},0).wait(1).to({rotation:12.9,x:123.6,y:250.6},0).wait(1).to({rotation:12.7,x:123.5,y:250.4},0).wait(1).to({rotation:12.5,x:123.4,y:250.2},0).wait(1).to({rotation:12.3,x:123.3,y:249.8},0).wait(1).to({rotation:12,x:123.2,y:249.4},0).wait(1).to({rotation:11.6,x:123.1,y:248.9},0).wait(1).to({rotation:11.3,y:248.3},0).wait(1).to({rotation:10.8,y:247.6},0).wait(1).to({rotation:10.2,x:123.2,y:246.6},0).wait(1).to({rotation:9.6,x:123.4,y:245.5},0).wait(1).to({rotation:8.9,x:123.7,y:244.2},0).wait(1).to({rotation:8.1,x:124.2,y:242.6},0).wait(1).to({rotation:7.2,x:125,y:240.8},0).wait(1).to({rotation:6.3,x:126,y:238.7},0).wait(1).to({rotation:5.3,x:127.3,y:236.4},0).wait(1).to({rotation:4.3,x:129,y:233.7},0).wait(1).to({rotation:3.2,x:131.1,y:230.7,alpha:0.93},0).wait(1).to({rotation:2,x:133.7,y:227.3,alpha:0.765},0).wait(1).to({rotation:0.8,x:136.8,y:223.5,alpha:0},0).wait(1));

	// ruka zadna
	this.instance_28 = new lib.Symbol40();
	this.instance_28.setTransform(227.8,273.9,0.313,0.313,58,0,0,61.7,-0.7);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({regX:31,regY:17,rotation:56.9,x:199.2,y:265,alpha:0.876},0).wait(1).to({rotation:54.1,x:182.6,y:262,alpha:0.965},0).wait(1).to({rotation:49.3,x:168.1,y:259.7,alpha:0.991},0).wait(1).to({rotation:41.4,x:155.6,y:258.3,alpha:1},0).wait(1).to({rotation:28.2,x:145,y:258.4},0).wait(1).to({rotation:-12,x:138.9,y:263.1},0).wait(1).to({rotation:-28.1,x:133.8},0).wait(1).to({rotation:-34.3,x:128.7,y:261.9},0).wait(1).to({rotation:-38.7,x:124.3,y:260.6},0).wait(1).to({rotation:-42,x:120.7,y:259.4},0).wait(1).to({x:117.2,y:258.1},0).wait(1).to({rotation:-41.8,x:114.4,y:257},0).wait(1).to({rotation:-41.4,x:112,y:256},0).wait(1).to({rotation:-40.9,x:110,y:254.9},0).wait(1).to({rotation:-40.3,x:108.6,y:254.1},0).wait(1).to({rotation:-39.6,x:107.6,y:253.4},0).wait(1).to({rotation:-38.6,x:107.1,y:253.1},0).wait(1).to({rotation:-37.5,x:106.8,y:252.8},0).wait(1).to({rotation:-36.2,x:106.3,y:252.5},0).wait(1).to({rotation:-34.7,x:105.8,y:252.2},0).wait(1).to({rotation:-32.8,x:105.4,y:251.8},0).wait(1).to({rotation:-30.6,x:104.8,y:251.5},0).wait(1).to({rotation:-27.8,x:104.2,y:251},0).wait(1).to({rotation:-24.9,x:103.6,y:250.4},0).wait(1).to({rotation:-22.2,x:102.9,y:250},0).wait(1).to({rotation:-19.8,x:102.4,y:249.4},0).wait(1).to({rotation:-17.5,x:101.9,y:248.9},0).wait(1).to({rotation:-15.4,x:101.4,y:248.4},0).wait(1).to({rotation:-13.4,x:101,y:247.7},0).wait(1).to({rotation:-11.6,x:100.5,y:247.1},0).wait(1).to({rotation:-9.9,x:100,y:246.3},0).wait(1).to({rotation:-8.3,x:99.5,y:245.4},0).wait(1).to({rotation:-6.9,x:99.1,y:244.4},0).wait(1).to({rotation:-5.5,x:98.8,y:243.1},0).wait(1).to({rotation:-4.3,x:98.6,y:241.6},0).wait(1).to({rotation:-3.2,x:98.8,y:239.9},0).wait(1).to({rotation:-2.1,x:99.3,y:237.9},0).wait(1).to({rotation:-1.2,x:100.3,y:235.8},0).wait(1).to({rotation:-0.4,x:101.9,y:233.6},0).wait(1).to({rotation:0.4,x:104,y:231.2},0).wait(1).to({rotation:1.1,x:106.7,y:228.7},0).wait(1).to({rotation:1.7,x:110.1,y:226.2,alpha:0.93},0).wait(1).to({rotation:2.1,x:114.2,y:223.5,alpha:0.765},0).wait(1).to({rotation:2.5,x:119.2,y:220.8,alpha:0},0).wait(1));

	// usta 2
	this.instance_29 = new lib.Symbol44();
	this.instance_29.setTransform(227.4,260.9,0.313,0.313,0,0,0,19.4,22.1);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({regX:19.5,regY:22,x:212.1,y:256.1,alpha:0.876},0).wait(1).to({x:198.7,y:251.8,alpha:0.965},0).wait(1).to({x:187.1,y:248,alpha:0.991},0).wait(1).to({x:177.1,y:244.6,alpha:1},0).wait(1).to({x:168.6,y:241.6},0).wait(1).to({x:161.4,y:238.9},0).wait(1).to({x:155.3,y:236.6},0).wait(1).to({x:150.3,y:234.5},0).wait(1).to({x:146.1,y:232.8},0).wait(1).to({x:142.6,y:231.2},0).wait(1).to({x:139.8,y:229.9},0).wait(1).to({x:137.6,y:228.7},0).wait(1).to({x:135.8,y:227.7},0).wait(1).to({x:134.2,y:226.8},0).wait(1).to({x:133.1,y:226},0).wait(1).to({x:132.4,y:225.4},0).wait(1).to({x:132.2,y:225.3},0).wait(1).to({x:132.1,y:225.1},0).wait(1).to({x:131.9,y:225},0).wait(1).to({x:131.8,y:224.9},0).wait(1).to({x:131.7,y:224.8},0).wait(1).to({x:131.6,y:224.7},0).wait(1).to({x:131.4,y:224.5},0).wait(1).to({x:131.3,y:224.4},0).wait(1).to({x:131.2,y:224.3},0).wait(1).to({x:131.1,y:224.2},0).wait(1).to({x:130.9,y:224},0).wait(1).to({x:130.7,y:223.9},0).wait(1).to({x:130.6,y:223.7},0).wait(1).to({x:130.3,y:223.5},0).wait(1).to({x:130.1,y:223.2},0).wait(1).to({x:129.7,y:222.8},0).wait(1).to({x:129.3,y:222.4},0).wait(1).to({x:128.9,y:221.9},0).wait(1).to({x:128.3,y:221.2,alpha:0},0).wait(1).to({x:127.6,y:220.4},0).wait(1).to({x:126.9,y:219.4},0).wait(1).to({x:126.1,y:218.1},0).wait(1).to({x:125.2,y:216.6},0).wait(1).to({x:124.4,y:214.7},0).wait(1).to({x:123.8,y:212.3},0).wait(1).to({x:123.5,y:209.5},0).wait(1).to({x:123.9,y:206.3},0).wait(1).to({x:125.3,y:202.9},0).wait(1));

	// USTA 6 copy
	this.instance_30 = new lib.Symbol50();
	this.instance_30.setTransform(221.9,260.1,0.313,0.313,0,0,0,49.6,36.5);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({regX:49.5,x:206.5,y:255.3},0).wait(1).to({x:193.1,y:251},0).wait(1).to({x:181.5,y:247.2},0).wait(1).to({x:171.6,y:243.8},0).wait(1).to({x:163.1,y:240.8},0).wait(1).to({x:155.8,y:238.1},0).wait(1).to({x:149.8,y:235.8},0).wait(1).to({x:144.7,y:233.7},0).wait(1).to({x:140.5,y:232},0).wait(1).to({x:137.1,y:230.4},0).wait(1).to({x:134.3,y:229.1},0).wait(1).to({x:132,y:227.9},0).wait(1).to({x:130.2,y:226.9},0).wait(1).to({x:128.7,y:226},0).wait(1).to({x:127.6,y:225.2},0).wait(1).to({x:126.9,y:224.6},0).wait(1).to({x:126.7,y:224.5},0).wait(1).to({x:126.5,y:224.3},0).wait(1).to({x:126.4,y:224.2},0).wait(1).to({x:126.3,y:224.1},0).wait(1).to({x:126.1,y:224},0).wait(1).to({x:126,y:223.9},0).wait(1).to({x:125.9,y:223.7},0).wait(1).to({x:125.8,y:223.6},0).wait(1).to({x:125.6,y:223.5},0).wait(1).to({x:125.5,y:223.4},0).wait(1).to({x:125.4,y:223.2},0).wait(1).to({x:125.2,y:223.1},0).wait(1).to({x:125,y:222.9},0).wait(1).to({x:124.8,y:222.7},0).wait(1).to({x:124.5,y:222.4},0).wait(1).to({x:124.2,y:222},0).wait(1).to({x:123.8,y:221.6},0).wait(1).to({x:123.3,y:221.1},0).wait(1).to({x:122.7,y:220.4,alpha:1},0).wait(1).to({x:122.1,y:219.6},0).wait(1).to({x:121.4,y:218.6},0).wait(1).to({x:120.5,y:217.3},0).wait(1).to({x:119.7,y:215.8},0).wait(1).to({x:118.9,y:213.9},0).wait(1).to({x:118.2,y:211.5},0).wait(1).to({x:117.9,y:208.7,alpha:0.93},0).wait(1).to({x:118.3,y:205.5,alpha:0.765},0).wait(1).to({x:119.8,y:202.1,alpha:0},0).wait(1));

	// nos
	this.instance_31 = new lib.Symbol53();
	this.instance_31.setTransform(229.2,248.2,0.313,0.313,0,0,0,20.9,15.1);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({regX:21,regY:15,x:213.8,y:243.4,alpha:0.876},0).wait(1).to({x:200.4,y:239.1,alpha:0.965},0).wait(1).to({x:188.8,y:235.2,alpha:0.991},0).wait(1).to({x:178.9,y:231.8,alpha:1},0).wait(1).to({x:170.4,y:228.8},0).wait(1).to({x:163.1,y:226.1},0).wait(1).to({x:157.1,y:223.8},0).wait(1).to({x:152,y:221.8},0).wait(1).to({x:147.8,y:220},0).wait(1).to({x:144.4,y:218.5},0).wait(1).to({x:141.6,y:217.1},0).wait(1).to({x:139.3,y:216},0).wait(1).to({x:137.5,y:215},0).wait(1).to({x:136,y:214},0).wait(1).to({x:134.9,y:213.3},0).wait(1).to({x:134.2,y:212.7},0).wait(1).to({x:134,y:212.5},0).wait(1).to({x:133.8,y:212.4},0).wait(1).to({x:133.7,y:212.2},0).wait(1).to({x:133.6,y:212.1},0).wait(1).to({x:133.4,y:212},0).wait(1).to({x:133.3,y:211.9},0).wait(1).to({x:133.2,y:211.8},0).wait(1).to({x:133.1,y:211.7},0).wait(1).to({x:132.9,y:211.5},0).wait(1).to({x:132.8,y:211.4},0).wait(1).to({x:132.7,y:211.3},0).wait(1).to({x:132.5,y:211.1},0).wait(1).to({x:132.3,y:210.9},0).wait(1).to({x:132.1,y:210.7},0).wait(1).to({x:131.8,y:210.4},0).wait(1).to({x:131.5,y:210.1},0).wait(1).to({x:131.1,y:209.7},0).wait(1).to({x:130.6,y:209.1},0).wait(1).to({x:130,y:208.5},0).wait(1).to({x:129.4,y:207.7},0).wait(1).to({x:128.7,y:206.6},0).wait(1).to({x:127.8,y:205.4},0).wait(1).to({x:127,y:203.8},0).wait(1).to({x:126.2,y:201.9},0).wait(1).to({x:125.5,y:199.6},0).wait(1).to({x:125.2,y:196.8,alpha:0.93},0).wait(1).to({x:125.6,y:193.6,alpha:0.765},0).wait(1).to({x:127.1,y:190.1,alpha:0},0).wait(1));

	// SLZY
	this.instance_32 = new lib.Symbol54();
	this.instance_32.setTransform(243.3,260.8,0.313,0.313,0,0,0,8,36);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({x:227.9,y:256},0).wait(1).to({x:214.5,y:251.7},0).wait(1).to({x:202.9,y:247.9},0).wait(1).to({x:193,y:244.5},0).wait(1).to({x:184.5,y:241.5},0).wait(1).to({x:177.2,y:238.8},0).wait(1).to({x:171.2,y:236.5},0).wait(1).to({x:166.1,y:234.4},0).wait(1).to({x:161.9,y:232.7},0).wait(1).to({x:158.5,y:231.1},0).wait(1).to({x:155.7,y:229.8},0).wait(1).to({x:153.4,y:228.6},0).wait(1).to({x:151.6,y:227.6},0).wait(1).to({x:150.1,y:226.7},0).wait(1).to({x:149,y:225.9},0).wait(1).to({x:148.3,y:225.3},0).wait(1).to({x:148.1,y:225.2},0).wait(1).to({x:147.9,y:225},0).wait(1).to({x:147.8,y:224.9},0).wait(1).to({x:147.7,y:224.8},0).wait(1).to({x:147.5,y:224.7},0).wait(1).to({x:147.4,y:224.6},0).wait(1).to({x:147.3,y:224.4},0).wait(1).to({x:147.2,y:224.3},0).wait(1).to({x:147,y:224.2},0).wait(1).to({x:146.9,y:224.1},0).wait(1).to({x:146.8,y:223.9},0).wait(1).to({x:146.6,y:223.8},0).wait(1).to({x:146.4,y:223.6},0).wait(1).to({x:146.2,y:223.4},0).wait(1).to({x:145.9,y:223.1},0).wait(1).to({x:145.6,y:222.7},0).wait(1).to({x:145.2,y:222.3},0).wait(1).to({x:144.7,y:221.8},0).wait(1).to({x:144.1,y:221.1,alpha:1},0).wait(1).to({x:143.5,y:220.3},0).wait(1).to({x:142.8,y:219.3},0).wait(1).to({x:141.9,y:218},0).wait(1).to({x:141.1,y:216.5},0).wait(1).to({x:140.3,y:214.6},0).wait(1).to({x:139.6,y:212.2},0).wait(1).to({x:139.3,y:209.4,alpha:0.93},0).wait(1).to({x:139.7,y:206.2,alpha:0.765},0).wait(1).to({x:141.2,y:202.8,alpha:0},0).wait(1));

	// oko cele copy 5
	this.instance_33 = new lib.Symbol56();
	this.instance_33.setTransform(222.9,249.2,0.313,0.313,0,0,0,93.5,73.4);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({regY:73.5,x:207.5,y:244.4},0).wait(1).to({x:194.1,y:240.1},0).wait(1).to({x:182.5,y:236.3},0).wait(1).to({x:172.5,y:232.9},0).wait(1).to({x:164,y:229.9},0).wait(1).to({x:156.8,y:227.2},0).wait(1).to({x:150.7,y:224.9},0).wait(1).to({x:145.7,y:222.8},0).wait(1).to({x:141.5,y:221.1},0).wait(1).to({x:138,y:219.5},0).wait(1).to({x:135.2,y:218.2},0).wait(1).to({x:133,y:217},0).wait(1).to({x:131.2,y:216},0).wait(1).to({x:129.6,y:215.1},0).wait(1).to({x:128.5,y:214.3},0).wait(1).to({x:127.8,y:213.7},0).wait(1).to({x:127.6,y:213.6},0).wait(1).to({x:127.5,y:213.4},0).wait(1).to({x:127.3,y:213.3},0).wait(1).to({x:127.2,y:213.2},0).wait(1).to({x:127.1,y:213.1},0).wait(1).to({x:127,y:213},0).wait(1).to({x:126.8,y:212.8},0).wait(1).to({x:126.7,y:212.7},0).wait(1).to({x:126.6,y:212.6},0).wait(1).to({x:126.5,y:212.5},0).wait(1).to({x:126.3,y:212.3},0).wait(1).to({x:126.1,y:212.2},0).wait(1).to({x:126,y:212},0).wait(1).to({x:125.7,y:211.8},0).wait(1).to({x:125.5,y:211.5},0).wait(1).to({x:125.1,y:211.1},0).wait(1).to({x:124.7,y:210.7},0).wait(1).to({x:124.3,y:210.2},0).wait(1).to({x:123.7,y:209.5,alpha:1},0).wait(1).to({x:123,y:208.7},0).wait(1).to({x:122.3,y:207.7},0).wait(1).to({x:121.5,y:206.4},0).wait(1).to({x:120.6,y:204.9},0).wait(1).to({x:119.8,y:203},0).wait(1).to({x:119.2,y:200.6},0).wait(1).to({x:118.9,y:197.8,alpha:0.93},0).wait(1).to({x:119.3,y:194.6,alpha:0.765},0).wait(1).to({x:120.7,y:191.2,alpha:0},0).wait(1));

	// oko cele copy 3
	this.instance_34 = new lib.Symbol57();
	this.instance_34.setTransform(222.8,249.2,0.313,0.313,0,0,0,93.2,73.6);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({regX:93.5,regY:73.5,x:207.5,y:244.4,alpha:0.876},0).wait(1).to({x:194.1,y:240.1,alpha:0.965},0).wait(1).to({x:182.5,y:236.3,alpha:0.991},0).wait(1).to({x:172.5,y:232.9,alpha:1},0).wait(1).to({x:164,y:229.9},0).wait(1).to({x:156.8,y:227.2},0).wait(1).to({x:150.7,y:224.9},0).wait(1).to({x:145.7,y:222.8},0).wait(1).to({x:141.5,y:221.1},0).wait(1).to({x:138,y:219.5},0).wait(1).to({x:135.2,y:218.2},0).wait(1).to({x:133,y:217},0).wait(1).to({x:131.2,y:216},0).wait(1).to({x:129.6,y:215.1},0).wait(1).to({x:128.5,y:214.3},0).wait(1).to({x:127.8,y:213.7},0).wait(1).to({x:127.6,y:213.6},0).wait(1).to({x:127.5,y:213.4},0).wait(1).to({x:127.3,y:213.3},0).wait(1).to({x:127.2,y:213.2},0).wait(1).to({x:127.1,y:213.1},0).wait(1).to({x:127,y:213},0).wait(1).to({x:126.8,y:212.8},0).wait(1).to({x:126.7,y:212.7},0).wait(1).to({x:126.6,y:212.6},0).wait(1).to({x:126.5,y:212.5},0).wait(1).to({x:126.3,y:212.3},0).wait(1).to({x:126.1,y:212.2},0).wait(1).to({x:126,y:212},0).wait(1).to({x:125.7,y:211.8},0).wait(1).to({x:125.5,y:211.5},0).wait(1).to({x:125.1,y:211.1},0).wait(1).to({x:124.7,y:210.7},0).wait(1).to({x:124.3,y:210.2},0).wait(1).to({x:123.7,y:209.5,alpha:0},0).wait(1).to({x:123,y:208.7},0).wait(1).to({x:122.3,y:207.7},0).wait(1).to({x:121.5,y:206.4},0).wait(1).to({x:120.6,y:204.9},0).wait(1).to({x:119.8,y:203},0).wait(1).to({x:119.2,y:200.6},0).wait(1).to({x:118.9,y:197.8},0).wait(1).to({x:119.3,y:194.6},0).wait(1).to({x:120.7,y:191.2},0).wait(1));

	// viecko copy
	this.instance_35 = new lib.Symbol64();
	this.instance_35.setTransform(228.4,245.5,0.313,0.313,0,0,0,10.7,6.4);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({regX:10.8,regY:6.2,x:213,y:240.7},0).wait(1).to({x:199.6,y:236.4},0).wait(1).to({x:188,y:232.5},0).wait(1).to({x:178.1,y:229.1},0).wait(1).to({x:169.6,y:226.1},0).wait(1).to({x:162.3,y:223.5},0).wait(1).to({x:156.3,y:221.1},0).wait(1).to({x:151.2,y:219.1},0).wait(1).to({x:147,y:217.3},0).wait(1).to({x:143.5,y:215.8},0).wait(1).to({x:140.7,y:214.4},0).wait(1).to({x:138.5,y:213.3},0).wait(1).to({x:136.7,y:212.3},0).wait(1).to({x:135.1,y:211.3},0).wait(1).to({x:134,y:210.6},0).wait(1).to({x:133.3,y:210},0).wait(1).to({x:133.1,y:209.8},0).wait(1).to({x:133,y:209.7},0).wait(1).to({x:132.8,y:209.5},0).wait(1).to({x:132.7,y:209.4},0).wait(1).to({x:132.6,y:209.3},0).wait(1).to({x:132.5,y:209.2},0).wait(1).to({x:132.3,y:209.1},0).wait(1).to({x:132.2,y:209},0).wait(1).to({x:132.1,y:208.8},0).wait(1).to({x:132,y:208.7,alpha:1},0).wait(1).to({x:131.8,y:208.6,alpha:0},0).wait(1).to({x:131.7,y:208.4},0).wait(1).to({x:131.5,y:208.2},0).wait(1).to({x:131.2,y:208},0).wait(1).to({x:131,y:207.7},0).wait(1).to({x:130.6,y:207.4},0).wait(1).to({x:130.2,y:207},0).wait(1).to({x:129.8,y:206.4},0).wait(1).to({x:129.2,y:205.8},0).wait(1).to({x:128.6,y:205},0).wait(1).to({x:127.8,y:203.9},0).wait(1).to({x:127,y:202.7},0).wait(1).to({x:126.2,y:201.1},0).wait(1).to({x:125.3,y:199.2},0).wait(1).to({x:124.7,y:196.9},0).wait(1).to({x:124.4,y:194.1},0).wait(1).to({x:124.8,y:190.9},0).wait(1).to({x:126.3,y:187.4},0).wait(1));

	// oko vnutrob
	this.instance_36 = new lib.Symbol58();
	this.instance_36.setTransform(225.5,242,0.313,0.313,0,0,0,51.8,26.1);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({regX:52,regY:26,x:210.6,y:237.6,alpha:0.876},0).wait(1).to({x:197.5,y:233.7,alpha:0.965},0).wait(1).to({x:186.2,y:230.1,alpha:0.991},0).wait(1).to({x:176.5,y:226.9,alpha:1},0).wait(1).to({x:168.3,y:224.1},0).wait(1).to({x:161.2,y:221.6},0).wait(1).to({x:155.3,y:219.4},0).wait(1).to({x:150.4,y:217.5},0).wait(1).to({x:146.3,y:215.8},0).wait(1).to({x:143,y:214.4},0).wait(1).to({x:140.3,y:213.1},0).wait(1).to({x:138.1,y:212},0).wait(1).to({x:136.3,y:211},0).wait(1).to({x:134.8,y:210.1},0).wait(1).to({x:133.8,y:209.3},0).wait(1).to({x:133.1,y:208.8},0).wait(1).to({x:132.9,y:208.6},0).wait(1).to({x:132.7,y:208.4},0).wait(1).to({x:132.6,y:208.3},0).wait(1).to({x:132.4,y:208.2},0).wait(1).to({x:132.3,y:208.1},0).wait(1).to({x:132.1,y:207.9},0).wait(1).to({x:132,y:207.8},0).wait(1).to({x:131.9,y:207.7},0).wait(1).to({x:131.7,y:207.5},0).wait(1).to({x:131.6,y:207.4},0).wait(1).to({x:131.4,y:207.3},0).wait(1).to({x:131.3,y:207.1},0).wait(1).to({x:131.1,y:206.9},0).wait(1).to({x:130.8,y:206.6},0).wait(1).to({x:130.5,y:206.3},0).wait(1).to({x:130.2,y:205.9},0).wait(1).to({x:129.7,y:205.5},0).wait(1).to({x:129.2,y:204.9},0).wait(1).to({x:128.6,y:204.2,alpha:0},0).wait(1).to({x:127.9,y:203.3},0).wait(1).to({x:127.1,y:202.2},0).wait(1).to({x:126.2,y:200.8},0).wait(1).to({x:125.3,y:199.1},0).wait(1).to({x:124.3,y:197},0).wait(1).to({x:123.4,y:194.5},0).wait(1).to({x:122.8,y:191.5},0).wait(1).to({x:122.7,y:188},0).wait(1).to({x:123.4,y:184},0).wait(1));

	// oko vnutroa
	this.instance_37 = new lib.Symbol58();
	this.instance_37.setTransform(226.5,239.6,0.313,0.313,0,0,0,51.8,26.1);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({regX:52,regY:26,x:211,y:234.9},0).wait(1).to({x:197.4,y:230.7},0).wait(1).to({x:185.7,y:226.9},0).wait(1).to({x:175.6,y:223.5},0).wait(1).to({x:167,y:220.5},0).wait(1).to({x:159.7,y:217.9},0).wait(1).to({x:153.5,y:215.6},0).wait(1).to({x:148.4,y:213.6},0).wait(1).to({x:144.1,y:211.8},0).wait(1).to({x:140.6,y:210.3},0).wait(1).to({x:137.8,y:208.9},0).wait(1).to({x:135.5,y:207.8},0).wait(1).to({x:133.7,y:206.8},0).wait(1).to({x:132.1,y:205.8},0).wait(1).to({x:131.1,y:205.1},0).wait(1).to({x:130.3,y:204.5},0).wait(1).to({x:130.1,y:204.3},0).wait(1).to({x:130,y:204.1},0).wait(1).to({x:129.8,y:204},0).wait(1).to({x:129.7,y:203.9},0).wait(1).to({x:129.5,y:203.8},0).wait(1).to({x:129.4,y:203.7},0).wait(1).to({x:129.3,y:203.5},0).wait(1).to({x:129.2,y:203.4},0).wait(1).to({x:129,y:203.3},0).wait(1).to({x:128.9,y:203.1},0).wait(1).to({x:128.7,y:203},0).wait(1).to({x:128.6,y:202.8},0).wait(1).to({x:128.4,y:202.6},0).wait(1).to({x:128.1,y:202.4},0).wait(1).to({x:127.8,y:202.1},0).wait(1).to({x:127.5,y:201.7},0).wait(1).to({x:127.1,y:201.2},0).wait(1).to({x:126.6,y:200.7},0).wait(1).to({x:126,y:199.9,alpha:1},0).wait(1).to({x:125.4,y:199},0).wait(1).to({x:124.7,y:197.9},0).wait(1).to({x:123.9,y:196.5},0).wait(1).to({x:123.2,y:194.8},0).wait(1).to({x:122.5,y:192.7},0).wait(1).to({x:122.2,y:190.1},0).wait(1).to({x:122.3,y:187.1,alpha:0.93},0).wait(1).to({x:123.1,y:183.8,alpha:0.765},0).wait(1).to({x:124.8,y:180.3,alpha:0},0).wait(1));

	// oko vonk prave
	this.instance_38 = new lib.Symbol59();
	this.instance_38.setTransform(226.2,240.5,0.313,0.313,0,0,0,69,38.6);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({regY:38.5,x:210.8,y:235.7,alpha:0.876},0).wait(1).to({x:197.4,y:231.4,alpha:0.965},0).wait(1).to({x:185.8,y:227.5,alpha:0.991},0).wait(1).to({x:175.8,y:224.1,alpha:1},0).wait(1).to({x:167.3,y:221.1},0).wait(1).to({x:160.1,y:218.4},0).wait(1).to({x:154,y:216.1},0).wait(1).to({x:149,y:214.1},0).wait(1).to({x:144.8,y:212.3},0).wait(1).to({x:141.3,y:210.8},0).wait(1).to({x:138.5,y:209.4},0).wait(1).to({x:136.3,y:208.3},0).wait(1).to({x:134.5,y:207.3},0).wait(1).to({x:132.9,y:206.3},0).wait(1).to({x:131.8,y:205.6},0).wait(1).to({x:131.1,y:205},0).wait(1).to({x:130.9,y:204.8},0).wait(1).to({x:130.8,y:204.7},0).wait(1).to({x:130.6,y:204.5},0).wait(1).to({x:130.5,y:204.4},0).wait(1).to({x:130.4,y:204.3},0).wait(1).to({x:130.3,y:204.2},0).wait(1).to({x:130.1,y:204.1},0).wait(1).to({x:130,y:204},0).wait(1).to({x:129.9,y:203.8},0).wait(1).to({x:129.8,y:203.7},0).wait(1).to({x:129.6,y:203.6},0).wait(1).to({x:129.4,y:203.4},0).wait(1).to({x:129.3,y:203.2},0).wait(1).to({x:129,y:203},0).wait(1).to({x:128.8,y:202.7},0).wait(1).to({x:128.4,y:202.4},0).wait(1).to({x:128,y:202},0).wait(1).to({x:127.6,y:201.4},0).wait(1).to({x:127,y:200.8},0).wait(1).to({x:126.3,y:200},0).wait(1).to({x:125.6,y:198.9},0).wait(1).to({x:124.8,y:197.7},0).wait(1).to({x:123.9,y:196.1},0).wait(1).to({x:123.1,y:194.2},0).wait(1).to({x:122.5,y:191.9},0).wait(1).to({x:122.2,y:189.1,alpha:0.93},0).wait(1).to({x:122.6,y:185.9,alpha:0.765},0).wait(1).to({x:124,y:182.4,alpha:0},0).wait(1));

	// bielko prave
	this.instance_39 = new lib.Symbol60();
	this.instance_39.setTransform(226.3,244.9,0.313,0.313,0,0,0,64.3,41);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({regX:64.5,x:210.9,y:240.1,alpha:0.876},0).wait(1).to({x:197.5,y:235.8,alpha:0.965},0).wait(1).to({x:185.9,y:231.9,alpha:0.991},0).wait(1).to({x:176,y:228.5,alpha:1},0).wait(1).to({x:167.5,y:225.5},0).wait(1).to({x:160.2,y:222.8},0).wait(1).to({x:154.2,y:220.5},0).wait(1).to({x:149.1,y:218.5},0).wait(1).to({x:144.9,y:216.7},0).wait(1).to({x:141.5,y:215.2},0).wait(1).to({x:138.7,y:213.8},0).wait(1).to({x:136.4,y:212.7},0).wait(1).to({x:134.6,y:211.7},0).wait(1).to({x:133.1,y:210.7},0).wait(1).to({x:132,y:210},0).wait(1).to({x:131.3,y:209.4},0).wait(1).to({x:131.1,y:209.2},0).wait(1).to({x:130.9,y:209.1},0).wait(1).to({x:130.8,y:208.9},0).wait(1).to({x:130.7,y:208.8},0).wait(1).to({x:130.5,y:208.7},0).wait(1).to({x:130.4,y:208.6},0).wait(1).to({x:130.3,y:208.5},0).wait(1).to({x:130.2,y:208.4},0).wait(1).to({x:130,y:208.2},0).wait(1).to({x:129.9,y:208.1},0).wait(1).to({x:129.8,y:208},0).wait(1).to({x:129.6,y:207.8},0).wait(1).to({x:129.4,y:207.6},0).wait(1).to({x:129.2,y:207.4},0).wait(1).to({x:128.9,y:207.1},0).wait(1).to({x:128.6,y:206.8},0).wait(1).to({x:128.2,y:206.4},0).wait(1).to({x:127.7,y:205.8},0).wait(1).to({x:127.1,y:205.2},0).wait(1).to({x:126.5,y:204.4},0).wait(1).to({x:125.8,y:203.3},0).wait(1).to({x:124.9,y:202.1},0).wait(1).to({x:124.1,y:200.5},0).wait(1).to({x:123.3,y:198.6},0).wait(1).to({x:122.6,y:196.3},0).wait(1).to({x:122.3,y:193.5,alpha:0.93},0).wait(1).to({x:122.7,y:190.3,alpha:0.765},0).wait(1).to({x:124.2,y:186.8,alpha:0},0).wait(1));

	// COP
	this.instance_40 = new lib.Symbol61();
	this.instance_40.setTransform(198.7,222.5,0.313,0.313,0,0,0,138.2,50.1);
	this.instance_40.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({regX:138.5,regY:50,x:183.4,y:217.7,alpha:0.876},0).wait(1).to({x:170,y:213.4,alpha:0.965},0).wait(1).to({x:158.4,y:209.5,alpha:0.991},0).wait(1).to({x:148.5,y:206.1,alpha:1},0).wait(1).to({x:140,y:203.1},0).wait(1).to({x:132.7,y:200.4},0).wait(1).to({x:126.7,y:198.1},0).wait(1).to({x:121.6,y:196.1},0).wait(1).to({x:117.4,y:194.3},0).wait(1).to({x:114,y:192.8},0).wait(1).to({x:111.2,y:191.4},0).wait(1).to({x:108.9,y:190.3},0).wait(1).to({x:107.1,y:189.3},0).wait(1).to({x:105.6,y:188.3},0).wait(1).to({x:104.5,y:187.6},0).wait(1).to({x:103.8,y:187},0).wait(1).to({x:103.6,y:186.8},0).wait(1).to({x:103.4,y:186.7},0).wait(1).to({x:103.3,y:186.5},0).wait(1).to({x:103.2,y:186.4},0).wait(1).to({x:103,y:186.3},0).wait(1).to({x:102.9,y:186.2},0).wait(1).to({x:102.8,y:186.1},0).wait(1).to({x:102.7,y:186},0).wait(1).to({x:102.5,y:185.8},0).wait(1).to({x:102.4,y:185.7},0).wait(1).to({x:102.3,y:185.6},0).wait(1).to({x:102.1,y:185.4},0).wait(1).to({x:101.9,y:185.2},0).wait(1).to({x:101.7,y:185},0).wait(1).to({x:101.4,y:184.7},0).wait(1).to({x:101.1,y:184.4},0).wait(1).to({x:100.7,y:184},0).wait(1).to({x:100.2,y:183.4},0).wait(1).to({x:99.6,y:182.8},0).wait(1).to({x:99,y:182},0).wait(1).to({x:98.3,y:180.9},0).wait(1).to({x:97.4,y:179.7},0).wait(1).to({x:96.6,y:178.1},0).wait(1).to({x:95.8,y:176.2},0).wait(1).to({x:95.1,y:173.9},0).wait(1).to({x:94.8,y:171.1,alpha:0.93},0).wait(1).to({x:95.2,y:167.9,alpha:0.765},0).wait(1).to({x:96.7,y:164.4,alpha:0},0).wait(1));

	// maska copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AVuXfQhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgLQg7gggigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIABAAIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgDAiAIIAVAGQBHAkBFBBQAeAdAkAoIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIATAOQAPANASANQAZARA0AZIA/AgQgYgDgdgLg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AU7W/Qhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gggigxQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAfAdAjApIAKAJIAyBBIABABQA/BpBHBhQAXAeARAPIAUAOQAOANASANQAZASA0AZIA/AfQgXgDgegLg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AUOWkQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAKAsAJIABAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgCAiAHIAUAGQBIAkBEBBQAfAdAjAoIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ATnWNQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAKAsAIIABABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBIAlBEBBQAfAcAjApIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ATFV5Qhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAKAsAJIABAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAGQBIAkBEBBQAfAdAjAoIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ASoVoQhygqh9hhIgugjQgagTgWgLIgOgHQgdgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7ggghgxQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAbAJAsAJIABAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAjApIALAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAOANATANQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ASPVaQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIAAAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAGQBIAkBEBBQAfAcAkApIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AR/VRQhygqh9hhIgugjQgagTgWgLIgOgHQgdgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7ggghgxQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAbAJAsAJIABAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAjApIALAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAOANATANQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AR2VMQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgFIgcgNIgGgEIAAABQhBgdhPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAeAdAkApIAKAJIAyBBIABACQA+BoBIBhQAXAeARAPIATAOQAPAOASAMQAZASA0AZIA/AfQgYgDgdgLg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ARuVIQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgFIgbgNIgHgEIAAABQhBgdhPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAfAdAjApIAKAJIAyBBIABACQA+BoBIBhQAXAeARAPIAUAOQAOAOASAMQAZASA0AZIA/AfQgXgCgegMg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ARnVFQhygqh9hhIgugjQgagTgWgLIgOgHQgcgTg6gcIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg7ggghgxQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIAAAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAkApIAKAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAOANATANQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ARiVCQhygqh9hhIgugjQgagTgWgLIgOgHQgdgTg5gcIgMgFIgbgNIgHgEIAAABQhBgdhPgSQg0gMhLgLQg7gfghgyQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAbAJAsAJIABAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAjApIALAJIAyBBIABACQA+BoBIBhQAWAeASAPIATAOQAOAOATAMQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AReVAQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAfAdAjApIAKAJIAyBBIABABQA+BpBIBhQAXAeARAPIAUAOQAOAOASAMQAZASA0AZIA/AfQgXgDgegLg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ARaU+Qhygqh9hhIgugjQgagTgWgLIgOgHQgcgTg6gcIgMgFIgbgNIgHgEIAAABQhAgdhQgSQg0gMhLgLQg7gfghgyQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIAAAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAkApIAKAJIAyBBIABACQA+BoBIBhQAWAeASAPIATAOQAOAOATAMQAZASAzAZIA/AfQgXgCgegMg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ARXU9Qhygrh9hgIgugjQgagTgWgMIgOgHQgcgTg6gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg6gggigxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIAAAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAGQBIAkBEBBQAfAcAkApIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_15 = new cjs.Graphics().p("ARVU8Qhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAJAsAJIABABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBHAlBFBBQAfAcAjApIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ARTU7Qhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAJAsAJIABABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBHAlBFBBQAfAcAjApIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ARRU6Qhygrh9hgIgugjQgagTgWgMIgOgHQgcgTg6gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAIIAAABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBIAlBEBBQAfAcAkApIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ARQU5Qhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gggigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIABAAIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgDAiAIIAVAGQBHAkBFBBQAfAdAjAoIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIAUAOQAOANASANQAZARA0AZIA/AgQgXgDgegLg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ARPU4Qhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAeAdAkApIAKAJIAyBBIABABQA+BpBIBhQAXAeARAPIATAOQAPAOASAMQAZASA0AZIA/AfQgYgDgdgLg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ARNU4Qhygrh9hgIgugjQgagTgWgMIgOgHQgcgTg6gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAJAsAJIAAABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBIAlBEBBQAfAcAkApIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ARMU3Qhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAKAsAJIABAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgCAiAHIAUAGQBIAkBEBBQAfAdAjAoIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_22 = new cjs.Graphics().p("ARLU2Qhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgFIgbgNIgHgEIAAABQhBgdhPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAfAdAjApIAKAJIAyBBIABACQA+BoBIBhQAXAeARAPIAUAOQAOAOASAMQAZASA0AZIA/AfQgXgDgegLg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ARKU2Qhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgMQg7gfgigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAJAsAJIABABIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgDAiAIIAVAFQBHAlBFBBQAeAcAkApIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIATANQAPAOASANQAZARA0AZIA/AfQgYgCgdgLg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ARIU1Qhygrh9hgIgugjQgagTgWgMIgOgHQgcgTg6gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIAAAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAGQBIAkBEBBQAfAdAkAoIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ARHU0Qhygqh9hhIgugjQgagTgWgLIgOgHQgdgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gfghgyQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAbAJAsAJIABAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBHAkBFBBQAfAdAjApIALAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAOAOATAMQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ARGUzQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgFIgcgNIgGgEIAAABQhBgdhPgSQg0gLhLgMQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAlBFBAQAeAdAkApIAKAJIAyBBIABACQA+BpBIBgQAXAeARAPIATAOQAPAOASAMQAZASA0AZIA/AfQgYgCgdgMg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AREUzQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAKAsAIIABABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBIAlBEBBQAfAcAjApIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_28 = new cjs.Graphics().p("ARCUyQhygrh9hgIgugjQgagTgWgMIgOgHQgcgTg6gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQgzgMhMgLQg6gggigxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIAAAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAGQBIAkBEBBQAfAcAkApIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_29 = new cjs.Graphics().p("ARBUxQhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgMQg7gfgigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAIIABABIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgDAiAIIAVAFQBHAlBFBBQAeAcAkApIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIATANQAPAOASANQAZARA0AZIA/AfQgYgCgdgLg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AQ+UvQhygqh9hhIgugjQgagTgWgLIgOgHQgdgTg5gcIgMgFIgbgNIgHgEIAAABQhBgchPgTQg0gLhLgMQg7gfghgyQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAbAJAsAJIABAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAlBEBAQAfAdAjApIALAJIAyBBIABACQA+BpBIBgQAWAeASAPIATAOQAOAOATAMQAZASAzAZIA/AfQgXgCgegMg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AQ7UuQhygrh9hgIgugjQgagTgWgMIgOgHQgcgTg6gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIAAAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgCAiAHIAUAGQBIAkBEBBQAfAdAkAoIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AQ4UsQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gggigxQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAfAdAjApIAKAJIAyBBIABABQA+BpBIBhQAXAeARAPIAUAOQAOANASANQAZASA0AZIA/AfQgXgDgegLg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AQ0UqQhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgMQg7gfgigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAIIABABIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgDAiAIIAVAFQBHAlBFBBQAeAcAkApIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIATANQAPAOASANQAZARA0AZIA/AfQgYgCgdgLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AQuUnQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIAAAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAGQBIAkBEBBQAfAdAkAoIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AQoUjQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgFIgbgNIgHgEIAAABQhBgdhPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAzAOAfgHQAOgDAHgFIAGgDIAGgEQAHgEAKgLIAEgFIAEgEIAGgEQAdgCAiAIIAUAFQBHAkBFBBQAfAdAjApIAKAJIAzBBIABACQA+BoBIBhQAWAeARAPIAUAOQAOAOASAMQAZASA0AZIA/AfQgXgCgegMg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AQgUfQhygqh9hhIgugjQgagTgWgLIgOgHQgcgTg6gcIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgLQg7gfghgyQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIAAAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAkApIAKAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAOAOATAMQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AQXUaQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7ggghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAbAKAsAJIABAAIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgCAiAHIAUAGQBIAkBEBBQAfAdAjAoIALAJIAyBCIABABQA+BpBIBgQAWAfASAPIATAOQAOANATANQAZARAzAZIA/AgQgXgDgegLg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AQMUUQhygrh9hgIgugjQgagTgWgMIgOgHQgdgTg5gbIgMgGIgbgNIgHgDIAAAAQhAgchQgSQg0gMhLgMQg7gfghgxQgegrgOhEIgCgGIAOACIAFgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAIIAAABIAKADQAzANAfgGQAOgDAIgFIAFgEIAHgEQAGgEAKgLIAEgFIAFgDIAGgEQAcgDAiAIIAUAFQBIAlBEBBQAfAcAkApIAKAJIAyBCIABABQA+BpBIBgQAWAfASAPIATANQAOAOATANQAZARAzAZIA/AfQgXgCgegLg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AQAUMQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAeAdAkApIAKAJIAyBBIABABQA+BpBIBhQAXAeARAPIATAOQAPANASANQAZASA0AZIA/AfQgYgDgdgLg");
	var mask_1_graphics_40 = new cjs.Graphics().p("APxUDQhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gggigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIABAAIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgCAiAHIAVAGQBHAkBFBBQAeAdAkAoIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIAUAOQAOANASANQAZARA0AZIA/AgQgYgDgdgLg");
	var mask_1_graphics_41 = new cjs.Graphics().p("APgT4Qhygrh+hgIgtgjQgbgTgVgMIgPgHQgcgTg5gbIgMgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgLQg7gggigxQgdgrgPhEIgBgGIAOACIAEgJIABgDQgNgIgLgJIgCgRIADABQAcAKAsAJIABAAIAKADQAyANAggGQAOgDAHgFIAFgEIAHgEQAHgEAKgLIAEgFIAEgDIAGgEQAcgDAiAIIAVAGQBHAkBFBBQAeAdAkAoIAKAJIAyBCIABABQA+BpBIBgQAXAfARAPIATAOQAPANASANQAZARA0AZIA/AgQgYgDgdgLg");
	var mask_1_graphics_42 = new cjs.Graphics().p("APMTqQhygqh9hhIgugjQgagTgWgLIgOgHQgcgTg6gcIgMgGIgbgNIgHgDIAAAAQhAgchQgSQgzgMhMgLQg6gfgigyQgegrgOhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIAAAAIAKADQAzAOAfgHQAOgDAIgFIAFgDIAHgEQAGgEAKgLIAEgFIAFgEIAGgEQAcgCAiAIIAUAFQBIAkBEBBQAfAdAkApIAKAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAPAOASAMQAZASAzAZIA/AfQgXgDgegLg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AO4TYQhygqh+hhIgtgjQgbgTgVgLIgPgHQgcgTg5gcIgMgGIgbgNIgHgDIAAAAQhBgchPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgBgHIAOADIAEgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIABAAIAKADQAyAOAggHQAOgDAHgFIAFgDIAHgEQAHgEAKgLIAEgFIAEgEIAGgEQAcgCAiAIIAVAFQBHAkBFBBQAfAdAjApIAKAJIAyBBIABABQA+BpBIBhQAXAeARAPIAUAOQAOAOASAMQAZASA0AZIA/AfQgXgDgegLg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AOxTOQhxgqh+hhIgugjQgagTgWgLIgOgHQgcgTg6gcIgLgGIgcgNIgGgDIAAAAQhBgchPgSQg0gMhLgLQg7gfgigyQgdgrgPhDIgCgHIAOADIAFgKIABgDQgNgIgLgJIgCgQIADABQAcAJAsAJIAAAAIAKADQAzAOAfgHQAPgDAHgFIAFgDIAHgEQAGgEALgLIADgFIAFgEIAGgEQAcgCAiAIIAVAFQBHAkBEBBQAfAdAkApIAKAJIAyBBIABABQA+BpBIBhQAWAeASAPIATAOQAPANASANQAZASA0AZIA/AfQgYgDgegLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:144.3,y:151.7}).wait(1).to({graphics:mask_1_graphics_1,x:139.2,y:148.5}).wait(1).to({graphics:mask_1_graphics_2,x:134.8,y:145.8}).wait(1).to({graphics:mask_1_graphics_3,x:130.9,y:143.5}).wait(1).to({graphics:mask_1_graphics_4,x:127.5,y:141.5}).wait(1).to({graphics:mask_1_graphics_5,x:124.6,y:139.8}).wait(1).to({graphics:mask_1_graphics_6,x:122.1,y:138.4}).wait(1).to({graphics:mask_1_graphics_7,x:120.5,y:137.5}).wait(1).to({graphics:mask_1_graphics_8,x:119.5,y:137.1}).wait(1).to({graphics:mask_1_graphics_9,x:118.7,y:136.7}).wait(1).to({graphics:mask_1_graphics_10,x:118.1,y:136.3}).wait(1).to({graphics:mask_1_graphics_11,x:117.6,y:136.1}).wait(1).to({graphics:mask_1_graphics_12,x:117.1,y:135.8}).wait(1).to({graphics:mask_1_graphics_13,x:116.8,y:135.7}).wait(1).to({graphics:mask_1_graphics_14,x:116.5,y:135.5}).wait(1).to({graphics:mask_1_graphics_15,x:116.3,y:135.4}).wait(1).to({graphics:mask_1_graphics_16,x:116.1,y:135.3}).wait(1).to({graphics:mask_1_graphics_17,x:115.9,y:135.2}).wait(1).to({graphics:mask_1_graphics_18,x:115.7,y:135.1}).wait(1).to({graphics:mask_1_graphics_19,x:115.6,y:135}).wait(1).to({graphics:mask_1_graphics_20,x:115.5,y:135}).wait(1).to({graphics:mask_1_graphics_21,x:115.4,y:134.9}).wait(1).to({graphics:mask_1_graphics_22,x:115.2,y:134.9}).wait(1).to({graphics:mask_1_graphics_23,x:115.1,y:134.8}).wait(1).to({graphics:mask_1_graphics_24,x:115,y:134.7}).wait(1).to({graphics:mask_1_graphics_25,x:114.9,y:134.6}).wait(1).to({graphics:mask_1_graphics_26,x:114.7,y:134.6}).wait(1).to({graphics:mask_1_graphics_27,x:114.6,y:134.5}).wait(1).to({graphics:mask_1_graphics_28,x:114.4,y:134.4}).wait(1).to({graphics:mask_1_graphics_29,x:114.2,y:134.3}).wait(1).to({graphics:mask_1_graphics_30,x:114,y:134.2}).wait(1).to({graphics:mask_1_graphics_31,x:113.7,y:134}).wait(1).to({graphics:mask_1_graphics_32,x:113.3,y:133.8}).wait(1).to({graphics:mask_1_graphics_33,x:112.9,y:133.6}).wait(1).to({graphics:mask_1_graphics_34,x:112.4,y:133.3}).wait(1).to({graphics:mask_1_graphics_35,x:111.7,y:133}).wait(1).to({graphics:mask_1_graphics_36,x:111,y:132.5}).wait(1).to({graphics:mask_1_graphics_37,x:110.1,y:132}).wait(1).to({graphics:mask_1_graphics_38,x:109,y:131.4}).wait(1).to({graphics:mask_1_graphics_39,x:107.7,y:130.6}).wait(1).to({graphics:mask_1_graphics_40,x:106.2,y:129.7}).wait(1).to({graphics:mask_1_graphics_41,x:104.5,y:128.6}).wait(1).to({graphics:mask_1_graphics_42,x:102.6,y:127.2}).wait(1).to({graphics:mask_1_graphics_43,x:100.5,y:125.4}).wait(1).to({graphics:mask_1_graphics_44,x:99.9,y:124.4}).wait(1));

	// vlasky copy
	this.instance_41 = new lib.Symbol62();
	this.instance_41.setTransform(138.4,215.7,1,1,0,0,180,88.9,59.1);
	this.instance_41.alpha = 0;

	this.instance_41.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({regY:62.1,x:139.5,y:219.3},0).wait(1).to({x:140.6,y:220,alpha:0.5},0).wait(1).to({x:141.7,y:220.7,alpha:1},0).wait(1).to({x:142.8,y:221.4},0).wait(1).to({x:143.9,y:222},0).wait(1).to({x:145,y:222.7},0).wait(1).to({x:146.1,y:223.4},0).wait(1).to({x:147.2,y:224.1},0).wait(1).to({x:148.3,y:224.8},0).wait(1).to({x:149.4,y:225.4},0).wait(1).to({x:150.5,y:226.1},0).wait(1).to({x:151.6,y:226.8},0).wait(1).to({x:152.7,y:227.5},0).wait(1).to({x:153.8,y:228.2},0).wait(1).to({x:154.9,y:228.8},0).wait(1).to({x:156,y:229.5},0).wait(1).to({x:157.1,y:230.2},0).wait(1).to({x:158.2,y:230.9},0).wait(1).to({x:159.3,y:231.6},0).wait(1).to({x:160.4,y:232.2},0).wait(1).to({x:161.5,y:232.9},0).wait(1).to({x:162.6,y:233.6},0).wait(1).to({x:163.6,y:234.3},0).wait(1).to({x:164.7,y:235},0).wait(1).to({x:165.8,y:235.6},0).wait(1).to({x:166.9,y:236.3},0).wait(1).to({x:168,y:237},0).wait(1).to({x:169.1,y:237.7},0).wait(1).to({x:170.2,y:238.4},0).wait(1).to({x:171.3,y:239},0).wait(1).to({x:172.4,y:239.7},0).wait(1).to({x:173.5,y:240.4},0).wait(1).to({x:174.6,y:241.1},0).wait(1).to({x:175.7,y:241.8},0).wait(1).to({x:176.8,y:242.4},0).wait(1).to({x:177.9,y:243.1},0).wait(1).to({x:179,y:243.8},0).wait(1).to({x:180.1,y:244.5},0).wait(1).to({x:181.2,y:245.2},0).wait(1).to({x:182.3,y:245.8},0).wait(1).to({x:183.4,y:246.5,alpha:0.75},0).wait(1).to({x:184.5,y:247.2,alpha:0.5},0).wait(1).to({x:185.6,y:247.9,alpha:0.25},0).wait(1).to({x:186.7,y:248.6,alpha:0},0).wait(1));

	// efekt red
	this.instance_42 = new lib.Symbol66();
	this.instance_42.setTransform(161.9,278.6,1,1,0,0,0,89,70);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({regX:81.7,regY:64,x:154.6,y:272.6},0).wait(7).to({x:154.2,y:272.3,alpha:0.068},0).wait(1).to({x:153.8,y:272.1,alpha:0.294},0).wait(1).to({x:153.4,y:271.8,alpha:1},0).wait(1).to({x:153,y:271.6,alpha:0.927},0).wait(1).to({x:152.6,y:271.3,alpha:0.856},0).wait(1).to({x:152.2,y:271.1,alpha:0.786},0).wait(1).to({x:151.9,y:270.8,alpha:0.718},0).wait(1).to({x:151.5,y:270.6,alpha:0.651},0).wait(1).to({x:151.1,y:270.3,alpha:0.586},0).wait(1).to({x:150.7,y:270.1,alpha:0.523},0).wait(1).to({x:150.3,y:269.8,alpha:0.462},0).wait(1).to({x:149.9,y:269.6,alpha:0.403},0).wait(1).to({x:149.6,y:269.3,alpha:0.346},0).wait(1).to({x:149.2,y:269.1,alpha:0.293},0).wait(1).to({x:148.8,y:268.8,alpha:0.243},0).wait(1).to({x:148.4,y:268.5,alpha:0.198},0).wait(1).to({x:148,y:268.3,alpha:0.159},0).wait(1).to({x:147.6,y:268,alpha:0.127},0).wait(1).to({x:147.3,y:267.8,alpha:0.101},0).wait(1).to({x:146.9,y:267.5,alpha:0.078},0).wait(1).to({x:146.5,y:267.3,alpha:0.06},0).wait(1).to({x:146.1,y:267,alpha:0.044},0).wait(1).to({x:145.7,y:266.8,alpha:0.032},0).wait(1).to({x:145.3,y:266.5,alpha:0.021},0).wait(1).to({x:145,y:266.3,alpha:0.013},0).wait(1).to({x:144.6,y:266,alpha:0.006},0).wait(1).to({x:144.2,y:265.8,alpha:0.002},0).wait(1).to({x:143.8,y:265.5,alpha:0},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,258,710.7,326.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;