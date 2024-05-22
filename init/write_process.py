import json
import requests

# 读取 JSON 文件
with open('process.json', 'r') as file:
    data = json.load(file)

for orchestration in data['Orchestration']:
    process_str = ','.join(orchestration['process'])
    orchestration['process'] = process_str
    url = 'http://202.120.40.107:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Orchestration'
    response = requests.post(url, json=orchestration)
    print('Orchestration Response:', response.text)