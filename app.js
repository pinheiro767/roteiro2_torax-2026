const rawGroups = [
  {
    id: 'G1',
    title: 'G1 — ARTÉRIAS E NERVOS',
    subtitle: 'Artérias, feixes vasculonervosos e nervos do tórax',
    items: [
      ['','Aorta',0],
      ['a.','Parte torácica da aorta',1],
      ['','Artérias intercostais posteriores',0],
      ['a.','3ª–11ª artérias intercostais posteriores',1],
      ['b.','Ramo dorsal',1],
      ['c.','Ramo colateral',1],
      ['d.','Ramo cutâneo lateral',1],
      ['i.','Ramos mamários laterais',2],
      ['','Artéria subcostal',0],
      ['','Artéria axilar',0],
      ['a.','Artéria torácica superior',1],
      ['b.','Artéria torácica lateral',1],
      ['i.','Ramos mamários laterais',2],
      ['','Artéria subclávia',0],
      ['a.','Tronco costocervical',1],
      ['i.','Artéria intercostal suprema',2],
      ['1.','1ª artéria intercostal posterior',3],
      ['2.','2ª artéria intercostal posterior',3],
      ['b.','Artéria torácica interna',1],
      ['i.','Artérias intercostais anteriores — 1º ao 6º espaços intercostais',2],
      ['ii.','Ramos perfurantes',2],
      ['1.','Ramos mamários mediais',3],
      ['iii.','Ramos esternais',2],
      ['iv.','Artéria musculofrênica',2],
      ['1.','Artérias intercostais anteriores — 7º ao 9º espaços intercostais',3],
      ['v.','Artéria epigástrica superior',2],
      ['','Feixe vasculonervoso intercostal principal',0],
      ['a.','Veia',1],
      ['b.','Artéria',1],
      ['c.','Nervo',1],
      ['','Feixe vasculonervoso intercostal colateral',0],
      ['','Nervos espinais torácicos',0],
      ['a.','Ramo posterior',1],
      ['b.','Ramo anterior',1],
      ['i.','Nervos intercostais — T1 a T11',2],
      ['1.','Ramo colateral',3],
      ['2.','Ramo cutâneo lateral',3],
      ['a.','Ramo anterior',4],
      ['b.','Ramo posterior',4],
      ['3.','Ramo cutâneo anterior',3],
      ['a.','Ramo medial',4],
      ['b.','Ramo lateral',4],
      ['4.','Ramos musculares',3],
      ['c.','Ramo comunicante branco',1],
      ['d.','Ramo comunicante cinzento',1],
      ['','Nervo subcostal',0],
      ['a.','Ramo anterior de T12',1],
      ['','Nervo peitoral lateral',0],
      ['','Nervo peitoral medial',0],
      ['','Nervo torácico longo',0]
    ]
  },
  {
    id: 'G2',
    title: 'G2 — VEIAS',
    subtitle: 'Drenagem venosa, sistema ázigo e plexos vertebrais',
    items: [
      ['','1ª veia intercostal posterior',0],
      ['a.','Veia braquiocefálica correspondente',1],
      ['','2ª–4ª veias intercostais posteriores',0],
      ['a.','Veia intercostal superior',1],
      ['','Veia intercostal superior direita',0],
      ['a.','Veia ázigo',1],
      ['i.','Veia cava superior',2],
      ['','Veia intercostal superior esquerda',0],
      ['a.','Veia braquiocefálica esquerda',1],
      ['b.','Comunicação com a veia hemiázigo acessória',1],
      ['','Plexo venoso vertebral anterior externo',0],
      ['','Plexo venoso vertebral anterior interno',0],
      ['','Plexo venoso vertebral posterior externo',0],
      ['','Veia lombar ascendente esquerda',0],
      ['','Veia subcostal esquerda',0],
      ['','Veia hemiázigo',0],
      ['a.','Veia lombar ascendente esquerda',1],
      ['b.','Veia subcostal esquerda',1],
      ['c.','Veias intercostais posteriores inferiores esquerdas',1],
      ['d.','Veias esofágicas inferiores',1],
      ['e.','Veias mediastinais',1],
      ['f.','Veia ázigo',1],
      ['','Veias intercostais posteriores esquerdas — 4ª/5ª à 8ª',0],
      ['','Veia hemiázigo acessória',0],
      ['a.','Veias intercostais posteriores esquerdas — 4ª/5ª à 8ª',1],
      ['b.','Veias bronquiais esquerdas',1],
      ['c.','Veia ázigo',1],
      ['d.','Comunicação com a veia hemiázigo',1],
      ['e.','Comunicação com a veia intercostal superior esquerda',1],
      ['','Veia lombar ascendente direita',0],
      ['','Veia subcostal direita',0],
      ['','Veia ázigo',0],
      ['a.','Veia lombar ascendente direita',1],
      ['b.','Veia subcostal direita',1],
      ['c.','Veias intercostais posteriores direitas',1],
      ['d.','Veia intercostal superior direita',1],
      ['e.','Veia hemiázigo',1],
      ['f.','Veia hemiázigo acessória',1],
      ['g.','Veias mediastinais',1],
      ['h.','Veias esofágicas',1],
      ['i.','Veias bronquiais',1],
      ['j.','Veia cava superior',1],
      ['','Veias intercostais anteriores',0],
      ['a.','Veias torácicas internas',1],
      ['','Veias musculofrênicas',0],
      ['a.','Veias torácicas internas',1],
      ['','Veias epigástricas superiores',0],
      ['a.','Veias torácicas internas',1],
      ['','Veias torácicas internas',0],
      ['a.','Veias braquiocefálicas',1],
      ['','Veias mediastinais, esofágicas e bronquiais',0],
      ['a.','Sistema ázigo',1],
      ['','Veia braquiocefálica direita',0],
      ['','Veia braquiocefálica esquerda',0],
      ['','Veia cava superior',0]
    ]
  }
];

