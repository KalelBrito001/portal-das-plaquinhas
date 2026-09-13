/**
 * ============================================================
 * Portal das Plaquinhas — LOJA
 *
 * Edite PRODUCTS abaixo para mudar nome, foto, estoque etc.
 * Preço: 1 por R$ 39,90  |  3 por R$ 99,90
 * ============================================================
 */

const PIX_KEY = '68961356000125'; // CNPJ / chave Pix
const CONTACT_EMAIL = 'contato@portaldasplaquinhas.com';

const PRICE_ONE = 39.9;
const PRICE_THREE = 99.9;

const PRODUCTS = [
  // Pokémon
  {
    id: 'q1',
    name: 'Quadro Mimikyu',
    desc: 'Carta Pokémon Mimikyu emoldurada / blindada.',
    category: 'pokemon',
    stock: 20,
    active: true,
    icon: '👻',
    image: 'fotos/mimikyu.jfif'
  },
  {
    id: 'q2',
    name: 'Quadro Mega Charizard X ex',
    desc: 'Carta Mega Charizard X ex emoldurada / blindada.',
    category: 'pokemon',
    stock: 20,
    active: true,
    icon: '🔥',
    image: 'fotos/charizard.jfif'
  },
  // Games
  {
    id: 'q3',
    name: 'Quadro GTA V',
    desc: 'Poster GTA V emoldurado / blindado.',
    category: 'games',
    stock: 20,
    active: true,
    icon: '🎮',
    image: 'fotos/gta.jfif'
  },
  {
    id: 'q4',
    name: 'Quadro Hollow Knight',
    desc: 'Arte luminosa Hollow Knight. Ideal para setup gamer.',
    category: 'games',
    stock: 15,
    active: true,
    icon: '🗡️',
    image: 'fotos/hollow-knight.jfif'
  },
  {
    id: 'q5',
    name: 'Quadro Não Perturbe — Gamer Jogando',
    desc: 'Placa pixel art neon verde. Perfeita para o quarto gamer.',
    category: 'games',
    stock: 15,
    active: true,
    icon: '🕹️',
    image: 'fotos/gamer-nao-perturbe.jfif'
  },
  // Animes
  {
    id: 'q6',
    name: 'Quadro Luffy Wanted (One Piece)',
    desc: 'Cartaz de procura One Piece em estilo neon.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🏴‍☠️',
    image: 'fotos/luffy-wanted.jfif'
  },
  {
    id: 'q7',
    name: 'Quadro Yugi (Yu-Gi-Oh!)',
    desc: 'Yami Yugi com as cartas. Arte neon.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🃏',
    image: 'fotos/yugioh.jfif'
  },
  {
    id: 'q8',
    name: 'Quadro Spike Spiegel (Cowboy Bebop)',
    desc: 'Spike Spiegel clássico. Arte emoldurada.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🚀',
    image: 'fotos/cowboy-bebop.jfif'
  },
  {
    id: 'q9',
    name: 'Quadro Dorohedoro',
    desc: 'Caiman e Nikaido. Arte oficial do mangá/anime.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🐰',
    image: 'fotos/dorohedoro.jfif'
  },
  {
    id: 'q10',
    name: 'Quadro Nanami (Jujutsu Kaisen)',
    desc: 'Kento Nanami. Arte vibrante emoldurada.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '⚔️',
    image: 'fotos/nanami.jfif'
  },
  {
    id: 'q11',
    name: 'Quadro Jiraiya & Akatsuki',
    desc: 'Jiraiya diante da Akatsuki. Naruto Shippuden.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🍥',
    image: 'fotos/akatsuki-jiraiya.jfif'
  },
  {
    id: 'q12',
    name: 'Quadro Jiraiya Sennin',
    desc: 'Jiraiya com os sapos. Arte estilo poster.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🐸',
    image: 'fotos/jiraiya.jfif'
  },
  {
    id: 'q13',
    name: 'Quadro Itachi Uchiha',
    desc: 'Itachi e o corvo. Arte dark emoldurada.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '👁️',
    image: 'fotos/itachi.jfif'
  },
  {
    id: 'q14',
    name: 'Quadro Naruto no Balanço',
    desc: 'Naruto sozinho no balanço. Cena icônica.',
    category: 'anime',
    stock: 15,
    active: true,
    icon: '🌀',
    image: 'fotos/naruto-balanco.jfif'
  },
  // Cinema
  {
    id: 'q15',
    name: 'Quadro Lilo & Stitch',
    desc: 'Lilo e Stitch no pôr do sol. Arte aquarela.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🌺',
    image: 'fotos/lilo-stitch.jfif'
  },
  {
    id: 'c100',
    name: 'BABYMETAL Death',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-01.jpg'
  },
  {
    id: 'c101',
    name: 'Novidades Agosto #2',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-02.jpg'
  },
  {
    id: 'c102',
    name: 'Novidades Agosto #3',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-03.jpg'
  },
  {
    id: 'c103',
    name: 'Novidades Agosto #4',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-04.jpg'
  },
  {
    id: 'c104',
    name: 'Novidades Agosto #5',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-05.jpg'
  },
  {
    id: 'c105',
    name: 'Novidades Agosto #6',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-06.jpg'
  },
  {
    id: 'c106',
    name: 'Novidades Agosto #7',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-07.jpg'
  },
  {
    id: 'c107',
    name: 'Novidades Agosto #8',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-08.jpg'
  },
  {
    id: 'c108',
    name: 'Novidades Agosto #9',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-09.jpg'
  },
  {
    id: 'c109',
    name: 'Novidades Agosto #10',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-10.jpg'
  },
  {
    id: 'c110',
    name: 'Novidades Agosto #11',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-11.jpg'
  },
  {
    id: 'c111',
    name: 'Novidades Agosto #12',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-12.jpg'
  },
  {
    id: 'c112',
    name: 'Novidades Agosto #13',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-13.jpg'
  },
  {
    id: 'c113',
    name: 'Novidades Agosto #14',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-14.jpg'
  },
  {
    id: 'c114',
    name: 'Novidades Agosto #15',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-15.jpg'
  },
  {
    id: 'c115',
    name: 'Novidades Agosto #16',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-16.jpg'
  },
  {
    id: 'c116',
    name: 'Novidades Agosto #17',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-17.jpg'
  },
  {
    id: 'c117',
    name: 'Novidades Agosto #18',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-18.jpg'
  },
  {
    id: 'c118',
    name: 'Novidades Agosto #19',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-19.jpg'
  },
  {
    id: 'c119',
    name: 'Novidades Agosto #20',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-20.jpg'
  },
  {
    id: 'c120',
    name: 'Novidades Agosto #21',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-21.jpg'
  },
  {
    id: 'c121',
    name: 'Novidades Agosto #22',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-22.jpg'
  },
  {
    id: 'c122',
    name: 'Novidades Agosto #23',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago1-23.jpg'
  },
  {
    id: 'c123',
    name: 'Batman clássico (pôster)',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-01.jpg'
  },
  {
    id: 'c124',
    name: 'Novidades Agosto #25',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-02.jpg'
  },
  {
    id: 'c125',
    name: 'Novidades Agosto #26',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-03.jpg'
  },
  {
    id: 'c126',
    name: 'Novidades Agosto #27',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-04.jpg'
  },
  {
    id: 'c127',
    name: 'Novidades Agosto #28',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-05.jpg'
  },
  {
    id: 'c128',
    name: 'Novidades Agosto #29',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-06.jpg'
  },
  {
    id: 'c129',
    name: 'Novidades Agosto #30',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-07.jpg'
  },
  {
    id: 'c130',
    name: 'Novidades Agosto #31',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-08.jpg'
  },
  {
    id: 'c131',
    name: 'Novidades Agosto #32',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-09.jpg'
  },
  {
    id: 'c132',
    name: 'Novidades Agosto #33',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-10.jpg'
  },
  {
    id: 'c133',
    name: 'Novidades Agosto #34',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-11.jpg'
  },
  {
    id: 'c134',
    name: 'Novidades Agosto #35',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-12.jpg'
  },
  {
    id: 'c135',
    name: 'Novidades Agosto #36',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-13.jpg'
  },
  {
    id: 'c136',
    name: 'Novidades Agosto #37',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-14.jpg'
  },
  {
    id: 'c137',
    name: 'Novidades Agosto #38',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-15.jpg'
  },
  {
    id: 'c138',
    name: 'Novidades Agosto #39',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-16.jpg'
  },
  {
    id: 'c139',
    name: 'Novidades Agosto #40',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-17.jpg'
  },
  {
    id: 'c140',
    name: 'Novidades Agosto #41',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-18.jpg'
  },
  {
    id: 'c141',
    name: 'Novidades Agosto #42',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-19.jpg'
  },
  {
    id: 'c142',
    name: 'Novidades Agosto #43',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-20.jpg'
  },
  {
    id: 'c143',
    name: 'Novidades Agosto #44',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-21.jpg'
  },
  {
    id: 'c144',
    name: 'Novidades Agosto #45',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago2-22.jpg'
  },
  {
    id: 'c145',
    name: 'Estrela vintage (arte P&B)',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-01.jpg'
  },
  {
    id: 'c146',
    name: 'Novidades Agosto #47',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-02.jpg'
  },
  {
    id: 'c147',
    name: 'Novidades Agosto #48',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-03.jpg'
  },
  {
    id: 'c148',
    name: 'Novidades Agosto #49',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-04.jpg'
  },
  {
    id: 'c149',
    name: 'Novidades Agosto #50',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-05.jpg'
  },
  {
    id: 'c150',
    name: 'Novidades Agosto #51',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-06.jpg'
  },
  {
    id: 'c151',
    name: 'Novidades Agosto #52',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-07.jpg'
  },
  {
    id: 'c152',
    name: 'Novidades Agosto #53',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-08.jpg'
  },
  {
    id: 'c153',
    name: 'Novidades Agosto #54',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-09.jpg'
  },
  {
    id: 'c154',
    name: 'Novidades Agosto #55',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-10.jpg'
  },
  {
    id: 'c155',
    name: 'Novidades Agosto #56',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-11.jpg'
  },
  {
    id: 'c156',
    name: 'Novidades Agosto #57',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-12.jpg'
  },
  {
    id: 'c157',
    name: 'Novidades Agosto #58',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-13.jpg'
  },
  {
    id: 'c158',
    name: 'Novidades Agosto #59',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-14.jpg'
  },
  {
    id: 'c159',
    name: 'Novidades Agosto #60',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-15.jpg'
  },
  {
    id: 'c160',
    name: 'Novidades Agosto #61',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-16.jpg'
  },
  {
    id: 'c161',
    name: 'Novidades Agosto #62',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-17.jpg'
  },
  {
    id: 'c162',
    name: 'Novidades Agosto #63',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-18.jpg'
  },
  {
    id: 'c163',
    name: 'Novidades Agosto #64',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-19.jpg'
  },
  {
    id: 'c164',
    name: 'Novidades Agosto #65',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'novidades',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ago3-20.jpg'
  },
  {
    id: 'c165',
    name: 'Ayrton Senna (capacete McLaren)',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'carros',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/carros-1.jpg'
  },
  {
    id: 'c166',
    name: 'Quadro Carros #2',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'carros',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/carros-2.jpg'
  },
  {
    id: 'c167',
    name: 'Quadro Carros #3',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'carros',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/carros-3.jpg'
  },
  {
    id: 'c168',
    name: 'Quadro Carros #4',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'carros',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/carros-4.jpg'
  },
  {
    id: 'c169',
    name: 'Quadro Carros #5',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'carros',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/carros-5.jpg'
  },
  {
    id: 'c170',
    name: 'Studio Ghibli — Oyasumi (Totoro e amigos)',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ghibli-1.jpg'
  },
  {
    id: 'c171',
    name: 'Studio Ghibli #2',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ghibli-2.jpg'
  },
  {
    id: 'c172',
    name: 'Studio Ghibli #3',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ghibli-3.jpg'
  },
  {
    id: 'c173',
    name: 'Studio Ghibli #4',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ghibli-4.jpg'
  },
  {
    id: 'c174',
    name: 'Studio Ghibli #5',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ghibli-5.jpg'
  },
  {
    id: 'c175',
    name: 'Studio Ghibli #6',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/ghibli-6.jpg'
  },
  {
    id: 'c176',
    name: 'Gato Noite Estrelada (estilo Van Gogh)',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-01.jpg'
  },
  {
    id: 'c177',
    name: 'Stitch & Fofinhos #2',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-02.jpg'
  },
  {
    id: 'c178',
    name: 'Stitch & Fofinhos #3',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-03.jpg'
  },
  {
    id: 'c179',
    name: 'Stitch & Fofinhos #4',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-04.jpg'
  },
  {
    id: 'c180',
    name: 'Stitch & Fofinhos #5',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-05.jpg'
  },
  {
    id: 'c181',
    name: 'Stitch & Fofinhos #6',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-06.jpg'
  },
  {
    id: 'c182',
    name: 'Stitch & Fofinhos #7',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-07.jpg'
  },
  {
    id: 'c183',
    name: 'Stitch & Fofinhos #8',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-08.jpg'
  },
  {
    id: 'c184',
    name: 'Stitch & Fofinhos #9',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-09.jpg'
  },
  {
    id: 'c185',
    name: 'Stitch & Fofinhos #10',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-10.jpg'
  },
  {
    id: 'c186',
    name: 'Stitch & Fofinhos #11',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-11.jpg'
  },
  {
    id: 'c187',
    name: 'Stitch & Fofinhos #12',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-12.jpg'
  },
  {
    id: 'c188',
    name: 'Stitch & Fofinhos #13',
    desc: 'Quadro impresso em alta qualidade, pronto para emoldurar ou já no estilo da loja.',
    category: 'cinema',
    stock: 15,
    active: true,
    icon: '🖼️',
    image: 'fotos/catalogo/stitch-13.jpg'
  }
];

