import CMS from 'netlify-cms'
import * as ColorWidget from 'netlify-cms-widget-color'
import { CollectionsControl } from './packages/collections/src/'

CMS.registerWidget('collections', CollectionsControl)
CMS.registerWidget('color', ColorWidget.Control)
