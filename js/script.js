// Função para avançar a barra de progresso gradualmente
function advanceProgressBar(percent) {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseFloat(progressBar.style.width) || 0;
    var targetPercent = currentWidth + (percent || 10); // Usa o parâmetro ou avança 10% por padrão
    var increment = 1; // Ajuste o incremento conforme necessário
    var interval = setInterval(function() {
        if (currentWidth < targetPercent) {
            currentWidth += increment;
            progressBar.style.width = currentWidth + '%';
        } else {
            clearInterval(interval);
        }
    }, 10); // Ajuste o intervalo conforme necessário para a velocidade do avanço
}

// Eventos de clique para as opções de gênero
document.getElementById('male').addEventListener('click', function() {
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('age-selection-male').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
});

document.getElementById('female').addEventListener('click', function() {
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('age-selection-female').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
});

// Evento de clique para as opções de idade - Masculino
document.querySelectorAll('#age-selection-male .option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('age-selection-male').style.display = 'none';
        document.getElementById('success-story-male').style.display = 'block';
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma faixa etária
    });
});

// Evento de clique para as opções de idade - Feminino
document.querySelectorAll('#age-selection-female .option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('age-selection-female').style.display = 'none';
        document.getElementById('success-story-female').style.display = 'block';
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma faixa etária
    });
});

// Evento de clique para o botão "Continuar" na seção de sucesso - Masculino
document.getElementById('continue-to-results-male').addEventListener('click', function() {
    document.getElementById('success-story-male').style.display = 'none';
    document.getElementById('results-male').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar"
});

// Evento de clique para o botão "Continuar" na seção de sucesso - Feminino
document.getElementById('continue-to-results-female').addEventListener('click', function() {
    document.getElementById('success-story-female').style.display = 'none';
    document.getElementById('results-female').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar"
});

// Evento de clique para o botão "Continuar" na seção de resultados - Masculino
document.getElementById('continue-final-male').addEventListener('click', function() {
    document.getElementById('results-male').style.display = 'none';
    document.getElementById('reasons-male').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar"
});

// Evento de clique para o botão "Continuar" na seção de resultados - Feminino
document.getElementById('continue-final-female').addEventListener('click', function() {
    document.getElementById('results-female').style.display = 'none';
    document.getElementById('reasons-female').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar"
});

// Evento de clique para as opções na quinta seção - Masculino
document.querySelectorAll('#reasons-male .option-button').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('reasons-male').style.display = 'none';
        document.getElementById('relationship-profile-male').style.display = 'block';
        advanceProgressBar(); // Avança 10% da barra ao clicar em qualquer botão na seção de motivos
    });
});

// Evento de clique para as opções na quinta seção - Feminino
document.querySelectorAll('#reasons-female .option-button').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('reasons-female').style.display = 'none';
        document.getElementById('relationship-profile-female').style.display = 'block';
        advanceProgressBar(); // Avança 10% da barra ao clicar em qualquer botão na seção de motivos
    });
});

// Evento de clique para as opções de resposta na sexta seção - Masculino
document.querySelectorAll('#relationship-profile-male .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-profile-male').style.display = 'none';
        document.getElementById('relationship-improvements-male').style.display = 'block'; // Atualize o ID da próxima seção para a sétima seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});

// Evento de clique para as opções de resposta na sexta seção - Feminino
document.querySelectorAll('#relationship-profile-female .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-profile-female').style.display = 'none';
        document.getElementById('relationship-improvements-female').style.display = 'block'; // Atualize o ID da próxima seção para a sétima seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});

// Evento de clique para as opções na sétima seção - Masculino
document.querySelectorAll('#relationship-improvements-male .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-improvements-male').style.display = 'none'; // Oculta a sétima seção
        document.getElementById('previous-attempts-male').style.display = 'block'; // Exibe a oitava seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});

// Evento de clique para as opções na sétima seção - Feminino
document.querySelectorAll('#relationship-improvements-female .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('relationship-improvements-female').style.display = 'none'; // Oculta a sétima seção
        document.getElementById('previous-attempts-female').style.display = 'block'; // Exibe a oitava seção
        advanceProgressBar(); // Avança 10% da barra ao selecionar uma opção
    });
});

