import speech_recognition as sr

while True:
    r1 = sr.Recognizer()
    r2 = sr.Recognizer()

    mic = sr.Microphone()

    with mic as source:
        r1.adjust_for_ambient_noise(source)
        print('Say something.')
        audio = r1.listen(source)

    try:
        text = r2.recognize_google(audio)
        if text == 'stop':
            print('You exited the program by saying stop.')
            exit(0)
        print('You said: ' + text)
    except sr.UnknownValueError: 
            print('Could not understand what you said')    
    except sr.RequestError as e: 
        print('Could not request results from Google speech Recognition service;'.format(e))