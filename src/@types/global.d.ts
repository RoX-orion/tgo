type AnyLiteral = Record<string, any>;

type NoneToVoidFunction = () => void;

type AnyToVoidFunction = (...args: any[]) => void;

declare module 'pako/dist/pako_inflate' {
    function inflate(...args: any[]): string;
}
