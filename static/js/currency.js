function convert(){
    var amt = document.getElementById("amount").value;
    var sourceCurrency = document.getElementById("sourceCurrency").value;
    var targetCurrency = document.getElementById("targetCurrency").value;

    var endpoint = 'latest'
    var access_key = 'YOUR_API_KEY_HERE';
    //API key for fixer.io would usually go here ^^ but I'm opting not to expose it
    //If you'd like to test the code, you can add your own from fixer.io

    $.ajax({
        url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,
        dataType: 'jsonp',
        success: function(json) {
            var fromResult = json.rates[sourceCurrency]
            var toResult = json.rates[targetCurrency]
            var output = (amt / fromResult) * toResult
            document.getElementById("result").innerText = output;
        },
    });
}
