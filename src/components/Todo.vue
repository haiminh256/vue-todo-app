<script setup lang="ts">
	import { ElButton } from 'element-plus'
	import { Delete } from '@element-plus/icons-vue'
	defineProps({
		name: String,
		id: String
	});
</script>

<template>
	<ElButton type="primary" :key="id" :round="true" class="todoItems" style="
	  display: flex;
	  justify-content: center;
	  align-items: center;	  
	  position: relative;
	  margin: 0;
	  width: 480px;
	  height: 50px;
	  font-size: 20px;
	  border-radius: 8px;
	  padding: 0 50px;
	  --el-button-hover-bg-color: #ff4d4f; 
	  --el-button-hover-text-color: #ffffff; 
	  --el-button-hover-border-color: #ff4d4f;
	">{{name}}
	<Delete style="
		width: 1.5em; 
		height: 1.5em; 
		margin-left: 15em;
	" class="deleteIcon">
	</Delete></ElButton>
</template>

<style scoped>
	.deleteIcon {
		position: absolute;
		right: 20px;
		top: 20%;
		opacity: 0;
		transition: opacity 0.3s;
	}
	.todoItems:hover {
		.deleteIcon {
			opacity: 1;
		}
	}
</style>