const CATEGORIES = [
  { id: 'pokemon', label: 'Pokémon' },
  { id: 'games', label: 'Games' },
  { id: 'anime', label: 'Animes & Mangás' },
  { id: 'cinema', label: 'Cinema' },
  { id: 'carros', label: 'Carros & F1' },
  { id: 'novidades', label: 'Novidades' },
  { id: 'outros', label: 'Outros' }
];

let state = {
  products: PRODUCTS.map(p => ({ ...p })),
  buying: null
};

const money = v =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0);

/** Exibe a chave Pix formatada (CNPJ/CPF) quando for só dígitos; senão mostra como está. */
function formatPixKeyDisplay(key) {
  const digits = String(key || '').replace(/\D/g, '');
  if (digits.length === 14 && digits === key) {
    return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }
  if (digits.length === 11 && digits === key) {
    return digits.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }
  return key;
}

/** Total: pacotes de 3 a R$ 99,90 + unidades avulsas a R$ 39,90 */
function calcTotal(qty) {
  const packs = Math.floor(qty / 3);
  const rest = qty % 3;
  return packs * PRICE_THREE + rest * PRICE_ONE;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, m =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
  );
}
function escapeAttr(str) {
  return escapeHtml(str);
}

function render() {
  const app = document.getElementById('app');
  const active = state.products.filter(p => p.active);
  app.innerHTML = `
    <section class="hero-wall" aria-label="Destaque">
      <div class="hero-wall-bg" aria-hidden="true">
        ${active.map(p => p.image ? '<img src="' + escapeAttr(p.image) + '" alt="">' : '').join('')}
        ${active.map(p => p.image ? '<img src="' + escapeAttr(p.image) + '" alt="">' : '').join('')}
      </div>
      <div class="hero-wall-content">
        <div class="hero-badge">Portal das Plaquinhas</div>
        <h1>O Brilho que muda qualquer ambiente!</h1>
        <p>Quadros e cartas emoldurados. 1 por R$&nbsp;39,90 · 3 por R$&nbsp;99,90. Pagamento via Pix.</p>
      </div>
    </section>
    <nav class="cat-nav" aria-label="Categorias">
      ${CATEGORIES.filter(c => active.some(p => (p.category || 'outros') === c.id)).map(c =>
        `<a href="#cat-${c.id}">${escapeHtml(c.label)}</a>`
      ).join('')}
    </nav>
    ${renderCategorySections(active)}
  `;
  renderBuyModal();
}


