"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();


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

app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
// for loop
for (var i = 0; i <= arr.length - 1; i++) {
    app.open(File("~/Desktop/auto PSD V2/psd phone case/" + "khay.jpg"));
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
        app.doAction("crop" + arr[i][j].name, "auto xep file");
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
    app.activeDocument.duplicate("khung "  + (i + 1) + " ngay " + day, false);
    app.doAction("xoay 180", "auto xep file");
    app.doAction("cmyk khung", "auto xep file");
    var folder1 = Folder("~/Desktop/in an/khay" + (i + 1) + " ngay " + day);
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
        app.doAction("crop" + arr[i][j].name, "auto xep file");
        app.doAction("duplicate to khay", "auto xep file");
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("move to zero", "auto xep file");
        app.activeDocument.activeLayer.name = (j + 1) + " " + arr[i][j].name;
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        if (j > 0) app.activeDocument.activeLayer.merge();

    }
    app.activeDocument.activeLayer.name = "in";

    // save file
    app.activeDocument.duplicate("in " + (i + 1) + " ngay " + day, false);
    app.doAction("xoay 180", "auto xep file");
    app.doAction("cmyk ban in", "auto xep file");
    app.activeDocument.saveAs(folder1, TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.duplicate("white " + (i + 1) + " ngay " + day, false);
    app.doAction("create white", "auto xep file");
    app.activeDocument.saveAs(folder1, TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close();
    app.activeDocument.close();
    app.documents["khay.jpg"].close(SaveOptions.DONOTSAVECHANGES);
} // end 














// for (var i = 1; i <= numberPrint; i++) {
//     app.open(File("~/Desktop/auto PSD/psd phone case/" + "khay.tif"));
//     for (var j = 1; j <= phoneName.length; j++) {
//         if (phoneName[j - 1].length >= i) {
//             if (phoneName[j - 1][i - 1].length >= 1) {
//                 for (var ii = 1; ii <= phoneName[j - 1][i - 1].length; ii++) {
//                     try {
//                         app.open(File("D:/DATA/file design/" + phoneName[j - 1][i - 1][ii - 1] + ".tif"));
//                         app.doAction("crop" + cropName[j - 1], "auto xep file"); // đổi cỡ file
//                         app.doAction("duplicate to khay", "auto xep file"); // cho sang khay
//                         app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//                         app.activeDocument.activeLayer.name = cropName[j - 1] + ii;
//                         app.doAction("position 0 0", "auto xep file");
//                         var positionItem = app.activeDocument.layers[cropName[j - 1] + " copy " + ii].bounds;
//                         app.activeDocument.activeLayer.translate(positionItem[0], positionItem[1])
//                     } catch (error) {
//                         app.open(File("D:/DATA/file design/" + "aaaa.tif"));
//                         app.doAction("crop" + cropName[j - 1], "auto xep file"); // đổi cỡ file
//                         app.doAction("duplicate to khay", "auto xep file"); // cho sang khay
//                         app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//                         app.activeDocument.activeLayer.name = cropName[j - 1] + ii;
//                         app.doAction("position 0 0", "auto xep file");
//                         var positionItem = app.activeDocument.layers[cropName[j - 1] + " copy " + ii].bounds;
//                         app.activeDocument.activeLayer.translate(positionItem[0], positionItem[1])
//                     }
//                 }
//             }
//         }

//     }
//     app.activeDocument.duplicate("ban " + i + "ngay " + day, false);
//     app.activeDocument.saveAs(File("~/Desktop/in an"), TiffSaveOptions, false, Extension.LOWERCASE);
//     app.activeDocument.close();
//     app.documents["khay.tif"].close(SaveOptions.DONOTSAVECHANGES);
// }

