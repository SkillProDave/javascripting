// DAY 2: PART 1

// Case/Switch approach worked up until stepping in to array required
var CodeArray1 = [1,9,10,3,2,3,11,0,99,30,40,50];
s = 0
switch(true) {
  case CodeArray1[s] == 1:
    console.log('Add');
    console.log(`${CodeArray1[CodeArray1[s+1]]+CodeArray1[CodeArray1[s+2]]}`);
    CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]+CodeArray1[CodeArray1[s+2]])
    console.log(CodeArray1);
    break;
  case CodeArray1[s] == 2:
    console.log('Multiply');
    console.log(`${CodeArray1[CodeArray1[s+1]]*CodeArray1[CodeArray1[s+2]]}`);
    CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]*CodeArray1[CodeArray1[s+2]])
    console.log(CodeArray1);
    break;
  case CodeArray1[s] == 99:
    console.log('Halt! Program Finished');
    break;
  default:
    console.log('You have 10 seconds to get out before the place blows up!');
}
// Answer:  [1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]

var CodeArray2 = [1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50];
s = 4
switch(true) {
  case CodeArray2[s] == 1:
    console.log('Add');
    console.log(`${CodeArray2[CodeArray2[s+1]]+CodeArray2[CodeArray2[s+2]]}`);
    CodeArray2.splice(CodeArray2[s+3], 1, CodeArray2[CodeArray2[s+1]]+CodeArray2[CodeArray2[s+2]])
    console.log(CodeArray2);
    break;
  case CodeArray2[s] == 2:
    console.log('Multiply');
    console.log(`${CodeArray2[CodeArray2[s+1]]*CodeArray2[CodeArray2[s+2]]}`);
    CodeArray2.splice(CodeArray2[s+3], 1, CodeArray2[CodeArray2[s+1]]*CodeArray2[CodeArray2[s+2]])
    console.log(CodeArray2);
    break;
  case CodeArray2[s] == 99:
    console.log('Halt! Program Finished');
    break;
  default:
    console.log('You have 10 seconds to get out before the place blows up!');
}
// Answer:  [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]

// DAY 2 PUZZLE: PART 1

// While loop with Nested Case/Switch...it actually works!
var CodeArray1 = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0];
var s = 0;
console.log(CodeArray1[s]);

while (CodeArray1[s] != 99) {
  switch(true) {
    case CodeArray1[s] == 1:
      console.log('Add');
      console.log(`${CodeArray1[CodeArray1[s+1]]+CodeArray1[CodeArray1[s+2]]}`);
      CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]+CodeArray1[CodeArray1[s+2]])
      console.log(CodeArray1);
      break;
    case CodeArray1[s] == 2:
      console.log('Multiply');
      console.log(`${CodeArray1[CodeArray1[s+1]]*CodeArray1[CodeArray1[s+2]]}`);
      CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]*CodeArray1[CodeArray1[s+2]])
      console.log(CodeArray1);
      break;
  }
var s = s + 4;
console.log(CodeArray1[s]);
}

// Answer: [3716250, 12, 2, 2, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 48, 2, 9, 19, 144, 2, 23, 10, 576, 1, 6, 27, 578, 1, 31, 6, 580, 2, 35, 10, 2320, 1, 39, 5, 2321, 2, 6, 43, 4642, 2, 47, 10, 18568, 1, 51, 6, 18570, 1, 55, 6, 18572, 1, 9, 59, 18575, 1, 63, 9, 18578, 1, 67, 6, 18580, 2, 71, 13, 92900, 1, 75, 5, 92901, 1, 79, 9, 92904, 2, 6, 83, 185808, 1, 87, 5, 185809, 2, 6, 91, 371618, 1, 95, 9, 371621, …]

// Recoded using While loop with Nested Ternary Operator
var CodeArray1 = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0];
var s = 0;
console.log(CodeArray1[s]);
while (CodeArray1[s] != 99) {
  CodeArray1[s] == 1 ? 
  CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]+CodeArray1[CodeArray1[s+2]]) : CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]*CodeArray1[CodeArray1[s+2]]);
