import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.CollectionsControll = Control
  window.CollectionsPreview = Preview
}

export {
  Control as CollectionsControll,
  Preview as CollectionsPreview
}
