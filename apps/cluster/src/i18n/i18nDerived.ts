import { i18n } from '@lingui/core';

import { i18nDerived as i18nDerivedUi } from 'components-ui';

export const i18nDerived = {
	...i18nDerivedUi,
	home: () => i18n._(i18n.t('HOME')),
	notTranslated: () => i18n._(i18n.t('NOT TRANSLATED')),
};