var s = s + 4;
}
console.log(CodeArray1);
// Answer: Same as above

// WOW!  This is Ricky's version
var codeArray = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0];
var s = 0;
while (codeArray[s] != 99) {
  var first = codeArray[codeArray[s + 1]]; 
  var second = codeArray[codeArray[s + 2]]; 
  var putlndex = codeArray[s + 3];
  codeArray[putlndex] = (codeArray[s] == 1) ? (first + second) : (first * second); 
  s += 4;
}
console.log (codeArray [0] ) ;
// Answer: Same as above


// DAY 3 PUZZLE: PART 1

var wire1 = ['R998','U502','R895','D288','R416','U107','R492','U303','R719','D601','R783','D154','L236','U913','R833','D329','R28','D759','L270','D549','L245','U653','L851','U676','L211','D949','R980','U314','L897','U764','R149','D214','L195','D907','R534','D446','R362','D6','L246','D851','L25','U925','L334','U673','L998','U581','R783','U912','R53','D694','L441','U411','L908','D756','R946','D522','L77','U468','R816','D555','L194','D707','R97','D622','R99','D265','L590','U573','R132','D183','L969','D207','L90','D331','R88','D606','L315','U343','R546','U460','L826','D427','L232','U117','R125','U309','R433','D53','R148','U116','L437','U339','L288','D879','L52','D630','R201','D517','L341','U178','R94','U636','L759','D598','L278','U332','R192','U463','L325','U850','L200','U810','L686','U249','L226','D297','R915','D117','R56','D59','R760','U445','R184','U918','R173','D903','R212','D868','L88','D798','L829','U835','L563','U19','R480','D989','R529','D834','R515','U964','L876','D294','R778','D551','L457','D458','R150','D698','R956','D781','L310','D948','R50','U56','R98','U348','L254','U614','L654','D359','R632','D994','L701','D615','R64','D507','R668','D583','L687','D902','L564','D214','R930','D331','L212','U943','R559','U886','R590','D805','R426','U669','L141','D233','L573','D682','L931','U267','R117','D900','L944','U667','L838','D374','L406','U856','R987','D870','R716','D593','R596','D654','R653','U120','L666','U145','R490','D629','R172','D881','L808','D324','R956','D532','L475','U165','L503','U361','R208','U323','R568','D876','R663','D11','L839','D67','R499','U75','L643','U954','R94','D418','R761','D842','L213','D616','L785','D42','R707','D343','L513','D480','L531','D890','L899','D2','L30','D188','R32','U588','R480','U33','R849','U443','L666','U117','L13','D974','L453','U93','R960','D369','R332','D61','L17','U557','R818','D744','L124','U916','L454','D572','R451','D29','R711','D134','R481','U366','L327','U132','L819','U839','R485','U941','R224','U531','R688','U561','R958','D899','L315','U824','L408','D941','R517','D163','L878','U28','R767','D798','R227'];

