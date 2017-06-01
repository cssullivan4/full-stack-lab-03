var myFriends = ['Heidi','Sean','Edi','Madeline','Zdravka'];

// FOR FURTHER PRACTICE WITH DOM CONTENT LOADING
// var oldCode = document.getElementById('friend');
// oldCode.remove();
// document.body.removeChild(oldCode);

// BUTTON
document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('my-btn');
    btn.addEventListener('click', sing);
})

// SING
function sing() {
    for (var i = 0; i < myFriends.length; i++) {
        var div = document.createElement('div');
        div.className = 'friend';
        var nameHere = document.createElement('h3');
        div.appendChild(nameHere);
        var nameSinging = document.createTextNode(myFriends[i]);
        nameHere.appendChild(nameSinging);
        for (var j = 99; j > 0; j--) {
            var para = document.createElement('p');
            div.appendChild(para);
            if (j > 2) {
                var lyrics = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; ' + myFriends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file!');
            } else if (j === 2) {
                var lyrics = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; ' + myFriends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file!');
            } else {
                var lyrics = document.createTextNode('1 line of code in the file, 1 line of code; ' + myFriends[i] + ' strikes one out, clears it all out, no more lines of code in the file!');
            }
        document.body.appendChild(div);
        para.appendChild(lyrics);
        div.appendChild(para);
        document.body.appendChild(div);
        }
    };
}