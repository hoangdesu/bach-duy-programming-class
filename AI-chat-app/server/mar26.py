import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

load_dotenv()

API_KEY = os.getenv('MY_GEMINI_API_KEY')

client = genai.Client(api_key=API_KEY)

# response = client.models.generate_content(
#     model="gemini-3-flash-preview",
#     contents="How does AI work in a few words?",
#     config=types.GenerateContentConfig(
#         thinking_config=types.ThinkingConfig(thinking_level="low"),
#     ),
# )

# print('res:', response)

# if response.candidates[0].thought:
#     print("--- Thinking Process ---")
#     print(response.candidates[0].thought)
#     print("------------------------")


# for part in response.candidates[0].content.parts:
#     if not part.text:
#         continue
#     if part.thought:
#         print("Thought summary:")
#         print(part.text)
#     else:
#         print("Answer:")
#         print(part.text)


# response = client.models.generate_content(
#     model="gemini-3-flash-preview",
#     config=types.GenerateContentConfig(
#         system_instruction="Answer add a meow at the end of your answer",
#         temperature=0.1,
#         max_output_tokens=1000
#     ),
#     contents="Write me a poem"
# )


# Multimodal inputs

# image = Image.open("./secret.jpg")
# response = client.models.generate_content(
#     model="gemini-3-flash-preview",
#     contents=[image, "What is this?"]
# )
# print(response.text)

# with open('', 'rb') as file:

# my_pdf = client.files.upload(file="Dango-Full.pdf")

# print('> pdf:', my_pdf)

# response = client.models.generate_content(
#     model="gemini-3-flash-preview",
#     contents=[my_pdf, "What song is this? What key and time signature is it in?"]
# )

# print(response.text)

with open('Dango-Full.pdf', 'rb') as file:
    pdf_file = types.Part.from_bytes(data=file.read(), mime_type='application/pdf')
    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=[pdf_file, "What song is this? What key and time signature is it in?"]
    )

    print(response.text)

# Streaming responses

# response = client.models.generate_content_stream(
#     model="gemini-3-flash-preview",
#     contents=["Explain how AI works under 300 words"]
# )

# for chunk in response:
#     print(chunk.text, end="")


# curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:streamGenerateContent?alt=sse" \
#   -H "x-goog-api-key: $GEMINI_API_KEY" \
#   -H 'Content-Type: application/json' \
#   --no-buffer \
#   -d '{
#     "contents": [
#       {
#         "parts": [
#           {
#             "text": "Explain how AI works"
#           }
#         ]
#       }
#     ]
#   }'

# Multi-turn conversations (chat)
# chat = client.chats.create(model="gemini-3-flash-preview")


# response = chat.send_message_stream("I have 2 dogs in my house.")
# for chunk in response:
#     print(chunk.text, end="")

# response = chat.send_message_stream("How many paws are in my house?")
# for chunk in response:
#     print(chunk.text, end="")

# for message in chat.get_history():
#     print(f'role - {message.role}', end=": ")
#     print(message.parts[0].text)

