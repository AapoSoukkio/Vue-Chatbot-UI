<script setup lang="ts">
import { ref } from 'vue';
import { ChatService } from '@/services/chatService'; 

const messages = ref([{ content: 'Hello! How can I help you today?', sender: 'bot' }]);
const userInput = ref('');

async function handleSendMessage() {
    const trimmedMessage = userInput.value.trim();
    if (!trimmedMessage) return;

    messages.value.push({ content: trimmedMessage, sender: 'user' });
    userInput.value = ''; 

    try {
        const response = await ChatService.sendMessage(trimmedMessage);
        messages.value.push({ content: response.message, sender: 'bot' });
    } catch (error) {
        console.error('Failed to get response from localbot:', error);
    }
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
          @keyup.enter="handleSendMessage"
          class="flex-grow-1"
        ></v-text-field>
        <v-btn color="primary" @click="handleSendMessage">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>