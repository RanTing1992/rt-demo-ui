<template>
  <button class="rt-button" :class="buttonStyle"><slot/></button>
</template>

<script lang="ts" setup>
import "./style/index.less"
import {computed} from "vue"
defineOptions({ name: "rt-button" });

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(()=>{
  return { [`rt-button--${buttonProps.type}`]: buttonProps.type };
})
</script>