function renderCategorySections(active) {
  if (!active.length) {
    return '<div class="empty-state">Nenhum quadro disponível no momento.</div>';
  }
  const byCat = {};
  active.forEach(p => {
    const c = p.category || 'outros';
    if (!byCat[c]) byCat[c] = [];
    byCat[c].push(p);
  });
  const order = CATEGORIES.filter(c => byCat[c.id] && byCat[c.id].length);
  // categorias não listadas
  Object.keys(byCat).forEach(id => {
    if (!order.find(c => c.id === id)) order.push({ id, label: id });
  });
  return order.map(c => `
    <div class="section-head" id="cat-${c.id}">
      <h2>/ ${escapeHtml(c.label)}</h2>
    </div>
    <div class="grid">
      ${byCat[c.id].map(productCard).join('')}
    </div>
  `).join('');
}

function productCard(p) {
  const out = p.stock <= 0;
  const low = !out && p.stock <= 3;
  const media = p.image
    ? `<div class="plaque-photo"><img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" loading="lazy"></div>`
    : `<div class="plaque-icon">${p.icon || '🏷️'}</div>`;
  return `
    <div class="plaque-card">
      <div class="peg"></div>
      ${media}
      <h3>${escapeHtml(p.name)}</h3>
      <p class="desc">${escapeHtml(p.desc || '')}</p>
      <div class="price-row">
        <span class="price-now">${money(PRICE_ONE)}</span>
        <span class="promo-tag">3 por ${money(PRICE_THREE)}</span>
      </div>
      <div class="stock-note ${out ? 'out' : low ? 'low' : ''}">
        ${out ? 'Esgotado' : low ? `Só ${p.stock} em estoque` : `${p.stock} em estoque`}
      </div>
      <button class="buy-btn" ${out ? 'disabled' : ''} onclick="openBuy('${p.id}')">
        ${out ? 'Indisponível' : 'Comprar com Pix'}
      </button>
    </div>
  `;
}