const builtInReferenceImages = {
  1: [
    { src: 'images/references/ref_arco_aorta_vago.jpg', label: 'Arco da aorta — relação com o nervo vago esquerdo' },
    { src: 'images/references/ref_circuito_sistemico.jpg', label: 'Circuito sistêmico — referência geral da aorta' },
    { src: 'images/references/ref_arco_aorta_braquiocefalico.png', label: 'Arco da aorta e tronco braquiocefálico' }
  ],
  2: [
    { src: 'images/references/ref_arco_aorta_vago.jpg', label: 'Arco/continuidade da aorta — referência topográfica' },
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Aorta torácica descendente no mediastino posterior' }
  ],
  3: [
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Artérias intercostais posteriores — visão mediastinal' },
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Artéria intercostal posterior — relação com a parede torácica' }
  ],
  4: [
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Artérias intercostais posteriores — referência anatômica' }
  ],
  5: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Ramo dorsal da artéria intercostal posterior' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Ramo dorsal da artéria intercostal posterior' }
  ],
  7: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Ramos cutâneos laterais e vascularização mamária' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Ramos cutâneos laterais e vascularização mamária' }
  ],
  8: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Ramos mamários laterais das intercostais posteriores' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Ramos mamários laterais — referência ilustrada' }
  ],
  10: [
    { src: 'images/references/ref_regiao_deltopeitoral.png', label: 'Região deltopeitoral — referência topográfica da axila' },
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Artéria axilar — relação com a vascularização da mama' }
  ],
  11: [
    { src: 'images/references/ref_toracicas_superior_lateral.png', label: 'Artéria torácica superior' }
  ],
  12: [
    { src: 'images/references/ref_toracicas_superior_lateral.png', label: 'Artéria torácica lateral' },
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Artéria torácica lateral e ramos mamários' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Artéria torácica lateral — referência ilustrada' }
  ],
  13: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Ramos mamários laterais da artéria torácica lateral' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Ramos mamários laterais da artéria torácica lateral' }
  ],
  14: [
    { src: 'images/references/ref_subclavia.png', label: 'Artéria subclávia — dissecção de referência' },
    { src: 'images/references/ref_circuito_sistemico.jpg', label: 'Artéria subclávia — visão sistêmica' },
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Artéria subclávia — origem da vascularização anterior' },
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Artéria subclávia — referência mediastinal' }
  ],
  19: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Artéria torácica interna e seus ramos' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Artéria torácica interna — referência ilustrada' },
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Artéria torácica interna direita — relação topográfica' }
  ],
  20: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Artéria intercostal anterior — corte transversal do tórax' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Artéria intercostal anterior — referência ilustrada' }
  ],
  21: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Ramos perfurantes da artéria torácica interna' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Ramos perfurantes — referência ilustrada' }
  ],
  22: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Ramos mamários mediais dos ramos perfurantes' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Ramos mamários mediais — referência ilustrada' }
  ],
  27: [
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Feixe intercostal posterior — artéria, veia e nervo' }
  ],
  35: [
    { src: 'images/references/ref_nervos_intercostais.jpg', label: 'Nervos intercostais e tronco simpático' },
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Nervo intercostal — relação no feixe neurovascular' }
  ],
  44: [
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Ramo comunicante branco e tronco simpático' }
  ],
  48: [
    { src: 'images/references/ref_nervos_peitorais.jpg', label: 'Nervo peitoral lateral — dissecção' }
  ],
  49: [
    { src: 'images/references/ref_nervos_peitorais.jpg', label: 'Nervo peitoral medial — dissecção' }
  ],
  50: [
    { src: 'images/references/ref_nervo_toracico_longo.jpg', label: 'Nervo torácico longo sobre o músculo serrátil anterior' }
  ],
  51: [
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veia intercostal suprema — relação com a 1ª veia intercostal posterior' }
  ],
  53: [
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veias intercostais superiores — drenagem das intercostais posteriores' }
  ],
  54: [
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veia intercostal superior — referência anatômica' }
  ],
  55: [
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veia intercostal superior direita — relação com o arco da ázigo' }
  ],
  56: [
    { src: 'images/references/ref_arco_azigo_vcs.jpg', label: 'Arco da veia ázigo' },
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Arco da veia ázigo e tributárias intercostais' }
  ],
  57: [
    { src: 'images/references/ref_arco_azigo_vcs.jpg', label: 'Veia cava superior — relação com o arco da ázigo' },
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veia cava superior — relação topográfica com a ázigo' }
  ],
  58: [
    { src: 'images/references/ref_mediastino_aorta_intercostais.jpg', label: 'Veia intercostal superior esquerda — visão do mediastino' }
  ],
  66: [
    { src: 'images/references/ref_azigo_hemi_ducto.jpg', label: 'Veia hemiázigo, ázigo e ducto torácico' }
  ],
  72: [
    { src: 'images/references/ref_azigo_hemi_ducto.jpg', label: 'Veia ázigo — relação com hemiázigo e ducto torácico' }
  ],
  82: [
    { src: 'images/references/ref_arco_azigo_vcs.jpg', label: 'Veia ázigo e seu arco' },
    { src: 'images/references/ref_azigo_hemi_ducto.jpg', label: 'Sistema ázigo — visão posterior' },
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veia ázigo — arco e tributárias intercostais' }
  ],
  87: [
    { src: 'images/references/ref_azigo_hemi_ducto.jpg', label: 'Veia hemiázigo — referência anatômica' }
  ],
  92: [
    { src: 'images/references/ref_arco_azigo_vcs.jpg', label: 'Veia cava superior' }
  ],
  93: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Veias intercostais anteriores e drenagem mamária' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Drenagem venosa anterior da parede torácica e mama' }
  ],
  94: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Veias torácicas internas e ramos perfurantes' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Veia torácica interna — referência ilustrada' }
  ],
  99: [
    { src: 'images/references/ref_mama_vascularizacao_1.png', label: 'Veias torácicas internas — drenagem da mama' },
    { src: 'images/references/ref_mama_vascularizacao_2.png', label: 'Veias torácicas internas e veias mamárias' }
  ],
  102: [
    { src: 'images/references/ref_azigo_hemi_ducto.jpg', label: 'Sistema ázigo — ázigo e hemiázigo' },
    { src: 'images/references/ref_arco_azigo_vcs.jpg', label: 'Sistema ázigo — arco da ázigo e VCS' },
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Sistema ázigo — arco e veias intercostais superiores' }
  ],
  105: [
    { src: 'images/references/ref_arco_azigo_vcs.jpg', label: 'Veia cava superior — dissecção de referência' },
    { src: 'images/references/ref_azigo_intercostais_superiores.png', label: 'Veia cava superior — visão anatômica posterior' }
  ]
};

