function* loop(hub) {
  while (true) {
    const value = hub.pass()
    if (hub.done()) {
      return value
    } else {
      yield value
    }
  }
}

export const create = hub => {
  const iterator = loop(hub)
  return handle

  function handle() {
    const { value, done } = iterator.next()
    return Promise.resolve(value).then(res => ({ res, done }))
  }
}

const queryjoin = query =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

export class Query {
  constructor(...prequery) {
    this.prequery = Object.assign({}, ...prequery)
  }

  string(addition) {
    const query = Object.assign({}, this.prequery, addition)
    return queryjoin(query)
  }
}