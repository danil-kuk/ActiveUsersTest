import fetchJsonp from 'fetch-jsonp'
import bridge from '@vkontakte/vk-bridge'

const groupId = -180174909
let access_token = ''
bridge.subscribe((e) => handleBridgeEvent(e))

// Отправляет событие нативному клиенту
bridge.send('VKWebAppInit', {})

function handleBridgeEvent(e) {
  console.log(e)
  const eventType = e.detail.type
  if (eventType == 'VKWebAppGetCommunityTokenResult') {
    access_token = e.detail.data.access_token
  }
}

export async function sendWidget(data) {
  const body = data.slice(0, 10).map((user) => {
    const item = [{
      icon_id: 'id' + user.id,
      text: user.name
    }, {
      text: user.count
    }]
    return item
  })
  let options = {
    v: '5.103',
    access_token: access_token,
    code: `return {
      "title": "Заголовок для виджета",
      "title_url": "vk.com/title_url",
      "head": [
          {
              "text": "Пользователь"
          },
          {
              "text": "Лайки",
          }
      ],
      "body": ${JSON.stringify(body)}
  };`,
    type: 'table',
  }
  const result = await callAPI('appWidgets.update', options)
  console.log(result)
}

const token =
  'fcd7d10dfcd7d10dfcd7d10da6fca5fd21ffcd7fcd7d10da21cf9e0cd6060f7bc952157'

export async function getUsersData(userIds) {
  let options = {
    v: '5.103',
    access_token: token,
    user_ids: userIds,
  }
  const result = await callAPI('users.get', options)
  const red = result.reduce((accumulator, currentValue) => {
    accumulator.push({
      id: currentValue.id,
      name: currentValue.first_name + ' ' + currentValue.last_name,
    })
    return accumulator
  }, [])
  return red
}

export async function getWallPostsIds(count = 1) {
  let options = {
    v: '5.103',
    access_token: token,
    count: count,
    owner_id: groupId,
  }
  const response = await callAPI('wall.get', options)
  const reduce = response.items.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue.id],
    []
  )
  return reduce
}

export async function getLikesFromPost(postId) {
  let options = {
    v: '5.103',
    access_token: token,
    owner_id: groupId,
    type: 'post',
    item_id: postId,
    extended: 0,
  }
  const response = await callAPI('likes.getList', options)
  return response.items
}

async function callAPI(method, options) {
  const querry = new URLSearchParams(options).toString()
  const request = `https://api.vk.com/method/${method}?${querry}`
  const response = await fetchJsonp(request)
  const json = await response.json()
  return json.response
}
