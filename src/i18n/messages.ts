export type Locale = 'en' | 'es' | 'pt'

export const LOCALES: Locale[] = ['en', 'es', 'pt']

export const HOME_PATH: Record<Locale, string> = {
  en: '/',
  es: '/es',
  pt: '/pt',
}

export const PRELAUNCH_PATH: Record<Locale, string> = {
  pt: '/prelancamento',
  en: '/pre-launch',
  es: '/prelanzamiento',
}

export function localeFromPath(pathname: string): Locale | null {
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
  if (path === '/' || path === '/en' || path === '/pre-launch') return 'en'
  if (path === '/es' || path === '/prelanzamiento') return 'es'
  if (path === '/pt' || path === '/prelancamento') return 'pt'
  return null
}

export function regionFromLocale(locale: Locale): string {
  if (locale === 'pt') return 'br'
  if (locale === 'es') return 'pe'
  return 'us'
}

export function defaultCountryCode(locale: Locale): '+55' | '+51' | '+1' {
  if (locale === 'pt') return '+55'
  if (locale === 'es') return '+51'
  return '+1'
}

type Messages = {
  nav: {
    prelaunch: string
  }
  footer: {
    copyright: string
    prelaunch: string
    poweredBy: string
  }
  countdown: {
    label: string
    days: string
    hours: string
    minutes: string
    seconds: string
    launched: string
  }
  share: {
    button: string
    text: string
    pageTitle: string
    copied: string
    copy: string
    whatsapp: string
  }
  home: {
    heroTitle: string
    heroBody: string
    heroCta: string
    heroNote: string
    heroPhoneAlt: string
    galleryTitle: string
    galleryBody: string
    shotList: string
    shotListAlt: string
    shotRecipes: string
    shotRecipesAlt: string
    shotDeals: string
    shotDealsAlt: string
    organizeTitle: string
    organizeBody1: string
    organizeBody2: string
    organizePhoneAlt: string
    recipesTitle: string
    recipesBody: string
    recipesEmphasisLead: string
    recipesEmphasis: string
    recipesPhoneAlt: string
    dealsTitle: string
    dealsBody1: string
    dealsBody2: string
    dealsPhoneAlt: string
    campaignsTitle: string
    campaignsBody: string
    campaignsEmphasis: string
    campaignsDisclaimer: string
    campaignsPhoneAlt: string
    freeTitle: string
    freeBodyLead: string
    freeBodyStrong: string
    freeBodyTrail: string
    freeBody2: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
  }
  prelaunch: {
    badge: string
    title: string
    description: string
    formTitle: string
    benefit1: string
    benefit2: string
    benefit3: string
    consentLaunchNotice: string
    consentPromoEmail: string
    consentPromoWhatsApp: string
    consentPromoSms: string
    consentChannelsNote: string
    submit: string
    loading: string
    successTitle: string
    successMessage: string
    backHome: string
    failed: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    phone: string
    countryCode: string
    countryBrazil: string
    countryPeru: string
    countryUs: string
    zipCode: string
    zipCodePlaceholder: string
    zipCodeRequired: string
  }
}

