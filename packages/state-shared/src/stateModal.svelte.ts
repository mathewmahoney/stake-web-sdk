type ModalEmpty = null;

type ModalError = {
	name: 'error';
	error: any;
};

type ModalSettings = {
	name: 'settings';
};

type Modal = ModalEmpty | ModalError | ModalSettings;

export const stateModal = $state({
	modal: null as Modal,
});
