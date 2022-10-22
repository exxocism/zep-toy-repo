/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import 'zep-script';

ScriptApp.showCenterLabel('Zep Test Hello World');
ScriptApp.sayToAll('This Sucks');

let zepLogo = ScriptApp.loadSpritesheet('zep_logo.png');

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});
