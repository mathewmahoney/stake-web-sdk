<script lang="ts">
	import { ResponsiveText, Button, type ButtonProps } from 'components-pixi';
	import { Container, Circle, type TextProps, anchorToPivot } from 'pixi-svelte';

	type Props = Omit<ButtonProps, 'children' | 'sizes'> & {
		text: TextProps['text'];
	};

	const { text, disabled, onpress, ...buttonProps }: Props = $props();
	const sizes = { width: 75, height: 75 };
</script>

<Button {...buttonProps} {sizes} {disabled} {onpress}>
	{#snippet children({ center, hovered, pressed })}
		<Container
			{...center}
			pivot={anchorToPivot({ sizes, anchor: 0.5 })}
			scale={pressed ? 1 : hovered ? 1.1 : 1}
			tint={disabled ? 0x8d8d8d : 0xffffff}
			alpha={disabled ? 0.5 : 1}
		>
			<Circle diameter={sizes.height} backgroundColor={0xffffff} />
			<ResponsiveText
				{text}
				{...center}
				anchor={0.5}
				maxWidth={sizes.width - 10}
				style={{ fontSize: 15, align: 'center' }}
			/>
		</Container>
	{/snippet}
</Button>
