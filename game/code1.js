gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDbackgroundObjects1= [];
gdjs.gameCode.GDbackgroundObjects2= [];
gdjs.gameCode.GDplayerObjects1= [];
gdjs.gameCode.GDplayerObjects2= [];
gdjs.gameCode.GDballObjects1= [];
gdjs.gameCode.GDballObjects2= [];
gdjs.gameCode.GDstart_9595textObjects1= [];
gdjs.gameCode.GDstart_9595textObjects2= [];
gdjs.gameCode.GDbarrierObjects1= [];
gdjs.gameCode.GDbarrierObjects2= [];
gdjs.gameCode.GDbrickObjects1= [];
gdjs.gameCode.GDbrickObjects2= [];
gdjs.gameCode.GDscoretextObjects1= [];
gdjs.gameCode.GDscoretextObjects2= [];
gdjs.gameCode.GDbackroundscoreObjects1= [];
gdjs.gameCode.GDbackroundscoreObjects2= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.gameCode.GDballObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.gameCode.GDbarrierObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.gameCode.GDbarrierObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.gameCode.GDballObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.gameCode.GDballObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbrickObjects1Objects = Hashtable.newFrom({"brick": gdjs.gameCode.GDbrickObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbrickObjects1Objects = Hashtable.newFrom({"brick": gdjs.gameCode.GDbrickObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addPolarForce(0, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addPolarForce(0, -(300), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start_text"), gdjs.gameCode.GDstart_9595textObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDstart_9595textObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDstart_9595textObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDstart_9595textObjects1[k] = gdjs.gameCode.GDstart_9595textObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDstart_9595textObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.gameCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDballObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDballObjects1[i].setPosition((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointX("Center")),(( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointY("Center")) - 25);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.gameCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("start_text"), gdjs.gameCode.GDstart_9595textObjects1);
{for(var i = 0, len = gdjs.gameCode.GDstart_9595textObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDstart_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDballObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDballObjects1[i].addPolarForce(gdjs.randomInRange(-(145), -(45)), 250, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.gameCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.gameCode.GDbarrierObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDballObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbarrierObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDballObjects1 */
/* Reuse gdjs.gameCode.GDbarrierObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDballObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbarrierObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.gameCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDballObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDballObjects1 */
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDballObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.gameCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("brick"), gdjs.gameCode.GDbrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDballObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDballObjects1 */
/* Reuse gdjs.gameCode.GDbrickObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDballObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDbrickObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbrickObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("start_text"), gdjs.gameCode.GDstart_9595textObjects1);
{for(var i = 0, len = gdjs.gameCode.GDstart_9595textObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDstart_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDbackgroundObjects1.length = 0;
gdjs.gameCode.GDbackgroundObjects2.length = 0;
gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDballObjects1.length = 0;
gdjs.gameCode.GDballObjects2.length = 0;
gdjs.gameCode.GDstart_9595textObjects1.length = 0;
gdjs.gameCode.GDstart_9595textObjects2.length = 0;
gdjs.gameCode.GDbarrierObjects1.length = 0;
gdjs.gameCode.GDbarrierObjects2.length = 0;
gdjs.gameCode.GDbrickObjects1.length = 0;
gdjs.gameCode.GDbrickObjects2.length = 0;
gdjs.gameCode.GDscoretextObjects1.length = 0;
gdjs.gameCode.GDscoretextObjects2.length = 0;
gdjs.gameCode.GDbackroundscoreObjects1.length = 0;
gdjs.gameCode.GDbackroundscoreObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
gdjs.gameCode.GDbackgroundObjects1.length = 0;
gdjs.gameCode.GDbackgroundObjects2.length = 0;
gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDballObjects1.length = 0;
gdjs.gameCode.GDballObjects2.length = 0;
gdjs.gameCode.GDstart_9595textObjects1.length = 0;
gdjs.gameCode.GDstart_9595textObjects2.length = 0;
gdjs.gameCode.GDbarrierObjects1.length = 0;
gdjs.gameCode.GDbarrierObjects2.length = 0;
gdjs.gameCode.GDbrickObjects1.length = 0;
gdjs.gameCode.GDbrickObjects2.length = 0;
gdjs.gameCode.GDscoretextObjects1.length = 0;
gdjs.gameCode.GDscoretextObjects2.length = 0;
gdjs.gameCode.GDbackroundscoreObjects1.length = 0;
gdjs.gameCode.GDbackroundscoreObjects2.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
