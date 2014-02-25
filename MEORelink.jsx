#target indesign

var psid = prompt("Enter the PSID#", "4000", "Enter the ID");

var changeWebURL = function() {
    
    // get the new address
    var url = prompt ("Enter the web site URL", "www.church.org", "Enter the URL");
    
    var txtFrame = app.activeDocument.textFrames.itemByName("URL");
    
    txtFrame.contents = url;
    
};
 
if(app.documents.length > 0){
    
    var myDoc = app.activeDocument;
    var docLinks = myDoc.links;

    var oldFileName = "DemoChurch MEO QR.eps";
    var newFileName = psid + "_MEO_QR_CODE.eps";
    
    var newFile = File(app.activeDocument.filePath + "/" + newFileName)
    
    if(!newFile.exists) {
        alert("New QR Code doesn't exist");
    }
    
    else {
        // find the old named links
        for (i=0;i<docLinks.length-1;i++) {
            if(docLinks[i].name == oldFileName) {
                docLinks[i].relink(newFile);
                docLinks[i].update();
            }
        }
    }

    changeWebURL();
}

else {
    alert("There is no opened document.");
}