function openBuy(productId) {
  state.buying = {
    productId,
    step: 'form',
    qty: 1,
    nome: '',
    telefone: '',
    endereco: ''
  };
  document.getElementById('buy-overlay').classList.add('show');
  renderBuyModal();
}

function closeBuy() {
  document.getElementById('buy-overlay').classList.remove('show');
  state.buying = null;
}

function changeQty(delta) {
  const b = state.buying;
  if (!b) return;
  const product = state.products.find(p => p.id === b.productId);
  const next = b.qty + delta;
  if (next < 1) return;
  if (product && next > product.stock) {
    showToast('Quantidade acima do estoque disponível.');
    return;
  }
  b.qty = next;
  renderBuyModal();
}

function setQty(n) {
  const b = state.buying;
  if (!b) return;
  const product = state.products.find(p => p.id === b.productId);
  if (product && n > product.stock) {
    showToast('Quantidade acima do estoque disponível.');
    return;
  }
  if (n < 1) return;
  b.qty = n;
  renderBuyModal();
}

function setQtyFromInput(value) {
  const b = state.buying;
  if (!b) return;
  const product = state.products.find(p => p.id === b.productId);
  let n = parseInt(value, 10);
  if (isNaN(n) || n < 1) n = 1;
  if (product && n > product.stock) {
    n = product.stock;
    showToast('Quantidade acima do estoque disponível.');
  }
  b.qty = n;
  renderBuyModal();
}

