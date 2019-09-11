while True:
    print('Who are you?')
    name = input()
    if name != 'Jonas':
        continue
    print('Hello Jonas. What is the password?')
    password = input()
    if password == '123':
        break
print('access granted') 