// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"KhasCore","status":true,"description":"[2.0] Required by Khas plugins.","parameters":{}},
{"name":"KhasGraphics","status":true,"description":"[1.1] Required by Khas graphics plugins.","parameters":{}},
{"name":"KhasUltraLighting","status":true,"description":"[4.2] Adds lighting and real-time shadows to your game.","parameters":{"Custom Blending":"ON","Transfer Reset":"OFF","Auto Battle Lighting":"ON"}},
{"name":"SRD_FullscreenToggleOption","status":true,"description":"Adds a Fullscreen Toggle to the Options Window","parameters":{"Option Name":"Fullscreen","Position":"Middle","Default Value":"true","Persist Default?":"true"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1920","Screen Height":"1080","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.01 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 1, variable 2, variable 3","Data Column 3":"empty, variable 4, variable 5, variable 6","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"SRD_AltMenuScreen_Icons","status":true,"description":"Alternative Menu Screen Icon. Uses Icons instead of words. #IconsAreMasterRace","parameters":{"Item Icon":"176","Skill Icon":"64","Equip Icon":"96","Status Icon":"87","Formation Icon":"82","Options Icon":"83","Save Icon":"225","Game End Icon":"245","== Icon Window ==":"","Icon Window X":"0","Icon Window Y":"0","Standard Padding":"12","Icon Padding":"12","Icon X Position":"0","Icon Y Position":"6","== Label Window ==":"","Label Window X":"this._commandWindow.x","Label Window Y":"this._commandWindow.y + this._commandWindow.height","== Actor Window ==":"","Text Align":"center","Actor Window X":"this._commandLabel.x + this._commandLabel.width","Actor Window Y":"this._commandLabel.y","== Gold Window ==":"","Gold Window X":"0","Gold Window Y":"Graphics.boxHeight - this._goldWindow.height","== Custom Commands ==":"","Command Symbol 1":"","Command Icon 1":"","Command Symbol 2":"","Command Icon 2":"","Command Symbol 3":"","Command Icon 3":"","Command Symbol 4":"","Command Icon 4":"","Command Symbol 5":"","Command Icon 5":"","Command Symbol 6":"","Command Icon 6":"","Command Symbol 7":"","Command Icon 7":"","Command Symbol 8":"","Command Icon 8":"","Command Symbol 9":"","Command Icon 9":"","Command Symbol 10":"","Command Icon 10":"","Command Symbol 11":"","Command Icon 11":"","Command Symbol 12":"","Command Icon 12":"","Command Symbol 13":"","Command Icon 13":"","Command Symbol 14":"","Command Icon 14":"","Command Symbol 15":"","Command Icon 15":"","Command Symbol 16":"","Command Icon 16":"","Command Symbol 17":"","Command Icon 17":"","Command Symbol 18":"","Command Icon 18":"","Command Symbol 19":"","Command Icon 19":"","Command Symbol 20":"","Command Icon 20":""}},
{"name":"GALV_ActionIndicators","status":true,"description":"Display an icon when the player is able to interact with an event. View help for comment tag.","parameters":{"Y Offset":"0","Z Position":"5","Auto Hide":"true","Icon Opacity":"200"}},
{"name":"GALV_MessageStyles","status":true,"description":"(v.2.8) Settings to change how your \"Show Text\" messages look as well as code to make them floating.","parameters":{"Input Indicator":"2,0,-12","Indicator Zoom":"100","Message Padding":"0,0,0,0","Message Windowskin":"Window","Other Windowskins":"Window1,Window2,Window3","Arrow Graphic":"WindowArrow","Other Arrow Graphics":"WindowArrow1,WindowArrow2,WindowArrow3","Windowskin Back Opacity":"192","Y Offset":"60","Font":"","Font Filename":"","Font Outline":"true","Font Size":"28"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v2.0) Adiciona novos efeitos de climas.","parameters":{}}
];
