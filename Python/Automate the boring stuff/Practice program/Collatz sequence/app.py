
while True:
    print('Enter an integer.')
    try:
        number = int(input())
        break
    except ValueError:
        print('You must enter an integer!')

def collatz(number):
    while number != 1:
        if number % 2 == 0:
            number = number // 2
            print(number)
        else:
            number = 3 * number + 1
            print(number)

collatz(number)