function change(){
    div = document.getElementById('wt').innerHTML;
    if (div == 'Water temperature'){
        document.getElementById('wt').innerHTML = ' +22&#0176; Warm';
    }
    else {
        document.getElementById('wt').innerHTML = 'Water temperature';
        return false;
    }
}