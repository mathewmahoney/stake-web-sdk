<script lang="ts">
	type Props = {
		text: string;
		textImages?: { [key: string]: string };
	};

	const props: Props = $props();

	const textWithImages = (value: string) => {
		let modifiedText = value;
		Object.entries(props.textImages!).forEach(([placeHolder, imageUrl]) => {
			modifiedText = modifiedText.replace(
				`<${placeHolder}>`,
				`<img src="${imageUrl}" alt="${placeHolder}" style="display: inline-block; margin: 0 5px" draggable="false"/>`,
			);
		});
		return modifiedText;
	};
</script>

<p class="container-text">
	{@html props.textImages ? textWithImages(props.text) : props.text}
</p>

<style lang="scss">
	.container-text {
		text-align: center;
		white-space: pre-line;
		font-size: 1.2rem;

		display: inline-flex;
		align-items: center;
	}
</style>