function updateBuyField(field, value) {
  if (!state.buying) return;
  state.buying[field] = value;
}

function renderBuyModal() {
  const modal = document.getElementById('buy-modal');
  const b = state.buying;
  if (!b) {
    modal.innerHTML = '';
    return;
  }
  const product = state.products.find(p => p.id === b.productId);
  if (!product) {
    closeBuy();
    return;
  }
  const total = calcTotal(b.qty);

  if (b.step === 'form') {
    const modalPhoto = product.image
      ? `<div class="modal-photo"><img src="${escapeAttr(product.image)}" alt="${escapeAttr(product.name)}"></div>`
      : '';
    modal.innerHTML = `
      <button class="modal-close" onclick="closeBuy()" aria-label="Fechar">✕</button>
      ${modalPhoto}
      <h2>${escapeHtml(product.name)}</h2>
      <p class="sub">1 por ${money(PRICE_ONE)} · 3 por ${money(PRICE_THREE)} · ${product.stock} disponíveis</p>
      <div class="field">
        <label>Quantidade</label>
        <div class="qty-row">
          <button type="button" onclick="changeQty(-1)">–</button>
          <input type="number" class="qty-input" inputmode="numeric" min="1" max="${product.stock}" step="1" value="${b.qty}" onchange="setQtyFromInput(this.value)">
          <button type="button" onclick="changeQty(1)">+</button>
        </div>
        <p class="helper-note" style="margin:6px 0 0;">Digite a quantidade ou use os botões. Máx. ${product.stock} un. em estoque.</p>
        <div class="qty-presets">
          <button type="button" class="preset-btn ${b.qty === 1 ? 'on' : ''}" onclick="setQty(1)">1 un. — ${money(PRICE_ONE)}</button>
          <button type="button" class="preset-btn ${b.qty === 3 ? 'on' : ''}" onclick="setQty(3)">3 un. — ${money(PRICE_THREE)}</button>
        </div>
      </div>
      <div class="field">
        <label>Nome de quem recebe</label>
        <input type="text" value="${escapeAttr(b.nome)}" oninput="updateBuyField('nome', this.value)" placeholder="Seu nome completo">
      </div>
      <div class="field">
        <label>Telefone (WhatsApp)</label>
        <input type="text" value="${escapeAttr(b.telefone)}" oninput="updateBuyField('telefone', this.value)" placeholder="(00) 00000-0000">
      </div>
      <div class="field">
        <label>Endereço de entrega</label>
        <textarea oninput="updateBuyField('endereco', this.value)" placeholder="Rua, número, bairro, cidade, CEP">${escapeHtml(b.endereco)}</textarea>
      </div>
      <div class="summary-line"><span>Quantidade</span><span>${b.qty} un.</span></div>
      <div class="summary-line total"><span>Total no Pix</span><span>${money(total)}</span></div>
      ${b._error ? `<p class="error-text">${escapeHtml(b._error)}</p>` : ''}
      <button class="primary-btn" onclick="goToCardCheckout()" ${b._loadingCard ? 'disabled' : ''}>
        ${b._loadingCard ? 'Abrindo pagamento…' : 'Pagar com cartão'}
      </button>
      <button class="primary-btn" style="margin-top:10px;background:#333;" onclick="goToPix()" ${b._loadingCard ? 'disabled' : ''}>
        Pagar com Pix
      </button>
    `;
  } else if (b.step === 'pix') {
    modal.innerHTML = `
      <button class="modal-close" onclick="closeBuy()" aria-label="Fechar">✕</button>
      <h2>Pagamento por Pix</h2>
      <p class="sub">Pague <strong>${money(total)}</strong> usando a chave Pix abaixo.</p>
      <div class="pix-box">
        <p class="pix-label">Chave Pix (CNPJ)</p>
        <div class="pix-code" id="pix-key-text">${escapeHtml(formatPixKeyDisplay(PIX_KEY))}</div>
        <button class="copy-btn" type="button" onclick="copyPix()">Copiar chave Pix</button>
      </div>
      <p class="helper-note" style="margin-top:12px;">Tem alguma ideia ou sugestão? Manda pra gente: <strong>${CONTACT_EMAIL}</strong></p>
      <button class="primary-btn" style="margin-top:12px;background:linear-gradient(135deg,#334155,#1e293b);box-shadow:none;" onclick="confirmPayment()">Já paguei</button>
    `;
  } else if (b.step === 'success') {
    modal.innerHTML = `
      <button class="modal-close" onclick="closeBuy()" aria-label="Fechar">✕</button>
      <div style="text-align:center;">
        <div class="success-icon">✓</div>
        <h2>Pedido registrado!</h2>
        <p class="sub">Pedido <strong>${b.orderId}</strong> · ${money(total)}</p>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.6;margin-top:8px;">
          Vamos confirmar seu pagamento e sua placa entra em produção.
        </p>
        <button class="primary-btn" onclick="closeBuy()">Fechar</button>
      </div>
    `;
  }
}

