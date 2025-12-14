// Atualiza o ano no rodapé automaticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Exemplo simples: mensagem ao clicar no botão de download (pode ser removido)
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.btn-secondary');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', function(event) {
            // Em um site real, aqui seria o link de download.
            // Esta é apenas uma simulação para interação.
            alert('Em um site real, o download do modelo em PDF começaria agora!');
            // event.preventDefault(); // Descomente esta linha para impedir a navegação do link durante testes
        });
    }

    console.log('Site Desenrola Direito carregado com sucesso!');
});
