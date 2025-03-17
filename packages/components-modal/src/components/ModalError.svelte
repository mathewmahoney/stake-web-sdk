<script lang="ts">
	import { stateModal } from 'state-shared';

	import Base from './Base.svelte';
	import Content from './Content.svelte';
</script>

{#if stateModal.modal?.name === 'error'}
	<Base persistent onclose={() => (stateModal.modal = null)}>
		<Content maxWidth="100%">
			{@const error = stateModal.modal?.error}
			<span class="text">Sorry, something went wrong.</span>
			<div class="scrollY error-text">
				{#if error}
					{#if error?.error && error?.message}
						<span>{JSON.stringify(error.error || 'unknown')}</span>
						<p>{JSON.stringify(error.message || 'unknown')}</p>
					{:else}
						<p>{error}</p>
					{/if}
				{:else}
					<span>unknown error</span>
				{/if}
			</div>
		</Content>
	</Base>
{/if}

<style lang="scss">
	.text {
		font-weight: bold;
	}

	.error-text {
		font-weight: bold;
		max-height: 100px;
		max-width: 480px;
		border-radius: 8px;
		border: 1px solid red;
		white-space: normal;
		padding: 1rem;
	}
</style>
