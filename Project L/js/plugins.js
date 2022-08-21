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
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"20","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Прочитать","Save Command":"Записать","Delete Command":"Стереть","---Help Window---":"","Select Help":"Выберите страницу.","Load Help":"Прочитать текущую страницу истории.","Save Help":"Записать текущую страницу истории.","Delete Help":"Удалить текущую страницу истории.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"location, gold count, save count, playtime","Data Column 2":"","Data Column 3":"","Data Column 4":"","---Vocabulary---":"","Map Location":"Локация:","Playtime":"Время игры:","Save Count":"Кол-во сохранений:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Вы хотите прочитать эту страницу?","Save Confirmation":"true","Save Text":"Вы хотите перезаписать текущую страницу истории?","Delete Confirmation":"true","Delete Text":"Вы хотите удалить текущую страницу истории?","Confirm Yes":"Да","Confirm No":"Нет"}},
{"name":"SRD_AltMenuScreen_Icons","status":true,"description":"Alternative Menu Screen Icon. Uses Icons instead of words. #IconsAreMasterRace","parameters":{"Item Icon":"176","Skill Icon":"64","Equip Icon":"96","Status Icon":"87","Formation Icon":"82","Options Icon":"83","Save Icon":"225","Game End Icon":"245","== Icon Window ==":"","Icon Window X":"0","Icon Window Y":"0","Standard Padding":"12","Icon Padding":"12","Icon X Position":"0","Icon Y Position":"6","== Label Window ==":"","Label Window X":"this._commandWindow.x","Label Window Y":"this._commandWindow.y + this._commandWindow.height","== Actor Window ==":"","Text Align":"center","Actor Window X":"this._commandLabel.x + this._commandLabel.width","Actor Window Y":"this._commandLabel.y","== Gold Window ==":"","Gold Window X":"0","Gold Window Y":"Graphics.boxHeight - this._goldWindow.height","== Custom Commands ==":"","Command Symbol 1":"","Command Icon 1":"","Command Symbol 2":"","Command Icon 2":"","Command Symbol 3":"","Command Icon 3":"","Command Symbol 4":"","Command Icon 4":"","Command Symbol 5":"","Command Icon 5":"","Command Symbol 6":"","Command Icon 6":"","Command Symbol 7":"","Command Icon 7":"","Command Symbol 8":"","Command Icon 8":"","Command Symbol 9":"","Command Icon 9":"","Command Symbol 10":"","Command Icon 10":"","Command Symbol 11":"","Command Icon 11":"","Command Symbol 12":"","Command Icon 12":"","Command Symbol 13":"","Command Icon 13":"","Command Symbol 14":"","Command Icon 14":"","Command Symbol 15":"","Command Icon 15":"","Command Symbol 16":"","Command Icon 16":"","Command Symbol 17":"","Command Icon 17":"","Command Symbol 18":"","Command Icon 18":"","Command Symbol 19":"","Command Icon 19":"","Command Symbol 20":"","Command Icon 20":""}},
{"name":"GALV_ActionIndicators","status":true,"description":"Display an icon when the player is able to interact with an event. View help for comment tag.","parameters":{"Y Offset":"0","Z Position":"5","Auto Hide":"true","Icon Opacity":"200"}},
{"name":"GALV_MessageStyles","status":true,"description":"(v.2.8) Settings to change how your \"Show Text\" messages look as well as code to make them floating.","parameters":{"Input Indicator":"2,0,-12","Indicator Zoom":"100","Message Padding":"0,0,0,0","Message Windowskin":"Window","Other Windowskins":"Window1,Window2,Window3","Arrow Graphic":"WindowArrow","Other Arrow Graphics":"WindowArrow1,WindowArrow2,WindowArrow3","Windowskin Back Opacity":"192","Y Offset":"60","Font":"","Font Filename":"","Font Outline":"true","Font Size":"28"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v2.0) Adiciona novos efeitos de climas.","parameters":{}},
{"name":"GALV_TimedMessagePopups","status":true,"description":"(v.2.0) Display popup message boxes on screen that do not stop gameplay and auto close after a set time.","parameters":{"Y Offset":"-60","Default Windowskin":"Window","Use Arrows":"true","Windowskin Back Opacity":"255","Text Outline Width":"0"}},
{"name":"-BATTLE","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_ActionName","status":true,"description":"(v1.2) Apresenta uma janela com nome da ação.","parameters":{"Layout X-Axis":"420","Layout Y-Axis":"64","Name X-Axis":"0","Name Y-Axis":"24","Icon X-Axis":"0","Icon Y-Axis":"-4","Font Size":"22"}},
{"name":"MOG_BattleHud","status":true,"description":"(v3.7) Permite customizar o layout de batalha.","parameters":{"Hud X-Axis":"-100","Hud Y-Axis":"500","Hud Space X":"0","Hud Space Y":"0","Hud Slide X":"0","Hud Slide Y":"250","Vertical Mode":"false","Command Auto Adjust":"true","Max Battle Members":"4",">> LAYOUT OVERLAY =========":"","Layout2 Visible":"true","Layout2 X-Axis":"0","Layout2 Y-Axis":"0",">> TURN ===================":"","Turn Visible":"true","Turn X-Axis":"-10","Turn Y-Axis":"0","Turn Rotation Speed":"0.01","Turn Zoom Animation":"true",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"52","Face Y-Axis":"62","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"false","Face Priority":"0",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"-45","Name Y-Axis":"75","Name Align":"1","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"87","HP Meter Y-Axis":"17","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"170","HP Number Y-Axis":"-1","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"104","MP Meter Y-Axis":"43","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"187","MP Number Y-Axis":"26","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"104","TP Meter Y-Axis":"69","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align type":"0","TP Number X-Axis":"187","TP Number Y-Axis":"53","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116",">> ATB ===================":"","ATB Meter Visible":"true","ATB Meter X-Axis":"145","ATB Meter Y-Axis":"100","ATB Meter Angle":"0","ATB Meter Flow Anime":"true",">> STATES ===================":"","States Visible":"true","States X-Axis":"102","States Y-Axis":"86","States Mode":"0","States Max":"4","States Align":"0",">> W COMMAND ===================":"","W Command X-Axis":"0","W Command Y-Axis":"-15","W Command Width":"192","W Command Height":"180","W Command Slide X":"0","W Command Slide Y":"64","Layout Command":"true","L Command X-Axis":"-25","L Command Y-Axis":"-35",">> W PARTY ===================":"","W Party X-Axis":"325","W Party Y-Axis":"170","W Party Width":"192","W Party Height":"110","W Party Slide X":"0","W Party Slide Y":"-100","Layout Party":"true","L Party X-Axis":"-325","L Party Y-Axis":"-42",">> W HELP ===================":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","W Help Slide X":"0","W Help Slide Y":"-50","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0",">> W SKILL ===================":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","W Skill Slide X":"0\r","W Skill Slide Y":"50","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67",">> W ITEM ===================":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","W Item Slide X":"0","W Item Slide Y":"50","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67",">> W ACTOR ===================":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","W Actor Slide X":"0","W Actor Slide Y":"50","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67",">> W ENEMY ===================":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","W Enemy Slide X":"0","W Enemy Slide Y":"50","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67",">> SCREEN LAYOUT ===================":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0",">> CUSTOM POSITION ===================":"","Custom Position 1":"","Custom Position 2":"","Custom Position 3":"","Custom Position 4":"","Custom Position 5":"","Custom Position 6":"","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BossHP","status":true,"description":"(v2.2) Apresenta um medidor de HP para os chefes.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"true","Slant Animation":"true","Flow Speed":"4","Name Font Size":"18","Layout X-Axis":"150","Layout Y-Axis":"10","BHP Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32","Number Percentage":"false","Show States":"true","States Max":"8","States X-axis":"50","States Y-axis":"-8"}},
{"name":"MOG_ComboCounter","status":true,"description":"(v1.6) Apresenta a quantidade de acertos no alvo.","parameters":{"C HIT Layout X-Axis":"118","C HIT Layout Y-Axis":"134","C DMG Layout X-Axis":"10","C DMG Layout Y-Axis":"100","C HIT Number X-Axis":"115","C HIT Number Y-Axis":"145","C DMG Number X-Axis":"150","C DMG Number Y-Axis":"103"}},
{"name":"MOG_DmgPopupEffects","status":false,"description":"(v1.0) Adiciona alguns efeitos nos sprites do dano.","parameters":{"Duration":"90","PopUp Type":"0","Zoom Effect":"true","Center Y-Axis":"true"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-VISUAL","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_CharacterMotion","status":true,"description":"(v1.3) Sistema de animações dos sprites dos personagens.","parameters":{}},
{"name":"MOG_DizzyEffect","status":true,"description":"(v1.0) Adiciona o efeito Dizzy.","parameters":{}},
{"name":"MOG_EventIndicators","status":true,"description":"(v1.0) Apresenta indicadores animados acima do evento.","parameters":{"Default Font Size":"16","Default X - Axis":"0","Default Y - Axis":"0"}},
{"name":"MOG_TreasurePopup","status":true,"description":"(v1.1) Apresenta o ícone e o nome do tesouro ganho.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0.60","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"163"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-GAMEPLAY","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_PickupThrow","status":true,"description":"(v1.4) Sistema de arremessar os eventos.","parameters":{"Character Height":"22","Character Pose":"true","Hold Direction":"true","Hold Direction Button":"pagedown","Sound File":"Jump1"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-HUD","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_ActorHud","status":true,"description":"(v1.9) Adiciona uma Hud com os parâmetros do personagem.","parameters":{"Initial Visible":"true","Hud X-Axis":"0","Hud Y-Axis":"890","Smart Fade":"true","Auto Fade":"true",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"55","Face Y-Axis":"100","Face Priority":"1",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"5","Name Y-Axis":"20","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"143","HP Meter Y-Axis":"85","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align":"0","HP Number X-Axis":"270","HP Number Y-Axis":"70","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","HP Icon Visible":"false","HP Icon Half Mode":"false","HP Icon Max Colors":"2","HP Icon Max Rows":"10","HP Icon Max Columns":"2","HP Icon X-Axis":"143","HP Icon Y-Axis":"85","HP Icon Space X":"0","HP Icon Space Y":"0","HP Icon Zoom Anime":"true",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"160","MP Meter Y-Axis":"115","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align":"0","MP Number X-Axis":"287","MP Number Y-Axis":"100","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","MP Icon Visible":"false","MP Icon Half Mode":"false","MP Icon Max Colors":"2","MP Icon Max Rows":"10","MP Icon Max Columns":"2","MP Icon X-Axis":"143","MP Icon Y-Axis":"120","MP Icon Space X":"0","MP Icon Space Y":"0","MP Icon Zoom Anime":"true",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"143","TP Meter Y-Axis":"145","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align":"0","TP Number X-Axis":"270","TP Number Y-Axis":"130","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116","TP Icon Visible":"false","TP Icon Half Mode":"false","TP Icon Max Colors":"2","TP Icon Max Rows":"10","TP Icon Max Columns":"2","TP Icon X-Axis":"143","TP Icon Y-Axis":"50","TP Icon Space X":"0","TP Icon Space Y":"0","TP Icon Zoom Anime":"true",">> EXP ===================":"","EXP Meter Visible":"true","EXP Meter X-Axis":"127","EXP Meter Y-Axis":"173","EXP Meter Angle":"0","Level Number Visible":"true","Level Number Align":"1","Level Number X-Axis":"65","Level Number Y-Axis":"153",">> STATES ===================":"","States Visible":"true","States X-Axis":"5","States Y-Axis":"64"}},
{"name":"MOG_GoldHud","status":false,"description":"(v1.6) Apresenta uma Hud com a quantidade de dinheiro.","parameters":{"Initial Visible":"false","Hud X-Axis":"555","Hud Y-Axis":"560","Number X-Axis":"240","Number Y-Axis":"24","Fade Limit":"60"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-CHRONO","status":true,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_CharPoses","status":false,"description":"(v2.2) Ativa poses de movimento no character.","parameters":{"Poses for Followers":"false","Dash Pose":"false","Jump Pose":"false","Idle Pose":"false","Idle Start Time":"60"}},
{"name":"MOG_EventSensor","status":true,"description":"(v1.1) Sistema de distância de eventos.","parameters":{"Self Switch Key":"D"}},
{"name":"MOG_ChronoEngine","status":true,"description":"(v0.2b) Sistema avançado de interação de eventos.","parameters":{"Tool Map ID":"1","Battle Mode":"0","Battle Sensor Range":"3","Max Battle Members":"3","ATB Mode":"2","ATB Max":"1600","States Duration":"240","Diagonal Movement":"true","Touch Input Mode":"false","Attack Command":"true","Shield Command":"true","Skill Command":"true","Item Command":"true","Skill Menu Command":"true","Item Menu Command":"true","Attack Button":"ok","Shield Button":"d","Skill Button":"s","Item Button":"a","Dash Button":"shift","Skill Menu Button":"pagedown","Item Menu Button":"pageup","Escape Button":"shift","Shield Animation ID":"142","Cast Animation ID":"138","Level UP Animation ID":"143","Treasure SE":"Item3","Turn SE":"Ice1","Charging SE":"Up1","Charged SE":"Saint3","Action Cost SE":"Cancel1","Hookshot X-Axis Offset":"12","Hookshot Y-Axis Offset":"0","Cursor Actor X-Axis":"0","Cursor Actor Y-Axis":"-20","Cursor Actor Rotation":"0.02","Cursor Actor Blend Mode":"1","Cursor Actor Opacity":"150","Cursor X-Axis":"0","Cursor Y-Axis":"0","Cursor Float Mode":"true","Cursor FontSize":"18","Cursor Text X-Axis":"0","Cursor Text Y-Axis":"3","Cursor HP X-Axis":"0","Cursor HP Y-Axis":"32","Cursor HP Gauge X-Axis":"0","Cursor HP Gauge Y-Axis":"1","Command X-Axis":"0","Command Y-Axis":"0","Command Name X-Axis":"0","Command Name Y-Axis":"-7","Command Arrow X-Axis":"0","Command Arrow Y-Axis":"0","Phase X-axis":"130","Phase Y-axis":"300","Result X-axis":"200","Result Y-axis":"200","Result FontSize":"24","Result Exp X-axis":"110","Result Exp Y-axis":"80","Result Gold X-axis":"110","Result Gold Y-axis":"185","Escape X-axis":"60","Escape Y-axis":"170","Escape Gauge X-axis":"6","Escape Gauge Y-axis":"23"}},
{"name":"MOG_ChronoATBHud","status":true,"description":"(v1.2) Apresenta a Hud de ATB para o Chrono Engine.","parameters":{"Hud Angle":"0","Hud X-Axis":"740","Hud Y-Axis":"890","Enemy X-Axis Offset":"16","Actor X-Axis Offset":"-16","Active X-Axis":"-3","Active Y-Axis":"30","Gauge Size":"160","Skill Visible":"true","Skill Zoom":"0.6","Skill X-Axis":"0","Skill Y-Axis":"0"}},
{"name":"MOG_ChronoEnemyHP","status":true,"description":"(v1.2) Apresenta o HP do inimigo ao ataca-lo.","parameters":{"Duration":"90","Font Size":"20","Layout X-Axis":"0","Layout Y-Axis":"400","Meter X-Axis":"27","Meter Y-Axis":"29","Name X-Axis":"80","Name Y-Axis":"0"}},
{"name":"MOG_ChronoToolHud","status":true,"description":"(v1.2) Apresenta as huds das ações no Chrono Engine.","parameters":{"Hud Start Visible":"true","Hud Font Size":"18","Hud Item Color":"0","Hud Mp Color":"3","Hud Tp Color":"5","Hud Icon X-Axis":"3","Hud Icon Y-Axis":"19","Hud Cost Number X-Axis":"0","Hud Cost Number Y-Axis":"38","Item Hud X-Axis":"950","Item Hud Y-Axis":"1000","Skill Hud X-Axis":"992","Skill Hud Y-Axis":"1000","Weapon Hud X-Axis":"1034","Weapon Hud Y-Axis":"1000","Shield Hud X-Axis":"1080","Shield Hud Y-Axis":"1000"}},
{"name":"MOG_ChronoCT","status":true,"description":"(v1.1) Adiciona o sistema de CT.","parameters":{"Initial Visible":"true","Dash Cost":"true","Full SE":"","Smart Fade":"true","Slant Animation":"true","Hud X-Axis":"930","Hud Y-Axis":"970","Number X-Axis":"155","Number Y-Axis":"6"}}
];
