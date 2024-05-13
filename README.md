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
  "status": "3", // 1成功，2失败，3待处理
  "note": "du SE du de"
}
```