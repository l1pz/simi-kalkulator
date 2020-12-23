import App from './App.svelte';

const app = new App({
	target: document.body
});

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
	console.log('CLIENT: service worker registration in progress.');
	navigator.serviceWorker.register('../service-worker.js').then(function () {
		console.log('CLIENT: service worker registration complete.');
	}, function () {
		console.log('CLIENT: service worker registration failure.');
	});
} else {
	console.log('CLIENT: service worker is not supported.');
}

export default app;