const extraReferenceImages = {
  1: [
    { src: 'images/references/ref_extra_01_mediastino_aorta_lateral.jpg', label: 'Mediastino lateral — aorta torácica e vasos intercostais posteriores' },
    { src: 'images/references/ref_extra_02_aorta_posterior.jpg', label: 'Aorta torácica descendente — visão posterior e relações topográficas' },
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  2: [
    { src: 'images/references/ref_extra_01_mediastino_aorta_lateral.jpg', label: 'Mediastino lateral — aorta torácica e vasos intercostais posteriores' },
    { src: 'images/references/ref_extra_02_aorta_posterior.jpg', label: 'Aorta torácica descendente — visão posterior e relações topográficas' },
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  3: [
    { src: 'images/references/ref_extra_01_mediastino_aorta_lateral.jpg', label: 'Mediastino lateral — aorta torácica e vasos intercostais posteriores' },
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  4: [
    { src: 'images/references/ref_extra_01_mediastino_aorta_lateral.jpg', label: 'Mediastino lateral — aorta torácica e vasos intercostais posteriores' },
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  5: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
  ],
  6: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
  ],
  7: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  8: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  9: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  10: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
    { src: 'images/references/ref_extra_07_axila_arterias.jpg', label: 'Região axilar — artéria axilar, torácica superior, torácica lateral e subclávia' },
  ],
  11: [
    { src: 'images/references/ref_extra_07_axila_arterias.jpg', label: 'Região axilar — artéria axilar, torácica superior, torácica lateral e subclávia' },
  ],
  12: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
    { src: 'images/references/ref_extra_07_axila_arterias.jpg', label: 'Região axilar — artéria axilar, torácica superior, torácica lateral e subclávia' },
  ],
  13: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  14: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_07_axila_arterias.jpg', label: 'Região axilar — artéria axilar, torácica superior, torácica lateral e subclávia' },
  ],
  15: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  16: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  17: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  18: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
    { src: 'images/references/ref_extra_18_aorta_intercostais_costocervical.jpg', label: 'Aorta torácica e ramos — tronco costocervical, intercostal suprema, intercostais posteriores e subcostal' },
  ],
  19: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
  ],
  20: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
  ],
  21: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  22: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  24: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
  ],
  25: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
  ],
  26: [
    { src: 'images/references/ref_extra_06_arterias_torax_completo.jpg', label: 'Artérias do tórax — aorta, intercostais, tronco costocervical, torácica interna, musculofrênica e epigástrica superior' },
  ],
  27: [
    { src: 'images/references/ref_extra_03_veia_intercostal_posterior.jpg', label: 'Veia intercostal posterior no espaço intercostal — dissecção' },
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  28: [
    { src: 'images/references/ref_extra_03_veia_intercostal_posterior.jpg', label: 'Veia intercostal posterior no espaço intercostal — dissecção' },
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  29: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  30: [
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  31: [
    { src: 'images/references/ref_extra_04_art_intercostal_ramos.jpg', label: 'Artéria intercostal posterior — ramos dorsal, colateral e cutâneo lateral; anastomose anterior' },
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
  ],
  32: [
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
  ],
  33: [
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
  ],
  34: [
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
  ],
  35: [
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg', label: 'Parede posterior do tórax — ramo posterior de nervo torácico e feixe vasculonervoso intercostal' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  36: [
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
  ],
  44: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  45: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  46: [
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
  ],
  47: [
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
  ],
  48: [
    { src: 'images/references/ref_extra_09_nervos_peitorais.jpg', label: 'Nervos peitorais lateral e medial — dissecção' },
  ],
  49: [
    { src: 'images/references/ref_extra_09_nervos_peitorais.jpg', label: 'Nervos peitorais lateral e medial — dissecção' },
  ],
  50: [
    { src: 'images/references/ref_extra_08_nervo_toracico_longo.jpg', label: 'Nervo torácico longo sobre o músculo serrátil anterior' },
  ],
  51: [
    { src: 'images/references/ref_extra_03_veia_intercostal_posterior.jpg', label: 'Veia intercostal posterior no espaço intercostal — dissecção' },
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
  ],
  52: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  53: [
    { src: 'images/references/ref_extra_03_veia_intercostal_posterior.jpg', label: 'Veia intercostal posterior no espaço intercostal — dissecção' },
    { src: 'images/references/ref_extra_10_nervos_intercostais_subcostal.jpg', label: 'Espaço intercostal — nervo intercostal (ramo anterior torácico), ramo colateral, artéria e veia; nervo subcostal' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
  ],
  54: [
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  55: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
  ],
  56: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  57: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  58: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  59: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  60: [
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  64: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  65: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  66: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  67: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  68: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  69: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  72: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  73: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  74: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  75: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  76: [
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  77: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  78: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  79: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  80: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  81: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  82: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  83: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  84: [
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  85: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_16_mediastino_posterior_direito.jpg', label: 'Mediastino posterior direito — ázigo, veia intercostal, artéria intercostal, nervo intercostal e ramos comunicantes' },
  ],
  86: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
  ],
  87: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  88: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  91: [
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  92: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  93: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  94: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  96: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  98: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  99: [
    { src: 'images/references/ref_extra_05_mama_vascularizacao.jpg', label: 'Vascularização da mama e parede torácica — artérias e veias torácicas internas/intercostais' },
  ],
  100: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
  ],
  101: [
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  102: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  103: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  104: [
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_14_sistema_azigo_injetado.jpg', label: 'Sistema ázigo e vasos intercostais injetados — relações e comunicações' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
  105: [
    { src: 'images/references/ref_extra_11_ramos_comunicantes_azigo.jpg', label: 'Mediastino posterior — nervo intercostal, ramos comunicantes, veia ázigo e veia cava superior' },
    { src: 'images/references/ref_extra_13_sistema_azigo_posterior.jpg', label: 'Vista posterior — aorta, vasos intercostais e sistema ázigo/veias braquiocefálicas' },
    { src: 'images/references/ref_extra_15_sistema_azigo_esquema.jpg', label: 'Sistema ázigo — veias lombares ascendentes, subcostais, hemiázigo, hemiázigo acessória e veias braquiocefálicas' },
    { src: 'images/references/ref_extra_17_intercostais_bronquiais_veias.jpg', label: 'Vasos intercostais superiores e veias bronquiais — relações com aorta, ázigo, hemiázigo e VCS' },
  ],
};

let seq = 1;
const groups = rawGroups.map(group => ({
  ...group,
  items: group.items.map(([prefix, name, level]) => ({
    id: `structure-${seq}`,
    imageNumber: seq++,
    prefix,
    name,
    level,
    group: group.id,
    defaultImage: `images/${seq - 1}.png`,
    referenceImages: [...(builtInReferenceImages[seq - 1] || []), ...(extraReferenceImages[seq - 1] || [])]
  }))
}));

const allItems = groups.flatMap(g => g.items);
const state = {
  filterGroup: 'ALL',
  search: '',
  hidden: new Set(JSON.parse(localStorage.getItem('thorax-hidden-images') || '[]')),
  uploads: new Map(),
  zoom: 1,
  deferredPrompt: null
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const content = $('#content');
const emptyState = $('#emptyState');
const searchInput = $('#searchInput');
const includeHiddenInPdf = $('#includeHiddenInPdf');
const toast = $('#toast');

const referencedCount = allItems.filter(item => item.referenceImages.length > 0).length;
$('#structureCount').textContent = `${allItems.length} estruturas • ${referencedCount} com referência`;

function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

function persistHidden() {
  localStorage.setItem('thorax-hidden-images', JSON.stringify([...state.hidden]));
}

function cardMatches(item) {
  const groupOk = state.filterGroup === 'ALL' || item.group === state.filterGroup;
  const query = normalizeText(state.search.trim());
  const searchOk = !query || normalizeText(`${item.prefix} ${item.name}`).includes(query);
  return groupOk && searchOk;
}

function escapeHTML(text) {
  return String(text).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

function render() {
  const sections = [];
  let any = false;

  for (const group of groups) {
    if (state.filterGroup !== 'ALL' && state.filterGroup !== group.id) continue;
    const items = group.items.filter(cardMatches);
    if (!items.length) continue;
    any = true;

    sections.push(`
      <section class="group-section" data-group-section="${group.id}">
        <div class="group-heading">
          <div>
            <h2>${escapeHTML(group.title)}</h2>
            <p>${escapeHTML(group.subtitle)}</p>
          </div>
          <span class="group-count">${items.length} ${items.length === 1 ? 'item' : 'itens'}</span>
        </div>
        <div class="structure-list">
          ${items.map(renderCard).join('')}
        </div>
      </section>
    `);
  }

  content.innerHTML = sections.join('');
  emptyState.hidden = any;
  bindRenderedEvents();
  hydrateAllGalleries();
}

function renderCard(item) {
  const hidden = state.hidden.has(item.id);
  const prefix = item.prefix || '•';
  return `
    <article class="structure-card" data-item-id="${item.id}" style="--level:${item.level}">
      <div class="structure-header">
        <div class="hierarchy-badge" title="Hierarquia">${escapeHTML(prefix)}</div>
        <button class="structure-title structure-title-btn" type="button" data-toggle-images aria-label="Abrir ou ocultar imagens de ${escapeHTML(item.name)}">
          <h3>${escapeHTML(item.name)}</h3>
          <div class="structure-meta">
            <span>${item.group}</span>
            <span>imagem ${item.imageNumber}.png</span>
            <span data-upload-count>${item.referenceImages.length ? `${item.referenceImages.length} ref. • ` : ''}0 anexos</span>
          </div>
        </button>
        <button class="toggle-card" type="button" data-toggle-images aria-label="${hidden ? 'Mostrar' : 'Ocultar'} imagens" title="${hidden ? 'Mostrar' : 'Ocultar'} imagens">
          ${hidden ? '◉' : '◌'}
        </button>
      </div>
      <div class="image-panel" ${hidden ? 'hidden' : ''}>
        <div class="gallery" data-gallery></div>
        <div class="card-actions">
          <label class="soft-btn primary compact">
            Anexar imagens
            <input class="file-input" data-file-input type="file" accept="image/*" multiple />
          </label>
          <button class="soft-btn secondary compact" type="button" data-zoom-first>Zoom</button>
          <button class="soft-btn secondary compact" type="button" data-toggle-images>${hidden ? 'Mostrar imagem' : 'Ocultar imagem'}</button>
        </div>
      </div>
    </article>
  `;
}

function itemById(id) {
  return allItems.find(i => i.id === id);
}

function bindRenderedEvents() {
  $$('.structure-card').forEach(card => {
    bindCardTilt(card);
    const itemId = card.dataset.itemId;
    $$('[data-toggle-images]', card).forEach(btn => btn.addEventListener('click', () => toggleImages(itemId)));
    const input = $('[data-file-input]', card);
    input?.addEventListener('change', async e => {
      const files = [...e.target.files];
      if (!files.length) return;
      await addUploads(itemId, files);
      e.target.value = '';
    });
    $('[data-zoom-first]', card)?.addEventListener('click', () => openFirstZoom(itemId));
  });
}

function bindCardTilt(card) {
  // Efeito 3D suave no desktop; em toque o CSS desativa para manter usabilidade.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  let raf = 0;
  card.addEventListener('pointermove', ev => {
    const r = card.getBoundingClientRect();
    const x = (ev.clientX - r.left) / r.width;
    const y = (ev.clientY - r.top) / r.height;
    const ry = (x - .5) * 5.5;
    const rx = (.5 - y) * 4.5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
  });
  card.addEventListener('pointerleave', () => {
    cancelAnimationFrame(raf);
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '0%');
  });
}

function toggleImages(itemId) {
  if (state.hidden.has(itemId)) state.hidden.delete(itemId);
  else state.hidden.add(itemId);
  persistHidden();
  render();
}

async function hydrateAllGalleries() {
  const cards = $$('.structure-card');
  await Promise.all(cards.map(async card => {
    const item = itemById(card.dataset.itemId);
    if (!item) return;
    const uploads = await dbGetUploads(item.id);
    state.uploads.set(item.id, uploads);
    renderGallery(card, item, uploads);
  }));
}

function renderGallery(card, item, uploads) {
  const gallery = $('[data-gallery]', card);
  const count = $('[data-upload-count]', card);
  if (!gallery) return;
  const references = item.referenceImages || [];
  const refLabel = references.length ? `${references.length} ${references.length === 1 ? 'ref.' : 'refs.'} • ` : '';
  count.textContent = `${refLabel}${uploads.length} ${uploads.length === 1 ? 'anexo' : 'anexos'}`;
  gallery.innerHTML = '';

  const defaultTile = document.createElement('div');
  defaultTile.className = 'image-tile';
  defaultTile.innerHTML = `
    <img src="${item.defaultImage}" alt="${escapeHTML(item.name)} — imagem ${item.imageNumber}.png" loading="lazy" data-source-kind="default" />
    <span class="image-tag">${item.imageNumber}.png</span>
  `;
  const defaultImg = $('img', defaultTile);
  defaultImg.addEventListener('click', () => openZoom(defaultImg.src, item.name, 1, 1 + references.length + uploads.length));
  defaultImg.addEventListener('error', () => {
    if (references.length) {
      defaultTile.remove();
      return;
    }
    defaultTile.innerHTML = `
      <div class="missing-image">
        <div><strong>${item.imageNumber}.png</strong>Adicione este arquivo na pasta <code>images/</code>.</div>
      </div>
      <span class="image-tag">imagem padrão</span>
    `;
  }, {once:true});
  gallery.appendChild(defaultTile);

  references.forEach((ref, idx) => {
    const tile = document.createElement('div');
    tile.className = 'image-tile reference-tile';
    tile.innerHTML = `
      <img src="${ref.src}" alt="${escapeHTML(ref.label)} — ${escapeHTML(item.name)}" loading="lazy" data-source-kind="reference" />
      <span class="image-tag">referência ${idx + 1}</span>
      <span class="reference-caption">${escapeHTML(ref.label)}</span>
    `;
    const img = $('img', tile);
    img.addEventListener('click', () => openZoom(img.src, `${item.name} — ${ref.label}`, idx + 2, 1 + references.length + uploads.length));
    gallery.appendChild(tile);
  });

  uploads.forEach((upload, idx) => {
    const tile = document.createElement('div');
    tile.className = 'image-tile';
    tile.innerHTML = `
      <img src="${upload.dataUrl}" alt="Imagem anexada — ${escapeHTML(item.name)}" loading="lazy" data-source-kind="upload" />
      <span class="image-tag">anexo ${idx + 1}</span>
      <button class="image-delete" type="button" aria-label="Excluir imagem anexada" title="Excluir imagem">×</button>
    `;
    const img = $('img', tile);
    img.addEventListener('click', () => openZoom(img.src, item.name, idx + 2 + references.length, 1 + references.length + uploads.length));
    $('.image-delete', tile).addEventListener('click', async ev => {
      ev.stopPropagation();
      await dbDeleteUpload(upload.key);
      showToast('Imagem anexada removida.');
      const refreshed = await dbGetUploads(item.id);
      state.uploads.set(item.id, refreshed);
      renderGallery(card, item, refreshed);
    });
    gallery.appendChild(tile);
  });
}

async function addUploads(itemId, files) {
  const valid = files.filter(f => f.type.startsWith('image/'));
  if (!valid.length) {
    showToast('Selecione arquivos de imagem.');
    return;
  }
  showToast(`Processando ${valid.length} ${valid.length === 1 ? 'imagem' : 'imagens'}…`);
  for (const file of valid) {
    const dataUrl = await compressImage(file, 1800, 0.84);
    await dbAddUpload({
      itemId,
      name: file.name,
      createdAt: Date.now(),
      dataUrl
    });
  }
  const uploads = await dbGetUploads(itemId);
  state.uploads.set(itemId, uploads);
  const card = $(`.structure-card[data-item-id="${itemId}"]`);
  if (card) renderGallery(card, itemById(itemId), uploads);
  showToast(`${valid.length} ${valid.length === 1 ? 'imagem anexada' : 'imagens anexadas'}.`);
}

function compressImage(file, maxDimension = 1800, quality = .84) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxDimension / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// -------------------- IndexedDB --------------------
const DB_NAME = 'thorax-practical-pwa';
const DB_VERSION = 1;
const STORE = 'uploads';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'key', autoIncrement: true });
        store.createIndex('itemId', 'itemId', { unique: false });
      }
    };
  });
}

