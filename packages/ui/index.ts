import { join } from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'lib/components'),
        prefix: 'UT',
      })
    })
  },
})
