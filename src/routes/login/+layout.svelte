<script lang="ts">
	import { page } from '$app/stores';

	$: isOnUsernamePage = $page.route.id?.match(/username|photo/g);
	$: isOnPhotoPage = $page.route.id?.includes('photo');
</script>

<nav class="flex justify-center my-6">
	<ul class="steps">
		<a href="/login" class="step step-primary">Sign in</a>
		<a href="/login/username" class="step" class:step-primary={isOnUsernamePage}>Choose username</a>
		<a href="/login/photo" class="step" class:step-primary={isOnPhotoPage}>Upload Photo</a>
	</ul>
</nav>

<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
	<div class="card-body items-center text-center">
		<slot />
	</div>
</main>
