<script lang="ts">
	import { stateModal } from 'state-shared';

	import { getContext } from '../context';
	import { i18nDerived } from '../i18n/i18nDerived';
	import SimpleUiButton from './SimpleUiButton.svelte';

	const context = getContext();

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundButtonGeneral' });
		stateModal.modal = { name: 'settings' };
	};
</script>

<SimpleUiButton
	disabled={false}
	{onpress}
	text={i18nDerived.advanced()}
	x={0}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={{ x: 0, y: 1 }}
/>
