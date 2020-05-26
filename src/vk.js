import fetchJsonp from 'fetch-jsonp'
import bridge from '@vkontakte/vk-bridge'

const apiVersion = '5.107'
const token =
  'fcd7d10dfcd7d10dfcd7d10da6fca5fd21ffcd7fcd7d10da21cf9e0cd6060f7bc952157'
const urlParams = new URLSearchParams(window.location.search)
const initGroupId = parseInt(urlParams.get('vk_group_id'))

// Логирует все события нативного клиента в консоль
bridge.subscribe((e) => console.log(e))

// Отправляет событие нативному клиенту
bridge
  .send('VKWebAppInit', {})
  .then(() => {
    const loader = document.getElementById('loader')
    if (!initGroupId) {
      let div = document.createElement('div')
      div.className = 'alert'
      div.style.marginBottom = '10px'
      div.innerHTML =
        '<strong>Ошибка!</strong><br>Приложение может работать только при запуске из сообщества'
      loader.before(div)
    } else {
      document.getElementById('main-form').style.display = 'block'
    }
    loader.style.display = 'none'
  })
  .catch((ex) => {
    console.log(ex)
  })

export async function widgetPreview(rating, userData) {
  const body = rating.map((user) => {
    const item = [
      {
        icon_id: 'id' + user.id,
        text: userData[user.id].name,
      },
      {
        text: user.count,
      },
    ]
    return item
  })
  const result = await bridge
    .send('VKWebAppShowCommunityWidgetPreviewBox', {
      code: `return {
      "title": "Заголовок для виджета",
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
      group_id: initGroupId,
    })
    .catch((er) => console.log('Widget Error!', er))
  return result
}

export async function getUsersData(userIds) {
  const options = {
    v: apiVersion,
    access_token: token,
    user_ids: userIds,
  }
  const result = await callAPI('users.get', options)

  return result
}

export async function getWallPostsIds(groupId, count = 1) {
  const options = {
    v: apiVersion,
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

export async function getLikesFromPost(groupId, postId) {
  const options = {
    v: apiVersion,
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
