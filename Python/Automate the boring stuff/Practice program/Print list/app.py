spam = ['apples', 'bananas', 'tofu', 'cats']

def print_list_as_string(list_):
    for i in range(len(list_) - 1):
        print(list_[i], end=', ')
    print('and ' + list_[len(list_) - 1])

print_list_as_string(spam)