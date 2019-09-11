def print_picnic(item_dict, left_width, right_width):
    print('PICNIC ITEMS'.center(left_width + right_width, '-'))
    for k, v in item_dict.items():
        print(k.ljust(left_width, '.') + str(v).rjust(right_width))
        
picnic_items = {'sandwiches': 4, 'apples': 12, 'cups': 4, 'cookies': 8000}

print_picnic(picnic_items, 30, 6)