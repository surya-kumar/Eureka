$('#phrase').click(function() {
    var myVar = $('#phrase').val();

    var words = myVar.split(" ");
    var acronym = words.map(function(word) {
        return word.charAt(0).toUpperCase();
    }).join('');
    $("#result").html(acronym);

    console.log(myVar);
});/**
 * Created by surya.kumar on 22/06/17.
 */
