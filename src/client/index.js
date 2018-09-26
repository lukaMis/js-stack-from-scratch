// @flow

import 'babel-polyfill'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

const selector = document.querySelector(APP_CONTAINER_SELECTOR)

if (selector) {
  selector.innerHTML = '<h1>Hello Webpack!</h1>'
}
