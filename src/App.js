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
      description: '<b>5 de novembro de 2024, h 20:37 (veículo C47621).<br />Av. Governador Carlos Lacerda - Inhaúma</b><br /><br />Equipes do Corpo de Bombeiros foram acionadas para apagar um incêndio em ônibus na Linha Amarela por volta das 20:30 de terça-feira, 5 de novembro de 2024. O veículo pegou fogo na altura de Pilares, na Zona Norte. O veículo ocupava parte da da pista no sentido Zona Norte da cidade.',
      sourceText: '<b>Referências:</b><br /><br /><li><a href="https://folhadoleste.com.br/video-onibus-pega-fogo-na-linha-amarela-e-assusta-passageiros/" target=”_blank”>Vídeo: Ônibus pega fogo na Linha Amarela e assusta passageiros</a></li><li><a href="https://g1.globo.com/rj/rio-de-janeiro/noticia/2024/11/05/onibus-pega-fogo-na-linha-amarela-e-interdita-parte-da-via.ghtml" target=”_blank”>Vídeo: Ônibus pega fogo na Linha Amarela e interdita parte da via</a></li><li><a href="https://diariodotransporte.com.br/2024/11/05/video-onibus-pega-fogo-na-linha-amarela-no-rio-de-janeiro-e-causa-interdicao-na-noite-desta-terca-05/" target=”_blank”>Ônibus pega fogo na Linha Amarela, no Rio de Janeiro, e causa interdição na noite desta terça (05)</a></li>',      
      linha: '610<br />NOVA AMERICA /<br />DEL CASTILHO',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__C47621.svg',
      data: '5 de novembro de 2024',
      hora: '20:37',
      tags: ['Rio de Janeiro', 'mau estado de manutenção', 'incêndio', '610'],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__C47621.svg',
      descrline: 'Esta é a rota que o veículo C47621 percorreu entre 4:28 e 20:37 em 5 de novembro de 2024. Às 20:37, o veículo estava transportando passageirxs na linha 610 Nova América / Del Castilho, quando o GPS do veículo registrou uma parada não planejada.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20241105a.mp4',
      video2: 'https://www.alessandromusetta.com/cloud/linhas/video/20241105b.mp4',
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Os vídeos foram publicados por Globo Notícias e Folha do Leste / Reprodução redes sociais',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/ma-condicao__map.svg',
      titlemap: '<b>Denúncias de más condições do ônibus por área geográfica</b>',
      descrmap: 'Este mapa revela quantas denúncias georreferenciadas categorizadas como “más condições do ônibus” chegaram ao Portal 1746 oferecido pela Prefeitura do Rio de Janeiro. Os bairros Centro (72), Padre Miguel (70) e Tijuca (53) são aqueles onde chegaram mais denúncias no biênio 2022-2023.<br/><br/><i>A análise foi elaborada com base nos dados do Portal 1756.</i>',
      color: '#f0f55b',
    },
    {
      title: 'Registro',
      description: '<b>16 de outubro de 2024, h 07:49 (veículo C30213).<br />Estr. do Itanhangá, 1113 - Itanhangá</b><br /><br />Criminosos sequestraram nove ônibus para usar os coletivos como barricada na Estrada do Itanhangá, na zona oeste do Rio. Motoristas e passageiros foram liberados e não se feriram. PM informa que a ação teve o objetivo de tentar atrapalhar uma operação policial.<br />Os veículos envolvidos foram: D13091 - 878 Tanque x Barra da Tijuca, C30229 - 557 Rio das Pedras x Copacabana, C30213 - 557 Rio das Pedras x Copacabana, C30241 - 557 Rio das Pedras x Copacabana, C30193 - 550 Cidade de Deus x Gávea, C13058 - 878 Tanque x Barra da Tijuca, C47815 - 863 Barra da Tijuca x Rio das Pedras, C30127 - 557 Rio das Pedras x Copacabana, C30123 - 557 Rio das Pedras x Copacabana ',      
      sourceText: '<b>Referências:</b><br /><br /><li><a href="https://www.cnnbrasil.com.br/nacional/criminosos-onibus-rj/" target=”_blank”>Criminosos tomam ônibus para fazer barricada no RJ; veja vídeos</a></li><li><a href="https://noticias.uol.com.br/cotidiano/ultimas-noticias/2024/10/16/onibus-barricada-rio-de-janeiro.htm" target=”_blank”>Criminosos sequestram 9 ônibus para fazer barricada no Rio de Janeiro</a></li>',      
      veiculo: 'C30213',
      linha: '557<br />RIO DAS PEDRAS - COPACABANA<br />(BRS 3 - VIA NIEMEYER)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__C30213.svg',
      data: '16 de outubro de 2024',
      hora: '08:26',
      tags: ['Rio de Janeiro', 'conflito e violência', 'operações policiais', '557'],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__20241016.svg',
      descrline: 'Esta é a rota que o veículos D13091, C30229, C30213, C30241, C30193, C47815, C13058, C30127, C30123 percorreram em 16 de outubro de 2024. Às 08:26, o veículo C30213 estava transportando passageirxs na linha 557 Rio das Pedras - Copacabana, quando o GPS do veículo registrou uma parada não planejada.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20241016a.mp4',
      video2: 'https://www.alessandromusetta.com/cloud/linhas/video/20241016b.mp4',
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Os vídeos foram publicados por CNN Brasil / Reprodução redes sociais',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/fogo__20241016.svg',
      titlemap: '<b>Incidentes envolvendo violência armada registrados em 16 de outubro de 2024</b>',
      descrmap: 'Este mapa revela quantos incidentes envolvendo violência armada foram registrados em 16 de outubro de 2024. Dois incidentes foram registrados em um raio de 1 km da localização do veículo C30213 às 08:26.<br/><br/><i>A análise foi elaborada com base nos dados do Fogo Cruzado.</i>',      
      color: '#66bee7',
    },
    {
      title: 'Registro',
      description: '<b>20 de março de 2024, h 18:31 (veículo B32654).<br />Av. Pres. Vargas - Centro</b><br /><br />Um ônibus do transporte coletivo quebrou e teve que ser empurrado pelos próprios passageiros para "pegar no tranco". Em nota enviada ao jornal O Globo, a empresa informou que o coletivo começou a apresentar problemas de embreagem e que os passageiros estavam preocupados com a demora do próximo veículo.',
      sourceText: '<b>Referências:</b><br /><br /><li><a href="https://noticias.r7.com/ric/passageiros-se-unem-para-empurrar-onibus-quebrado-no-rio-de-janeiro-22032024/" target=”_blank”>Passageiros se unem para empurrar ônibus quebrado no Rio de Janeiro</a></li>',
      veiculo: 'B32654',
      linha: 'SR386<br />MARIOPOLIS X PASSEIO (RAPIDO - VIA AVENIDA PASSOS)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__B32654.svg',
      data: '20 de março de 2024',
      hora: '18:31',
      tags: ['Rio de Janeiro', 'mau estado de manutenção', 'SR386' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__B32654.svg',
      descrline: 'Esta é a rota que o veículo B32654 percorreu entre 4:34 e 20:59 em 20 de março de 2024. Às 18:31, o veículo estava transportando passageirxs na linha SR386 Mariopolis - Passeio, quando o GPS do veículo registrou uma parada não planejada.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',      
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20240320.mp4',
      video2: null,
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Os vídeos foram publicados por R7.com / Reprodução redes sociais',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/ma-condicao__map.svg',
      titlemap: '<b>Denúncias de más condições do ônibus por área geográfica</b>',
      descrmap: 'Este mapa revela quantas denúncias georreferenciadas categorizadas como “más condições do ônibus” chegaram ao Portal 1746 oferecido pela Prefeitura do Rio de Janeiro. Os bairros Centro (72), Padre Miguel (70) e Tijuca (53) são aqueles onde chegaram mais denúncias no biênio 2022-2023.<br/><br/><i>A análise foi elaborada com base nos dados do Portal 1756.</i>',
      color: '#f0f55b',
    },
    {
      title: 'Registro',
      description: '<b>7 de novembro de 2023 (veículo D13315)</b><br /><br />@tuliorossi87 em suas redes sociais pergunta o prefeito, "Vai começar a partir pra cima desses ônibus sem ar-condicionado quando, meu camarada? Calor do c*****o no RJ e ainda tem ônibus assim rodando? 2024 irmão, vamo trabalhar direito nessa p***a aí." ',
      sourceText: '<b>Referências:</b><br /><br />-',
      veiculo: 'D13315',
      linha: '394<br />VILA KENNEDY - TIRADENTES (BRS 5 - PARADOR)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__D13315.svg',
      data: '7 de novembro de 2023',
      hora: '-',
      tags: ['Rio de Janeiro', 'mau estado de manutenção', 'ar-condicionado', '394'],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__D13315.svg',
      descrline: 'Esta é a rota que o veículo D13315 percorreu entre 3:20 e 21:34 em 7 de novembro de 2023.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',      
      video1: null,
      video2: null,
      foto: 'https://www.alessandromusetta.com/cloud/linhas/foto/20231107.jpeg',
      sourceVideo: '<b>Referências:</b><br />@tuliorossi87',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/ar-condicionado__map.svg',
      titlemap: '<b>Denúncias de más condições do ar condicionado no ônibus por área geográfica</b>',
      descrmap: 'Este mapa revela quantas denúncias georreferenciadas categorizadas como “más condições do ar condicionado” chegaram ao Portal 1746 oferecido pela Prefeitura do Rio de Janeiro. Os bairros Centro (611), Tijuca (442) são aqueles onde chegaram mais denúncias no biênio 2022-2023.<br/><br/><i>A análise foi elaborada com base nos dados do Portal 1756.</i>',
      color: '#f0f55b',
    },
    {
      title: 'Registro',
      description: '<b>27 de setembro de 2023 (veículo D17137)<br />Av. Brasil, 21556 21574 - Barros Filho</b><br /><br />Pelo menos 5 criminosos encapuzados atacavam motoristas na Avenida Brasil, quando renderam o condutor de um coletivo e roubaram passageiros. Na fuga, jogaram o artefato, que explodiu. Moradores relatam que o ataque ao ônibus foi coordenado por criminosos da comunidade Gogó do Chapadão na intenção de culpar traficantes do Complexo da Pedreira. O objetivo da ação seria provocar uma distração e direcionar os esforços da polícia para aquela área.',      
      sourceText: '<b>Referências:</b><br /><br /><li><a href="https://g1.globo.com/rj/rio-de-janeiro/noticia/2023/09/28/onibus-avenida-brasil-incidente.ghtml" target=”_blank”>Granada caseira atirada em ônibus durante arrastão deixa 5 feridos na Zona Norte; um deles fica em estado grave</a></li>',        
      veiculo: 'D17137',
      linha: '771<br />CAMPO GRANDE - COELHO NETO (VIA POSSE)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__D17137.svg',
      data: '27 de setembro de 2023',
      hora: '21:26',
      tags: ['Rio de Janeiro', 'conflito e violência', 'conflito entre facções', '771' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__D17137.svg',
      descrline: 'Esta é a rota que o veículo D17137 percorreu entre 4:18 e 23:38 em 20 de março de 2024. Às 21:26, o veículo estava transportando passageirxs na linha 771 Campo Grande - Coelho Neto, quando o GPS do veículo registrou uma parada não planejada.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',          
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20230927.mp4',
      video2: null,
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Os vídeos foram publicados por O Globo / Reprodução redes sociais',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/fogo__20230927.svg',
      titlemap: '<b>Incidentes envolvendo violência armada registrados 27 de setembro de 2023</b>',
      descrmap: 'Este mapa revela quantos incidentes envolvendo violência armada foram registrados em 27 de setembro de 2023. Um acidente foi registrado em um raio de 1 km da localização do veículo D17137 às 21:26.<br/><br/><i>A análise foi elaborada com base nos dados do Fogo Cruzado.</i>',      
      color: '#66bee7',
    },
    {
      title: 'Registro',
      description: '<b>21 de março de 2023 (veículo B27129)<br />R. Bento Cardoso 758 744 - Brás de Pina</b><br /><br />Três pessoas ficaram feridas após um ônibus ser atingido por pelo menos seis disparos, no bairro de Brás de Pina. Uma passageira foi ferida nas costas, enquanto o motorista do ônibus e outro passageiro se machucaram com estilhaços. De acordo com testemunhas citadas pela TV Globo, os disparos teriam partido de criminosos de facções rivais que trocavam tiros na região. Um deles teria, inclusive, tentado se proteger atrás da porta do ônibus.',      
      sourceText: '<b>Referências:</b><br /><br /><li><a href="https://www.cnnbrasil.com.br/nacional/anibus-a-atingido-por-disparos-e-tras-pessoas-ficam-feridas-na-zona-norte-do-rio/" target=”_blank”>Ônibus é atingido por tiros e três pessoas ficam feridas na zona norte do Rio</a></li>',        
      veiculo: 'B27129',
      linha: '905<br />BONSUCESSO - IRAJÁ<br />(VIA BRAS DE PINA)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__B27129.svg',
      data: '21 de março de 2023',
      hora: '22:43',
      tags: ['Rio de Janeiro', 'conflito e violência', 'conflito entre facções', '905' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__B27129.svg',
      descrline: 'Esta é a rota que o veículo B27129 percorreu entre 5:10 e 23:36 em 21 de março de 2023. Às 22:43, o veículo estava transportando passageirxs na linha 905 Bonsucesso - Irajá, quando o GPS do veículo registrou uma parada não planejada.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',         
      video1: 'https://www.alessandromusetta.com/cloud/linhas/video/20230321.mp4',
      video2: null,
      foto: null,
      sourceVideo: '<b>Referências:</b><br />Brasil Urgente | Band Notícias',
      map: 'https://www.alessandromusetta.com/cloud/linhas/svg/fogo__20230321.svg',
      titlemap: '<b>Incidentes envolvendo violência armada registrados 21 de março de 2023</b>',
      descrmap: 'Este mapa revela quantos incidentes envolvendo violência armada foram registrados em 21 de março de 2023. Um acidente foi registrado em um raio de 1 km da localização do veículo B27129 às 22:43.<br/><br/><i>A análise foi elaborada com base nos dados do Fogo Cruzado.</i>',      
      color: '#66bee7',
    },
    {
      title: 'Registro',
      description: '<b>7 de setembro de 2022 (veículo A29064)<br />R. Barata Ribero 669 - Copacabana</b><br /><br />Oito jovens negros não identificados protestaram dentro do ônibus da linha 474 Jacaré - Copacabana contra a motociata de apoiadores do presidente Jair Bolsonaro (PL) em Copacabana. Eles foram obrigados a sair do veículo e revistados por três policiais militares do Batalhão de Choque logo em seguida. Uma testemunha filmou toda a ação. Nas imagens, é possível ver os jovens apoiados com as mãos no ônibus, enquanto os outros passageiros aguardavam dentro do veículo. A PM revistou roupas, bolsas e alimentos que os jovens portavam. Um dos policiais chegou a desbloquear o celular de um deles e mexeu em aplicativos e mensagens privadas. Outro jovem mostrou a carteira de trabalho.',      sourceText: '<b>Referências:</b><br /><br /><li><a href="https://revistaforum.com.br/brasil/2022/9/8/jovens-que-protestaram-em-nibus-contra-bolsonaristas-levaram-enquadro-da-pm-em-seguida-122961.html" target=”_blank”>Jovens que protestaram em ônibus contra bolsonaristas levaram "enquadro" da PM em seguida</a></li><li><a href="https://mundonegro.inf.br/jovens-negros-protestam-contra-a-motociata-de-bolsonaro-e-sao-revistados-pela-pm/" target=”_blank”>Jovens negros protestam contra a motociata de Bolsonaro e são revistados pela PM</a></li>',           
      veiculo: 'A29064',
      linha: '474<br />JACARE X COPACABANA<br />(VIA TUNEL SANTA BARBARA)',
      thumb: 'https://www.alessandromusetta.com/cloud/linhas/svg/thumb__A29064.svg',
      data: '7 de setembro de 2022',
      hora: '14.45',
      tags: ['Rio de Janeiro', 'racismo', '474' ],
      line: 'https://www.alessandromusetta.com/cloud/linhas/svg/line__A29064.svg',
      descrline: 'Esta é a rota que o veículo A29064 percorreu entre 5:52 e 23:29 em 7 de setembro de 2022. Às 14.45, o veículo estava transportando passageirxs na linha 474 Jacare - Copacabana, quando o GPS do veículo registrou uma parada não planejada.<br /><br /><i>A análise foi elaborada com base nos dados da Secretaria Municipal de Transportes - SMTR do Rio de Janeiro.</i>',        
      video1: null,
      video2: null,
      foto: 'https://www.alessandromusetta.com/cloud/linhas/foto/20220907.png',
      sourceVideo: '<b>Referências:</b><br />Reprodução redes sociais',
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
