# Extra options are set only to default values when using registerAsync

## The problem

For a dynamic module built using the configurable module builder:

- When configured using `registerAsync`, [extra-options](https://docs.nestjs.com/fundamentals/dynamic-modules#extra-options) are set to the default value, not the value being provided
  
- When configured using `register`, the extra options are set to the value being provided

## Steps to reproduce

1. Install dependencies with `pnpm i`
2. Run `pnpm start:dev` in the root
3. We see that the `AuthorModule` is not initialised, even though we pass `authorEnabled` to `true` in the `BookModule.registerAsync` configuration
4. Comment out the `registerAsync` configuration, and uncomment the `register` configuration in `app.module.ts`, then we see that the `AuthorModule` is initialised

## What is expected?

The `AuthorModule` should be initialised when we pass `authorEnabled` to `true` in the `BookModule.registerAsync` configuration

What I'm trying to do is import modules depending on config passed in. So in practice I use a ConfigService to pass the right config to the module:

```typescript
 JobsModule.registerAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const billingEnabled = configService.getOrThrow<boolean>('billingEnabled');
    return {
      billingEnabled,
    };
  },
}),
```

But the extra options are not being set correctly when using registerAsync, and I can only use registerAsync because I want to use my ConfigService.