async function dbAddUpload(record) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).add(record);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function dbGetUploads(itemId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const idx = tx.objectStore(STORE).index('itemId');
    const req = idx.getAll(IDBKeyRange.only(itemId));
    req.onsuccess = () => resolve(req.result.sort((a,b) => a.createdAt - b.createdAt));
    req.onerror = () => reject(req.error);
  });
}

async function dbDeleteUpload(key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

// -------------------- Zoom --------------------
const zoomModal = $('#zoomModal');
const zoomImage = $('#zoomImage');
const zoomRange = $('#zoomRange');
const zoomTitle = $('#zoomTitle');
const zoomCounter = $('#zoomCounter');

function openFirstZoom(itemId) {
  const card = $(`.structure-card[data-item-id="${itemId}"]`);
  const img = card?.querySelector('.gallery img');
  if (!img) {
    showToast('Nenhuma imagem disponível para ampliar.');
    return;
  }
  const item = itemById(itemId);
  const total = card.querySelectorAll('.gallery img').length;
  openZoom(img.src, item.name, 1, total);
}

function openZoom(src, title, index = 1, total = 1) {
  zoomImage.src = src;
  zoomTitle.textContent = title;
  zoomCounter.textContent = `Imagem ${index} de ${total}`;
  state.zoom = 1;
  zoomRange.value = 1;
  applyZoom();
  zoomModal.classList.add('open');
  zoomModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeZoom() {
  zoomModal.classList.remove('open');
  zoomModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function applyZoom() { zoomImage.style.transform = `scale(${state.zoom})`; }
function setZoom(value) {
  state.zoom = Math.min(4, Math.max(1, Number(value)));
  zoomRange.value = state.zoom;
  applyZoom();
}
$('#zoomClose').addEventListener('click', closeZoom);
$('#zoomIn').addEventListener('click', () => setZoom(state.zoom + .25));
$('#zoomOut').addEventListener('click', () => setZoom(state.zoom - .25));
$('#zoomReset').addEventListener('click', () => setZoom(1));
zoomRange.addEventListener('input', e => setZoom(e.target.value));
$('#zoomStage').addEventListener('wheel', e => {
  e.preventDefault();
  setZoom(state.zoom + (e.deltaY < 0 ? .18 : -.18));
}, { passive: false });
zoomImage.addEventListener('dblclick', () => setZoom(state.zoom === 1 ? 2 : 1));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && zoomModal.classList.contains('open')) closeZoom();
});

