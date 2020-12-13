var apikey = {
    key: '91dc0391-2f87-4ed7-a68e-fc3d13212239'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + 
    apikey.key)
    .then((response) => {
         if(!response.ok) throw new Error('Erro ao executar a resquisição, status ' + reponse.status);
         return response.json();
    })
    .then((api) => {

        console.log(api);
                
        var texto = "";

        for(let i = 0; i < 10; i++){


           texto = texto + `
          
            <div class="media">
                <img src="img/coin.jpg" class="align-self-center mr-3" alt="coin" width="150" height="100">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p>${api.data[i].first_historical_data}</p>
                </div>
            </div>
       
            `;

            document.getElementById("coins").innerHTML = texto;
            
        }
    })
    .catch((error) => {
        console.error(error.message);
    });