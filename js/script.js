/*document.getElementById('button').addEventListener('click', function(){
  let z = document.getElementById('z').value;
  console.log(z);
  let x = document.getElementById('jednotkyZ').value;
  let b = 
  let kb = z/1000;
  let mb = z/1000000;
  document.getElementById('result').innerHTML = 
});*/
function converter(source,valNum) {
    valNum = parseFloat(valNum);
    let inputBit = document.getElementById("inputBit");
    let inputByte = document.getElementById("inputByte");
    let inputKb = document.getElementById("inputKb");
    let inputKB = document.getElementById("inputKB");
    let inputMb = document.getElementById("inputMb");
    if (source=="inputBit") {
      inputByte.value=(valNum/8);
      inputKb.value=(valNum/1000);
      inputKB.value=(valNum/8000);
      inputMb.value=(valNum/1000000);
      inputMB.value=(valNum/8000000)
    }
    if (source=="inputByte") {
      inputBit.value=(valNum*8);
      inputKb.value=(valNum/125);
      inputKB.value=(valNum/1000);
      inputMb.value=(valNum/125000);
      inputMB.value=(valNum/1000000)
    }
    if (source=="inputKb") {
      inputBit.value=(valNum*1000);
      inputByte.value=(valNum*125);
      inputKB.value=(valNum/8);
      inputMb.value=(valNum/1000);
      inputMB.value=(valNum/8000)
    }
    if (source=="inputKB") {
      inputBit.value=(valNum*8000);
      inputByte.value=(valNum*1000);
      inputKb.value=(valNum*8);
      inputMb.value=(valNum/125);
      inputMB.value=(valNum*1000)
    }
    if (source=="inputMb") {
      inputBit.value=(valNum*1000000);
      inputByte.value=(valNum*125000);
      inputKb.value=(valNum*1000);
      inputKB.value=(valNum*125);
      inputMB.value=(valNum/8)
    }
    if (source=="inputMB") {
      inputBit.value=(valNum*8000000);
      inputByte.value=(valNum*1000000);
      inputKb.value=(valNum*8000);
      inputKB.value=(valNum*1000);
      inputMb.value=(valNum*8)
    }
  }
/*function weightConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputPounds = document.getElementById("inputPounds");
  var inputKilograms = document.getElementById("inputKilograms");
  var inputOunces = document.getElementById("inputOunces");
  var inputGrams = document.getElementById("inputGrams");
  var inputStones = document.getElementById("inputStones");
  if (source=="inputPounds") {
    inputKilograms.value=(valNum/2.2046).toFixed(2);
    inputOunces.value=(valNum*16).toFixed(2);
    inputGrams.value=(valNum/0.0022046).toFixed();
    inputStones.value=(valNum*0.071429).toFixed(3);
  }
  if (source=="inputKilograms") {
    inputPounds.value=(valNum*2.2046).toFixed(2);
    inputOunces.value=(valNum*35.274).toFixed(2);
    inputGrams.value=(valNum*1000).toFixed();
    inputStones.value=(valNum*0.1574).toFixed(3);
  }
  if (source=="inputOunces") {
    inputPounds.value=(valNum*0.062500).toFixed(4);
    inputKilograms.value=(valNum/35.274).toFixed(4);
    inputGrams.value=(valNum/0.035274).toFixed(1);
    inputStones.value=(valNum*0.0044643).toFixed(4);
  }
  if (source=="inputGrams") {
    inputPounds.value=(valNum*0.0022046).toFixed(4);
    inputKilograms.value=(valNum/1000).toFixed(4);
    inputOunces.value=(valNum*0.035274).toFixed(3);
    inputStones.value=(valNum*0.00015747).toFixed(5);
  }
  if (source=="inputStones") {
    inputPounds.value=(valNum*14).toFixed(1);
    inputKilograms.value=(valNum/0.15747).toFixed(1);
    inputOunces.value=(valNum*224).toFixed();
    inputGrams.value=(valNum/0.00015747).toFixed();
  }

}*/ 