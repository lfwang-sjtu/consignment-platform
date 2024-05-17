# consignment-platform
financial product consignment platform

# individual user
- Product `search` service, searching for deposit products by `keywords`.
- `Viewing` deposit products by category
- `purchasing service`
- Viewing and purchasing deposit and products can be done through `both mobile and web interfaces`

# platform management
- Product management: `Managing product basic attributes` and `CRUD services based on RESTful semantics`, as well as `managing product listing and delisting`
- Customization of atomic services: `Customizing basic atomic services configurations` and generating `atomic service visualizations`.
- `Visual service orchestration`: Orchestrating, re-orchestrating, publishing, and republishing atomic services visually on the client-side pages
- Customization of client-side pages: Designing client-side pages, arranging, re-arranging, publishing, and republishing pages as required.
- `Verification` of various financial companies and setting the validity period for products related to them.


# financial company users:
- They can `upload and define various financial products` through the bank platform
- They can `sign consignment sales agreements` with the bank
- They support `transactions and redemptions` with users
- They engage in `consignment fee` settlement with the bank platform

# Object description
```json
// IndividualUser
{
  "username": "example_user",
  "password": "example_password",
  "balance": 10000, // 用户余额
  "email": "user@example.com",
  "phone": "1234567890",
  "realname": "John Doe",
  "idcard": "123456789012345678", // 身份证
  "birthDate": "1990-01-01",
  "address": "123 Main St, City, Country",
  "joinDate": "2024-01-01",
  "status": "1", // 1表示正常，0表示封禁
  "question": "What is your favorite color?", // 找回密码的问题回答
  "answer": "Blue"
}
// PlatformManager
{
  "username": "example_user",
  "password": "example_password",
  "realname": "John Doe",
  "email": "user@example.com",
  "phone": "1234567890"
}
// CompanyUser
{
  "company": "Vanguard Group",
  "password": "vanguard123",
  "username": "vanguard_admin",
  "email": "admin@vanguard.com",
  "phone": "800-662-2739",
  "address": "100 Vanguard Blvd, Malvern, PA, USA",
  "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
  "status": "1", // 1表示正常，0表示封禁
  "agreement": "This agreement outlines the terms and conditions for Vanguard's products to be sold on the platform.",
  "joinDate": "1975-09-24"
}
// Product
{
    "name": "Stable Growth Fund",
    "description": "This fund aims to provide stable growth opportunities through a diversified investment portfolio for long-term returns.",
    "type": 1,
    "risk": 1,
    "rate": 0.08,
    "minInvest": 500.00,
    "term": 12,
    "manageFee": 0.015,
    "status": 1,
    "createDate": "2023-01-15",
    "belong": {"id": 1}
}

// Transaction
{
  "orderDate": "2024-05-13",
  "type": "1", // 1购买，0赎回
  "amount": "100",
  "status": "3", // 1购买待处理，2购买成功，3赎回待处理，4赎回成功，5购买失败，6赎回失败
  "note": "du SE du de"
}
```
# atomic service orchestration
```json
{
    "Orchestration": [
        {
            "business": "buy",
            "process": ["check_user","confirm_order", "sub_money", "add_tx"]
        },
        {
            "business": "refund",
            "process": ["check_user", "select_order", "add_money", "add_tx"]
        },
    ]
}
```

### 原子服务
```
check_user
要求用户验证身份，用户输入密码，如果密码正确就进入下一步，否则不能进入下一步

confirm_order
显示用户目前的账户余额，并向用户确认“购买基金”/“结算基金”的订单，如果用户确认就进入下一步，如果用户取消就回到主页

add_tx
向Transaction表里添加一条事务信息，状态为1，并向用户返回结果（您的要求已经提交，等待处理云云）

end_tx
更改Transaction的状态为3

earn
向用户展示获得的收益

check_agreement
检查公司是否已经签署协议，如果已经签署，那么进入下一步，否则返回主页

submit_product_info
公司填写基金产品的信息，如果合乎格式，那么进入下一步，否则重新填写或返回主页

check_company
公司身份验证

submit_agreement
提交协议

generateFee
银行生成公司需要付的服务费

handle_tx
读取状态为1，3的事务信息，如果成功，那么设为2或4，否则设置为5或6
```
### 编排设计
```json
{
    "Orchestration": [
        {
            //买
            "business": "buy",  
            //确认订单 验证用户身份 写TX表  减库存
            "process": ["confirm_order", "check_user", "add_tx"]
        },
        {
            //赎回
            "business": "refund",
            "process": ["check_user", "confirm_order", "add_tx"]
        },
        {   
            //上传
            "business": "uploadProduct",
            "process": ["check_company", "check_agreement", "submit_product_info"]
        },
        {   
            //代销协议
            "business": "agreement",
            "process": ["check_company", "submit_agreement"]
        },
        {   
            //
            "business": "makeOrder",
            "process": ["check_company", "update_tx", "pay"]
        },
        {   
            //赎回
            "business": "redemption",
            "process": ["check_company", "update_tx", "earn"]
        },
        {   
            //费用结算
            "business": "fee",
            "process": ["check_company", "generateFee"]
        },
    ]
}

```