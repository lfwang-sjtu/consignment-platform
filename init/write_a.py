import json
import requests

file_path = "E:\\financial product\\consignment-platform\\init\\a.json"

# 尝试使用 utf-8 编码读取文件
try:
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    print("文件读取成功")
except UnicodeDecodeError as e:
    print(f"使用 utf-8 解码失败: {e}")
except json.JSONDecodeError as e:
    print(f"JSON 格式错误: {e}")
except Exception as e:
    print(f"发生了其他错误: {e}")

# 打印数据以验证
print("读取的数据:", data)

headers = {
    'Content-Type': 'application/json'
}

# 发送 IndividualUser 数据
for a in data['a']:
    url = 'http://202.120.40.107:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/test'  # 请替换为 IndividualUser 请求的 URL

    # 打印即将发送的数据
    print("发送的数据:", a)

    try:
        # 使用 json 参数直接传递 Python 字典
        response = requests.post(url, json=a, headers=headers)
        response.raise_for_status()  # 检查请求是否成功
        print('IndividualUser Response:', response.text)
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