function goToPix() {
  const b = state.buying;
  if (!b.nome.trim() || !b.telefone.trim() || !b.endereco.trim()) {
    b._error = 'Preencha nome, telefone e endereço para continuar.';
    renderBuyModal();
    return;
  }
  b._error = '';
  b.orderId = 'PL-' + Date.now().toString(36).toUpperCase();
  b.step = 'pix';
  renderBuyModal();
}

async function goToCardCheckout() {
  const b = state.buying;
  if (!b) return;
  if (!b.nome.trim() || !b.telefone.trim() || !b.endereco.trim()) {
    b._error = 'Preencha nome, telefone e endereço para continuar.';
    renderBuyModal();
    return;
  }
  const product = state.products.find(p => p.id === b.productId);
  if (!product) { closeBuy(); return; }

  b._error = '';
  b._loadingCard = true;
  renderBuyModal();

  try {
    const res = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productName: product.name,
        qty: b.qty,
        nome: b.nome,
        telefone: b.telefone,
        endereco: b.endereco
      })
    });

    let data = null;
    try {
      data = await res.json();
    } catch {
      // resposta não veio em JSON (ex: function ainda não publicada, retornou página de erro do Netlify)
    }

    if (!res.ok || !data || !data.url) {
      throw new Error((data && data.error) || 'server_unavailable');
    }
    window.location.href = data.url;
  } catch (err) {
    b._loadingCard = false;
    if (err instanceof TypeError) {
      // fetch nem chegou a completar: sem internet, ou a rota /.netlify/functions ainda não existe neste deploy
      b._error = 'Pagamento com cartão indisponível no momento. Tente novamente em alguns instantes ou use o Pix abaixo.';
    } else if (err.message === 'server_unavailable') {
      b._error = 'O pagamento com cartão ainda está sendo configurado. Por enquanto, use o Pix abaixo.';
    } else {
      b._error = err.message || 'Não foi possível iniciar o pagamento com cartão. Tente novamente ou use o Pix.';
    }
    renderBuyModal();
  }
}

function copyPix() {
  navigator.clipboard?.writeText(PIX_KEY)
    .then(() => showToast('Chave Pix copiada.'))
    .catch(() => showToast('Não foi possível copiar. Chave: ' + PIX_KEY));
}

function confirmPayment() {
  const b = state.buying;
  const product = state.products.find(p => p.id === b.productId);
  if (!product) {
    closeBuy();
    return;
  }
  if (b.qty > product.stock) {
    showToast('Estoque insuficiente.');
    b.step = 'form';
    renderBuyModal();
    return;
  }
  product.stock -= b.qty;
  b.step = 'success';
  render();
  showToast('Pedido registrado!');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.buying) closeBuy();
});

document.addEventListener('DOMContentLoaded', render);
