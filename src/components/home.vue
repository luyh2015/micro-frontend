<template>
	<div class="all">
		<!-- top -->
		<div id="top-wrapper">
			<span class="text">MICRO FRONTEND DEMO</span>
		</div>
		<!-- left -->
		<div id="left-wrapper">
			<h2>{{msg}}</h2>
			<ul>
				<li>
					<router-link to="/">home</router-link>
				</li>
				<li>
					<router-link to="/project1">project1</router-link>
				</li>
				<li>
					<router-link to="/project2">project2</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				msg: ''
			}
		},
	}
</script>

<style  type="text/scss" scoped lang="scss">
#top-wrapper {
	position: fixed;
	top: 0;
	left: 150px;
	right: 0;
	height: 65px;
	z-index: 999;
	background-color: #eee;
	text-align: center;
  .text {
    display: inline-block;
    padding-top: 20px;
  }
}

#left-wrapper {
	position: fixed;
	top: 0;
	left: 0;
  padding-top: 20px;
	width: 150px;
	height: 100%;
	z-index: 999;
	background-color: #efa0a0;
	text-align: center;
}

</style>
