
function Convert() {
    let moneys = document.getElementById ( 'moneys' ).value;
    let Curr = document.getElementById ( 'Curr' ).value;
    let ToCurr = document.getElementById ( 'ToCurr' ).value;
    if ( Curr == 'VN' && ToCurr == 'US' ) {
        // alert(moneys/24000);
        var cal = moneys / 24000;
        document.getElementById ( 'Convert2' ).innerHTML = cal
    } else {
        // alert(moneys*24000);
        var cal = moneys * 24000;
        document.getElementById ( 'Convert2' ).innerHTML = cal
    }
};