// Home work - 3. 
// Vitaliy Mayovaniy
var str = "sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur";
var arr_str = str.split(' ');

function inputSymbol(){
var x;
   while (1){
   x =  prompt("Input letter symbol ");
      if (+x) {
                alert("Error! Enter the letter again");                
       } else if (x == ' '){
                alert("You input Space! Enter the letter again");
       } else if (x == "\\" || x==',' || x=='.' || x=='/' || x=='[' || x==']'){
                alert("You input special character! Enter the letter again");
       }else{
                break;
       }
    }
  return x;     
}

function changeCase(symbol){
    for (var i=0; i<arr_str.length; i++){
            var word_tmp = '';
        for (var j=0; j<arr_str[i].length; j++){
            if (arr_str[i][j] == symbol) {
                  word_tmp += arr_str[i][j].toUpperCase();
            } else {
                  word_tmp += arr_str[i][j];
            }
        }
        arr_str[i] = word_tmp;
    }
}

var receivedСharacter = inputSymbol();
changeCase(receivedСharacter);

console.log(arr_str.join(' '));

