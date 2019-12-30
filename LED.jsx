"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel

// tao folder in an
var folderInAn = Folder("~/Desktop/in an");
if (!folderInAn.exists) { folderInAn.create(); }

var fileDialog = app.openDialog();
var file = new File(fileDialog);
file.open("r");
var strFile;
strFile = file.read();
file.close();
// read data from json
var data = JSON.parse(strFile);
var arr = data.data;
var day = data.day;
var mounth = data.mounth;
var hAll = 15354, wAll = 28346;
var hItem, wItem, yPosition, xPosition, hLast, wLast;
var stt = 0;

// for loop
for (var i = 0; i <= arr.length - 1; i++) {
    app.documents.add(28346, 15354, 300, "khay.jpg");
    hItem = 0;
    wItem = 0;
    yPosition = 0;
    xPosition = 0;
    hLast = 0;
    wLast = 0;
    var lastName = "";
    // for loop items tao khung

    for (var j = 0; j <= arr[i].length - 1; j++) {
        // for (var j = 7; j <= 20; j++) {
        hItem = arr[i][j].pixel.h;
        wItem = arr[i][j].pixel.w;
        stt = arr[i][j].stt;
        if (yPosition + hLast + hItem <= hAll) {
            if (wLast == wItem) {
                yPosition = yPosition + hLast;
                hLast = hItem;
                wLast = wItem;
                // alert(arr[i][j].stt);
                // alert(1);
            }
            else {
                yPosition = 0;
                xPosition = xPosition + wLast;
                hLast = hItem;
                wLast = wItem;
                // alert(arr[i][j].stt);
                // alert(2);
            }
        }
        else {
            yPosition = 0;
            xPosition = xPosition + wLast;
            hLast = hItem;
            wLast = wItem;
            // alert(arr[i][j].stt);
            //     alert(3);
        }


        app.open(File("D:/DATA/file design/khung.jpg"));
        alert(arr[i][j].name);
        app.doAction("crop" + arr[i][j].name + "flash", "auto xep file");
        app.doAction("tao khung", "auto xep file");
        app.activeDocument.artLayers.add();
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.textItem.contents = stt;
        app.activeDocument.activeLayer.textItem.size = 30;
        var textColor = new SolidColor;
        textColor.rgb.red = 255;
        textColor.rgb.green = 0;
        textColor.rgb.blue = 0;
        app.activeDocument.activeLayer.textItem.color = textColor;
        app.doAction("can giua", "auto xep file");
        app.activeDocument.activeLayer.merge();
        if (arr[i][j].name != lastName) {
            app.activeDocument.artLayers.add();
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.textItem.contents = arr[i][j].name;
            app.activeDocument.activeLayer.textItem.size = 30;
            var textColor = new SolidColor;
            textColor.rgb.red = 255;
            textColor.rgb.green = 0;
            textColor.rgb.blue = 0;
            app.activeDocument.activeLayer.textItem.color = textColor;
            app.doAction("can giua name", "auto xep file");
            app.activeDocument.activeLayer.merge();
            lastName = arr[i][j].name;
        }
        app.doAction("duplicate to khay", "auto xep file");
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("move to zero", "auto xep file");
        app.activeDocument.activeLayer.name = (j + 1) + " " + arr[i][j].name;
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        if (j > 0) app.activeDocument.activeLayer.merge();

    }

    app.activeDocument.activeLayer.name = "khung";
    app.activeDocument.duplicate("khung " + (i + 1) + " ngay " + day, false);
    app.doAction("xoay 180", "auto xep file");
    app.doAction("cmyk khung", "auto xep file");
    var folder1 = Folder("~/Desktop/in an/khay" + (i + 1) + " ngay " + day + " flase Case");
    if (!folder1.exists) { folder1.create(); }
    app.activeDocument.saveAs(folder1, TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close();



    // for loop items xep file 
    hItem = 0;
    wItem = 0;
    yPosition = 0;
    xPosition = 0;
    hLast = 0;
    wLast = 0;

    for (var j = 0; j <= arr[i].length - 1; j++) {
        // for (var j = 0; j <= 10; j++) {
        hItem = arr[i][j].pixel.h;
        wItem = arr[i][j].pixel.w;
        if (yPosition + hLast + hItem <= hAll) {
            if (wLast == wItem) {
                yPosition = yPosition + hLast;
                hLast = hItem;
                wLast = wItem;
            }
            else {
                yPosition = 0;
                xPosition = xPosition + wLast;
                hLast = hItem;
                wLast = wItem;
            }
        }
        else {
            yPosition = 0;
            xPosition = xPosition + wLast;
            hLast = hItem;
            wLast = wItem;
        }

        try {
            app.open(File("D:/DATA/file design/" + arr[i][j].idDesign + ".tif"));
        } catch (error) {
            app.open(File("D:/DATA/file design/aaaa.tif"));

        }
       
        app.doAction("crop" + arr[i][j].name + "flash", "auto xep file");
        app.doAction("merge layer", "auto xep file");
        app.doAction("duplicate to khay", "auto xep file");
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("move to zero", "auto xep file");
        app.activeDocument.activeLayer.name = (j + 1) + " " + arr[i][j].name;
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        if (j > 0) app.activeDocument.activeLayer.merge();

    }
    app.activeDocument.activeLayer.name = "in";
    app.doAction("lightitup", "auto xep file");


    // for loop items flash
    hItem = 0;
    wItem = 0;
    yPosition = 0;
    xPosition = 0;
    hLast = 0;
    wLast = 0;

    for (var j = 0; j <= arr[i].length - 1; j++) {
        // for (var j = 0; j <= 10; j++) {
        hItem = arr[i][j].pixel.h;
        wItem = arr[i][j].pixel.w;
        if (yPosition + hLast + hItem <= hAll) {
            if (wLast == wItem) {
                yPosition = yPosition + hLast;
                hLast = hItem;
                wLast = wItem;
            }
            else {
                yPosition = 0;
                xPosition = xPosition + wLast;
                hLast = hItem;
                wLast = wItem;
            }
        }
        else {
            yPosition = 0;
            xPosition = xPosition + wLast;
            hLast = hItem;
            wLast = wItem;
        }

        try {
            app.open(File("D:/DATA/file design/" + arr[i][j].idDesign + "flash" + ".tif"));
        } catch (error) {
            app.open(File("D:/DATA/file design/aaaa.tif"));

        }
        app.activeDocument.activeLayer.name = "1";
        app.doAction("cropflashcolor", "auto xep file");
        app.doAction("crop" + arr[i][j].name + "flash", "auto xep file");
        app.doAction("stroke1", "auto xep file");

        app.doAction("duplicate to khay flash", "auto xep file");
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("move to zero", "auto xep file");
        // app.activeDocument.activeLayer.name = (j + 1) + " " + arr[i][j].name;
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        if (j > 0) app.activeDocument.activeLayer.merge();

    }
    app.activeDocument.activeLayer.name = "flash";

    // save file
    app.doAction("xoay 180", "auto xep file");
    app.activeDocument.duplicate("in lan 2 " + (i + 1) + " ngay " + day, false);
    app.activeDocument.duplicate("in lan 1" + (i + 1) + " ngay " + day, false);

    app.doAction("cmyk ban in flaseCase", "auto xep file");
    app.activeDocument.activeLayer.remove();
    app.activeDocument.saveAs(folder1, TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close();

    app.doAction("cmyk ban in flaseCase 2", "auto xep file");
    app.activeDocument.saveAs(folder1, TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close();
    app.documents["khay.jpg"].close(SaveOptions.DONOTSAVECHANGES);
} // end 


