# SNS-Service(Full Stack)

Next.js 14(App Router), React를 활용해 **풀스택으로 구현한 SNS 서비스** 입니다. <br/>
팔로잉 유저의 게시물 보기, Drag N Drop을 활용한 새 게시물 등록, 실시간 사용자 검색, 북마크 등을 구현하였습니다. <br/>
<br/>
(아래 이미지를 **클릭**하시면 **큰 화면**으로 보실 수 있습니다.) <br/> <br/>
<img src="https://github.com/user-attachments/assets/2776ca6e-611c-4a29-a3b8-2abdc6e0147d" width="800" style="border: 2px solid red; border-radius: 8px;"/>

## 🔗 Live Demo <br/>
👉 [SNS 서비스 둘러보기](https://instogram-nextjs.vercel.app/) <br/>
<br/>

## 🚀 Key Features
✔ **팔로잉 유저 게시글 보기** – 로그인 사용자가 팔로잉 하는 유저의 게시글 조회<br/>
✔ **좋아요 및 북마크** – 좋아요 및 북마크 시 UI 변경 및 사용자 프로필 페이지에 해당 게시물 저장 <br/>
✔ **즉각적 UI 동기화** – 좋아요 및 댓글 작성 시, Optimistic UI를 활용하여 DB변경과 동시에 즉각적 UI 동기화 <br/>
✔ **댓글 작성 및 조회** – 게시글에 댓글 작성 및 해당 게시물에 다른 사용자가 작성한 댓글 조회 기능 <br/>
✔ **상세 게시글 조회** – 게시글 클릭 시, 모달을 활용해 게시물의 상세 정보 조회 기능 <br/>
✔ **실시간 사용자 조회** – 사용자 닉네임 또는 이름으로 실시간 검색 기능, 팔로워, 팔로잉 수 등 기본 정보 표시 <br/>
✔ **Debounce 활용** – 실시간 사용자 검색 시, 서버 부하를 감소시키기 위해 키워드 작성 완료 후 요청을 보내도록 Debounce 활용 <br/>
✔ **새 게시물 등록** – Drag N Drop으로 이미지를 등록하고 컨텐츠를 작성하여 새 게시글 등록  <br/>
✔ **사용자 프로필 페이지** <br/> &nbsp; &nbsp;&nbsp;- 팔로우 하기, 팔로워 및 게시글 수 조회 <br/> &nbsp; &nbsp;&nbsp;- 사용자가 작성한 게시물, 좋아요 및 북마크한 게시물을 Grid 형태로 조회 <br/>
✔ **간편 로그인** – OAuth2를 활용한 소셜 로그인(카카오, 구글 로그인) 및 게스트 로그인 구현 <br/>
✔ **SEO 최적화** – Dynamic Metadata를 활용하여 페이지 별 SEO최적화 <br/>
✔ **CMS 활용** – 비개발직군도 컨텐츠를 쉽게 관리할 수 있도록, Sanity를 활용하여 데이터 관리 <br/>
✔ **Loading Spinner** – 사용자가 대기하는 시간에 Loading Spinner를 등록하여 사용자 경험 향상 <br/>
<br/>

## 🛠️ Tech Stack
- **✨ Framework, UI Library** - Next.js 14 (App Router), React <br/>
- **📃 Language** - TypeScript <br/>
- **🚥 유닛 테스트** - Jest, Testing-Library <br/>
- **🎯 네트워크 상태 관리** - SWR <br/>
- **🗄️ Database** - CMS with Sanity <br/> 
- **🔑 사용자 인증** - NextAuth.js with JWT(Kakao, Google Login)
- **🎨 스타일링** - Tailwind CSS <br/>
- **📡 RESTful API**
- **🚀 Deployment** - Vercel

<br/>

## 💻 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MyungWanPark/SNS-Project.git
```

### 2️⃣ Install dependencies
```bash
cd SNS-Project
yarn install
```

### 3️⃣ Run the application(개발 환경, .env 파일 필요)

```bash
yarn dev
```
개발 모드 환경: http://localhost:3000

<br/>

## 🏗️ 향후 개선 사항
- ⭐ 스토리 기능 구현
- ⭐ 알림 기능 구현
- ⭐ 대댓글 기능 구현
<br/>

## 📬 Contact & Feedback
👨‍💻 **Developer**: 박명완 <br/>
📧 **Email**: mywanpark@gmail.com <br/>
