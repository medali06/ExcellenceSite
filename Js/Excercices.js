function showMore(){
    //When you click on the button(Voir plus), this function will show 10 items from the hidden elements
    for (var i = 9; i < 19; i++){

    document.getElementsByClassName('rows')[i].style.display='table-row';

    document.getElementById('show-more').style.display='none';
    document.getElementById('show-more2').style.display='inline';
    }
}
function showMore2(){
    //When you click on the button(Voir plus), this function will show again 10 items from the hidden elements
    for (var j = 19; j < 29; j++){
    document.getElementsByClassName('rows')[j].style.display='table-row';
    //Hide the last button(Voir plus) and show the other one.
    document.getElementById('show-more2').style.display='none';
    document.getElementById('show-more3').style.display='inline';
    }
}
function showMore3(){
    for (var k = 29; k < 40; k++){
    document.getElementsByClassName('rows')[k].style.display='table-row';
    
    //Hide all(Voir plus)buttons after seen the full content of the excercices.
    document.getElementById('show-more3').style.display='none';
    document.getElementById('show-more4').style.display='inline'; 
    }
}
function showMore4(){
    for (var l = 39; l < 51; l++){
    document.getElementsByClassName('rows')[l].style.display='table-row';
    //Hide all(Voir plus)buttons after seen the full content of the excercices.
    document.getElementById('show-more4').style.display='none';
    document.getElementById('voir-plus').style.display='none'; 
}
}
window.onload=function tableColor(){
    //Customize excercices's table rows.
    for (var n = 1; n < 52; n++){
        if (n % 2 !== 0){
    document.getElementsByClassName('rows')[n].style.background='#f1f1f1';
    }
}
}