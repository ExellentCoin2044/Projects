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
    r1.adjust_for_ambient_noise(mic) #Adjusting the speeking threshold
    audio = r1.listen(mic) #Listening to the mic
    
    try:
        text = r2.recognize_google(audio)
        if text == 'stop':
            #Say that you stopped the program
        elif text == 'hey Simon':
            #Speak
    except sr.UnknownValueError:
        #Say that Simon did not understand
    except sr.RequestError as e:
        #Say there was an error
        print(str(e))