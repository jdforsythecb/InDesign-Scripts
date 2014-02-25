#target indesign

// load the print by preset library
#include "/g/jdforsythe/Settings/InDesign Scripts/PrintByPreset.jsx"

/*
    you could create an instance of the PrintByPreset object, set it's property, and run it's method, like so...
    
    var pbp = new PrintByPreset();
    pbp.preset = 1;
    pbp.print();
    
    
    or you can do it the lazy, memory-efficient way with chaining like so...
*/

new PrintByPreset(1).print();
// imageprinter color is now auto printing
/*
// wait 3 seconds
$.sleep(3000);

// send a bridgetalk message to photoshop

// pops up a dialog asking the user to click ok once the printed document has loaded in photoshop
// when they click ok, it will run the copysetting script for dollar



var title = "Click ok to continue";
        var message = "When the document appears, click OK to continue";
        var bt = new BridgeTalk();
            bt.target = "photoshop";
            func = "var w = new Window('palette', '" + title + "', [0, 0, 400, 100]); \
                            w.add('statictext', [5,5,390,50], '" + message + "'); \
                            okButton = w.add('button', [5,40,205,90], 'OK', {name: 'ok'}); \
                            okButton.active = true; \
                            w.center(); \
                            okButton.onClick = function() { \
                                w.close(); \
                                #include \"/g/jdforsythe/Settings/Photoshop Scripts/CopySetting/CopySetting_Dollar_Premier.jsx\"; \
                            }; \
                            w.center(); \
                            w.show(); \
                            $.sleep(100); \
                            w.active = true; \
                            okButton.active = true;";
            bt.body = func;
            bt.send();
*/            