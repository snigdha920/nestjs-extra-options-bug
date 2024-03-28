import { ConfigurableModuleBuilder } from '@nestjs/common';
import { AuthorModule } from '../author/author.module';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder()
    .setExtras(
      {
        authorEnabled: false,
      },
      (definition, extras) => {
        console.log(
          'inside configurable module builder, this is logged first',
          {
            authorEnabled: extras.authorEnabled,
          },
        );
        return {
          ...definition,
          imports: [
            ...(definition.imports ?? []),
            ...(extras.authorEnabled ? [AuthorModule] : []),
          ],
        };
      },
    )
    .build();
