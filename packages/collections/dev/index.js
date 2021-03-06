import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { CollectionsControl, CollectionsPreview } from '../src'
const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [
        { name: 'colletions_widget', label: 'Ecomplus Store - Collections Widget', widget: 'test' },
      ],
    }],
  }],
}

CMS.registerWidget('test', CollectionsControl, CollectionsPreview)

init({ config })
