from fastapi import FastAPI
from fastapi.responses import StreamingResponse

import ollama

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}


@app.get('/hi')
def this_is_auto_gen():
    return 1


@app.get('/chat')
def chat():
    response = ollama.chat(model='llama3.1:8b', messages=[
        {
            'role': 'user',
            'content': 'wassup?',
        },
    ])

    # print(response['message']['content'])
    return {'response': response['message']['content']}


def generate_chat():
    stream = ollama.chat(
        model='llama3.1:8b',
        messages=[
            {'role': 'user', 'content': 'what is ca phe sua da'}],
        stream=True,
        options={
            'temperature': 0.9,
            'num_ctx': 4096,
            'top_p': 0.95
        }
    )

    for chunk in stream:
        # yield chunk['message']['content'] #still ok, but not following sse format
        yield f"data: {chunk['message']['content']}\n\n"  # SSE format


@app.get('/stream')
def stream():
    return StreamingResponse(generate_chat(), media_type="text/event-stream")
