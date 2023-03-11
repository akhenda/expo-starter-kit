declare namespace NodeJS {
  type AppVariant = 'development' | 'rc' | 'preview' | 'production';

  export interface ProcessEnv {
    APP_VARIANT: AppVariant;
  }
}
