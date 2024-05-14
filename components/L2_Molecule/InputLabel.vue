<template>
  <div class="flex flex-col space-y-2">
    <L1AtomLabel>{{ label }}</L1AtomLabel>
    <L1AtomInput
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @update:model-value="(val) => $emit('update:modelValue', val)"
    />
    <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  placeholder: String,
  value: String | Number,
  modelValue: String | Number,
  errorMessage: String,
})

defineEmits(['update:modelValue'])
</script>
