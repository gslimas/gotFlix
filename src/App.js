import React from 'react';
import Menu from './Components/Menu';
import BannerMain from './Components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <div >
      <Menu>
      </Menu>
        <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Quem é a mãe do Jon Snow? Teoria antiga que foi confirmada."}>

        </BannerMain>

    </div>
  );
}

export default App;
