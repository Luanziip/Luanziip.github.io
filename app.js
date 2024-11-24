const axios = require('axios');
const apiKey = 'sk-svcacct-wI_ovLUguauDwc6nwrm1sUFMPn5Rlnc3hSJLo86JtHNzixSaetZCj2gADWhoT3BlbkFJWFKbP8A2X_6dXPnjTSaq4K7Xkz768J5mBlScEb_yb_DAqMaKaaOHapHWw7cA';  // Substitua pela sua chave nova

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
