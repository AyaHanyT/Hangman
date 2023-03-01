window.onload = function () {

    const TheLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // the buttons
    var buttons = function () {
        letters = document.getElementById('letters');
        for (var i = 0; i < 26; i++) {
            letter = document.createElement('li');
            letter.id = 'letter';
            letter.innerHTML = TheLetters[i];
            check();
            letters.appendChild(letter);
        }
    }

    var word;             
    var guess;          
    var geusses = [];     
    var space;             
    // holder for the letters
    result = function () {
        wordHolder = document.getElementById('word');
        correctLetters = document.createElement('ul');
        for (var i = 0; i < word.length; i++) {
            correctLetters.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }
            geusses.push(guess);
            wordHolder.appendChild(correctLetters);
            correctLetters.appendChild(guess);
        }
    }



    var lives;             // Lives
    var counter;           // Count correct geusses
    var yourLives = document.getElementById("lives");
    // lives
    info = function () {
        yourLives.innerHTML = "You have " + lives + " letters to guess";
        if (lives < 1) {
            yourLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                yourLives.innerHTML = "You Win!";
            }
        }
    }




    check = function () {
        letter.onclick = function () {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                info();
            } else {
                info();
            }
        }
    }


    // Play
    play = function () {
        var words = new Array("hey", "this-is", "aya-hany", "and-you");
        word = words[Math.floor(Math.random() * words.length)];
        word = word.replace(/\s/g, "-");
        buttons();
        geusses = [];
        lives = 6;
        counter = 0;
        space = 0;
        result();
        info();
    }

    play();

}
