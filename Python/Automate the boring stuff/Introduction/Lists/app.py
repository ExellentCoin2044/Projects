cat_names = []
while True:
    print()
    print("Enter your cat name (or enter nothing if you want to exit)")
    cat_name = input()
    if cat_name == '':
        break
    cat_names += [cat_name]
print('Your cat names are:')
for cat_name in cat_names:
    print(' ' + cat_name)