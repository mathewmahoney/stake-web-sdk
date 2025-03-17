import { mergeMessagesMaps } from 'utils-shared/i18n';
import { messagesMap as messagesMapUi } from 'components-ui';

import en from './en';
import zh from './zh';

const messagesMapGame = {
	en,
	zh,
};

const messagesMap = mergeMessagesMaps([messagesMapGame, messagesMapUi]);

export default messagesMap;
