const form = document.querySelector ('.form')

form.addEventListener ('submit', function(e){
    e.preventDefault();

    const inputA = document.getElementById('numberA');
    const inputB = document.getElementById('numberB');
    const nA = inputA.value;
    const nB = inputB.value;

    const containerSuccess = document.getElementById('MSGpositive');
    const containerNegative = document.getElementById('MSGnegative');

    if (nA === "" || nB === ""){
        containerNegative.textContent = "Preencha corretamnete todos os campos !"
        inputA.style.border = "1px solid red"
        inputB.style.border = "1px solid red"
        containerNegative.style.display = 'block'
        containerSuccess.style.display = 'none' 
        return;
    } else {
            inputA.style.border = "none"
            inputB.style.border = "none"
    }

    const numA = parseFloat(nA);
    const numB = parseFloat(nB);

    const msgSuccess = `✅ Formulário válido: ${nB} é maior que ${nA}`;
    const msgError = `❌ Formulário inválido: ${nB} deve ser maior que ${nA}`;


    if (nB > nA) {
        containerSuccess.textContent = msgSuccess;
        containerSuccess.style.display = 'block';

        containerNegative.textContent = '';
        containerNegative.style.display = 'none';

        inputA.value = '';
        inputB.value = '';
    } else {
        containerNegative.textContent = msgError;
        containerNegative.style.display = 'block';

        containerSuccess.textContent = '';
        containerSuccess.style.display = 'none';
    }
});