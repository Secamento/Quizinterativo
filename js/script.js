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

document.addEventListener('DOMContentLoaded', function () {
    // Seções
    const genderSelection = document.getElementById('gender-selection');
    const ageSelection = document.getElementById('age-selection');
    const successStory = document.getElementById('success-story');
    const results = document.getElementById('results');
    const reasons = document.getElementById('reasons');
    const relationshipProfile = document.getElementById('relationship-profile');
    const relationshipImprovements = document.getElementById('relationship-improvements');
    const previousAttempts = document.getElementById('previous-attempts');
    const ninthSection = document.getElementById('ninth-section');
    const recurringThoughts = document.getElementById('recurring-thoughts');
    const negativeEnergies = document.getElementById('negative-energies');
    const futureDesired = document.getElementById('future-desired');
    const reconquestChance = document.getElementById('reconquest-chance');
    const progressBarContainer = document.getElementById('progress-bar-container');
    const progressBar = document.getElementById('progress-bar');
    const chanceProgressBar = document.getElementById('chance-progress-bar');
    const calculatingText = document.getElementById('calculating-text');
    const chanceResult = document.getElementById('chance-result');
    
    const showSection = (section) => {
        const sections = [
            genderSelection, ageSelection, successStory, results, reasons,
            relationshipProfile, relationshipImprovements, previousAttempts,
            ninthSection, recurringThoughts, negativeEnergies, futureDesired,
            reconquestChance
        ];
        sections.forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
    };

    // Handle gender selection
    document.querySelectorAll('.gender-selection .option').forEach(option => {
        option.addEventListener('click', function () {
            showSection(ageSelection);
            advanceProgressBar(10); // Avança 10% ao selecionar gênero
        });
    });

    // Handle age selection
    document.querySelectorAll('.age-options .option').forEach(option => {
        option.addEventListener('click', function () {
            showSection(successStory);
            advanceProgressBar(10); // Avança 10% ao selecionar idade
        });
    });

    // Handle continue button in success story
    document.getElementById('continue-to-results').addEventListener('click', function () {
        showSection(results);
        advanceProgressBar(10); // Avança 10% ao clicar para continuar
    });

    // Handle continue button in results
    document.getElementById('continue-final').addEventListener('click', function () {
        showSection(reasons);
        advanceProgressBar(10); // Avança 10% ao clicar para continuar
    });

    // Handle reason selection
    document.querySelectorAll('.reasons .option-button').forEach(button => {
        button.addEventListener('click', function () {
            showSection(relationshipProfile);
            advanceProgressBar(10); // Avança 10% ao selecionar motivo
        });
    });

    // Handle relationship profile selection
    document.querySelectorAll('.relationship-profile .option-button').forEach(button => {
        button.addEventListener('click', function () {
            showSection(relationshipImprovements);
            advanceProgressBar(10); // Avança 10% ao selecionar perfil
        });
    });

    // Handle relationship improvements selection
    document.querySelectorAll('.relationship-improvements .option-button').forEach(button => {
        button.addEventListener('click', function () {
            showSection(previousAttempts);
            advanceProgressBar(10); // Avança 10% ao selecionar melhorias
        });
    });

    // Handle previous attempts selection
    document.querySelectorAll('.previous-attempts .option-button').forEach(button => {
        button.addEventListener('click', function () {
            showSection(ninthSection);
            advanceProgressBar(10); // Avança 10% ao selecionar tentativas anteriores
        });
    });

    // Handle continue button in ninth section
    document.getElementById('continue-to-final').addEventListener('click', function () {
        showSection(recurringThoughts);
        advanceProgressBar(10); // Avança 10% ao clicar para continuar
    });

    // Handle recurring thoughts selection
    document.querySelectorAll('.recurring-thoughts .option-button').forEach(button => {
        button.addEventListener('click', function () {
            showSection(negativeEnergies);
            advanceProgressBar(10); // Avança 10% ao selecionar pensamentos recorrentes
        });
    });

    // Handle negative energies selection
    document.querySelectorAll('.negative-energies .option-button').forEach(button => {
        button.addEventListener('click', function () {
            showSection(futureDesired);
            advanceProgressBar(10); // Avança 10% ao selecionar energias negativas
        });
    });

    // Handle future desired selection
    document.querySelectorAll('.future-desired .option-button').forEach(button => {
        button.addEventListener('click', function () {
            // Start calculating the chance
            progressBarContainer.style.display = 'block';
            calculatingText.style.display = 'block';
            setTimeout(() => {
                progressBar.style.width = '100%';
                calculatingText.style.display = 'none';
                showSection(reconquestChance);
                advanceProgressBar(10); // Avança 10% ao selecionar futuro desejado
            }, 3000); // Simulando o atraso do cálculo
            futureDesired.style.display = 'none';
        });
    });
});
