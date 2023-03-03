<template>
	<view :res="path" :change:res="reaeeVideoCoverExtractor.loadres" style="width: 0;height: 0;"/>
</template>

<script>
	export default {
		name:'reaeeVideoCoverExtractor',
		props:{
			path:{
				type: String,
				default:''
			}
		},
		methods: {
			success(o) {
				this.$emit('success',o)
			},
			error(e) {
				this.$emit('error',e)
			}
		}
	}
</script>

<script module="reaeeVideoCoverExtractor" lang="renderjs">
	export default {
		methods: {
			loadres(newValue, oldValue, ownerInstance, instance) {
				if(!newValue)return
				const video = document.createElement("video")
				video.addEventListener('loadeddata', async (e) => {
					try {
						const mediaStream = video.captureStream();
						const mediaStreamTracks = mediaStream.getVideoTracks();
						const imageCapture = new ImageCapture(mediaStreamTracks[0]);
						const imageBitmap = await imageCapture.grabFrame()
						const {width, height} = imageBitmap
						const canvas = document.createElement("canvas");
						canvas.setAttribute("width", width);
						canvas.setAttribute("height", height);
						const canvasCtx = canvas.getContext("2d");
						canvasCtx.drawImage(imageBitmap, 0, 0);
						canvas.toBlob(b => {
							const src = URL.createObjectURL(b);
							ownerInstance.callMethod('success', src)
						}, 'image/png', 1)
					} catch (e) {
						console.error(e);
						ownerInstance.callMethod('error', 'other error')
					} finally {
						instance.$el.removeChild(video)
					}
				})
				video.addEventListener('error', e => {
					console.error(e);
					instance.$el.removeChild(video)
					ownerInstance.callMethod('error', 'load error')
				})
				video.style.width = '0'
				video.style.height = '0'
				video.setAttribute('crossorigin', 'anonymous');
				video.setAttribute('src', newValue);
				instance.$el.appendChild(video)
			},
		}
	}
</script>
