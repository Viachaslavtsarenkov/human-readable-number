module.exports = function toReadable (number) {
    let nmbr ="";
    if (number === 0) return 'zero';
    if (number.toString().length === 3){
        let first = number.toString()[0];
        console.log(first)
        number = number.toString().substring(1);
    switch(+first){
        case 1: nmbr = nmbr + 'one hundred';
        break;
        case 2: nmbr = nmbr +  'two hundred';
        break;
        case 3: nmbr = nmbr +  'three hundred';
        break;
        case 4: nmbr = nmbr +  'four hundred';
        break;
        case 5: nmbr = nmbr +  'five hundred';
        break;
        case 6: nmbr = nmbr +  'six hundred';
        break;
        case 7: nmbr = nmbr +  'seven hundred';
        break;
        case 8: nmbr = nmbr + 'eight hundred';
        break;
        case 9: nmbr = nmbr +  'nine hundred';
        break;
        default: break;
      }
    }
    if (number.toString().length === 2){
      let first = number.toString()[0];
        if (first === '1'){
        switch(+number){
            case 10: nmbr = nmbr + ' ten'; break;
            case 11: nmbr = nmbr + ' eleven';
            break;
            case 12: nmbr = nmbr + ' twelve';
            break;
            case 13: nmbr = nmbr + ' thirteen';
            break;
            case 14: nmbr = nmbr + ' fourteen';
            break;
            case 15: nmbr = nmbr +' fifteen';
            break;
            case 16: nmbr = nmbr + ' sixteen';
            break;
            case 17: nmbr = nmbr + ' seventeen';
            break;
            case 18: nmbr = nmbr + ' eighteen';
            break;
            case 19: nmbr = nmbr + ' nineteen';
            break; 
            break;
            default: break;
        } 
        return nmbr.trim();
        }
     else {
        let first = number.toString()[0];
            switch(+first){
            case 2: nmbr = nmbr + ' twenty';
            break;
            case 3: nmbr = nmbr + ' thirty';
            break;
            case 4: nmbr = nmbr + ' forty';
            break;
            case 5: nmbr = nmbr + ' fifty';
            break;
            case 6: nmbr = nmbr + ' sixty';
            break;
            case 7: nmbr = nmbr + ' seventy';
            break;
            case 8: nmbr = nmbr + ' eighty';
            break;
            case 9: nmbr = nmbr + ' ninety';
            break; 
            default: break;
        } 
        number = number.toString().substring(1);
        }
        
    }
    switch(+number){
           
            case 1: nmbr = nmbr + ' one';
            break;
            case 2: nmbr = nmbr + ' two';
            break;
            case 3: nmbr = nmbr + ' three';
            break;
            case 4: nmbr = nmbr + ' four';
            break;
            case 5: nmbr = nmbr + ' five';
            break;
            case 6: nmbr = nmbr + ' six';
            break;
            case 7: nmbr = nmbr + ' seven';
            break;
            case 8: nmbr = nmbr + ' eight';
            break;
            case 9: nmbr = nmbr + ' nine';
            break;
          default: break;        
          }
  
return nmbr.trim();  
}
