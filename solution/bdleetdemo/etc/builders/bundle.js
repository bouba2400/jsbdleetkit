import {rm, mkdir, cp} from 'node:fs/promises';

try {
	await rm('dist', {recursive: true, force: true});
	await mkdir('dist');
	await cp('src/app', 'dist/app', {recursive: true});
	console.log('copied src/app to dist/app');
	console.log('bundling succeeded');
} catch (error) {
	console.error('bundling failed due to error:', error.message);
}
