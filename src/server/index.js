// @flow

import compression from 'compression'
import express from 'express'
import type { $Request, $Response } from 'express'

import { WEB_PORT, STATIC_PATH, APP_NAME } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req: $Request, res: $Response) => {
  res.send(renderApp(APP_NAME))
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server running on port ${WEB_PORT} ${
      isProd ? '(production)' : '(development)'
      // eslint-disable-next-line
    }.`
  )
})
