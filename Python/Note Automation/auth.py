from boxsdk import DevelopmentClient
import requests

client = DevelopmentClient()

file_path = r'D:\Jos\Bureaublad\Jonas\Projects\Github\Python\Note Automation\box api key.txt'
file_name = 'Test file'
folder_id = '90792190620'

box_file = client.folder(folder_id).upload(file_path, file_name)