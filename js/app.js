 /*  
Turma de Segurança de Sistemas 2017/2
Sistemas de Informação
CEULP ULBRA
*/

//Lendo arquivo 01
if (window.File && window.FileReader && window.FileList && window.Blob) {
	// acima verificamos se navegador suporta o arquivo
    var input = document.getElementById('file');
    input.onchange = function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var sha256 = new jsSHA("SHA-256", "ARRAYBUFFER");
            sha256.update(e.target.result);
            console.log(sha256.getHash("HEX")); //Hexadecimal
            var tx = String.fromCharCode.apply(null, new Uint8Array(e.target.result));
            var shaObj = new jsSHA("SHA-256", "TEXT");
            shaObj.update(tx);
            console.log(shaObj.getHash("HEX")); 
            document.getElementById('result').innerHTML ="Hash do arquivo é: "+shaObj.getHash("HEX");
        }
        reader.readAsArrayBuffer(file);
    }
} else {
    alert('Arquivo não suportado no navegador');
}
// Lendo arquivo 2
if (window.File && window.FileReader && window.FileList && window.Blob) {
    var input = document.getElementById('file2');
    input.onchange = function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var sha256 = new jsSHA("SHA-256", "ARRAYBUFFER");
            sha256.update(e.target.result);
            console.log(sha256.getHash("HEX"));
            var tx = String.fromCharCode.apply(null, new Uint8Array(e.target.result));
            var shaObj = new jsSHA("SHA-256", "TEXT");
            shaObj.update(tx);
            console.log(shaObj.getHash("HEX"));
            document.getElementById('result2').innerHTML ="Hash do arquivo é: "+shaObj.getHash("HEX");
        }
        reader.readAsArrayBuffer(file);
    }
} else {
    alert('Arquivo não suportado no navegador');
}
