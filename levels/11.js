var StartLevel11 = function(){
	var mainObj = new MainObject({bricks:144});
	mainObj.level = 11;

var brick41 = new Brick({image:tileset,position:{x:0,y:96},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:4});
var brick51 = new Brick({image:tileset,position:{x:0,y:120},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:5});
var brick101 = new Brick({image:tileset,position:{x:0,y:240},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:10});
var brick111 = new Brick({image:tileset,position:{x:0,y:264},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:11});
var brick141 = new Brick({image:tileset,position:{x:0,y:336},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:14});
var brick151 = new Brick({image:tileset,position:{x:0,y:360},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:15});
var brick201 = new Brick({image:tileset,position:{x:0,y:480},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:20});
var brick211 = new Brick({image:tileset,position:{x:0,y:504},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:21});
var brick47 = new Brick({image:tileset,position:{x:144,y:96},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick57 = new Brick({image:tileset,position:{x:144,y:120},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick67 = new Brick({image:tileset,position:{x:144,y:144},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick77 = new Brick({image:tileset,position:{x:144,y:168},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick87 = new Brick({image:tileset,position:{x:144,y:192},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick97 = new Brick({image:tileset,position:{x:144,y:216},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick107 = new Brick({image:tileset,position:{x:144,y:240},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick117 = new Brick({image:tileset,position:{x:144,y:264},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick147 = new Brick({image:tileset,position:{x:144,y:336},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick157 = new Brick({image:tileset,position:{x:144,y:360},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick167 = new Brick({image:tileset,position:{x:144,y:384},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick177 = new Brick({image:tileset,position:{x:144,y:408},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick187 = new Brick({image:tileset,position:{x:144,y:432},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick197 = new Brick({image:tileset,position:{x:144,y:456},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick207 = new Brick({image:tileset,position:{x:144,y:480},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick217 = new Brick({image:tileset,position:{x:144,y:504},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick49 = new Brick({image:tileset,position:{x:192,y:96},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick59 = new Brick({image:tileset,position:{x:192,y:120},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick69 = new Brick({image:tileset,position:{x:192,y:144},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick79 = new Brick({image:tileset,position:{x:192,y:168},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick89 = new Brick({image:tileset,position:{x:192,y:192},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick99 = new Brick({image:tileset,position:{x:192,y:216},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick109 = new Brick({image:tileset,position:{x:192,y:240},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick119 = new Brick({image:tileset,position:{x:192,y:264},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick149 = new Brick({image:tileset,position:{x:192,y:336},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick159 = new Brick({image:tileset,position:{x:192,y:360},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick169 = new Brick({image:tileset,position:{x:192,y:384},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick179 = new Brick({image:tileset,position:{x:192,y:408},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick189 = new Brick({image:tileset,position:{x:192,y:432},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick199 = new Brick({image:tileset,position:{x:192,y:456},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick209 = new Brick({image:tileset,position:{x:192,y:480},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick219 = new Brick({image:tileset,position:{x:192,y:504},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick415 = new Brick({image:tileset,position:{x:336,y:96},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick515 = new Brick({image:tileset,position:{x:336,y:120},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick615 = new Brick({image:tileset,position:{x:336,y:144},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick715 = new Brick({image:tileset,position:{x:336,y:168},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick815 = new Brick({image:tileset,position:{x:336,y:192},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick915 = new Brick({image:tileset,position:{x:336,y:216},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1015 = new Brick({image:tileset,position:{x:336,y:240},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1115 = new Brick({image:tileset,position:{x:336,y:264},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1415 = new Brick({image:tileset,position:{x:336,y:336},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1515 = new Brick({image:tileset,position:{x:336,y:360},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1615 = new Brick({image:tileset,position:{x:336,y:384},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1715 = new Brick({image:tileset,position:{x:336,y:408},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1815 = new Brick({image:tileset,position:{x:336,y:432},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1915 = new Brick({image:tileset,position:{x:336,y:456},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2015 = new Brick({image:tileset,position:{x:336,y:480},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2115 = new Brick({image:tileset,position:{x:336,y:504},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick417 = new Brick({image:tileset,position:{x:384,y:96},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick517 = new Brick({image:tileset,position:{x:384,y:120},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick617 = new Brick({image:tileset,position:{x:384,y:144},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick717 = new Brick({image:tileset,position:{x:384,y:168},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick817 = new Brick({image:tileset,position:{x:384,y:192},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick917 = new Brick({image:tileset,position:{x:384,y:216},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1017 = new Brick({image:tileset,position:{x:384,y:240},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1117 = new Brick({image:tileset,position:{x:384,y:264},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1417 = new Brick({image:tileset,position:{x:384,y:336},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1517 = new Brick({image:tileset,position:{x:384,y:360},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1617 = new Brick({image:tileset,position:{x:384,y:384},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1717 = new Brick({image:tileset,position:{x:384,y:408},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1817 = new Brick({image:tileset,position:{x:384,y:432},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1917 = new Brick({image:tileset,position:{x:384,y:456},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2017 = new Brick({image:tileset,position:{x:384,y:480},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2117 = new Brick({image:tileset,position:{x:384,y:504},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick422 = new Brick({image:tileset,position:{x:504,y:96},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick522 = new Brick({image:tileset,position:{x:504,y:120},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick622 = new Brick({image:tileset,position:{x:504,y:144},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick722 = new Brick({image:tileset,position:{x:504,y:168},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick822 = new Brick({image:tileset,position:{x:504,y:192},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick922 = new Brick({image:tileset,position:{x:504,y:216},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1022 = new Brick({image:tileset,position:{x:504,y:240},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1122 = new Brick({image:tileset,position:{x:504,y:264},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1422 = new Brick({image:tileset,position:{x:504,y:336},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1522 = new Brick({image:tileset,position:{x:504,y:360},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1622 = new Brick({image:tileset,position:{x:504,y:384},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1722 = new Brick({image:tileset,position:{x:504,y:408},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1822 = new Brick({image:tileset,position:{x:504,y:432},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1922 = new Brick({image:tileset,position:{x:504,y:456},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2022 = new Brick({image:tileset,position:{x:504,y:480},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2122 = new Brick({image:tileset,position:{x:504,y:504},color:"yellow", brickSize:1,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick426 = new Brick({image:tileset,position:{x:600,y:96},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick526 = new Brick({image:tileset,position:{x:600,y:120},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick626 = new Brick({image:tileset,position:{x:600,y:144},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick726 = new Brick({image:tileset,position:{x:600,y:168},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick826 = new Brick({image:tileset,position:{x:600,y:192},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick926 = new Brick({image:tileset,position:{x:600,y:216},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1026 = new Brick({image:tileset,position:{x:600,y:240},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1126 = new Brick({image:tileset,position:{x:600,y:264},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1426 = new Brick({image:tileset,position:{x:600,y:336},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1526 = new Brick({image:tileset,position:{x:600,y:360},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1626 = new Brick({image:tileset,position:{x:600,y:384},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1726 = new Brick({image:tileset,position:{x:600,y:408},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1826 = new Brick({image:tileset,position:{x:600,y:432},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1926 = new Brick({image:tileset,position:{x:600,y:456},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2026 = new Brick({image:tileset,position:{x:600,y:480},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2126 = new Brick({image:tileset,position:{x:600,y:504},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick428 = new Brick({image:tileset,position:{x:648,y:96},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick528 = new Brick({image:tileset,position:{x:648,y:120},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick628 = new Brick({image:tileset,position:{x:648,y:144},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick728 = new Brick({image:tileset,position:{x:648,y:168},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick828 = new Brick({image:tileset,position:{x:648,y:192},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick928 = new Brick({image:tileset,position:{x:648,y:216},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1028 = new Brick({image:tileset,position:{x:648,y:240},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1128 = new Brick({image:tileset,position:{x:648,y:264},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1428 = new Brick({image:tileset,position:{x:648,y:336},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1528 = new Brick({image:tileset,position:{x:648,y:360},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1628 = new Brick({image:tileset,position:{x:648,y:384},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1728 = new Brick({image:tileset,position:{x:648,y:408},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1828 = new Brick({image:tileset,position:{x:648,y:432},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1928 = new Brick({image:tileset,position:{x:648,y:456},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2028 = new Brick({image:tileset,position:{x:648,y:480},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2128 = new Brick({image:tileset,position:{x:648,y:504},color:"orange", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick434 = new Brick({image:tileset,position:{x:792,y:96},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick534 = new Brick({image:tileset,position:{x:792,y:120},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick634 = new Brick({image:tileset,position:{x:792,y:144},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick734 = new Brick({image:tileset,position:{x:792,y:168},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick834 = new Brick({image:tileset,position:{x:792,y:192},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick934 = new Brick({image:tileset,position:{x:792,y:216},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1034 = new Brick({image:tileset,position:{x:792,y:240},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1134 = new Brick({image:tileset,position:{x:792,y:264},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1434 = new Brick({image:tileset,position:{x:792,y:336},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1534 = new Brick({image:tileset,position:{x:792,y:360},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1634 = new Brick({image:tileset,position:{x:792,y:384},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1734 = new Brick({image:tileset,position:{x:792,y:408},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1834 = new Brick({image:tileset,position:{x:792,y:432},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1934 = new Brick({image:tileset,position:{x:792,y:456},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2034 = new Brick({image:tileset,position:{x:792,y:480},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2134 = new Brick({image:tileset,position:{x:792,y:504},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick436 = new Brick({image:tileset,position:{x:840,y:96},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:4});
var brick536 = new Brick({image:tileset,position:{x:840,y:120},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:5});
var brick636 = new Brick({image:tileset,position:{x:840,y:144},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:6});
var brick736 = new Brick({image:tileset,position:{x:840,y:168},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:7});
var brick836 = new Brick({image:tileset,position:{x:840,y:192},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:8});
var brick936 = new Brick({image:tileset,position:{x:840,y:216},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:9});
var brick1036 = new Brick({image:tileset,position:{x:840,y:240},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:10});
var brick1136 = new Brick({image:tileset,position:{x:840,y:264},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:11});
var brick1436 = new Brick({image:tileset,position:{x:840,y:336},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:14});
var brick1536 = new Brick({image:tileset,position:{x:840,y:360},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:15});
var brick1636 = new Brick({image:tileset,position:{x:840,y:384},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:16});
var brick1736 = new Brick({image:tileset,position:{x:840,y:408},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:17});
var brick1836 = new Brick({image:tileset,position:{x:840,y:432},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:18});
var brick1936 = new Brick({image:tileset,position:{x:840,y:456},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:19});
var brick2036 = new Brick({image:tileset,position:{x:840,y:480},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:20});
var brick2136 = new Brick({image:tileset,position:{x:840,y:504},color:"red", brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:false,z:21});
var brick442 = new Brick({image:tileset,position:{x:984,y:96},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:4});
var brick1142 = new Brick({image:tileset,position:{x:984,y:264},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:11});
var brick1442 = new Brick({image:tileset,position:{x:984,y:336},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:14});
var brick2142 = new Brick({image:tileset,position:{x:984,y:504},brickSize:2,isBonusBrick:false,isBomb:false,dice:false,isMetal:true,z:21});
var brick543 = new Brick({image:tileset,position:{x:1008,y:120},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:5});
var brick1043 = new Brick({image:tileset,position:{x:1008,y:240},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:10});
var brick1543 = new Brick({image:tileset,position:{x:1008,y:360},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:15});
var brick2043 = new Brick({image:tileset,position:{x:1008,y:480},brickSize:1,isBonusBrick:true,isBomb:false,dice:false,isMetal:true,z:20});


var rack = new Racket({image:tileset, position:512, width:96, z:98});

var ball = new Ball({position:{x:0, y:0}, z:97});

var levelgui = new GUI({image:tileset});

var scene1 = {objects:[blink, mainObj, showFPS, brick41, brick51, brick101, brick111, brick141, brick151, brick201, brick211, brick47, brick57, brick67, brick77, brick87, brick97, brick107, brick117, brick147, brick157, brick167, brick177, brick187, brick197, brick207, brick217, brick49, brick59, brick69, brick79, brick89, brick99, brick109, brick119, brick149, brick159, brick169, brick179, brick189, brick199, brick209, brick219, brick415, brick515, brick615, brick715, brick815, brick915, brick1015, brick1115, brick1415, brick1515, brick1615, brick1715, brick1815, brick1915, brick2015, brick2115, brick417, brick517, brick617, brick717, brick817, brick917, brick1017, brick1117, brick1417, brick1517, brick1617, brick1717, brick1817, brick1917, brick2017, brick2117, brick422, brick522, brick622, brick722, brick822, brick922, brick1022, brick1122, brick1422, brick1522, brick1622, brick1722, brick1822, brick1922, brick2022, brick2122, brick426, brick526, brick626, brick726, brick826, brick926, brick1026, brick1126, brick1426, brick1526, brick1626, brick1726, brick1826, brick1926, brick2026, brick2126, brick428, brick528, brick628, brick728, brick828, brick928, brick1028, brick1128, brick1428, brick1528, brick1628, brick1728, brick1828, brick1928, brick2028, brick2128, brick434, brick534, brick634, brick734, brick834, brick934, brick1034, brick1134, brick1434, brick1534, brick1634, brick1734, brick1834, brick1934, brick2034, brick2134, brick436, brick536, brick636, brick736, brick836, brick936, brick1036, brick1136, brick1436, brick1536, brick1636, brick1736, brick1836, brick1936, brick2036, brick2136, brick442, brick1142, brick1442, brick2142, brick543, brick1043, brick1543, brick2043, ball, rack, levelgui], sources:[tileset]};

Game.LoadScene(scene1);
}; 