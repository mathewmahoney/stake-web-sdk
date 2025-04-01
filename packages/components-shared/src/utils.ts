import { getContext, setContext } from 'svelte';

const NS = '@@dialog';

export const createDialog = () => {
	const stateDialog = {
		open: false,
	};
	const createDialog = { stateDialog };

	setContext(NS, createDialog);

	return createDialog;
};

type Dialog = ReturnType<typeof createDialog>;

export const getDialog = (): Dialog => getContext(NS);
