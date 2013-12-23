#target indesign

var PrintByPreset = function(preset) {
    // default to [Default] print preset
    this.preset = preset || 0;
    // store a reference to the active document for all methods to use
    this.doc = app.activeDocument;
}

PrintByPreset.prototype.print = function() {

    // if the document has been changed since the last save, we need a save as dialog
    if (this.doc.saved == false) {
        
        // the beauty of Javascript, why use a variable?
        this.doc.save( File.saveDialog("Specify File Location", "InDesign Files:*.indd") );
    }

    // print the file with the preset chosen
    //app.print(File(this.doc.fullName), false, app.printerPresets[this.preset]);
    this.doc.print (false, app.printerPresets[this.preset]);


};