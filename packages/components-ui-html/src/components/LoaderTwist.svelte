<script lang="ts">
	import { LoaderBase } from 'components-shared';

	type Props = {
		oncomplete?: () => void;
	};

	const props: Props = $props();

	const TWIST_LOADER_MAX_WIDTH = 200;
	const TWIST_LOADER_BACKGROUND_COLOR = '#000000';
	const TWIST_LOADER_FINISH_ONCE_TIMEOUT = 2000;
	const TWIST_LOADER_SRC =
		'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/loaders/twist.gif';
</script>

<LoaderBase
	maxWidth={TWIST_LOADER_MAX_WIDTH}
	backgroundColor={TWIST_LOADER_BACKGROUND_COLOR}
	timeout={TWIST_LOADER_FINISH_ONCE_TIMEOUT}
	src={TWIST_LOADER_SRC}
	oncomplete={props.oncomplete}
/>
