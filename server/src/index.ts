import express, { Request, Response } from 'express';
import cors from 'cors'; // TypeScript 사용 시 cors를 import로 가져옴

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// CORS 활성화
app.use(cors());

// 기본 라우트 설정
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Node server!, and watch is working! 컴파일 테스트' });
});

// 서버 실행
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  //db 연결 종료 등 필요한 정리 작업 수행
  server.close(() => {
    console.log('HTTP server closed')
  })
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('HTTP server closed')
  })
}) 