inventory = {'gold coin': 42, 'rope': 1}

def print_inventory(inv):
    print('Inventory:')
    item_total = 0
    for k, v in inv.items():
        item_total += int(v)
        print(str(v) + ' ' + k)

    print('You have ' + str(item_total) + ' itmes in your inventory')

def add_to_inventory(inv, added_items):
    for item in dragon_loot:
        inv.setdefault(item, 0)
        inv[item] += 1
    return inv

dragon_loot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']
inventory = add_to_inventory(inventory, dragon_loot)
print_inventory(inventory)