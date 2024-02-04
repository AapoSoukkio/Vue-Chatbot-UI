<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
  { content: 'Hello! How can I help you today?', sender: 'bot' }
])

const userInput = ref('')

function sendMessage() {
  if (!userInput.value.trim()) return
  messages.value.push({ content: userInput.value, sender: 'user' })
  //TODO: add the logic to process the user input and generate a response 
  userInput.value = '' // Reset input after sending
}
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h5">Localbot</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="(message, index) in messages" :key="index">
            <v-list-item-title v-if="message.sender === 'user'" class="text-right">
              <v-chip color="blue" text-color="white">{{ message.content }}</v-chip>
            </v-list-item-title>
            <v-list-item-title v-else>
              <v-chip color="green" text-color="white">{{ message.content }}</v-chip>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-text-field
          v-model="userInput"
          label="Ask me anything..."
          outlined
          dense
          @keyup.enter="sendMessage"
          class="flex-grow-1"
        ></v-text-field>
        <v-btn color="primary" @click="sendMessage">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>