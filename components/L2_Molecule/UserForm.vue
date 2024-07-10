<template>
  <form
    v-bind="$attrs"
    class="w-full flex flex-col space-y-3"
    @submit.prevent="processForm"
  >
    <L2MoleculeInputLabel
      v-if="formProps.type == 'signup'"
      v-model="userForm.name"
      label="Full Name"
      type="name"
      :error-message="errorBag.name"
    />

    <L2MoleculeInputLabel
      v-model="userForm.email"
      label="Email"
      type="email"
      :error-message="errorBag.email"
    />
    <L2MoleculeInputLabel
      v-model="userForm.password"
      label="Password"
      type="password"
      :error-message="errorBag.password"
    />

    <div class="text-center flex justify-between">
      <L1AtomButton class="bg-blue-500 text-white w-56" type="submit">
        {{ formProps.type == 'signin' ? 'Login' : 'Register' }}
      </L1AtomButton>
      <NuxtLink
        class="hover:underline-offset-0"
        :to="formProps.type == 'signin' ? '/signup' : '/signin'"
        >{{ formProps.type == 'signin' ? 'Register' : 'Login' }}</NuxtLink
      >
    </div>
  </form>
</template>

<script setup>
const formProps = defineProps({
  type: {
    type: String,
    validator: (value) => ['signin', 'signup'].includes(value),
  },
})

const userForm = reactive({
  name: '',
  email: '',
  password: '',
})

const { errorBag, login, signUp } = useAuth()

function processForm() {
  if (formProps.type === 'signin') login(userForm)
  else signUp(userForm)
}
</script>
