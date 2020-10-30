var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0adc55aa-28c1-4108-bae1-8e840a8f53a9","a43de5c8-c0c1-48cf-a290-887cc087cbfa","84454942-f46b-4e70-8419-5e82635c349b","63c1f1f7-4968-4874-842d-75344f3b039c","41345bca-7692-4bc9-8bad-4d3b421b46be","9a95cc3a-69de-4bc1-a7ac-6cf4c99090f0","b35b2e06-1a78-4b3b-99ff-103a3a2a13a3","73508bfa-4b0b-44ba-a0ec-d8cbff80c87a","287b0f97-b364-45db-9133-a6d223698cf1"],"propsByKey":{"0adc55aa-28c1-4108-bae1-8e840a8f53a9":{"name":"edgeline","sourceUrl":null,"frameSize":{"x":3063,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":".TAi7UpVVpPfZU9fCDU6YujtDRwvZMzw","loadedFromSource":true,"saved":true,"sourceSize":{"x":3063,"y":35},"rootRelativePath":"assets/0adc55aa-28c1-4108-bae1-8e840a8f53a9.png"},"a43de5c8-c0c1-48cf-a290-887cc087cbfa":{"name":"blank","sourceUrl":null,"frameSize":{"x":1,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"QpH09BfdzFXiJsRB8zqML5nNciWgpY_c","loadedFromSource":true,"saved":true,"sourceSize":{"x":1,"y":1},"rootRelativePath":"assets/a43de5c8-c0c1-48cf-a290-887cc087cbfa.png"},"84454942-f46b-4e70-8419-5e82635c349b":{"name":"lineb","sourceUrl":null,"frameSize":{"x":10,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":".14hjfIoeWmfJ3VppT39TScQZ8VJlBz1","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":400},"rootRelativePath":"assets/84454942-f46b-4e70-8419-5e82635c349b.png"},"63c1f1f7-4968-4874-842d-75344f3b039c":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z5YqSJ8mz8sxrl9tZtc_BQDs4U_csMD1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/63c1f1f7-4968-4874-842d-75344f3b039c.png"},"41345bca-7692-4bc9-8bad-4d3b421b46be":{"name":"bluefire","sourceUrl":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/41345bca-7692-4bc9-8bad-4d3b421b46be.png","frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"4zgjpBQ8YctwmDUOutWjcVtBJaNOz2ed","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/41345bca-7692-4bc9-8bad-4d3b421b46be.png"},"9a95cc3a-69de-4bc1-a7ac-6cf4c99090f0":{"name":"the_guy","sourceUrl":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/9a95cc3a-69de-4bc1-a7ac-6cf4c99090f0.png","frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"JYAG1iBgDV2dhNFqHQ1899uHQ96jMBnB","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/9a95cc3a-69de-4bc1-a7ac-6cf4c99090f0.png"},"b35b2e06-1a78-4b3b-99ff-103a3a2a13a3":{"name":"plank","sourceUrl":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/b35b2e06-1a78-4b3b-99ff-103a3a2a13a3.png","frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"9PccfC8u49G6RPsQqr.2WaklfOHKgEcl","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/b35b2e06-1a78-4b3b-99ff-103a3a2a13a3.png"},"73508bfa-4b0b-44ba-a0ec-d8cbff80c87a":{"name":"gameover_(tryragain?)","sourceUrl":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/73508bfa-4b0b-44ba-a0ec-d8cbff80c87a.png","frameSize":{"x":455,"y":106},"frameCount":1,"looping":true,"frameDelay":4,"version":"eMbOVsUXzXbvfXvi6sZieFqEDVyfsKki","loadedFromSource":true,"saved":true,"sourceSize":{"x":455,"y":106},"rootRelativePath":"assets/v3/animations/Qedsb7hpm7PsoLi8mszwmN1YnrKjkyFWQqhcDfFOvoo/73508bfa-4b0b-44ba-a0ec-d8cbff80c87a.png"},"287b0f97-b364-45db-9133-a6d223698cf1":{"name":"fireplant","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"KRrgZheiQBOOX5rEZTOJWntBkYWj3eGC","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/287b0f97-b364-45db-9133-a6d223698cf1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var edgeline = createSprite(80, 200);
var activate = createSprite(0, 0);
var player = createSprite(50, 200);
var bords = createGroup();
var bluefire = createSprite(450, 200);
var borders = createSprite(200, 0);
var anotherb = createSprite(200, 400);
var Fireplant1 = createSprite(450, 40);
var Fireplant2 = createSprite(500, 80);
var Fireplant3 = createSprite(450, 120);
var Fireplant4 = createSprite(500, 160);
var Fireplant5 = createSprite(600, 200);
var Fireplant6 = createSprite(500, 240);
var Fireplant7 = createSprite(450, 280);
var Fireplant8 = createSprite(500, 320);
var Fireplant9 = createSprite(450, 360);
var fireplants = createGroup();
var gameoversign = createSprite(200, 200);
activate.setAnimation("blank");
player.setAnimation("the_guy");
fireplants.add(Fireplant1);
fireplants.add(Fireplant2);
fireplants.add(Fireplant3);
fireplants.add(Fireplant4);
fireplants.add(Fireplant5);
fireplants.add(Fireplant6);
fireplants.add(Fireplant7);
fireplants.add(Fireplant8);
fireplants.add(Fireplant9);
fireplants.setAnimationEach("fireplant");
bluefire.setAnimation("bluefire");
borders.setAnimation("lineb");
anotherb.setAnimation("lineb");
bords.add(borders);
edgeline.setAnimation("lineb");
bords.add(anotherb);
gameoversign.setAnimation("blank");
function draw() {
  background("black");
  drawSprites();
  if (activate.x == 0) {
    bluefire.x = bluefire.x + 5;
    Fireplant1.x = Fireplant1.x + -0.5;
    Fireplant2.x = Fireplant2.x + -1;
    Fireplant3.x = Fireplant3.x + -0.5;
    Fireplant4.x = Fireplant4.x + -1;
    Fireplant5.x = Fireplant5.x + -2;
    Fireplant6.x = Fireplant6.x + -1;
    Fireplant7.x = Fireplant7.x + -0.5;
    Fireplant8.x = Fireplant8.x + -1;
    Fireplant9.x = Fireplant9.x + -0.5;
    gameoversign.setAnimation("blank");
    if (keyWentDown("space")) {
      bluefire.x = 55;
      bluefire.y = 200;
    }
    if (keyDown("up")) {
      bluefire.y = bluefire.y + -9;
    }
    if (keyDown("down")) {
      bluefire.y = bluefire.y + 9;
    }
    if (bluefire.overlap(Fireplant1)) {
      Fireplant1.x = Fireplant1.x + 350;
    }
    if (bluefire.overlap(Fireplant2)) {
      Fireplant2.x = Fireplant2.x + 350;
    }
    if (bluefire.overlap(Fireplant3)) {
      Fireplant3.x = Fireplant3.x + 350;
    }
    if (bluefire.overlap(Fireplant4)) {
      Fireplant4.x = Fireplant4.x + 350;
    }
    if (bluefire.overlap(Fireplant5)) {
      Fireplant5.x = Fireplant5.x + 700;
    }
    if (bluefire.overlap(Fireplant6)) {
      Fireplant6.x = Fireplant6.x + 350;
    }
    if (bluefire.overlap(Fireplant7)) {
      Fireplant7.x = Fireplant7.x + 350;
    }
    if (bluefire.overlap(Fireplant8)) {
      Fireplant8.x = Fireplant8.x + 350;
    }
    if (bluefire.overlap(Fireplant9)) {
      Fireplant9.x = Fireplant9.x + 350;
    }
  }
  if (fireplants.isTouching(edgeline)) {
    activate.x = 1;
    gameoversign.setAnimation("gameover_(tryragain?)");
    if (mousePressedOver(gameoversign)) {
      bluefire.x = bluefire.x + 450;
      Fireplant1.x = Fireplant1.x + 420;
      Fireplant2.x = Fireplant2.x + 420;
      Fireplant3.x = Fireplant3.x + 420;
      Fireplant4.x = Fireplant4.x + 420;
      Fireplant5.x = Fireplant5.x + 560;
      Fireplant6.x = Fireplant6.x + 420;
      Fireplant7.x = Fireplant7.x + 420;
      Fireplant8.x = Fireplant8.x + 420;
      Fireplant9.x = Fireplant9.x + 420;
      activate.x = 0;
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
