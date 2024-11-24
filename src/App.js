import { useState, useCallback, useId } from 'react';
import Accordion from "./component/Accordion";
import Bemvindo from "./component/Header";
import './App.css';


function App() {

  const [tags, setTags] = useState(['Rio de Janeiro']);

  const id = useId();

  const projects = [
    {
      title: 'Registro',
      description: '<b>5 de novembro de 2024, h 20:37 (veículo C47621).<br />Av. Governador Carlos Lacerda - Inhaúma</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li><a href="https://folhadoleste.com.br/video-onibus-pega-fogo-na-linha-amarela-e-assusta-passageiros/" target=”_blank”>Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros</a></li>',
      veiculo: 'C47621',
      linha: '610<br />NOVA AMERICA /<br />DEL CASTILHO',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__C47621.svg',
      data: '5 de novembro de 2024',
      hora: '20:37',
      tags: ['Rio de Janeiro', 'mau estado de manutenção', 'incêndio', '610'],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__C47621.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20241105a.mp4',
      video2: 'https://www.alessandromusetta.com/cloud/linhas/video/20241105b.mp4',
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/ma-condicao__map.svg',
      titlemap: 'Titolo della mappa',
      descrmap: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      color: '#f0f55b',
    },
    {
      title: 'Registro',
      description: '<b>16 de outubro de 2024, h 07:49 (veículo C30213).<br />Estr. do Itanhangá, 1113 - Itanhangá</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li></li>',
      veiculo: 'C30213',
      linha: '557<br />RIO DAS PEDRAS - COPACABANA<br />(BRS 3 - VIA NIEMEYER)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__C30213.svg',
      data: '16 de outubro de 2024',
      hora: '08:26',
      tags: ['Rio de Janeiro', 'conflito e violência', 'operações policiais', '557'],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__20241016.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20241016a.mp4',
      video2: 'https://www.alessandromusetta.com/cloud/linhas/video/20241016b.mp4',
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/fogo__20241016.svg',
      titlemap: 'Titolo della mappa',
      descrmap: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      color: '#66bee7',
    },
    {
      title: 'Registro',
      description: '<b>20 de março de 2024, h 18:31 (veículo B32654).<br />Av. Pres. Vargas - Centro</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li></li>',
      veiculo: 'B32654',
      linha: 'SR386<br />MARIOPOLIS X PASSEIO (RAPIDO - VIA AVENIDA PASSOS)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__B32654.svg',
      data: '20 de março de 2024',
      hora: '18:31',
      tags: ['Rio de Janeiro', 'mau estado de manutenção', 'SR386' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__B32654.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20240320.mp4',
      video2: null,
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/ma-condicao__map.svg',
      titlemap: 'Titolo della mappa',
      descrmap: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      color: '#f0f55b',
    },
    {
      title: 'Registro',
      description: '<b>7 de novembro de 2023 (veículo D13315)</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li></li>',
      veiculo: 'D13315',
      linha: '394<br />VILA KENNEDY - TIRADENTES (BRS 5 - PARADOR)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__D13315.svg',
      data: '7 de novembro de 2023',
      hora: '-',
      tags: ['Rio de Janeiro', 'mau estado de manutenção', 'ar-condicionado', '394'],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__D13315.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: null,
      video2: null,
      foto: 'https://www.alessandromusetta.com/cloud/linhas/foto/20231107.jpeg',
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/ar-condicionado__map.svg',
      titlemap: 'Titolo della mappa',
      descrmap: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      color: '#f0f55b',
    },
    {
      title: 'Registro',
      description: '<b>27 de setembro de 2023 (veículo D17137)<br />Av. Brasil, 21556 21574 - Barros Filho</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li></li>',
      veiculo: 'D17137',
      linha: '771<br />CAMPO GRANDE - COELHO NETO (VIA POSSE)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__D17137.svg',
      data: '27 de setembro de 2023',
      hora: '21:26',
      tags: ['Rio de Janeiro', 'conflito e violência', 'conflito entre facções', '771' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__D17137.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20230927.mp4',
      video2: null,
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/fogo__20230927.svg',
      titlemap: 'Titolo della mappa',
      descrmap: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      color: '#66bee7',
    },
    {
      title: 'Registro',
      description: '<b>21 de março de 2023 (veículo B27129)<br />R. Bento Cardoso 758 744 - Brás de Pina</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li></li>',
      veiculo: 'B27129',
      linha: '905<br />BONSUCESSO - IRAJÁ<br />(VIA BRAS DE PINA)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__B27129.svg',
      data: '21 de março de 2023',
      hora: '22:43',
      tags: ['Rio de Janeiro', 'conflito e violência', 'conflito entre facções', '905' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__B27129.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20230321.mp4',
      video2: null,
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/fogo__20230321.svg',
      titlemap: 'Titolo della mappa',
      descrmap: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      color: '#66bee7',
    },
    {
      title: 'Registro',
      description: '<b>7 de setembro de 2022 (veículo A29064)<br />R. Barata Ribero 669 - Copacabana</b><br /><br />Um ônibus incendiado na Linha Amarela interditou parte da via no sentido Zona Norte, próximo a Pilares, na Zona Norte do Rio de Janeiro, na noite desta terça-feira (5). As equipes do Corpo de Bombeiros foram acionadas por volta das 20h30 para controlar o incêndio, mas, até o momento, não há informações sobre feridos.<br />Imagens feitas por pessoas no local mostram o veículo completamente tomado pelas chamas, ocupando parcialmente a pista no sentido Fundão. A gravação revela o trabalho dos bombeiros em meio às chamas, enquanto o fogo se aproxima da pista no sentido Barra da Tijuca.',
      sourceText: '<b>Referências:</b><li></li>',
      veiculo: 'A29064',
      linha: '474<br />JACARE X COPACABANA<br />(VIA TUNEL SANTA BARBARA)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__A29064.svg',
      data: '7 de setembro de 2022',
      hora: '14.45',
      tags: ['Rio de Janeiro', 'racismo', '474' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__A29064.svg',
      descrline: 'Descrizione della linha con gli aspetti metodologici di come e stata creata e le fonti dei dati utilizzati',
      video1: null,
      video2: null,
      foto: 'https://www.alessandromusetta.com/cloud/linhas/foto/20220907.png',
      sourceVideo: '<b>Referências:</b><br />Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros',
      map: null,
      titlemap: null,
      descrmap: null,
      color: '#66e7e1',
    },
  ];

  const addTag = useCallback(
    (tag) => () => {
      if (!tags.includes(tag)) {
        return setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  const deleteTag = useCallback(
    (tagId) => () => {
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
      });
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  return (

    <>
    
    <Bemvindo />
    
    <div className='tags-container'>
      <h1 className='tag-filter'>Filtros</h1>
      <div>
        {tags.length > 0
          ? tags.map((tag, index) => {
            return (
              <button
                key={`${index}-close-button-${id}`}
                className='close'
                onClick={deleteTag(tag)}
              >
                {tag} &nbsp; x
              </button>
            );
          })
          : '| Nenhum filtro foi selecionado, na lista são encontradas todas as histórias'}
      </div>

      <div className='proj-container'>
        {projects
          .filter((proj) => matchTags(proj.tags, tags))
          .map(({ veiculo, linha, thumb, data, hora, tags, color, title, description, sourceText, line, descrline, video1, video2, foto, sourceVideo, map, titlemap, descrmap, index }) => {
            return (
              <
                div key={`${index}-card-${id}`}
                className='card'
                style={{ backgroundColor: `${color}` }}
              >



                <div className='card-header'>

                  <div className='thumb block'>
                    <img src={`${thumb}`} alt='' />

                    <div className='tags'>
                      {tags.map((tag, index) => {
                        return (
                          <button
                            key={`${index}-add-button-${id}`}
                            type='button'
                            onClick={addTag(tag)}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className='card-info block'>
                    <div style={{ fontFamily: 'LEDBDREV', fontWeight: 'bold', fontSize: '1.6rem', lineHeight: 1.2, marginTop: 0, marginBottom: 0 }}>Linha <span dangerouslySetInnerHTML={{ __html: linha }} /></div>
                    <hr style={{ color: 'black', clear: "both", marginBottom: "5px", height: "6px" }} />
                    <h4>{veiculo}</h4>
                    <p>
                      <span>{data}</span>  |
                      <span>  h {hora}</span>
                    </p>

                  </div>

                </div>



                <div>
                  <Accordion
                    title={title}
                    content={description}
                    sourceText={sourceText}
                    descrline={descrline}
                    line={line}
                    video1={video1}
                    video2={video2}
                    foto={foto}
                    sourceVideo={sourceVideo}
                    map={map}
                    titlemap={titlemap}
                    descrmap={descrmap}
                  >

                  </Accordion>

                </div>

              </div>
            );
          })}
      </div>

    </div></>
  );
}

export default App;
