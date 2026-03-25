import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

API_KEY = os.getenv('MY_GEMINI_API_KEY')

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
# API_KEY = 'AIzaSyCBOHnRHRSlJbaqF98PKJ8MN3GAbewbImQ'
client = genai.Client(api_key=API_KEY)



# while True:
#     question = input('\n> You: ')
#     response = client.models.generate_content(
#         model="gemini-3-flash-preview", contents=question
#     )
#     print('> Bot:', response.text)
#     print('res:', response)


# gemini_chat = client.chats.create(model="gemini-3-flash-preview")

# while True:
#     question = input('\n> You: ')
#     res = gemini_chat.send_message(question)
#     print('> Bot:', res.text)

#     print('res:', res.text)
#     print('chats:', gemini_chat.get_history())


chat_session = [
    types.Content(role='user', parts=[types.Part.from_text(text='my name is brian')]),
    types.Content(role='model', parts=[types.Part.from_text(text='fack you brian')])
]

while True:
    question = input('\n> You: ')
    
    user_content = types.Content(role='user', parts=[types.Part.from_text(text=question)])
    chat_session.append(user_content)
    
    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents=chat_session
    )

    # bot_content = types.Content(role='model', parts=[types.Part.from_text(text=response.text)])
    bot_content = response.candidates[0].content # similar
    chat_session.append(bot_content)
    

    print('> Bot: ', response.text)
    
