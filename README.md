# v-aos

Vue plugin for [AOS (animate on scroll library)](https://github.com/michalsnik/aos)

## Using

### 1. Unpkg
```html
<script src="https://unpkg.com/v-aos"></script>
```

### 2. Package manager

```bash
npm i v-aos --save
```

### 3. Plug-in

```js
import Vue from 'vue'
import VAos from 'v-aos'

Vue.use(VAos);
```

With AOS init settings :

```js
Vue.use(VAos, {
  startEvent: 'DOMContentLoaded',
  duration: 400,
  delay: 100
})
```

### 4. Use in your components

```html
<template>
  <div v-aos:fade-up>Hello world</div>
</template>
```

[List of available animations](https://github.com/michalsnik/aos#animations)

With flags:

```html
<template>
  <div v-aos:fade-up.once>Hello world</div>
</template>
```

With parameters:

```html
<template>
  <div v-aos:fade-up="{ delay: 100, offset: 200 }">Hello world</div>
</template>
```

[List of available options](https://github.com/michalsnik/aos#1-initialize-aos)

### 5. Use with Nuxt

plugins/v-aos.js:

```js
import Vue from 'vue'
import VAos from 'v-aos'

Vue.use(VAos);
```

nuxt.config.js:

```js
plugins: [
  { src: '~/plugins/v-aos', mode: 'client' },
]
```

### 6. Access AOS object

AOS object can be accessed through $aos property in components or through window.AOS

```js
export default {
  mounted() {
    this.$aos.refreshHard()
  }
}
```

### 7. AOS events

```html
<div v-aos:fade-up @aos:in="handleAosIn"></div>
```

[List of available events](https://github.com/michalsnik/aos#js-events)

## License

MIT