var wire2 = ['L1009','U399','R373','U980','L48','U638','R725','U775','R714','D530','L887','D576','L682','D940','L371','D621','L342','D482','R676','D445','R752','U119','L361','D444','L769','D854','L874','U259','R332','U218','R866','U28','L342','D233','L958','U649','R998','U262','L8','D863','L283','D449','L73','D438','L516','D54','R964','D981','R338','U332','L761','U704','L705','D468','L115','U834','R367','D156','R480','U27','R846','U73','R846','D720','R811','D466','L407','U928','R816','U50','R90','D893','L930','D833','L159','D972','L823','U868','R689','D558','L777','D13','R844','D8','L168','U956','L111','D462','L667','U559','L839','U503','R906','D838','R83','D323','L782','U588','R599','D233','L700','U679','L51','U779','L110','D260','L201','U992','L43','D557','L628','D875','L201','U535','L246','D976','L546','D22','R600','D301','L542','D41','R532','U316','L765','D310','L666','D369','R853','U684','L457','U816','L667','U758','R798','U959','R893','D185','L842','U168','R68','D348','R394','D296','R966','D511','L319','U717','L57','U129','R843','U439','L744','D870','L162','D991','R77','D565','R494','U601','L851','U748','L96','U124','L379','D446','L882','U371','R133','U820','L935','D704','L670','D911','L182','U138','R844','U926','L552','D716','L849','U624','R723','U117','R252','D737','L216','U796','R156','U322','R812','D390','L50','D493','L665','U314','L584','U798','L11','U524','R171','U837','R981','U32','L277','U650','L865','U28','R399','U908','R652','D543','L779','D406','L839','D198','L190','D319','L776','U752','R383','D884','R385','D682','R729','D163','R252','U533','L690','D767','R533','D147','R366','U716','R548','U171','R932','U720','L9','D39','R895','U850','L276','D988','L528','U551','L262','D480','L275','D567','R70','D599','L814','U876','R120','U93','L565','U795','L278','D41','R695','D693','R208','U272','L923','U498','R238','U268','L244','U278','R965','U395','R990','U329','L478','D245','R980','D473','L702','U396','R358','U636','R400','D919','R240','U780','L251','D633','L55','D723','L529','U319','L299','D89','L251','D557','L705','D705','L391','D58','R241'];

var wire1 = ['R8','U5','L5','D3']; 
var x = 0;
var y = 0;
var i = 0;
var coords1 = [];
while (i < wire1.length) {
  // console.log(i);
  var wire1Letter = wire1[i].charAt(0);
  var wire1Number = parseInt(wire1[i].slice(1),10);  
  console.log(wire1Letter+wire1Number);
  switch(true) {
    case wire1Letter == 'U' :
      var wireCountDown = wire1Number 
      while (wireCountDown > 0) {
        y++;
        console.log(x, y);
        coords1.push({x, y});
        wireCountDown --;
      }
      break;
    case wire1Letter == 'D' :
        var wireCountDown = wire1Number 
        while (wireCountDown > 0) {
          y--;
          console.log(x, y);
          coords1.push({x, y});
          wireCountDown --;
        }
      break;
    case wire1Letter == 'R' :
        var wireCountDown = wire1Number
        while (wireCountDown > 0) {
          x++;
          console.log(x, y);
          coords1.push({x, y});
          wireCountDown --;
        }
      break;
    case wire1Letter == 'L' :
        var wireCountDown = wire1Number 
        while (wireCountDown > 0) {
          x--;
          console.log(x, y);
          coords1.push({x, y});
          wireCountDown --;
        }
      break;
  }
i ++;
}
console.log(coords1);


var wire2 = ['U7','R6','D4','L4']; 
var x = 0;
var y = 0;
var i = 0;
var coords2 = [];
while (i < wire2.length) {
  // console.log(i);
  var wire2Letter = wire2[i].charAt(0);
  var wire2Number = parseInt(wire2[i].slice(1),10);  
  console.log(wire2Letter+wire2Number);
  switch(true) {
    case wire2Letter == 'U' :
      var wireCountDown = wire2Number 
      while (wireCountDown > 0) {
        y++;
        console.log(x, y);
        coords2.push({x, y});
        wireCountDown --;
      }
      break;
    case wire2Letter == 'D' :
        var wireCountDown = wire2Number 
        while (wireCountDown > 0) {
          y--;
          console.log(x, y);
          coords2.push({x, y});
          wireCountDown --;
        }
      break;
    case wire2Letter == 'R' :
        var wireCountDown = wire2Number
        while (wireCountDown > 0) {
          x++;
          console.log(x, y);
          coords2.push({x, y});
          wireCountDown --;
        }
      break;
    case wire2Letter == 'L' :
        var wireCountDown = wire2Number 
        while (wireCountDown > 0) {
          x--;
          console.log(x, y);
          coords2.push({x, y});
          wireCountDown --;
        }
      break;
  }
i ++;
}
console.log(coords2);