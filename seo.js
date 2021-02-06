const title = 'Ponder'
const description =
  'Ponder — An app to help creative professionals think better.'

const SEO = {
  title,
  description,
  canonical: 'https://ponder.arhaanb.co',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://ponder.arhaanb.co',
    title,
    description,
    images: [
      {
        url: 'https://ponder.arhaanb.co/ponder.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@arhaan_bahadur',
    site: '@arhaan_bahadur',
    cardType: 'summary_large_image',
  },
}

export default SEO
