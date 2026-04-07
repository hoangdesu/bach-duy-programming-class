import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
from datetime import datetime

load_dotenv()

API_KEY = os.getenv('MY_GEMINI_API_KEY')

client = genai.Client(api_key=API_KEY)

# prompt = ("Create an impression of Vietnam")
# response = client.models.generate_content(
#     model="gemini-3.1-flash-image-preview",
#     contents=[prompt],
# )

# for part in response.parts:
#     if part.text is not None:
#         print(part.text)
#     elif part.inline_data is not None:
#         image = part.as_image()
#         image.save("gemini_generated_image_2.png")

# prompt = (
#     "The composition of this image doesnt seem natural. The car is too close to the pavement and it's not in the center. You might wanna clean up the background a bit to make the car pop out"
# )

# image = Image.open("generated_image_2026-03-27 15:46:28.292547.png")

# response = client.models.generate_content(
#     model="gemini-3.1-flash-image-preview",
#     contents=[prompt, image],
# )

# for part in response.parts:
#     if part.text is not None:
#         print(part.text)
#     elif part.inline_data is not None:
#         image = part.as_image()
#         image.save(f"generated_image_{datetime.now()}.png")



# prompt = "Visualize the current weather forecast for the next week in Ho Chi Minh city as a clean, modern weather chart. Add a visual on what I should wear each day"
# aspect_ratio = "16:9" # "1:1","1:4","1:8","2:3","3:2","3:4","4:1","4:3","4:5","5:4","8:1","9:16","16:9","21:9"


# response = client.models.generate_content(
#     model="gemini-3.1-flash-image-preview",
#     contents=prompt,
#     config=types.GenerateContentConfig(
#         response_modalities=['Text', 'Image'],
#         image_config=types.ImageConfig(
#             aspect_ratio=aspect_ratio,
#         ),
#         tools=[{"google_search": {}}]
#     )
# )

# for part in response.parts:
#     if part.text is not None:
#         print(part.text)
#     elif image:= part.as_image():
#         image.save("weather.png")




# import time
# from google import genai
# from google.genai import types


# prompt = """
# A close up of two Asian software guys staring at laptops with monitors full of code.
# One guy shouts out aggressively 'who the fuck wrote this stupid code?'.
# The other guy, with glasses, answers confusingly 'who fucking knows!', then walks away
# """

# operation = client.models.generate_videos(
#     model="veo-3.1-generate-preview",
#     prompt=prompt,

# )

# # Poll the operation status until the video is ready.
# while not operation.done:
#     print("Waiting for video generation to complete...")
#     time.sleep(10)
#     operation = client.operations.get(operation)

# # Download the generated video.
# generated_video = operation.response.generated_videos[0]
# client.files.download(file=generated_video.video)
# generated_video.video.save("dialogue_example_2.mp4")

# print("Done")




prompt = "Create a 30-second cheerful audio clip featuring northen Vietnamese folk music about software engineering"
response = client.models.generate_content(
    model="lyria-3-clip-preview",
    contents=prompt,
    config=types.GenerateContentConfig(
        response_modalities=["AUDIO", "TEXT"],
    ),
)

# print(response)

# Parse the response
for part in response.parts:
    if part.text is not None:
        print(part.text)
    elif part.inline_data is not None:
        with open("audio2.mp3", "wb") as f:
            f.write(part.inline_data.data)
        print("Audio saved to clip.mp3")
    
    
# [0.0:] Cánh đồng lúa xanh mênh mông
# [4.4:] Dòng sông uốn lượn quanh co
# [8.7:] Đàn cò trắng bay lượn trên cao
# [13.1:] Khúc hát dân ca ngọt ngào
# [17.5:] Quê hương mình đẹp biết bao
# [21.8:26.2] Quê hương mình đẹp biết bao
# Caption: A vibrant and cheerful piece of modern Vietnamese Folk music, characterized by a bright, clean production aesthetic that highlights the unique textures of traditional instrumentation. The harmonic and melodic foundation is provided by a Đàn tranh (a Vietnamese zither), playing sparkling, cascading arpeggios that create a shimmering, watery texture throughout the track. The main melody is carried by a female vocalist with a clear, sweet tone and the characteristic gentle vibrato of Vietnamese folk singing. Weaving a delightful counter-melody around the vocal line is a Đàn nhị (a two-stringed fiddle), played with expressive slides and ornamentation. Providing rhythmic pulse and harmony is a Đàn nguyệt (a two-chord lute), strumming bright, cheerful chords, complemented by the crisp, sparkling high-end rhythm of a Đàn sến. The percussion is light and airy, consisting of a sáo trúc (bamboo flute) playing trills and flourishes, and a subtle, gentle rhythm kept by wooden claves (song loan). The entire mix is spacious and warm, with a light reverb that gives a sense of open air and joyous celebration.
# Mosic: 4.5
# BPM: 110.0
# Audio saved to clip.mp3

# [0.0:] Tiếng đàn ngân nga khúc ca tươi vui,
# [4.4:] Anh kỹ sư code phần mềm tuyệt vời.
# [8.7:] Dòng code anh viết, bao công trình mới,
# [13.1:] Xây nhịp cầu đưa ta đến tương lai.
# [17.4:] Công nghệ thông tin, vươn tới muôn nơi,
# [21.8:] Xây đắp cuộc sống, rạng rỡ đất trời!
# Caption: This is a cheerful piece of Northern Vietnamese Folk music, specifically designed as a celebratory anthem. The entire track is built on a vibrant pentatonic scale and driven by a buoyant, optimistic rhythm. The primary melodic instrument is a đàn nhị (a traditional Vietnamese two-stringed fiddle), playing a bright, lyrical melody with characteristic slides and vibrato that carries the main theme. This melody is supported by a rich, interlocking harmonic texture created by a đàn tam thập lục (a hammered dulcimer) playing sparkling, cascading arpeggios that add a shimmering quality to the mid-range. The rhythmic foundation is provided by a combination of traditional percussion: the phách (wooden clappers) marks the beat with a crisp, steady pattern, while a trống (Vietnamese drum) adds joyful, propulsive accents and fills. A đàn bầu (a monochord zither) weaves in long, emotive glissando phrases, echoing and harmonizing with the main vocal line. The vocal performance features a bright, clear female voice, singing with the characteristic joyful and slightly nasal timbre of Northern Vietnamese folk style (hát quan họ). The production is clean and modern, giving each traditional instrument clarity and space within a lush, cohesive mix that feels both authentically folk and grand in scale.
# Mosic: 4.5
# BPM: 110.0
# Audio saved to clip.mp3