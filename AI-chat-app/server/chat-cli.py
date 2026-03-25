from google import genai

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
API_KEY = 'AIzaSyCBOHnRHRSlJbaqF98PKJ8MN3GAbewbImQ'
client = genai.Client(api_key=API_KEY)


while True:
    question = input('\n> You: ')
    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents=question
    )
    print('> Bot:', response.text)
