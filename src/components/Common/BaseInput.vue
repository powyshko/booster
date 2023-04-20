<template>
  <div class="base-input">
    <label v-if="label">
      {{label}}
    </label>

    <input
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    label: { type: String, default: '' }
  }
}
</script>