/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Components/Category`; params?: Router.UnknownInputParams; } | { pathname: `/Components/FlashSales`; params?: Router.UnknownInputParams; } | { pathname: `/constants/flashSaleData`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ProductDetails`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/Components/Category`; params?: Router.UnknownOutputParams; } | { pathname: `/Components/FlashSales`; params?: Router.UnknownOutputParams; } | { pathname: `/constants/flashSaleData`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ProductDetails`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/Components/Category${`?${string}` | `#${string}` | ''}` | `/Components/FlashSales${`?${string}` | `#${string}` | ''}` | `/constants/flashSaleData${`?${string}` | `#${string}` | ''}` | `/screens/HomeScreen${`?${string}` | `#${string}` | ''}` | `/screens/ProductDetails${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Components/Category`; params?: Router.UnknownInputParams; } | { pathname: `/Components/FlashSales`; params?: Router.UnknownInputParams; } | { pathname: `/constants/flashSaleData`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ProductDetails`; params?: Router.UnknownInputParams; };
    }
  }
}
