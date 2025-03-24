# SNS-Service(Full Stack)

Next.js, React, SWR을 활용해 **풀스택으로 구현한 SNS 서비스** 입니다. <br/>
팔로잉 유저 피드 보기, Drag N Drop을 활용한 새 피드 등록, 실시간 사용자 검색, 북마크 등을 구현하였습니다. <br/>
<br/>
(아래 이미지를 **클릭**하시면 **큰 화면**으로 보실 수 있습니다.)<br/>
<img src="https://github.com/user-attachments/assets/2776ca6e-611c-4a29-a3b8-2abdc6e0147d" width="800" style="border: 2px solid red; border-radius: 8px;"/>

## 🔗 Live Demo <br/>
👉 [SNS 서비스 둘러보기](https://instogram-nextjs.vercel.app/) <br/>
<br/>

## 🚀 Key Features
✔ **팔로잉 유저 게시글 보기** – 로그인 사용자가 팔로잉 하는 유저의 게시글 조회<br/>
✔ **좋아요 및 북마크** – 좋아요 및 북마크 시 UI 변경 및 사용자 프로필 페이지에 해당 게시물 저장 <br/>
✔ **즉각적 UI 동기화** – 좋아요 시, Optimistic UI를 활용하여 DB변경과 동시에 UI 동기화 <br/>
✔ **댓글 작성 및 조회** – 게시글에 댓글 작성 및 해당 게시물에 다른 사용자가 작성한 댓글 조회 기능 <br/>
✔ **상세 게시글 조회** – 게시글 클릭 시, 모달을 활용해 게시물의 상세 정보 조회 기능 <br/>
✔ **실시간 사용자 조회** – 사용자 닉네임 또는 이름으로 실시간 검색 기능, 팔로워, 팔로잉 수 표시 <br/>
✔ **새 게시물 등록** – Drag N Drop으로 이미지 등록, 컨텐츠 작성하여 새 게시글 등록 기능 <br/>
✔ **사용자 프로필 페이지** –  <br/>
✔ **** – <br/>
✔ **** – <br/>
✔ **** – <br/>
✔ **** – <br/>
✔ **** – <br/>
✔ **** – <br/>
✔ **** – <br/>
<br/>

## 🛠️ Tech Stack

### Frontend
- **✨ UI** - React, MUI <br/>
- **📃 Language** - TypeScript  <br/>
- **⚛️ 네비게이션** - React Router Dom  <br/>
- **🌐 전역 상태 관리** - Redux  <br/>
- **🎯 네트워크 상태 관리** - Tanstack Query  <br/>
- **🎨 스타일링** - Tailwind CSS <br/> 
- **📊 차트 라이브러리** - Apex Chart <br/>

### Backend
- **🌏 서버** - Node.js with Express
- **📃 Language** - TypeScript  <br/>
- **🗄️ Database** - MySQL, Sequelize ORM
- **🔑 사용자 인증** - OAuth2 with Kakao, JWT
- **🧱 MVC architecture**
- **📡 RESTful API**

### Deployment
- **🚀 Frontend** - Netlify
- **🖥️ Backend** - CloudType
- **🗄️ DB** - CloudType
<br/>

## 💻 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MyungWanPark/shopping-mall-frontend.git
git clone https://github.com/MyungWanPark/shopping-mall-backend.git
```

### 2️⃣ Install dependencies
```bash
cd shopping-mall-frontend
npm install
cd shopping-mall-backend
npm install
```

### 3️⃣ Run the application(개발 환경, .env 파일 필요)

### Frontend
```bash
npm run start
```
개발 모드 환경: http://localhost:3000

### Backend
```bash
npm run build
npm run start:dev
```

개발 모드 환경: http://localhost:8080
<br/>
<br/>

## 🏗️ 향후 개선 사항
- ⭐ 결제 기능 구현
- ⭐ 위시리스트, 리뷰 기능 구현
- ⭐ 알림 기능 구현
<br/>

## 📬 Contact & Feedback
👨‍💻 **Developer**: 박명완 <br/>
📧 **Email**: mywanpark@gmail.com <br/>
