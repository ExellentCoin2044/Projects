import pyttsx3 as tts
import numpy as np

engine = tts.init()

voices = engine.getProperty('voices')
engine.setProperty('voice', voices[2].id)

goodmorning = ['Hello sir.', 'Good seeing you sir.', 'Goodmorning sir']

n = np.random.randint(0, len(goodmorning))

engine.say(goodmorning[n])

engine.runAndWait()
engine.stop()