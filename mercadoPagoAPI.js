require('dotenv').config();
const { MercadoPagoConfig, Preference } = require('mercadopago');

module.exports = async function gerarLinkDePagamento() {
    const client = new MercadoPagoConfig({
        accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    });

    const preference = new Preference(client);

    const body = {
        items:[
            {
                id:'1',
                title:'vip gold',
                currency_id: 'BRL',
                quantity: 1,
                unit_price: 20,
            },
        ],
        back_urls: {
            success: 'http://localhost:3000/confirmada',
            failure: 'http://localhost:3000/cancelada',
            pending: 'http://localhost:3000/cancelada',
        }
    };

    let result = "x";

    await preference.create({ body })
        .then(response => {
            result = response.init_point
        })
        .catch(error => {
            console.log(error)
            result = '/cancelada'
        });

    return result
}
