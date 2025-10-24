import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o frontend
  app.enableCors({
    origin: '*', 
  });

  // Porta fornecida pelo Render ou fallback 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 App running on port ${port}`);
}

bootstrap();
