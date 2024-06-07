declare global {
  interface Window {
    testUrl: (url: string) => boolean | null;
    setMagicNumber: (num: number) => void;
  }
}
