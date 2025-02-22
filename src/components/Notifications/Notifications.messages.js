import { defineMessages } from 'react-intl';

export default defineMessages({
  refreshPage: {
    id: 'cboard.components.Notifications.refreshPage',
    defaultMessage: 'Refresh page'
  },
  cloudSpeakErrorAlert: {
    id: 'cboard.components.Notifications.cloudSpeakErrorAlert',
    defaultMessage:
      'Your internet connection is insufficient to reproduce an online voice properly.'
  },
  changeVoiceOnError: {
    id: 'cboard.components.Notifications.changeVoiceOnError',
    defaultMessage: 'Change the voice'
  },
  cloudVoiceIsSetedAlert: {
    id: 'cboard.components.Notifications.cloudVoiceIsSetedAlert',
    defaultMessage:
      'You are using an online voice. An Internet connection is required.'
  }
});
