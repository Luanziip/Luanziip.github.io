async function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const resultImage = document.getElementById('resultImage');

  if (!prompt) {
    alert('Por favor, descreva a imagem que deseja criar.');
    return;
  }

  // Mostra uma mensagem enquanto a imagem está sendo gerada
  resultImage.src = '';
  resultImage.alt = 'Gerando imagem...';

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`, // Substitua pela sua chave API
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: '512x512', // Tamanho da imagem gerada
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error(data.error);
      alert('Erro ao gerar a imagem: ' + data.error.message);
      return;
    }

    const imageUrl = data.data[0].url;
    resultImage.src = imageUrl;
    resultImage.alt = 'Imagem gerada por IA';
  } catch (error) {
    console.error('Erro ao se conectar à API:', error);
    alert('Erro ao gerar a imagem. Verifique a conexão ou a chave de API.');
  }
}
