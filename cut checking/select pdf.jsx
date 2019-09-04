
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel

// tao folder jpg
var folder1 = Folder("~/Desktop/pdf checking");
if (!folder1.exists) { folder1.create(); }
var folder11 = Folder("~/Desktop/pdf checking/jpg crop");
if (!folder11.exists) { folder11.create(); }
var folder12 = Folder("~/Desktop/pdf checking/jpg done");
if (!folder12.exists) { folder12.create(); }
var folder13 = Folder("~/Desktop/pdf checking/jpg checking do");
if (!folder13.exists) { folder13.create(); }

// crop checking
var nameDocument = "";
var widthItemChecking = 0;
var heightItemChecking = 0;
var pdfOpenOpts = new PDFOpenOptions;
pdfOpenOpts.page = 10000;
var fileDialog = app.openDialog();
var file = new File(fileDialog);
app.open(file, pdfOpenOpts);
var numberAllPage = app.documents.length;
// var numberAllPage = 159;

for (var i = 1; i <= numberAllPage; i++) {
    nameDocument = app.activeDocument.name;
    widthItemChecking = app.activeDocument.width;
    heightItemChecking = app.activeDocument.height;
    nameDocument = nameDocument.split("-");
    nameDocument = nameDocument.pop();
    app.activeDocument.saveAs(File("~/Desktop/pdf checking/jpg checking do/" + nameDocument + ".jpg"), JPEGSaveOptions, true);
    app.doAction("crop", "orc");
    app.activeDocument.saveAs(File("~/Desktop/pdf checking/jpg crop/" + nameDocument + ".jpg"), JPEGSaveOptions, true);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
}



// dua checking vao cung 1 image
var checkingPerIMG = 150;
var numberPosition = 0;
pixelItemPosition=73;
var numberPageORC = Math.ceil(numberAllPage / checkingPerIMG);
for (var k = 1; k <= numberPageORC; k++) {
    numberPosition = 0;
    app.documents.add(1507, pixelItemPosition, 300, "all");
    if ( numberAllPage % checkingPerIMG==0 || k< numberPageORC) {
        for (var i = (k - 1) * checkingPerIMG + 1; i <= k * checkingPerIMG; i++) {
            app.open(File("~/Desktop/pdf checking/jpg crop/" + i + ".jpg"));
            app.doAction("duplicatetoall", "orc");
            app.activeDocument.resizeCanvas(1507, (numberPosition * pixelItemPosition) + pixelItemPosition, AnchorPosition.TOPCENTER);
            app.activeDocument.activeLayer.translate(0, numberPosition * pixelItemPosition);
            app.activeDocument.activeLayer.merge();
            numberPosition++;
        }
    }
    else {
        for (var i = (k - 1) * checkingPerIMG + 1; i <= (k - 1)*checkingPerIMG +( numberAllPage % checkingPerIMG); i++) {
            app.open(File("~/Desktop/pdf checking/jpg crop/" + i + ".jpg"));
            app.doAction("duplicatetoall", "orc");
            app.activeDocument.resizeCanvas(1507, ((numberPosition * pixelItemPosition) + pixelItemPosition), AnchorPosition.TOPCENTER);
            app.activeDocument.activeLayer.translate(0, numberPosition * pixelItemPosition);
            app.activeDocument.activeLayer.merge();
            numberPosition++;
        }
    }
    app.activeDocument.saveAs(File("~/Desktop/pdf checking/jpg done/" + k + ".jpg"), JPEGSaveOptions, true);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}