// -------------------- PDF --------------------
$('#pdfBtn').addEventListener('click', generatePdf);

async function generatePdf() {
  document.body.classList.add('pdf-busy');
  try {
    if (!window.jspdf?.jsPDF) {
      document.body.classList.remove('pdf-busy');
      showToast('Biblioteca de PDF indisponível. Abrindo impressão…');
      setTimeout(() => window.print(), 250);
      return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    const pageW = 210, pageH = 297, margin = 13;
    const contentW = pageW - margin * 2;
    let y = 14;

    const addPageIfNeeded = (needed = 12) => {
      if (y + needed > pageH - 15) {
        pdf.addPage();
        y = 14;
      }
    };

    pdf.setTextColor(14, 38, 64);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.text('ROTEIRO PRÁTICO — ANATOMIA TOPOGRÁFICA DO TÓRAX', margin, y, { maxWidth: contentW });
    y += 14;
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(80, 95, 110);
    pdf.text(`Gerado em ${new Date().toLocaleString('pt-BR')}`, margin, y);
    y += 8;

    for (const group of groups) {
      const groupItems = group.items.filter(cardMatches);
      if (!groupItems.length) continue;
      addPageIfNeeded(14);
      pdf.setTextColor(12, 48, 78);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.text(group.title, margin, y);
      y += 7;

      for (const item of groupItems) {
        const includeImages = includeHiddenInPdf.checked || !state.hidden.has(item.id);
        const indent = item.level * 5;
        const prefix = item.prefix ? `${item.prefix} ` : '';
        const text = `${prefix}${item.name}`;
        pdf.setFont('helvetica', item.level === 0 ? 'bold' : 'normal');
        pdf.setFontSize(item.level === 0 ? 10.5 : 9.4);
        pdf.setTextColor(30, 42, 54);
        const lines = pdf.splitTextToSize(text, contentW - indent);
        addPageIfNeeded(lines.length * 5 + (includeImages ? 48 : 3));
        pdf.text(lines, margin + indent, y);
        y += lines.length * 5 + 1.5;

        if (includeImages) {
          const imageSources = [];
          const defaultData = await loadImageAsDataUrl(item.defaultImage).catch(() => null);
          if (defaultData) imageSources.push({ src: defaultData, label: `${item.imageNumber}.png` });
          for (const ref of (item.referenceImages || [])) {
            const refData = await loadImageAsDataUrl(ref.src).catch(() => null);
            if (refData) imageSources.push({ src: refData, label: `referência — ${ref.label}` });
          }
          const uploads = state.uploads.get(item.id) || await dbGetUploads(item.id);
          uploads.forEach((u, idx) => imageSources.push({ src: u.dataUrl, label: `anexo ${idx + 1}` }));

          if (imageSources.length) {
            for (const image of imageSources) {
              const dims = await fitImageForPdf(image.src, 84, 52).catch(() => null);
              if (!dims) continue;
              addPageIfNeeded(dims.h + 8);
              pdf.setFont('helvetica', 'normal');
              pdf.setFontSize(7.5);
              pdf.setTextColor(105, 115, 125);
              pdf.text(image.label, margin + indent, y + 2.5);
              y += 4;
              pdf.addImage(dims.dataUrl, 'JPEG', margin + indent, y, dims.w, dims.h, undefined, 'FAST');
              y += dims.h + 5;
            }
          }
        }
        y += 2;
      }
      y += 4;
    }

    const pages = pdf.getNumberOfPages();
    for (let p = 1; p <= pages; p++) {
      pdf.setPage(p);
      pdf.setFontSize(8);
      pdf.setTextColor(135, 145, 155);
      pdf.text(`Página ${p} de ${pages}`, pageW - margin, pageH - 7, { align: 'right' });
    }

    pdf.save('roteiro-pratico-anatomia-topografica-torax.pdf');
    showToast('PDF gerado com sucesso.');
  } catch (err) {
    console.error(err);
    showToast('Não foi possível gerar o PDF. Abrindo impressão como alternativa.');
    setTimeout(() => window.print(), 350);
  } finally {
    document.body.classList.remove('pdf-busy');
  }
}

function loadImageAsDataUrl(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const max = 1200;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL('image/jpeg', .78));
      } catch (e) { reject(e); }
    };
    img.onerror = reject;
    img.src = src;
  });
}

