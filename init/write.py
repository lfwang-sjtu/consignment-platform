import json
import requests

# 读取 JSON 文件
with open('data.json', 'r') as file:
    data = json.load(file)

# 发送 IndividualUser 数据
for user in data['IndividualUser']:
    url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/IndividualUser'  # 请替换为 IndividualUser 请求的 URL
    response = requests.post(url, json=user)
    print('IndividualUser Response:', response.text)

# 发送 PlatformManager 数据
for manager in data['PlatformManager']:
    url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/PlatformManager'  # 请替换为 PlatformManager 请求的 URL
    response = requests.post(url, json=manager)
    print('PlatformManager Response:', response.text)

# 发送 CompanyUser 数据
for company_user in data['CompanyUser']:
    url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser'  # 请替换为 CompanyUser 请求的 URL
    response = requests.post(url, json=company_user)
    print('CompanyUser Response:', response.text)

# 发送 Product 数据
for company_user in data['Product']:
    url = 'http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Product'  # 请替换为 CompanyUser 请求的 URL
    response = requests.post(url, json=company_user)
    print('Product Response:', response.text)