// Evento de clique para as opções na oitava seção - Masculino
document.querySelectorAll('#previous-attempts-male .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('previous-attempts-male').style.display = 'none'; // Oculta a oitava seção
        document.getElementById('ninth-section-male').style.display = 'block'; // Mostra a nona seção
        advanceProgressBar(); // Avança 10% da barra quando a oitava seção é ocultada e a nona seção aparece
    });
});

// Evento de clique para as opções na oitava seção - Feminino
document.querySelectorAll('#previous-attempts-female .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('previous-attempts-female').style.display = 'none'; // Oculta a oitava seção
        document.getElementById('ninth-section-female').style.display = 'block'; // Mostra a nona seção
        advanceProgressBar(); // Avança 10% da barra quando a oitava seção é ocultada e a nona seção aparece
    });
});

// Evento de clique para o botão "Continuar" na nona seção - Masculino
document.getElementById('continue-to-final-male').addEventListener('click', function() {
    document.getElementById('ninth-section-male').style.display = 'none';
    document.getElementById('recurring-thoughts-male').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar" na nona seção
});

// Evento de clique para o botão "Continuar" na nona seção - Feminino
document.getElementById('continue-to-final-female').addEventListener('click', function() {
    document.getElementById('ninth-section-female').style.display = 'none';
    document.getElementById('recurring-thoughts-female').style.display = 'block';
    advanceProgressBar(); // Avança 10% da barra ao clicar em "Continuar" na nona seção
});

// Evento de clique para as opções da décima primeira seção - Masculino
document.querySelectorAll('#recurring-thoughts-male .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('recurring-thoughts-male').style.display = 'none'; // Oculta a décima primeira seção
        document.getElementById('negative-energies-male').style.display = 'block'; // Exibe a décima segunda seção
        advanceProgressBar(); // Avança 10% da barra de progresso
    });
});

// Evento de clique para as opções da décima primeira seção - Feminino
document.querySelectorAll('#recurring-thoughts-female .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('recurring-thoughts-female').style.display = 'none'; // Oculta a décima primeira seção
        document.getElementById('negative-energies-female').style.display = 'block'; // Exibe a décima segunda seção
        advanceProgressBar(); // Avança 10% da barra de progresso
    });
});

// Evento de clique para as opções na décima segunda seção - Masculino
document.querySelectorAll('#negative-energies-male .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('negative-energies-male').style.display = 'none'; // Oculta a décima segunda seção
        document.getElementById('future-desired-male').style.display = 'block'; // Exibe a décima terceira seção
        advanceProgressBar(5); // Avança 5% da barra de progresso
    });
});

// Evento de clique para as opções na décima segunda seção - Feminino
document.querySelectorAll('#negative-energies-female .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('negative-energies-female').style.display = 'none'; // Oculta a décima segunda seção
        document.getElementById('future-desired-female').style.display = 'block'; // Exibe a décima terceira seção
        advanceProgressBar(5); // Avança 5% da barra de progresso
    });
});

// Evento de clique para as opções na décima terceira seção - Masculino
document.querySelectorAll('#future-desired-male .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('future-desired-male').style.display = 'none'; // Oculta a décima terceira seção
        document.getElementById('reconquest-chance-male').style.display = 'block'; // Exibe a décima quarta seção
        startReconquestProgressBar(); // Inicia o carregamento da barra de progresso
    });
});

// Evento de clique para as opções na décima terceira seção - Feminino
document.querySelectorAll('#future-desired-female .option-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('future-desired-female').style.display = 'none'; // Oculta a décima terceira seção
        document.getElementById('reconquest-chance-female').style.display = 'block'; // Exibe a décima quarta seção
        startReconquestProgressBar(); // Inicia o carregamento da barra de progresso
    });
});

function startReconquestProgressBar() {
    const progressBar = document.getElementById('chance-progress-bar');
    let width = 0;
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('calculating-text').style.display = 'none';
            document.getElementById('chance-result').style.display = 'block';
        } else {
            width += 5;
            progressBar.style.width = width + '%';
        }
    }, 100); // Ajuste o tempo conforme necessário
}
