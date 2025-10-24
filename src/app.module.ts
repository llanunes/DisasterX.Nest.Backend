import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DisasterAlertsModule } from './modules/disaster-alerts/disaster-alerts.module';
import { NeighborhoodsModule } from './modules/neighborhoods/neighborhoods.module';
import { DisasterCategoriesModule } from './modules/disaster-categories/disaster-category.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      csrfPrevention: false,
      // 👇 o cast aqui permite usar o novo Sandbox mesmo que o type não reconheça
      apollo: {
        sandbox: {
          settings: {
            'editor.theme': 'light',
          },
        },
      },
    } as ApolloDriverConfig),
    DisasterAlertsModule,
    NeighborhoodsModule,
    DisasterCategoriesModule,
  ],
})
export class AppModule {}
