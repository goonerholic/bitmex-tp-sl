export interface Options {
  testnet: boolean;
  apiKeyID: string;
  apiKeySecret: string;
  maxTableLen: number;
}

export = BitMEXClient;
declare function BitMEXClient(options: Options): void;

declare namespace BitMEXClient {
  const noSymbolTables: string[];
}

declare class BitMEXClient {
  constructor(options: Options);
  _data: {};
  _keys: {};
  _maxTableLen: number;
  socket: any;
  authenticated: boolean;
  getData(symbol?: string, tableName?: string): Object;
  getTable(tableName: any): Object;
  getSymbol(symbol: any): Object;
  addStream(symbol: string, tableName?: string, callback: Function): any;
  _setupListenerTracking(): void;
  _listenerTree: {};
  subscriptionCount(table: any, symbol: any): any;
  sendSubscribeRequest(table: any, symbol: any): void;
}
