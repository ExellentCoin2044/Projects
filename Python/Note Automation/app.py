import os
from datetime import datetime as dt

now = dt.now()
time = now.strftime('%d-%m-%Y')

os.system(f'mkdir {time}')