import json
import requests
urlbase = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/'
# 定义 URL 地址
url = urlbase + 'IndividualUser'

# 发送 GET 请求并获取响应内容
response = requests.get(url)

# 格式化输出响应内容
print('IndividualUser Response:', json.dumps(json.loads(response.text), indent=4))


# 与上面类似，替换 URL 地址即可
url = urlbase + 'PlatformManager'
response = requests.get(url)
print('PlatformManager Response:', json.dumps(json.loads(response.text), indent=4))


# 替换 URL 地址
url = urlbase + 'CompanyUser'
response = requests.get(url)
print('CompanyUser Response:', json.dumps(json.loads(response.text), indent=4))

url = urlbase + 'Product'
response = requests.get(url)
print('Product Response:', json.dumps(json.loads(response.text), indent=4))

url = urlbase + 'Transaction'
response = requests.get(url)
print('Transaction Response:', json.dumps(json.loads(response.text), indent=4))