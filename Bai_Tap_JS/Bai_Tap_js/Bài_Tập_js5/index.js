// let username = prompt ( 'who ís there?','' );
// if (username =='admin') {
//      document.write('vào đây')
//  }else if (username == null){
//      alert('cancel');
//  }else{
//      alert('i dont know u');
// }
// let password = prompt('Password','');
//  if(password == 'admin') {
//      document.write('wellcome')
//  } else if (password == null){
//      alert('Cancel');
//  }else{
//      alert('I dont know u');


function account() {
    let Admin1 = document.getElementById ( 'Admin1' ).value;
    let pass1 = document.getElementById('pass1').value;
    if (Admin1 == 'admin'&& pass1 == 'admin') {
        alert ( 'yes' );
    }else{
        alert ( 'Không Thành Công' );
    }
}