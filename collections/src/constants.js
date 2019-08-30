const getMeta = metaName => {
  const metas = document.getElementsByTagName('meta')
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content')
    }
  }
  return null
}

export const STORE_ID = parseInt(process.env.ECOM_STORE_ID || getMeta('ecom-store-id'), 10)
console.log('--> E-Com Plus Store ID ' + STORE_ID)
