import json
import requests

# 定义 URL 地址
url = 'http://202.120.40.107:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Orchestration'

# 发送 GET 请求并获取响应内容
response = requests.get(url)

response_data = response.json()

# for item in response_data['data']:
#     item['process'] = item['process'].split(',')

# 格式化输出响应内容
print('Orchestration Response:', json.dumps(response_data, indent=4))

