import requests


class KluAISDK:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.klu.ai"

    def get_conversations(self):
        url = f"{self.base_url}/conversations"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        response = requests.get(url, headers=headers)
        return response.json()

    def create_conversation(self, name):
        url = f"{self.base_url}/conversations"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        data = {"name": name}
        response = requests.post(url, headers=headers, json=data)
        return response.json()

    def get_messages(self, conversation_id):
        url = f"{self.base_url}/conversations/{conversation_id}/messages"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        response = requests.get(url, headers=headers)
        return response.json()

    def send_message(self, conversation_id, message):
        url = f"{self.base_url}/conversations/{conversation_id}/messages"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        data = {"message": message}
        response = requests.post(url, headers=headers, json=data)
        return response.json()
