import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.CollectionsControl = Control
  window.CollectionsPreview = Preview
}

export { Control as CollectionsControl, Preview as CollectionsPreview }
