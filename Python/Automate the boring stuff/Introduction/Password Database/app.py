#! /usr/bin/python3
import sys #Checking the arguments
import pyperclip #Copying the password to the clipboard

passwords = {
    'email'  : 'Hhjkhflqfqs',
    'blog'   : 'gkjgfqgfkfg',
    'luggage': 'gkfgkfgzkfg'
}

if len(sys.argv) < 2:
    print('Usage: give an account\'s email as argument and the password will be automatically copied to your clipboard')
    sys.exit()

account = sys.argv[1]

password = passwords.get(account, None)
if password == None:
    print('account is not in database')
else:
    pyperclip.copy(password)
    print('Password for ' + account + ' is copied to clipboard')