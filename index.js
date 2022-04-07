let inputTelefone = document.getElementById('telefone');
let inputRg = document.getElementById('rg');
let inputCpf = document.getElementById('cpf');
let inputCnpj = document.getElementById('cnpj');
let inputCep = document.getElementById('cep');

inputTelefone.addEventListener('change', (event) => {

    str = inputTelefone.value;
    regExp = /^\(?(\d{2})\)?\s?(9)(\d{3,4})-?\s?(\d{4})$|^\(?(\d{2})\)?\s?(\d{4})-?\s?(\d{4})$/g;

    if (regExp.test(str)) {
        if (str.replace(regExp, '$1') !== '') {

            console.log(str.replace(regExp, '($1) $2$3-$4'))
            inputTelefone.value = str.replace(regExp, '($1) $2$3-$4');
            document.getElementById('lbl_telefone').innerHTML = 'Telefone celular';

        } else if (str.replace(regExp, '$5') !== '') {

            console.log(str.replace(regExp, '($5) $6-$7'))
            inputTelefone.value = str.replace(regExp, '($5) $6-$7');
            document.getElementById('lbl_telefone').innerHTML = 'Telefone fixo';

        }
    } else {
        alert('Digite um telefone válido com ddd');
        inputTelefone.value = '';
        inputTelefone.focus();
        document.getElementById('lbl_telefone').innerHTML = 'Telefone';
    }
});

inputRg.addEventListener('change', (event) => {
    str = inputRg.value;
    regExp = /^(\d{2})\.?(\d{3})\.?(\d{3})-?(\d{1})$/g;
    if (regExp.test(str)) {
        inputRg.value = str.replace(regExp, '$1.$2.$3-$4');
    } else {
        alert('Digite um RG válido');
        inputRg.value = '';
        inputRg.focus();
    }
});

inputCpf.addEventListener('change', (event) => {
    str = inputCpf.value;
    regExp = /^(\d{3})\.?(\d{3})\.?(\d{3})-?(\d{2})$/g;
    if (regExp.test(str)) {
        inputCpf.value = str.replace(regExp, '$1.$2.$3-$4');
    } else {
        alert('Digite um CPF válido');
        inputCpf.value = '';
        inputCpf.focus();
    }
});

inputCnpj.addEventListener('change', (event) => {
    str = inputCnpj.value;
    regExp = /^(\d{2})\.?(\d{3})\.?(\d{3})\/?(\d{4})-?(\d{2})$/g;
    if (regExp.test(str)) {
        inputCnpj.value = str.replace(regExp, '$1.$2.$3/$4-$5')
    } else {
        alert('Digite um CNPJ válido');
        inputCnpj.value = '';
        inputCnpj.focus();
    }
});

inputCep.addEventListener('change', (event) => {
    str = inputCep.value;
    regExp = /^(\d{5})-?(\d{3})$/
    if (regExp.test(str)) {
        inputCep.value = str.replace(regExp, '$1-$2');
    }else {
        alert('Digite um CEP válido');
        inputCep.value = '';
        inputCep.focus();
    }
})

