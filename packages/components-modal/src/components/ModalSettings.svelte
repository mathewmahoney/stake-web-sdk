<script lang="ts">
	import { stateModal, stateSound } from 'state-shared';

	import Base from './Base.svelte';
	import Content from './Content.svelte';
</script>

{#if stateModal.modal?.name === 'settings'}
	<Base onclose={() => (stateModal.modal = null)}>
		<Content maxWidth="100%">
			MASTER VOLUME
			<input
				bind:value={stateSound.volumeValueMaster}
				type="range"
				id="vol"
				name="vol"
				min="0"
				max="100"
			/>
			MUSIC VOLUME
			<input
				bind:value={stateSound.volumeValueMusic}
				type="range"
				id="vol"
				name="vol"
				min="0"
				max="100"
			/>
			SOUND EFFECT VOLUME
			<input
				bind:value={stateSound.volumeValueSoundEffect}
				type="range"
				id="vol"
				name="vol"
				min="0"
				max="100"
			/>
		</Content>
	</Base>
{/if}
