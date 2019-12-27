import speech_recognition as sr
import pyttsx3 as tts;

#Listening requirements
r1 = sr.Recognizer() #First recognizer class (Will be used to listen to the mic)
r2 = sr.Recognizer() #Second recognizer class (Will be used to predict text using google)
mic = sr.Microphone() #Microphone to listen to

#Speech requirements
voice = 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\IVONA 2 Voice Joey22' #The voice Simon will be using
speech_engine = tts.init() #Engine to give Simon a mouth to speak
speech_engine.setProperty('voice', voice) #Give Simon the predefined voice

def Simon():
    with mic as source:
        r1.adjust_for_ambient_noise(source) #Adjusting the speeking threshold
        audio = r1.listen(source) #Listening to the mic
    
    try:
        text = r2.recognize_google(audio)
        if text == 'stop':
            speech_engine.say('You stopped the program by saying: stop.') #Say that you stopped the program
            speech_engine.runAndWait()
            exit(0)
        elif text == 'hey Simon':
            speech_engine.say('I am listening')
            speech_engine.runAndWait()
            listen_for_commands()            
    except sr.UnknownValueError:
        speech_engine.say('Sir, I did not understand what you said.') #Say that Simon did not understand what you said
        speech_engine.runAndWait()
    except sr.RequestError as e:
        speech_engine.say('I believe something went wrong, sir.')
        speech_engine.runAndWait()
        print(str(e))

def listen_for_commands():
    with mic as source:
        r1.adjust_for_ambient_noise(source)
        audio = r1.listen(source)
    
    try:
        text = r2.recognize_google(audio)
        if text == 'stop':
            speech_engine.say('You stopped the program by saying: stop.') #Say that you stopped the program
            speech_engine.runAndWait()
            exit(0)
    except sr.UnknownValueError:
        speech_engine.say('Sir, I did not understand what you said.') #Say that Simon did not understand what you said
        speech_engine.runAndWait()
    except sr.RequestError as e:
        speech_engine.say('I believe something went wrong, sir.')
        speech_engine.runAndWait()
        print(str(e))

while True:
    Simon()