export const messages: Record<Locale, Messages> = {
  pt: {
    nav: { prelaunch: 'Pré-lançamento' },
    footer: {
      copyright: '© {year} SmartList.',
      prelaunch: 'Lista de pré-lançamento',
      poweredBy: 'Powered by Cart-Mile',
    },
    countdown: {
      label: 'Lançamento em 5 de dezembro',
      days: 'dias',
      hours: 'horas',
      minutes: 'min',
      seconds: 'seg',
      launched: 'É hoje. O SmartList está no ar.',
    },
    share: {
      button: 'Compartilhe com seus amigos',
      text: 'O SmartList chega em 5 de dezembro. Sua lista de compras inteligente, com receitas e ofertas. Entre na lista de pré-lançamento.',
      pageTitle: 'SmartList — Lista de compras inteligente',
      copied: 'Link copiado',
      copy: 'Copiar link',
      whatsapp: 'WhatsApp',
    },
    home: {
      heroTitle: 'Sua lista de compras inteligente. Mais praticidade e vantagens para você.',
      heroBody:
        'Com a SmartList, você organiza suas compras com inteligência artificial, descobre receitas e aproveita ofertas exclusivas nos estabelecimentos participantes.',
      heroCta: 'Entre na lista de pré-lançamento',
      heroNote: 'Grátis para começar, com 50 mil tokens de inteligência artificial por mês.',
      heroPhoneAlt: 'Tela inicial do SmartList.AI',
      galleryTitle: 'Conheça o aplicativo',
      galleryBody:
        'Telas reais do SmartList.AI: lista por categoria, receitas e promoções em uma experiência pensada para o celular.',
      shotList: 'Lista',
      shotListAlt: 'Lista de compras agrupada por categoria',
      shotRecipes: 'Receitas',
      shotRecipesAlt: 'Receita virando lista de compras',
      shotDeals: 'Promoções',
      shotDealsAlt: 'Promoções no SmartList.AI',
      organizeTitle: 'Você adiciona os produtos. A SmartList organiza.',
      organizeBody1:
        'Escreva o que precisa comprar e deixe a inteligência artificial separar tudo por categorias, como frutas, carnes, bebidas e limpeza.',
      organizeBody2: 'Sua lista fica organizada para facilitar suas compras e ajudar você a lembrar do que precisa.',
      organizePhoneAlt: 'Lista de compras agrupada por categoria',
      recipesTitle: 'Transforme ideias em receitas. E receitas em compras.',
      recipesBody:
        'Informe os produtos que tem em casa ou o prato que deseja preparar. A SmartList gera uma receita com os ingredientes e o passo a passo.',
      recipesEmphasisLead: 'Faltou algum ingrediente?',
      recipesEmphasis: 'Com um clique, os produtos da receita vão para sua lista de compras.',
      recipesPhoneAlt: 'Receita com ingredientes prontos para a lista',
      dealsTitle: 'Sua lista também abre portas para economizar.',
      dealsBody1: 'Aproveite ofertas exclusivas e promoções dos estabelecimentos participantes da rede SmartList.',
      dealsBody2: 'Mais oportunidades para economizar nos produtos que fazem parte do seu dia a dia.',
      dealsPhoneAlt: 'Tela de promoções do SmartList.AI',
      campaignsTitle: 'Participe e tenha a chance de ganhar.',
      campaignsBody:
        'Na rede SmartList, você também poderá se inscrever em campanhas, participar de sorteios e ter a chance de ganhar brindes.',
      campaignsEmphasis: 'Você escolhe as campanhas das quais quer participar.',
      campaignsDisclaimer: 'Ofertas, sorteios e brindes sujeitos à disponibilidade e às regras de cada campanha.',
      campaignsPhoneAlt: 'Participações em campanhas no SmartList.AI',
      freeTitle: 'Mais facilidade para sua rotina. Grátis para começar.',
      freeBodyLead: 'O plano gratuito inclui',
      freeBodyStrong: '50 mil tokens de inteligência artificial por mês',
      freeBodyTrail: 'para você organizar suas listas e gerar receitas.',
      freeBody2: 'Compras organizadas, inspiração na cozinha e vantagens para aproveitar em uma única plataforma.',
      ctaTitle: 'Sua próxima compra começa com uma lista mais inteligente.',
      ctaBody: 'A SmartList está chegando. Entre na lista de pré-lançamento e seja avisado quando estiver disponível.',
      ctaButton: 'Quero fazer parte da SmartList',
    },
    prelaunch: {
      badge: 'Em breve',
      title: 'Seja um dos primeiros a conhecer o SmartList!',
      description:
        'Estamos preparando uma forma mais inteligente de organizar suas compras e descobrir ofertas de supermercados. Cadastre-se para receber notícias do lançamento e saber quando estará disponível na sua região.',
      formTitle: 'Registro de pré-lançamento',
      benefit1: 'Receber novidades sobre o lançamento.',
      benefit2: 'Saber quando o SmartList estiver disponível na sua região.',
      benefit3: 'Conhecer os recursos de lista inteligente, promoções e fidelidade previstos para o aplicativo.',
      consentLaunchNotice: 'Quero receber o aviso quando o SmartList estiver disponível na minha região.',
      consentPromoEmail: 'Quero receber promoções por e-mail (opcional).',
      consentPromoWhatsApp: 'Quero receber promoções por WhatsApp (opcional).',
      consentPromoSms: 'Quero receber promoções por SMS (opcional).',
      consentChannelsNote:
        'As autorizações de promoções são opcionais e ficam separadas do aviso de lançamento. Todas começam desmarcadas.',
      submit: 'Quero saber do lançamento',
      loading: 'Enviando...',
      successTitle: 'Registro recebido',
      successMessage:
        'Obrigado pelo interesse no SmartList! Seu registro de pré-lançamento foi recebido. Se você autorizou o aviso, informaremos quando estiver disponível na sua região.',
      backHome: 'Voltar ao site',
      failed: 'Não foi possível registrar seu interesse.',
      name: 'Nome',
      namePlaceholder: 'Seu nome completo',
      email: 'E-mail',
      emailPlaceholder: 'seu@email.com',
      phone: 'Telefone',
      countryCode: 'Código do país',
      countryBrazil: 'Brasil (+55)',
      countryPeru: 'Peru (+51)',
      countryUs: 'Estados Unidos (+1)',
      zipCode: 'CEP / ZIP',
      zipCodePlaceholder: '74366-014',
      zipCodeRequired: 'Informe seu CEP / código postal.',
    },
  },
  en: {
    nav: { prelaunch: 'Pre-launch' },
    footer: {
      copyright: '© {year} SmartList.',
      prelaunch: 'Pre-launch list',
      poweredBy: 'Powered by Cart-Mile',
    },
    countdown: {
      label: 'Launching December 5',
      days: 'days',
      hours: 'hours',
      minutes: 'min',
      seconds: 'sec',
      launched: 'It’s today. SmartList is live.',
    },
    share: {
      button: 'Share with your friends',
      text: 'SmartList launches December 5. Your smart shopping list, with recipes and deals. Join the pre-launch list.',
      pageTitle: 'SmartList — Smart shopping list',
      copied: 'Link copied',
      copy: 'Copy link',
      whatsapp: 'WhatsApp',
    },
    home: {
      heroTitle: 'Your smart shopping list. More convenience and benefits for you.',
      heroBody:
        'With SmartList, you organize your shopping with artificial intelligence, discover recipes, and enjoy exclusive offers at participating stores.',
      heroCta: 'Join the pre-launch list',
      heroNote: 'Free to start, with 50 thousand AI tokens per month.',
      heroPhoneAlt: 'SmartList.AI home screen',
      galleryTitle: 'Meet the app',
      galleryBody:
        'Real SmartList.AI screens: category lists, recipes, and deals in an experience designed for mobile.',
      shotList: 'List',
      shotListAlt: 'Shopping list grouped by category',
      shotRecipes: 'Recipes',
      shotRecipesAlt: 'Recipe turning into a shopping list',
      shotDeals: 'Deals',
      shotDealsAlt: 'Deals in SmartList.AI',
      organizeTitle: 'You add the products. SmartList organizes them.',
      organizeBody1:
        'Write what you need to buy and let artificial intelligence sort everything by categories like produce, meat, drinks, and cleaning.',
      organizeBody2: 'Your list stays organized to make shopping easier and help you remember what you need.',
      organizePhoneAlt: 'Shopping list grouped by category',
      recipesTitle: 'Turn ideas into recipes. And recipes into shopping.',
      recipesBody:
        'Tell us what you have at home or the dish you want to cook. SmartList creates a recipe with ingredients and step-by-step instructions.',
      recipesEmphasisLead: 'Missing an ingredient?',
      recipesEmphasis: 'With one tap, recipe products go straight to your shopping list.',
      recipesPhoneAlt: 'Recipe with ingredients ready for the list',
      dealsTitle: 'Your list also opens doors to save.',
      dealsBody1: 'Enjoy exclusive offers and promotions from stores in the SmartList network.',
      dealsBody2: 'More chances to save on the products that are part of your everyday life.',
      dealsPhoneAlt: 'SmartList.AI deals screen',
      campaignsTitle: 'Join in and get a chance to win.',
      campaignsBody:
        'In the SmartList network, you can also enter campaigns, join raffles, and get a chance to win prizes.',
      campaignsEmphasis: 'You choose which campaigns you want to join.',
      campaignsDisclaimer: 'Offers, raffles, and prizes are subject to availability and each campaign’s rules.',
      campaignsPhoneAlt: 'Campaign entries in SmartList.AI',
      freeTitle: 'More ease for your routine. Free to start.',
      freeBodyLead: 'The free plan includes',
      freeBodyStrong: '50 thousand AI tokens per month',
      freeBodyTrail: 'so you can organize lists and generate recipes.',
      freeBody2: 'Organized shopping, kitchen inspiration, and benefits in one platform.',
      ctaTitle: 'Your next purchase starts with a smarter list.',
      ctaBody: 'SmartList is coming. Join the pre-launch list and get notified when it’s available.',
      ctaButton: 'I want to be part of SmartList',
    },
    prelaunch: {
      badge: 'Coming soon',
      title: 'Be among the first to know SmartList!',
      description:
        "We're preparing a smarter way to organize your shopping and discover supermarket deals. Sign up to get launch news and find out when it's available in your region.",
      formTitle: 'Pre-launch registration',
      benefit1: 'Get news about the launch.',
      benefit2: 'Know when SmartList is available in your region.',
      benefit3: 'Learn about the planned smart list, promotions, and loyalty features.',
      consentLaunchNotice: 'I want to be notified when SmartList is available in my region.',
      consentPromoEmail: 'I want promotions by email (optional).',
      consentPromoWhatsApp: 'I want promotions by WhatsApp (optional).',
      consentPromoSms: 'I want promotions by SMS (optional).',
      consentChannelsNote:
        'Promotion authorizations are optional and separate from the launch notice. All boxes start unchecked.',
      submit: 'I want to hear about the launch',
      loading: 'Sending...',
      successTitle: 'Registration received',
      successMessage:
        "Thanks for your interest in SmartList! Your pre-launch registration was received. If you authorized the notice, we'll let you know when it's available in your region.",
      backHome: 'Back to the site',
      failed: 'Could not register your interest.',
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      countryCode: 'Country code',
      countryBrazil: 'Brazil (+55)',
      countryPeru: 'Peru (+51)',
      countryUs: 'United States (+1)',
      zipCode: 'ZIP code',
      zipCodePlaceholder: '90210',
      zipCodeRequired: 'Please enter your ZIP / postal code.',
    },
  },
  es: {
    nav: { prelaunch: 'Prelanzamiento' },
    footer: {
      copyright: '© {year} SmartList.',
      prelaunch: 'Lista de prelanzamiento',
      poweredBy: 'Powered by Cart-Mile',
    },
    countdown: {
      label: 'Lanzamiento el 5 de diciembre',
      days: 'días',
      hours: 'horas',
      minutes: 'min',
      seconds: 'seg',
      launched: 'Es hoy. SmartList ya está disponible.',
    },
    share: {
      button: 'Comparte con tus amigos',
      text: 'SmartList llega el 5 de diciembre. Tu lista de compras inteligente, con recetas y ofertas. Entra en la lista de prelanzamiento.',
      pageTitle: 'SmartList — Lista de compras inteligente',
      copied: 'Enlace copiado',
      copy: 'Copiar enlace',
      whatsapp: 'WhatsApp',
    },
    home: {
      heroTitle: 'Tu lista de compras inteligente. Más practicidad y ventajas para ti.',
      heroBody:
        'Con SmartList, organizas tus compras con inteligencia artificial, descubres recetas y aprovechas ofertas exclusivas en los establecimientos participantes.',
      heroCta: 'Entra en la lista de prelanzamiento',
      heroNote: 'Gratis para empezar, con 50 mil tokens de inteligencia artificial al mes.',
      heroPhoneAlt: 'Pantalla de inicio de SmartList.AI',
      galleryTitle: 'Conoce la aplicación',
      galleryBody:
        'Pantallas reales de SmartList.AI: lista por categoría, recetas y promociones en una experiencia pensada para el celular.',
      shotList: 'Lista',
      shotListAlt: 'Lista de compras agrupada por categoría',
      shotRecipes: 'Recetas',
      shotRecipesAlt: 'Receta que se convierte en lista de compras',
      shotDeals: 'Promociones',
      shotDealsAlt: 'Promociones en SmartList.AI',
      organizeTitle: 'Tú agregas los productos. SmartList los organiza.',
      organizeBody1:
        'Escribe lo que necesitas comprar y deja que la inteligencia artificial separe todo por categorías, como frutas, carnes, bebidas y limpieza.',
      organizeBody2: 'Tu lista queda organizada para facilitar tus compras y ayudarte a recordar lo que necesitas.',
      organizePhoneAlt: 'Lista de compras agrupada por categoría',
      recipesTitle: 'Transforma ideas en recetas. Y recetas en compras.',
      recipesBody:
        'Indica los productos que tienes en casa o el plato que deseas preparar. SmartList genera una receta con los ingredientes y el paso a paso.',
      recipesEmphasisLead: '¿Faltó algún ingrediente?',
      recipesEmphasis: 'Con un clic, los productos de la receta van a tu lista de compras.',
      recipesPhoneAlt: 'Receta con ingredientes listos para la lista',
      dealsTitle: 'Tu lista también abre puertas para ahorrar.',
      dealsBody1: 'Aprovecha ofertas exclusivas y promociones de los establecimientos de la red SmartList.',
      dealsBody2: 'Más oportunidades para ahorrar en los productos de tu día a día.',
      dealsPhoneAlt: 'Pantalla de promociones de SmartList.AI',
      campaignsTitle: 'Participa y ten la oportunidad de ganar.',
      campaignsBody:
        'En la red SmartList, también podrás inscribirte en campañas, participar en sorteos y tener la oportunidad de ganar premios.',
      campaignsEmphasis: 'Tú eliges las campañas en las que quieres participar.',
      campaignsDisclaimer: 'Ofertas, sorteos y premios sujetos a disponibilidad y a las reglas de cada campaña.',
      campaignsPhoneAlt: 'Participaciones en campañas en SmartList.AI',
      freeTitle: 'Más facilidad para tu rutina. Gratis para empezar.',
      freeBodyLead: 'El plan gratuito incluye',
      freeBodyStrong: '50 mil tokens de inteligencia artificial al mes',
      freeBodyTrail: 'para que organices tus listas y generes recetas.',
      freeBody2: 'Compras organizadas, inspiración en la cocina y ventajas en una sola plataforma.',
      ctaTitle: 'Tu próxima compra comienza con una lista más inteligente.',
      ctaBody: 'SmartList está llegando. Entra en la lista de prelanzamiento y recibe aviso cuando esté disponible.',
      ctaButton: 'Quiero ser parte de SmartList',
    },
    prelaunch: {
      badge: 'Próximamente',
      title: '¡Sé de los primeros en conocer SmartList!',
      description:
        'Estamos preparando una forma más inteligente de organizar tus compras y descubrir ofertas de supermercados. Regístrate para recibir noticias del lanzamiento y saber cuándo estará disponible en tu región.',
      formTitle: 'Registro de prelanzamiento',
      benefit1: 'Recibir novedades sobre el lanzamiento.',
      benefit2: 'Saber cuándo SmartList esté disponible en tu región.',
      benefit3: 'Conocer los recursos de lista inteligente, promociones y fidelidad previstos para la aplicación.',
      consentLaunchNotice: 'Quiero recibir el aviso cuando SmartList esté disponible en mi región.',
      consentPromoEmail: 'Quiero recibir promociones por correo (opcional).',
      consentPromoWhatsApp: 'Quiero recibir promociones por WhatsApp (opcional).',
      consentPromoSms: 'Quiero recibir promociones por SMS (opcional).',
      consentChannelsNote:
        'Las autorizaciones de promociones son opcionales y están separadas del aviso de lanzamiento. Todas comienzan desmarcadas.',
      submit: 'Quiero enterarme del lanzamiento',
      loading: 'Enviando...',
      successTitle: 'Registro recibido',
      successMessage:
        '¡Gracias por tu interés en SmartList! Tu registro de prelanzamiento fue recibido. Si autorizaste el aviso, te informaremos cuando esté disponible en tu región.',
      backHome: 'Volver al sitio',
      failed: 'No se pudo registrar tu interés.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      email: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      phone: 'Teléfono',
      countryCode: 'Código del país',
      countryBrazil: 'Brasil (+55)',
      countryPeru: 'Perú (+51)',
      countryUs: 'Estados Unidos (+1)',
      zipCode: 'Código postal / ZIP',
      zipCodePlaceholder: '15001',
      zipCodeRequired: 'Ingresa tu código postal.',
    },
  },
}
