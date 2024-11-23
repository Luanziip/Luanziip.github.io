const axios = require('axios');
const apiKey = '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';  // Substitua pela sua chave nova

async function gerarImagem() {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: 'Uma paisagem futurista com montanhas e um rio',
        n: 1,
        size: '512x512',
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`, // A chave no cabeçalho
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Imagem Gerada:', response.data);
  } catch (error) {
    console.error('Erro ao gerar imagem:', error.response ? error.response.data : error.message);
  }
}

gerarImagem();
