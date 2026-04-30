// Função para trocar as abas (Tabs)
function mostrarAba(idAba) {
    // Esconde todas
    document.getElementById('cepTab').classList.add('d-none');
    document.getElementById('ruaTab').classList.add('d-none');

    // Mostra a selecionada
    document.getElementById(idAba).classList.remove('d-none');

    // Estilo dos botões 
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// BUSCA POR CEP - e colocar pra aparecer sozinho
document.getElementById('cep').addEventListener('blur', async () => {
    let cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length === 8) {
        try {
            let res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            let json = await res.json();

            if (!json.erro) {
                document.getElementById('rua').value = json.logradouro;
                document.getElementById('bairro').value = json.bairro;
                document.getElementById('cidade').value = json.localidade;
                document.getElementById('uf').value = json.uf;
                registrarLog(`Sucesso: CEP ${cep}`);
            } else {
                alert("CEP não encontrado!");
            }
        } catch (e) {
            registrarLog(`Erro na conexão com ViaCEP`);
        }
    }
});

// BUSCA POR RUA
document.getElementById('btnBuscarRua').addEventListener('click', async () => {
    let uf = document.getElementById('buscaUF').value;
    let cidade = document.getElementById('buscaCidade').value;
    let rua = document.getElementById('buscaRua').value;

    if (uf && cidade && rua.length >= 3) {
        let res = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`);
        let dados = await res.json();

        let container = document.getElementById('resultadoRua');
        container.innerHTML = "";

      // Retorno dos resultados e estilo de como sao apresentados
        dados.forEach(item => {
            container.innerHTML += `<div class="alert alert-secondary p-1 mb-1" style="font-size:11px"> 
                ${item.cep} | ${item.logradouro} - ${item.bairro}
            </div>`;
        });
        registrarLog(`Busca Rua: ${rua}`);
    }
});

//Gerar o registro das consultas
function registrarLog(msg) {
    let lista = document.getElementById('listaLogs');
    let li = document.createElement('li');
    li.className = "list-group-item p-1";
    li.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
    lista.prepend(li);
}

//Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('Service Worker registrado!'))
    .catch(err => console.log('Erro ao registrar SW:', err));
}