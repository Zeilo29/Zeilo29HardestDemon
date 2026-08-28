gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.localVariables = [];
gdjs.Sc_232ne_32sans_32titreCode.idToCallbackMap = new Map();
gdjs.Sc_232ne_32sans_32titreCode.GDDownloadButtonObjects1= [];


gdjs.Sc_232ne_32sans_32titreCode.userFunc0xf0ae88 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const button = runtimeScene.getObjects("DownloadButton")[0];

if (button) {
    const mouseX = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0);
    const mouseY = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0);

    const isInside =
        mouseX >= button.getX() &&
        mouseX <= button.getX() + button.getWidth() &&
        mouseY >= button.getY() &&
        mouseY <= button.getY() + button.getHeight();

    if (isInside && gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left")) {

        // Déclencher une seule fois par clic
        const link = document.createElement("a");
        link.href = "CardBlox-1_0_0-windows.exe";
        link.download = "CardBlox-1_0_0-windows.exe";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
};
gdjs.Sc_232ne_32sans_32titreCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DownloadButton"), gdjs.Sc_232ne_32sans_32titreCode.GDDownloadButtonObjects1);

const objects = gdjs.Sc_232ne_32sans_32titreCode.GDDownloadButtonObjects1;
gdjs.Sc_232ne_32sans_32titreCode.userFunc0xf0ae88(runtimeScene, objects);

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDDownloadButtonObjects1.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);
gdjs.Sc_232ne_32sans_32titreCode.GDDownloadButtonObjects1.length = 0;


return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
