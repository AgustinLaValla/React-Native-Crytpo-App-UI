export type StackRootNavigator = {
    Home: undefined;
    CryptoDetail: { currency: TrendingCurrency };
    Transaction: { currency?: TrendingCurrency | undefined };
}

export type BottomRootNavigator = {
    Home: undefined;
    Portfolio: undefined;
    Transaction: undefined;
    Prices: undefined;
    Settings: undefined;
}

export type TrendingCurrency = {
    id: number;
    currency: string;
    code: string;
    image: any;
    amount: string;
    changes: string;
    type: string;
    description: string;
    chartData: ChartData[];
    wallet: Wallet;
    transactionHistory: TransactionHistory[];
};

export type ChartData = {
    x: number;
    y: number;
}

export type Wallet = {
    value: string;
    crypto: string;
}

export type TransactionHistory = {
    id: number;
    description: string;
    amount: number;
    currency: string;
    type: string;
    date: string;
}