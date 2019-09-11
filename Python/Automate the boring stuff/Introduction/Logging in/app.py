print('What is your name?')
name = input()
if name == 'Jonas':
    print()
    print('Hello Jonas')
    print()
    print('What is  the password?')
    password = input()
    if password == '123':
        print('Access granted.')
    else:
        print('Sorry, wrong password.')
else:
    print('Hello Stranger')