gdjs.Extreme_32DemonCode = {};
gdjs.Extreme_32DemonCode.localVariables = [];
gdjs.Extreme_32DemonCode.idToCallbackMap = new Map();
gdjs.Extreme_32DemonCode.GDCellingObjects1= [];
gdjs.Extreme_32DemonCode.GDCellingObjects2= [];
gdjs.Extreme_32DemonCode.GDWelcomeTextObjects1= [];
gdjs.Extreme_32DemonCode.GDWelcomeTextObjects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonObjects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonObjects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptTextObjects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptTextObjects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonTextObjects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonTextObjects2= [];
gdjs.Extreme_32DemonCode.GDBlackObjects1= [];
gdjs.Extreme_32DemonCode.GDBlackObjects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText2Objects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText2Objects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonText2Objects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonText2Objects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemon2Objects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemon2Objects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText3Objects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText3Objects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonText3Objects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemonText3Objects2= [];
gdjs.Extreme_32DemonCode.GDExtremeDemon3Objects1= [];
gdjs.Extreme_32DemonCode.GDExtremeDemon3Objects2= [];
gdjs.Extreme_32DemonCode.GDCurrent_9595hardestObjects1= [];
gdjs.Extreme_32DemonCode.GDCurrent_9595hardestObjects2= [];
gdjs.Extreme_32DemonCode.GDDiscordObjects1= [];
gdjs.Extreme_32DemonCode.GDDiscordObjects2= [];
gdjs.Extreme_32DemonCode.GDJoinDiscordObjects1= [];
gdjs.Extreme_32DemonCode.GDJoinDiscordObjects2= [];


gdjs.Extreme_32DemonCode.mapOfGDgdjs_9546Extreme_959532DemonCode_9546GDDiscordObjects1Objects = Hashtable.newFrom({"Discord": gdjs.Extreme_32DemonCode.GDDiscordObjects1});
gdjs.Extreme_32DemonCode.mapOfGDgdjs_9546Extreme_959532DemonCode_9546GDDiscordObjects1Objects = Hashtable.newFrom({"Discord": gdjs.Extreme_32DemonCode.GDDiscordObjects1});
gdjs.Extreme_32DemonCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10599580);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.gg/hR2Q8rNRA", runtimeScene);
}
}

}


};gdjs.Extreme_32DemonCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Discord"), gdjs.Extreme_32DemonCode.GDDiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Extreme_32DemonCode.mapOfGDgdjs_9546Extreme_959532DemonCode_9546GDDiscordObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Extreme_32DemonCode.GDDiscordObjects1 */
{for(var i = 0, len = gdjs.Extreme_32DemonCode.GDDiscordObjects1.length ;i < len;++i) {
    gdjs.Extreme_32DemonCode.GDDiscordObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Discord"), gdjs.Extreme_32DemonCode.GDDiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Extreme_32DemonCode.mapOfGDgdjs_9546Extreme_959532DemonCode_9546GDDiscordObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Extreme_32DemonCode.GDDiscordObjects1 */
{for(var i = 0, len = gdjs.Extreme_32DemonCode.GDDiscordObjects1.length ;i < len;++i) {
    gdjs.Extreme_32DemonCode.GDDiscordObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.Extreme_32DemonCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Extreme_32DemonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Extreme_32DemonCode.GDCellingObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDCellingObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDWelcomeTextObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDWelcomeTextObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptTextObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptTextObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonTextObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonTextObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDBlackObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDBlackObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText2Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText2Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText2Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText2Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon2Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon2Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText3Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText3Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText3Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText3Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon3Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon3Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDCurrent_9595hardestObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDCurrent_9595hardestObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDDiscordObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDDiscordObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDJoinDiscordObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDJoinDiscordObjects2.length = 0;

gdjs.Extreme_32DemonCode.eventsList1(runtimeScene);
gdjs.Extreme_32DemonCode.GDCellingObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDCellingObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDWelcomeTextObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDWelcomeTextObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptTextObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptTextObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonTextObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonTextObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDBlackObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDBlackObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText2Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText2Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText2Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText2Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon2Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon2Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText3Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonAttemptText3Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText3Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemonText3Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon3Objects1.length = 0;
gdjs.Extreme_32DemonCode.GDExtremeDemon3Objects2.length = 0;
gdjs.Extreme_32DemonCode.GDCurrent_9595hardestObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDCurrent_9595hardestObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDDiscordObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDDiscordObjects2.length = 0;
gdjs.Extreme_32DemonCode.GDJoinDiscordObjects1.length = 0;
gdjs.Extreme_32DemonCode.GDJoinDiscordObjects2.length = 0;


return;

}

gdjs['Extreme_32DemonCode'] = gdjs.Extreme_32DemonCode;
