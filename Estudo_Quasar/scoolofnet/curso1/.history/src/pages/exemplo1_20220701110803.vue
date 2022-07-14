<template>
  <q-page padding>
    <h3>Formulár</h3>

    <q-form @submit="save" @reset="reset" class="q-gutter-md">

      <q-input outlined v-model="user.name" label="Nome"
        hint="Obrigatório, precisa ter 3 ou mais caracteres"
        :rules="[
          val => !!val || 'Campo obrigatório',
          val => val.length > 2 || 'O seu nome é muito curto'
        ]"> <!--bg-color="blue-6"= cor de fundo, color="white"=-->
        <template v-slot:prepend>
          <q-icon name="label"/>
        </template> 
        <template v-slot:append>
          <q-icon name="account_box"/>
        </template>  
      </q-input>
      <!-- --------------------------------------------------------------- -->
      <q-input outlined v-model="user.gmail" label="Gmail"
        :rules="[
          val => !!val || 'Campo obrigatório', 
          val => /^[a-zA-z\-_]+@[a-zA-z]+\.[a-z]+[a-zA-Z.]*$/.test(val) || 'Gmail inválida'
          ]">

        <template v-slot:prepend> <!--v-slot:append outra opção, o icone ficara no final -->
          <q-icon name="email"/>
        </template>  
      </q-input>
      <!-- --------------------------------------------------------------- -->
      <p>
      <q-toggle 
        v-model="user.newsletter" 
        label="Aceita receber novidades pelo Email?"
        left-label
        checked-icon="check"
        unchecked-icon="clear"/> 
      </p>
      <!-- --------------------------------------------------------------- -->
      <q-btn type="submit" color="primary">Salvar</q-btn>
      <q-btn type="reset" color="secondary" class="q-ml-sm">Resetar</q-btn>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      user: {
        newsletter: false,
      },
    };
  },

  methods: {
    save() {
      this.$q.notify({
        message: `Salvo com sucesso, kkk - <strong>${this.user.name}</strong>`,
        html: true,
      });
    }, 
    reset() {
      this.user = {
        newsletter: true,
      };
    }
  },
  mounted() {
    this.$q.notify.setDefaults({
      position: 'top-right',
      color: 'purple-8'
    });
  }
}
</script>
