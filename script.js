function splitText() {
    var text = document.getElementById("inputText").value;
    var words = text.split(" ");

    var table = document.getElementById("wordTable");

    // Remove old rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Add new rows
    for (var i = 0; i < words.length; i++) {
        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        row.insertCell(2);  // Placeholder for gender
        row.insertCell(3);  // Placeholder for case
        row.insertCell(4);  // Placeholder for voice
        row.insertCell(5);  // Placeholder for person/number
        var cell7 = row.insertCell(6);  // Placeholder for translation

        cell1.innerHTML = words[i];

        var input = document.createElement("input");
        input.type = "text";
        cell7.appendChild(input);

        var select = document.createElement("select");
        select.options.add(new Option("", ""));
        select.options.add(new Option("Noun", "Noun"));
        select.options.add(new Option("Pronoun", "Pronoun"));
        select.options.add(new Option("Demonstrative Pronoun", "Demonstrative Pronoun"));
        select.options.add(new Option("Verb", "Verb"));
        select.options.add(new Option("Adjective", "Adjective"));
        select.options.add(new Option("Adverb", "Adverb"));
        select.options.add(new Option("Preposition", "Preposition"));
        select.options.add(new Option("Conjunction", "Conjunction"));
        select.options.add(new Option("Interjection", "Interjection"));
        select.options.add(new Option("Numeral", "Numeral"));

        // Use an IIFE to create a new scope for each row
        (function(row) {
            select.addEventListener('change', function() {
                var cell3 = row.cells[2];
                var cell4 = row.cells[3];
                var cell5 = row.cells[4];  // new cell for voice
                var cell6 = row.cells[5];  // new cell for person/number
    
                if (this.value === 'Noun' || this.value === 'Demonstrative Pronoun' || this.value === 'Adjective') {
                    var selectGender = document.createElement("select");
                    selectGender.options.add(new Option("", ""));
                    selectGender.options.add(new Option("Masculine", "Masculine"));
                    selectGender.options.add(new Option("Feminine", "Feminine"));
                    selectGender.options.add(new Option("Neuter", "Neuter"));
                
                    var selectCase = document.createElement("select");
                    selectCase.options.add(new Option("", ""));
                    selectCase.options.add(new Option("Nominative", "Nominative"));
                    selectCase.options.add(new Option("Accusative", "Accusative"));
                    selectCase.options.add(new Option("Genitive", "Genitive"));
                    selectCase.options.add(new Option("Dative", "Dative"));
                
                    cell3.innerHTML = '';
                    cell3.appendChild(selectGender);
                
                    cell4.innerHTML = '';
                    cell4.appendChild(selectCase);
                
                    cell5.innerHTML = '';
                    cell6.innerHTML = '';
                } else if (this.value === 'Pronoun') {
                    var selectPerson = document.createElement("select");
                    selectPerson.options.add(new Option("", ""));
                    selectPerson.options.add(new Option("1st", "1st"));
                    selectPerson.options.add(new Option("2nd", "2nd"));
                    selectPerson.options.add(new Option("3rd", "3rd"));
                
                    var selectNumber = document.createElement("select");
                    selectNumber.options.add(new Option("", ""));
                    selectNumber.options.add(new Option("Singular", "Singular"));
                    selectNumber.options.add(new Option("Plural", "Plural"));
                
                    var selectCase = document.createElement("select");
                    selectCase.options.add(new Option("", ""));
                    selectCase.options.add(new Option("Nominative", "Nominative"));
                    selectCase.options.add(new Option("Accusative", "Accusative"));
                    selectCase.options.add(new Option("Genitive", "Genitive"));
                    selectCase.options.add(new Option("Dative", "Dative"));
                
                    cell3.innerHTML = '';
                    cell3.appendChild(selectPerson);
                
                    cell4.innerHTML = '';
                    cell4.appendChild(selectNumber);
                
                    cell5.innerHTML = '';
                    cell5.appendChild(selectCase);
                
                    cell6.innerHTML = '';

                } else if (this.value === 'Verb') {
                    var selectMood = document.createElement("select");
                    selectMood.options.add(new Option("", ""));
                    selectMood.options.add(new Option("Indicative", "Indicative"));
                    selectMood.options.add(new Option("Subjunctive", "Subjunctive"));
                    selectMood.options.add(new Option("Imperative", "Imperative"));
        
                    var selectTense = document.createElement("select");
                    selectTense.options.add(new Option("", ""));
                    selectTense.options.add(new Option("Present", "Present"));
                    selectTense.options.add(new Option("Past", "Past"));
        
                    var selectVoice = document.createElement("select");
                    selectVoice.options.add(new Option("", ""));
                    selectVoice.options.add(new Option("Active", "Active"));
                    selectVoice.options.add(new Option("Passive", "Passive"));
        
                    var selectPersonNumber = document.createElement("select");
                    selectPersonNumber.options.add(new Option("", ""));
                    selectPersonNumber.options.add(new Option("1st Singular", "1st Singular"));
                    selectPersonNumber.options.add(new Option("2nd Singular", "2nd Singular"));
                    selectPersonNumber.options.add(new Option("3rd Singular", "3rd Singular"));
                    selectPersonNumber.options.add(new Option("1st Plural", "1st Plural"));
                    selectPersonNumber.options.add(new Option("2nd Plural", "2nd Plural"));
                    selectPersonNumber.options.add(new Option("3rd Plural", "3rd Plural"));

                    cell3.innerHTML = '';
                    cell3.appendChild(selectMood);

                    cell4.innerHTML = '';
                    cell4.appendChild(selectTense);

                    cell5.innerHTML = '';
                    cell5.appendChild(selectVoice);

                    cell6.innerHTML = '';
                    cell6.appendChild(selectPersonNumber);
                } else if (this.value === 'Adverb') {
                    var selectDegree = document.createElement("select");
                    selectDegree.options.add(new Option("", ""));
                    selectDegree.options.add(new Option("Positive", "Positive"));
                    selectDegree.options.add(new Option("Comparative", "Comparative"));
                    selectDegree.options.add(new Option("Superlative", "Superlative"));

                    cell3.innerHTML = '';
                    cell3.appendChild(selectDegree);

                    cell4.innerHTML = '';
                    cell5.innerHTML = '';
                    cell6.innerHTML = '';
                } else {
                    cell3.innerHTML = '';
                    cell4.innerHTML = '';
                    cell5.innerHTML = '';
                    cell6.innerHTML = '';
                }
            });
            cell2.appendChild(select);
        })(row);
    }
}

