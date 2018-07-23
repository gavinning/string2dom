String2dom
---
字符串转dom


### Install
```sh
npm i string2dom --save
```


### Usage
```js
import string2dom from 'string2dom'

// dom: Array<HTMLDivElement>
let dom = string2dom('<div id="a1"></div><div id="a2"></div>')

// page: HTMLDivElement
let page = string2dom('<div id="page"><div class="app"></div></div>')[0]
```