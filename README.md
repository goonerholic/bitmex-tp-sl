# Bitmex target/stop order generator

Automated target/stop order placer

## Usage

### Initial configuration

1. You must set environment variables for api key and secret.

```
// .env
API_KEY={YOUR_API_KEY}
API_SECRET={YOUR_API_SECRET}
```

2. In the main `index.ts` file, subscribe the currency pair that you want to watch

```typescript
// index.ts
(function main() {
  client.addStream('XBTUSD', 'position', onPositionChange);
})();
```

3. `yarn start` or `npm run start`
