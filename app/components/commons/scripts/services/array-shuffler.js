/**
 * Created by Antoine on 2015-10-09.
 */

homeApp.service("arrayShuffler", function () {
    /**
     * Taken from stack overflow http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    return {
        shuffle: shuffleArray
    };
});