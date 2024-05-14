import json
import requests

# 定义 URL 地址
url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/IndividualUser'

# 发送 GET 请求并获取响应内容
response = requests.get(url)

# 格式化输出响应内容
print('IndividualUser Response:', json.dumps(json.loads(response.text), indent=4))


# 与上面类似，替换 URL 地址即可
url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/PlatformManager'
response = requests.get(url)
print('PlatformManager Response:', json.dumps(json.loads(response.text), indent=4))


# 替换 URL 地址
url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser'
response = requests.get(url)
print('CompanyUser Response:', json.dumps(json.loads(response.text), indent=4))

url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Product'
response = requests.get(url)
print('CompanyUser Response:', json.dumps(json.loads(response.text), indent=4))