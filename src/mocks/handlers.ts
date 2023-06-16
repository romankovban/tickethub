import { rest } from 'msw';

export const handlers = [
  rest.get('/events', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Black Sabbath Cordoba',
          thumb: 'https://cdn.boletius.com/blacksabbath/cordoba.jpg',
          venue: {
            id: 1,
            name: 'DirecTV Arena',
          },
        },
        {
          id: 2,
          name: 'EXPULSADOS',
          thumb:
            'https://cdn.boletius.com/images/mts/thumbs/640-expulsados.jpg',
          venue: {
            id: 2,
            name: 'Teatro Vorterix',
          },
        },
        {
          id: 3,
          name: 'CICLO SONANDO: NEVER TAXI - GRAMONAUTAS - CIEGO EQUILIBRISTA',
          thumb:
            'https://cdn.boletius.com/images/mts/thumbs/640-rocksonando.jpg',
          venue: {
            id: 3,
            name: 'Anfiteatro Puerto Plata',
          },
        },
        {
          id: 4,
          name: 'LA ROXTAR VORTERIX - MARILINA BERTOLDI',
          thumb:
            'https://cdn.boletius.com/images/mts/thumbs/roxtar-2212-640x640.jpg',
          venue: {
            id: 4,
            name: 'Club Cultural Lima de Chorrillos',
          },
        },
        {
          id: 5,
          name: 'Rancid',
          thumb:
            'https://cdn.boletius.com/images/1487618253449-test-pos-ran-640x640.jpg',
          venue: {
            id: 1,
            name: 'DirecTV Arena',
          },
        },
        {
          id: 6,
          name: 'Los Gardelitos - Gardeliando',
          thumb:
            'https://cdn.boletius.com/images/1483969214648-test-pos-fecha_13.jpg',
          venue: {
            id: 2,
            name: 'Teatro Vorterix',
          },
        },
        {
          id: 7,
          name: 'PAUL GILBERT - 6 de Febrero',
          thumb:
            'https://cdn.boletius.com/images/1484082927339-test-pos-allaccess_640x640.jpg',
          venue: {
            id: 3,
            name: 'Anfiteatro Puerto Plata',
          },
        },
        {
          id: 8,
          name: 'LA ROXTAR SHOWS - MOSES MURPHY (UK) - APRIL MAY JUNE',
          thumb:
            'https://cdn.boletius.com/images/1485544122713-test-pos-allaccess_roxtar_small-min.jpg',
          venue: {
            id: 4,
            name: 'Club Cultural Lima de Chorrillos',
          },
        },
        {
          id: 9,
          name: 'THE DEAD DAISIES',
          thumb:
            'https://cdn.boletius.com/images/1487257772076-test-pos-the-dead-daisies--640x640-rosario-min.jpg',
          venue: {
            id: 1,
            name: 'DirecTV Arena',
          },
        },
        {
          id: 10,
          name: 'AIRBAG - Libertad',
          thumb:
            'https://cdn.boletius.com/images/1488569407500-test-pos-airbag--640x640-30-jun_(1)-min.jpg',
          venue: {
            id: 2,
            name: 'Teatro Vorterix',
          },
        },
      ])
    );
  }),
];
