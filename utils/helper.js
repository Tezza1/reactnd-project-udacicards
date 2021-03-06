// based on course content

import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'Udacicards:notifications'

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(17)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                {
                    title: 'Study reminder!',
                    body: "Don't forget to study today",
                    ios: {
                      sound: true,
                    },
                    android: {
                      sound: true,
                      priority: 'high',
                      sticky: false,
                      vibrate: true
                    }
                 },
                {
                  repeat: 'day',
                  time: tomorrow
                  // for testing -----------------
                  // repeat: 'minute',
                  // time: new Date().getTime() + 10000
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
          .catch(err => console.log(err))
      }
    })
}
