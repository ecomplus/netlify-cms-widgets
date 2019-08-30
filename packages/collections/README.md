## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-ecomplus-collections
```

```js
import {collectionsControl, collectionsPreview} from "netlify-cms-widget-ecomplus-collections";

CMS.registerWidget("collections", collectionsControl, collectionsPreview);
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-ecomplus-collections@^0.0.1"></script>

<script>
  CMS.registerWidget("collections", collectionsControl, collectionsPreview);
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: collections }
```