function fitImageForPdf(dataUrl, maxW, maxH) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const ratio = Math.min(maxW / img.width, maxH / img.height);
      resolve({ dataUrl, w: img.width * ratio, h: img.height * ratio });
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

// -------------------- Filters & global controls --------------------
searchInput.addEventListener('input', e => {
  state.search = e.target.value;
  render();
});

$$('.group-tab').forEach(btn => btn.addEventListener('click', () => {
  state.filterGroup = btn.dataset.group;
  $$('.group-tab').forEach(b => b.classList.toggle('active', b === btn));
  render();
}));

$('#hideAllBtn').addEventListener('click', () => {
  allItems.forEach(item => state.hidden.add(item.id));
  persistHidden();
  render();
  showToast('Todas as imagens foram ocultadas.');
});

$('#showAllBtn').addEventListener('click', () => {
  state.hidden.clear();
  persistHidden();
  render();
  showToast('Todas as imagens foram exibidas.');
});

// -------------------- PWA install --------------------
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  state.deferredPrompt = e;
  $('#installBtn').hidden = false;
});

$('#installBtn').addEventListener('click', async () => {
  if (!state.deferredPrompt) return;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
  $('#installBtn').hidden = true;
});

window.addEventListener('appinstalled', () => showToast('App instalado com sucesso.'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.warn('SW:', err));
  });
}

render();
