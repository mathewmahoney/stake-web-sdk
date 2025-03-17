<script lang="ts">
	import { type Snippet } from 'svelte';

	import { Authenticate, CarrotLoader, LoadI18n } from 'components-shared';
	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();
</script>

<Authenticate>
	<LoadI18n {messagesMap}>
		{@render props.children()}
	</LoadI18n>
</Authenticate>

<CarrotLoader />
