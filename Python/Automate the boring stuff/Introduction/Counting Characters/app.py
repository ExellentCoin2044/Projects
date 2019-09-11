import pprint

spam = 'Hello everyone, I am just a guy named Jonas, who likes to program in Python'
count = {}

for c in spam:
    count.setdefault(c, 0)
    count[c] += 1

print(pprint.pformat(count))