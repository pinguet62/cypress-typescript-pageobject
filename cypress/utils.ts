type Type<T = {}> = new (...args: any[]) => T;

export function applyMixins(derivedCtor: Type, baseCtors: Type[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!);
        });
    });
}
