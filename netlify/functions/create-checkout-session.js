/**
 * netlify/functions/create-checkout-session.js
 *
 * Recebe { productName, qty, nome, telefone, endereco } do site,
 * recalcula o preço no SERVIDOR (nunca confia no total vindo do navegador) usando
 * a mesma lógica de calcTotal() do app.js, e cria uma Stripe Checkout Session
 * para pagamento com cartão. Retorna { url } para o navegador redirecionar.
 *
 * Variáveis de ambiente necessárias no Netlify (Site settings > Environment variables):
 *   STRIPE_SECRET_KEY  -> sua chave secreta do Stripe (sk_test_... em teste, sk_live_... em produção)
 *   SITE_URL           -> ex: https://portal-das-plaquinhas.netlify.app  (opcional, tem fallback abaixo)
 */

const Stripe = require('stripe');
// Não inicializa o Stripe com uma chave vazia (isso derrubava a function inteira
// com um erro cru "Neither apiKey nor config.authenticator provided").
const stripe = process.env.STRIPE_SECRET_KEY ? Stripe(process.env.STRIPE_SECRET_KEY) : null;

// Mesmos valores de PRICE_ONE / PRICE_THREE do app.js, em centavos.
const PRICE_ONE_CENTS = 3990;
const PRICE_THREE_CENTS = 9990;
// SITE_URL: usa a variável definida manualmente se existir; senão usa a URL
// que o próprio Netlify injeta automaticamente em toda function (process.env.URL),
// que sempre aponta pro domínio real do site publicado.
const SITE_URL = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL;

/** Réplica exata de calcTotal() do app.js, mas em centavos e no servidor. */
function calcTotalCents(qty) {
  const packs = Math.floor(qty / 3);
  const rest = qty % 3;
  return packs * PRICE_THREE_CENTS + rest * PRICE_ONE_CENTS;
}

function sanitize(str, max) {
  return String(str || '')
    .replace(/[\r\n\t]/g, ' ')
    .slice(0, max)
    .trim();
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Método não permitido.' }) };
  }

  if (!stripe) {
    console.error('STRIPE_SECRET_KEY não está configurada nas variáveis de ambiente do Netlify.');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Pagamento com cartão não configurado no servidor (chave do Stripe ausente).' })
    };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'JSON inválido.' }) };
  }

  const qty = parseInt(data.qty, 10);
  const productName = sanitize(data.productName, 120) || 'Quadro personalizado';
  const nome = sanitize(data.nome, 120);
  const telefone = sanitize(data.telefone, 40);
  const endereco = sanitize(data.endereco, 300);

  if (!qty || qty < 1 || qty > 500) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Quantidade inválida.' }) };
  }
  if (!nome || !telefone || !endereco) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Preencha nome, telefone e endereço.' }) };
  }

  const amountCents = calcTotalCents(qty);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      locale: 'pt-BR',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'brl',
            unit_amount: amountCents,
            product_data: {
              name: `${productName} — ${qty} un.`
            }
          }
        }
      ],
      metadata: {
        nome,
        telefone,
        endereco,
        qty: String(qty),
        product_name: productName
      },
      shipping_address_collection: { allowed_countries: ['BR'] },
      success_url: `${SITE_URL}/?pedido=sucesso&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/?pedido=cancelado`
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url })
    };
  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Não foi possível iniciar o pagamento. Tente novamente.' })
    };
  }
};
