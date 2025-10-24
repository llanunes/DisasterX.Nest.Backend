import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS
  app.enableCors({
    origin: '*', 
  });

  // Usa a porta do Render ou 3000 como fallback
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 App running on port ${port}`);
}

bootstrap();
