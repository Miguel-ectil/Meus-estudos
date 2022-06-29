<template>
  <q-page padding>
   <p class="caption">Em atendimento</p>
   <div class="row gutter-xs">
     <div class="col-12 col-md-6">
       <q-card>
         <q-card-title>
           Usuários
         </q-card-title>
         <q-card-separator/>
         <q-card-main>
           <q-list
            no-border
            link
           >
             <q-item @click.native="changeUser('Erik')">
               <q-item-side icon="chat_bubble"></q-item-side>
               <q-item-main label="Erik" sublabel="https://schoolofnet.com/"></q-item-main>
             </q-item>

             <q-item @click.native="changeUser('anonimo@0038123')">
               <q-item-side icon="chat_bubble"></q-item-side>
               <q-item-main label="anonimo@0038123" sublabel="https://schoolofnet.com/cursos"></q-item-main>
             </q-item>

           </q-list>
         </q-card-main>
       </q-card>
     </div>
     <div class="col-12 col-md-6">
       <q-card>
         <q-card-title>
           Chat <small class="text-faded">{{ activeChat }}</small>
         </q-card-title>
         <q-card-separator/>
         <q-card-main>

          <q-chat-message
            :name="activeChat"
            avatar="statics/boy-avatar.png"
            :text="['Olá, tem alguém ai?', 'Preciso de uma informação...']"
            stamp="4 minutos atras"
            @click.native="copyToClipboard"
          ></q-chat-message>

          <q-chat-message
            name="Atendente"
            avatar="statics/boy-avatar.png"
            :text="['Claro, estou aqui, em que posso ajudar?']"
            stamp="4 minutos atras"
            sent
            @click.native="copyToClipboard"
          ></q-chat-message>

         </q-card-main>
         <q-card-separator/>
         <q-card-main>
           <q-input
           v-model="message"
           type="textarea"
           float-label="Digite a mensagem aqui..."
           />
         </q-card-main>
       </q-card>
     </div>
   </div>
  </q-page>
</template>

<style>
</style>

<script>
import electron from 'electron';
const { clipboard } = electron;
export default {
  name: 'PageIndex',
  data() {
    return {
      activeChat: "Erik",
      message: null
    }
  },
  methods: {
    changeUser(nome) {
      this.activeChat = nome;
    },
    copyToClipboard (e) {
      clipboard.writeText(e.target.innerText);
      alert('copiado');
    }
  }
}
</script>