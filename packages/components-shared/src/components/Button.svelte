<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		disabled?: boolean;
		spacing?: 'none' | 'normal' | 'input' | 'primary' | 'mega';
		variant?: 'dark' | 'light' | 'primary' | 'transparent';
		shape?: 'rectangle' | 'rounded' | 'circle';
		border?: 'none' | 'white';
		onclick: () => any;
		children: Snippet;
		'data-test'?: string;
	};

	const {
		disabled = false,
		spacing = 'normal',
		variant = 'primary',
		shape = 'rectangle',
		border = 'none',
		onclick,
		children,
		...rest
	}: Props = $props();
</script>

<button
	class="button spacing-{spacing} variant-{variant} shape-{shape} border-{border}"
	class:disabled
	{disabled}
	{onclick}
	{...rest}
>
	<span class="content">
		{@render children()}
	</span>
</button>

<style lang="scss">
	.button {
		font-family: 'proxima-nova', sans-serif; // no idea why it doesn't catch the style

		display: inline-flex;
		justify-content: center;

		cursor: pointer;
		border-radius: 0.5rem;
		border-width: 0;
		font-size: 1rem;
		font-weight: bold;

		width: 100%;

		transition: 100ms;
	}

	.content {
		display: inline-flex;
		position: relative;
		align-items: center;

		gap: 0.25rem;
	}

	.button.disabled {
		cursor: not-allowed;
		opacity: 0.5;

		& > :global(.content) {
			transform: scale(1) !important;
		}
	}

	// on button press
	.button:active {
		& > :global(.content) {
			transform: scale(0.9);
		}
	}

	// spacing
	.button.spacing-none {
		padding: 0;
	}

	.button.spacing-normal {
		padding: 0.5rem 1rem;
	}

	.button.spacing-input {
		padding: 0.25rem 1rem;
	}

	.button.spacing-primary {
		padding: 0.75rem 1rem;
		font-size: 1.25rem;
	}

	.button.spacing-mega {
		padding: 1.25rem 1rem;
	}

	// variant
	// default
	.button.variant-dark {
		background-color: black;
		color: white;
	}

	.button.variant-primary {
		background-color: var(--primary);
		color: white;
	}

	.button.variant-light {
		background-color: white;
		color: black;
	}

	.button.variant-transparent {
		background-color: transparent;
		color: black;
	}

	// hover
	.button.variant-primary:hover,
	.button.variant-light:hover {
		background-color: var(--primary);
		opacity: 0.7;
	}

	.button.variant-light:hover:focus:active {
		color: white;
	}

	.button.variant-transparent:hover {
		background-color: transparent;
	}

	// shape
	.button.shape-rounded {
		border-radius: 3rem;
	}

	.button.shape-circle {
		border-radius: 5rem;
	}

	// border
	.button.border-white {
		border-width: 1.5px;
		border-style: solid;
		border-color: white;
		&.spacing-input {
			padding: 0.15rem 0.9rem;
		}
	}
</style>
